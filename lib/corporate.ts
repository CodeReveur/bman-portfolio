import { BACKEND_URL } from './backend';

export interface CorporateProduct {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  logo_url: string;
  product_url: string;
  badge: string;
  featured: boolean;
  status: 'ACTIVE' | 'DEVELOPMENT' | 'CONCEPT' | 'ARCHIVED';
  metrics: string;
  tech_stack: string;
  display_order: number;
}

export interface CorporateService {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: string;
  delivery_model: string;
  display_order: number;
}

export interface Invention {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  badge: string;
  technicalSpecs: string[];
  impactMetric: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  initials: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const DEFAULT_PRODUCTS: CorporateProduct[] = [
  {
    id: 'prod-stock',
    name: 'BMan Stock',
    slug: 'bman-stock',
    tagline: 'Offline-first point of sale and inventory management',
    description:
      'Runs directly on counter computers and team phones. Sell, manage inventory, print receipts, and track revenue with or without internet connection.',
    category: 'Retail & POS',
    logo_url: '/logo.png',
    product_url: 'https://stock.bman.rw',
    badge: 'Live Flagship',
    featured: true,
    status: 'ACTIVE',
    metrics: '1,200+ Businesses · 100% Offline Continuity · Sub-second Scanning',
    tech_stack: 'Spring Boot, Next.js, SQLite, PostgreSQL',
    display_order: 1,
  },
  {
    id: 'prod-agent',
    name: 'BMan Agent Portal',
    slug: 'bman-agent',
    tagline: 'Field agent sales network & commission disbursement',
    description:
      'Empowers distributed sales agents with merchant onboarding, live commission tiers, bank proof verification, and instant MTN MoMo payouts.',
    category: 'Operations',
    logo_url: '/logo.png',
    product_url: 'https://agent.bman.rw',
    badge: 'Production',
    featured: true,
    status: 'ACTIVE',
    metrics: 'Instant MoMo Payouts · Tiered Commissions · Zero-Fraud Verification',
    tech_stack: 'Next.js 16, Spring Security, MoMo OpenAPI',
    display_order: 2,
  },
  {
    id: 'prod-mail',
    name: 'BMan Mail',
    slug: 'bman-mail',
    tagline: 'Encrypted sovereign corporate email hosted in Rwanda',
    description:
      'Secure, high-reliability enterprise email infrastructure hosted locally with zero foreign telemetry and full data sovereignty.',
    category: 'Communications',
    logo_url: '/logo.png',
    product_url: 'https://mail.bman.rw',
    badge: 'Enterprise',
    featured: true,
    status: 'ACTIVE',
    metrics: 'In-Country Data Hosting · Zero Foreign Telemetry · E2E Security',
    tech_stack: 'Rust, Postfix, Dovecot, TypeScript',
    display_order: 3,
  },
  {
    id: 'prod-eindege',
    name: 'E-Indege Logistics',
    slug: 'e-indege',
    tagline: 'Real-time fleet telemetry, delivery dispatch & tracking',
    description:
      'High-precision IoT vehicle tracking, intelligent route optimization, and courier dispatch across Kigali and cross-border transport corridors.',
    category: 'Logistics',
    logo_url: '/logo.png',
    product_url: 'https://eindege.rw',
    badge: 'Mobility',
    featured: true,
    status: 'ACTIVE',
    metrics: 'Live GPS Telemetry · Dynamic Route Optimization · Dispatch Automation',
    tech_stack: 'Go, Node.js, TimescaleDB, Flutter',
    display_order: 4,
  },
  {
    id: 'prod-pay',
    name: 'BMan Pay Gateway',
    slug: 'bman-pay',
    tagline: 'Unified payment rails for Mobile Money and cards',
    description:
      'Single API aggregating MTN Mobile Money OpenAPI, Airtel Money, card payments, and manual bank slip verification with automated reconciliation.',
    category: 'Fintech',
    logo_url: '/logo.png',
    product_url: 'https://stock.bman.rw/payment',
    badge: 'Fintech Rails',
    featured: true,
    status: 'ACTIVE',
    metrics: 'MTN MoMo API · Airtel Money · Instant Clearing & Webhooks',
    tech_stack: 'Spring Boot, MoMo OpenAPI, Flutterwave',
    display_order: 5,
  },
];

export const DEFAULT_SERVICES: CorporateService[] = [
  {
    id: 'srv-offline',
    title: 'Offline-First Software Engineering',
    slug: 'offline-first-engineering',
    summary: 'High-availability applications designed to run without internet and sync automatically.',
    description: 'We architect and build client-side transactional databases, resilient local caching, and conflict-free data replication for low-connectivity environments.',
    icon: 'Shield',
    delivery_model: 'Custom Engineering',
    display_order: 1,
  },
  {
    id: 'srv-custom-erp',
    title: 'Custom Enterprise ERP Systems',
    slug: 'custom-erp-development',
    summary: 'Tailored retail, wholesale, and multi-branch management systems.',
    description: 'Purpose-built inventory management, multi-warehouse stock routing, cashier permissions, and automated accounting tailored to your specific workflows.',
    icon: 'Layers',
    delivery_model: 'Turnkey Solution',
    display_order: 2,
  },
  {
    id: 'srv-payment-rails',
    title: 'Payment Gateway & MoMo Integration',
    slug: 'payment-rails-integration',
    summary: 'Direct integrations with MTN Mobile Money, Airtel, and banking APIs.',
    description: 'We connect your systems to African mobile money networks with instant webhook reconciliation, duplicate payment prevention, and automated disbursements.',
    icon: 'Wallet',
    delivery_model: 'Integration Module',
    display_order: 3,
  },
  {
    id: 'srv-pos-hardware',
    title: 'Hardware & POS Device Integration',
    slug: 'pos-hardware-integration',
    summary: 'Seamless connectivity with thermal printers, barcode scanners, and counter hardware.',
    description: 'Driverless web-to-printer bridging via WebUSB, Bluetooth LE, and serial COM ports for instant receipt printing and barcode ingestion.',
    icon: 'Cpu',
    delivery_model: 'Hardware + Driver Bridge',
    display_order: 4,
  },
];

export const INVENTIONS: Invention[] = [
  {
    id: 'inv-dual-engine',
    name: 'Dual-Engine Edge Sync',
    category: 'Architecture',
    headline: 'Zero-internet transaction continuity with automatic cloud merge',
    description:
      'Combines embedded local SQLite on the cashier device with cloud PostgreSQL. Transactions commit instantly with zero latency and sync when connection returns with zero data loss.',
    badge: 'Patented Engine',
    technicalSpecs: [
      'Sub-5ms local transaction write speed',
      'Conflict-free multi-terminal reconciliation',
      'Automatic bandwidth-adaptive sync',
    ],
    impactMetric: '100% counter uptime through blackouts',
  },
  {
    id: 'inv-hardware-bridge',
    name: 'Universal Hardware Bridge',
    category: 'Hardware',
    headline: 'Driverless thermal printing and barcode scanning via browser',
    description:
      'Direct hardware communication layer communicating via WebUSB and Bluetooth without requiring printer driver installations or third-party spoolers.',
    badge: 'Device Engine',
    technicalSpecs: [
      'Zero-driver ESC/POS receipt generation',
      'Direct Bluetooth & USB thermal printer bridge',
      'Real-time barcode scanner event pipeline',
    ],
    impactMetric: 'Plug-and-play setup on any PC or phone',
  },
  {
    id: 'inv-telecom-relay',
    name: 'Sovereign Telecom Relay',
    category: 'Distributed Systems',
    headline: 'Direct telecom message dispatch with in-country data compliance',
    description:
      'Low-latency relay daemon dispatching SMS notifications, MoMo payment callbacks, and hardware telemetry hosted fully in Rwanda.',
    badge: 'Infrastructure',
    technicalSpecs: [
      'End-to-end encrypted payload transit',
      'Dual telecom routing with auto-failover',
      'Idempotent webhook callbacks',
    ],
    impactMetric: 'Sub-second national notification delivery',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Joseph Maranatha',
    role: 'Founder & CEO',
    title: 'Lead Systems Architect',
    bio: 'Software engineer and founder of BMan Ltd. Focused on offline-first architectures, distributed databases, and high-reliability systems that power African businesses.',
    initials: 'JM',
    socials: {
      linkedin: 'https://linkedin.com/in/joseph-maranatha',
      twitter: 'https://x.com/josephmaranatha',
      github: 'https://github.com/CodeReveur',
    },
  },
  {
    name: 'Olivier Turikumwe',
    role: 'Co-Founder & COO',
    title: 'Head of Operations',
    bio: 'Directs operations, merchant rollouts, and national field agent networks across Rwanda, turning technical products into real-world business adoption.',
    initials: 'OT',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/bman-ltd',
    handle: 'BMan Ltd',
    icon: 'Linkedin',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/bman_rw',
    handle: '@bman_rw',
    icon: 'Twitter',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/CodeReveur',
    handle: 'CodeReveur',
    icon: 'Github',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@bman_technologies',
    handle: 'BMan Technologies',
    icon: 'Youtube',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/bman_rw',
    handle: '@bman_rw',
    icon: 'Instagram',
  },
];

export async function fetchCorporateData(): Promise<{
  products: CorporateProduct[];
  services: CorporateService[];
}> {
  try {
    const baseUrl = typeof window === 'undefined' ? (process.env.INTERNAL_BACKEND_URL || BACKEND_URL) : '';
    const res = await fetch(`${baseUrl}/api/public/corporate/all`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('Failed to fetch corporate data');
    const data = await res.json();
    return {
      products: data.products?.length ? data.products : DEFAULT_PRODUCTS,
      services: data.services?.length ? data.services : DEFAULT_SERVICES,
    };
  } catch {
    return {
      products: DEFAULT_PRODUCTS,
      services: DEFAULT_SERVICES,
    };
  }
}
