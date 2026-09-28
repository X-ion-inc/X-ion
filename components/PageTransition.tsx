'use client';

import React, { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={isFirstRender.current ? false : { opacity: 0.85, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.18, // 180ms: fast, crisp SaaS transition (Linear, Notion, Vercel standard)
        ease: [0.16, 1, 0.3, 1], // Custom rapid ease-out
      }}
      className="w-full flex-1 flex flex-col will-change-[opacity,transform]"
    >
      {children}
    </motion.div>
  );
}
