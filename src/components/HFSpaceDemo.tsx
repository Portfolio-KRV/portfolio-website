'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';

interface HFSpaceDemoProps {
  slug: string;
  hfSpaceUrl: string;
  githubUrl: string;
  title: { en: string; es: string };
  subtitle: { en: string; es: string };
  iframeHeight?: number;
}

export function HFSpaceDemo({
  slug,
  hfSpaceUrl,
  githubUrl,
  title,
  subtitle,
  iframeHeight = 820,
}: HFSpaceDemoProps) {
  const { language } = useI18n();
  const lang = language;

  const t = {
    backToProject: lang === 'es' ? 'Volver al Proyecto' : 'Back to Project',
    openInNewTab: lang === 'es' ? 'Abrir en pestaña nueva' : 'Open in new tab',
    notReady: lang === 'es' ? 'Demo en preparación' : 'Demo coming soon',
    notReadyDesc:
      lang === 'es'
        ? 'La demo interactiva está siendo desplegada. Mientras tanto, puedes ver el código completo en GitHub.'
        : 'The interactive demo is being deployed. In the meantime, the full source is available on GitHub.',
    poweredBy: lang === 'es' ? 'Hospedado en Hugging Face Spaces' : 'Hosted on Hugging Face Spaces',
    coldStartHint:
      lang === 'es'
        ? 'Si la demo lleva idle más de 48 horas, el primer arranque puede tardar ~30 segundos.'
        : 'If the demo has been idle for over 48 hours, the first load may take ~30 seconds.',
    viewSource: lang === 'es' ? 'Ver código en GitHub' : 'View source on GitHub',
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href={`/projects/${slug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent-primary)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          {t.backToProject}
        </Link>

        <header className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold text-[var(--foreground)]">{title[lang]}</h1>
          <p className="mx-auto max-w-2xl text-[var(--foreground-muted)]">{subtitle[lang]}</p>
        </header>

        {hfSpaceUrl ? (
          <>
            <div className="overflow-hidden rounded-xl border border-[var(--border)] shadow-lg">
              <iframe
                src={`${hfSpaceUrl}/?__theme=light`}
                title={`${slug} demo`}
                style={{ height: `${iframeHeight}px` }}
                className="w-full"
                allow="clipboard-write; camera"
              />
            </div>
            <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-[var(--foreground-muted)] sm:flex-row">
              <span>
                {t.poweredBy} · {t.coldStartHint}
              </span>
              <a
                href={hfSpaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--accent-primary)] hover:underline"
              >
                {t.openInNewTab}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background-muted)] p-12 text-center">
            <h2 className="mb-3 text-xl font-semibold text-[var(--foreground)]">{t.notReady}</h2>
            <p className="mx-auto mb-6 max-w-md text-sm text-[var(--foreground-muted)]">{t.notReadyDesc}</p>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              {t.viewSource}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
