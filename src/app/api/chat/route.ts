/**
 * Streaming chat endpoint for the portfolio chatbot.
 *
 * Architecture:
 * - System prompt = instructions + KB (cached for 1h) + optional page
 *   context (un-cached suffix). The 1h TTL is a much better fit than the
 *   default 5m for a low-traffic portfolio.
 * - claude-sonnet-4-6, max_tokens 1024, no thinking, streaming via SSE.
 * - Defense in depth: Origin allowlist → per-IP rate limit (in-memory) →
 *   global daily cap (Postgres).
 * - Client abort propagates to Anthropic so we don't keep generating
 *   tokens the user will never see.
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
const MAX_PATHNAME_CHARS = 200;
const MODEL = 'claude-sonnet-4-6';
const MAX_TOKENS = 1024;

const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(MAX_USER_MESSAGE_CHARS),
});

const RequestSchema = z.object({
  messages: z
    .array(MessageSchema)
    .min(1)
    .max(MAX_HISTORY_TURNS)
    .refine(
      (msgs) =>
        msgs.length % 2 === 1 &&
        msgs.every((m, i) => (i % 2 === 0 ? m.role === 'user' : m.role === 'assistant')),
      {
        message:
          'Messages must alternate user → assistant starting with user, ending on user.',
      },
    ),
  // Path the user is currently on. Used as a soft hint to the model
  // ("user is on /projects/clustering, tailor accordingly"). Optional —
  // older clients without this field still work.
  pathname: z.string().max(MAX_PATHNAME_CHARS).optional(),
});

// Behind a proxy (Cloudflare → Vercel), pick the most trusted source first.
// `cf-connecting-ip` is set by Cloudflare with the real client IP and can't
// be spoofed by the client. `x-real-ip` is set by Vercel similarly. Only
// fall back to `x-forwarded-for[0]` when neither is present, since XFF is
// trivially spoofable (an attacker can prepend any value).
function getClientIp(req: NextRequest): string {
  const cf = req.headers.get('cf-connecting-ip');
  if (cf) return cf.trim();
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return 'unknown';
}

const ALLOWED_ORIGINS = new Set([
  'https://kevinreyesv.dev',
  'https://www.kevinreyesv.dev',
]);
const ALLOWED_ORIGIN_PATTERNS = [
  /^https:\/\/portfolio-website-[a-z0-9-]+\.vercel\.app$/,
];

function isAllowedOrigin(req: NextRequest): boolean {
  if (process.env.NODE_ENV === 'development') return true;
  const origin = req.headers.get('origin');
  if (origin) {
    if (ALLOWED_ORIGINS.has(origin)) return true;
    return ALLOWED_ORIGIN_PATTERNS.some((p) => p.test(origin));
  }
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

  if (!isAllowedOrigin(req)) {
    return new Response(
      JSON.stringify({ error: 'Forbidden.' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } },
    );
  }

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

  const { messages, pathname } = parsed.data;

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const userAgent = req.headers.get('user-agent');

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let assistantText = '';
      try {
        const apiStream = client.messages.stream(
          {
            model: MODEL,
            max_tokens: MAX_TOKENS,
            system: buildSystemPrompt(pathname),
            messages: messages.map((m) => ({ role: m.role, content: m.content })),
          },
          { signal: req.signal },
        );

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
        // Client disconnected mid-stream — nothing to send back, just stop.
        if (req.signal.aborted) {
          controller.close();
          return;
        }
        const isApiErr = error instanceof Anthropic.APIError;
        const message = isApiErr
          ? `Anthropic API error ${error.status}`
          : 'Unexpected server error';
        // Log full detail server-side for debugging; client gets the safe
        // generic message above.
        console.error('[chat] stream error:', error);
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
