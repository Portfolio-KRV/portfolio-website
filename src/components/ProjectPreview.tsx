'use client';

import { useState } from 'react';

interface ProjectPreviewProps {
  slug: string;
  alt?: string;
}

/**
 * Renders /public/previews/<slug>.gif if it exists, falls back to <slug>.png,
 * and hides itself if neither is found. Add a preview by dropping a file at
 * portfolio-website/public/previews/<slug>.{gif,png}.
 */
export function ProjectPreview({ slug, alt }: ProjectPreviewProps) {
  const [extension, setExtension] = useState<'gif' | 'png' | 'none'>('gif');

  if (extension === 'none') return null;

  return (
    <figure className="animate-fade-in mb-12 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm">
      <img
        src={`/previews/${slug}.${extension}`}
        alt={alt ?? `${slug} preview`}
        className="mx-auto block max-w-full"
        onError={() => {
          if (extension === 'gif') setExtension('png');
          else setExtension('none');
        }}
      />
    </figure>
  );
}
