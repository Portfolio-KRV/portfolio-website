'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function ClusteringDemo() {
  return (
    <HFSpaceDemo
      slug="clustering"
      hfSpaceUrl={process.env.NEXT_PUBLIC_CLUSTERING_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/clustering"
      title={{
        en: 'Demo: Clustering Algorithms Comparison',
        es: 'Demo: Comparación de Algoritmos de Clustering',
      }}
      subtitle={{
        en: 'Compare K-Means, DBSCAN, and HAC on three datasets where the "best" algorithm changes with the geometry.',
        es: 'Compara K-Means, DBSCAN y HAC en tres datasets donde el "mejor" algoritmo cambia según la geometría.',
      }}
    />
  );
}
