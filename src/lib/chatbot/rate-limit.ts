/**
 * Two-layer rate limiting for /api/chat:
 *
 * 1. Per-IP, in-memory: 30 req/h. Cheap and stops casual hammering.
 *    Vercel cold starts reset the Map, so a patient attacker can bypass.
 *    That's why we also have layer 2.
 *
 * 2. Global daily cap, persisted in Postgres: bounds total cost for the
 *    day. One row per UTC date in `rate_limit_global` (see
 *    migrations/002_rate_limit_global.sql). Cold-start safe.
 *
 * If abuse becomes a problem, swap layer 1 for @upstash/ratelimit + Redis.
 */

import { neon } from '@neondatabase/serverless';

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 30; // per IP per hour

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt < now) {
    const fresh = { count: 1, resetAt: now + WINDOW_MS };
    buckets.set(ip, fresh);
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt: fresh.resetAt };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  return {
    allowed: true,
    remaining: MAX_REQUESTS - bucket.count,
    resetAt: bucket.resetAt,
  };
}

// Periodically prune expired buckets so the Map doesn't grow unbounded.
// Runs on first import; harmless on Vercel (instance lifecycle is short anyway).
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, bucket] of buckets) {
      if (bucket.resetAt < now) buckets.delete(ip);
    }
  }, WINDOW_MS).unref?.();
}

// ────────────────────────────────────────────────────────────────────────
// Layer 2 — Global daily cap (Postgres-backed)
// ────────────────────────────────────────────────────────────────────────

const DEFAULT_DAILY_CAP = 1000;
const MAX_DAILY_REQUESTS = Number.parseInt(
  process.env.MAX_DAILY_REQUESTS ?? String(DEFAULT_DAILY_CAP),
  10,
);

export interface DailyLimitResult {
  allowed: boolean;
  count: number;
  limit: number;
}

/**
 * Atomically increment today's counter and return the new value.
 *
 * The increment runs even on the request that exceeds the cap — the few
 * extra increments are negligible and avoid race conditions you'd hit
 * with a check-then-increment pattern. The caller checks `allowed`.
 *
 * Fail-open: if `DATABASE_URL` is unset (e.g. preview without DB) or the
 * DB query fails, we let the request through. Per-IP rate limiting still
 * applies as a backstop.
 */
export async function checkDailyLimit(): Promise<DailyLimitResult> {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    return { allowed: true, count: 0, limit: MAX_DAILY_REQUESTS };
  }

  try {
    const sql = neon(dbUrl);
    const rows = (await sql`
      INSERT INTO rate_limit_global (day, request_count, updated_at)
      VALUES (CURRENT_DATE, 1, NOW())
      ON CONFLICT (day) DO UPDATE
      SET request_count = rate_limit_global.request_count + 1,
          updated_at = NOW()
      RETURNING request_count
    `) as Array<{ request_count: number }>;

    const count = rows[0]?.request_count ?? 0;
    return {
      allowed: count <= MAX_DAILY_REQUESTS,
      count,
      limit: MAX_DAILY_REQUESTS,
    };
  } catch (err) {
    console.error('[daily-cap] DB error, failing open:', err);
    return { allowed: true, count: 0, limit: MAX_DAILY_REQUESTS };
  }
}
