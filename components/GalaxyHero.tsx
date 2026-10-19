'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function GalaxyHero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Location / Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md shadow-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-zinc-300">
            BMan Technologies Ltd · Kigali, Rwanda
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.035em] text-white leading-[1.08] text-balance max-w-4xl mx-auto">
          Software that powers{' '}
          <span className="rainbow-text font-medium">African commerce</span>.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed text-pretty font-light">
          We build offline-first point-of-sale engines, distributed sales networks, and resilient infrastructure that keeps business moving even when the internet doesn&apos;t.
        </p>

        {/* Action CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]"
          >
            <span>Explore Products</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white rounded-full bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Minimal Metrics Row */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-medium tracking-tight text-white">1,200+</div>
            <div className="text-xs text-zinc-400 mt-1">Retail counters &amp; shops</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-medium tracking-tight text-emerald-400">100%</div>
            <div className="text-xs text-zinc-400 mt-1">Offline-first continuity</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-medium tracking-tight text-white">&lt; 5ms</div>
            <div className="text-xs text-zinc-400 mt-1">Local counter latency</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-medium tracking-tight text-cyan-400">5</div>
            <div className="text-xs text-zinc-400 mt-1">Ecosystem platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
}
