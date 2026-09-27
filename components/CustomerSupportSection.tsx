'use client';

import React from 'react';
import { ArrowRight, Heart, Globe2, MessageCircle, HelpCircle } from 'lucide-react';

export function CustomerSupportSection() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                Customer Support
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Human support, worldwide
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Our global Customer Advocacy team is spread across time zones to make sure help is always nearby. Whether you have a quick question, need technical support, or just want to connect, we’re here for you — no bots, just real people who care.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://support.buffer.com/"
                className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors inline-flex items-center gap-1.5"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Visit the Help Center</span>
              </a>

              <a
                href="https://discord.gg/aQdKKr6kDY"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#5865F2]" />
                <span>Join Discord</span>
              </a>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              We prioritize customer connection as a company and you could end up speaking with a teammate in any role at Buffer, from Marketers to Engineers.
            </p>

            <div>
              <a
                href="https://buffer.com/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-[#2c4bff] transition-colors group"
              >
                <span>Learn more about our global team</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual illustration of Global Advocacy Team (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-lg p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-sm text-gray-900">73 Teammates Across 15 Countries</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                  24/7 Follow-the-Sun
                </span>
              </div>

              {/* Team Map Pins / Avatars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Kevan L.', role: 'VP Marketing', loc: '🇺🇸 Boston, MA' },
                  { name: 'Julia M.', role: 'Customer Advocacy', loc: '🇬🇧 London, UK' },
                  { name: 'Dave C.', role: 'Product Lead', loc: '🇨🇦 Toronto, CA' },
                  { name: 'Sophie T.', role: 'Senior Engineer', loc: '🇫🇷 Paris, FR' },
                  { name: 'Marcus R.', role: 'Advocacy Specialist', loc: '🇦🇺 Sydney, AU' },
                  { name: 'Aria S.', role: 'Staff Platform Eng', loc: '🇸🇬 Singapore' },
                ].map((member, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 space-y-1">
                    <div className="font-bold text-xs text-gray-900 truncate">{member.name}</div>
                    <div className="text-[10px] text-gray-500 truncate">{member.role}</div>
                    <div className="text-[10px] font-mono text-gray-400 mt-1">{member.loc}</div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
                <span className="flex items-center gap-1.5 font-medium">
                  <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span>97.4% Customer Satisfaction (CSAT) rating</span>
                </span>
                <span className="font-mono text-[11px] font-bold">&lt; 1 hour avg response</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
