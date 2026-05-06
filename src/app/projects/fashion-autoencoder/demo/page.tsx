'use client';

import { HFSpaceDemo } from '@/components/HFSpaceDemo';

export default function FashionAutoencoderDemo() {
  return (
    <HFSpaceDemo
      slug="fashion-autoencoder"
      hfSpaceUrl={process.env.NEXT_PUBLIC_FASHION_AUTOENCODER_HF_URL ?? ''}
      githubUrl="https://github.com/Portfolio-KRV/fashion-autoencoder"
      title={{
        en: 'Demo: Fashion Autoencoder',
        es: 'Demo: Autoencoder de Moda',
      }}
      subtitle={{
        en: 'Three trained autoencoders on Fashion MNIST: reconstruction (dense vs conv), denoising, and latent-space interpolation between two samples.',
        es: 'Tres autoencoders entrenados sobre Fashion MNIST: reconstrucción (denso vs convolucional), denoising e interpolación en el espacio latente entre dos muestras.',
      }}
      iframeHeight={1100}
    />
  );
}
