'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function GalaxyNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'rw', label: 'RW' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <header className="fixed top-4 inset-x-0 mx-auto max-w-5xl z-50 px-4 sm:px-6 lg:px-8">
      <nav className="w-full flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-white/80 dark:bg-black/85 border border-black/10 dark:border-white/10 shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-xl transition-colors">
        {/* Brand Logo -> Home */}
        <Link href="/" className="flex items-center gap-2.5 pl-1 group" title="BMan Technologies">
          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-black flex items-center justify-center border border-black/10 dark:border-white/20">
            <Image
              src="/logo.png"
              alt="BMan"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
            BMan
            <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-sm transition-all duration-150 rounded-full ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black font-medium shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 font-normal'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Controls: Language Switcher, Theme Switcher, Action Button */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* i18n Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 transition-colors"
              title="Change Language"
            >
              <Globe size={13} className="text-zinc-500" />
              <span className="uppercase font-medium">{lang}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 p-1.5 w-28 rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-xl flex flex-col z-50">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code);
                      setLangMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 text-xs text-left rounded-xl transition-colors flex items-center justify-between ${
                      lang === item.code
                        ? 'bg-zinc-100 dark:bg-white/10 text-black dark:text-white font-medium'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {lang === item.code && <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / White Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Action Button: Launch Stock */}
          <a
            href="https://stock.bman.rw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:text-black dark:bg-white dark:hover:bg-zinc-200 rounded-full transition-colors ml-1 shadow-sm"
          >
            <span>{t('nav.launch_stock')}</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle & Quick Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick theme toggle on mobile */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-zinc-600 dark:text-zinc-400 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-white/95 dark:bg-black/95 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 text-sm rounded-xl flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black font-medium'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />}
              </Link>
            );
          })}

          {/* Mobile Language Switcher Row */}
          <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between mt-1 px-1">
            <span className="text-xs text-zinc-500 font-mono">Language:</span>
            <div className="flex items-center gap-1.5">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-3 py-1 text-xs rounded-lg font-mono transition-colors ${
                    lang === item.code
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-black font-medium'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://stock.bman.rw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-sm font-medium text-white bg-zinc-900 dark:text-black dark:bg-white rounded-xl hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>{t('nav.launch_stock')}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
