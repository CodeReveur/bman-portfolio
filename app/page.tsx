import type { Metadata } from 'next';
import { fetchCorporateData } from '@/lib/corporate';
import HomeClient from './HomeClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'BMan · We Create, Develop & Partner Software',
  description:
    'BMan is a Rwandan software engineering company that creates, develops, and partners software systems, retail POS engines, and sovereign digital platforms.',
  alternates: {
    canonical: 'https://bman.rw',
  },
  openGraph: {
    title: 'BMan · We Create, Develop & Partner Software',
    description:
      'BMan is a Rwandan software engineering company that creates, develops, and partners software systems, retail POS engines, and sovereign digital platforms.',
    url: 'https://bman.rw',
  },
};

export default async function HomePage() {
  const { partners } = await fetchCorporateData();

  return <HomeClient partners={partners} />;
}
