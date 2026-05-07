'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useI18n } from '@/lib/i18n-context';

// Linkify assistant messages: convert internal portfolio paths, external URLs,
// and emails into clickable links. User messages stay as plain text.
const LINK_PATTERN =
  /(\/(?:about|experience|projects|publications|contact)(?:\/[a-z0-9-]+(?:\/demo)?)?)|(https?:\/\/[^\s)]+)|([\w.+-]+@[\w-]+\.[\w.-]+)/g;

function renderAssistantContent(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [whole, internalPath, externalUrl, email] = match;
    const linkClass = 'underline underline-offset-2 hover:text-[var(--accent-primary)]';
    if (internalPath) {
      nodes.push(
        <Link key={match.index} href={internalPath} className={linkClass}>
          {whole}
        </Link>,
      );
    } else if (externalUrl) {
      nodes.push(
        <a
          key={match.index}
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {whole}
        </a>,
      );
    } else if (email) {
      nodes.push(
        <a key={match.index} href={`mailto:${email}`} className={linkClass}>
          {whole}
        </a>,
      );
    }
    lastIndex = match.index + whole.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface UiLabels {
  buttonAria: string;
  title: string;
  subtitle: string;
  emptyHeading: string;
  emptyExamples: string[];
  inputPlaceholder: string;
  sendAria: string;
  closeAria: string;
  resetLabel: string;
  errorGeneric: string;
  errorRateLimit: string;
  thinking: string;
}

const LABELS: Record<'en' | 'es', UiLabels> = {
  en: {
    buttonAria: 'Open chat about Kevin',
    title: 'Ask about Kevin',
    subtitle: 'Portfolio assistant · answers from his work and projects',
    emptyHeading: 'What would you like to know?',
    emptyExamples: [
      "What's Kevin's current role?",
      'Tell me about his IEEE paper',
      'How can I contact him?',
    ],
    inputPlaceholder: 'Ask anything about Kevin…',
    sendAria: 'Send message',
    closeAria: 'Close chat',
    resetLabel: 'New conversation',
    errorGeneric: 'Something went wrong. Please try again.',
    errorRateLimit: 'Too many messages. Try again in a bit.',
    thinking: 'Thinking…',
  },
  es: {
    buttonAria: 'Abrir chat sobre Kevin',
    title: 'Pregunta sobre Kevin',
    subtitle: 'Asistente del portfolio · responde desde su trabajo y proyectos',
    emptyHeading: '¿Qué te gustaría saber?',
    emptyExamples: [
      '¿Cuál es el rol actual de Kevin?',
      'Cuéntame sobre su paper en IEEE',
      '¿Cómo lo puedo contactar?',
    ],
    inputPlaceholder: 'Pregunta lo que quieras sobre Kevin…',
    sendAria: 'Enviar mensaje',
    closeAria: 'Cerrar chat',
    resetLabel: 'Nueva conversación',
    errorGeneric: 'Algo salió mal. Por favor intenta de nuevo.',
    errorRateLimit: 'Demasiados mensajes. Intenta de nuevo en un rato.',
    thinking: 'Pensando…',
  },
};

const STORAGE_KEY = 'portfolio-chat-history';
const MAX_HISTORY = 20;
const INPUT_LIMIT = 500;

export function ChatWidget() {
  const { language } = useI18n();
  const labels = LABELS[language];
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Mount guard — avoids flash before i18n + localStorage hydrate.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load persisted conversation on mount. Drop any empty-content placeholder
  // (e.g. an assistant entry left behind by a refresh during streaming).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const cleaned = parsed.filter(
            (m: unknown): m is ChatMessage =>
              !!m &&
              typeof m === 'object' &&
              'role' in m &&
              'content' in m &&
              typeof (m as ChatMessage).content === 'string' &&
              (m as ChatMessage).content.trim().length > 0,
          );
          setMessages(cleaned.slice(-MAX_HISTORY));
        }
      }
    } catch {
      // ignore corrupted storage
    }
  }, []);

  // Persist — never store empty-content messages (would 400 on next request).
  useEffect(() => {
    try {
      const cleaned = messages
        .filter((m) => m.content.trim().length > 0)
        .slice(-MAX_HISTORY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    } catch {
      // quota or disabled storage; ignore
    }
  }, [messages]);

  // Auto-scroll on new content
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, streaming]);

  // Focus input on open
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Cleanup any in-flight stream on unmount
  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  // Auto-resize textarea up to max-h-32 (128px)
  useEffect(() => {
    const ta = inputRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight, 128)}px`;
  }, [input]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    setError(null);

    const userMsg: ChatMessage = { role: 'user', content: trimmed.slice(0, INPUT_LIMIT) };
    // Drop any in-flight assistant placeholder before composing the next turn
    const cleanedHistory = messages.filter((m) => m.content.trim().length > 0);
    const next = [...cleanedHistory, userMsg].slice(-MAX_HISTORY);
    // Append empty assistant message that we'll stream tokens into.
    setMessages([...next, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const isRateLimit = res.status === 429;
        setError(isRateLimit ? labels.errorRateLimit : labels.errorGeneric);
        // Remove the empty assistant placeholder
        setMessages(next);
        setStreaming(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setError(labels.errorGeneric);
        setMessages(next);
        setStreaming(false);
        return;
      }

      const decoder = new TextDecoder();
      let buffer = '';
      let assistantText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // Parse SSE events: "data: {...}\n\n"
        const events = buffer.split('\n\n');
        buffer = events.pop() ?? '';

        for (const event of events) {
          const line = event.split('\n').find((l) => l.startsWith('data: '));
          if (!line) continue;
          try {
            const payload = JSON.parse(line.slice(6));
            if (payload.type === 'text' && typeof payload.text === 'string') {
              assistantText += payload.text;
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = { role: 'assistant', content: assistantText };
                return copy;
              });
            } else if (payload.type === 'error') {
              setError(labels.errorGeneric);
            }
          } catch {
            // malformed line; ignore
          }
        }
      }

      // If the stream closed but assistant text is still empty, surface an error
      if (!assistantText.trim()) {
        setError(labels.errorGeneric);
        setMessages(next);
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setError(labels.errorGeneric);
        setMessages(next);
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setInput('');
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  if (!mounted) return null;

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          type="button"
          aria-label={labels.buttonAria}
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-primary)] text-white shadow-lg transition-all hover:scale-105 hover:bg-[var(--accent-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="chat-title"
          className="fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col border border-[var(--border)] bg-[var(--background)] shadow-2xl sm:bottom-5 sm:right-5 sm:h-[600px] sm:max-h-[calc(100dvh-2.5rem)] sm:w-[400px] sm:rounded-xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-[var(--border)] px-4 py-3">
            <div className="min-w-0 flex-1">
              <h2 id="chat-title" className="truncate text-sm font-semibold text-[var(--foreground)]">
                {labels.title}
              </h2>
              <p className="mt-0.5 truncate text-xs text-[var(--foreground-muted)]">
                {labels.subtitle}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={reset}
                  aria-label={labels.resetLabel}
                  title={labels.resetLabel}
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded px-2 py-1 text-xs text-[var(--foreground-muted)] transition-colors hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="hidden sm:inline">{labels.resetLabel}</span>
                </button>
              )}
              <button
                type="button"
                aria-label={labels.closeAria}
                onClick={() => setOpen(false)}
                className="rounded p-1 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="rounded-full bg-[var(--background-alt)] p-3 text-[var(--accent-primary)]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {labels.emptyHeading}
                </p>
                <div className="flex w-full flex-col gap-2">
                  {labels.emptyExamples.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-left text-sm text-[var(--foreground-muted)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--foreground)]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={
                      m.role === 'user'
                        ? 'ml-auto max-w-[85%] rounded-lg bg-[var(--accent-primary)] px-3 py-2 text-sm text-white'
                        : 'mr-auto max-w-[90%] rounded-lg bg-[var(--background-alt)] px-3 py-2 text-sm text-[var(--foreground)]'
                    }
                  >
                    {m.content ? (
                      m.role === 'assistant' ? (
                        <span className="whitespace-pre-wrap">
                          {renderAssistantContent(m.content)}
                        </span>
                      ) : (
                        m.content
                      )
                    ) : (
                      <span className="inline-flex gap-1 text-[var(--foreground-muted)]">
                        <span className="chat-dot" />
                        <span className="chat-dot" style={{ animationDelay: '150ms' }} />
                        <span className="chat-dot" style={{ animationDelay: '300ms' }} />
                      </span>
                    )}
                  </div>
                ))}
                {error && (
                  <div className="mr-auto max-w-[90%] rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
                    {error}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3">
            <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background-alt)] px-3 py-2 transition-colors focus-within:border-[var(--accent-primary)]">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, INPUT_LIMIT))}
                onKeyDown={handleKeyDown}
                placeholder={labels.inputPlaceholder}
                rows={1}
                disabled={streaming}
                style={{
                  background: 'transparent',
                  border: 0,
                  boxShadow: 'none',
                  outline: 'none',
                  padding: 0,
                  margin: 0,
                  lineHeight: '1.5',
                  display: 'block',
                  minHeight: '1.5rem',
                }}
                className="max-h-32 flex-1 resize-none self-center text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] disabled:opacity-60"
              />
              <button
                type="button"
                aria-label={labels.sendAria}
                onClick={() => send(input)}
                disabled={!input.trim() || streaming}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--accent-primary)] text-white transition-opacity hover:bg-[var(--accent-primary-hover)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </button>
            </div>
            {input.length > INPUT_LIMIT - 100 && (
              <p className="mt-1.5 text-center text-[10px] text-[var(--foreground-muted)]">
                {input.length}/{INPUT_LIMIT}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
