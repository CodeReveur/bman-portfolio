import { Sparkles, CheckCircle2 } from 'lucide-react';
import { INVENTIONS } from '@/lib/corporate';

export default function InventionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 mb-3">
          <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
          <span>Research &amp; Patents</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-[-0.04em] text-white">
          Inventions
        </h1>
        <p className="mt-2 text-sm text-zinc-400 font-light max-w-xl">
          When cloud assumptions fail in low-bandwidth regions, we engineer new architectural primitives.
        </p>
      </div>

      {/* Inventions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INVENTIONS.map((invention, idx) => (
          <div
            key={invention.id}
            className="p-6 sm:p-8 rounded-3xl mono-card border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  {invention.badge}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  0{idx + 1}
                </span>
              </div>

              <h2 className="text-lg font-medium text-white tracking-tight">
                {invention.name}
              </h2>

              <p className="mt-2 text-xs font-normal text-zinc-300">
                {invention.headline}
              </p>

              <p className="mt-3 text-xs text-zinc-400 font-light leading-relaxed">
                {invention.description}
              </p>

              {/* Minimalist Specs */}
              <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                {invention.technicalSpecs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                    <CheckCircle2 size={12} className="text-white shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Impact Metric</div>
              <div className="text-xs font-medium text-white mt-0.5">
                {invention.impactMetric}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
