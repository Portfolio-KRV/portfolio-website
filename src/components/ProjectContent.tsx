'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { CATEGORY_COLORS } from '@/lib/constants';
import { ProjectCategory } from '@/types';
import { ProjectPreview } from './ProjectPreview';

interface ProjectData {
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  objectives: { en: string[]; es: string[] };
  conclusions: { en: string[]; es: string[] };
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  hasDemoAvailable: boolean;
  coAuthors?: string[];
  course: { en: string; es: string };
}

interface ProjectContentProps {
  project: ProjectData;
}

export function ProjectContent({ project }: Readonly<ProjectContentProps>) {
  const { language, t } = useI18n();

  return (
    <div className="relative min-h-screen">
      <article className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="animate-fade-in mb-10 inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          {t.projects.backToProjects}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="animate-fade-in-up mb-6">
            <span className={`inline-flex items-center rounded px-3 py-1.5 text-sm font-medium ${CATEGORY_COLORS[project.category]}`}>
              {t.projects.categories[project.category]}
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {project.title[language]}
          </h1>

          <p className="animate-fade-in-up delay-200 mb-8 text-lg leading-relaxed text-[var(--foreground-muted)]">
            {project.description[language]}
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap items-center gap-6 text-sm text-[var(--foreground-muted)]">
            {project.hasDemoAvailable && (
              <Link
                href={`/projects/${project.slug}/demo`}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent-success)] bg-[var(--accent-success)]/10 px-3 py-1.5 text-sm font-medium text-[var(--accent-success)] transition-all hover:bg-[var(--accent-success)]/20"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {language === 'es' ? 'Probar Demo' : 'Try Demo'}
              </Link>
            )}
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[var(--accent-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span><strong className="text-[var(--foreground)]">{t.projects.course}:</strong> {project.course[language]}</span>
            </span>
            {project.coAuthors && project.coAuthors.length > 0 && (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[var(--accent-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span><strong className="text-[var(--foreground)]">{t.projects.coAuthors}:</strong> {project.coAuthors.join(', ')}</span>
              </span>
            )}
          </div>
        </header>

        {/* Visual preview */}
        <ProjectPreview slug={project.slug} alt={project.title[language]} />

        {/* Objectives */}
        <section className="animate-fade-in-up delay-400 mb-12" aria-labelledby="objectives-heading">
          <h2 id="objectives-heading" className="mb-8 text-2xl font-semibold text-[var(--foreground)]">
            {t.projects.objectives}
          </h2>
          <ul className="space-y-4" role="list">
            {project.objectives[language].map((objective, index) => (
              <li key={index} className="flex items-start gap-4 text-[var(--foreground-muted)]">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent-primary)] text-xs font-semibold text-[var(--accent-primary)]">
                  {index + 1}
                </span>
                {objective}
              </li>
            ))}
          </ul>
        </section>

        {/* Conclusions */}
        <section className="animate-fade-in-up delay-500 mb-12" aria-labelledby="conclusions-heading">
          <h2 id="conclusions-heading" className="mb-8 text-2xl font-semibold text-[var(--foreground)]">
            {t.projects.conclusions}
          </h2>
          <ul className="space-y-4" role="list">
            {project.conclusions[language].map((conclusion, index) => (
              <li key={index} className="flex items-start gap-4 text-[var(--foreground-muted)]">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent-secondary)]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                {conclusion}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="animate-fade-in-up delay-600 mb-12" aria-labelledby="tech-heading">
          <h2 id="tech-heading" className="mb-8 text-2xl font-semibold text-[var(--foreground)]">
            {t.projects.technologies}
          </h2>
          <ul className="flex flex-wrap gap-3" role="list" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li key={tech} className="tech-tag">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* GitHub Link */}
        <footer className="animate-fade-in-up delay-700">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            {t.projects.viewOnGithub}
          </a>
        </footer>
      </article>
    </div>
  );
}
