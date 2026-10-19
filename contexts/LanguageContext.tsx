'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'rw' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    rw: string;
    fr: string;
  };
}

export const DICTIONARY: Translations = {
  // Navigation
  'nav.products': {
    en: 'Products',
    rw: 'Ibicuruzwa',
    fr: 'Produits',
  },
  'nav.services': {
    en: 'Services',
    rw: 'Serivisi',
    fr: 'Services',
  },
  'nav.about': {
    en: 'About',
    rw: 'Abo Turi Bo',
    fr: 'À propos',
  },
  'nav.contact': {
    en: 'Contact',
    rw: 'Twandikire',
    fr: 'Contact',
  },
  'nav.launch_stock': {
    en: 'Launch Stock',
    rw: 'Tangira BMan Stock',
    fr: 'Lancer Stock',
  },

  // Home Hero
  'home.badge': {
    en: 'Kigali, Rwanda',
    rw: 'Kigali, u Rwanda',
    fr: 'Kigali, Rwanda',
  },
  'home.title': {
    en: 'Software that powers African commerce.',
    rw: 'Ikoranabuhanga rifasha ubucuruzi bwa Afurika.',
    fr: 'Des logiciels au service du commerce africain.',
  },
  'home.subtitle': {
    en: 'We build offline-first retail systems, sales agent networks, and resilient infrastructure that keeps business running even when connectivity fails.',
    rw: 'Twubaka sisitemu zicuruza zitishingikirije kuri interineti, imiyoboro y’abacuruzi, n’ikoranabuhanga rikora igihe cyose interineti yagabanuka.',
    fr: 'Nous concevons des systèmes de vente hors-ligne, des réseaux d’agents et des infrastructures résilientes qui fonctionnent sans interruption.',
  },
  'home.cta_products': {
    en: 'Explore Products',
    rw: 'Reba Ibicuruzwa',
    fr: 'Découvrir les Produits',
  },
  'home.cta_about': {
    en: 'About BMan',
    rw: 'Abo Turi Bo',
    fr: 'À propos de BMan',
  },
  'home.pillars_title': {
    en: 'Why BMan Infrastructure',
    rw: 'Impamvu Ikoranabuhanga rya BMan Rihariye',
    fr: 'Pourquoi l’Infrastructure BMan',
  },
  'home.pillars_subtitle': {
    en: 'Built specifically for African operational reality where network and electricity are intermittent.',
    rw: 'Byubakiwe by’umwihariko imikorere ya Afurika aho umuriro cyangwa interineti bishobora gucika.',
    fr: 'Conçu spécialement pour la réalité africaine face aux coupures de réseau et d’électricité.',
  },
  'home.partners_tag': {
    en: 'Ecosystem Alliances',
    rw: 'Abafatanyabikorwa Bacu',
    fr: 'Alliances Stratégiques',
  },
  'home.partners_title': {
    en: 'Partners & Trusted Rails',
    rw: 'Abafatanyabikorwa n’Imiyoboro Yizewe',
    fr: 'Partenaires & Réseaux de Confiance',
  },
  'home.partners_subtitle': {
    en: 'Collaborating with national telecom rails, financial institutions, and commercial merchant networks across Rwanda.',
    rw: 'Dukorana n’ibigo by’itumanaho, ibigo by’imari, n’amahuriro y’abacuruzi mu Rwanda hose.',
    fr: 'En collaboration avec les opérateurs télécoms, institutions financières et réseaux de commerçants.',
  },
  'home.card_products_tag': {
    en: 'Flagship Ecosystem',
    rw: 'Ikoranabuhanga Ryacu',
    fr: 'Écosystème Principal',
  },
  'home.card_products_title': {
    en: 'Products',
    rw: 'Ibicuruzwa',
    fr: 'Produits',
  },
  'home.card_products_desc': {
    en: 'BMan Stock, Agent Portal, Mail, E-Indege Logistics, and Pay Gateway.',
    rw: 'BMan Stock, Agent Portal, Mail, E-Indege Logistics, na Pay Gateway.',
    fr: 'BMan Stock, Agent Portal, Mail, E-Indege Logistics, et Pay Gateway.',
  },
  'home.card_services_tag': {
    en: 'Capabilities',
    rw: 'Ubushobozi',
    fr: 'Compétences',
  },
  'home.card_services_title': {
    en: 'Services',
    rw: 'Serivisi',
    fr: 'Services',
  },
  'home.card_services_desc': {
    en: 'Enterprise ERP, offline-first architectures, and direct Mobile Money payment integrations.',
    rw: 'Sisitemu z’ubucuruzi, gukora idahagarara, no guhuza na MTN MoMo na Airtel Money.',
    fr: 'ERP sur mesure, architectures hors-ligne, et intégration Mobile Money.',
  },
  'home.card_about_tag': {
    en: 'Company',
    rw: 'Ikigo',
    fr: 'Entreprise',
  },
  'home.card_about_title': {
    en: 'About BMan',
    rw: 'Abo Turi Bo',
    fr: 'À propos de BMan',
  },
  'home.card_about_desc': {
    en: 'Founded in Kigali to engineer sovereign software infrastructure with zero third-party telemetry.',
    rw: 'Yashinzwe i Kigali hagamijwe gukora ikoranabuhanga ryizewe kandi ridaheza amakuru hanze.',
    fr: 'Fondée à Kigali pour concevoir des logiciels souverains et respectueux des données.',
  },

  // Products Page
  'products.tag': {
    en: 'Product Ecosystem',
    rw: 'Ikoranabuhanga Ryacu',
    fr: 'Écosystème de Produits',
  },
  'products.title': {
    en: 'Products',
    rw: 'Ibicuruzwa Byacu',
    fr: 'Nos Produits',
  },
  'products.subtitle': {
    en: 'Sovereign software platforms engineered for scale and low-connectivity resilience.',
    rw: 'Ikoranabuhanga ryubakiwe kwaguka no gukora neza niyo interineti yaba idahari.',
    fr: 'Des plateformes logicielles souveraines conçues pour la résilience et l’échelle.',
  },
  'products.launch': {
    en: 'Launch Platform',
    rw: 'Koresha Sisitemu',
    fr: 'Lancer la Plateforme',
  },
  'products.projects_tag': {
    en: 'Client Work & Deployments',
    rw: 'Imishinga n’Amasoko Twakoze',
    fr: 'Projets Clients & Déploiements',
  },
  'products.projects_title': {
    en: 'Contributed Projects',
    rw: 'Imishinga BMan Yakozeho',
    fr: 'Projets & Réalisations',
  },
  'products.projects_subtitle': {
    en: 'Real-world software systems, POS rollouts, and enterprise contracts BMan has been hired to engineer.',
    rw: 'Amasoko akomeye, sisitemu z’amaduka, n’imishinga y’ubucuruzi BMan yahawe gukora no gushyira mu bikorwa.',
    fr: 'Systèmes d’entreprise, déploiements POS et contrats d’ingénierie réalisés par l’équipe BMan.',
  },
  'products.filter_all': {
    en: 'All Projects',
    rw: 'Imishinga Yose',
    fr: 'Tous les Projets',
  },
  'products.status_finished': {
    en: 'Finished',
    rw: 'Byarangiye',
    fr: 'Terminé',
  },
  'products.status_in_dev': {
    en: 'In development',
    rw: 'Biri gukorwa',
    fr: 'En développement',
  },
  'products.status_inactive': {
    en: 'Inactive',
    rw: 'Bihagaze',
    fr: 'Inactif',
  },

  // Services Page
  'services.tag': {
    en: 'Technical Delivery',
    rw: 'Serivisi z’Ubuhanga',
    fr: 'Prestations Techniques',
  },
  'services.title': {
    en: 'Services',
    rw: 'Serivisi Zacu',
    fr: 'Nos Services',
  },
  'services.subtitle': {
    en: 'Purpose-built engineering for retail chains, logistics networks, and enterprise institutions.',
    rw: 'Ikoranabuhanga ryihariye ryubakiwe amaduka, ibigo by’ubwikorezi, n’ibigo bikomeye.',
    fr: 'Ingénierie sur mesure pour les réseaux de distribution, la logistique et les entreprises.',
  },
  'services.inquire': {
    en: 'Inquire',
    rw: 'Baza Birambuye',
    fr: 'Se renseigner',
  },
  'services.process_title': {
    en: 'How We Deliver',
    rw: 'Uko Dukorana N’Abakiriya',
    fr: 'Notre Méthode de Travail',
  },

  // About Page
  'about.tag': {
    en: 'Leadership & Tenets',
    rw: 'Ubuyobozi n’Indangagaciro',
    fr: 'Direction & Principes',
  },
  'about.title': {
    en: 'About BMan',
    rw: 'Abo Turi Bo',
    fr: 'À propos de BMan',
  },
  'about.subtitle': {
    en: 'Founded in Kigali by engineers who believe software should work regardless of power outages or fiber cuts.',
    rw: 'Yashinzwe i Kigali n’abahanga bizera ko porogaramu zigomba gukora niyo umuriro wajya cyangwa interineti yacika.',
    fr: 'Fondée à Kigali par des ingénieurs convaincus que les logiciels doivent fonctionner en toutes circonstances.',
  },
  'about.story_title': {
    en: 'Our Origin & Vision',
    rw: 'Inkomoko n’Icyerekezo Cyacu',
    fr: 'Notre Histoire & Vision',
  },
  'about.tenets_title': {
    en: 'Architectural Tenets',
    rw: 'Amahame y’Imyubakire',
    fr: 'Principes d’Architecture',
  },
  'about.careers_title': {
    en: 'Careers & Engineering Culture',
    rw: 'Imirimo n’Umuco w’Akazi',
    fr: 'Carrières & Culture d’Entreprise',
  },
  'about.careers_subtitle': {
    en: 'We build high-reliability systems from Kigali. If you care about craftsmanship and local-first architectures, reach out to us.',
    rw: 'Twubaka ikoranabuhanga ryizewe i Kigali. Niba ukunda gukora ibintu binoze bitishingikiriza kuri interineti, twandikire.',
    fr: 'Nous concevons des systèmes haute fiabilité depuis Kigali. Si vous aimez le travail rigoureux, rejoignez-nous.',
  },

  // Contact Page
  'contact.tag': {
    en: 'HQ & Inquiries',
    rw: 'Ibiro n’Ibibazo',
    fr: 'Siège & Renseignements',
  },
  'contact.title': {
    en: 'Contact',
    rw: 'Twandikire',
    fr: 'Contactez-nous',
  },
  'contact.subtitle': {
    en: 'Whether inquiring about enterprise software rollouts, payment integrations, or hardware setups, our Kigali team responds promptly.',
    rw: 'Waba ushaka ikoranabuhanga mu bucuruzi, kwinjiza MoMo, cyangwa gukoresha ibyuma bya POS, ikipe yacu i Kigali iragufasha vuba.',
    fr: 'Déploiement d’entreprise, intégration de paiement ou matériel POS : notre équipe à Kigali vous répond rapidement.',
  },
  'contact.headquarters': {
    en: 'Headquarters',
    rw: 'Ibiro Bikuru',
    fr: 'Siège Social',
  },
  'contact.general_email': {
    en: 'General Email',
    rw: 'Imeli Rusange',
    fr: 'Email Général',
  },
  'contact.direct_line': {
    en: 'Direct Line',
    rw: 'Telefoni',
    fr: 'Ligne Directe',
  },
  'contact.verified_socials': {
    en: 'Verified Social Channels',
    rw: 'Imbuga Zacu zizewe',
    fr: 'Réseaux Sociaux Officiels',
  },
  'contact.form_name': {
    en: 'Your Name',
    rw: 'Izina Ryawe',
    fr: 'Votre Nom',
  },
  'contact.form_contact': {
    en: 'Email or Phone',
    rw: 'Imeli cyangwa Telefoni',
    fr: 'Email ou Téléphone',
  },
  'contact.form_message': {
    en: 'Message',
    rw: 'Ubutumwa',
    fr: 'Message',
  },
  'contact.form_send': {
    en: 'Send Message',
    rw: 'Ohereza Ubutumwa',
    fr: 'Envoyer le Message',
  },
  'contact.form_success_title': {
    en: 'Message Received',
    rw: 'Ubutumwa Bwakiriwe',
    fr: 'Message Reçu',
  },
  'contact.form_success_desc': {
    en: 'Thank you. A BMan team member will review your message and follow up shortly.',
    rw: 'Murakoze. Umukozi wa BMan arasuzuma ubutumwa bwawe aguhamagare vuba.',
    fr: 'Merci. Un membre de l’équipe BMan étudiera votre message et vous répondra sous peu.',
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    rw: 'Uburenganzira bwose burabitswe.',
    fr: 'Tous droits réservés.',
  },
  'footer.location': {
    en: 'Kigali, Rwanda',
    rw: 'Kigali, u Rwanda',
    fr: 'Kigali, Rwanda',
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('bman_lang') as Language;
    if (saved && (saved === 'en' || saved === 'rw' || saved === 'fr')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('bman_lang', newLang);
  };

  const t = (key: string): string => {
    const entry = DICTIONARY[key];
    if (!entry) return key;
    return entry[lang] || entry['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
