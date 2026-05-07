-- Daily request cap for /api/chat. One row per UTC date.
-- Run once on the Neon database before this is enforced in production.
-- Execute via: Vercel Storage dashboard → SQL editor.

CREATE TABLE IF NOT EXISTS rate_limit_global (
  day DATE PRIMARY KEY,
  request_count INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
