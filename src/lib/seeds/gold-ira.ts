import type { SiteConfig } from "@/lib/config";
import { AUTHOR, UPDATED } from "./gold-ira/shared";
import { battles } from "./gold-ira/battles";
import { reviews } from "./gold-ira/reviews";
import { articles } from "./gold-ira/articles";
import { faqs } from "./gold-ira/faqs";

// ─────────────────────────────────────────────────────────────────────────────
// Gold IRA vertical content - goldiraplanet.com
//
// Launch content for the single-vertical Gold IRA comparison site, built on
// the same template as thetopwebhosting.com. Four companies, in operator
// order: American Hartford Gold, Goldco, Augusta Precious Metals and American
// Gold and Silver Group. The operator can reorder them and edit scores in
// /admin (saved to Vercel Blob, see config-store).
//
// Editorial rules: no invented figures, no invented customer quotes, fees
// always written as approximate, and every limit or caveat stated the same
// way for partners and non-partners. Never call a company "IRS-approved" (the
// IRS approves metals and custodians' trust status, not dealers) and never
// promise returns.
//
// Facts researched 2026-10-19 from search-surfaced third-party reviews (Yahoo
// Finance, CNBC Select, ConsumerAffairs, Finder, Fortune, Bankrate, Benzinga)
// - company sites could not be fetched from the build environment, and the
// sources often disagree. Fact strings live in ./gold-ira/shared.ts.
//
// PLACEHOLDERS / OPERATOR TO VERIFY BEFORE LAUNCH:
//  - affiliateUrl values point to each company's homepage. Replace them with
//    your tracking links (admin > Providers).
//  - Every fee, minimum and rating is a third-party snapshot. Confirm on the
//    company's own site, BBB.org and Trustpilot.
//  - Logos in /public/logos are text wordmarks. Swap in the official logos.
//  - No Trustpilot review TEXT is included: none could be verified verbatim.
// ─────────────────────────────────────────────────────────────────────────────

export const goldIraConfig: SiteConfig = {
  siteName: "Gold IRA Planet",
  disclosureText:
    "Gold IRA Planet is reader-supported. Some companies listed pay us when you request a kit or open an account through our links. This can affect which companies appear and where, but not the facts, fees or warnings we publish. Nothing here is financial advice.",

  hero: {
    backgroundImageUrl: "/gold-ira-companies-comparison.svg",
    imageAlt: "Best gold IRA companies compared - illustration of gold bars and coins stored in a secure IRA depository vault",
    updatedLabel: "Last updated: Oct 2026",
    h1: "Our Best Gold IRA Companies of 2026",
    h1Highlight: "Gold IRA",
    h2: "Secure your future by investing in a gold IRA",
    description:
      "Discover the best way to invest in gold IRAs and secure your future. Compare top rated gold IRA companies to find the one that fits your needs.",
  },

  sidebar: {
    socialProofNumber: "",
    socialProofText: "",
    secureTitle: "Independent & Unbiased",
    secureText:
      "We publish the same facts for every company - minimums, fees, buyback terms and complaint history - and we never sell your information.",
    featuredImageUrl: "",
    featuredImageAlt: "",
    featuredImageLink: "#",
    blockOrder: ["secureBadge", "editorialReviews", "rankingMethodology", "disclosure"],
  },

  ranking: {
    providerOrder: ["american-hartford-gold", "goldco", "augusta-precious-metals", "american-gold-and-silver-group"],
    positions: [
      { score: 9.8, starRating: 5, label: "Our score", badge: "Our Top Choice" },
      { score: 9.3, starRating: 4.5, label: "Our score" },
      { score: 9.0, starRating: 4.5, label: "Our score" },
      { score: 8.6, starRating: 4.5, label: "Our score" },
    ],
  },

  // Card bullets mirror each company's own advertised offer (operator brief,
  // Oct 2026). They are the companies' claims, not our findings - the card
  // footnote says so, and offers change: re-check them with each partner.
  providers: [
    {
      id: "american-hartford-gold",
      websiteUrl: "https://www.americanhartfordgold.com/",
      foundingYear: "2015",
      name: "American Hartford Gold",
      tagline: "Easy 3-step tax-free, penalty-free gold IRA setup",
      logo: "/logos/american-hartford-gold.svg",
      smallLogo: "/logos/american-hartford-gold.svg",
      highlights: [
        "100% satisfaction guarantee, 7-day full refund",
        "Lowest price guarantee & no buy-back fees",
        "Up to $25k in free silver on qualifying orders",
        "Same-day IRA, the fastest in the industry",
      ],
      cardPill: "Safe & Secure",
      offerTag: "FREE silver offer",
      endorsement: "Endorsed by Bill O'Reilly",
      affiliateUrl: "https://www.americanhartfordgold.com/",
      ctaText: "Visit Site",
      // Third-party snapshot (2025-26): ~4.7-4.8 across 1,300+ reviews.
      trustpilotRating: "4.8",
      trustpilotReviewCount: "1,300+",
      minInvestment: 10000,
      setupFee: 230,
      annualFee: 225,
      pricesPublished: false,
    },
    {
      id: "goldco",
      websiteUrl: "https://goldco.com/",
      foundingYear: "2006",
      name: "Goldco",
      tagline: "Highly-rated specialists have placed over $3.5 billion in gold and silver",
      logo: "/logos/goldco.svg",
      smallLogo: "/logos/goldco.svg",
      highlights: [
        "Limited time: Get up to 10% in bonus silver",
        "Over 8,000 5-star customer reviews",
        "Highest industry buy back guarantee",
      ],
      offerTag: "Bonus silver offer",
      affiliateUrl: "https://goldco.com/",
      ctaText: "Visit Site",
      // Third-party snapshot (Mar 2025, Finder): 4.8 across ~1,585 reviews.
      trustpilotRating: "4.8",
      trustpilotReviewCount: "1,500+",
      minInvestment: 25000,
      setupFee: 50,
      annualFee: 225,
      pricesPublished: false,
    },
    {
      id: "augusta-precious-metals",
      websiteUrl: "https://www.augustapreciousmetals.com/",
      foundingYear: "2012",
      name: "Augusta Precious Metals",
      tagline: "Ideal for investors with retirement savings of $100K+",
      logo: "/logos/augusta-precious-metals.svg",
      smallLogo: "/logos/augusta-precious-metals.svg",
      highlights: [
        "Personalized service from start to finish",
        "Rated \u201cMost Transparent Pricing\u201d by Investopedia",
        "A+ BBB rating & 5,000+ 5-star reviews",
      ],
      affiliateUrl: "https://www.augustapreciousmetals.com/",
      ctaText: "Visit Site",
      // Third-party snapshot (2025-26): ~4.8-4.9. Refresh from the live profile.
      trustpilotRating: "4.9",
      minInvestment: 50000,
      setupFee: 50,
      annualFee: 225,
      pricesPublished: false,
    },
    {
      id: "american-gold-and-silver-group",
      name: "American Gold and Silver Group",
      tagline: "Effortless tax & penalty-free gold IRA setup",
      logo: "/logos/american-gold-and-silver-group.svg",
      smallLogo: "/logos/american-gold-and-silver-group.svg",
      highlights: [
        "100% satisfaction guarantee & 7 day full refund",
        "Up to $15,000 in free silver",
        "Lowest price guarantee & no buy-back fees",
      ],
      offerTag: "FREE silver offer",
      // Placeholder: no reliable homepage, founding year, minimum or fee
      // figures were found for this company. Fill in from the partner brief.
      affiliateUrl: "#",
      ctaText: "Visit Site",
      pricesPublished: false,
    },
  ],

  reviews,
  articles,
  faqs,
  battles,

  quiz: {
    welcomeTitle: "Find the Right Gold IRA Company for You",
    welcomeSubtitle:
      "Answer a few quick questions and we'll match you with gold IRA companies that accept your amount and account type.",
    welcomeTrustPoints: ["Takes less than 1 minute", "Matches you on minimums and fees", "Completely free"],
    welcomeCta: "Find My Match",
    midFlowMessage: "Thanks - we're narrowing down the companies that fit.",
    pageTitle: "Find Your Gold IRA Match",
    pageSubtitle:
      "Answer a few quick questions to compare gold IRA companies on minimum investment, fees and the type of account you're rolling over.",
    resultsTitle: "Your Best Match",
    resultsSubtitle: "Based on your answers, this company is the strongest fit.",
    resultsOthersTitle: "Other Companies You May Want to Consider",
    trustStrip: ["Updated Monthly", "Editorially Reviewed", "Independent Comparison"],
    loadingMessages: [
      "Checking company minimums...",
      "Comparing setup and yearly fees...",
      "Finding your best match...",
      "Preparing your recommendation...",
    ],
    questions: [],
    providerProfiles: [],
  },

  experts: [
    {
      id: "editorial",
      name: AUTHOR,
      role: "Editorial & Research",
      bio: "Our editorial team researches gold IRA companies, reads their published fees, minimums and policies, checks regulator actions and complaint records, and writes plain-English guides for retirement savers. We are not financial advisers, and nothing we publish is investment advice.",
      specialties: ["Gold IRA company comparison", "Fee and markup analysis", "401(k) and IRA rollovers", "Precious metals fraud awareness"],
    },
  ],

  landingPages: [],
  sidebars: [],
};

export { UPDATED };
