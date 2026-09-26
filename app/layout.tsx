import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X-ION Campaign Intelligence",
  description: "Campaign Intelligence Infrastructure: data pipelines, analytics engines, and real-time execution tools for data-driven campaign strategy.",
  openGraph: {
    title: "X-ION Campaign Intelligence",
    description: "Campaign Intelligence Infrastructure: data pipelines, analytics engines, and real-time execution tools for data-driven campaign strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2338bdf8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/></svg>" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
