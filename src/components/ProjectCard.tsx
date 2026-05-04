'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';
import { CATEGORY_COLORS } from '@/lib/constants';
import { ProjectCategory } from '@/types';

interface ProjectCardProps {
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  technologies: string[];
  category: ProjectCategory;
  hasDemoAvailable: boolean;
}

export function ProjectCard({
  slug,
  title,
  description,
  technologies,
  category,
  hasDemoAvailable,
}: Readonly<ProjectCardProps>) {
  const { language, t } = useI18n();

  return (
    <Link
      href={`/projects/${slug}`}
      prefetch={true}
      className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
    >
      <article className="card relative h-full overflow-hidden rounded-lg p-6 transition-all hover:border-[var(--accent-primary)]">
        {/* Content */}
        <div className="relative z-10">
          {/* Header with badges */}
          <div className="mb-4 flex items-start justify-between gap-2">
            <span className={`inline-flex items-center rounded px-2.5 py-1 text-xs font-medium ${CATEGORY_COLORS[category]}`}>
              {t.projects.categories[category]}
            </span>
            {hasDemoAvailable && (
              <span className="inline-flex items-center gap-1.5 rounded border border-[var(--accent-success)] bg-[var(--accent-success)]/10 px-2.5 py-1 text-xs font-medium text-[var(--accent-success)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-success)] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-success)]" />
                </span>
                Demo
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)]">
            {title[language]}
          </h3>

          {/* Description */}
          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
            {description[language]}
          </p>

          {/* Technologies */}
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.slice(0, 4).map((tech) => (
              <li key={tech} className="tech-tag text-xs">
                {tech}
              </li>
            ))}
            {technologies.length > 4 && (
              <li className="rounded border border-[var(--border)] px-2 py-1 font-mono text-xs text-[var(--foreground-muted)]">
                +{technologies.length - 4}
              </li>
            )}
          </ul>

          {/* View arrow indicator */}
          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors group-hover:text-[var(--accent-primary)]">
            <span>{t.projects.viewProject}</span>
            <svg
              className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
