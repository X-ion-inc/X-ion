import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "X-ion: Social media management for everyone",
  description: "Use X-ion to manage your social media so that you can create and share your content everywhere, consistently. Try our forever free plan or upgrade for more.",
  openGraph: {
    title: "X-ion: Social media management for everyone",
    description: "Use X-ion to manage your social media so that you can create and share your content everywhere, consistently. Try our forever free plan or upgrade for more.",
    url: "https://x-ion.com",
    siteName: "X-ion: All-you-need social media toolkit for small businesses",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@xion",
    creator: "@xion",
    title: "X-ion: Social media management for everyone",
    description: "Use X-ion to manage your social media so that you can create and share your content everywhere, consistently. Try our forever free plan or upgrade for more.",
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
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
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
