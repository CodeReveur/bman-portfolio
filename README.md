# BMAN — Corporate Universe & Portfolio (`bman.rw`)

> **We create, develop, and partner software.**

The official corporate portfolio for **BMAN** (`https://bman.rw`), engineered with Next.js, React, Tailwind CSS, and WebGL cosmic starfield simulations.

---

## 🌌 Overview

`bman.rw` is the corporate portfolio of **BMAN** — a technology company that creates, develops, and partners software. It showcases:
- **Created & Partnered Software**:
  - **Stock** (`https://stock.bman.rw`): Offline-First POS & Inventory.
  - **Agent Portal** (`https://agent.bman.rw`): Decentralized agent sales and commissions network.
  - **Sovereign Mail** (`https://mail.bman.rw`): Corporate email infrastructure.
  - **E-Indege Logistics** (`https://logistics.bman.rw`): Real-time telematics and supply chain tracking.
  - **Pay Gateway** (`https://pay.bman.rw`): Multi-channel payment aggregation.
- **Contributed & Partnered Projects**: Real-world commercial deployments and contract engineering.
- **Commercial Services**: Architectural audits, offline-first engineering, custom enterprise systems, and payment rails integration.
- **Leadership & About**: Founder Joseph Maranatha, Co-Founder Olivier Turikumwe, and core principles.
- **Careers & Culture**: Kigali-based deep engineering roles.
- **Verified Communication Channels**: Official contacts, socials, and instant inquiries.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom cosmic nebulae and rainbow orbit keyframes
- **Animation & Visuals**:
  - HTML5 Canvas 3D galaxy starfield simulation (500+ celestial bodies with gravitational drift, dust particles, and mouse interaction)
  - Framer Motion
- **Icons**: [Lucide React](https://lucide.dev/)
- **Dynamic Content**: Connected to Spring Boot Corporate REST API (`https://mobile.bman.rw/api/public/corporate/all`) with fallbacks for offline resilience.

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone git@github.com:CodeReveur/bman-portfolio.git
cd bman-portfolio

# Install dependencies
npm install

# Start local development server (port 3005)
npm run dev
```

Visit [http://localhost:3005](http://localhost:3005) to experience the cosmic universe.

---

## 📦 Build & Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

### Deploying to Vercel
1. Link repository to Vercel project with domain `bman.rw`.
2. Configure environment variable (optional, defaults to `https://mobile.bman.rw`):
   ```env
   INTERNAL_BACKEND_URL=https://mobile.bman.rw
   ```

---

## 🛡️ License

Copyright © 2026 BMAN. All rights reserved.
