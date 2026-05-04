export interface Project {
  slug: string;
  title: string;
  description: string;
  objectives: string[];
  conclusions: string[];
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  hasDemoAvailable: boolean;
  coAuthors?: string[];
  course: string;
}

export type ProjectCategory =
  | 'deep-learning'
  | 'computer-vision'
  | 'nlp'
  | 'bayesian-networks'
  | 'clustering'
  | 'graphs'
  | 'generative-models'
  | 'machine-learning'
  | 'recommendation-systems';

export interface NavItem {
  label: string;
  href: string;
}
