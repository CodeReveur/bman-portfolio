import type { Metadata } from 'next';
import { fetchCorporateData } from '@/lib/corporate';
import ServicesClient from './ServicesClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Engineering & Advisory Services',
  description:
    'Custom offline-first software engineering, retail POS deployments, IoT telemetry, and sovereign cloud migration services by BMan in Kigali.',
  alternates: {
    canonical: 'https://bman.rw/services',
  },
  openGraph: {
    title: 'Engineering & Advisory Services · BMan',
    description:
      'Custom offline-first software engineering, retail POS deployments, IoT telemetry, and sovereign cloud migration services by BMan in Kigali.',
    url: 'https://bman.rw/services',
  },
};

export default async function ServicesPage() {
  const { services } = await fetchCorporateData();

  return <ServicesClient services={services} />;
}
