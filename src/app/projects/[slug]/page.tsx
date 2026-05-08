import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projectsData } from '@/lib/projects';
import { ProjectContent } from '@/components/ProjectContent';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_CONFIG.url}/projects/${slug}`;

  return {
    title: project.title.en,
    description: project.description.en,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title.en} | Kevin Reyes Portfolio`,
      description: project.description.en,
      type: 'article',
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title.en,
      description: project.description.en,
    },
  };
}

export default async function ProjectPage({ params }: Readonly<PageProps>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const url = `${SITE_CONFIG.url}/projects/${slug}`;

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title.en,
    description: project.description.en,
    url,
    inLanguage: ['en', 'es'],
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    codeRepository: project.githubUrl,
    keywords: project.technologies.join(', '),
    about: project.category,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_CONFIG.url}/projects` },
      { '@type': 'ListItem', position: 3, name: project.title.en, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProjectContent project={project} />
    </>
  );
}
