import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { GalaxyCanvas, GalaxyNavbar, GalaxyFooter } from '@/components';

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
    default: 'BMan Technologies — Software for African commerce',
    template: '%s · BMan Technologies',
  },
  description:
    'BMan Ltd engineers offline-first retail systems, distributed sales networks, and resilient software infrastructure from Kigali, Rwanda.',
  keywords: [
    'BMan',
    'BMan Technologies',
    'Rwanda Tech',
    'Kigali Software',
    'Offline-First POS',
    'BMan Stock',
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
    title: 'BMan Technologies — Software for African commerce',
    description:
      'Offline-first retail engines, distributed sales networks, and resilient infrastructure built for African businesses.',
    url: 'https://bman.rw',
    siteName: 'BMan Technologies',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BMan Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMan Technologies — Software for African commerce',
    description:
      'Offline-first retail engines, distributed sales networks, and resilient infrastructure built for African businesses.',
    creator: '@bman_rw',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
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
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased selection:bg-white selection:text-black flex flex-col min-h-screen`}
      >
        {/* Galaxy Starfield Background across all pages */}
        <GalaxyCanvas />

        {/* Global Floating Navbar */}
        <GalaxyNavbar />

        {/* Page Content */}
        <div className="relative z-10 flex-1 flex flex-col pt-24 pb-16">
          {children}
        </div>

        {/* Global Minimal Footer */}
        <GalaxyFooter />
      </body>
    </html>
  );
}
