'use client';

import React, { useState, useRef, useEffect } from 'react';
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

interface NavbarProps {
  onOpenAuth: (type: 'signup' | 'login') => void;
}

export function Navbar({ onOpenAuth }: NavbarProps) {
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
          <a href="#" className="flex items-center text-gray-950 hover:opacity-90 transition-opacity">
            <BufferLogo width={120} height={32} />
          </a>

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
                  <a href="#publish" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-pink-50 text-pink-600 group-hover:scale-105 transition-transform">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Publish</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Plan and schedule your content across social media platforms</div>
                    </div>
                  </a>

                  <a href="#create" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-105 transition-transform">
                      <PenTool className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Create</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Build your own library of content ideas</div>
                    </div>
                  </a>

                  <a href="#insights" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 flex items-center gap-1.5">
                        <span>Insights</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">New</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Understand your performance and what to post next</div>
                    </div>
                  </a>

                  <a href="#community" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Community</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Easily engage with your community in a flash</div>
                    </div>
                  </a>

                  <a href="#collaborate" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-rose-50 text-rose-600 group-hover:scale-105 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Collaborate</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Work together seamlessly, from planning to publishing</div>
                    </div>
                  </a>

                  <a href="#start-page" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:scale-105 transition-transform">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Start Page</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Build a custom link-in-bio page in minutes</div>
                    </div>
                  </a>

                  <a href="#ai-assistant" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 group-hover:scale-105 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">AI Assistant</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Get help creating, refining, and repurposing content</div>
                    </div>
                  </a>

                  <a href="#api" onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:scale-105 transition-transform">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">API &amp; MCP</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-snug">Connect X-ion to your agents or custom apps</div>
                    </div>
                  </a>
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
                      {CHANNELS.map((ch) => (
                        <a
                          key={ch.id}
                          href="#channels"
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 text-gray-800 text-xs font-medium transition-colors"
                        >
                          <span className="shrink-0">{getChannelIcon(ch.id, 'w-4 h-4', 16)}</span>
                          <span className="truncate">{ch.name}</span>
                        </a>
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
                          <a
                            key={tool.id}
                            href="#tools"
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 text-gray-800 text-xs font-medium transition-colors"
                          >
                            <span className="shrink-0">{getToolIcon(tool.id, 'w-4 h-4', 16)}</span>
                            <span>{tool.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <a 
                      href="#channels" 
                      onClick={() => setOpenDropdown(null)}
                      className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#2c4bff] hover:underline"
                    >
                      <span>See all integrations</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Made for Menu */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('madeFor')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === 'madeFor' ? 'text-[#2c4bff] bg-blue-50/60' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                <span>Made for</span>
                {openDropdown === 'madeFor' ? (
                  <ChevronUp className="w-4 h-4 text-[#2c4bff]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {openDropdown === 'madeFor' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                  {[
                    { title: 'Creators', desc: 'Grow your community with confidence, not complexity' },
                    { title: 'Small Business', desc: 'A simpler way to manage your small business’ social media' },
                    { title: 'Agencies', desc: 'Run every client’s social with clarity' },
                    { title: 'Nonprofits', desc: 'Made for small teams doing big things' },
                    { title: 'Higher Education', desc: 'Social media management built for schools and universities' },
                    { title: 'Developers', desc: 'Add a social layer for whatever you’re building' },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#made-for"
                      onClick={() => setOpenDropdown(null)}
                      className="block p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                    </a>
                  ))}
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
                  {[
                    { title: 'Blog', desc: 'Real-life stories and resources on growing an engaged audience' },
                    { title: 'Templates', desc: 'Plug-and-play content templates to jump-start your planning' },
                    { title: 'Free Tools', desc: 'Easy-to-use tools to grow your presence across social media' },
                    { title: 'Our Community', desc: 'Learn, connect, and grow with creators around the world' },
                    { title: 'Support', desc: 'Help articles and tutorials to get the most out of X-ion' },
                    { title: 'Case Studies', desc: 'How power users get more from X-ion.' },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#resources"
                      onClick={() => setOpenDropdown(null)}
                      className="block p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing link */}
            <a
              href="#pricing"
              className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Pricing
            </a>
          </div>
        </div>

        {/* Trailing CTAs: Exact Buffer Header Style with Light Green Pill Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenAuth('signup')}
            className="px-5 py-2.5 text-sm font-semibold text-gray-950 bg-[#bbf7d0] hover:bg-[#86efac] rounded-full shadow-xs transition-all"
          >
            Get started for free
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-950 rounded-xl hover:bg-gray-100 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            onClick={() => onOpenAuth('login')}
            className="hidden lg:block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-950 rounded-xl"
          >
            Log in
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="space-y-1">
            <a href="#publish" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Publish</a>
            <a href="#create" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Create</a>
            <a href="#insights" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Insights</a>
            <a href="#community" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Community</a>
            <a href="#channels" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Channels &amp; Integrations</a>
            <a href="#resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">Resources</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-900">About Transparency</a>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-gray-800 bg-gray-100 rounded-xl"
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
