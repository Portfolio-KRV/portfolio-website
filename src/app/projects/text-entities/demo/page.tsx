'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function TextEntitiesDemo() {
  return (
    <HFSpaceDemo
      slug="text-entities"
      hfSpaceUrl={process.env.NEXT_PUBLIC_TEXT_ENTITIES_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/text-entities"
      title={{
        en: 'Demo: Named Entity Recognition',
        es: 'Demo: Reconocimiento de Entidades Nombradas',
      }}
      subtitle={{
        en: 'spaCy-based NER pipeline. Identifies people, organizations, locations, dates, money, and 12 other entity types in English text. Runs in ~50-100 ms on CPU.',
        es: 'Pipeline de NER basado en spaCy. Identifica personas, organizaciones, lugares, fechas, dinero y otros 12 tipos de entidades en texto en inglés. Corre en ~50-100 ms en CPU.',
      }}
      iframeHeight={900}
    />
  );
}
