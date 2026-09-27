'use client';

import React from 'react';
import { SOCIAL_PROOF_BRANDS } from '@/lib/bufferData';

export function SocialProofSection() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden" aria-label="Social proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          <span className="font-extrabold text-[#2c4bff]">273,098</span> creators, brands, and agencies using Buffer
        </h2>
      </div>

      {/* Infinite scrolling marquee of brand names & logos */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient edge fades */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex space-x-12 sm:space-x-16 animate-marquee whitespace-nowrap py-2 items-center">
          {SOCIAL_PROOF_BRANDS.concat(SOCIAL_PROOF_BRANDS).map((brand, idx) => (
            <div 
              key={idx} 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-800 transition-colors opacity-80 hover:opacity-100 cursor-default select-none"
            >
              <span className={`font-black tracking-tight font-sans ${
                brand.size === 'large' ? 'text-2xl sm:text-3xl' :
                brand.size === 'medium' ? 'text-xl sm:text-2xl' :
                'text-lg sm:text-xl'
              }`}>
                {brand.name.toUpperCase()}
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-normal">
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
