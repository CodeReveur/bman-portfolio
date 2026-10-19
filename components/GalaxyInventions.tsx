'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  Shield,
  Layers,
  Zap,
  ArrowRight,
  CheckCircle2,
  X,
  Code,
  HardDrive,
  GitBranch,
} from 'lucide-react';
import { INVENTIONS, Invention } from '@/lib/corporate';

export default function GalaxyInventions() {
  const [selectedInvention, setSelectedInvention] = useState<Invention | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'inv-dual-engine':
        return HardDrive;
      case 'inv-airgap-license':
        return Shield;
      case 'inv-event-relay':
        return Zap;
      default:
        return Cpu;
    }
  };

  return (
    <section id="inventions" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            Proprietary Innovations &amp; Inventions
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Built for Unforgiving Realities.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Engineered to Never Fail.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Standard Silicon Valley software crashes when the fiber cuts or internet drops. BMan invents bottom-up systems with cryptographic edge resilience, deterministic dual engines, and sovereign in-country data residency.
          </p>
        </div>

        {/* Inventions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INVENTIONS.map((inv) => {
            const Icon = getIcon(inv.id);
            return (
              <div
                key={inv.id}
                className="group relative rounded-3xl p-6 sm:p-8 bg-[#0a0f1d]/80 border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col justify-between"
              >
                {/* Iridescent Corner Accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-emerald-500/10 via-cyan-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {inv.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400/90 block mb-1">
                    {inv.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {inv.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1 mb-4 font-mono">
                    {inv.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {inv.description}
                  </p>

                  {/* Technical Highlights list */}
                  <div className="space-y-2 mb-6">
                    {inv.technicalSpecs.slice(0, 3).map((spec) => (
                      <div key={spec} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-mono font-medium">
                    {inv.impactMetric}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedInvention(inv)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Invention Deep-Dive Modal */}
      {selectedInvention && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0a0f1d] border border-white/20 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedInvention(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                {selectedInvention.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {selectedInvention.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {selectedInvention.name}
            </h3>
            <p className="text-sm font-medium text-emerald-400 font-mono mb-4">
              {selectedInvention.headline}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {selectedInvention.description}
            </div>

            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Full Technical Specifications &amp; Architectural Guarantees
            </h4>
            <div className="space-y-2.5 mb-6">
              {selectedInvention.technicalSpecs.map((spec) => (
                <div key={spec} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{spec}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center justify-between">
              <span>Impact Guarantee:</span>
              <strong className="font-semibold">{selectedInvention.impactMetric}</strong>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedInvention(null)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
