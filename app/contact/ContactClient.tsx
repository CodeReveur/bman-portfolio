'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  ArrowUpRight,
} from 'lucide-react';
import { SOCIAL_LINKS, CorporateConfig } from '@/lib/corporate';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactClient({ config }: { config: CorporateConfig }) {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const email = config?.email || 'ceo@bman.rw';
  const phone = config?.phone || '+250 781 121 117';
  const address = config?.address || 'Kigali, Rwanda';
  const workingHours = config?.working_hours || 'Mon–Fri, 08:00–18:00 CAT (Phone & WhatsApp)';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/public/corporate/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.contact,
          phone: formData.contact,
          subject: 'Inquiry from bman.rw',
          message: formData.message,
        }),
      });
    } catch {
      // Ignore network errors on local/offline environments
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
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
        return Mail;
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8">
      {/* Centered Page Header */}
      <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white">
          {t('contact.title')}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal max-w-lg mx-auto leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl mono-card space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white shrink-0">
                <MapPin size={17} />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{t('contact.headquarters')}</div>
                <div className="text-sm text-zinc-500 font-normal">{address}</div>
              </div>
            </div>

            {/* Single Unified Corporate Email */}
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white shrink-0">
                <Mail size={17} />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{t('contact.general_email')}</div>
                <div className="flex flex-col gap-0.5">
                  <a href={`mailto:${email}`} className="text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white font-mono transition-colors">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white shrink-0">
                <Phone size={17} />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">{t('contact.direct_line')}</div>
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm text-zinc-700 dark:text-zinc-300 font-mono hover:text-emerald-500 transition-colors">
                    {phone}
                  </a>
                  <span className="text-xs text-zinc-500">{workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Verified Social Media Channels */}
          <div className="p-7 rounded-3xl mono-card">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
              {t('contact.verified_socials')}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map((social) => {
                const Icon = getSocialIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-black border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all group font-normal"
                  >
                    <Icon size={14} className="text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span>{social.name}</span>
                    <ArrowUpRight size={12} className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-3xl mono-card">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-lg font-medium text-zinc-900 dark:text-white">{t('contact.form_success_title')}</h2>
                <p className="mt-2 text-sm text-zinc-500 max-w-sm font-normal">
                  {t('contact.form_success_desc')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      {t('contact.form_name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Damascene"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black border border-black/10 dark:border-white/10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      {t('contact.form_contact')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. jean@company.rw"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black border border-black/10 dark:border-white/10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    {t('contact.form_message')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black border border-black/10 dark:border-white/10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shadow-sm disabled:opacity-50"
                >
                  <span>{loading ? 'Sending...' : t('contact.form_send')}</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
