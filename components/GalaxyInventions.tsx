'use client';

import React from 'react';
import { Sparkles, Cpu, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INVENTIONS } from '@/lib/corporate';

export default function GalaxyInventions() {
  return (
    <section id="inventions" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            Inventions &amp; Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white">
            Breakthroughs for real-world constraints.
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-light">
            When standard cloud assumptions fail in Africa, we invent new architectural primitives.
          </p>
        </div>

        {/* 3 Core Inventions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {INVENTIONS.map((invention, idx) => (
            <div
              key={invention.id}
              className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border border-white/5 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    {invention.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-white tracking-tight">
                  {invention.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-300 font-normal">
                  {invention.headline}
                </p>

                <p className="mt-4 text-xs text-zinc-400 leading-relaxed font-light">
                  {invention.description}
                </p>

                {/* Specs */}
                <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                  {invention.technicalSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metric */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Impact</div>
                <div className="text-xs font-medium text-emerald-300">
                  {invention.impactMetric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
