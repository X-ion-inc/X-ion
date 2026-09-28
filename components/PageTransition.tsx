'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.22, // 220ms - fast, clean, professional SaaS transition
        ease: [0.25, 0.1, 0.25, 1], // Cubic-bezier ease
      }}
      className="w-full flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
