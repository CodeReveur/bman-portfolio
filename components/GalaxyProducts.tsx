'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Globe2,
  ExternalLink,
} from 'lucide-react';
import { CorporateProduct } from '@/lib/corporate';

export default function GalaxyProducts({ products }: { products: CorporateProduct[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProduct = products[selectedIndex] || products[0];

  return (
    <section id="products" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers size={13} />
              Product Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white">
              Systems engineered for scale.
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl font-light">
              Each platform operates autonomously or integrates seamlessly with the BMan suite.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500 bg-zinc-900/40 px-3 py-1.5 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live sync from mobile.bman.rw</span>
          </div>
        </div>

        {/* Listing Mechanics: Constellation Selector Rail */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none">
          {products.map((product, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={product.id || product.slug}
                onClick={() => setSelectedIndex(idx)}
                className={`relative flex items-center gap-3 px-4 py-2.5 rounded-full text-left transition-all duration-200 shrink-0 border ${
                  isSelected
                    ? 'bg-zinc-900 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.25)] text-white'
                    : 'bg-zinc-950/60 border-white/5 hover:border-white/15 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-black/40 flex items-center justify-center p-0.5 shrink-0">
                  <Image
                    src={product.logo_url || '/logo.png'}
                    alt={product.name}
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium tracking-tight text-white">{product.name}</span>
                  <span className="text-[10px] text-zinc-500">{product.category}</span>
                </div>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Product Spotlight Stage */}
        {activeProduct && (
          <div className="mt-8 rounded-3xl p-6 sm:p-10 glass-panel border border-white/10 relative overflow-hidden transition-all duration-300">
            {/* Background subtle sheen */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Product Overview */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      {activeProduct.badge || 'Active'}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {activeProduct.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {activeProduct.name}
                  </h3>

                  <p className="mt-2 text-base font-normal text-zinc-300">
                    {activeProduct.tagline}
                  </p>

                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Metrics Highlight */}
                {activeProduct.metrics && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mb-2">
                      Capabilities &amp; Reliability
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.metrics.split('·').map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-xs text-zinc-300 font-light"
                        >
                          <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                          <span>{item.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Tags */}
                {activeProduct.tech_stack && (
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-zinc-500 font-mono mr-1">Stack:</span>
                    {activeProduct.tech_stack.split(',').map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-400 font-mono"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Actions Card */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between h-full gap-6">
                <div className="w-full p-5 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400">Target Domain</span>
                    <span className="text-xs font-mono text-emerald-400">
                      {activeProduct.product_url ? new URL(activeProduct.product_url).hostname : 'bman.rw'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400">Status</span>
                    <span className="flex items-center gap-1.5 text-xs text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Production
                    </span>
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row gap-3">
                  {activeProduct.product_url && (
                    <a
                      href={activeProduct.product_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                    >
                      <span>Launch {activeProduct.name}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-colors"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compact Grid of Other Products */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <div
              key={product.id || product.slug}
              onClick={() => setSelectedIndex(idx)}
              className={`p-5 rounded-2xl glass-panel glass-panel-hover cursor-pointer flex flex-col justify-between border transition-all ${
                idx === selectedIndex ? 'border-emerald-500/40 bg-zinc-900/80' : 'border-white/5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-black/40 p-1 flex items-center justify-center border border-white/5">
                    <Image
                      src={product.logo_url || '/logo.png'}
                      alt={product.name}
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                    {product.badge || product.category}
                  </span>
                </div>
                <h4 className="text-base font-medium text-white tracking-tight">{product.name}</h4>
                <p className="mt-1 text-xs text-zinc-400 font-light line-clamp-2">{product.tagline}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-mono">{product.category}</span>
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                  Select <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
