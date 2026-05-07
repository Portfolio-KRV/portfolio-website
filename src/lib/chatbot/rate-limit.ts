/**
 * Simple in-memory rate limiter, keyed by IP.
 *
 * Vercel cold starts will reset this (each serverless instance has its own
 * Map), but for a portfolio chatbot that's acceptable — abuse vectors are
 * limited and cost is bounded by Anthropic's own per-key rate limits.
 *
 * If abuse becomes a problem, swap this for @upstash/ratelimit + Redis.
 */

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
