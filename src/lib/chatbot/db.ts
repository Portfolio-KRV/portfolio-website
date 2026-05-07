/**
 * Chat logging to Neon Postgres.
 *
 * Logs are append-only — one row per completed assistant response (i.e. per
 * full request/response cycle of /api/chat). Nothing is logged if the
 * DATABASE_URL or IP_HASH_SALT env vars are missing — the chatbot keeps
 * working, just without persistence.
 *
 * Privacy: the raw IP never hits the database. We store SHA-256(ip + salt)
 * truncated to 16 chars. Rotating IP_HASH_SALT in Vercel invalidates all
 * correlation history.
 *
 * Schema: see migrations/001_chat_logs.sql
 */

import { createHash } from 'crypto';
import { neon } from '@neondatabase/serverless';

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

function detectLanguage(messages: ChatLogEntry['messages']): 'en' | 'es' | null {
  // Look at the most recent user message; cheap heuristic via Spanish-only chars.
  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  if (!lastUser) return null;
  return /[áéíóúñ¿¡]/i.test(lastUser.content) ? 'es' : 'en';
}

export async function logChat(entry: ChatLogEntry): Promise<void> {
  const dbUrl = process.env.DATABASE_URL;
  const salt = process.env.IP_HASH_SALT;
  if (!dbUrl || !salt) {
    // Logging not configured — silently skip.
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
    // Never fail the user request because logging failed.
    console.error('[chat-log] Failed to insert chat log:', err);
  }
}
