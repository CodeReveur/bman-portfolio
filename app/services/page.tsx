import { fetchCorporateData } from '@/lib/corporate';
import ServicesClient from './ServicesClient';

export const revalidate = 60;

export default async function ServicesPage() {
  const { services } = await fetchCorporateData();

  return <ServicesClient services={services} />;
}
