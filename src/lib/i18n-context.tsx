'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react';
import { translations, Language, TranslationKey } from './translations';
import { createLocalStorageStore } from './local-storage-store';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const languageStore = createLocalStorageStore<Language>({
  key: 'language',
  defaultValue: 'en',
  parse: (raw) => (raw === 'en' || raw === 'es' ? raw : 'en'),
  serialize: (v) => v,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    languageStore.subscribe,
    languageStore.getSnapshot,
    languageStore.getServerSnapshot,
  );

  // Keep <html lang> in sync so screen readers and crawlers see the right
  // locale. Root layout sets `lang="en"` at build time; this overrides it
  // client-side once the store settles.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: I18nContextType = {
    language,
    setLanguage: languageStore.set,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
