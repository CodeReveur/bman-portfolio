import type { Metadata } from 'next';
import { fetchCorporateData } from '@/lib/corporate';
import ContactClient from './ContactClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Contact Operations & Direct Line',
  description:
    'Reach out to BMan for enterprise offline POS deployments, software partnerships, and engineering inquiries in Kigali, Rwanda.',
  alternates: {
    canonical: 'https://bman.rw/contact',
  },
  openGraph: {
    title: 'Contact Operations & Direct Line · BMan',
    description:
      'Reach out to BMan for enterprise offline POS deployments, software partnerships, and engineering inquiries in Kigali, Rwanda.',
    url: 'https://bman.rw/contact',
  },
};

export default async function ContactPage() {
  const { config } = await fetchCorporateData();

  return <ContactClient config={config} />;
}
