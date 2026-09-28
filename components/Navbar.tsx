'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BufferLogo } from './icons/BufferLogo';
import { CHANNELS, INTEGRATION_TOOLS } from '@/lib/bufferData';
import { getChannelIcon } from './icons/ChannelLogos';
import { getToolIcon } from './icons/IntegrationLogos';
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  ArrowRight,
  PenTool,
  Send,
  BarChart2,
  MessageSquare,
  Users,
  Layout,
  Sparkles,
  Code
} from 'lucide-react';

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 text-gray-900 transition-all">
      <nav ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Leading: Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center text-gray-950 hover:opacity-90 transition-opacity">
            <BufferLogo width={120} height={32} />
          </Link>

          {/* Middle: Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Features Menu */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('features')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === 'features' ? 'text-[#2c4bff] bg-blue-50/60' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                <span>Features</span>
                {openDropdown === 'features' ? (
                  <ChevronUp className="w-4 h-4 text-[#2c4bff]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {openDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-2 w-[540px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95 duration-150">
                  <Link 
                    href="/features/publish" 
                    onClick={() => setOpenDropdown(null)} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-pink-50 text-pink-600 group-hover:scale-105 transition-transform">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-[#2c4bff] transition-colors">Publish</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Plan and schedule your content across social media platforms</div>
                    </div>
                  </Link>

                  <Link 
                    href="/features/create" 
                    onClick={() => setOpenDropdown(null)} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-105 transition-transform">
                      <PenTool className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-[#2c4bff] transition-colors">Create</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Build your own library of content ideas &amp; visual drafts</div>
                    </div>
                  </Link>

                  <Link 
                    href="/features/insights" 
                    onClick={() => setOpenDropdown(null)} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 flex items-center gap-1.5 group-hover:text-[#2c4bff] transition-colors">
                        <span>Insights</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">New</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Understand your performance and best times to post</div>
                    </div>
                  </Link>

                  <Link 
                    href="/features/community" 
                    onClick={() => setOpenDropdown(null)} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-[#2c4bff] transition-colors">Community</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Easily engage with your audience in a unified inbox</div>
                    </div>
                  </Link>

                  <Link 
                    href="/features/start-page" 
                    onClick={() => setOpenDropdown(null)} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:scale-105 transition-transform">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-[#2c4bff] transition-colors">Start Page</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Build a custom, high-converting link-in-bio page</div>
                    </div>
                  </Link>

                  <Link 
                    href="/features/create#ai" 
                    onClick={() => setOpenDropdown(null)} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 group-hover:scale-105 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-[#2c4bff] transition-colors">AI Assistant</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Get help drafting, refining, and repurposing content</div>
                    </div>
                  </Link>

                  <Link 
                    href="/integrations" 
                    onClick={() => setOpenDropdown(null)} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group col-span-2 border-t border-gray-100 pt-2"
                  >
                    <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:scale-105 transition-transform">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-[#2c4bff] transition-colors">Explore All Integrations &amp; Channels</div>
                        <div className="text-xs text-gray-500">Connect Instagram, TikTok, LinkedIn, Canva, and 20+ other apps</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2c4bff] transition-colors" />
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Integrations Menu */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('integrations')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === 'integrations' ? 'text-[#2c4bff] bg-blue-50/60' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                <span>Integrations</span>
                {openDropdown === 'integrations' ? (
                  <ChevronUp className="w-4 h-4 text-[#2c4bff]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {openDropdown === 'integrations' && (
                <div className="absolute top-full -left-20 mt-2 w-[620px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex gap-6 animate-in fade-in zoom-in-95 duration-150">
                  {/* Channels Col */}
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Channels</h3>
                    <div className="grid grid-cols-2 gap-1.5">
                      {CHANNELS.slice(0, 10).map((ch) => (
                        <Link
                          key={ch.id}
                          href={`/integrations?category=social#${ch.id}`}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 text-gray-800 text-xs font-medium transition-colors"
                        >
                          <span className="shrink-0">{getChannelIcon(ch.id, 'w-4 h-4', 16)}</span>
                          <span className="truncate">{ch.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="w-px bg-gray-100 my-1" />

                  {/* Tools Col */}
                  <div className="w-56 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Tools</h3>
                      <div className="space-y-1">
                        {INTEGRATION_TOOLS.slice(0, 6).map((tool) => (
                          <Link
                            key={tool.id}
                            href={`/integrations?category=tools#${tool.id}`}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 text-gray-800 text-xs font-medium transition-colors"
                          >
                            <span className="shrink-0">{getToolIcon(tool.id, 'w-4 h-4', 16)}</span>
                            <span>{tool.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href="/integrations" 
                      onClick={() => setOpenDropdown(null)}
                      className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#2c4bff] hover:underline"
                    >
                      <span>See all integrations directory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Menu */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === 'resources' ? 'text-[#2c4bff] bg-blue-50/60' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                <span>Resources</span>
                {openDropdown === 'resources' ? (
                  <ChevronUp className="w-4 h-4 text-[#2c4bff]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                  <Link
                    href="/resources"
                    onClick={() => setOpenDropdown(null)}
                    className="block p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-sm text-gray-900 hover:text-[#2c4bff]">Free Tools Hub</div>
                    <div className="text-xs text-gray-500 mt-0.5">Bio generator, character counter &amp; hashtag tools</div>
                  </Link>

                  <Link
                    href="/blog"
                    onClick={() => setOpenDropdown(null)}
                    className="block p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-sm text-gray-900 hover:text-[#2c4bff]">Blog &amp; Case Studies</div>
                    <div className="text-xs text-gray-500 mt-0.5">Real creator stories, tactics, and social playbooks</div>
                  </Link>

                  <Link
                    href="/resources#glossary"
                    onClick={() => setOpenDropdown(null)}
                    className="block p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-sm text-gray-900 hover:text-[#2c4bff]">Social Media Glossary</div>
                    <div className="text-xs text-gray-500 mt-0.5">Understand every term and acronym in marketing</div>
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setOpenDropdown(null)}
                    className="block p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-sm text-gray-900 hover:text-[#2c4bff]">Our Transparency Dashboard</div>
                    <div className="text-xs text-gray-500 mt-0.5">Open revenue, salaries, and remote work culture</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing link */}
            <Link
              href="/pricing"
              className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Pricing
            </Link>

            {/* About link */}
            <Link
              href="/about"
              className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </Link>

            {/* Blog link */}
            <Link
              href="/blog"
              className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Trailing CTAs: Exact Brand Style with Light Green Pill Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://app.scrutium.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-semibold text-gray-950 bg-[#bbf7d0] hover:bg-[#86efac] rounded-full shadow-xs transition-all inline-block text-center cursor-pointer"
          >
            Get started for free
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-950 rounded-xl hover:bg-gray-100 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <a
            href="https://app.scrutium.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-950 rounded-xl"
          >
            Log in
          </a>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="space-y-1">
            <Link href="/features/publish" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Publish</Link>
            <Link href="/features/create" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Create</Link>
            <Link href="/features/insights" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Insights</Link>
            <Link href="/features/community" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Community</Link>
            <Link href="/features/start-page" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Start Page</Link>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Pricing</Link>
            <Link href="/integrations" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Integrations</Link>
            <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Resources &amp; Free Tools</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Blog</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">About &amp; Transparency</Link>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="https://app.scrutium.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-bold text-gray-950 bg-[#bbf7d0] hover:bg-[#86efac] rounded-full block"
            >
              Get started for free
            </a>
            <a
              href="https://app.scrutium.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-semibold text-gray-800 bg-gray-100 rounded-xl block"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
