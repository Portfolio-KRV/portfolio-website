'use client';

import { useI18n } from '@/lib/i18n-context';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  const { t } = useI18n();

  const contacts = [
    {
      name: t.contact.linkedin,
      value: 'linkedin.com/in/kevin-reyes-cs',
      href: SITE_CONFIG.linkedin,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: t.contact.github,
      value: 'github.com/Portfolio-KRV',
      href: SITE_CONFIG.github,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="animate-fade-in-up mb-6 text-sm uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            Get in touch
          </p>
          <h1 className="animate-fade-in-up delay-100 mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {t.contact.title}
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg text-[var(--foreground-muted)]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact cards */}
        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-scale-in card group flex flex-col items-center rounded-lg p-8 text-center transition-all hover:border-[var(--accent-primary)]"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground-muted)] transition-colors group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]">
                {contact.icon}
              </div>

              {/* Content */}
              <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                {contact.name}
              </h3>
              <p className="font-mono text-sm text-[var(--foreground-muted)] transition-colors group-hover:text-[var(--accent-primary)]">
                {contact.value}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors group-hover:text-[var(--accent-primary)]">
                <span>Connect</span>
                <svg
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Additional info */}
        <div className="animate-fade-in delay-600 mt-20 text-center">
          <div className="divider-accent mb-8" />
          <p className="text-sm text-[var(--foreground-muted)]">
            Based in <span className="text-[var(--foreground)]">Chile</span> · UTC-4
          </p>
        </div>
      </div>
    </div>
  );
}
