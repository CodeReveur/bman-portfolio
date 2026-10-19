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

export type ProjectStatus = 'Finished' | 'In development' | 'Inactive';

export interface ContributedProject {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  impact: string;
  year: string;
  status: ProjectStatus;
  deliverables: string[];
}

export interface Partner {
  id?: string;
  name: string;
  logoUrl: string;
  display_order?: number;
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

export const CONTRIBUTED_PROJECTS: ContributedProject[] = [
  {
    id: 'proj-wholesale-pos',
    title: 'Kigali Central Wholesale POS & Inventory Rollout',
    client: 'Gikondo Commercial Depots & Wholesale Hub',
    category: 'Wholesale & Retail ERP',
    summary:
      'BMan was contracted to build and deploy an offline-first POS and stock tracking network across 18 high-throughput wholesale counters, syncing local cash registers with warehouse inventory without internet reliance.',
    impact: '100% counter uptime across 18 checkout lanes; zero sales halts during daytime fiber blackouts.',
    year: '2025–2026',
    status: 'Finished',
    deliverables: ['Offline SQLite POS Engine', 'Multi-Register Sync', 'Thermal Receipt Driver', 'TIN Tax Reporting'],
  },
  {
    id: 'proj-freight-telemetry',
    title: 'Cross-Border Freight Telemetry & Fleet Tracking',
    client: 'Trans-Kivu Logistics Consortium',
    category: 'IoT & Telematics',
    summary:
      'Hired to design and deliver a real-time GPS and cellular telemetry tracking system for 48 commercial trucks operating across the Kigali–Rubavu–Goma transit corridor with offline route caching.',
    impact: '32% reduction in unlogged idle stops and automated border geofence crossing alerts.',
    year: '2025',
    status: 'Finished',
    deliverables: ['IoT Telemetry Firmware', 'Live Dispatch Dashboard', 'Fuel Sensor Logging', 'Sub-second Geofencing'],
  },
  {
    id: 'proj-agent-disbursement',
    title: 'Field Agent Sales Network & MoMo Payouts',
    client: 'Regional FMCG Distribution Network',
    category: 'Fintech & Workforce',
    summary:
      'Engineered a distributed field sales agent mobile application, automated commission ledger, and batch MTN Mobile Money disbursement engine for 350+ regional sales representatives.',
    impact: 'Agent payout cycle reduced from 5 business days to under 30 seconds with automated slip verification.',
    year: '2024–2025',
    status: 'Finished',
    deliverables: ['Agent Mobile Portal', 'Tiered Commission Engine', 'MTN MoMo OpenAPI Batch Payouts', 'Bank Slip OCR'],
  },
  {
    id: 'proj-hospitality-sync',
    title: 'Multi-Resort Hospitality PMS & Kitchen Sync',
    client: 'Rubavu Lakefront Hospitality Group',
    category: 'Hospitality & POS',
    summary:
      'Currently developing a unified property management, restaurant counter billing, and kitchen ticket display system for multi-venue resort properties with local network mesh synchronization.',
    impact: 'Synchronizes table orders and guest billing between outdoor bars and central kitchen with zero cloud dependency.',
    year: '2026',
    status: 'In development',
    deliverables: ['Kitchen Display Engine', 'Mesh Network Sync', 'Multi-Terminal Table Billing', 'Guest Folio Ledger'],
  },
  {
    id: 'proj-sacco-ledger',
    title: 'Microfinance Cooperative Core Ledger & Member SMS',
    client: 'Musanze Farmers SACCO Cooperative',
    category: 'Microfinance & Telecom',
    summary:
      'Built a low-bandwidth branch accounting system and instant transaction notification gateway enabling rural agricultural cooperatives to log member deposits and send automated SMS receipts.',
    impact: 'Over 8,200 rural members receiving instant deposit verification SMS notifications.',
    year: '2024',
    status: 'Finished',
    deliverables: ['Double-Entry Ledger', 'SMS Gateway Integration', 'Branch Offline Cache', 'Loan Schedule Calculator'],
  },
  {
    id: 'proj-courier-dispatch',
    title: 'Urban Motorcycle On-Demand Courier Dispatch',
    client: 'FastDrop Kigali Moto-Express',
    category: 'On-Demand Mobility',
    summary:
      'Built a real-time motorcycle courier hailing, driver routing, and digital delivery confirmation app for Kigali metro package dispatches.',
    impact: 'Handled over 25,000 package deliveries across Kigali before consolidation into E-Indege Logistics.',
    year: '2023–2024',
    status: 'Inactive',
    deliverables: ['Driver Android App', 'Customer Tracking Link', 'Automated Dispatch Queue', 'MoMo In-App Pay'],
  },
];

export const PARTNERS: Partner[] = [
  {
    name: 'MTN Mobile Money',
    logoUrl: '/partners/mtn-momo.svg',
  },
  {
    name: 'Airtel Money Rwanda',
    logoUrl: '/partners/airtel-money.svg',
  },
  {
    name: 'Bank of Kigali',
    logoUrl: '/partners/bank-of-kigali.svg',
  },
  {
    name: 'Rwanda Development Board',
    logoUrl: '/partners/rdb.svg',
  },
  {
    name: 'Kigali Innovation City',
    logoUrl: '/partners/kic.svg',
  },
  {
    name: 'Rwanda Retailers Network',
    logoUrl: '/partners/retailers.svg',
  },
];

export const DEFAULT_SERVICES: CorporateService[] = [
  {
    id: 'srv-offline',
    title: 'Offline-First Software Engineering',
    slug: 'offline-first-engineering',
    summary: 'High-availability applications designed to run without internet and sync automatically.',
    description:
      'We architect client-side transactional databases, resilient local caching, and conflict-free data replication for retail and operational environments with unstable connectivity.',
    icon: 'Shield',
    delivery_model: 'Custom Engineering',
    display_order: 1,
  },
  {
    id: 'srv-custom-erp',
    title: 'Custom Enterprise ERP Systems',
    slug: 'custom-erp-development',
    summary: 'Tailored retail, wholesale, and multi-branch management systems.',
    description:
      'Purpose-built inventory management, multi-warehouse stock routing, cashier permissions, and automated accounting tailored to your exact operational workflows.',
    icon: 'Layers',
    delivery_model: 'Turnkey Solution',
    display_order: 2,
  },
  {
    id: 'srv-payment-rails',
    title: 'Payment Gateway & MoMo Integration',
    slug: 'payment-rails-integration',
    summary: 'Direct integrations with MTN Mobile Money, Airtel, and banking APIs.',
    description:
      'We connect your business systems to mobile money and banking payment rails with instant webhook reconciliation, duplicate payment prevention, and automated disbursements.',
    icon: 'Wallet',
    delivery_model: 'Integration Module',
    display_order: 3,
  },
  {
    id: 'srv-pos-hardware',
    title: 'Hardware & POS Device Integration',
    slug: 'pos-hardware-integration',
    summary: 'Seamless connectivity with thermal printers, barcode scanners, and counter hardware.',
    description:
      'Driverless web-to-printer bridging via WebUSB, Bluetooth LE, and serial COM ports for instant receipt printing and sub-second barcode ingestion.',
    icon: 'Cpu',
    delivery_model: 'Hardware + Driver Bridge',
    display_order: 4,
  },
  {
    id: 'srv-telemetry',
    title: 'Fleet Telemetry & IoT Tracking',
    slug: 'fleet-telemetry-iot',
    summary: 'Live GPS diagnostics, sensor logging, and automated geofence dispatch.',
    description:
      'Hardware telematics firmware and cloud dashboards tracking delivery vehicles, motorcycle couriers, fuel consumption, and cargo transit in real time.',
    icon: 'Radio',
    delivery_model: 'Hardware + Firmware Pipeline',
    display_order: 5,
  },
  {
    id: 'srv-audit',
    title: 'Architecture Audits & Cloud Migration',
    slug: 'architecture-audits',
    summary: 'System architecture review, security audits, and database optimization.',
    description:
      'Senior engineering advisory for institutions modernizing legacy systems, preparing for regulatory audits, or repatriating data to sovereign domestic infrastructure.',
    icon: 'Compass',
    delivery_model: 'Advisory Retainer',
    display_order: 6,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Joseph Maranatha',
    role: 'Founder & CEO',
    title: 'Lead Systems Architect',
    bio: 'Software engineer and founder of BMan. Focused on offline-first architectures, distributed databases, and high-reliability systems that power commercial enterprises from the counter up.',
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
    bio: 'Directs operations, merchant rollouts, and national field agent networks across Rwanda, turning technical products into real-world business adoption in markets across the country.',
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
    handle: 'BMan',
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
    handle: 'BMan',
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
  partners: Partner[];
}> {
  try {
    const baseUrl = typeof window === 'undefined' ? (process.env.INTERNAL_BACKEND_URL || BACKEND_URL) : '';
    const res = await fetch(`${baseUrl}/api/public/corporate/all`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('Failed to fetch corporate data');
    const data = await res.json();
    const rawPartners = data.partners || [];
    const partners: Partner[] = rawPartners.length
      ? rawPartners.map((p: any) => ({
          id: p.id,
          name: p.name,
          logoUrl: p.logoUrl || p.logo_url || '/partners/retailers.svg',
          display_order: p.display_order ?? p.displayOrder ?? 0,
        }))
      : PARTNERS;

    return {
      products: data.products?.length ? data.products : DEFAULT_PRODUCTS,
      services: data.services?.length ? data.services : DEFAULT_SERVICES,
      partners,
    };
  } catch {
    return {
      products: DEFAULT_PRODUCTS,
      services: DEFAULT_SERVICES,
      partners: PARTNERS,
    };
  }
}
