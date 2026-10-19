'use client';

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export default function GalaxyHero() {
  const stats = [
    {
      metric: '100%',
      label: 'Sovereign Architecture',
      detail: 'In-country hosting · Zero foreign phone-home telemetry',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/25',
      bg: 'bg-emerald-500/5',
    },
    {
      metric: '0.0ms',
      label: 'Edge Counter Latency',
      detail: 'SQLite local offline persistence with background syncing',
      icon: Zap,
      color: 'text-cyan-400',
      border: 'border-cyan-500/25',
      bg: 'bg-cyan-500/5',
    },
    {
      metric: '1,200+',
      label: 'Active Businesses',
      detail: 'Counters, distribution depots, and retail chains across Rwanda',
      icon: Layers,
      color: 'text-violet-400',
      border: 'border-violet-500/25',
      bg: 'bg-violet-500/5',
    },
    {
      metric: 'Sub-Sec',
      label: 'Financial Rails',
      detail: 'Direct MTN MoMo OpenAPI, Airtel Money & card clearing',
      icon: Cpu,
      color: 'text-amber-400',
      border: 'border-amber-500/25',
      bg: 'bg-amber-500/5',
    },
  ];

  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Radiant Cosmic Backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-emerald-600/20 via-cyan-600/15 to-violet-600/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Orbital Beacon Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-8 group hover:border-emerald-500/40 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            BMan Technologies · Kigali, Rwanda
          </span>
          <span className="text-xs text-slate-500 font-mono">/</span>
          <span className="text-xs font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Sovereign Engineering Core
          </span>
        </div>

        {/* Grand Headline with Rainbow Cosmic Gradient */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Engineering Africa’s{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
            Sovereign Technological
          </span>{' '}
          Universe.
        </h1>

        {/* Minimal but punchy contextual subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          We architect mission-critical systems engineered for the reality of African commerce: offline-first retail dual-engines, sovereign encrypted communication rails, automated agent distribution, and autonomous transport telemetry.
        </p>

        {/* Action Button Galaxy */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Rainbow primary CTA */}
          <a
            href="#products"
            className="relative inline-flex items-center justify-center p-[1px] rounded-xl overflow-hidden font-medium text-sm group cursor-pointer shadow-lg shadow-emerald-950/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 via-violet-500 to-amber-300 animate-gradient-x" />
            <span className="relative inline-flex items-center gap-2 px-6 py-3 rounded-[11px] bg-[#070b14] text-white hover:bg-transparent transition-colors duration-300 font-semibold tracking-wide">
              <span>Explore Products &amp; Platforms</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Secondary Ghost CTA */}
          <a
            href="#inventions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all hover:border-white/30 cursor-pointer"
          >
            <Sparkles size={15} className="text-emerald-400" />
            <span>Proprietary Inventions</span>
          </a>

          {/* Contact / Partnership CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <span>Partner With Us</span>
            <span className="text-slate-500 font-mono">→</span>
          </a>
        </div>

        {/* Orbital Constellation Metric Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`relative p-5 rounded-2xl ${s.bg} border ${s.border} backdrop-blur-xl group hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${s.color}`}>
                    {s.metric}
                  </span>
                  <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                    <Icon size={16} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  {s.label}
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
