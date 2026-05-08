import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';
import { SITE_CONFIG } from '@/lib/constants';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: '%s | Kevin Reyes',
  },
  description: SITE_CONFIG.description,
  keywords: ['Data Science', 'Machine Learning', 'MLOps', 'CTO', 'Portfolio', 'Kevin Reyes', 'FlowPagos', 'AI', 'Deep Learning'],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    alternateLocale: ['es_CL'],
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kevin Reyes - CTO & Data Science Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_CONFIG.name,
  jobTitle: 'Chief Technology Officer',
  worksFor: {
    '@type': 'Organization',
    name: 'FlowPagos',
  },
  url: SITE_CONFIG.url,
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
  knowsAbout: [
    'Data Science',
    'Machine Learning',
    'MLOps',
    'Deep Learning',
    'Python',
    'AWS',
    'TensorFlow',
    'Leadership',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-[var(--background)] transition-colors duration-300">
            <Navbar />
            <main id="main-content" className="relative z-10 flex-1 pt-16" role="main">
              {children}
            </main>
            <Footer />
            {/* Spacer so the floating chat button never overlaps footer content on mobile */}
            <div aria-hidden="true" className="h-20 sm:h-0" />
          </div>
          <ChatWidget />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
