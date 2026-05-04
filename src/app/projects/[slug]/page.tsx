import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projectsData } from '@/lib/projects';
import { ProjectContent } from '@/components/ProjectContent';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title.en,
    description: project.description.en,
    openGraph: {
      title: `${project.title.en} | Kevin Reyes Portfolio`,
      description: project.description.en,
      type: 'article',
      url: `${SITE_CONFIG.url}/projects/${slug}`,
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

  return <ProjectContent project={project} />;
}
