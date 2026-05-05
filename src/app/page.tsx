'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n-context';
import { projectsData } from '@/lib/projects';

const techStack = ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'SageMaker', 'SQL', 'Docker', 'MLOps'];

function DemoThumb({ slug }: { slug: string }) {
  const [extension, setExtension] = useState<'gif' | 'png' | 'none'>('gif');

  if (extension === 'none') {
    return <div className="h-full w-full bg-[var(--background-muted)]" aria-hidden="true" />;
  }

  return (
    <img
      src={`/previews/${slug}.${extension}`}
      alt=""
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => {
        if (extension === 'gif') setExtension('png');
        else setExtension('none');
      }}
    />
  );
}

export default function Home() {
  const { language, t } = useI18n();
  const liveDemos = projectsData.filter((p) => p.hasDemoAvailable);

  const stats = [
    { value: '4+', label: t.home.yearsExp || 'Years Experience' },
    { value: '25+', label: t.home.teamSize || 'People Led' },
    { value: 'IEEE CAI', label: t.home.published || 'Published' },
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative px-4 pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in-up mb-3 text-sm tracking-[0.18em] uppercase text-[var(--foreground-muted)]">
            {t.home.greeting}
          </p>
          <h1 className="animate-fade-in-up delay-100 mb-4 text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
            {t.home.name}
          </h1>
          <p className="animate-fade-in-up delay-200 mb-3 text-xl font-medium text-[var(--accent-primary)] sm:text-2xl">
            {t.home.role}
          </p>
          <p className="animate-fade-in-up delay-300 mb-6 text-xs tracking-[0.12em] uppercase text-[var(--foreground-muted)]">
            {t.home.tagline}
          </p>
          <p className="animate-fade-in-up delay-400 mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[var(--foreground-muted)]">
            {t.home.description}
          </p>
          <div className="animate-fade-in-up delay-500 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
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
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-16">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-10 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number text-3xl sm:text-4xl">{stat.value}</div>
              <div className="stat-label mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Live demos strip */}
      {liveDemos.length > 0 && (
        <section className="px-4 pb-20" aria-labelledby="home-live-demos">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-success)]" />
                  <span
                    id="home-live-demos"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-success)]"
                  >
                    {t.home.liveDemosLabel}
                  </span>
                </div>
                <p className="max-w-2xl text-sm text-[var(--foreground-muted)]">
                  {t.home.liveDemosTagline}
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-[var(--accent-primary)] hover:underline sm:self-auto"
              >
                {t.home.seeAllProjects}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <ul
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              aria-label={t.home.liveDemosLabel}
            >
              {liveDemos.map((project, index) => (
                <li
                  key={project.slug}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Link
                    href={`/projects/${project.slug}/demo`}
                    prefetch={true}
                    className="group block h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-primary)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-white">
                      <DemoThumb slug={project.slug} />
                    </div>
                    <div className="flex flex-col gap-2 p-3.5">
                      <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)]">
                        {project.title[language]}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent-success)]">
                        {t.home.tryDemo}
                        <svg
                          className="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Tech stack — discreet footer row */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            {t.home.techStack || 'Technical Expertise'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
