/**
 * Streaming chat endpoint for the portfolio chatbot.
 *
 * Architecture:
 * - System prompt = instructions + KB, with cache_control on the last block.
 *   ~4K tokens cached after first request → ~10x cheaper inputs on every
 *   turn after warm-up.
 * - claude-sonnet-4-6, max_tokens 1024 (concise responses), no thinking.
 * - Streaming via SSE — server enqueues `data: {...}\n\n` lines, client
 *   reads response.body as a ReadableStream and parses.
 * - Rate limit: 30 requests/hour per IP, in-memory.
 * - Input validation: max 500 chars per user message, max 20 turns of
 *   history, role alternation enforced.
 */

import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';
import { z } from 'zod';
import { buildSystemPrompt } from '@/lib/chatbot/system-prompt';
import { checkRateLimit, checkDailyLimit } from '@/lib/chatbot/rate-limit';
import { logChat } from '@/lib/chatbot/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_USER_MESSAGE_CHARS = 500;
const MAX_HISTORY_TURNS = 20;
const MODEL = 'claude-sonnet-4-6';
const MAX_TOKENS = 1024;

const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(MAX_USER_MESSAGE_CHARS),
});

const RequestSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(MAX_HISTORY_TURNS),
});

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  return 'unknown';
}

// Allow only requests originating from our own site. Doesn't stop a
// determined attacker calling from curl/Node (they can spoof the header),
// but blocks the easy case of a third-party browser script abusing the
// endpoint while users browse another site.
const ALLOWED_ORIGINS = new Set([
  'https://kevinreyesv.dev',
  'https://www.kevinreyesv.dev',
]);
const ALLOWED_ORIGIN_PATTERNS = [/^https:\/\/[a-z0-9-]+\.vercel\.app$/];

function isAllowedOrigin(req: NextRequest): boolean {
  if (process.env.NODE_ENV === 'development') return true;
  const origin = req.headers.get('origin');
  if (origin) {
    if (ALLOWED_ORIGINS.has(origin)) return true;
    return ALLOWED_ORIGIN_PATTERNS.some((p) => p.test(origin));
  }
  // Some browsers/transports omit Origin on same-origin requests; fall
  // back to Referer with a host check.
  const referer = req.headers.get('referer');
  if (referer) {
    try {
      const url = new URL(referer);
      const refOrigin = `${url.protocol}//${url.host}`;
      if (ALLOWED_ORIGINS.has(refOrigin)) return true;
      return ALLOWED_ORIGIN_PATTERNS.some((p) => p.test(refOrigin));
    } catch {
      return false;
    }
  }
  return false;
}

function sseEncode(data: unknown): Uint8Array {
  return new TextEncoder().encode(`data: ${JSON.stringify(data)}\n\n`);
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Chatbot is not configured.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Layer 0: only accept requests from the site itself or Vercel previews.
  if (!isAllowedOrigin(req)) {
    return new Response(
      JSON.stringify({ error: 'Forbidden.' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Layer 1: per-IP rate limit (in-memory, cheap, stops casual hammering).
  const ip = getClientIp(req);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    const retryAfter = Math.ceil((limit.resetAt - Date.now()) / 1000);
    return new Response(
      JSON.stringify({
        error: 'Rate limit reached. Try again later.',
        retryAfter,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(retryAfter),
        },
      },
    );
  }

  // Layer 2: global daily cap (Postgres-backed, cold-start safe).
  const daily = await checkDailyLimit();
  if (!daily.allowed) {
    return new Response(
      JSON.stringify({
        error: 'Daily request limit reached. Please try again tomorrow.',
      }),
      {
        status: 503,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '3600',
        },
      },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: 'Invalid request shape.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const { messages } = parsed.data;

  if (messages[0].role !== 'user') {
    return new Response(
      JSON.stringify({ error: 'First message must be from user.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }
  if (messages[messages.length - 1].role !== 'user') {
    return new Response(
      JSON.stringify({ error: 'Last message must be from user.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const userAgent = req.headers.get('user-agent');

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let assistantText = '';
      try {
        const apiStream = client.messages.stream({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: buildSystemPrompt(),
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        });

        apiStream.on('text', (delta) => {
          assistantText += delta;
          controller.enqueue(sseEncode({ type: 'text', text: delta }));
        });

        const finalMessage = await apiStream.finalMessage();

        const usage = {
          input_tokens: finalMessage.usage.input_tokens,
          output_tokens: finalMessage.usage.output_tokens,
          cache_read_input_tokens:
            finalMessage.usage.cache_read_input_tokens ?? 0,
          cache_creation_input_tokens:
            finalMessage.usage.cache_creation_input_tokens ?? 0,
        };

        controller.enqueue(
          sseEncode({
            type: 'done',
            stop_reason: finalMessage.stop_reason,
            usage,
          }),
        );
        controller.close();

        // Persist the conversation. logChat is best-effort and silently
        // skips if DATABASE_URL/IP_HASH_SALT are unset.
        await logChat({
          ip,
          language: null,
          messages: [
            ...messages,
            { role: 'assistant' as const, content: assistantText },
          ],
          usage,
          stop_reason: finalMessage.stop_reason,
          user_agent: userAgent,
        });
      } catch (error) {
        const message =
          error instanceof Anthropic.APIError
            ? `Anthropic API error ${error.status}`
            : 'Unexpected server error';
        controller.enqueue(sseEncode({ type: 'error', error: message }));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  });
}
