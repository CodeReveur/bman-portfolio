import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 my-auto flex flex-col justify-center">
      {/* Location / Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 w-fit mb-8">
        <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
        <span className="text-xs font-mono text-zinc-300">
          Kigali, Rwanda
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-white leading-[1.05] max-w-4xl text-balance">
        Software that powers African commerce.
      </h1>

      {/* 1-Sentence Subtitle */}
      <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-light">
        We build offline-first retail systems, sales agent networks, and resilient infrastructure that keeps business running even when connectivity fails.
      </p>

      {/* Call to Actions */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
        >
          <span>Explore Products</span>
          <ArrowRight size={14} />
        </Link>
        <Link
          href="/inventions"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-zinc-950 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
        >
          <span>Our Inventions</span>
        </Link>
      </div>

      {/* Minimal 3-Column Highlights */}
      <div className="mt-16 sm:mt-24 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/products"
          className="p-6 rounded-2xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Flagship Product
            </div>
            <h3 className="text-lg font-medium text-white group-hover:text-zinc-200 transition-colors">
              BMan Stock
            </h3>
            <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
              Offline-first point of sale and inventory management for Rwandan shops and wholesalers.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-xs text-zinc-400 group-hover:text-white transition-colors">
            <span>View ecosystem</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/services"
          className="p-6 rounded-2xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Capabilities
            </div>
            <h3 className="text-lg font-medium text-white group-hover:text-zinc-200 transition-colors">
              Custom Engineering
            </h3>
            <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
              Enterprise ERP, offline-first architectures, and direct Mobile Money payment integrations.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-xs text-zinc-400 group-hover:text-white transition-colors">
            <span>View capabilities</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/inventions"
          className="p-6 rounded-2xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Deep Technology
            </div>
            <h3 className="text-lg font-medium text-white group-hover:text-zinc-200 transition-colors">
              Core Inventions
            </h3>
            <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
              Dual-engine edge sync, airgap licensing, and driverless hardware printing bridges.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-xs text-zinc-400 group-hover:text-white transition-colors">
            <span>View inventions</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
