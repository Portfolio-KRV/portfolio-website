'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function CommunitiesGraphDemo() {
  return (
    <HFSpaceDemo
      slug="communities-graph"
      hfSpaceUrl={process.env.NEXT_PUBLIC_COMMUNITIES_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/communities-graph"
      title={{
        en: 'Demo: Community Detection in Graphs',
        es: 'Demo: Detección de Comunidades en Grafos',
      }}
      subtitle={{
        en: 'Find groups of nodes densely connected to each other using the Louvain algorithm. Tested on a social benchmark, a synthetic graph, and a real Enron email subset.',
        es: 'Encuentra grupos de nodos densamente conectados usando el algoritmo Louvain. Probado en un benchmark social, un grafo sintético y un subset real de emails de Enron.',
      }}
    />
  );
}
