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
import { useLanguage } from '@/contexts/LanguageContext';

export default function GalaxyFooter() {
  const { t } = useLanguage();

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
    <footer className="relative border-t border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-xl mt-auto transition-colors">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="BMan"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-medium text-zinc-900 dark:text-white flex items-center gap-1.5">
              BMan Technologies Ltd
              <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
            </span>
            <span className="text-xs text-zinc-500 font-light">· {t('footer.location')}</span>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-zinc-600 dark:text-zinc-400">
            <Link href="/products" className="hover:text-black dark:hover:text-white transition-colors">
              {t('nav.products')}
            </Link>
            <Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">
              {t('nav.services')}
            </Link>
            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div>
            © {new Date().getFullYear()} BMan Technologies. {t('footer.rights')}
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
                  className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors"
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
