import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://x-ion.com"),
  title: "X-ion: Social media management for everyone",
  description: "Use X-ion to manage your social media so that you can create and share your content everywhere, consistently. Try our forever free plan or upgrade for more.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo/logo.png', sizes: '1254x1254', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo/logo.png',
  },
  openGraph: {
    title: "X-ion: Social media management for everyone",
    description: "Use X-ion to manage your social media so that you can create and share your content everywhere, consistently. Try our forever free plan or upgrade for more.",
    url: "https://x-ion.com",
    siteName: "X-ion: All-you-need social media toolkit for small businesses",
    type: "website",
    images: [
      {
        url: '/logo/logo.png',
        width: 1254,
        height: 1254,
        alt: 'X-ion Logo',
      }
    ],
  },
  twitter: {
    card: "summary",
    site: "@xion",
    creator: "@xion",
    title: "X-ion: Social media management for everyone",
    description: "Use X-ion to manage your social media so that you can create and share your content everywhere, consistently. Try our forever free plan or upgrade for more.",
    images: ['/logo/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
      </head>
      <body className="min-h-screen bg-[#fafafa] text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
