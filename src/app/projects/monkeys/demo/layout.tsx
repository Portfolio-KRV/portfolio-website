import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/projects/monkeys/demo');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
