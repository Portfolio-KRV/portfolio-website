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

  const careerSteps = [
    { key: 'flow', icon: '🚀' },
    { key: 'consulting', icon: '💼' },
    { key: 'codelco', icon: '⛏️' },
    { key: 'university', icon: '🎓' },
  ] as const;

  const universityContributions = [
    { key: 'datalab', icon: '🔬' },
    { key: 'softwareExpo', icon: '🏆' },
    { key: 'research', icon: '📊' },
    { key: 'diploma', icon: '📜' },
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
              {careerSteps.map(({ key, icon }, index) => (
                <div
                  key={key}
                  className="animate-fade-in-up relative flex gap-6"
                  style={{ animationDelay: `${950 + index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden flex-shrink-0 sm:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-xl">
                      {icon}
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
            <span className="text-2xl">🏆</span>
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
          <div className="grid gap-6 md:grid-cols-3">
            {universityContributions.map(({ key, icon }, index) => (
              <div
                key={key}
                className="animate-scale-in card rounded-lg p-6 text-center"
                style={{ animationDelay: `${1250 + index * 100}ms` }}
              >
                <div className="mb-4 text-3xl">{icon}</div>
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
