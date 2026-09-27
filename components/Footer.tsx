'use client';

import React, { useState } from 'react';
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
              <li><a href="https://x-ion.com/api" className="hover:text-[#2c4bff] transition-colors">X-ion API</a></li>
              <li><a href="https://x-ion.com/collaborate" className="hover:text-[#2c4bff] transition-colors">Collaborate</a></li>
              <li><a href="https://x-ion.com/community" className="hover:text-[#2c4bff] transition-colors">Community</a></li>
              <li><a href="https://x-ion.com/create" className="hover:text-[#2c4bff] transition-colors">Create</a></li>
              <li><a href="https://x-ion.com/insights" className="hover:text-[#2c4bff] transition-colors">Insights</a></li>
              <li><a href="https://x-ion.com/publish" className="hover:text-[#2c4bff] transition-colors">Publish</a></li>
            </ul>
          </div>

          {/* Col 2: Tools */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Tools</h4>
            <ul className="space-y-2">
              <li><a href="https://x-ion.com/ai-assistant" className="hover:text-[#2c4bff] transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Android App</a></li>
              <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Browser Extension</a></li>
              <li><a href="#channels" className="hover:text-[#2c4bff] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#2c4bff] transition-colors">iOS App</a></li>
              <li><a href="https://x-ion.com/mcp" className="hover:text-[#2c4bff] transition-colors">Social Media MCP</a></li>
              <li><a href="https://x-ion.com/start-page" className="hover:text-[#2c4bff] transition-colors">Start Page</a></li>
              <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Template Library</a></li>
            </ul>
          </div>

          {/* Col 3: Channels */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Channels</h4>
            <ul className="space-y-2">
              <li><a href="https://x-ion.com/bluesky" className="hover:text-[#2c4bff] transition-colors">Bluesky</a></li>
              <li><a href="https://x-ion.com/facebook" className="hover:text-[#2c4bff] transition-colors">Facebook</a></li>
              <li><a href="https://x-ion.com/google-business-profile" className="hover:text-[#2c4bff] transition-colors">Google Business</a></li>
              <li><a href="https://x-ion.com/instagram" className="hover:text-[#2c4bff] transition-colors">Instagram</a></li>
              <li><a href="https://x-ion.com/linkedin" className="hover:text-[#2c4bff] transition-colors">LinkedIn</a></li>
              <li><a href="https://x-ion.com/mastodon" className="hover:text-[#2c4bff] transition-colors">Mastodon</a></li>
              <li><a href="https://x-ion.com/pinterest" className="hover:text-[#2c4bff] transition-colors">Pinterest</a></li>
              <li>
                <a href="https://x-ion.com/substack" className="hover:text-[#2c4bff] transition-colors inline-flex items-center gap-1.5">
                  <span>Substack</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">New</span>
                </a>
              </li>
              <li><a href="https://x-ion.com/threads" className="hover:text-[#2c4bff] transition-colors">Threads</a></li>
              <li><a href="https://x-ion.com/tiktok" className="hover:text-[#2c4bff] transition-colors">TikTok</a></li>
              <li><a href="https://x-ion.com/x" className="hover:text-[#2c4bff] transition-colors">X</a></li>
              <li><a href="https://x-ion.com/youtube" className="hover:text-[#2c4bff] transition-colors">YouTube</a></li>
            </ul>
          </div>

          {/* Col 4: Made for */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Made for</h4>
            <ul className="space-y-2">
              <li><a href="#made-for" className="hover:text-[#2c4bff] transition-colors">Agencies</a></li>
              <li><a href="#made-for" className="hover:text-[#2c4bff] transition-colors">Creators</a></li>
              <li><a href="#made-for" className="hover:text-[#2c4bff] transition-colors">Developers</a></li>
              <li><a href="#made-for" className="hover:text-[#2c4bff] transition-colors">Higher Education</a></li>
              <li><a href="#made-for" className="hover:text-[#2c4bff] transition-colors">Nonprofits</a></li>
              <li><a href="#made-for" className="hover:text-[#2c4bff] transition-colors">Small Business</a></li>
              <li><a href="#made-for" className="hover:text-[#2c4bff] transition-colors">Startups</a></li>
            </ul>
          </div>

          {/* Col 5: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://x-ion.com/resources/" className="hover:text-[#2c4bff] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Our Community</a></li>
              <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Resource Library</a></li>
              <li><a href="https://x-ion.com/social-media-terms" className="hover:text-[#2c4bff] transition-colors">Social Media Terms Glossary</a></li>
            </ul>
          </div>

          {/* Col 6: Support, Transparency, Company */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Support</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Developer Docs</a></li>
                <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Status</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Transparency</h4>
              <ul className="space-y-1.5">
                <li><a href="#about" className="hover:text-[#2c4bff] transition-colors">Open Hub</a></li>
                <li><a href="#about" className="hover:text-[#2c4bff] transition-colors">Transparent Metrics</a></li>
                <li><a href="#about" className="hover:text-[#2c4bff] transition-colors">Transparent Salaries</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 uppercase tracking-wider text-[11px]">Company</h4>
              <ul className="space-y-1.5">
                <li><a href="#about" className="hover:text-[#2c4bff] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#2c4bff] transition-colors">Press</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Collapsible Accordion: Free tools & social media data */}
        <div className="border border-gray-200 bg-white rounded-2xl p-5 shadow-xs">
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className="w-full flex items-center justify-between text-left group"
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
                  <li><a href="#" className="hover:text-[#2c4bff]">AI Hashtag Generator</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">AI Social Media Post Generator</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Blog to Social Media Post Generator</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Facebook Image Resizer</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Free Link in Bio</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Instagram Bio Generator</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Instagram Hashtag Generator</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Social Media Image Resizer</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Social Media Scheduler</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">TikTok Username Generator</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">UTM Generator</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff] font-semibold text-[#2c4bff]">All Free Tools →</a></li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-gray-900 uppercase font-mono text-[11px]">Social Media Insights</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li><a href="#" className="hover:text-[#2c4bff]">Facebook Benchmarks</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Instagram Benchmarks</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Best Time to Post on Instagram</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Best Time to Post on LinkedIn</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Best Time to Post on TikTok</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Best Time to Post on Facebook</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Best Time to Post on Threads</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Best Time to Post on X</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff] font-semibold text-[#2c4bff]">All Social Media Benchmarks →</a></li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-gray-900 uppercase font-mono text-[11px]">Compare X-ion</h4>
                <ul className="space-y-1.5 text-gray-600">
                  <li><a href="#" className="hover:text-[#2c4bff]">Agorapulse vs X-ion</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">eClincher vs X-ion</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Hootsuite vs X-ion</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Later vs X-ion</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Loomly vs X-ion</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Meta Business Suite vs X-ion</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Metricool vs X-ion</a></li>
                  <li><a href="#" className="hover:text-[#2c4bff]">Sprout Social vs X-ion</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Trailing Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-900 hover:opacity-80">
              <BufferLogo width={100} height={28} />
            </a>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors font-medium text-xs"
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
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
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
            <span>|</span>
            <a href="https://x-ion.com/legal#privacy-policy" className="hover:underline">Privacy</a>
            <span>|</span>
            <a href="https://x-ion.com/legal#terms" className="hover:underline">Terms</a>
            <span>|</span>
            <a href="https://x-ion.com/legal#security" className="hover:underline">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
