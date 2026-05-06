import { ProjectCategory } from '@/types';

export const SITE_CONFIG = {
  name: 'Kevin Reyes',
  title: 'Kevin Reyes | CTO & Data Science Portfolio',
  description: 'CTO at FlowPagos. Data Science, Machine Learning, MLOps, and Leadership. Explore my projects and research.',
  url: 'https://kevinreyesv.dev',
  email: 'kevin.reyes@flowpagos.com',
  linkedin: 'https://linkedin.com/in/kevin-reyes-cs',
  github: 'https://github.com/Portfolio-KRV',
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

export const TECH_STACK = [
  'Python',
  'AWS',
  'TensorFlow',
  'PyTorch',
  'SQL',
] as const;

export const SKILLS = [
  'Python',
  'SQL',
  'AWS',
  'TensorFlow',
  'Keras',
  'PyTorch',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'SageMaker',
  'Glue',
  'Redshift',
  'Power BI',
  'MLOps',
  'CI/CD',
  'Docker',
  'FastAPI',
  'LangChain',
] as const;

export const VALID_LANGUAGES = ['en', 'es'] as const;
