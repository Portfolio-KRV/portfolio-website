'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function SignlangDemo() {
  return (
    <HFSpaceDemo
      slug="signlang"
      hfSpaceUrl={process.env.NEXT_PUBLIC_SIGNLANG_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/signlang"
      title={{
        en: 'Demo: Sign Language Recognition (ASL alphabet)',
        es: 'Demo: Reconocimiento de Lenguaje de Señas (alfabeto ASL)',
      }}
      subtitle={{
        en: 'A CNN classifies hand signs for 24 letters of the American Sign Language alphabet. Use webcam or upload a photo.',
        es: 'Una CNN clasifica gestos de manos para 24 letras del alfabeto ASL. Usa webcam o sube una foto.',
      }}
      iframeHeight={900}
    />
  );
}
