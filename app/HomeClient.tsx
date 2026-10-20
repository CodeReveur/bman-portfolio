'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Server } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Partner, PARTNERS } from '@/lib/corporate';
import PartnerSlideshow from '@/components/PartnerSlideshow';

export default function HomeClient({ partners = PARTNERS }: { partners?: Partner[] }) {
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

  const sourcePartners = partners && partners.length > 0 ? partners : PARTNERS;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14 sm:gap-24 lg:gap-32 min-w-0 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="w-full max-w-full min-w-0 flex flex-col items-center justify-center text-center pt-2 sm:pt-8 md:pt-12">
        {/* Status / Location Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-100/90 dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 mb-5 sm:mb-6 shadow-xs backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Kigali, Rwanda</span>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span>Engineering &amp; Operations</span>
        </div>

        {/* Main Headline */}
        <h1 className="w-full max-w-3xl mx-auto text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-[1.18] sm:leading-[1.12] break-words text-center">
          {t('home.title')}
        </h1>

        {/* Subtitle */}
        <p className="w-full max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal px-2 sm:px-0 text-center">
          {t('home.subtitle')}
        </p>

        {/* CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto [&>a]:w-full sm:[&>a]:w-auto">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>{t('home.cta_products')}</span>
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-medium bg-zinc-100 text-zinc-800 hover:text-black border border-black/10 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 dark:hover:border-white/20 transition-colors"
          >
            <span>{t('home.cta_about')}</span>
          </Link>
        </div>

        {/* Key Operational Numbers */}
        <div className="w-full max-w-4xl mx-auto mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-black/10 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 rounded-2xl bg-zinc-50/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex flex-col justify-center items-center text-center transition-transform hover:scale-[1.02]"
            >
              <div className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-normal text-balance">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Three Pathway Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <Link
          href="/products"
          className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              {t('home.card_products_tag')}
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-zinc-900 dark:text-white group-hover:opacity-85 transition-opacity">
              {t('home.card_products_title')}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
              {t('home.card_products_desc')}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">
            <span>{t('home.cta_products')}</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/services"
          className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              {t('home.card_services_tag')}
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-zinc-900 dark:text-white group-hover:opacity-85 transition-opacity">
              {t('home.card_services_title')}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
              {t('home.card_services_desc')}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">
            <span>{t('nav.services')}</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/about"
          className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl mono-card flex flex-col justify-between group"
        >
          <div>
            <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
              {t('home.card_about_tag')}
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-zinc-900 dark:text-white group-hover:opacity-85 transition-opacity">
              {t('home.card_about_title')}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
              {t('home.card_about_desc')}
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors font-medium">
            <span>{t('home.cta_about')}</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </section>

      {/* 3. Architectural Pillars */}
      <section className="pt-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white">
            {t('home.pillars_title')}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">
            {t('home.pillars_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl mono-card">
                <div className="w-11 h-11 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Partners & Ecosystem Logos */}
      <section className="pt-10 border-t border-black/10 dark:border-white/10 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">
            {t('home.partners_title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal max-w-lg mx-auto leading-relaxed">
            {t('home.partners_subtitle')}
          </p>
        </div>

        {/* Dynamic Partner Slideshow */}
        <div className="w-full max-w-full overflow-hidden min-w-0">
          <PartnerSlideshow partners={sourcePartners} />
        </div>
      </section>
    </div>
  );
}
