'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n-context';
import { ProjectCard } from '@/components/ProjectCard';
import { projectsData, getAllCategories } from '@/lib/projects';
import { ProjectCategory } from '@/types';

export default function ProjectsPage() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

  const categories = getAllCategories();
  const inCategory = (category: ProjectCategory) =>
    selectedCategory === 'all' || category === selectedCategory;

  const featured = projectsData.filter((p) => p.hasDemoAvailable && inCategory(p.category));
  const others = projectsData.filter((p) => !p.hasDemoAvailable && inCategory(p.category));

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t.projects.title}
          </h1>
          <p className="animate-fade-in-up delay-100 mx-auto max-w-2xl text-lg text-[var(--foreground-muted)]">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Context intro */}
        <div className="animate-fade-in-up delay-250 card mx-auto mb-12 max-w-3xl rounded-lg p-6 text-center">
          <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
            {t.projects.intro}
          </p>
        </div>

        {/* Category filters */}
        <div className="animate-fade-in-up delay-300 mb-16 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
            }`}
          >
            {t.projects.categories.all}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
              }`}
            >
              {t.projects.categories[category]}
            </button>
          ))}
        </div>

        {/* Featured / Live demos */}
        {featured.length > 0 && (
          <section aria-labelledby="featured-heading" className="mb-20">
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-[var(--border)] pb-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent-success)]" />
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-success)]">
                    {t.projects.featuredTitle}
                  </span>
                </div>
                <p className="max-w-2xl text-sm text-[var(--foreground-muted)]">
                  {t.projects.featuredSubtitle}
                </p>
              </div>
              <span className="hidden whitespace-nowrap text-xs text-[var(--foreground-muted)] sm:inline">
                {featured.length} {featured.length === 1 ? 'demo' : 'demos'}
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((project, index) => (
                <div
                  key={project.slug}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    category={project.category}
                    hasDemoAvailable={project.hasDemoAvailable}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Studies & experiments */}
        {others.length > 0 && (
          <section aria-labelledby="others-heading">
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-[var(--border)] pb-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-3.5 w-3.5 text-[var(--foreground-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                    {t.projects.othersTitle}
                  </span>
                </div>
                <p className="max-w-2xl text-sm text-[var(--foreground-muted)]">
                  {t.projects.othersSubtitle}
                </p>
              </div>
              <span className="hidden whitespace-nowrap text-xs text-[var(--foreground-muted)] sm:inline">
                {others.length} {others.length === 1 ? 'project' : 'projects'}
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, index) => (
                <div
                  key={project.slug}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    category={project.category}
                    hasDemoAvailable={project.hasDemoAvailable}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {featured.length === 0 && others.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[var(--foreground-muted)]">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
