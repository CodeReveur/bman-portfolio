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
    default: 'BMan · We Create, Develop & Partner Software',
    template: '%s · BMan',
  },
  description:
    'BMan is a technology company that creates, develops, and partners software systems, retail engines, and resilient digital infrastructure.',
  keywords: [
    'BMan',
    'Software Company',
    'Software Development',
    'Software Partner',
    'Offline-First POS',
    'BMan Stock',
    'Kigali Software',
    'Joseph Maranatha',
    'Olivier Turikumwe',
  ],
  authors: [{ name: 'BMan', url: 'https://bman.rw' }],
  creator: 'BMan',
  publisher: 'BMan',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'BMan · We Create, Develop & Partner Software',
    description:
      'A technology company creating, developing, and partnering resilient software systems, retail platforms, and distributed networks.',
    url: 'https://bman.rw',
    siteName: 'BMan',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BMan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMan · We Create, Develop & Partner Software',
    description:
      'A technology company creating, developing, and partnering resilient software systems, retail platforms, and distributed networks.',
    creator: '@bman_rw',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bman.rw',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BMan',
              url: 'https://bman.rw',
              logo: 'https://bman.rw/logo.png',
              email: 'ceo@bman.rw',
              telephone: '+250781121117',
              description:
                'BMan is a technology company that creates, develops, and partners software systems, retail engines, and resilient digital infrastructure.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kigali',
                addressCountry: 'RW',
              },
              sameAs: [
                'https://linkedin.com/company/bman-ltd',
                'https://x.com/bman_rw',
                'https://github.com/CodeReveur',
                'https://youtube.com/@bman_technologies',
                'https://instagram.com/bman_rw',
              ],
            }),
          }}
        />
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
          <div className="relative z-10 flex-1 flex flex-col pt-20 sm:pt-24 pb-12 sm:pb-16 w-full overflow-x-hidden">
            {children}
          </div>

          {/* Global Minimal Footer */}
          <GalaxyFooter />
        </Providers>
      </body>
    </html>
  );
}
