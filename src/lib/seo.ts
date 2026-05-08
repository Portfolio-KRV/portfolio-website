import type { Metadata } from 'next';

/**
 * Per-page metadata helper. The root layout intentionally does NOT declare
 * a canonical — pages that need one declare their own (relative to
 * metadataBase set in the root layout) so subpages don't all inherit the
 * home URL as their canonical.
 *
 * Top-level pages in this app are 'use client' (they use the i18n context),
 * so metadata can't live in the page itself. Each subroute has a server
 * layout.tsx that calls this helper.
 */
export function pageMetadata(path: string): Metadata {
  return {
    alternates: {
      canonical: path,
    },
  };
}
