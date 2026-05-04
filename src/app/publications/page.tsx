'use client';

import { useI18n } from '@/lib/i18n-context';

export default function PublicationsPage() {
  const { t } = useI18n();

  const tags = ['Transformers', 'Fraud Detection', 'Positional Encoding', 'Deep Learning', 'Financial ML'];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="animate-fade-in-up mb-6 text-sm uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            Research
          </p>
          <h1 className="animate-fade-in-up delay-100 mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t.publications.title}
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg text-[var(--foreground-muted)]">
            {t.publications.subtitle}
          </p>
        </div>

        {/* IEEE CAI 2025 Paper */}
        <article className="animate-scale-in delay-300 card rounded-lg p-8">
          {/* Badge row */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded border border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 px-3 py-1.5 text-sm font-medium text-[var(--accent-primary)]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              IEEE CAI 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Silicon Valley, USA
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-6 text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-3xl">
            {t.publications.ieeeTitle}
          </h2>

          {/* Description */}
          <p className="mb-8 leading-relaxed text-[var(--foreground-muted)]">
            {t.publications.ieeeDescription}
          </p>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Author info */}
          <div className="mb-8 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-8">
            <span className="flex items-center gap-3 text-sm text-[var(--foreground-muted)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent-primary)] text-xs font-semibold text-[var(--accent-primary)]">
                KR
              </span>
              Kevin Reyes, et al.
            </span>
            <span className="text-sm text-[var(--foreground-muted)]">{t.publications.ieeeVenue}</span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              disabled
              className="btn-secondary inline-flex items-center gap-2 opacity-60"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {t.publications.viewPaper} (Coming Soon)
            </button>
          </div>
        </article>

        {/* More publications placeholder */}
        <div className="animate-fade-in delay-500 mt-16 text-center">
          <div className="divider-accent mb-8" />
          <p className="text-sm text-[var(--foreground-muted)]">More publications coming soon...</p>
        </div>
      </div>
    </div>
  );
}
