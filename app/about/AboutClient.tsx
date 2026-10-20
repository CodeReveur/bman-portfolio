'use client';

import React from 'react';
import { Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';
import { TeamMember, CorporateConfig } from '@/lib/corporate';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutClient({
  team,
  config,
}: {
  team: TeamMember[];
  config: CorporateConfig;
}) {
  const { t } = useLanguage();

  const tenets = [
    {
      title: 'Local-First Execution',
      desc: 'All counter transactions persist on local merchant hardware first. Software must never stop when internet drops or cellular networks congest.',
    },
    {
      title: 'Zero Foreign Telemetry',
      desc: '100% sovereign in-country data residency. No foreign tracking scripts, third-party analytics cookies, or external kill-switches.',
    },
    {
      title: 'Deep Hardware Intimacy',
      desc: 'Native driverless connectivity with receipt printers, thermal rolls, barcode scanners, and counter scales over WebUSB and Bluetooth.',
    },
  ];

  const careerTracks = [
    { title: 'Distributed Systems & Sync Engineer', stack: 'Java · Go · SQLite · Protocol Buffers' },
    { title: 'Frontend Systems Architect', stack: 'Next.js 16 · TypeScript · WebUSB · Tailwind' },
    { title: 'Field Operations & Merchant Rollout', stack: 'Kigali HQ & Commercial District Hubs' },
  ];

  const careerEmail = config?.career_email || 'ceo@bman.rw';

  return (
    <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8">
      {/* 1. Centered Page Header */}
      <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white">
          {t('about.title')}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal max-w-lg mx-auto leading-relaxed">
          {t('about.subtitle')}
        </p>
      </div>

      {/* 2. Company Story & Origin */}
      <div className="mb-12 sm:mb-16 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl mono-card">
        <div className="max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 dark:text-white tracking-tight">
            Engineering for real-world resilience in Kigali.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
            BMan is a technology company that creates, develops, and partners software. We were founded with a singular conviction: mission-critical software cannot rely on idealized connectivity assumptions. When cloud-only systems stall during network cuts or power drops, businesses halt operations, queues form, and revenue is lost.
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
            We engineer resilient software from the ground up: local-first transactional architectures that operate continuously without internet, synchronize automatically when bandwidth returns, and keep enterprise data secure and compliant.
          </p>
        </div>
      </div>

      {/* 3. Leadership & Founders */}
      <div className="mb-16">
        <div className="mb-8 text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white">
            Leadership &amp; Architecture
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal mt-2">
            Engineers and operators guiding BMan&apos;s product development and nationwide deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl mono-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/20 flex items-center justify-center text-zinc-900 dark:text-white text-sm font-semibold tracking-tight">
                    {member.initials}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                    {member.role}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-zinc-900 dark:text-white tracking-tight">
                  {member.name}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                  {member.title}
                </div>

                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Socials */}
              {member.socials && (
                <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center gap-3">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Architectural Tenets */}
      <div className="pt-8 border-t border-black/10 dark:border-white/10 mb-16">
        <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6 text-center">
          {t('about.tenets_title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tenets.map((tenet, idx) => (
            <div key={idx} className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl mono-card">
              <div className="text-xs font-mono text-zinc-900 dark:text-white mb-2">0{idx + 1}</div>
              <h4 className="text-base font-medium text-zinc-900 dark:text-white tracking-tight">{tenet.title}</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">{tenet.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Careers & Engineering Culture */}
      <div className="p-8 sm:p-10 rounded-3xl mono-card">
        <div className="max-w-2xl mb-6">
          <h3 className="text-xl font-medium text-zinc-900 dark:text-white tracking-tight">
            {t('about.careers_title')}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
            {t('about.careers_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {careerTracks.map((role, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-50 dark:bg-black border border-black/5 dark:border-white/10 flex flex-col justify-between">
              <span className="text-sm font-medium text-zinc-900 dark:text-white">{role.title}</span>
              <span className="text-xs font-mono text-zinc-500 mt-2">{role.stack}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm text-zinc-500 font-normal">
            Kigali Office · High agency &amp; craftsmanship · Direct economic impact
          </span>
          <a
            href={`mailto:${careerEmail}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shrink-0 w-fit shadow-sm"
          >
            <span>{careerEmail}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
