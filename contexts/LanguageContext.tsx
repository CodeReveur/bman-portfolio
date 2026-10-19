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
    en: 'We create, develop, and partner software.',
    rw: 'Dukora, duteza imbere, kandi dufatanya mu gukora porogaramu.',
    fr: 'Nous créons, développons et accompagnons des logiciels.',
  },
  'home.subtitle': {
    en: 'BMan is a technology company. We engineer offline-first retail systems, scale digital sales networks, and partner with businesses to build resilient software infrastructure.',
    rw: 'BMan ni ikigo cy’ikoranabuhanga gikora, giteza imbere, kikanakorana n’ibigo byubaka sisitemu zicuruza n’imiyoboro y’ubucuruzi yizewe.',
    fr: 'BMan est une entreprise technologique. Nous concevons, développons et accompagnons des logiciels résilients et des réseaux de distribution.',
  },
  'home.cta_products': {
    en: 'Explore Software',
    rw: 'Reba Porogaramu',
    fr: 'Découvrir nos Logiciels',
  },
  'home.cta_about': {
    en: 'About BMan',
    rw: 'Abo Turi Bo',
    fr: 'À propos de BMan',
  },
  'home.pillars_title': {
    en: 'Why Partner with BMan',
    rw: 'Impamvu BMan Ari Umufatanyabikorwa Wizewe',
    fr: 'Pourquoi Choisir BMan',
  },
  'home.pillars_subtitle': {
    en: 'We engineer software with high reliability, local-first persistence, and resilience to real-world infrastructure constraints.',
    rw: 'Dukora porogaramu zifite ubushobozi bwo gukora igihe cyose no mu bihe bitoroshye by’umuriro n’itumanaho.',
    fr: 'Nous concevons des logiciels hautement fiables, autonomes en local et résilients aux contraintes d’infrastructure.',
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
    en: 'Software Portfolio',
    rw: 'Porogaramu Zacu',
    fr: 'Portefeuille Logiciel',
  },
  'home.card_products_title': {
    en: 'Created & Partnered Software',
    rw: 'Porogaramu Twakoze n’Izo Dufatanyije',
    fr: 'Logiciels Développés & Partenariats',
  },
  'home.card_products_desc': {
    en: 'Software created and developed by BMan: Stock POS, Agent Portal, Sovereign Mail, E-Indege Logistics, and Pay Gateway.',
    rw: 'Porogaramu zakozwe na BMan: Stock POS, Agent Portal, Sovereign Mail, E-Indege Logistics, na Pay Gateway.',
    fr: 'Logiciels conçus et développés par BMan : Stock POS, Agent Portal, Sovereign Mail, E-Indege Logistics et Pay Gateway.',
  },
  'home.card_services_tag': {
    en: 'Development & Partnerships',
    rw: 'Gukora no Gufatanya',
    fr: 'Développement & Partenariat',
  },
  'home.card_services_title': {
    en: 'Software Engineering',
    rw: 'Ubwubatsi bwa Porogaramu',
    fr: 'Ingénierie Logicielle',
  },
  'home.card_services_desc': {
    en: 'We partner with organizations to create custom ERPs, offline-first architectures, and direct Mobile Money payment integrations.',
    rw: 'Dufatanya n’ibigo gukora porogaramu z’ubucuruzi, gukora idahagarara, no guhuza na MTN MoMo na Airtel Money.',
    fr: 'Nous accompagnons les organisations pour concevoir des ERPs sur mesure, des architectures hors-ligne et des passerelles Mobile Money.',
  },
  'home.card_about_tag': {
    en: 'Company Profile',
    rw: 'Ikigo Cyacu',
    fr: 'L’Entreprise',
  },
  'home.card_about_title': {
    en: 'About BMan',
    rw: 'Abo Turi Bo',
    fr: 'À propos de BMan',
  },
  'home.card_about_desc': {
    en: 'A Kigali technology company that creates, develops, and partners software built with zero third-party foreign telemetry.',
    rw: 'Ikigo cy’i Kigali gikora, kigateza imbere, kikanakorana n’abandi mu kubaka porogaramu zidaheza amakuru hanze.',
    fr: 'Entreprise technologique basée à Kigali créant, développant et accompagnant des logiciels souverains et respectueux des données.',
  },

  // Products Page
  'products.tag': {
    en: 'Product Ecosystem',
    rw: 'Ikoranabuhanga Ryacu',
    fr: 'Écosystème de Produits',
  },
  'products.title': {
    en: 'Created & Partnered Software',
    rw: 'Porogaramu Twakoze n’Izo Dufatanyije',
    fr: 'Logiciels Développés & Partenariats',
  },
  'products.subtitle': {
    en: 'Software platforms created, developed, and partnered by BMan to power modern enterprise operations.',
    rw: 'Porogaramu zakozwe, zatejwe imbere, kandi zifatanyijwe na BMan mu gufasha ubucuruzi bw’iki gihe.',
    fr: 'Plateformes logicielles créées, développées et accompagnées par BMan pour les entreprises modernes.',
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
    en: 'Contributed & Partnered Projects',
    rw: 'Imishinga BMan Yakozeho n’Iyo Ifatanyije',
    fr: 'Projets Clients & Développements Partenaires',
  },
  'products.projects_subtitle': {
    en: 'Software systems, POS deployments, and commercial contracts BMan was hired to develop or partnered to engineer.',
    rw: 'Amasoko akomeye, sisitemu z’amaduka, n’imishinga y’ubucuruzi BMan yahawe gukora cyangwa yafatanyije n’abandi.',
    fr: 'Systèmes d’entreprise, déploiements POS et contrats d’ingénierie créés, développés ou partenaires de BMan.',
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
    en: 'Software Development & Services',
    rw: 'Gukora Porogaramu na Serivisi',
    fr: 'Développement Logiciel & Services',
  },
  'services.subtitle': {
    en: 'We partner with organizations to create, engineer, and deploy resilient software for real-world operations.',
    rw: 'Dufatanya n’ibigo gukora, kwagura, no gushyira mu bikorwa porogaramu zizewe z’ubucuruzi.',
    fr: 'Nous accompagnons les organisations pour concevoir, développer et déployer des logiciels résilients.',
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
    en: 'A technology company that creates, develops, and partners software designed to run through power outages and fiber cuts.',
    rw: 'Ikigo cy’ikoranabuhanga gikora, kigateza imbere, kikanakorana n’abandi mu kubaka porogaramu zidakenera umuriro cyangwa interineti ihoraho.',
    fr: 'Une entreprise technologique qui crée, développe et accompagne des logiciels conçus pour résister aux pannes de réseau et de courant.',
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
    const saved = localStorage.getItem('BMan_lang') as Language;
    if (saved && (saved === 'en' || saved === 'rw' || saved === 'fr')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('BMan_lang', newLang);
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
