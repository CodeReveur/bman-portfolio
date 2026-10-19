'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Server, CheckCircle2, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PARTNERS } from '@/lib/corporate';

export default function HomePage() {
  const { t } = useLanguage();

  const stats = [
    { value: '1,200+', label: 'Retail counters & shops' },
    { value: '100%', label: 'Offline transaction continuity' },
    { value: '< 5ms', label: 'Local counter latency' },
    { value: '5', label: 'Production platforms' },
  ];

  const pillars = [
    {
      title: 'Local-First Persistence',
      description: 'Transactions write to counter hardware immediately. Business keeps operating through network drops and power blackouts.',
      icon: ShieldCheck,
    },
    {
      title: 'Sovereign Data Residency',
      description: '100% domestic infrastructure hosted in Rwanda. Zero third-party foreign analytics or external telemetry scripts.',
      icon: Server,
    },
    {
      title: 'Direct Hardware Bridging',
      description: 'Driverless web-to-printer bridging over WebUSB, Bluetooth LE, and serial ports for instant thermal receipt printing.',
      icon: Zap,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-24 sm:gap-32">
      {/* 1. Hero Section */}
      <section className="text-center pt-8 sm:pt-14">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-zinc-900 dark:text-white leading-[1.06] max-w-4xl mx-auto text-balance">
          {t('home.title')}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light text-pretty">
          {t('home.subtitle')}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>{t('home.cta_products')}</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 hover:text-black border border-black/10 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 dark:hover:border-white/20 transition-colors"
          >
            <span>{t('home.cta_about')}</span>
          </Link>
        </div>

        {/* Key Operational Numbers */}
        <div className="mt-16 pt-10 border-t border-black/10 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-2">
              <div className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Three Pathway Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/products"
          className="p-6 sm:p-8 rounded-3xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              {t('home.card_products_tag')}
            </div>
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white group-hover:opacity-85 transition-opacity">
              {t('home.card_products_title')}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {t('home.card_products_desc')}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            <span>{t('home.cta_products')}</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/services"
          className="p-6 sm:p-8 rounded-3xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              {t('home.card_services_tag')}
            </div>
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white group-hover:opacity-85 transition-opacity">
              {t('home.card_services_title')}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {t('home.card_services_desc')}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            <span>{t('nav.services')}</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/about"
          className="p-6 sm:p-8 rounded-3xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              {t('home.card_about_tag')}
            </div>
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white group-hover:opacity-85 transition-opacity">
              {t('home.card_about_title')}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {t('home.card_about_desc')}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            <span>{t('home.cta_about')}</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </section>

      {/* 3. Architectural Pillars */}
      <section className="pt-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white">
            {t('home.pillars_title')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light">
            {t('home.pillars_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl mono-card">
                <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-5">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-medium text-zinc-900 dark:text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Partners & Trusted Rails Section (Near Footer Section) */}
      <section className="pt-10 border-t border-black/10 dark:border-white/10 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-normal tracking-[-0.03em] text-zinc-900 dark:text-white">
            {t('home.partners_title')}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
            {t('home.partners_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl mono-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white font-mono">
                    {partner.logoText}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                  {partner.name}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
