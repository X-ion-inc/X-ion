'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { CoreFeaturesSection } from '@/components/CoreFeaturesSection';
import { MoreFeaturesSection } from '@/components/MoreFeaturesSection';
import { ChannelsSection } from '@/components/ChannelsSection';
import { AiAssistantSection } from '@/components/AiAssistantSection';
import { CustomerSupportSection } from '@/components/CustomerSupportSection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { OpenCompanySection } from '@/components/OpenCompanySection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';

export default function Home() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'signup' | 'login'; email?: string }>({
    isOpen: false,
    type: 'signup',
  });

  const handleOpenAuth = (type: 'signup' | 'login', email?: string) => {
    setAuthModal({
      isOpen: true,
      type,
      email,
    });
  };

  const handleCloseAuth = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleStartWithEmail = (email: string) => {
    handleOpenAuth('signup', email);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Global Navigation Bar */}
      <Navbar onOpenAuth={(type) => handleOpenAuth(type)} />

      {/* Main Page Flow */}
      <main className="flex-1 overflow-x-clip">
        {/* 1. Hero Section */}
        <HeroSection onStartWithEmail={handleStartWithEmail} />

        {/* 2. Social Proof 273,098 creators & Marquee */}
        <SocialProofSection />

        {/* 3. Core Features: Publish, Create, Community, Insights */}
        <CoreFeaturesSection />

        {/* 4. More Features: Collaborate, Mobile App, Start Page, AI Assistant */}
        <MoreFeaturesSection />

        {/* 5. Connect Your Favorite Accounts Channels */}
        <ChannelsSection />

        {/* 6. AI Assistant / MCP / Agents */}
        <AiAssistantSection />

        {/* 7. Customer Support Worldwide */}
        <CustomerSupportSection />

        {/* 8. Resources: Free Tools, Glossary, Marketing 101, Best Time */}
        <ResourcesSection />

        {/* 9. Open Company Transparency & Metrics */}
        <OpenCompanySection />

        {/* 10. Bottom CTA */}
        <CTASection onOpenAuth={(type) => handleOpenAuth(type)} />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />

      {/* Interactive Account Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        initialEmail={authModal.email}
        onClose={handleCloseAuth}
      />
    </div>
  );
}
