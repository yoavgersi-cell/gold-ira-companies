export interface TrustpilotReview {
  title: string;
  text: string;
  name: string;
  location: string;
  rating: number;
  date?: string; // e.g. "Aug 3, 2026" - shown on the review card when present
}

// Reusable expert-team member for the site's credibility (E-E-A-T) layer.
// Populate with REAL team members; only attach medical credentials to people
// who actually hold them.
export interface Expert {
  id: string;
  name: string;
  role: string;          // e.g. "Lead Health Researcher"
  credentials?: string;  // e.g. "PharmD", "MPH" - real credentials only
  bio: string;
  avatar?: string;       // image URL; falls back to initials when empty
  specialties?: string[];
}

// CMS-editable promo-popup control for a provider. When `enabled`, the
// provider's creative shows (mobile) on its comparison and review pages. This
// overrides the code-side default in @/lib/promo-popups; leaving it undefined
// falls back to that default (so Embody/TrimRx keep working with no CMS entry).
// The live countdown timer, when a creative has one, stays code-defined.
export interface ProviderPromoPopup {
  enabled: boolean;
  image?: string;
  alt?: string;
  priority?: number;
}

export interface Provider {
  id: string;
  name: string;
  /** The provider's own homepage (not the affiliate link) - used for schema entity linking. */
  websiteUrl?: string;
  /** Year founded, for schema foundingDate. */
  foundingYear?: string;
  tagline: string;
  logo: string;
  smallLogo: string;
  sidebarImage?: string;
  highlights: string[];
  affiliateUrl: string;
  ctaText: string;
  excludedStates?: string[];
  trustpilotRating?: string;
  trustpilotReviewCount?: string;
  trustpilotReviews?: TrustpilotReview[];
  promoPopup?: ProviderPromoPopup;
  // Gold IRA comparison fields (all optional, CMS-editable). Drive the
  // homepage "how much are you investing?" filter and the true-cost column.
  /** Minimum IRA investment in USD. 0 = no minimum; undefined = not published. */
  minInvestment?: number;
  /** Approximate one-time account setup fee in USD. */
  setupFee?: number;
  /** Approximate yearly custodian + storage fees in USD (flat). */
  annualFee?: number;
  /** Whether the company publishes metal prices online. */
  pricesPublished?: boolean;
  /** Small dark pill above the bullets on the ranking card (e.g. "Safe & Secure"). */
  cardPill?: string;
  /** Offer chip at the foot of the ranking card (e.g. "FREE silver offer"). */
  offerTag?: string;
  /** Endorsement line under the CTA (e.g. "Endorsed by Bill O'Reilly"). */
  endorsement?: string;
}

export interface RankingPosition {
  score: number;
  starRating: number;
  label: string;
  badge?: string;
}

export interface RankingPageConfig {
  providerOrder: string[];
  positions: RankingPosition[];
}

// A single priced plan on a review page. `regularPrice` (optional) renders
// struck-through next to `price` to show an active discount.
export interface ReviewPricingPlan {
  name: string;
  medication: string;
  price: string;
  regularPrice?: string;
  unit?: string;
  cadence?: string;
  highlights?: string[];
}

// A step in the "How <provider> works" timeline on a review page.
export interface ReviewHowItWorksStep {
  timing?: string;
  title: string;
  detail?: string;
}

export interface ReviewData {
  slug: string;
  providerId: string;
  shortSummary: string;
  reviewIntro: string;
  keyFeatures: string[];
  pricingSummary: string;
  treatmentOptions: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  finalVerdict: string;
  updatedAt?: string;
  // Optional richer content, rendered only when present (back-compatible).
  pricingPlans?: ReviewPricingPlan[];
  howItWorks?: ReviewHowItWorksStep[];
  trustBadges?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroConfig {
  backgroundImageUrl: string;
  imageAlt: string;
  updatedLabel: string;
  h1: string;
  /** Substring of h1 drawn with a highlight background (e.g. "Gold IRA"). */
  h1Highlight?: string;
  h2: string;
  description: string;
}

export interface SidebarConfig {
  socialProofNumber: string;
  socialProofText: string;
  secureTitle: string;
  secureText: string;
  featuredImageUrl: string;
  featuredImageAlt: string;
  featuredImageLink: string;
  blockOrder?: string[];
}

export interface QuizOption {
  label: string;
  value: string;
}

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  type: "cards" | "dropdown";
  options: QuizOption[];
}

export interface QuizProviderProfile {
  providerId: string;
  priceLevel: "low" | "mid" | "high";
  strengths: string[];
  matchReasons: Record<string, string>;
}

export interface QuizConfig {
  panelType?: "classic" | "chat";
  chatIntroMessage?: string;
  providerOrder?: string[];
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeTrustPoints: string[];
  welcomeCta: string;
  midFlowMessage: string;
  pageTitle: string;
  pageSubtitle: string;
  questions: QuizQuestion[];
  providerProfiles: QuizProviderProfile[];
  resultsTitle: string;
  resultsSubtitle: string;
  resultsOthersTitle: string;
  trustStrip: string[];
  loadingMessages: string[];
  resultOverrides?: Record<string, string[]>;
  testimonials?: { text: string; name: string; state: string }[];
  loadingScreen?: {
    headline: string;
    supportingTexts: string[];
    providerLogos: string[];
    durationMs: number;
  };
}

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  heroColor: string;
  // Optional 16:9 hero/card image (e.g. "/article-images/how-glp1-work.webp").
  // When absent, cards and the article masthead fall back to the heroColor
  // gradient - so adding images is purely additive and never breaks a card.
  image?: string;
  // Alt text for that image - required for SEO (Google Images + context) and
  // accessibility. Falls back to the article title when omitted, but a
  // descriptive, keyword-relevant alt is strongly preferred.
  imageAlt?: string;
  author?: string;
  // 3-4 scannable takeaway bullets rendered in a box above the body -
  // verified facts only, written per-article (never auto-generated).
  keyTakeaways?: string[];
  sections: ArticleSection[];
  sidebarId?: string;
}

export interface BattleCategory {
  name: string;
  winner: "provider1" | "provider2" | "tie";
  explanation: string;
  supportingPoints: string[];
  // Legacy fields kept for backwards compat
  provider1Score?: number;
  provider2Score?: number;
  description?: string;
}

export interface BattleFeatureRow {
  feature: string;
  provider1Value: string;
  provider2Value: string;
  highlight?: "provider1" | "provider2" | "both" | "none";
}

export interface BattleData {
  slug: string;
  provider1Id: string;
  provider2Id: string;
  title: string;
  // Optional display order for the "X vs Y" label (breadcrumb, FAQ heading,
  // schema). Lets the visible matchup lead with a high-demand brand without
  // reordering provider1/provider2 (which drives the winner logic). Falls back
  // to `${p1.name} vs ${p2.name}` when unset.
  matchupLabel?: string;
  subtitle: string;
  description: string;
  intro: string;
  verdict: string;
  verdictWinnerPoints: string[];
  verdictLoserPoints: string[];
  winnerId: string;
  categories: BattleCategory[];
  features: BattleFeatureRow[];
  updatedAt?: string;
}

export interface SidebarBlock {
  type: "providers" | "quizCta" | "relatedArticles";
  enabled: boolean;
}

export interface SidebarQuizCta {
  headline: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

export interface SidebarConfigData {
  id: string;
  name: string;
  area: "homepage" | "articles" | "reviews" | "comparisons" | "custom";
  active: boolean;
  blocks: SidebarBlock[];
  providerIds: string[];
  quizCta: SidebarQuizCta;
  articleSlugs: string[];
}

export interface LandingEditorialSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface LandingPageData {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  h2: string;
  heroDescription: string;
  providerOrder: string[];
  editorialSections?: LandingEditorialSection[];
  updatedAt?: string;
}

// Stable fallback "last updated" date for schema when an item has no CMS
// updatedAt. Avoids emitting today's date on every request (fake freshness).
export const CONTENT_LAST_UPDATED = "2026-10-12";

// Floor date for battle, review and article pages: the shared page templates
// were last reworked on this date (quick answer, fit finder, accordions,
// Trustpilot/Reddit carousels, schema enrichment), so no page built from them
// can honestly claim an older "last updated". A per-item updatedAt still wins
// when it is newer. Bumped 2026-08-28: sources & methodology blocks, prose
// readability pass, licensed-badge rollout and the index-everything policy all
// landed site-wide since the previous floor.
export const TEMPLATES_LAST_UPDATED = "2026-10-12";

// ISO dates compare lexicographically - returns the newer of an item's own
// updatedAt and the template-wide floor above.
export const latestUpdate = (updatedAt?: string) =>
  updatedAt && updatedAt > TEMPLATES_LAST_UPDATED ? updatedAt : TEMPLATES_LAST_UPDATED;

// Human-readable month when the operator last verified provider-published
// pricing, plans and policies against each provider's own site. Shown in the
// "Sources & methodology" block ("Checked August 2026"). Bump this only when
// the data behind the comparisons is actually re-verified - it is a claim, not
// a render timestamp.
export const PROVIDER_DATA_CHECKED = "October 2026";

// ── Verticals ────────────────────────────────────────────────────────────────
// The hub (treatmentshub.com) is split into fully-separated verticals. Each one
// is an independent bundle: its own providers, reviews, comparisons, articles,
// ranking, and affiliate links, edited on its own tab in the CMS and stored in
// its own blob. Adding a vertical later is a single entry here - nothing else
// in the routing or CMS is hard-coded to a specific vertical.
//
// `id` doubles as the URL segment (treatmentshub.com/<id>/…) and the storage
// suffix. "weight-loss" is the default and stays on the original blob key for
// full back-compatibility with the existing (live) site.
export interface Vertical {
  id: string;
  name: string;
  tagline: string;
  accent: string;
}

// Single-vertical build: this standalone site is gold IRA only. The array shape is
// kept (the platform types expect it) but holds just the one vertical, served
// at the domain root.
export const VERTICALS: Vertical[] = [
  { id: "gold-ira", name: "Gold IRA", tagline: "Compare the best gold IRA companies", accent: "#B8862B" },
];

export const DEFAULT_VERTICAL = "gold-ira";
export const VERTICAL_IDS = VERTICALS.map((v) => v.id);
export const isVertical = (id: string): boolean => VERTICAL_IDS.includes(id);

// Verticals that are publicly launched: advertised as "live" on the hub, listed
// in the sitemap, and indexable. A vertical can have a full content skeleton
// (providers, comparisons, etc.) while still being unpublished - it renders for
// preview but stays out of the hub card, the sitemap, and the index until its
// affiliate data is filled in and it's added here. Add a vertical id to launch it.
export const PUBLISHED_VERTICALS = ["gold-ira"];
export const isPublishedVertical = (id: string): boolean => PUBLISHED_VERTICALS.includes(id);

// Retired verticals: off-theme categories we've pulled from the hub (Sep 2026:
// hearing-aids - OTC devices, off-topic from the GLP-1 / hormone / telehealth-
// medicine cluster, diluting topical focus). They stay in VERTICAL_IDS so their
// URLs keep resolving (served noindex, no 404s / no lost link equity), but they
// are hidden everywhere a user or crawler would discover them: the hub grid, the
// footer/nav, the sitemap and llms.txt. Being absent from PUBLISHED_VERTICALS
// already makes their pages noindex and drops them from the sitemap; this list
// additionally suppresses the "coming soon" placeholder so they vanish entirely.
export const HIDDEN_VERTICALS: string[] = [];
export const isHiddenVertical = (id: string): boolean => HIDDEN_VERTICALS.includes(id);

// Providers we have an affiliate relationship with. Used to gate the product
// carousel/catalog and affiliate-only landing pages. NOTE: since Aug 2026 this
// list no longer gates indexing - all provider reviews are indexable
// (operator policy: impressions everywhere first, optimize what earns clicks).
export const AFFILIATE_PROVIDER_IDS: string[] = [];

// Operator policy (Aug 2026): index everything that can honestly be indexed -
// impressions across all verticals first, optimize the pages that earn clicks.
// Only two kinds of pages stay in this list:
//   1. Pages whose numbers we never verified (the honesty rule beats the
//      index-everything rule) - flip them the day the data is verified.
//   2. Slugs that 301 away, kept here only so a blob-saved copy never
//      re-enters the sitemap.
// Article slugs kept out of the index. Empty on this single-vertical gold IRA build -
// add a slug here to noindex a specific article.
export const NOINDEX_ARTICLE_SLUGS: string[] = [];

// Thin weight-loss pages deliberately kept out of the index so crawl budget on
// the young hub domain concentrates on the money pages (Sep 2026 pruning pass).
// These render normally but carry robots noindex,follow and are dropped from the
// sitemap - reversible by removing a slug here. "follow" is kept so any link
// equity still flows through to the ranked providers.
//
// Reviews: providers that aren't affiliate partners and carry ~0 impressions
// (obscure/filler brands, plus real-but-unmonetized brands with negligible
// demand: calibrate, found, sequence).
export const NOINDEX_WL_REVIEW_SLUGS = new Set<string>([]);

// Battles: low-demand two-way matchups tied to a filler/unmonetized brand, plus
// every three-way (X-vs-Y-vs-Z queries have almost no search volume and are pure
// crawl-budget bloat on a young domain).
export const NOINDEX_WL_BATTLE_SLUGS = new Set<string>([]);

export interface SiteConfig {
  providers: Provider[];
  faqs: FaqItem[];
  reviews: ReviewData[];
  articles: ArticleData[];
  battles: BattleData[];
  landingPages: LandingPageData[];
  sidebars: SidebarConfigData[];
  quiz: QuizConfig;
  hero: HeroConfig;
  sidebar: SidebarConfig;
  ranking: RankingPageConfig;
  siteName: string;
  disclosureText: string;
  cardSocialProof?: {
    number: string;
    text: string;
  };
  reviewTestimonials?: { text: string; name: string; state: string }[];
  battleWinnerBannerImageDesktop?: string;
  battleWinnerBannerImageMobile?: string;
  experts?: Expert[];
}
