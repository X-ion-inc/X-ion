# X-ion

X-ion is a modern social media marketing platform and landing page built with Next.js. The project presents a polished SaaS experience for content publishing, social engagement, analytics, collaboration, and AI-assisted workflow automation across major social channels.

## Overview

The application is a marketing and product site for X-ion, showcasing how the platform helps brands and creators:

- Manage publishing across multiple social channels
- Create and repurpose content with AI assistance
- Respond to audience comments from one inbox
- Track performance with cross-platform insights and reporting
- Collaborate with teams and operate from a centralized workspace
- Access social media resources and educational tools

## Product positioning

The app highlights X-ion as a full social media toolkit for creators, marketers, and teams, with sections covering:

- Publish
- Create
- Community
- Insights
- AI assistant
- Resources
- Open company metrics and customer trust signals

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons
- Motion library

## Project structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── icons/
│   ├── AiAssistantSection.tsx
│   ├── CTASection.tsx
│   ├── ChannelsSection.tsx
│   ├── CoreFeaturesSection.tsx
│   ├── CustomerSupportSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── MoreFeaturesSection.tsx
│   ├── Navbar.tsx
│   ├── OpenCompanySection.tsx
│   ├── ResourcesSection.tsx
│   └── SocialProofSection.tsx
├── lib/
│   ├── bufferData.ts
│   └── utils.ts
├── public/
│   ├── images/
│   └── logo/
├── types/
│   └── buffer.ts
├── .env.example
├── .eslintrc.json
├── eslint.config.mjs
├── LICENSE
├── metadata.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── wrangler.toml
├── package-lock.json
├── README.md
└── ...
```

## Key app experience

The landing page is composed of a series of branded sections:

- Hero section with email capture and platform tiles
- Social proof banner and brand showcase
- Core feature cards for publishing, creation, community, and analytics
- Additional features grid for collaboration and AI workflows
- Channel integration showcase
- AI assistant section
- Customer support section
- Resource hub cards
- Open company metrics and CTA footer

## Getting started

### Prerequisites

- Node.js 18+
- npm, pnpm, or bun

### Install dependencies

```bash
bun install
```

or

```bash
npm install
```

### Run the app locally

```bash
bun run dev
```

The app runs on:

- http://localhost:3000

## Available scripts

```bash
bun run dev      # Start the development server
bun run build    # Create a production build
bun run start    # Start the production server
bun run lint     # Run ESLint checks
```

## Environment variables

A sample environment file is included at `.env.example`:

```env
GEMINI_API_KEY=
NEXT_PUBLIC_APP_ENV=development
```

These are useful placeholders for app configuration and API-backed integrations. Copy the file to `.env.local` and fill in values as needed.

## Notes

- This repository is a front-end marketing app rather than a backend-heavy service.
- The app uses static content and branded UI patterns to communicate SaaS features.
- Some links direct to product pages or external domains like `x-ion.com` and app registration flows.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Summary

X-ion is a modern SaaS landing page and product showcase for a social media management platform, built with Next.js and designed to present a polished, high-conversion marketing experience for publishing, AI content creation, social engagement, and analytics.
