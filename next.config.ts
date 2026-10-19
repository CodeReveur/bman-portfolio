import type { NextConfig } from "next";
import { BACKEND_URL } from "./lib/backend";

/**
 * Next.js configuration for bman.rw (BMan Corporate Universe & Portfolio).
 *
 * Requests to `/api/*` and `/files/*` are rewritten to the backend on mobile.bman.rw,
 * preserving first-party session cookies and eliminating CORS preflights.
 */
const target = BACKEND_URL.replace(/\/+$/, "");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${target}/api/:path*`,
      },
      {
        source: "/files/:path*",
        destination: `${target}/files/:path*`,
      },
    ];
  },
};

export default nextConfig;
