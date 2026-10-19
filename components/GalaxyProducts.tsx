'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Code2,
  Zap,
} from 'lucide-react';
import { CorporateProduct } from '@/lib/corporate';

export default function GalaxyProducts({ products }: { products: CorporateProduct[] }) {
  const [selectedProduct, setSelectedProduct] = useState<CorporateProduct | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = activeCategory === 'ALL'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Layers size={13} />
              Sovereign Ecosystem
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              BMan Products &amp;{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                Platforms.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
              Production platforms deployed in the field across retail counters, enterprise communications, field sales logistics, and vehicle telemetry.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="group relative rounded-3xl p-6 sm:p-7 bg-[#0a0f1d]/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/30 flex flex-col justify-between"
            >
              <div>
                {/* Header: Logo + Badges */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/15 p-2 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                      {prod.logo_url ? (
                        <Image
                          src={prod.logo_url}
                          alt={prod.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      ) : (
                        <Layers size={24} className="text-emerald-400" />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    {prod.badge && (
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                        {prod.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {prod.category}
                    </span>
                  </div>
                </div>

                {/* Product Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {prod.name}
                </h3>
                <p className="mt-1 text-xs text-slate-300 font-medium font-mono leading-snug">
                  {prod.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {prod.description}
                </p>

                {/* Metrics Highlight */}
                {prod.metrics && (
                  <div className="mt-4 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-mono text-emerald-400/90 flex items-center gap-2">
                    <Zap size={13} className="shrink-0 text-amber-400" />
                    <span className="truncate">{prod.metrics}</span>
                  </div>
                )}

                {/* Tech Stack Pills */}
                {prod.tech_stack && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {prod.tech_stack.split(',').map((tech) => (
                      <span
                        key={tech.trim()}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(prod)}
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  View Blueprint
                </button>

                {prod.product_url ? (
                  <a
                    href={prod.product_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black border border-emerald-500/25 text-xs font-semibold transition-all duration-200"
                  >
                    <span>Launch</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">In Development</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0a0f1d] border border-white/20 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/15 p-2 flex items-center justify-center">
                {selectedProduct.logo_url ? (
                  <Image
                    src={selectedProduct.logo_url}
                    alt={selectedProduct.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                ) : (
                  <Layers size={24} className="text-emerald-400" />
                )}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProduct.name}
                </h3>
                <span className="text-xs font-mono text-emerald-400">
                  {selectedProduct.category} · {selectedProduct.badge}
                </span>
              </div>
            </div>

            <p className="text-sm font-mono text-slate-300 mb-4">
              {selectedProduct.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProduct.description}
            </div>

            {selectedProduct.metrics && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 mb-6 flex items-center gap-2">
                <Zap size={15} className="text-amber-400 shrink-0" />
                <strong>Production Metric:</strong>
                <span>{selectedProduct.metrics}</span>
              </div>
            )}

            {selectedProduct.tech_stack && (
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Underlying Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.tech_stack.split(',').map((tech) => (
                    <span
                      key={tech.trim()}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded-xl bg-white/5 text-xs text-slate-300 hover:text-white"
              >
                Close
              </button>

              {selectedProduct.product_url && (
                <a
                  href={selectedProduct.product_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
