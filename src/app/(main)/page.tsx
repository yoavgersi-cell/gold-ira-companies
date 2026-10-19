import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { RankedProviders } from "@/components/ranked-providers";
import type { ComparisonCardProduct } from "@/components/comparison-card";
import { EditorialContent } from "@/components/editorial-content";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProviderFactsTable } from "@/components/provider-facts-table";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import { getConfig } from "@/lib/config-store";
import { CONTENT_LAST_UPDATED } from "@/lib/config";

export const revalidate = 60;

const SITE_URL = "https://www.goldiraplanet.com";

export const metadata: Metadata = {
  title: {
    absolute: "Best Gold IRA Companies of 2026: Minimums, Fees & Reviews",
  },
  description:
    "Compare the best gold IRA companies of 2026 - minimum investments, setup and yearly fees, buyback terms, promotions and customer ratings, side by side.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Best Gold IRA Companies of 2026, Compared",
    description:
      "Compare top gold IRA companies by minimum investment, fees, buyback terms and ratings to find the one that fits your retirement.",
    url: SITE_URL,
    type: "website",
  },
};

export default async function HomePage() {
  const config = await getConfig();
  const { providerOrder, positions } = config.ranking;

  const displayList = providerOrder
    .map((id, index) => {
      const provider = config.providers.find((p) => p.id === id);
      if (!provider) return null;
      const position = positions[index] || positions[positions.length - 1];
      return {
        id: provider.id,
        name: provider.name,
        tagline: provider.tagline,
        logo: provider.logo,
        smallLogo: provider.smallLogo,
        highlights: provider.highlights,
        affiliateUrl: provider.affiliateUrl,
        ctaText: provider.ctaText,
        rank: index + 1,
        rating: position.score,
        ratingLabel: position.label,
        starRating: position.starRating,
        badge: position.badge,
        cardPill: provider.cardPill,
        offerTag: provider.offerTag,
        endorsement: provider.endorsement,
        minInvestment: provider.minInvestment,
      };
    })
    .filter(Boolean) as ComparisonCardProduct[];

  const sidebarProviders = providerOrder
    .map((id) => config.providers.find((p) => p.id === id))
    .filter(Boolean) as typeof config.providers;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const author = config.experts?.[0];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Gold IRA Companies of 2026, Compared",
    description:
      "Compare minimum investments, fees, buyback terms and ratings across the top gold IRA companies of 2026.",
    url: SITE_URL,
    inLanguage: "en-US",
    datePublished: "2026-06-01",
    dateModified: CONTENT_LAST_UPDATED,
    isPartOf: { "@type": "WebSite", name: "Gold IRA Planet", url: SITE_URL },
    about: { "@type": "Thing", name: "Gold IRA companies" },
    ...(author && {
      author: { "@type": "Organization", name: author.name, url: `${SITE_URL}/about` },
    }),
    ...pageReviewSchema("/"),
    publisher: {
      "@type": "Organization",
      name: "Gold IRA Planet",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: displayList.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/reviews/${product.id}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection
        backgroundImageUrl={config.hero.backgroundImageUrl}
        imageAlt={config.hero.imageAlt}
        updatedLabel={config.hero.updatedLabel}
        h1={config.hero.h1}
        h1Highlight={config.hero.h1Highlight}
        h2={config.hero.h2}
        description={config.hero.description}
      />

      {/* E-E-A-T byline strip - expert review status */}
      <section className="mx-auto max-w-[1100px] px-4 pt-3">
        <MedicalReviewBar path="/" className="max-w-[760px]" />
      </section>

      <section className="mx-auto max-w-[1100px] px-4 pt-4 pb-6">
        <RankedProviders products={displayList} />
      </section>

      <ProviderFactsTable providers={sidebarProviders} />
      <EditorialContent />
      <FaqAccordion items={config.faqs} />
    </>
  );
}
