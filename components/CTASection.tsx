'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
          Grow your social presence with confidence
        </h2>

        <div className="mt-8">
          <a
            href="https://app.scrutium.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 px-10 rounded-2xl bg-[#2c4bff] hover:bg-[#1b3aff] text-white text-lg font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-3 group"
          >
            <span>Get started for free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500 font-medium">
          No credit card needed. Free forever.
        </p>
      </div>
    </section>
  );
}
