'use client';

import Link from 'next/link';
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from 'react';
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
  ts?: number;
}

interface UiLabels {
  buttonAria: string;
  tooltip: string;
  firstVisitNudge: string;
  dismissNudgeAria: string;
  title: string;
  subtitle: string;
  emptyHeading: string;
  emptyExamples: string[];
  inputPlaceholder: string;
  sendAria: string;
  stopAria: string;
  closeAria: string;
  resetLabel: string;
  copyAria: string;
  copiedLabel: string;
  errorGeneric: string;
  errorRateLimit: string;
  errorNetwork: string;
  poweredByPrefix: string;
  poweredByLink: string;
  privacyNote: string;
  earlierConversation: string;
  thinking: string;
}

const LABELS: Record<'en' | 'es', UiLabels> = {
  en: {
    buttonAria: 'Open chat about Kevin',
    tooltip: 'Ask anything about Kevin',
    firstVisitNudge: "Hi! Ask me anything about Kevin's work, projects, or how to get in touch.",
    dismissNudgeAria: 'Dismiss',
    title: 'Ask about Kevin',
    subtitle: 'Portfolio assistant · answers from his work and projects',
    emptyHeading: 'What would you like to know?',
    emptyExamples: [
      "What's Kevin's current role?",
      'Tell me about his IEEE paper',
      'How can I contact him?',
      'What demos can I try?',
      'How did Kevin grow from Data Scientist to CTO?',
      'What is his strongest skill?',
      'Tell me about his work at FlowPagos',
      'What did he do at Codelco?',
    ],
    inputPlaceholder: 'Ask anything about Kevin…',
    sendAria: 'Send message',
    stopAria: 'Stop generating',
    closeAria: 'Close chat',
    resetLabel: 'New conversation',
    copyAria: 'Copy message',
    copiedLabel: 'Copied',
    errorGeneric: 'Something went wrong on the server. Please try again.',
    errorRateLimit: 'Too many messages. Try again in a bit.',
    errorNetwork: 'Connection issue. Check your network and try again.',
    poweredByPrefix: 'Powered by',
    poweredByLink: 'Claude',
    privacyNote: 'Conversations may be saved and analyzed to improve this assistant.',
    earlierConversation: 'Earlier conversation',
    thinking: 'Thinking…',
  },
  es: {
    buttonAria: 'Abrir chat sobre Kevin',
    tooltip: 'Pregunta sobre Kevin',
    firstVisitNudge: 'Hola! Pregúntame lo que quieras sobre el trabajo de Kevin, sus proyectos o cómo contactarlo.',
    dismissNudgeAria: 'Cerrar',
    title: 'Pregunta sobre Kevin',
    subtitle: 'Asistente del portfolio · responde desde su trabajo y proyectos',
    emptyHeading: '¿Qué te gustaría saber?',
    emptyExamples: [
      '¿Cuál es el rol actual de Kevin?',
      'Cuéntame sobre su paper en IEEE',
      '¿Cómo lo puedo contactar?',
      '¿Qué demos puedo probar?',
      '¿Cómo creció de Data Scientist a CTO?',
      '¿Cuál es su skill más fuerte?',
      'Cuéntame sobre su trabajo en FlowPagos',
      '¿Qué hizo en Codelco?',
    ],
    inputPlaceholder: 'Pregunta lo que quieras sobre Kevin…',
    sendAria: 'Enviar mensaje',
    stopAria: 'Detener',
    closeAria: 'Cerrar chat',
    resetLabel: 'Nueva conversación',
    copyAria: 'Copiar mensaje',
    copiedLabel: 'Copiado',
    errorGeneric: 'Algo falló en el servidor. Por favor intenta de nuevo.',
    errorRateLimit: 'Demasiados mensajes. Intenta de nuevo en un rato.',
    errorNetwork: 'Problema de conexión. Verifica tu red e intenta de nuevo.',
    poweredByPrefix: 'Construido con',
    poweredByLink: 'Claude',
    privacyNote: 'Las conversaciones pueden guardarse y analizarse para mejorar este asistente.',
    earlierConversation: 'Conversación anterior',
    thinking: 'Pensando…',
  },
};

const STORAGE_KEY = 'portfolio-chat-history';
const FIRST_VISIT_KEY = 'portfolio-chat-seen';
const MAX_HISTORY = 20;
const INPUT_LIMIT = 500;
const SCROLL_BOTTOM_THRESHOLD = 80; // px — only autoscroll if within this distance from bottom
const THINKING_DELAY_MS = 250; // delay before showing the thinking dots
const STALE_CONVERSATION_MS = 6 * 60 * 60 * 1000; // 6h — show "Earlier conversation" divider
const NUDGE_AUTO_DISMISS_MS = 12000;

function pickShuffled<T>(arr: readonly T[], n: number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export function ChatWidget() {
  const { language } = useI18n();
  const labels = LABELS[language];
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [showThinking, setShowThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [showNudge, setShowNudge] = useState(false);
  const [shuffledExamples, setShuffledExamples] = useState<string[]>([]);
  const [staleBoundary, setStaleBoundary] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const thinkingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mount guard — avoids flash before i18n + localStorage hydrate.
  useEffect(() => {
    setMounted(true);
  }, []);

  // First-visit nudge: show once per browser, auto-dismiss after a few seconds.
  useEffect(() => {
    if (!mounted) return;
    try {
      if (!localStorage.getItem(FIRST_VISIT_KEY)) {
        setShowNudge(true);
        const t = setTimeout(() => setShowNudge(false), NUDGE_AUTO_DISMISS_MS);
        return () => clearTimeout(t);
      }
    } catch {
      // storage disabled; skip nudge
    }
  }, [mounted]);

  function dismissNudge() {
    setShowNudge(false);
    try {
      localStorage.setItem(FIRST_VISIT_KEY, '1');
    } catch {
      // ignore
    }
  }

  // Load persisted conversation on mount. Drop empty-content placeholders.
  // Also detect if the last persisted message is older than threshold —
  // if so, mark a divider position so the user knows it's an old session.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      const cleaned = parsed
        .filter(
          (m: unknown): m is ChatMessage =>
            !!m &&
            typeof m === 'object' &&
            'role' in m &&
            'content' in m &&
            typeof (m as ChatMessage).content === 'string' &&
            (m as ChatMessage).content.trim().length > 0,
        )
        .slice(-MAX_HISTORY);
      setMessages(cleaned);
      const lastTs = cleaned[cleaned.length - 1]?.ts ?? 0;
      if (lastTs && Date.now() - lastTs > STALE_CONVERSATION_MS) {
        // Boundary = first index of "new" turns we'll add this session.
        // Until the user sends a new message, this stays at messages.length.
        setStaleBoundary(cleaned.length);
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

  // Smart auto-scroll: only follow new content if the user is already near
  // the bottom. If they scrolled up to read history, don't yank them down.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    if (distanceFromBottom < SCROLL_BOTTOM_THRESHOLD) {
      el.scrollTo({ top: el.scrollHeight });
    }
  }, [messages, streaming]);

  // On open: focus the input, shuffle example questions, dismiss nudge.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    setShuffledExamples(pickShuffled(labels.emptyExamples, 3));
    if (showNudge) dismissNudge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ESC closes the panel.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Cleanup any in-flight stream + thinking timer on unmount
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (thinkingTimerRef.current) clearTimeout(thinkingTimerRef.current);
    };
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

    const userMsg: ChatMessage = {
      role: 'user',
      content: trimmed.slice(0, INPUT_LIMIT),
      ts: Date.now(),
    };
    // Drop any in-flight assistant placeholder before composing the next turn
    const cleanedHistory = messages.filter((m) => m.content.trim().length > 0);
    // First "new" message in a stale-resumed conversation marks the divider.
    if (staleBoundary === null && messages.length > 0) {
      // not stale — no divider; nothing to do
    }
    const next = [...cleanedHistory, userMsg].slice(-MAX_HISTORY);

    // Append empty assistant placeholder we'll stream into.
    setMessages([...next, { role: 'assistant', content: '', ts: Date.now() }]);
    setInput('');
    setStreaming(true);
    setShowThinking(false);
    // Show "thinking dots" only if the first token hasn't arrived in 250ms.
    if (thinkingTimerRef.current) clearTimeout(thinkingTimerRef.current);
    thinkingTimerRef.current = setTimeout(() => setShowThinking(true), THINKING_DELAY_MS);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const msg =
          res.status === 429
            ? labels.errorRateLimit
            : labels.errorGeneric;
        setError(msg);
        setMessages(next);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setError(labels.errorGeneric);
        setMessages(next);
        return;
      }

      const decoder = new TextDecoder();
      let buffer = '';
      let assistantText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split('\n\n');
        buffer = events.pop() ?? '';

        for (const event of events) {
          const line = event.split('\n').find((l) => l.startsWith('data: '));
          if (!line) continue;
          try {
            const payload = JSON.parse(line.slice(6));
            if (payload.type === 'text' && typeof payload.text === 'string') {
              if (assistantText.length === 0 && thinkingTimerRef.current) {
                clearTimeout(thinkingTimerRef.current);
                thinkingTimerRef.current = null;
                setShowThinking(false);
              }
              assistantText += payload.text;
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = {
                  role: 'assistant',
                  content: assistantText,
                  ts: Date.now(),
                };
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

      if (!assistantText.trim()) {
        setError(labels.errorGeneric);
        setMessages(next);
      }
    } catch (err) {
      const e = err as Error;
      if (e.name === 'AbortError') {
        // User pressed Stop — keep whatever streamed so far.
        return;
      }
      // Distinguish network from server. Browser fetch() throws TypeError on
      // network failures (DNS, offline, CORS at request time, etc.).
      const isNetwork = e instanceof TypeError;
      setError(isNetwork ? labels.errorNetwork : labels.errorGeneric);
      setMessages(next);
    } finally {
      setStreaming(false);
      setShowThinking(false);
      if (thinkingTimerRef.current) {
        clearTimeout(thinkingTimerRef.current);
        thinkingTimerRef.current = null;
      }
      abortRef.current = null;
    }
  }

  function stop() {
    abortRef.current?.abort();
    // Trim a trailing empty assistant placeholder if no tokens streamed.
    setMessages((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      if (last.role === 'assistant' && !last.content.trim()) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setInput('');
    setStaleBoundary(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  async function copyMessage(text: string, idx: number) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback: temp textarea + execCommand
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {
      // ignore
    }
  }

  function handleKeyDown(e: ReactKeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  if (!mounted) return null;

  return (
    <>
      {/* First-visit nudge bubble */}
      {!open && showNudge && (
        <div
          className="animate-fade-in-up fixed bottom-24 right-4 z-50 max-w-[280px] sm:right-5 sm:max-w-xs"
          role="status"
        >
          <div className="relative rounded-lg border border-[var(--border)] bg-[var(--background)] px-3.5 py-3 pr-9 shadow-lg">
            <p className="text-sm leading-snug text-[var(--foreground)]">
              {labels.firstVisitNudge}
            </p>
            <button
              type="button"
              aria-label={labels.dismissNudgeAria}
              onClick={dismissNudge}
              className="absolute right-1.5 top-1.5 rounded p-1 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--background-alt)] hover:text-[var(--foreground)]"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Tail pointing to the chat button */}
            <div className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-[var(--border)] bg-[var(--background)]" />
          </div>
        </div>
      )}

      {/* Floating button */}
      {!open && (
        <button
          type="button"
          aria-label={labels.buttonAria}
          title={labels.tooltip}
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
              <p className="mt-0.5 hidden truncate text-xs text-[var(--foreground-muted)] sm:block">
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
                  {shuffledExamples.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent-primary)] hover:bg-[var(--background-alt)]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {messages.map((m, i) => {
                  const showStaleDivider = staleBoundary !== null && i === staleBoundary && staleBoundary > 0;
                  return (
                    <Fragment key={i}>
                      {showStaleDivider && (
                        <div className="my-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[var(--foreground-muted)]">
                          <div className="h-px flex-1 bg-[var(--border)]" />
                          <span>{labels.earlierConversation}</span>
                          <div className="h-px flex-1 bg-[var(--border)]" />
                        </div>
                      )}
                      <div className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                        <div className={m.role === 'user' ? 'flex max-w-[85%] items-start gap-2' : 'group flex max-w-[90%] items-start gap-2'}>
                          {m.role === 'assistant' && (
                            <div
                              className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-primary)] text-[10px] font-semibold text-white"
                              aria-hidden="true"
                            >
                              K
                            </div>
                          )}
                          <div className="flex min-w-0 flex-col items-start">
                            <div
                              className={
                                m.role === 'user'
                                  ? 'rounded-lg bg-[var(--accent-primary)] px-3 py-2 text-sm text-white'
                                  : 'rounded-lg bg-[var(--background-alt)] px-3 py-2 text-sm text-[var(--foreground)]'
                              }
                            >
                              {m.content ? (
                                m.role === 'assistant' ? (
                                  <span className="whitespace-pre-wrap break-words">
                                    {renderAssistantContent(m.content)}
                                  </span>
                                ) : (
                                  <span className="whitespace-pre-wrap break-words">{m.content}</span>
                                )
                              ) : showThinking ? (
                                <span className="inline-flex items-center gap-1 text-[var(--foreground-muted)]">
                                  <span className="chat-dot" />
                                  <span className="chat-dot" style={{ animationDelay: '150ms' }} />
                                  <span className="chat-dot" style={{ animationDelay: '300ms' }} />
                                </span>
                              ) : (
                                <span className="opacity-0">·</span>
                              )}
                            </div>
                            {/* Copy action for assistant messages with content */}
                            {m.role === 'assistant' && m.content.trim().length > 0 && (
                              <button
                                type="button"
                                onClick={() => copyMessage(m.content, i)}
                                aria-label={labels.copyAria}
                                title={labels.copyAria}
                                className="mt-1 inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-[var(--foreground-muted)] opacity-0 transition-opacity hover:text-[var(--foreground)] focus:opacity-100 group-hover:opacity-100"
                              >
                                {copiedIdx === i ? (
                                  <>
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{labels.copiedLabel}</span>
                                  </>
                                ) : (
                                  <>
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
                {error && (
                  <div className="mr-auto max-w-[90%] rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
                    {error}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input + footer */}
          <div className="px-3 pb-3 pt-2">
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
              {streaming ? (
                <button
                  type="button"
                  aria-label={labels.stopAria}
                  title={labels.stopAria}
                  onClick={stop}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--accent-primary)] text-white transition-opacity hover:bg-[var(--accent-primary-hover)]"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="6" width="12" height="12" rx="1" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  aria-label={labels.sendAria}
                  onClick={() => send(input)}
                  disabled={!input.trim()}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--accent-primary)] text-white transition-opacity hover:bg-[var(--accent-primary-hover)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </button>
              )}
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-[var(--foreground-muted)]">
              <span>
                {labels.poweredByPrefix}{' '}
                <a
                  href="https://www.anthropic.com/claude"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--accent-primary)]"
                >
                  {labels.poweredByLink}
                </a>
              </span>
              {input.length > INPUT_LIMIT - 100 && (
                <span>{input.length}/{INPUT_LIMIT}</span>
              )}
            </div>
            <p className="mt-1 text-center text-[10px] leading-snug text-[var(--foreground-muted)]/70">
              {labels.privacyNote}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
