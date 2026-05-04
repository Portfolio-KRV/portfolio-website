'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function MonkeysDemo() {
  return (
    <HFSpaceDemo
      slug="monkeys"
      hfSpaceUrl={process.env.NEXT_PUBLIC_MONKEYS_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/monkeys"
      title={{
        en: 'Demo: Monkey Species Classifier with Grad-CAM',
        es: 'Demo: Clasificador de Especies de Monos con Grad-CAM',
      }}
      subtitle={{
        en: 'A VGG16 CNN classifies 10 monkey species and visualizes which pixels it looked at to decide.',
        es: 'Una CNN VGG16 clasifica 10 especies de monos y visualiza qué píxeles miró para decidir.',
      }}
      iframeHeight={900}
    />
  );
}
