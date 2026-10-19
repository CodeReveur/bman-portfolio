import type { Metadata } from 'next';
import { fetchCorporateData } from '@/lib/corporate';
import ProductsClient from './ProductsClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Products & Contributed Projects',
  description:
    'Explore BMan software products, point of sale engines, offline POS platforms, and contributed enterprise client projects.',
  alternates: {
    canonical: 'https://bman.rw/products',
  },
  openGraph: {
    title: 'Products & Contributed Projects · BMan',
    description:
      'Explore BMan software products, point of sale engines, offline POS platforms, and contributed enterprise client projects.',
    url: 'https://bman.rw/products',
  },
};

export default async function ProductsPage() {
  const { products, projects } = await fetchCorporateData();

  return <ProductsClient products={products} projects={projects} />;
}
