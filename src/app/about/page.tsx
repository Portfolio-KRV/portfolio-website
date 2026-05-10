'use client';

import { useI18n } from '@/lib/i18n-context';
import { SKILL_GROUPS } from '@/lib/constants';

export default function AboutPage() {
  const { t, language } = useI18n();

  const achievements = [
    { key: 'dataEngineering', label: 'Data Engineering' },
    { key: 'bi', label: 'Business Intelligence' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'mlops', label: 'MLOps' },
    { key: 'leadership', label: 'Leadership' },
  ] as const;

  // Heroicons outline paths
  const PATHS = {
    beaker: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
    trophy: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0',
    chartSquare: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
    documentCheck: 'M9 12.75l3 3 7.5-7.5M19.5 12c0 4.142-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5s7.5 3.358 7.5 7.5z',
  } as const;

  const universityContributions = [
    { key: 'datalab', iconPath: PATHS.beaker },
    { key: 'softwareExpo', iconPath: PATHS.trophy },
    { key: 'research', iconPath: PATHS.chartSquare },
    { key: 'diploma', iconPath: PATHS.documentCheck },
  ] as const;

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="animate-fade-in-up mb-8 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t.about.title}
          </h1>

          {/* Hook - Engaging intro */}
          <p className="animate-fade-in-up delay-150 mb-6 text-xl leading-relaxed text-[var(--accent-primary)]">
            {t.about.hook}
          </p>

          {/* Main intro */}
          <p className="animate-fade-in-up delay-200 text-lg leading-relaxed text-[var(--foreground-muted)]">
            {t.about.intro}
          </p>
        </div>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="animate-fade-in-up delay-400 mb-10 text-2xl font-semibold text-[var(--foreground)]">
            {t.about.achievements}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map(({ key, label }, index) => (
              <div
                key={key}
                className="animate-scale-in card group rounded-lg p-6"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[var(--accent-secondary)]/30" />
                  <span className="text-xs uppercase tracking-[0.15em] text-[var(--accent-secondary)]">
                    {label}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                  {t.about[key].title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {t.about[key].content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* My Approach & What Drives Me - Side by side on larger screens */}
        <section className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* My Approach */}
          <div className="animate-fade-in-up card rounded-lg p-8" style={{ animationDelay: '700ms' }}>
            <h2 className="mb-6 text-xl font-semibold text-[var(--foreground)]">
              {t.about.approachTitle}
            </h2>
            <p className="leading-relaxed text-[var(--foreground-muted)]">
              {t.about.approach}
            </p>
          </div>

          {/* What Drives Me */}
          <div className="animate-fade-in-up card rounded-lg p-8" style={{ animationDelay: '800ms' }}>
            <h2 className="mb-6 text-xl font-semibold text-[var(--foreground)]">
              {t.about.drivesTitle}
            </h2>
            <p className="leading-relaxed text-[var(--foreground-muted)]">
              {t.about.drives}
            </p>
          </div>
        </section>

        {/* IEEE Experience - Highlighted */}
        <section className="animate-fade-in-up mb-16 card rounded-lg border-l-4 border-l-[var(--accent-primary)] p-8" style={{ animationDelay: '1100ms' }}>
          <div className="mb-4 flex items-center gap-3">
            <svg className="h-6 w-6 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={PATHS.trophy} />
            </svg>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              {t.about.ieeeTitle}
            </h2>
          </div>
          <p className="leading-relaxed text-[var(--foreground-muted)]">
            {t.about.ieeeContent}
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/11050560"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-primary)] hover:underline"
          >
            {language === 'es' ? 'Leer paper en IEEE Xplore' : 'Read paper on IEEE Xplore'}
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* University Contributions */}
        <section className="mb-16">
          <h2 className="animate-fade-in-up mb-10 text-2xl font-semibold text-[var(--foreground)]" style={{ animationDelay: '1200ms' }}>
            {t.about.universityTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {universityContributions.map(({ key, iconPath }, index) => (
              <div
                key={key}
                className="animate-scale-in card rounded-lg p-6 text-center"
                style={{ animationDelay: `${1250 + index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <svg className="h-7 w-7 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                  {t.about[key].title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {t.about[key].content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="animate-fade-in" style={{ animationDelay: '1400ms' }}>
          <h2 className="mb-8 text-2xl font-semibold text-[var(--foreground)]">
            {t.about.skillsTitle}
          </h2>
          <div className="flex flex-col gap-6">
            {SKILL_GROUPS.map((group, gi) => (
              <div
                key={group.category}
                className="animate-fade-in-up"
                style={{ animationDelay: `${1450 + gi * 80}ms` }}
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                  {t.about.skillCategories[group.category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
