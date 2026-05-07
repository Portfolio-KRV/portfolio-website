-- Run once on the Neon database before the chatbot endpoint can log.
-- Execute via: Vercel Storage dashboard → SQL editor, or `psql $DATABASE_URL`.

CREATE TABLE IF NOT EXISTS chat_logs (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  -- SHA-256(ip + salt) truncated to 16 chars. Lets us count unique visitors
  -- without storing raw IPs. Salt rotation invalidates correlation history.
  ip_hash TEXT NOT NULL,
  -- Detected/preferred language at request time ('en' | 'es').
  language TEXT,
  -- Full conversation as JSON array: [{"role": "user"|"assistant", "content": "..."}, ...]
  messages JSONB NOT NULL,
  -- Number of user turns in this conversation (= ceil(messages.length / 2)).
  turn_count INT NOT NULL,
  -- Anthropic usage from finalMessage().
  input_tokens INT,
  output_tokens INT,
  cache_read_tokens INT,
  cache_creation_tokens INT,
  -- Stop reason ('end_turn', 'max_tokens', 'refusal', etc.).
  stop_reason TEXT,
  -- Browser UA — useful to distinguish mobile vs desktop. Optional.
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_chat_logs_created_at ON chat_logs (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_logs_ip_hash ON chat_logs (ip_hash);
