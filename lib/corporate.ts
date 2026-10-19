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
  architectureDiagramUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  avatar?: string;
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
    tagline: 'Offline-First Point of Sale & Inventory for Rwandan Retail',
    description:
      'Hybrid edge-syncing retail and inventory engine built for high-throughput counters. Runs seamlessly with or without internet connection, with instant TIN receipt printing and automatic MoMo payment reconciliation.',
    category: 'Retail & Inventory',
    logo_url: '/logo.png',
    product_url: 'https://stock.bman.rw',
    badge: 'Flagship · Live',
    featured: true,
    status: 'ACTIVE',
    metrics: '1,200+ Businesses · 99.98% Uptime · Dual Engine (SQLite + Postgres)',
    tech_stack: 'Spring Boot, Next.js, Flutter, PostgreSQL',
    display_order: 1,
  },
  {
    id: 'prod-agent',
    name: 'BMan Agent Portal',
    slug: 'bman-agent',
    tagline: 'Workforce & Commission Logistics Engine for Field Sales Agents',
    description:
      'Decentralised field operations platform empowering distributed merchant onboarding, dynamic tier-based commissions, bank proof verification, and automated MoMo agent payouts.',
    category: 'Field Operations & Distribution',
    logo_url: '/logo.png',
    product_url: 'https://agent.bman.rw',
    badge: 'Production Rails',
    featured: true,
    status: 'ACTIVE',
    metrics: 'Automated Payouts · Lead Pipeline Tracking · Zero-Fraud Verification',
    tech_stack: 'Next.js 16, Spring Security, Flutterwave, PostgreSQL',
    display_order: 2,
  },
  {
    id: 'prod-mail',
    name: 'BMan Mail',
    slug: 'bman-mail',
    tagline: 'Sovereign Encrypted Corporate Email & Communication Infrastructure',
    description:
      'High-security, in-country hosted email architecture for Rwandan enterprises and institutions with zero third-party telemetry, end-to-end data residency, and enterprise calendar integration.',
    category: 'Communications & Security',
    logo_url: '/logo.png',
    product_url: 'https://mail.bman.rw',
    badge: 'Enterprise Suite',
    featured: true,
    status: 'ACTIVE',
    metrics: '100% In-Country Data Sovereignty · Zero Third-Party Telemetry',
    tech_stack: 'Rust, Postfix/Dovecot, SvelteKit, TypeScript',
    display_order: 3,
  },
  {
    id: 'prod-eindege',
    name: 'E-Indege Logistics',
    slug: 'e-indege',
    tagline: 'Autonomous Fleet Telemetry, Delivery Dispatch & Freight Tracking',
    description:
      'Real-time vehicle and motorcycle telemetry network enabling precision freight tracking, route optimization, and instant courier dispatch across Rwanda and cross-border corridors.',
    category: 'Mobility & Transport',
    logo_url: '/logo.png',
    product_url: 'https://eindege.rw',
    badge: 'Mobility Innovation',
    featured: true,
    status: 'ACTIVE',
    metrics: 'Sub-second GPS Tracking · Intelligent Route Optimisation',
    tech_stack: 'Go, Node.js, TimescaleDB, Flutter',
    display_order: 4,
  },
  {
    id: 'prod-pay',
    name: 'BMan Pay Gateway',
    slug: 'bman-pay',
    tagline: 'Unified Multi-Rail Clearing Engine (Mobile Money, Cards, Bank Slips)',
    description:
      'Comprehensive payment aggregation engine abstracting MTN Mobile Money OpenAPI, Airtel Money, Visa/Mastercard, and bank slip manual audits into a single robust API.',
    category: 'Fintech & Payments',
    logo_url: '/logo.png',
    product_url: 'https://stock.bman.rw/payment',
    badge: 'Financial Rails',
    featured: true,
    status: 'ACTIVE',
    metrics: 'MTN MoMo API · Airtel Money · Instant Clearing & Webhooks',
    tech_stack: 'Spring Boot, Flutterwave, MTN MoMo OpenAPI',
    display_order: 5,
  },
];

export const DEFAULT_SERVICES: CorporateService[] = [
  {
    id: 'srv-erp',
    title: 'Enterprise POS & Distributed ERP Development',
    slug: 'enterprise-erp',
    summary:
      'Custom high-concurrency billing, accounting, and supply chain applications tailored for African trade.',
    description:
      'We design and construct mission-critical software architectures engineered to operate under challenging network conditions, ensuring absolute business continuity and flawless accounting compliance.',
    icon: 'Layers',
    delivery_model: 'Turnkey Solution & Retainer',
    display_order: 1,
  },
  {
    id: 'srv-cloud',
    title: 'Sovereign Cloud & Secure Infrastructure',
    slug: 'sovereign-cloud',
    summary:
      'On-premise deployments, hardened Linux servers, automated backup vaults, and zero-leak corporate setups.',
    description:
      'Keep your strategic institutional data hosted within Rwandan national boundaries with military-grade encryption, automated snapshot failovers, and self-healing cluster orchestration.',
    icon: 'Shield',
    delivery_model: 'Dedicated Engineering Support',
    display_order: 2,
  },
  {
    id: 'srv-fintech',
    title: 'Fintech & Multi-Rail Payment Integrations',
    slug: 'fintech-integrations',
    summary:
      'End-to-end integration with MTN MoMo, Airtel Money, Visa/Mastercard, and automated bank reconciliation.',
    description:
      'Accelerate revenue collection with direct telco API links, intelligent retry logic, idempotent callback hooks, and real-time ledger settlement engines.',
    icon: 'Wallet',
    delivery_model: 'API Integration & Maintenance',
    display_order: 3,
  },
  {
    id: 'srv-edge',
    title: 'Edge Computing & Offline-First Systems',
    slug: 'edge-offline-systems',
    summary:
      'Software designed to operate without internet connections and flawlessly synchronize when reconnected.',
    description:
      'Empower field teams and retail branches with local SQLite edge replicas that record transactions deterministically and synchronize upstream the moment connectivity is detected.',
    icon: 'Cpu',
    delivery_model: 'Architecture & Implementation',
    display_order: 4,
  },
  {
    id: 'srv-telemetry',
    title: 'Hardware Telemetry & GPS Tracking Solutions',
    slug: 'hardware-telemetry',
    summary:
      'Fleet telemetry, micro-controller interfaces, and sensor telemetry for logistics and operations.',
    description:
      'Live streaming IoT sensor telemetry, geofencing, fuel monitoring, and vehicle diagnostics displayed on unified real-time operations dashboards.',
    icon: 'Radio',
    delivery_model: 'Hardware + Cloud Pipeline',
    display_order: 5,
  },
  {
    id: 'srv-advisory',
    title: 'Strategic Technology Advisory & Architecture Audits',
    slug: 'technology-advisory',
    summary:
      'System architecture review, security audits, and engineering leadership for expanding organizations.',
    description:
      'Senior engineering consulting for institutions modernizing legacy databases, preparing for compliance audits, or building sovereign technology platforms.',
    icon: 'Compass',
    delivery_model: 'Strategic Advisory Retainer',
    display_order: 6,
  },
];

export const INVENTIONS: Invention[] = [
  {
    id: 'inv-dual-engine',
    name: 'Dual-Engine Edge Synchronisation',
    category: 'Core Runtime Architecture',
    headline: 'Zero-Network Transactional Persistence for Resilient African Retail',
    description:
      'A deterministic dual-engine architecture combining SQLite local embedded persistence with central PostgreSQL multi-branch synchronisation. Cashiers continue transacting at full wire speed during network outages, and transactions merge seamlessly upon reconnection without double-counts or split-brain corruption.',
    badge: 'Proprietary Invention',
    technicalSpecs: [
      'Zero-latency offline SQLite storage engine at counter level',
      'Asymmetric cryptographic sequence ordering with conflict-free merges',
      'Adaptive bandwidth compression across 2G/3G cellular links',
      'Automatic failover to offline cache with zero data loss',
    ],
    impactMetric: '100% Business Continuity during fiber & cellular blackouts',
  },
  {
    id: 'inv-airgap-license',
    name: 'Air-Gapped Licence Key Verification',
    category: 'Sovereign Cryptography',
    headline: 'Cryptographic Entitlement Validation without Continuous Internet',
    description:
      'Elliptic-curve signed offline license token verification that binds terminal capabilities to hardware machine hashes. Protects software integrity and validates subscriptions without telemetry pings or centralized DRM phone-homes.',
    badge: 'Security Patent',
    technicalSpecs: [
      'Ed25519 public-key signature verification on client hardware',
      'SHA-256 CPU, MAC, and disk serial hardware fingerprinting',
      'Grace period renewal via encrypted offline QR code tokens',
      'Zero external cloud phone-home required for daily operation',
    ],
    impactMetric: 'Tamper-proof licence security on remote air-gapped devices',
  },
  {
    id: 'inv-event-relay',
    name: 'Sovereign High-Throughput Event Relays',
    category: 'Distributed Systems',
    headline: 'Real-Time Multi-Tenant Message Distribution Across Sovereign Borders',
    description:
      'Ultra-compact low-latency relay daemon capable of multiplexing stock movements, payment callbacks, and hardware telemetry across thousands of concurrent devices while hosting data completely in Rwanda.',
    badge: 'Distributed Infrastructure',
    technicalSpecs: [
      'Native async I/O with serial GC tuning under 200MB memory cap',
      'Idempotent callback execution with exponential jitter retries',
      'End-to-end AES-256-GCM encrypted envelope payload transit',
      'Multi-protocol bridge: WebSocket, HTTP/2, and binary sockets',
    ],
    impactMetric: 'Sub-15ms message distribution across national nodes',
  },
  {
    id: 'inv-commission-rail',
    name: 'Automated Agent Commission Rails',
    category: 'Fintech Automation',
    headline: 'Dynamic Volume-Tiered Compensation with Real-Time Fraud Prevention',
    description:
      'Mathematical commission engine that calculates tiered rewards across customer subscription milestones, automates bank proof verification workflows, and triggers direct MTN Mobile Money payouts to field agents.',
    badge: 'Fintech Rail',
    technicalSpecs: [
      'Multi-tier commission ladder (10% to 25% + volume bonus)',
      'Automated bank slip image hashing and duplicate prevention',
      'Integrated Flutterwave & MTN MoMo OpenAPI instant disbursement',
      'Cryptographic ledger audit log with operator activity tracking',
    ],
    impactMetric: 'Instant verified payout settlement for field sales workforce',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Joseph Maranatha',
    role: 'Founder & Chief Executive Officer',
    title: 'Chief Systems Architect',
    bio: 'Software engineer and entrepreneur who founded BMan Ltd in Kigali to construct Africa’s next-generation sovereign software infrastructure. Dedicated to offline-first architectures, distributed databases, and high-performance engineering.',
    initials: 'JM',
    socials: {
      linkedin: 'https://linkedin.com/in/joseph-maranatha',
      twitter: 'https://x.com/josephmaranatha',
      github: 'https://github.com/CodeReveur',
    },
  },
  {
    name: 'Olivier Turikumwe',
    role: 'Co-Founder & Head of Operations',
    title: 'Director of Strategic Execution',
    bio: 'Leads operational logistics, national merchant partnerships, and expansion across Rwandan business hubs. Focuses on bridging field reality with technical execution.',
    initials: 'OT',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
  },
  {
    name: 'Grace Niyonasenze',
    role: 'Head of Customer Success & Onboarding',
    title: 'Merchant Experience Lead',
    bio: 'Champions counter merchant adoption, field onboarding, and high-touch support across retail, wholesale, and hospitality operations.',
    initials: 'GN',
    socials: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Rehoboth Rutayisire',
    role: 'Board Governance & Advisory',
    title: 'Strategic Advisor',
    bio: 'Provides institutional oversight, financial advisory, and governance leadership for BMan’s continental expansion.',
    initials: 'RR',
    socials: {
      linkedin: 'https://linkedin.com',
    },
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/bman-ltd',
    handle: 'BMan Ltd',
    icon: 'Linkedin',
    color: '#0a66c2',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/bman_rw',
    handle: '@bman_rw',
    icon: 'Twitter',
    color: '#1da1f2',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/CodeReveur',
    handle: 'CodeReveur',
    icon: 'Github',
    color: '#f4f4f5',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@bman_technologies',
    handle: 'BMan Technologies',
    icon: 'Youtube',
    color: '#ff0000',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/bman_rw',
    handle: '@bman_rw',
    icon: 'Instagram',
    color: '#e1306c',
  },
];

import { BACKEND_URL } from './backend';

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
