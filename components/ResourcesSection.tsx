'use client';

import React from 'react';
import { ArrowRight, BookOpen, Clock, FileText, Wrench, Sparkles } from 'lucide-react';
import { RESOURCES_LIST } from '@/lib/bufferData';

export function ResourcesSection() {
  const getThemeStyle = (theme: string) => {
    switch (theme) {
      case 'purple': return 'bg-[#faf5ff] border-purple-100 text-purple-950 hover:border-purple-200';
      case 'aqua': return 'bg-[#ecfeff] border-cyan-100 text-cyan-950 hover:border-cyan-200';
      case 'coral': return 'bg-[#fff1f2] border-rose-100 text-rose-950 hover:border-rose-200';
      case 'fuscia': return 'bg-[#fdf2f8] border-pink-100 text-pink-950 hover:border-pink-200';
      case 'yellow': return 'bg-[#fefce8] border-amber-100 text-amber-950 hover:border-amber-200';
      default: return 'bg-gray-50 border-gray-100 text-gray-950';
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'free-tools': return <Wrench className="w-5 h-5 text-purple-600" />;
      case 'glossary': return <BookOpen className="w-5 h-5 text-cyan-600" />;
      case 'marketing-101': return <FileText className="w-5 h-5 text-rose-600" />;
      case 'best-time': return <Clock className="w-5 h-5 text-pink-600" />;
      case 'resources-hub': return <Sparkles className="w-5 h-5 text-amber-600" />;
      default: return <FileText className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="resources" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c4bff] font-mono">
              Resources
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Fuel your social media success
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
            Everything you need to level up your social strategy—in one place.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES_LIST.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-3xl p-7 border transition-all hover:shadow-md flex flex-col justify-between group ${getThemeStyle(item.theme)}`}
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-4">
                  {getIcon(item.id)}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-gray-950 group-hover:underline">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-gray-900 group-hover:text-[#2c4bff]">
                <span>Explore guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
