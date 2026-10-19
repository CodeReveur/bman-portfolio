'use client';

import React from 'react';
import { Users, ShieldCheck, Linkedin, Twitter, Github, Globe2 } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/corporate';

export default function GalaxyAbout() {
  const tenets = [
    {
      title: 'Local-First Execution',
      desc: 'All counter transactions persist on local merchant hardware first. Software must never stop when internet drops.',
    },
    {
      title: 'Zero Foreign Telemetry',
      desc: '100% sovereign in-country data residency. No foreign tracking scripts, third-party spyware, or external kill-switches.',
    },
    {
      title: 'Deep Hardware Intimacy',
      desc: 'Native driverless connectivity with receipt printers, thermal rolls, barcode scanners, and counter scales.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Users size={13} />
            About BMan
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white">
            Built with pride in Kigali, Rwanda.
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-light">
            Founded by engineers dedicated to building sovereign, offline-first digital infrastructure for East Africa.
          </p>
        </div>

        {/* Founders / Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border border-white/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-900 border border-emerald-400/30 flex items-center justify-center text-white font-medium text-base tracking-tight shadow-md">
                    {member.initials}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400">
                    {member.role}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-white tracking-tight">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-emerald-400 mt-0.5">
                  {member.title}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              {member.socials && (
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
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
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="X / Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
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

        {/* 3 Core Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          {tenets.map((tenet, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-950/40 border border-white/5">
              <div className="text-xs font-mono text-emerald-400 mb-2">0{idx + 1}</div>
              <h4 className="text-base font-medium text-white tracking-tight">{tenet.title}</h4>
              <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">{tenet.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
