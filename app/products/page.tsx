import { fetchCorporateData } from '@/lib/corporate';
import ProductsClient from './ProductsClient';

export const revalidate = 60;

export default async function ProductsPage() {
  const { products } = await fetchCorporateData();

  return <ProductsClient products={products} />;
}
