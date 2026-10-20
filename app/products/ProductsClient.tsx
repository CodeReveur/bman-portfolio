'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Briefcase, Clock, Check, AlertCircle } from 'lucide-react';
import { CorporateProduct, ContributedProject, CONTRIBUTED_PROJECTS, ProjectStatus } from '@/lib/corporate';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductsClient({
  products,
  projects = CONTRIBUTED_PROJECTS,
}: {
  products: CorporateProduct[];
  projects?: ContributedProject[];
}) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'ALL' | ProjectStatus>('ALL');

  const sourceProjects = projects && projects.length > 0 ? projects : CONTRIBUTED_PROJECTS;
  const filteredProjects = filter === 'ALL'
    ? sourceProjects
    : sourceProjects.filter((p) => p.status === filter);

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Finished':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {t('products.status_finished')}
          </span>
        );
      case 'In development':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {t('products.status_in_dev')}
          </span>
        );
      case 'Inactive':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-white/5 text-zinc-500 border border-zinc-200 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            {t('products.status_inactive')}
          </span>
        );
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8">
      {/* 1. Centered Page Header */}
      <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white">
          {t('products.title')}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal max-w-lg mx-auto leading-relaxed">
          {t('products.subtitle')}
        </p>
      </div>

      {/* 2. Core Products List */}
      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id || product.slug}
            className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl mono-card flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6"
          >
            {/* Left Info */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 p-1.5 flex items-center justify-center border border-black/10 dark:border-white/10 shrink-0">
                  <Image
                    src={product.logo_url || '/logo.png'}
                    alt={product.name}
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 dark:text-white tracking-tight">
                    {product.name}
                  </h2>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                  {product.badge || product.category}
                </span>
              </div>

              <p className="text-base font-normal text-zinc-800 dark:text-zinc-200">
                {product.tagline}
              </p>

              <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                {product.description}
              </p>

              {/* Minimalist Specs */}
              {product.metrics && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.metrics.split('·').map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 font-normal"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Stack */}
              {product.tech_stack && (
                <div className="mt-3 text-xs font-mono text-zinc-500">
                  Stack: {product.tech_stack}
                </div>
              )}
            </div>

            {/* Right Action */}
            <div className="shrink-0">
              {product.product_url ? (
                <a
                  href={product.product_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>{t('products.launch')}</span>
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="text-xs text-zinc-400 font-mono">In Development</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Contributed Projects & Success Stories Section */}
      <div className="mt-24 pt-14 border-t border-black/10 dark:border-white/10">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">
            {t('products.projects_title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal max-w-xl mx-auto leading-relaxed">
            {t('products.projects_subtitle')}
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
                filter === 'ALL'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-black font-medium'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white font-normal'
              }`}
            >
              {t('products.filter_all')} ({CONTRIBUTED_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('Finished')}
              className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
                filter === 'Finished'
                  ? 'bg-emerald-600 text-white font-medium'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 font-normal'
              }`}
            >
              {t('products.status_finished')} ({CONTRIBUTED_PROJECTS.filter((p) => p.status === 'Finished').length})
            </button>
            <button
              onClick={() => setFilter('In development')}
              className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
                filter === 'In development'
                  ? 'bg-amber-600 text-white font-medium'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 font-normal'
              }`}
            >
              {t('products.status_in_dev')} ({CONTRIBUTED_PROJECTS.filter((p) => p.status === 'In development').length})
            </button>
            <button
              onClick={() => setFilter('Inactive')}
              className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
                filter === 'Inactive'
                  ? 'bg-zinc-700 text-white font-medium'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-300 font-normal'
              }`}
            >
              {t('products.status_inactive')} ({CONTRIBUTED_PROJECTS.filter((p) => p.status === 'Inactive').length})
            </button>
          </div>
        </div>

        {/* Contributed Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl mono-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-zinc-500">
                    {project.category} · {project.year}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                <h3 className="text-xl font-medium text-zinc-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>
                <div className="text-xs sm:text-sm text-zinc-500 font-mono mt-1">
                  Client: {project.client}
                </div>

                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                  {project.summary}
                </p>

                {/* Impact Metric */}
                <div className="mt-4 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-black/5 dark:border-white/5">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Key Outcome &amp; Impact
                  </div>
                  <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mt-1">
                    {project.impact}
                  </div>
                </div>

                {/* Deliverables Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
