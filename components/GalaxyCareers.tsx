'use client';

import React from 'react';
import {
  Briefcase,
  ArrowRight,
  Code2,
  Terminal,
  Cpu,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function GalaxyCareers() {
  const openings = [
    {
      title: 'Senior Distributed Systems Engineer',
      department: 'Core Architecture',
      location: 'Kigali, Rwanda (Onsite / Hybrid)',
      type: 'Full-time',
      tech: 'Spring Boot, PostgreSQL, SQLite, Rust',
      summary:
        'Architect and scale the central high-throughput event relays, multi-branch offline replication engines, and air-gapped cryptographic licensing services.',
    },
    {
      title: 'Mobile & Counter Hardware Engineer',
      department: 'Edge & Mobile Platforms',
      location: 'Kigali, Rwanda',
      type: 'Full-time',
      tech: 'Flutter, Android POS, Bluetooth ESC/POS',
      summary:
        'Build and refine the mobile merchant POS and field agent applications, interfacing with thermal printers, barcode scanners, and low-spec edge hardware.',
    },
    {
      title: 'Field Sales & Merchant Operations Specialist',
      department: 'Commercial Growth',
      location: 'Kigali & Provinces',
      type: 'Commission + Base Rail',
      tech: 'BMan Agent Workspace, Field Onboarding',
      summary:
        'Grow the national merchant footprint, onboard retail counter owners, and train storekeepers on BMan Stock and financial rails.',
    },
  ];

  return (
    <section id="careers" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Briefcase size={13} />
              Talent Orbit &amp; Careers
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Build Systems That{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                Outlast The Hype.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
              We look for engineers and field builders obsessed with reliability, low memory footprints, and practical impact over Silicon Valley buzzwords.
            </p>
          </div>

          <a
            href="https://agent.bman.rw/recruitment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-semibold transition-colors"
          >
            <span>Agent Recruitment Portal</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openings.map((job) => (
            <div
              key={job.title}
              className="rounded-3xl p-6 sm:p-7 bg-[#0a0f1d]/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  <span>{job.department}</span>
                  <span>·</span>
                  <span>{job.type}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {job.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {job.summary}
                </p>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-400 mb-6">
                  <span className="text-slate-300">Stack: </span>
                  {job.tech}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                  <MapPin size={11} className="text-emerald-400" />
                  {job.location}
                </span>
                <a
                  href="https://agent.bman.rw/recruitment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
