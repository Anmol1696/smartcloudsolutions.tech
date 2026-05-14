import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — infrastructure, agents, web3`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "kubernetes",
    "ai agents",
    "infrastructure",
    "web3",
    "developer tooling",
    "ai infrastructure",
    "starship",
    "cosmos sdk",
    "consulting",
  ],
  authors: [{ name: "Anmol Yadav" }, { name: "Rohit Aggarwal" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — infrastructure, agents, web3`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — infrastructure, agents, web3`,
    description: site.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfcff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-xs focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
