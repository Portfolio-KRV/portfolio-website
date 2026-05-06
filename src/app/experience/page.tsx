'use client';

import { useI18n } from '@/lib/i18n-context';

export default function ExperiencePage() {
  const { t, language } = useI18n();

  // Heroicons outline paths
  const PATHS = {
    chartBar: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    briefcase: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
    building: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
    academicCap: 'M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
  } as const;

  const careerSteps = [
    { key: 'flowCto', iconPath: PATHS.chartBar },
    { key: 'flowLead', iconPath: PATHS.chartBar },
    { key: 'flowDs', iconPath: PATHS.chartBar },
    { key: 'consulting', iconPath: PATHS.briefcase },
    { key: 'codelcoThesis', iconPath: PATHS.building },
    { key: 'codelcoIntern', iconPath: PATHS.building },
    { key: 'university', iconPath: PATHS.academicCap },
  ] as const;

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="animate-fade-in-up mb-6 text-sm uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            {language === 'es' ? 'Trayectoria' : 'Career'}
          </p>
          <h1 className="animate-fade-in-up delay-100 mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t.experience.title}
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto max-w-2xl text-lg text-[var(--foreground-muted)]">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <section>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--border)] sm:block" />

            <div className="space-y-8">
              {careerSteps.map(({ key, iconPath }, index) => (
                <div
                  key={key}
                  className="animate-fade-in-up relative flex gap-6"
                  style={{ animationDelay: `${300 + index * 80}ms` }}
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
                    {t.about.career[key].roles && (
                      <p className="mb-3 text-sm font-medium text-[var(--accent-secondary)]">
                        {t.about.career[key].roles}
                      </p>
                    )}
                    <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                      {t.about.career[key].description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
