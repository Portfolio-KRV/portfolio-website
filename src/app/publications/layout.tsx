import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/publications');

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
