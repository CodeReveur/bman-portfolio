'use client';

import React from 'react';
import Link from 'next/link';
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
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesClient({ services }: { services: CorporateService[] }) {
  const { t } = useLanguage();

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

  const processSteps = [
    {
      num: '01',
      title: 'Constraint Mapping',
      desc: 'We map local operational failure modes: power dropouts, intermittent cellular links, and offline counter requirements.',
    },
    {
      num: '02',
      title: 'Offline-First Prototyping',
      desc: 'Engineering client-side transactional databases and local queue sync engines that never lock waiting for remote responses.',
    },
    {
      num: '03',
      title: 'Hardware & Payment Hookup',
      desc: 'Direct WebUSB driverless thermal printing, barcode scanner streams, and instant MTN Mobile Money webhook clearing.',
    },
    {
      num: '04',
      title: 'Sovereign Production Rollout',
      desc: 'Deployment to in-country Rwandan hosting nodes with zero foreign analytics tracking and complete enterprise compliance.',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Centered Page Header */}
      <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-normal tracking-[-0.04em] text-zinc-900 dark:text-white">
          {t('services.title')}
        </h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
          {t('services.subtitle')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = getIcon(service.icon);
          return (
            <div
              key={service.id || service.slug}
              className="p-6 sm:p-8 rounded-3xl mono-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white">
                    <Icon size={18} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-zinc-600 dark:text-zinc-400">
                    {service.delivery_model || 'Engineering'}
                  </span>
                </div>

                <h2 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">
                  {service.title}
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {service.description || service.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-light">Custom Scope &amp; Rollout</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-white hover:opacity-80 transition-opacity"
                >
                  <span>{t('services.inquire')}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Methodology / Delivery Process */}
      <div className="mt-24 pt-14 border-t border-black/10 dark:border-white/10">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white">
            {t('services.process_title')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light mt-1">
            Deterministic technical execution from requirements to counter deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step) => (
            <div key={step.num} className="p-5 rounded-2xl mono-card flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2 block">
                  {step.num}
                </span>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
