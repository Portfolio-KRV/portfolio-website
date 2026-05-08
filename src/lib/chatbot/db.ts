/**
 * Chat logging to Neon Postgres.
 *
 * Append-only — one row per completed assistant response. Logging silently
 * skips when DATABASE_URL or IP_HASH_SALT is unset; the chatbot keeps
 * working.
 *
 * Privacy: the raw IP never hits the database. We store
 * SHA-256(ip + salt) truncated to 16 chars. Rotating IP_HASH_SALT in
 * Vercel invalidates correlation history.
 *
 * Schema: see migrations/001_chat_logs.sql
 */

import { createHash } from 'crypto';
import { neon } from '@neondatabase/serverless';
import { franc } from 'franc-min';

interface UsageInfo {
  input_tokens: number;
  output_tokens: number;
  cache_read_input_tokens: number;
  cache_creation_input_tokens: number;
}

export interface ChatLogEntry {
  ip: string;
  language: 'en' | 'es' | null;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  usage: UsageInfo | null;
  stop_reason: string | null;
  user_agent: string | null;
}

function hashIp(ip: string, salt: string): string {
  return createHash('sha256').update(`${ip}:${salt}`).digest('hex').slice(0, 16);
}

// Fallback for messages too short for franc to classify (~3-5 chars).
// Picks up obvious Spanish-only chars without depending on the model.
const ES_FALLBACK_CHARS = /[áéíóúñ¿¡]/i;

function detectLanguage(messages: ChatLogEntry['messages']): 'en' | 'es' | null {
  // Look at the most recent user message — conversation can switch
  // languages mid-flow and the latest turn is the most reliable signal.
  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  if (!lastUser) return null;

  const text = lastUser.content;
  // Restrict to en/es so franc can't pick exotic candidates (Swahili,
  // Portuguese, Uzbek) for short texts. Trade-off: if a user writes in
  // French we'll still bucket them as en or es — acceptable since this
  // field is just for analytics, not behavior.
  const code = franc(text, { only: ['eng', 'spa'] });
  if (code === 'spa') return 'es';
  if (code === 'eng') return 'en';
  // 'und' = too short or no signal. Fall back to a cheap accent check.
  return ES_FALLBACK_CHARS.test(text) ? 'es' : 'en';
}

export async function logChat(entry: ChatLogEntry): Promise<void> {
  const dbUrl = process.env.DATABASE_URL;
  const salt = process.env.IP_HASH_SALT;
  if (!dbUrl || !salt) {
    return;
  }

  try {
    const sql = neon(dbUrl);
    const ip_hash = hashIp(entry.ip, salt);
    const language = entry.language ?? detectLanguage(entry.messages);
    const turn_count = entry.messages.filter((m) => m.role === 'user').length;

    await sql`
      INSERT INTO chat_logs (
        ip_hash, language, messages, turn_count,
        input_tokens, output_tokens, cache_read_tokens, cache_creation_tokens,
        stop_reason, user_agent
      ) VALUES (
        ${ip_hash}, ${language}, ${JSON.stringify(entry.messages)}::jsonb, ${turn_count},
        ${entry.usage?.input_tokens ?? null},
        ${entry.usage?.output_tokens ?? null},
        ${entry.usage?.cache_read_input_tokens ?? null},
        ${entry.usage?.cache_creation_input_tokens ?? null},
        ${entry.stop_reason}, ${entry.user_agent}
      )
    `;
  } catch (err) {
    console.error('[chat-log] Failed to insert chat log:', err);
  }
}
