'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n-context';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const { t, language } = useI18n();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.experience, href: '/experience' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.publications, href: '/publications' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const menuLabel = language === 'es'
    ? (mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú')
    : (mobileMenuOpen ? 'Close menu' : 'Open menu');

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm transition-colors"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
            aria-label="Kevin Reyes - Home"
          >
            <span className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              Kevin Reyes
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] ${
                  isActive(item.href)
                    ? 'text-[var(--accent-primary)]'
                    : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-[var(--accent-primary)]" />
                )}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-2 border-l border-[var(--border)] pl-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={menuLabel}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="rounded border border-[var(--border)] p-2 text-[var(--foreground-muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-b border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-sm transition-colors md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        role="menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`block px-4 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] ${
                isActive(item.href)
                  ? 'text-[var(--accent-primary)]'
                  : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
