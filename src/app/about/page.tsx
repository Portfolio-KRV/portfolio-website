'use client';

import { useI18n } from '@/lib/i18n-context';
import { SKILLS } from '@/lib/constants';

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
    chartBar: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    briefcase: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
    building: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
    academicCap: 'M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
    beaker: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
    trophy: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0',
    chartSquare: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
    documentCheck: 'M9 12.75l3 3 7.5-7.5M19.5 12c0 4.142-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5s7.5 3.358 7.5 7.5z',
  } as const;

  const careerSteps = [
    { key: 'flow', iconPath: PATHS.chartBar },
    { key: 'consulting', iconPath: PATHS.briefcase },
    { key: 'codelco', iconPath: PATHS.building },
    { key: 'university', iconPath: PATHS.academicCap },
  ] as const;

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
          <p className="animate-fade-in-up mb-6 text-sm uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            {language === 'es' ? 'Sobre Mí' : 'About'}
          </p>
          <h1 className="animate-fade-in-up delay-100 mb-8 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
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

        {/* Current Role highlight */}
        <section className="animate-fade-in-up delay-300 card mb-16 rounded-lg p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-[var(--border-accent)] bg-[var(--accent-primary)]/10">
              <span className="text-lg font-bold text-[var(--accent-primary)]">CTO</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{t.about.currentRole}</h2>
              <p className="text-sm text-[var(--accent-primary)]">FlowPagos</p>
            </div>
          </div>
          <p className="leading-relaxed text-[var(--foreground-muted)]">
            {t.about.currentRoleContent}
          </p>
        </section>

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

        {/* Career Journey */}
        <section className="mb-16">
          <h2 className="animate-fade-in-up mb-10 text-2xl font-semibold text-[var(--foreground)]" style={{ animationDelay: '900ms' }}>
            {t.about.careerTitle}
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--border)] sm:block" />

            <div className="space-y-8">
              {careerSteps.map(({ key, iconPath }, index) => (
                <div
                  key={key}
                  className="animate-fade-in-up relative flex gap-6"
                  style={{ animationDelay: `${950 + index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden flex-shrink-0 sm:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--accent-primary)]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card flex-1 rounded-lg p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-[var(--foreground)]">
                        {t.about.career[key].title}
                      </h3>
                      <span className="rounded bg-[var(--accent-primary)]/10 px-2 py-1 text-xs font-medium text-[var(--accent-primary)]">
                        {t.about.career[key].period}
                      </span>
                    </div>
                    <p className="mb-3 text-sm font-medium text-[var(--accent-secondary)]">
                      {t.about.career[key].roles}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                      {t.about.career[key].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
        </section>

        {/* University Contributions */}
        <section className="mb-16">
          <h2 className="animate-fade-in-up mb-10 text-2xl font-semibold text-[var(--foreground)]" style={{ animationDelay: '1200ms' }}>
            {t.about.universityTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <span
                key={skill}
                className="tech-tag animate-scale-in"
                style={{ animationDelay: `${1450 + index * 30}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
