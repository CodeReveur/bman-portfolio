'use client';

import React from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function GalaxyCareers() {
  const roles = [
    { title: 'Distributed Systems & Sync Engineer', stack: 'Java / Go / SQLite' },
    { title: 'Frontend Systems Architect', stack: 'Next.js 16 / TypeScript / WebUSB' },
    { title: 'Field Operations & Agent Network Lead', stack: 'Kigali & Regional Hubs' },
  ];

  return (
    <section id="careers" className="relative py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-white/10 relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Briefcase size={13} />
              Careers &amp; Engineering Culture
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white">
              Build what matters.
            </h2>
            <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
              We engineer mission-critical systems that merchants rely on to feed their families and keep business running every day. If you care about craftsmanship, local-first architectures, and zero-bullshit engineering, join us in Kigali.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 flex flex-col justify-between">
                <span className="text-xs font-medium text-white">{role.title}</span>
                <span className="text-[11px] font-mono text-emerald-400 mt-2">{role.stack}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-zinc-500 font-light">
              Kigali Office · Competitive package · High-impact sovereign software
            </span>
            <a
              href="mailto:careers@bman.rw"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/30"
            >
              <span>Apply via Email</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
