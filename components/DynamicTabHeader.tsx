'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DynamicTabHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Compute active dynamic header per page navigated (No dashes)
  const getPageTitle = (path: string): string => {
    switch (path) {
      case '/products':
        return 'Products · BMAN';
      case '/services':
        return 'Services · BMAN';
      case '/about':
        return 'About · BMAN';
      case '/contact':
        return 'Contact · BMAN';
      default:
        return 'BMAN · We Create, Develop & Partner Software';
    }
  };

  useEffect(() => {
    const currentTitle = getPageTitle(pathname);
    document.title = currentTitle;

    const complainMessages = [
      '👋 Hey, come back! · BMAN',
      '👋 We miss you! · BMAN',
      '👋 Don’t leave yet! · BMAN',
    ];
    let msgIndex = 0;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is ignored - complain with hand to come back!
        document.title = complainMessages[0];
        intervalRef.current = setInterval(() => {
          msgIndex = (msgIndex + 1) % complainMessages.length;
          document.title = complainMessages[msgIndex];
        }, 2000);
      } else {
        // Tab is active - restore dynamic page title
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        document.title = getPageTitle(pathname);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [pathname, t]);

  return null;
}
