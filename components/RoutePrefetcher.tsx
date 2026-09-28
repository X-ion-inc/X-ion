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
        const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
          prefetchRoutes,
          { timeout: 1500 }
        );
        return () => {
          if ('cancelIdleCallback' in window) {
            (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
          }
        };
      } else {
        const timer = setTimeout(prefetchRoutes, 800);
        return () => clearTimeout(timer);
      }
    }
  }, [router]);

  return null;
}
