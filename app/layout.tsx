import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bman.rw'),
  title: {
    default: 'BMan Technologies — Sovereign Software Systems & Innovations',
    template: '%s · BMan Technologies',
  },
  description:
    'BMan Ltd engineers sovereign software infrastructure, offline-first POS networks, telemetry, and high-impact inventions across Rwanda and East Africa.',
  keywords: [
    'BMan',
    'BMan Technologies',
    'Rwanda Tech',
    'Kigali Software',
    'Offline-First POS',
    'African Inventions',
    'Enterprise Cloud',
    'Joseph Maranatha',
    'Olivier Turikumwe',
  ],
  authors: [{ name: 'BMan Technologies Ltd', url: 'https://bman.rw' }],
  creator: 'BMan Technologies Ltd',
  publisher: 'BMan Technologies Ltd',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'BMan Technologies — Sovereign Software Systems & Innovations',
    description:
      'Engineering the sovereign technological backbone of East Africa: offline-first retail networks, intelligent logistics, distributed telemetry, and corporate platforms.',
    url: 'https://bman.rw',
    siteName: 'BMan Technologies',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BMan Technologies Corporate Universe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMan Technologies — Sovereign Software Systems & Innovations',
    description:
      'Engineering the sovereign technological backbone of East Africa: offline-first retail networks, intelligent logistics, and distributed telemetry.',
    creator: '@bman_rw',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#030712',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030712] text-zinc-100 antialiased selection:bg-cyan-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
