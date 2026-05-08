'use client';

/**
 * Build a tiny subscribable store backed by localStorage.
 *
 * Designed to be consumed via React's useSyncExternalStore — that's the
 * idiomatic way to read external mutable state without `setState in
 * useEffect` cascades. Cross-tab updates are picked up via the `storage`
 * event; same-tab updates fire listeners directly when set() is called.
 *
 * On the server (and during the very first hydration render) the store
 * returns `defaultValue`; React then schedules a re-render with the real
 * client value once it can read from localStorage. That's the same
 * "flash before settling" trade-off the previous mounted-guard had — but
 * without the lint cascade warnings.
 */
export interface LocalStorageStore<T> {
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => T;
  getServerSnapshot: () => T;
  set: (value: T) => void;
}

export function createLocalStorageStore<T>(opts: {
  key: string;
  defaultValue: T;
  parse: (raw: string | null) => T;
  serialize: (value: T) => string;
}): LocalStorageStore<T> {
  const listeners = new Set<() => void>();

  return {
    subscribe(listener) {
      listeners.add(listener);
      const onStorage = (e: StorageEvent) => {
        if (e.key === opts.key) listener();
      };
      window.addEventListener('storage', onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener('storage', onStorage);
      };
    },
    getSnapshot() {
      if (typeof window === 'undefined') return opts.defaultValue;
      return opts.parse(localStorage.getItem(opts.key));
    },
    getServerSnapshot() {
      return opts.defaultValue;
    },
    set(value: T) {
      if (typeof window !== 'undefined') {
        localStorage.setItem(opts.key, opts.serialize(value));
      }
      listeners.forEach((l) => l());
    },
  };
}
