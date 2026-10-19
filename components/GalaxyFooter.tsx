'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  ArrowUp,
  ShieldCheck,
  Globe2,
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/corporate';

export default function GalaxyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Linkedin':
        return Linkedin;
      case 'Twitter':
        return Twitter;
      case 'Github':
        return Github;
      case 'Youtube':
        return Youtube;
      case 'Instagram':
        return Instagram;
      default:
        return Globe2;
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050811] py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Sovereign Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl overflow-hidden bg-white/5 border border-white/15 p-1 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="BMan Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                BMAN TECHNOLOGIES
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              BMan Ltd is an independent Rwandan software and systems engineering firm headquartered in Kigali. We build sovereign offline-first platforms, high-throughput financial rails, and distributed retail systems.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Systems Operational · Kigali Primary Node</span>
            </div>
          </div>

          {/* Social Media Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Verified Broadcast Channels
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {SOCIAL_LINKS.map((s) => {
                const Icon = getSocialIcon(s.icon);
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 text-xs text-slate-300 hover:text-white transition-all group"
                  >
                    <Icon size={14} className="group-hover:text-emerald-400 transition-colors" />
                    <span>{s.name}</span>
                  </a>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-2">
              Official engineering updates, release notes, and community announcements.
            </p>
          </div>

          {/* Quick Platform Jumps */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
              Live Platforms
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="https://stock.bman.rw" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  BMan Stock (stock.bman.rw)
                </a>
              </li>
              <li>
                <a href="https://agent.bman.rw" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  Agent Workspace (agent.bman.rw)
                </a>
              </li>
              <li>
                <a href="https://mail.bman.rw" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  BMan Mail (mail.bman.rw)
                </a>
              </li>
              <li>
                <a href="https://eindege.rw" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  E-Indege Logistics (eindege.rw)
                </a>
              </li>
              <li>
                <a href="https://agent.bman.rw/recruitment" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  Agent Recruitment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} BMan Ltd. All rights reserved.</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400/80">Kigali, Rwanda</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Orbit Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
