import Link from 'next/link';
import { ArrowLeft, Compass, Package, Sparkles, Mail, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 · Sector Not Found',
  description: 'The requested sector or coordinates cannot be located in the BMan universe.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      {/* Cosmic 404 Badge & Numbers */}
      <div className="relative inline-flex flex-col items-center justify-center mb-8">
        <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 mb-6">
          <Compass size={13} className="animate-spin text-cyan-500 dark:text-cyan-400" style={{ animationDuration: '8s' }} />
          <span>Coordinates 404 · Deep Space Anomaly</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-400 dark:from-white dark:via-zinc-300 dark:to-zinc-600 bg-clip-text text-transparent select-none leading-none">
          404
        </h1>
      </div>

      {/* Primary Message */}
      <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 dark:text-white mb-3">
        Lost Beyond the Event Horizon
      </h2>
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed mb-10 font-normal">
        The coordinates or page sector you navigated to does not exist, has been decommissioned, or drifted into deep space.
      </p>

      {/* Main Return Button */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shadow-sm"
        >
          <Home size={15} />
          <span>Return to Home Orbit</span>
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-zinc-100 text-zinc-800 hover:text-black border border-black/10 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 dark:hover:border-white/20 transition-colors"
        >
          <Package size={15} />
          <span>View Products</span>
        </Link>
      </div>

      {/* Suggested Destination Grid */}
      <div className="pt-10 border-t border-black/10 dark:border-white/10 text-left">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 text-center mb-6">
          Suggested Planetary Coordinates
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/products"
            className="p-5 rounded-2xl mono-card group hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-3">
                <Package size={16} />
              </div>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                Products &amp; Projects
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                BMan Stock, Agent Portal, Pay Gateway
              </p>
            </div>
          </Link>

          <Link
            href="/services"
            className="p-5 rounded-2xl mono-card group hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-3">
                <Sparkles size={16} />
              </div>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-purple-500 transition-colors">
                Core Capabilities
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Offline POS, IoT telematics, architecture audits
              </p>
            </div>
          </Link>

          <Link
            href="/contact"
            className="p-5 rounded-2xl mono-card group hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-3">
                <Mail size={16} />
              </div>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                Contact Operations
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Reach operations at info@bman.rw
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
