'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function AttentionFeelingsDemo() {
  return (
    <HFSpaceDemo
      slug="attention-feelings"
      hfSpaceUrl={process.env.NEXT_PUBLIC_ATTENTION_FEELINGS_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/attention-feelings"
      title={{
        en: 'Demo: Sentiment Analysis with Attention',
        es: 'Demo: Análisis de Sentimiento con Atención',
      }}
      subtitle={{
        en: 'A bidirectional LSTM with Bahdanau-style attention trained on IMDB movie reviews. Predicts positive vs negative AND visualizes the per-token attention weights as a heatmap, so you can see which words the network actually leaned on.',
        es: 'Un LSTM bidireccional con atención estilo Bahdanau entrenado sobre reseñas de IMDB. Predice positivo vs negativo Y visualiza los pesos de atención por token como un heatmap, mostrando en qué palabras se apoyó realmente la red.',
      }}
      iframeHeight={1000}
    />
  );
}
