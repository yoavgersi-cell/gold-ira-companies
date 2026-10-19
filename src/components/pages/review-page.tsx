import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Users, Clock, Shield, Star, ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { latestUpdate } from "@/lib/config";
import {
  type SiteContext,
  canonicalUrl,
  hubLink,
} from "@/lib/site-context";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProviderCta } from "@/components/provider-cta";
import { TrustpilotCarousel } from "@/components/trustpilot-carousel";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import { LastUpdated } from "@/components/last-updated";
import { PromoPopup } from "@/components/promo-popup";
import { resolvePromoPopup } from "@/lib/promo-popups";
import { TrustDisclosure } from "@/components/medical-sources";
import { SourcesMethodology } from "@/components/sources-methodology";
import { notFound } from "next/navigation";
import { REDDIT_COMMUNITY_FEEDBACK as REVIEW_COMMUNITY_FEEDBACK, RedditMark } from "@/components/reddit-community";
import { YoutubeReviewSection } from "@/components/youtube-review";
import { ReadableProse } from "@/components/prose";
import { ProviderAudit } from "@/components/provider-audit";
import { providerEntity } from "@/lib/schema";

// Per-provider SEO overrides, "is X legit?" trust blocks and extra FAQs for
// the gold IRA company reviews. Everything here is written from facts in
// RESEARCH.md (third-party snapshots, Oct 2026) - keep it in step with
// src/lib/seeds/gold-ira/shared.ts when a company's fees or terms change.
// Leave a company out rather than guess: the page falls back to the review's
// own seed content.

const REVIEW_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {};

const REVIEW_LEGIT: Record<string, { verdict: string; signals: string[] }> = {
  "american-hartford-gold": {
    verdict:
      "American Hartford Gold is a real, operating precious metals dealer - a family-owned company based in Los Angeles and in business since about 2015. It reports a BBB A+ rating. It does not post its fees online, and one review site has flagged complaints about its advertising practices, so get fees and coin markups in writing before you buy.",
    signals: ["In business since about 2015 (reported)", "BBB A+ rating (reported)", "Advertises a buyback commitment with no liquidation fee"],
  },
  goldco: {
    verdict:
      "Goldco is a real, operating precious metals dealer that has sold gold and silver IRAs since about 2006. Third-party reviews report strong customer ratings, but fee quotes vary by source and one reviewer could not get fees without a sales call - ask for every fee and the markup on your metals in writing.",
    signals: ["In business since about 2006 (reported)", "Works with approved depositories such as Delaware Depository and Brink's", "Publishes a buyback program"],
  },
  "augusta-precious-metals": {
    verdict:
      "Augusta Precious Metals is a real, operating precious metals dealer founded around 2012. It reports BBB A+ and BCA AAA ratings and is known for its education-first approach. Its minimum is high (about $50,000), and it does not offer a written buyback guarantee, though it reportedly buys back in practice.",
    signals: ["Founded around 2012 (reported)", "BBB A+ and BCA AAA ratings (reported)", "Education sessions before you invest"],
  },
};

const REVIEW_EXTRA_FAQS: Record<string, { question: string; answer: string }[]> = {};

export async function reviewMetadata(slug: string, ctx: SiteContext): Promise<Metadata> {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return { title: "Review Not Found" };

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return { title: "Review Not Found" };

  const override = REVIEW_SEO_OVERRIDES[slug];
  const pageTitle =
    override?.title ?? `${provider.name} Review 2026: Fees, Minimums & Is It Legit?`;
  const pageDescription = override?.description ?? review.shortSummary;

  // Company reviews are indexable by default.
  const url = canonicalUrl(ctx, `/reviews/${slug}`);

  return {
    // Long review titles render without the " | Gold IRA Planet" suffix (SERP
    // cut-off ~60 characters); short ones keep it.
    title: pageTitle.length > 48 ? { absolute: pageTitle } : pageTitle,
    description: pageDescription,
    robots: ctx.noindex ? { index: false, follow: false } : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      type: "article",
    },
  };
}

export async function ReviewPageView({ slug, ctx }: { slug: string; ctx: SiteContext }) {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return notFound();

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return notFound();

  const legit = REVIEW_LEGIT[slug];

  // Site's own editorial rating for this provider (same scoring shown on the
  // homepage), keyed off its ranking position. Surfaced visibly on the page.
  // NOTE: intentionally NOT emitted as review/aggregateRating structured data -
  // re-publishing Trustpilot's aggregate and self-assigned editorial scores as
  // Product rating markup to earn SERP stars is a review-snippet policy risk
  // (and earned ~0 clicks per Search Appearance). The ratings remain visible as
  // page content; only the star-generating schema is removed.
  const rankIndex = config.ranking.providerOrder.indexOf(provider.id);
  const editorial =
    rankIndex >= 0
      ? config.ranking.positions[rankIndex] ??
        config.ranking.positions[config.ranking.positions.length - 1]
      : null;
  const editorialStars = editorial ? editorial.score / 2 : 0;
  const editorialFullStars = Math.floor(editorialStars);
  const editorialHasHalf = editorialStars % 1 >= 0.5;

  // Promo popup for this provider, if it has a registered creative.
  const promoPopup = resolvePromoPopup([provider]);

  // Note: we intentionally do NOT emit an AggregateOffer/price in the schema.
  // A structured price can surface in the SERP rich result and goes stale the
  // moment a provider changes pricing, so on-page pricing tables stay the single
  // source of truth and the search snippet carries no price.

  // Review/AggregateRating Product schema deliberately removed - see the note
  // on the editorial rating above. The visible on-page Trustpilot score and
  // editorial rating stay; we just don't request star rich snippets.

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl(ctx, `/reviews/${slug}`),
    url: canonicalUrl(ctx, `/reviews/${slug}`),
    name: `${provider.name} Review`,
    description: review.shortSummary,
    dateModified: latestUpdate(review.updatedAt),
    isPartOf: { "@type": "WebSite", name: "Gold IRA Planet", url: ctx.origin },
    about: providerEntity(provider),
    author: { "@type": "Organization", name: ctx.brandTeam, url: ctx.origin },
    ...pageReviewSchema(`/reviews/${slug}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl(ctx, "/") },
      { "@type": "ListItem", position: 2, name: "Reviews", item: canonicalUrl(ctx, "/reviews") },
      { "@type": "ListItem", position: 3, name: `${provider.name} Review`, item: canonicalUrl(ctx, `/reviews/${slug}`) },
    ],
  };

  // FAQ - real, query-shaped questions answered entirely from this review's
  // own researched content (fees, products, best-for, verdict). Powers
  // both the visible FAQ section and the FAQPage schema (rich results / PAA).
  const reviewFaqs = [
    { question: `Is ${provider.name} legit?`, answer: legit?.verdict ?? review.reviewIntro },
    { question: `What are ${provider.name}'s fees?`, answer: review.pricingSummary },
    review.treatmentOptions?.length
      ? { question: `What does ${provider.name} offer?`, answer: `${provider.name} offers ${review.treatmentOptions.join(", ")}.` }
      : null,
    review.bestFor?.length
      ? { question: `Who is ${provider.name} best for?`, answer: `${provider.name} is best for ${review.bestFor.join("; ")}.` }
      : null,
    { question: `Is ${provider.name} worth it?`, answer: review.finalVerdict },
    // Extra FAQs are keyed by provider slug.
    ...(REVIEW_EXTRA_FAQS[slug] ?? []),
  ].filter((f): f is { question: string; answer: string } => !!f && !!f.answer);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: reviewFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const relatedBattles = (config.battles ?? []).filter(
    (b) => b.provider1Id === provider.id || b.provider2Id === provider.id
  );

  // This provider's own question cluster (is-X-legit / X-cost / X-alternatives)
  // - the highest-intent internal links a review can carry. Rendered only for
  // cluster articles that actually exist in the config.
  const clusterSlugs = [
    { slug: `is-${provider.id}-legit`, label: `Is ${provider.name} legit?` },
    { slug: `${provider.id}-fees`, label: `${provider.name} fees explained` },
    { slug: `${provider.id}-cost`, label: `How much does ${provider.name} cost?` },
    { slug: `${provider.id}-alternatives`, label: `Best ${provider.name} alternatives` },
  ].filter((c) => (config.articles ?? []).some((a) => a.slug === c.slug));

  // Related articles: actually related, not just the first three in the array.
  // Prefer articles that mention this provider (excluding its own cluster,
  // which has a dedicated box below), then fill with the newest guides.
  const clusterSet = new Set(clusterSlugs.map((c) => c.slug));
  const mentions = (a: { slug: string; title: string }) =>
    a.slug.includes(provider.id) || a.title.toLowerCase().includes(provider.name.toLowerCase());
  const nonCluster = (config.articles ?? []).filter((a) => !clusterSet.has(a.slug));
  const relatedArticles = [
    ...nonCluster.filter(mentions),
    ...nonCluster
      .filter((a) => !mentions(a))
      .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")),
  ].slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: hubLink(ctx, "/") },
              { label: "Reviews", href: hubLink(ctx, "/reviews") },
              { label: `${provider.name} Review` },
            ]}
          />

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-[50px] w-[130px] shrink-0 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logo} alt={`${provider.name} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h1 className="text-[24px] font-bold text-[#191919] sm:text-[28px]">
                  {provider.name} Reviews
                </h1>
                <p className="mt-0.5 text-[14px] text-gray-700">
                  {provider.tagline}
                </p>
                <LastUpdated date={latestUpdate(review.updatedAt)} className="mt-1" />
                {editorial && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < editorialFullStars
                              ? "fill-[#FDB515] text-[#FDB515]"
                              : i === editorialFullStars && editorialHasHalf
                                ? "fill-[#FDB515]/50 text-[#FDB515]"
                                : "fill-gray-300 text-gray-500"
                          )}
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <span className="text-[14px] font-bold text-[#191919]">
                      {editorial.score}/10
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {editorial.label} - our rating
                    </span>
                  </div>
                )}
                {/* Desktop: byline inside the title column. Mobile renders it
                    full-width below the header row instead (see sm:hidden). */}
                <div className="hidden sm:block">
                  <MedicalReviewBar path={`/reviews/${slug}`} className="mt-3 max-w-[760px]" compact />
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <MedicalReviewBar path={`/reviews/${slug}`} schema={false} />
            </div>
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#E6D3A3] px-6 text-[14px] font-bold text-[#0F2540] transition-colors hover:bg-[#D9BE7C] sm:shrink-0"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
          <TrustDisclosure disclaimerHref={hubLink(ctx, "/disclaimer")} />
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">
        {/* Quick summary strip */}
        <div className="mb-8 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 sm:gap-6">
          {review.trustBadges && review.trustBadges.length > 0 ? (
            review.trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-[13px] text-gray-600">
                <Check className="h-4 w-4 text-emerald-500" strokeWidth={2} />
                {badge}
              </div>
            ))
          ) : (
            <>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Shield className="h-4 w-4 text-[#1E3A5F]" strokeWidth={1.5} />
                Same fact sheet as every company
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Clock className="h-4 w-4 text-[#1E3A5F]" strokeWidth={1.5} />
                Fees shown as approximate
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Users className="h-4 w-4 text-[#1E3A5F]" strokeWidth={1.5} />
                Not financial advice
              </div>
            </>
          )}
        </div>

        {/* The Bottom Line - the verdict up top, so the answer to "is it worth
            it" doesn't hide at the bottom of the page. */}
        {review.finalVerdict && (
          <div className="mb-8 rounded-2xl border border-[#B8862B]/20 bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.07em] text-[#1E3A5F]">The bottom line</p>
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.8] text-gray-800" />
          </div>
        )}

        {/* Intro */}
        <div className="mb-8">
          <ReadableProse text={review.reviewIntro} paragraphClassName="text-[16px] leading-[1.8] text-gray-600" />
        </div>

        {/* Is [brand] legit? - trust block for the "is X legit" query cluster */}
        {legit && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-emerald-50/50 px-6 py-4">
              <Shield className="h-5 w-5 text-emerald-600" strokeWidth={2} />
              <h2 className="text-[18px] font-bold text-[#191919]">
                Is {provider.name} legit?
              </h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-[15px] leading-[1.75] text-gray-600">
                {legit.verdict}
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {legit.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {signal}
                  </li>
                ))}
                {provider.trustpilotRating && provider.trustpilotReviewCount && (
                  <li className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    Rated {provider.trustpilotRating}/5 across {provider.trustpilotReviewCount} Trustpilot reviews
                  </li>
                )}
              </ul>
              <p className="mt-4 text-[12px] leading-relaxed text-gray-500">
                &ldquo;Legitimate&rdquo; here means a real, operating precious metals dealer - not a
                recommendation or a guarantee of value. Metal prices can fall. Always confirm
                current fees, minimums and the markup on your metals in writing.
              </p>
            </div>
          </div>
        )}

        {/* Key Features + Pricing side by side on desktop */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <Section title="Key Features">
            <ul className="space-y-2.5">
              {review.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Products & Services">
            <ul className="space-y-2.5">
              {review.treatmentOptions.map((option) => (
                <li key={option} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8862B]" />
                  {option}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Fees & minimums - pricingPlans are fee lines (plan.medication is the
            description line under each fee name). */}
        <Section title="Fees & Minimums">
          {review.pricingPlans && review.pricingPlans.length > 0 && (
            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              {review.pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-xl border border-gray-200 bg-gray-50/60 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[15px] font-bold text-[#191919]">{plan.name}</h4>
                    {plan.cadence && (
                      <span className="rounded-full bg-[#B8862B]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#1E3A5F]">
                        {plan.cadence}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[13px] text-gray-500">{plan.medication}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-[28px] font-extrabold leading-none text-[#191919]">{plan.price}</span>
                    {plan.unit && <span className="text-[14px] font-semibold text-gray-500">{plan.unit}</span>}
                    {plan.regularPrice && (
                      <span className="text-[15px] font-medium text-gray-500 line-through">{plan.regularPrice}</span>
                    )}
                  </div>
                  {plan.regularPrice && (
                    <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                      Promotional rate
                    </span>
                  )}
                  {plan.highlights && plan.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {plan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          <ReadableProse text={review.pricingSummary} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
        </Section>

        {/* The Gold IRA Planet audit - verified-facts card. Registry-gated:
            providers whose data isn't fully verified render nothing. */}
        <ProviderAudit providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* How it works */}
        {review.howItWorks && review.howItWorks.length > 0 && (
          <Section title={`How ${provider.name} Works`}>
            <ol className="space-y-4">
              {review.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E6D3A3] text-[13px] font-bold text-[#0F2540]">
                    {i + 1}
                  </div>
                  <div>
                    {step.timing && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1E3A5F]">
                        {step.timing}
                      </span>
                    )}
                    <p className="text-[15px] font-bold text-[#191919]">{step.title}</p>
                    {step.detail && (
                      <p className="mt-0.5 text-[14px] leading-[1.65] text-gray-600">{step.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* Pros & Cons */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-2">
            <div className="p-6 sm:border-r sm:border-gray-100">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-emerald-700">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
                </div>
                Pros
              </h3>
              <ul className="space-y-2.5">
                {review.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-100 p-6 sm:border-t-0">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-red-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                  <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                </div>
                Cons
              </h3>
              <ul className="space-y-2.5">
                {review.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" strokeWidth={2} />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mb-6 rounded-xl border border-[#B8862B]/10 bg-[#B8862B]/[0.03] p-5 text-center sm:p-6">
          <p className="mb-3 text-[16px] font-bold text-[#191919]">
            Interested in {provider.name}?
          </p>
          <p className="mb-4 text-[13px] text-gray-500">
            Ask for current fees, minimums and the markup on your metals in writing.
            We may be paid if you request a kit or open an account through this link.
          </p>
          <ProviderCta
            href={provider.affiliateUrl}
            providerName={provider.name}
            providerSlug={provider.id}
            pageType="review"
            sourceFlow="provider_review"
            className="inline-flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#E6D3A3] px-8 text-[14px] font-bold text-[#0F2540] transition-colors hover:bg-[#D9BE7C]"
          >
            Visit {provider.name}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </ProviderCta>
        </div>

        {/* Best For */}
        <Section title="Who It's Best For">
          <ul className="space-y-2.5">
            {review.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#1E3A5F]" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Trustpilot Reviews */}
        {(provider.trustpilotReviews?.length ?? 0) > 0 && (
          <div className="mb-6">
            <TrustpilotCarousel
              providerName={provider.name}
              providerLogo={provider.logo}
              reviews={provider.trustpilotReviews!}
              rating={provider.trustpilotRating}
              reviewCount={provider.trustpilotReviewCount}
            />
          </div>
        )}

        {/* Community feedback - real Reddit threads, rendered Reddit-style.
            Each registry entry names the vertical its threads were captured
            for, so the block renders only on the matching vertical. */}
        {REVIEW_COMMUNITY_FEEDBACK[slug] &&
          (REVIEW_COMMUNITY_FEEDBACK[slug].vertical ?? ctx.vertical) === ctx.vertical && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <div className="mb-2 flex items-center gap-2.5">
              <RedditMark className="h-7 w-7 shrink-0" />
              <h2 className="text-[20px] font-bold text-[#191919]">
                What Reddit says about {provider.name}
              </h2>
            </div>
            <p className="mb-5 text-[14.5px] leading-relaxed text-gray-700">
              {REVIEW_COMMUNITY_FEEDBACK[slug].intro}
            </p>

            <div className="space-y-4">
              {REVIEW_COMMUNITY_FEEDBACK[slug].threads.map((t, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-[#FCFCFC] p-4 sm:p-5">
                  {/* Post header - the Reddit identity line */}
                  <div className="mb-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4500] text-[10px] font-bold text-white">
                      r/
                    </span>
                    {t.subreddit ? (
                      <>
                        <span className="font-bold text-[#191919]">{t.subreddit}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">u/{t.author}</span>
                      </>
                    ) : (
                      <span className="font-bold text-[#191919]">u/{t.author}</span>
                    )}
                    {t.age && (
                      <>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">{t.age}</span>
                      </>
                    )}
                  </div>

                  {t.title && (
                    <p className="mb-2 text-[15.5px] font-bold leading-snug text-[#191919]">{t.title}</p>
                  )}

                  <div className="space-y-2">
                    {t.body.map((para, j) => (
                      <p key={j} className="text-[13.5px] leading-[1.7] text-gray-600">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Vote / comment pills - only real counts, never estimates */}
                  {(t.upvotes !== undefined || t.commentCount !== undefined) && (
                    <div className="mt-3 flex items-center gap-2">
                      {t.upvotes !== undefined && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-bold text-gray-600">
                          <ArrowBigUp className="h-4 w-4 text-[#FF4500]" strokeWidth={2} />
                          {t.upvotes}
                          <ArrowBigDown className="h-4 w-4 text-gray-500" strokeWidth={2} />
                        </span>
                      )}
                      {t.commentCount !== undefined && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-semibold text-gray-600">
                          <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
                          {t.commentCount} comments
                        </span>
                      )}
                    </div>
                  )}

                  {/* Replies - threaded with the Reddit comment line */}
                  {t.replies && t.replies.length > 0 && (
                    <div className="mt-3 space-y-3 border-l-2 border-gray-200 pl-4">
                      {t.replies.map((r, j) => (
                        <div key={j}>
                          <div className="mb-1 flex items-center gap-1.5 text-[12px]">
                            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gray-300 text-[9px] font-bold uppercase text-white">
                              {r.author.charAt(0)}
                            </span>
                            <span className="font-bold text-gray-800">u/{r.author}</span>
                          </div>
                          <p className="text-[13px] leading-[1.65] text-gray-600">{r.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-gray-100 pt-4 text-[14px] leading-relaxed text-gray-700">
              <span className="font-semibold text-[#191919]">The takeaway: </span>
              {REVIEW_COMMUNITY_FEEDBACK[slug].takeaway}
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-gray-500">
              Excerpts from public Reddit posts, lightly trimmed; vote and comment counts shown as
              captured at the time of review. Reddit is a trademark of Reddit, Inc. and is not
              affiliated with this site.
            </p>
          </div>
        )}

        {/* Independent YouTube review - registry-gated, one real video per
            provider, embedded click-to-load so the iframe never weighs on
            initial load. */}
        <YoutubeReviewSection providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* Final Verdict */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
            <h3 className="text-[18px] font-bold text-[#191919]">Final Verdict</h3>
          </div>
          <div className="p-6">
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="mt-5 flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#E6D3A3] text-[15px] font-bold text-[#0F2540] transition-colors hover:bg-[#D9BE7C] sm:w-auto sm:px-8"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
        </div>

        {/* FAQ */}
        {reviewFaqs.length > 0 && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
              <h2 className="text-[18px] font-bold text-[#191919]">
                {provider.name} Review: FAQs
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {reviewFaqs.map((f, i) => (
                <div key={i} className="p-6">
                  <h3 className="mb-2 text-[15px] font-bold text-[#191919]">{f.question}</h3>
                  <p className="text-[14px] leading-[1.7] text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Related content */}
        {(relatedBattles.length > 0 || relatedArticles.length > 0) && (
          <div className="mb-6">
            <h3 className="mb-4 text-[18px] font-bold text-[#191919]">Related</h3>
            <div className="space-y-2">
              {relatedBattles.map((battle) => {
                const otherProvider = config.providers.find(
                  (p) => p.id === (battle.provider1Id === provider.id ? battle.provider2Id : battle.provider1Id)
                );
                return (
                  <Link
                    key={battle.slug}
                    href={hubLink(ctx, `/${battle.slug}`)}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#B8862B]/30 hover:bg-[#B8862B]/[0.02]"
                  >
                    <span className="text-[#1E3A5F]">{provider.name} vs {otherProvider?.name}</span>
                    <span className="ml-auto text-[12px] text-gray-500">Compare</span>
                  </Link>
                );
              })}
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={hubLink(ctx, `/articles/${article.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#B8862B]/30 hover:bg-[#B8862B]/[0.02]"
                >
                  <span className="truncate">{article.title}</span>
                  <span className="ml-auto shrink-0 text-[12px] text-gray-500">{article.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Provider question cluster - the review's highest-intent internal links */}
        {clusterSlugs.length > 0 && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <h2 className="mb-1 text-[17px] font-bold text-[#191919]">
              More on {provider.name}
            </h2>
            <p className="mb-4 text-[13.5px] text-gray-500">
              The questions people ask before signing up - answered in depth.
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {clusterSlugs.map((c) => (
                <Link
                  key={c.slug}
                  href={hubLink(ctx, `/articles/${c.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-semibold text-[#1E3A5F] transition-colors hover:border-[#B8862B]/30 hover:bg-[#B8862B]/[0.02]"
                >
                  <span className="truncate">{c.label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        )}

        <SourcesMethodology
          ctx={ctx}
          providers={[{ id: provider.id, name: provider.name }]}
          headingLabel={provider.name}
          kind="review"
        />
      </div>

      {/* Mobile-only promo popup - shown on the provider's own review page when
          it has a registered creative (same once-per-session behavior as on
          comparisons). */}
      {promoPopup && (
        <PromoPopup
          spec={promoPopup}
          href={provider.affiliateUrl}
          position={rankIndex >= 0 ? rankIndex + 1 : undefined}
        />
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-[17px] font-bold text-[#191919]">{title}</h3>
      {children}
    </div>
  );
}
