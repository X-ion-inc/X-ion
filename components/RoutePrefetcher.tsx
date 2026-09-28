'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const KEY_ROUTES = [
  '/',
  '/features/publish',
  '/features/create',
  '/features/insights',
  '/features/community',
  '/features/start-page',
  '/pricing',
  '/integrations',
  '/resources',
  '/about',
  '/blog',
];

export function RoutePrefetcher() {
  const router = useRouter();

  // 1. Warm all key application routes in the background during idle time
  useEffect(() => {
    const prefetchRoutes = () => {
      KEY_ROUTES.forEach((route) => {
        try {
          router.prefetch(route);
        } catch {
          // Ignore prefetch error on unsupported environments
        }
      });
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        const handle = (
          window as unknown as {
            requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
          }
        ).requestIdleCallback(prefetchRoutes, { timeout: 1200 });

        return () => {
          if ('cancelIdleCallback' in window) {
            (
              window as unknown as { cancelIdleCallback: (id: number) => void }
            ).cancelIdleCallback(handle);
          }
        };
      } else {
        const timer = setTimeout(prefetchRoutes, 400);
        return () => clearTimeout(timer);
      }
    }
  }, [router]);

  // 2. Predictive prefetching: prefetch internal links as soon as the user hovers or touches them
  useEffect(() => {
    const prefetchedUrls = new Set<string>();

    const handlePointerOver = (e: MouseEvent | TouchEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      if (href.startsWith('//')) return;

      const pathname = href.split('#')[0];
      if (pathname && !prefetchedUrls.has(pathname)) {
        prefetchedUrls.add(pathname);
        try {
          router.prefetch(pathname);
        } catch {
          // Ignore
        }
      }
    };

    document.addEventListener('mouseover', handlePointerOver, { passive: true });
    document.addEventListener('touchstart', handlePointerOver, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handlePointerOver);
      document.removeEventListener('touchstart', handlePointerOver);
    };
  }, [router]);

  return null;
}
