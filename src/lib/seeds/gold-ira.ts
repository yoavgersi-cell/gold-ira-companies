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
//  - No Trustpilot review TEXT is included: none could be verified verbatim.
// ─────────────────────────────────────────────────────────────────────────────

export const goldIraConfig: SiteConfig = {
  siteName: "Gold IRA Planet",
  disclosureText:
    "Gold IRA Planet is reader-supported. Some companies listed pay us when you request a kit or open an account through our links. This can affect which companies appear and where, but not the facts, fees or warnings we publish. Nothing here is financial advice.",

  hero: {
    backgroundImageUrl: "/gold-ira-planet-globe.webp",
    imageAlt: "Gold IRA Planet - gold bars in front of a navy and gold globe, illustrating gold IRA investing",
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
      logo: "/logos/americanhartfordlogo.webp",
      smallLogo: "/logos/americanhartfordlogo.webp",
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
      // Trustpilot profile snapshot supplied by the operator (Oct 19, 2026):
      // 4.9 from 1,947 reviews. Reviews below are copied verbatim (typos kept)
      // from the public profile; dates are the posting dates.
      trustpilotRating: "4.9",
      trustpilotReviewCount: "1,947",
      trustpilotReviews: [
        { title: "Busy but available", text: "The team is very busy but does take the time to answer questions and let you read thru things and ask questions.", name: "Angela", location: "US", rating: 5, date: "Oct 17, 2026" },
        { title: "Noth Jamie and Dion were professional", text: "Noth Jamie and Dion were professional, very informative, and extremely helpful.\n\nI plan on a long lasting relationship with American Hartford Gold.", name: "Chris Skwarko", location: "US", rating: 5, date: "Oct 16, 2026" },
        { title: "James Langridge", text: "James Langridge, Machi Block, and Katee Trinh were all great to work with. Machi answered all my questions in detail. It's nice knowing I can contact James & Machi any time and they get right back to me.", name: "Sherrie Knight", location: "US", rating: 5, date: "Oct 15, 2026" },
        { title: "Patience, explanations and details all in one.", text: "I am somewhat new to buying gold and I appreciate the time, service and patience I experienced here. I was a bit nervous about investing my hard earned money, but with your guidance and explanations I feel so much more confident about this.\nThanks so much", name: "Munir Kreidie", location: "US", rating: 5, date: "Oct 15, 2026" },
        { title: "American Hartford Gold", text: "The information provided through many conversations was perfect. Everything was very clear and concise as well as all my questions were answered.\nDaniel Castillo and Dani Harris were extremely professional and well versed with accomplished customer service. I appreciate both ensuring I was knowledgeable of each step, from the initial paperwork to the purchase of precious metals to the storage.\nI have no doubt I can reach out at any time with any questions and will receive the same immeasurable customer service.", name: "Paula Wilcox", location: "US", rating: 5, date: "Oct 15, 2026" },
        { title: "Great Experience with AHG's Katee Trinh", text: "All my experiences with American Hartford Gold so far in the 3 or 4 years that I have been a customer have been great. This one, with Katee Trinh was very easy and successful. Katee was very friendly, helpful, and a pleasure to work with.", name: "Faith", location: "US", rating: 5, date: "Oct 14, 2026" },
        { title: "i am very pleased with my gold & silver...", text: "i am very pleased with my gold & silver purchase recently. Steven Yodowitz, Michael DeLise, Katie Griffin, & Dani Harris were absolutely wonderful through the whole process. I highly recommend American Hartford Gold to anyone looking to aquire precious metals.", name: "Tracy", location: "US", rating: 5, date: "Oct 13, 2026" },
        { title: "Very polite and informative people.", text: "Very polite and informative people.\nJohn Bazzo and Lisa Firestone are wonderful", name: "Eric W", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Katee ensures a smooth transaction", text: "Katee made sure that I thoroughly understood the transaction process & that I was comfortable with the upcoming transaction.", name: "John Greene", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "Speed", text: "Speed, accuracy, recommendations, trust.", name: "Ron", location: "US", rating: 5, date: "Oct 8, 2026" },
        { title: "Staff was extremely helpful and fast with the entire process", text: "Rob Betchley was great to work with and very fast in responding to all questions. Alexandra Arias was also very quick to get my transactions approved and confirmed. They both were a pleasure to work with.", name: "Brian Becker", location: "US", rating: 5, date: "Oct 7, 2026" },
        { title: "American Hartford Gold staff...", text: "Lauran and his executive assistant Maribel are very informative and verify that I understand the process and information given regarding precious metals. Thank you AHG\nBev", name: "Bev", location: "US", rating: 5, date: "Oct 7, 2026" },
        { title: "Spoke with Representatives about making changes to account", text: "Spoke with Brian, Katee and Nick about making some changes to my account to build more value with the current markets. All three of them where professional, courteous, answered all my questions and excelled in their specialty.", name: "Ronald Adams", location: "US", rating: 5, date: "Oct 7, 2026" },
        { title: "Excellent Company to work with", text: "I just completed my second purchase with Hartford Gold. They have very quick response times, are professional but very friendly and explain everything I need to know each step of the way. Dani confirmed my purchase and made sure I understood everything that was going to happen. She was friendly and made me comfortable asking questions as needed.", name: "Sarah Ammons", location: "US", rating: 5, date: "Oct 6, 2026" },
        { title: "AM Hartford Gold", text: "Professional, knowledgeable and friendly people to help you in your in gold and silver investment. Jacob James and Robert Betchley thoroughly explained the various programs and investments that were offered.", name: "Nick", location: "US", rating: 5, date: "Oct 6, 2026" },
        { title: "The transaction was fairly painless", text: "Had a little trouble at my end, but once I got the ball rolling the transaction was fairly painless.", name: "Randy Cox", location: "US", rating: 5, date: "Oct 6, 2026" },
        { title: "The Representatives that helped me were...", text: "The Representatives that helped me were super nice! This was my third purchase in a couple of years.", name: "NP", location: "US", rating: 5, date: "Oct 6, 2026" },
        { title: "Mr Bruinsma is exception", text: "Mr Bruinsma is exception. Explains everything in easy to understand terms and puts one at ease. Dealing with him and AHG has been an easy and wonderful experience. He is an asset to the company", name: "Bruce Rutherford", location: "US", rating: 5, date: "Oct 6, 2026" },
        { title: "Outstanding Support for My Precious Metals IRA", text: "I recently opened a precious metals IRA with American Hartford Gold, and the experience was excellent from start to finish. Daniel and Katie were extremely professional throughout the entire process. They took the time to explain everything clearly and worked closely with me to select the best investment portfolio for my specific situation. If you're looking to start investing in precious metals but feel intimidated or don't know where to begin, I would highly recommend working with them!", name: "Hank Zhou", location: "US", rating: 5, date: "Oct 5, 2026" },
      ],
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
      logo: "/logos/goldcologo.webp",
      smallLogo: "/logos/goldcologo.webp",
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
      logo: "/logos/augustalogo.png",
      smallLogo: "/logos/augustalogo.png",
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
      logo: "/logos/americangoldgrouplogo.jpeg",
      smallLogo: "/logos/americangoldgrouplogo.jpeg",
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
