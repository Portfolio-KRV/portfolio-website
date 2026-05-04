'use client';

import { useI18n } from '@/lib/i18n-context';

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <fieldset className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--background-alt)] p-1">
      <legend className="sr-only">Language selection</legend>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        className={`rounded-md px-3 py-1 font-mono text-xs font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] ${
          language === 'en'
            ? 'bg-[var(--accent-primary)] text-white'
            : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a Español"
        aria-pressed={language === 'es'}
        className={`rounded-md px-3 py-1 font-mono text-xs font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] ${
          language === 'es'
            ? 'bg-[var(--accent-primary)] text-white'
            : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
        }`}
      >
        ES
      </button>
    </fieldset>
  );
}
