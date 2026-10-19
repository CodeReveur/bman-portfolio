import { ArrowUpRight } from 'lucide-react';

export default function CareersPage() {
  const roles = [
    { title: 'Distributed Systems & Sync Engineer', stack: 'Java · Go · SQLite' },
    { title: 'Frontend Systems Architect', stack: 'Next.js 16 · TypeScript · WebUSB' },
    { title: 'Field Operations & Merchant Onboarding', stack: 'Kigali & Regional Hubs' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
          <span>Engineering Culture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-[-0.04em] text-white">
          Careers
        </h1>
        <p className="mt-2 text-sm text-zinc-400 font-light max-w-xl">
          Build what matters. We engineer high-reliability systems from Kigali for the continent.
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl mono-card border border-white/10">
        <div className="max-w-2xl mb-8">
          <h2 className="text-xl font-medium text-white tracking-tight">
            Engineering at BMan
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            We value clean architecture, low memory footprints, and solutions that work when everything else fails. No bureaucracy, high agency, and direct impact on real commerce across East Africa.
          </p>
        </div>

        {/* Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {roles.map((role, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-black border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-medium text-white">{role.title}</span>
              <span className="text-[11px] font-mono text-zinc-400 mt-3">{role.stack}</span>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs text-zinc-500 font-light">
            Kigali Office · Competitive compensation · Sovereign software
          </span>
          <a
            href="mailto:careers@bman.rw"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors w-fit"
          >
            <span>Send CV &amp; Code</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
