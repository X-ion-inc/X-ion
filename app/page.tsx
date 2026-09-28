'use client';

import React from 'react';
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

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Social Proof 398,679 creators & Marquee */}
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
      <CTASection />
    </>
  );
}
