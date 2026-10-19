'use client';

import React from 'react';
import {
  Shield,
  Layers,
  Wallet,
  Cpu,
  Radio,
  Compass,
  ArrowRight,
  CheckCircle2,
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
      case 'layers':
      default:
        return Layers;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers size={13} />
            Services &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white">
            Engineering for demanding environments.
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-light">
            We partner with enterprises and institutions to deliver software that doesn&apos;t fail when conditions get tough.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id || service.slug}
                className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between border border-white/5 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                    {service.delivery_model && (
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-400">
                        {service.delivery_model}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-light">
                    {service.description || service.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-light">Available for deployment</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Request Details</span>
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
