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
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/corporate';

export default function GalaxyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
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
        return null;
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/90 backdrop-blur-xl mt-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="BMan"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-medium text-white flex items-center gap-1.5">
              BMan Technologies Ltd
              <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
            </span>
            <span className="text-xs text-zinc-500 font-light">· Kigali, Rwanda</span>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Overview</Link>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/inventions" className="hover:text-white transition-colors">Inventions</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div>
            © {new Date().getFullYear()} BMan Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = getSocialIcon(social.icon);
              if (!Icon) return null;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-7 h-7 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Icon size={12} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
