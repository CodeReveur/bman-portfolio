import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { GalaxyCanvas, GalaxyNavbar, GalaxyFooter, DynamicTabHeader } from '@/components';

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
    default: 'BMAN · We Create, Develop & Partner Software',
    template: '%s · BMAN',
  },
  description:
    'BMAN is a technology company that creates, develops, and partners software systems, retail engines, and resilient digital infrastructure.',
  keywords: [
    'BMAN',
    'Software Company',
    'Software Development',
    'Software Partner',
    'Offline-First POS',
    'BMAN Stock',
    'Kigali Software',
    'Joseph Maranatha',
    'Olivier Turikumwe',
  ],
  authors: [{ name: 'BMAN', url: 'https://bman.rw' }],
  creator: 'BMAN',
  publisher: 'BMAN',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'BMAN · We Create, Develop & Partner Software',
    description:
      'A technology company creating, developing, and partnering resilient software systems, retail platforms, and distributed networks.',
    url: 'https://bman.rw',
    siteName: 'BMAN',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BMAN',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMAN · We Create, Develop & Partner Software',
    description:
      'A technology company creating, developing, and partnering resilient software systems, retail platforms, and distributed networks.',
    creator: '@bman_rw',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('bman_theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-black text-zinc-900 dark:text-white antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col min-h-screen transition-colors duration-200`}
      >
        <Providers>
          {/* Dynamic Tab Title per page navigated & wave back when tab is ignored */}
          <DynamicTabHeader />

          {/* Ambient Galaxy Starfield Background across all pages */}
          <GalaxyCanvas />

          {/* Global Floating Navbar (Width matched to max-w-5xl) */}
          <GalaxyNavbar />

          {/* Page Content */}
          <div className="relative z-10 flex-1 flex flex-col pt-24 pb-16">
            {children}
          </div>

          {/* Global Minimal Footer */}
          <GalaxyFooter />
        </Providers>
      </body>
    </html>
  );
}
