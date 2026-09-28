'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BufferLogo } from './icons/BufferLogo';
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { 
  InstagramIcon, 
  FacebookIcon, 
  BlueskyIcon, 
  XTwitterIcon, 
  LinkedInIcon, 
  ThreadsIcon 
} from './icons/ChannelLogos';

export function Footer() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Español', 'Français', 'Deutsch', 'Italiano', 'Nederlands', 'Português'];

  return (
    <footer className="bg-[#fafafa] border-t border-gray-200 text-gray-700 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Links Columns (6 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-xs">
          
          {/* Col 1: Features */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Features</h4>
            <ul className="space-y-2">
              <li><Link href="/features/publish" className="hover:text-[#2c4bff] transition-colors">Publish</Link></li>
              <li><Link href="/features/create" className="hover:text-[#2c4bff] transition-colors">Create</Link></li>
              <li><Link href="/features/insights" className="hover:text-[#2c4bff] transition-colors">Insights</Link></li>
              <li><Link href="/features/community" className="hover:text-[#2c4bff] transition-colors">Community</Link></li>
              <li><Link href="/features/start-page" className="hover:text-[#2c4bff] transition-colors">Start Page</Link></li>
              <li><Link href="/integrations" className="hover:text-[#2c4bff] transition-colors">X-ion API &amp; MCP</Link></li>
            </ul>
          </div>

          {/* Col 2: Tools */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/features/create#ai" className="hover:text-[#2c4bff] transition-colors">AI Assistant</Link></li>
              <li><Link href="/resources" className="hover:text-[#2c4bff] transition-colors">Free Marketing Tools</Link></li>
              <li><Link href="/resources#counter" className="hover:text-[#2c4bff] transition-colors">Character Counter</Link></li>
              <li><Link href="/integrations" className="hover:text-[#2c4bff] transition-colors">Integrations Hub</Link></li>
              <li><Link href="/features/start-page" className="hover:text-[#2c4bff] transition-colors">Link in Bio Tool</Link></li>
              <li><Link href="/resources#templates" className="hover:text-[#2c4bff] transition-colors">Template Library</Link></li>
            </ul>
          </div>

          {/* Col 3: Channels */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Channels</h4>
            <ul className="space-y-2">
              <li><Link href="/integrations?category=social#bluesky" className="hover:text-[#2c4bff] transition-colors">Bluesky</Link></li>
              <li><Link href="/integrations?category=social#facebook" className="hover:text-[#2c4bff] transition-colors">Facebook</Link></li>
              <li><Link href="/integrations?category=social#instagram" className="hover:text-[#2c4bff] transition-colors">Instagram</Link></li>
              <li><Link href="/integrations?category=social#linkedin" className="hover:text-[#2c4bff] transition-colors">LinkedIn</Link></li>
              <li><Link href="/integrations?category=social#mastodon" className="hover:text-[#2c4bff] transition-colors">Mastodon</Link></li>
              <li><Link href="/integrations?category=social#pinterest" className="hover:text-[#2c4bff] transition-colors">Pinterest</Link></li>
              <li><Link href="/integrations?category=social#tiktok" className="hover:text-[#2c4bff] transition-colors">TikTok</Link></li>
              <li><Link href="/integrations?category=social#x" className="hover:text-[#2c4bff] transition-colors">X (Twitter)</Link></li>
              <li><Link href="/integrations?category=social#youtube" className="hover:text-[#2c4bff] transition-colors">YouTube Shorts</Link></li>
            </ul>
          </div>

          {/* Col 4: Made for */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Made for</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:text-[#2c4bff] transition-colors">Agencies</Link></li>
              <li><Link href="/pricing" className="hover:text-[#2c4bff] transition-colors">Creators</Link></li>
              <li><Link href="/integrations#api" className="hover:text-[#2c4bff] transition-colors">Developers</Link></li>
              <li><Link href="/about" className="hover:text-[#2c4bff] transition-colors">Nonprofits</Link></li>
              <li><Link href="/pricing" className="hover:text-[#2c4bff] transition-colors">Small Business</Link></li>
              <li><Link href="/about" className="hover:text-[#2c4bff] transition-colors">Startups</Link></li>
            </ul>
          </div>

          {/* Col 5: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-[#2c4bff] transition-colors">Blog &amp; Stories</Link></li>
              <li><Link href="/resources" className="hover:text-[#2c4bff] transition-colors">Free Tools Hub</Link></li>
              <li><Link href="/resources#glossary" className="hover:text-[#2c4bff] transition-colors">Social Media Glossary</Link></li>
              <li><Link href="/pricing" className="hover:text-[#2c4bff] transition-colors">Plans &amp; Pricing</Link></li>
            </ul>
          </div>

          {/* Col 6: Support, Transparency, Company */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Support</h4>
              <ul className="space-y-1.5">
                <li><Link href="/about#support" className="hover:text-[#2c4bff] transition-colors">Help Center</Link></li>
                <li><a href="mailto:support@scrutium.com" className="hover:text-[#2c4bff] transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Transparency</h4>
              <ul className="space-y-1.5">
                <li><Link href="/about" className="hover:text-[#2c4bff] transition-colors">Open Startup Hub</Link></li>
                <li><Link href="/about#metrics" className="hover:text-[#2c4bff] transition-colors">Live Public Metrics</Link></li>
                <li><Link href="/about#salaries" className="hover:text-[#2c4bff] transition-colors">Open Salaries</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Company</h4>
              <ul className="space-y-1.5">
                <li><Link href="/about" className="hover:text-[#2c4bff] transition-colors">About Us</Link></li>
                <li><Link href="/pricing" className="hover:text-[#2c4bff] transition-colors">Pricing</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Collapsible Accordion: Free tools & social media data */}
        <div className="border border-gray-200 bg-white rounded-2xl p-5 shadow-xs">
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className="w-full flex items-center justify-between text-left group cursor-pointer"
          >
            <div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#2c4bff] transition-colors">
                Free tools and social media data
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Benchmarks, best times to post, and tools you can use right now.
              </p>
            </div>
            <div className="p-1 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
              {isAccordionOpen ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
            </div>
          </button>

          {isAccordionOpen && (
            <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs animate-in fade-in duration-200">
              <div className="space-y-2.5">
                <h4 className="font-bold text-gray-900 uppercase font-mono text-[11px]">Free Tools</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li><Link href="/resources" className="hover:text-[#2c4bff]">Social Bio Generator</Link></li>
                  <li><Link href="/resources#counter" className="hover:text-[#2c4bff]">Live Character Counter</Link></li>
                  <li><Link href="/features/start-page" className="hover:text-[#2c4bff]">Free Link in Bio</Link></li>
                  <li><Link href="/resources" className="hover:text-[#2c4bff] font-semibold text-[#2c4bff]">All Free Tools Hub →</Link></li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-gray-900 uppercase font-mono text-[11px]">Social Media Insights</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li><Link href="/features/insights" className="hover:text-[#2c4bff]">Best Time to Post Analytics</Link></li>
                  <li><Link href="/features/insights" className="hover:text-[#2c4bff]">Instagram Benchmarks</Link></li>
                  <li><Link href="/features/insights" className="hover:text-[#2c4bff]">TikTok &amp; LinkedIn Trends</Link></li>
                  <li><Link href="/features/insights" className="hover:text-[#2c4bff] font-semibold text-[#2c4bff]">Insights Dashboard →</Link></li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-gray-900 uppercase font-mono text-[11px]">Platform Directory</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li><Link href="/integrations" className="hover:text-[#2c4bff]">12+ Social Channels</Link></li>
                  <li><Link href="/integrations" className="hover:text-[#2c4bff]">Canva &amp; Media Tools</Link></li>
                  <li><Link href="/integrations#api" className="hover:text-[#2c4bff]">REST API &amp; MCP Integration</Link></li>
                  <li><Link href="/integrations" className="hover:text-[#2c4bff] font-semibold text-[#2c4bff]">All Integrations →</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Trailing Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-950 hover:opacity-80">
              <BufferLogo width={100} height={28} />
            </Link>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors font-medium text-xs cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-gray-500" />
                <span>{selectedLanguage}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {isLanguageOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 space-y-0.5 z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        selectedLanguage === lang ? 'bg-blue-50 text-[#2c4bff] font-bold' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <FacebookIcon size={20} />
            </a>
            <a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <BlueskyIcon size={20} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <XTwitterIcon size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <LinkedInIcon size={20} />
            </a>
            <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              <ThreadsIcon size={20} />
            </a>
          </div>

          {/* Policies & Copyright */}
          <div className="flex items-center gap-3 text-xs">
            <span>Copyright © 2026 X-ion Inc.</span>
            <span>·</span>
            <Link href="/about" className="hover:underline">Transparency</Link>
            <span>·</span>
            <Link href="/pricing" className="hover:underline">Pricing</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
