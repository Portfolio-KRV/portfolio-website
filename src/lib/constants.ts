import { ProjectCategory } from '@/types';

export const SITE_CONFIG = {
  name: 'Kevin Reyes',
  title: 'Kevin Reyes | CTO & Data Science Portfolio',
  description: 'CTO at FlowPagos. Data Science, Machine Learning, MLOps, and Leadership. Explore my projects and research.',
  url: 'https://kevinreyesv.dev',
  linkedin: 'https://linkedin.com/in/kevin-reyes-cs',
  github: 'https://github.com/Portfolio-KRV',
  // Bump this when site-wide content changes. Sitemap falls back to this
  // for pages/projects that don't carry their own updatedAt.
  lastUpdated: '2026-05-07',
} as const;

// Executive Clarity theme - category badges
export const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  'deep-learning': 'badge-deep-learning',
  'computer-vision': 'badge-computer-vision',
  'nlp': 'badge-nlp',
  'bayesian-networks': 'badge-nlp',
  'clustering': 'badge-machine-learning',
  'graphs': 'badge-machine-learning',
  'generative-models': 'badge-deep-learning',
  'machine-learning': 'badge-machine-learning',
  'recommendation-systems': 'badge-machine-learning',
} as const;

export type SkillCategory =
  | 'languages'
  | 'mlDl'
  | 'cloudMlops'
  | 'dataBi'
  | 'llmsAgents';

export interface SkillGroup {
  category: SkillCategory;
  skills: readonly string[];
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    category: 'languages',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'mlDl',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    category: 'cloudMlops',
    skills: ['AWS', 'SageMaker', 'Glue', 'Redshift', 'EKS', 'Docker', 'CI/CD', 'FastAPI'],
  },
  {
    category: 'dataBi',
    skills: ['Power BI', 'ETL', 'Data Warehousing'],
  },
  {
    category: 'llmsAgents',
    skills: ['LangChain', 'RAG', 'Multi-agent architectures', 'Prompt engineering'],
  },
] as const;

export const VALID_LANGUAGES = ['en', 'es'] as const;
