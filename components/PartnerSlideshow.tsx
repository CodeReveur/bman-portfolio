'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Partner } from '@/lib/corporate';

interface PartnerSlideshowProps {
  partners: Partner[];
}

export default function PartnerSlideshow({ partners }: PartnerSlideshowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Duplicate list to achieve continuous seamless loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none group">
      {/* Edge Gradient Masks for Cinematic Sliding In/Out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      {/* Manual Navigation Controls (Fades in on hover) */}
      <button
        onClick={() => scroll('left')}
        aria-label="Previous partner"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/10 shadow-lg items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-md"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => scroll('right')}
        aria-label="Next partner"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/10 shadow-lg items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-md"
      >
        <ChevronRight size={18} />
      </button>

      {/* Sliding Track */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="animate-slide-marquee flex gap-5 py-2 px-4">
          {displayPartners.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex-shrink-0 w-[190px] sm:w-[220px] p-5 sm:p-6 rounded-2xl mono-card flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500/40 hover:shadow-xl cursor-default"
            >
              {/* Partner Logo (On Top) */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3.5 flex items-center justify-center p-2 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Partner Name (Directly Underneath Logo) */}
              <div className="w-full">
                <span className="block text-sm sm:text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100 truncate">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
