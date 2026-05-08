import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { projectsData } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const fallbackDate = new Date(SITE_CONFIG.lastUpdated);

  const staticPages = [
    {
      url: baseUrl,
      lastModified: fallbackDate,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: fallbackDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: fallbackDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: fallbackDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: fallbackDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: fallbackDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt ? new Date(project.updatedAt) : fallbackDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
