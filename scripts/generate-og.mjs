/**
 * Generates public/og-image.png — the social-share preview rendered when the
 * site URL is shared on LinkedIn, X, WhatsApp, etc.
 *
 *   node scripts/generate-og.mjs
 *
 * Inter TTFs are downloaded once into .fonts/ (gitignored) on first run.
 * Re-run after editing the layout/copy below.
 */

import { createElement as h } from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const FONT_DIR = path.join(projectRoot, '.fonts');
const OUTPUT_PATH = path.join(projectRoot, 'public', 'og-image.png');

// Static TTFs served via jsdelivr's mirror of Fontsource. Satori needs static
// TTFs (the variable Inter has tables opentype.js can't parse).
const FONTS = [
  {
    name: 'inter-400.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf',
    weight: 400,
  },
  {
    name: 'inter-600.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.ttf',
    weight: 600,
  },
  {
    name: 'inter-700.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf',
    weight: 700,
  },
];

async function ensureFont({ name, url, weight }) {
  const filePath = path.join(FONT_DIR, name);
  try {
    await fs.access(filePath);
  } catch {
    process.stdout.write(`Downloading ${name}... `);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to download ${name}: ${res.status}`);
    await fs.mkdir(FONT_DIR, { recursive: true });
    await fs.writeFile(filePath, Buffer.from(await res.arrayBuffer()));
    process.stdout.write('OK\n');
  }
  return {
    name: 'Inter',
    data: await fs.readFile(filePath),
    weight,
    style: 'normal',
  };
}

async function loadFonts() {
  return Promise.all(FONTS.map(ensureFont));
}

const COLORS = {
  background: '#FAFAFA',
  foreground: '#18181B',
  foregroundMuted: '#71717A',
  accent: '#1E3A5F',
};

function tree() {
  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: COLORS.background,
        padding: '80px',
        fontFamily: 'Inter',
      },
    },
    // Top label
    h(
      'div',
      {
        style: {
          fontSize: 16,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: COLORS.foregroundMuted,
          fontWeight: 600,
        },
      },
      'kevinreyesv.dev',
    ),
    // Spacer
    h('div', { style: { flex: '1', display: 'flex' } }),
    // Main content
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column' } },
      h(
        'div',
        {
          style: {
            fontSize: 96,
            fontWeight: 700,
            color: COLORS.foreground,
            lineHeight: 1.05,
            marginBottom: 16,
            letterSpacing: '-0.02em',
          },
        },
        'Kevin Reyes',
      ),
      h(
        'div',
        {
          style: {
            fontSize: 36,
            fontWeight: 600,
            color: COLORS.accent,
            marginBottom: 36,
          },
        },
        'CTO at FlowPagos',
      ),
      h(
        'div',
        {
          style: {
            fontSize: 28,
            color: COLORS.foregroundMuted,
            lineHeight: 1.4,
            maxWidth: 1000,
            fontWeight: 400,
          },
        },
        'Production AI, data infrastructure, and the teams that ship them.',
      ),
    ),
    // Spacer
    h('div', { style: { flex: '1', display: 'flex' } }),
    // Bottom badges
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column' } },
      h('div', {
        style: {
          width: 88,
          height: 2,
          backgroundColor: COLORS.accent,
          marginBottom: 18,
        },
      }),
      h(
        'div',
        {
          style: {
            fontSize: 16,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: COLORS.foregroundMuted,
            fontWeight: 600,
          },
        },
        '25+ People Led  ·  IEEE CAI 2025  ·  Payments Platform',
      ),
    ),
  );
}

async function main() {
  const fonts = await loadFonts();

  const svg = await satori(tree(), {
    width: 1200,
    height: 630,
    fonts,
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    background: COLORS.background,
  });
  const png = resvg.render().asPng();

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, png);
  const stats = await fs.stat(OUTPUT_PATH);
  console.log(`Generated ${OUTPUT_PATH} (${(stats.size / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
