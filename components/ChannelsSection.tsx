'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CHANNELS } from '@/lib/bufferData';
import { getChannelIcon } from './icons/ChannelLogos';

export function ChannelsSection() {
  return (
    <section id="channels" className="py-20 md:py-28 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c4bff] font-mono">
              Omnichannel Publishing
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Connect your favorite accounts
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
            Seamless direct publishing, reels, threads, shorts, and analytics across all major networks.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CHANNELS.map((ch) => (
            <a
              key={ch.id}
              href={ch.href}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 mb-3"
                style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
              >
                {getChannelIcon(ch.id, 'w-6 h-6', 26)}
              </div>

              <div className="font-semibold text-xs text-gray-900 group-hover:text-[#2c4bff] transition-colors">
                {ch.name}
              </div>

              <div className="mt-1 text-[11px] text-gray-400 font-mono flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>X-ion × {ch.name.split(' ')[0]}</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
