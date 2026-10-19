import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MetaPixel } from "@/components/meta-pixel";
import { GoogleAnalytics } from "@/components/google-analytics";
import { hreflangLanguages } from "@/lib/regions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.goldiraplanet.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gold IRA Planet - Compare the Best Gold IRA Companies",
    template: "%s | Gold IRA Planet",
  },
  description:
    "Compare the best gold IRA companies of 2026 - minimums, setup and yearly fees, storage, buyback terms, ratings and regulator history side by side.",
  keywords: [
    "gold IRA",
    "best gold IRA companies",
    "gold IRA comparison",
    "gold IRA reviews",
    "gold IRA fees",
    "401k to gold IRA rollover",
    "precious metals IRA",
    "Goldco vs Augusta",
  ],
  openGraph: {
    title: "Gold IRA Planet - Compare the Best Gold IRA Companies",
    description:
      "Independent, side-by-side comparisons of gold IRA companies - minimums, real fees, storage and buyback terms.",
    type: "website",
    siteName: "Gold IRA Planet",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold IRA Planet - Compare the Best Gold IRA Companies",
    description:
      "Independent, side-by-side comparisons of gold IRA companies.",
  },
  other: {
    "geo.region": "US",
    "geo.position": "37.0902;-95.7129",
    "ICBM": "37.0902, -95.7129",
    "content-language": "en-US",
  },
  alternates: {
    canonical: SITE_URL,
    languages: hreflangLanguages(SITE_URL, "/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gold IRA Planet",
              url: SITE_URL,
              logo: `${SITE_URL}/logo-mark.png`,
              areaServed: { "@type": "Country", name: "United States" },
              knowsAbout: ["Gold IRAs", "Precious metals IRAs", "401(k) rollovers", "IRA rules for precious metals"],
              description:
                "Independent guides and company comparisons for gold IRAs - in-depth reviews, fee research, and side-by-side comparisons.",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gold IRA Planet",
              url: SITE_URL,
              description:
                "Compare gold IRA companies side by side.",
            }),
          }}
        />
        <MetaPixel />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
