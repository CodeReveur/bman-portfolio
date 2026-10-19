import { fetchCorporateData } from '@/lib/corporate';
import {
  GalaxyCanvas,
  GalaxyNavbar,
  GalaxyHero,
  GalaxyInventions,
  GalaxyProducts,
  GalaxyServices,
  GalaxyAbout,
  GalaxyCareers,
  GalaxyContact,
  GalaxyFooter,
} from '@/components';

export const revalidate = 60;

export default async function HomePage() {
  const { products, services } = await fetchCorporateData();

  return (
    <main className="relative min-h-screen bg-[#030712] text-zinc-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Interactive 3D Cosmic Galaxy Starfield Background */}
      <GalaxyCanvas />

      {/* Navigation */}
      <GalaxyNavbar />

      {/* Hero Section */}
      <GalaxyHero />

      {/* Inventions & Deep-Tech Innovations */}
      <GalaxyInventions />

      {/* Products Ecosystem (Managed dynamically via mobile.bman.rw Super Admin) */}
      <GalaxyProducts products={products} />

      {/* Commercial Services Listing */}
      <GalaxyServices services={services} />

      {/* About BMan, Leadership & Guiding Principles */}
      <GalaxyAbout />

      {/* Careers & Engineering Culture */}
      <GalaxyCareers />

      {/* Contact HQ & Verified Channels */}
      <GalaxyContact />

      {/* Footer */}
      <GalaxyFooter />
    </main>
  );
}
