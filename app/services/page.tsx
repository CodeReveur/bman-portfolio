import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import { fetchCorporateData } from '@/lib/corporate';

export const revalidate = 60;

export default async function ServicesPage() {
  const { services } = await fetchCorporateData();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
          <span>Technical Delivery</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-[-0.04em] text-white">
          Services
        </h1>
        <p className="mt-2 text-sm text-zinc-400 font-light max-w-xl">
          Purpose-built engineering for retail chains, logistics networks, and enterprise institutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id || service.slug}
            className="p-6 sm:p-8 rounded-3xl mono-card border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                  {service.delivery_model || 'Engineering'}
                </span>
              </div>

              <h2 className="text-lg font-medium text-white tracking-tight">
                {service.title}
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {service.description || service.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-light">Custom Scope</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-zinc-300 transition-colors"
              >
                <span>Inquire</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
