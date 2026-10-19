import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { fetchCorporateData } from '@/lib/corporate';

export const revalidate = 60;

export default async function ProductsPage() {
  const { products } = await fetchCorporateData();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
          <span>Product Ecosystem</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-[-0.04em] text-white">
          Products
        </h1>
        <p className="mt-2 text-sm text-zinc-400 font-light max-w-xl">
          Sovereign software platforms engineered for scale and low-connectivity resilience.
        </p>
      </div>

      {/* Products Listing */}
      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id || product.slug}
            className="p-6 sm:p-8 rounded-3xl mono-card border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Left Info */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-black p-1 flex items-center justify-center border border-white/10 shrink-0">
                  <Image
                    src={product.logo_url || '/logo.png'}
                    alt={product.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white tracking-tight">
                    {product.name}
                  </h2>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  {product.badge || product.category}
                </span>
              </div>

              <p className="text-sm font-normal text-zinc-300">
                {product.tagline}
              </p>

              <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Minimalist Specs */}
              {product.metrics && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.metrics.split('·').map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-300 font-light"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Stack */}
              {product.tech_stack && (
                <div className="mt-3 text-[11px] font-mono text-zinc-500">
                  Stack: {product.tech_stack}
                </div>
              )}
            </div>

            {/* Right Action */}
            <div className="shrink-0">
              {product.product_url ? (
                <a
                  href={product.product_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <span className="text-xs text-zinc-500 font-mono">In Development</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
