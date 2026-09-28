'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { usePathname } from 'next/navigation';

function TopProgressBarContent() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname changes, navigation has completed
  useEffect(() => {
    if (isNavigating) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setProgress(0);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [pathname, isNavigating]);

  // Intercept client link clicks for instant visual feedback (like Linear, Vercel, Stripe)
  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const isBlank = target.getAttribute('target') === '_blank';
      const isDownload = target.hasAttribute('download');

      if (!href || isBlank || isDownload) return;
      if (
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('http://') ||
        href.startsWith('https://')
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Check if it's the exact same page & anchor
      const [path, hash] = href.split('#');
      if (path === pathname && (hash || href.startsWith('#'))) return;
      if (path === pathname && !hash) return;

      setIsNavigating(true);
      setProgress(35);

      t1 = setTimeout(() => setProgress(70), 70);
      t2 = setTimeout(() => setProgress(88), 180);
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  if (!isNavigating && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[9999] pointer-events-none transition-opacity duration-150 ease-out"
      style={{
        opacity: progress === 100 ? 0 : 1,
      }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#2c4bff] via-[#6366f1] to-[#38bdf8] shadow-[0_0_8px_rgba(44,75,255,0.7)] transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export function TopProgressBar() {
  return (
    <Suspense fallback={null}>
      <TopProgressBarContent />
    </Suspense>
  );
}
