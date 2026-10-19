import type { Metadata } from 'next';
import { fetchCorporateData } from '@/lib/corporate';
import AboutClient from './AboutClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About & Leadership',
  description:
    'Learn about BMan, our software engineering philosophy, offline-first architectures, and the executive leadership team in Kigali, Rwanda.',
  alternates: {
    canonical: 'https://bman.rw/about',
  },
  openGraph: {
    title: 'About & Leadership · BMan',
    description:
      'Learn about BMan, our software engineering philosophy, offline-first architectures, and the executive leadership team in Kigali, Rwanda.',
    url: 'https://bman.rw/about',
  },
};

export default async function AboutPage() {
  const { team, config } = await fetchCorporateData();

  return <AboutClient team={team} config={config} />;
}
