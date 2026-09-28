'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Smartphone, Globe, Sparkles } from 'lucide-react';
import { MORE_FEATURES } from '@/lib/bufferData';

export function MoreFeaturesSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'collaborate': return <Users className="w-6 h-6 text-rose-600" />;
      case 'mobile-app': return <Smartphone className="w-6 h-6 text-purple-600" />;
      case 'start-page': return <Globe className="w-6 h-6 text-orange-600" />;
      case 'ai-assistant': return <Sparkles className="w-6 h-6 text-cyan-600" />;
      default: return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'coral': return 'bg-[#fff1f2] border-rose-100 text-rose-900';
      case 'purple': return 'bg-[#faf5ff] border-purple-100 text-purple-900';
      case 'orange': return 'bg-[#fff7ed] border-orange-100 text-orange-900';
      case 'aqua': return 'bg-[#ecfeff] border-cyan-100 text-cyan-900';
      default: return 'bg-gray-50 border-gray-100 text-gray-900';
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight text-center mb-12 sm:mb-16">
          <span className="text-[#2c4bff]">…</span>and so much more!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MORE_FEATURES.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between hover:shadow-md transition-all ${getThemeClasses(item.theme)}`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                  {getIcon(item.id)}
                </div>

                <h3 className="text-xl font-bold text-gray-950 tracking-tight">
                  <Link href={item.href} className="hover:underline">
                    {item.heading}
                  </Link>
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-bold text-gray-900 hover:text-[#2c4bff] group"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
