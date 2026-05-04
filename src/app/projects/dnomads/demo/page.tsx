'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function DnomadsDemo() {
  return (
    <HFSpaceDemo
      slug="dnomads"
      hfSpaceUrl={process.env.NEXT_PUBLIC_DNOMADS_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/dnomads"
      title={{
        en: 'Demo: Travel Package Cost Predictor',
        es: 'Demo: Predictor de Costos de Paquetes de Viaje',
      }}
      subtitle={{
        en: 'Ridge regression enriched with two scraped lookup tables (city distances + airline cost-per-km) that boosted R² from 0.62 to 0.91.',
        es: 'Regresión Ridge enriquecida con dos tablas externas raspeadas (distancias entre ciudades + costo por km de aerolíneas) que llevó el R² de 0.62 a 0.91.',
      }}
    />
  );
}
