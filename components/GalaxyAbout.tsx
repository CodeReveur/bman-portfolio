'use client';

import React from 'react';
import {
  Users,
  ShieldCheck,
  Award,
  Globe2,
  Linkedin,
  Twitter,
  Github,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/corporate';

export default function GalaxyAbout() {
  const pillars = [
    {
      title: 'Local First by Law & Nature',
      desc: 'All core transaction engines store data on the merchant hardware first. We never hold business continuity hostage to internet uplink availability.',
    },
    {
      title: 'Zero Third-Party Telemetry',
      desc: 'No Silicon Valley analytics scripts, no foreign metadata harvesting, and no central kill-switches. 100% sovereign Rwandan data compliance.',
    },
    {
      title: 'Deep Hardware Intimacy',
      desc: 'We write software designed to interface cleanly with barcode scanners, thermal receipt printers, GPS modems, and edge micro-servers.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Globe2 size={13} />
              About BMan Ltd
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Sovereign Systems for the Way{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 bg-clip-text text-transparent">
                Africa Actually Trades.
              </span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              BMan Ltd is a Kigali-based technology company founded to replace brittle, cloud-dependent foreign software with sovereign, high-concurrency systems. We watched Rwandan shops and logistics operators lose entire days of revenue because a cellular tower dropped or fiber was cut.
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed font-mono">
              Our response was absolute engineering independence: offline-first dual engines, air-gapped cryptographic licensing, in-country encrypted corporate mail, and automated multi-rail payment networks.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-xs font-bold text-white mb-1.5">{p.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Vision Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-7 bg-gradient-to-br from-[#0c1326] via-[#090e1c] to-[#070b14] border border-emerald-500/30 shadow-2xl backdrop-blur-2xl">
              <Quote size={32} className="text-emerald-400/40 mb-4" />
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-serif italic mb-6">
                “True technology sovereignty is not a slogan — it is a discipline measured in milliseconds, battery life, and offline resilience. If a counter in Nyabugogo stops printing receipts when the internet drops, the architecture has failed. We build so it never stops.”
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="h-11 w-11 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-bold flex items-center justify-center text-sm">
                  JM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Joseph Maranatha</h4>
                  <p className="text-xs font-mono text-emerald-400">
                    Founder &amp; Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team & Leadership Section */}
        <div id="team" className="pt-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Leadership &amp; Systems Architects
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              The Builders Behind BMan
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.name}
                className="group rounded-3xl p-6 bg-[#0a0f1d]/70 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-white/15 text-white font-mono font-bold flex items-center justify-center text-sm group-hover:scale-105 transition-transform">
                      {m.initials}
                    </div>
                    {m.name === 'Joseph Maranatha' && (
                      <span className="text-[9px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Founder
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {m.name}
                  </h4>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">
                    {m.role}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5 mb-3">
                    {m.title}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {m.bio}
                  </p>
                </div>

                {m.socials && (
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-3">
                    {m.socials.linkedin && (
                      <a
                        href={m.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={15} />
                      </a>
                    )}
                    {m.socials.twitter && (
                      <a
                        href={m.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter size={15} />
                      </a>
                    )}
                    {m.socials.github && (
                      <a
                        href={m.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
