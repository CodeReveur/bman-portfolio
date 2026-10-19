import { Linkedin, Twitter, Github } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/corporate';

export default function AboutPage() {
  const tenets = [
    {
      title: 'Local-First Execution',
      desc: 'All counter transactions persist on local merchant hardware first. Software must never stop when internet drops.',
    },
    {
      title: 'Zero Foreign Telemetry',
      desc: '100% sovereign in-country data residency. No foreign tracking scripts, third-party analytics, or external kill-switches.',
    },
    {
      title: 'Deep Hardware Intimacy',
      desc: 'Native driverless connectivity with receipt printers, thermal rolls, barcode scanners, and counter scales.',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
          <span>Leadership &amp; Values</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-[-0.04em] text-white">
          About
        </h1>
        <p className="mt-2 text-sm text-zinc-400 font-light max-w-xl">
          Founded in Kigali by engineers who believe software should work regardless of power outages or fiber cuts.
        </p>
      </div>

      {/* Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.name}
            className="p-6 sm:p-8 rounded-3xl mono-card border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-white text-xs font-medium tracking-tight">
                  {member.initials}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  {member.role}
                </span>
              </div>

              <h2 className="text-xl font-medium text-white tracking-tight">
                {member.name}
              </h2>
              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                {member.title}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                {member.bio}
              </p>
            </div>

            {/* Socials */}
            {member.socials && (
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={15} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={15} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
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

      {/* Tenets */}
      <div className="pt-8 border-t border-white/10">
        <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">
          Architectural Tenets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tenets.map((tenet, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10">
              <div className="text-xs font-mono text-white mb-2">0{idx + 1}</div>
              <h4 className="text-sm font-medium text-white tracking-tight">{tenet.title}</h4>
              <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">{tenet.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
