'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n-context';

export function NotFoundContent() {
  const { language } = useI18n();

  const content = {
    en: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
      back: 'Back to Home',
      projects: 'View Projects',
    },
    es: {
      title: 'Página No Encontrada',
      description: 'La página que buscas no existe o ha sido movida.',
      back: 'Volver al Inicio',
      projects: 'Ver Proyectos',
    },
  };

  const t = content[language];

  return (
    <div className="relative flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="relative z-10">
        <div className="animate-fade-in-up mb-8">
          <span className="text-gradient text-[10rem] font-bold leading-none sm:text-[12rem]">
            404
          </span>
        </div>

        <h1 className="animate-fade-in-up delay-100 mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {t.title}
        </h1>
        <p className="animate-fade-in-up delay-200 mb-8 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          {t.description}
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {t.back}
          </Link>
          <Link href="/projects" className="btn-secondary inline-flex items-center gap-2">
            {t.projects}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
