'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';

export default function Home() {
  const { t } = useI18n();

  const techStack = [
    'Python',
    'TensorFlow',
    'PyTorch',
    'AWS',
    'SageMaker',
    'SQL',
    'Docker',
    'MLOps',
  ];

  const stats = [
    { value: '4+', label: t.home.yearsExp || 'Years Experience' },
    { value: '25+', label: t.home.teamSize || 'People Led' },
    { value: 'IEEE CAI', label: t.home.published || 'Published' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Main content */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Greeting */}
          <p className="animate-fade-in-up mb-4 text-sm text-[var(--foreground-muted)]">
            {t.home.greeting}
          </p>

          {/* Name */}
          <h1 className="animate-fade-in-up delay-100 mb-6 text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
            {t.home.name}
          </h1>

          {/* Role */}
          <p className="animate-fade-in-up delay-200 mb-4 text-xl font-medium text-[var(--accent-primary)] sm:text-2xl">
            {t.home.role}
          </p>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-300 mb-8 text-sm tracking-wide text-[var(--foreground-muted)]">
            {t.home.tagline}
          </p>

          {/* Description */}
          <p className="animate-fade-in-up delay-400 mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--foreground-muted)]">
            {t.home.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-500 mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/projects" className="btn-primary inline-flex items-center justify-center">
              {t.home.viewProjects}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
              {t.home.aboutMe}
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-600 mb-16 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number text-4xl sm:text-5xl">{stat.value}</div>
                <div className="stat-label mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="animate-fade-in-up delay-600 mx-auto mb-12 divider-accent" />
        </div>

        {/* Tech stack */}
        <div className="animate-fade-in delay-700 w-full max-w-3xl">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-[var(--foreground-muted)]">
            {t.home.techStack || 'Technical Expertise'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="tech-tag animate-scale-in"
                style={{ animationDelay: `${700 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
