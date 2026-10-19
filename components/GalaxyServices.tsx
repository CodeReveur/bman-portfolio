'use client';

import React from 'react';
import {
  Layers,
  Shield,
  Wallet,
  Cpu,
  Radio,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { CorporateService } from '@/lib/corporate';

export default function GalaxyServices({ services }: { services: CorporateService[] }) {
  const getIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case 'shield':
        return Shield;
      case 'wallet':
        return Wallet;
      case 'cpu':
        return Cpu;
      case 'radio':
        return Radio;
      case 'compass':
        return Compass;
      default:
        return Layers;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Compass size={13} />
            Engineering &amp; Sovereign Services
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Specialized Engineering for{' '}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              High-Stakes Missions.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Beyond standard commercial software, BMan provides sovereign cloud deployment, payment aggregator integrations, custom enterprise ERPs, and edge telemetry consulting.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const Icon = getIcon(srv.icon);
            return (
              <div
                key={srv.id}
                className="group relative rounded-3xl p-6 sm:p-7 bg-[#0a0f1d]/80 border border-white/10 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="h-11 w-11 rounded-2xl bg-violet-500/10 border border-violet-500/25 text-violet-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    {srv.delivery_model && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {srv.delivery_model}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {srv.summary}
                  </p>

                  {srv.description && (
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed font-mono">
                      {srv.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    BMan Engineering
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-white transition-colors"
                  >
                    <span>Request Scope</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
