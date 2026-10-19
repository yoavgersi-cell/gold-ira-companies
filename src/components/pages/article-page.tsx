import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { NOINDEX_ARTICLE_SLUGS, latestUpdate } from "@/lib/config";
import { enhanceArticleHtml } from "@/components/prose";
import { type SiteContext, canonicalUrl, hubLink } from "@/lib/site-context";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import { MedicalSources } from "@/components/medical-sources";
import { TrustpilotCarousel } from "@/components/trustpilot-carousel";
import { TopProviderCards } from "@/components/top-provider-cards";
import { RedditThreadCarousel, REDDIT_COMMUNITY_FEEDBACK } from "@/components/reddit-community";
import { notFound, permanentRedirect } from "next/navigation";

// Code-side CTR overrides and quick-answer boxes for high-impression articles,
// keyed by slug. Empty by default so article pages render purely from the
// config (src/lib/seeds/gold-ira/articles*.ts); add an entry only with real,
// verified figures if CTR tuning is ever needed.
const ARTICLE_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {};

const ARTICLE_QUICK_ANSWERS: Record<string, string> = {};

export async function articleMetadata(slug: string, ctx: SiteContext): Promise<Metadata> {
  const config = await getConfig(ctx.vertical);
  const article = (config.articles ?? []).find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  const url = canonicalUrl(ctx, `/articles/${slug}`);

  // CTR override (code-controlled) wins over stored meta for target articles.
  const override = ARTICLE_SEO_OVERRIDES[slug];

  const seoTitle = override?.title ?? article.title;

  return {
    // Long, query-led titles carry their own keywords; appending the
    // " | Gold IRA Planet" template suffix would push them past the ~60-character
    // SERP cut-off, so those render as-is.
    title: seoTitle.length > 44 ? { absolute: seoTitle } : seoTitle,
    description: override?.description ?? article.description,
    robots: ctx.noindex
      ? { index: false, follow: false }
      : NOINDEX_ARTICLE_SLUGS.includes(slug)
        ? { index: false, follow: true }
        : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: override?.title ?? article.title,
      description: override?.description ?? article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: latestUpdate(article.updatedAt),
      authors: [article.author || ctx.brandDomain],
    },
  };
}

const categoryColors: Record<string, string> = {
  Guides: "bg-[#FBF5E6] text-[#0F2540]",
  Rollovers: "bg-sky-50 text-sky-800",
  "Fees & Costs": "bg-amber-50 text-amber-800",
  "Rules & Taxes": "bg-emerald-50 text-emerald-800",
  Safety: "bg-red-50 text-red-800",
};

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function ArticlePageView({ slug, ctx }: { slug: string; ctx: SiteContext }) {
  const config = await getConfig(ctx.vertical);
  const articles = config.articles ?? [];
  const experts = config.experts ?? [];

  // Head-to-head provider comparisons are canonical at the root battle URL.
  // If a battle owns this slug, consolidate /articles/<slug> → /<slug> (301/308)
  // so a duplicate or stale /articles/ URL doesn't compete with the battle page.
  if ((config.battles ?? []).some((b) => b.slug === slug)) {
    permanentRedirect(hubLink(ctx, `/${slug}`));
  }

  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const nextArticle = articles[currentIndex + 1] || null;
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;

  // Brand-cluster articles (is-goldco-legit, goldco-fees, ...) carry the
  // company id as a slug prefix. On those, surface the company's real social
  // proof - Trustpilot and Reddit carousels - high on the page. Verified data
  // only; companies without it render nothing.
  const subjectProvider = config.providers.find(
    (p) => slug.startsWith(`${p.id}-`) || slug.startsWith(`is-${p.id}-`),
  );
  const isLegitArticle = /^is-.+-legit$/.test(slug);
  const subjectTrustpilot =
    subjectProvider?.trustpilotReviews?.length ? subjectProvider : undefined;
  const subjectReddit =
    subjectProvider && REDDIT_COMMUNITY_FEEDBACK[subjectProvider.id]
      ? subjectProvider
      : undefined;

  // Byline author: match the article's author to a team member, else the lead
  const author = experts.find((e) => e.name === article.author) ?? experts[0];

  // Top providers for inline CTA
  const { providerOrder, positions } = config.ranking;
  const topProviders = providerOrder
    .map((id, index) => {
      const provider = config.providers.find((p) => p.id === id);
      if (!provider) return null;
      const position = positions[index] || positions[positions.length - 1];
      return { ...provider, rating: position.score, tagline: provider.tagline };
    })
    .filter(Boolean) as Array<{ id: string; name: string; logo: string; tagline: string; affiliateUrl: string; rating: number }>;

  // Related articles: same category first, then others, exclude self, max 3
  const relatedArticles = [
    ...articles.filter(
      (a) => a.slug !== slug && a.category === article.category
    ),
    ...articles.filter(
      (a) => a.slug !== slug && a.category !== article.category
    ),
  ].slice(0, 3);

  const formattedDate = new Date(latestUpdate(article.updatedAt)).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }
  );

  // Word count for schema
  const wordCount = article.sections.reduce(
    (sum, s) =>
      sum + s.body.replace(/<[^>]*>/g, "").split(/\s+/).length,
    0
  );

  // JSON-LD Article schema (enhanced)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: canonicalUrl(ctx, `/articles/${slug}/opengraph-image`),
    datePublished: article.publishedAt,
    dateModified: latestUpdate(article.updatedAt),
    wordCount,
    articleSection: article.category,
    author: author
      ? {
          "@type": "Person",
          name: author.credentials ? `${author.name}, ${author.credentials}` : author.name,
          jobTitle: author.role,
          url: canonicalUrl(ctx, "/about"),
        }
      : {
          "@type": "Organization",
          name: article.author || ctx.brandDomain,
          url: ctx.origin,
        },
    publisher: {
      "@type": "Organization",
      name: ctx.brandDomain,
      url: ctx.origin,
      logo: {
        "@type": "ImageObject",
        url: `${ctx.origin}/logo-mark.png`,
      },
    },
    // reviewedBy / lastReviewed sit on the page entity, where schema.org
    // defines them (they are not Article properties).
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(ctx, `/articles/${slug}`),
      ...pageReviewSchema(`/articles/${slug}`),
    },
    keywords: [
      "gold IRA",
      "gold IRA companies",
      "precious metals IRA",
      "retirement savings",
      article.category.toLowerCase(),
      ...article.sections.map((s) => s.heading),
    ],
  };

  // JSON-LD Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl(ctx, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: canonicalUrl(ctx, "/articles"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl(ctx, `/articles/${slug}`),
      },
    ],
  };

  // FAQ schema - ONLY from sections that are genuinely question-shaped (heading
  // ends with "?"). Marking narrative section headings as FAQ questions is
  // non-compliant structured data (risk of a Google structured-data flag, and no
  // upside since FAQ rich results are gated to authoritative health/gov sites),
  // so we emit FAQPage only when there are at least two real questions.
  const faqEntries = article.sections.filter((s) => s.heading.trim().endsWith("?"));
  const faqSchema =
    faqEntries.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map((s) => ({
            "@type": "Question",
            name: s.heading,
            acceptedAnswer: {
              "@type": "Answer",
              text: s.body.replace(/<[^>]*>/g, ""),
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen bg-gray-50">
        {/* Hero band - light background for readable dark text; the article's
            heroColor is repurposed as a slim top accent so each piece keeps its
            color without hurting contrast. */}
        <div
          className="w-full border-b border-gray-200 bg-white"
          style={{ borderTop: `4px solid ${article.heroColor}` }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-7 sm:px-6 sm:py-12">
            <Breadcrumbs
              items={[
                { label: "Home", href: hubLink(ctx, "/") },
                { label: "Articles", href: hubLink(ctx, "/articles") },
                { label: article.title },
              ]}
            />

            {/* Tight editorial masthead: eyebrow (category + read time) → H1 →
                short dek → low-weight byline/date. Spacing kept deliberately
                compact so the first mobile viewport reads like a publication,
                not a long SEO intro. */}
            <div className="mb-2.5 flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}
              >
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-[12px] text-gray-500">
                <Clock className="h-3 w-3" strokeWidth={1.5} />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-[24px] font-bold leading-tight text-[#191919] sm:text-[32px]">
              {article.title}
            </h1>
            <p className="mt-2.5 max-w-[640px] text-[15px] leading-[1.55] text-gray-600 sm:text-[16px]">
              {article.description}
            </p>
            <p className="mt-3 text-[12px] text-gray-500">Updated {formattedDate}</p>
            <MedicalReviewBar path={`/articles/${slug}`} className="mt-4 max-w-[760px]" />
          </div>
        </div>

        {/* Article body */}
        <div className="mx-auto max-w-[1100px] px-4 py-10 sm:px-6">
          <div>
          {/* On a brand legitimacy article ("is-<brand>-legit"), real user
              experiences answer the reader's core question first - so the
              operator-verified Reddit threads lead the page, above everything
              else. Other articles keep it mid-body (rendered in the loop). */}
          {isLegitArticle && subjectReddit && (
            <div className="mb-8">
              <RedditThreadCarousel
                providers={[subjectReddit]}
                reviewHrefFor={(id) => hubLink(ctx, `/reviews/${id}`)}
              />
            </div>
          )}
          {/* Direct answer up top (featured-snippet target) - code-injected so
              it also covers articles whose body lives in the CMS blob. */}
          {ARTICLE_QUICK_ANSWERS[slug] && (
            <div className="article-body mb-8 text-[16px] leading-[1.75] text-gray-800">
              <div className="qa">
                <strong>The quick answer</strong>
                {ARTICLE_QUICK_ANSWERS[slug]}
              </div>
            </div>
          )}
          {/* Key takeaways - 3-4 verified bullets, scannable and quotable
              (featured snippets / AI overviews lift lists like this whole). */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="mb-8 rounded-xl border border-[#B8862B]/15 bg-[#FAF7F0] p-5 sm:p-6">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#1E3A5F]">Key takeaways</p>
              <ul className="space-y-2">
                {article.keyTakeaways.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-gray-800">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Table of contents - anchor jump-links. Signals structure to Google
              (eligible for "jump to" sitelinks) and improves navigation on long
              articles. Rendered only when there are enough sections to warrant it. */}
          {article.sections.length >= 4 && (
            <nav aria-label="Table of contents" className="mb-8 rounded-xl border border-gray-200 bg-white p-5">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-gray-500">
                In this article
              </p>
              <ol className="space-y-1.5">
                {article.sections.map((s, i) => (
                  <li key={i} className="flex gap-2 text-[14px] leading-snug">
                    <span className="shrink-0 font-semibold text-gray-500">{i + 1}.</span>
                    <a href={`#${slugifyHeading(s.heading)}`} className="text-[#1E3A5F] hover:underline">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <article className="space-y-8">
            {article.sections.map((section, i) => (
              <div key={i}>
                <section id={slugifyHeading(section.heading)}>
                  <h2 className="mb-3 text-[20px] font-bold text-[#191919] scroll-mt-24">
                    {section.heading}
                  </h2>
                  {/* div (not p) so author HTML can include block elements -
                      lists, tables, callouts - styled via .article-body css */}
                  <div
                    className="article-body text-[16px] leading-[1.75] text-gray-800 [&_a]:text-[#1E3A5F] [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#16304F]"
                    dangerouslySetInnerHTML={{ __html: enhanceArticleHtml(section.body) }}
                  />
                </section>

                {/* Subject-company social proof, high on the page: Trustpilot
                    carousel after the first section, Reddit carousel after the
                    second (or first, on very short articles). Verified data
                    only - companies without it simply render nothing. */}
                {i === 0 && subjectTrustpilot && (
                  <div className="my-10">
                    <TrustpilotCarousel
                      providerName={subjectTrustpilot.name}
                      providerLogo={subjectTrustpilot.logo}
                      reviews={subjectTrustpilot.trustpilotReviews!}
                      rating={subjectTrustpilot.trustpilotRating}
                      reviewCount={subjectTrustpilot.trustpilotReviewCount}
                    />
                  </div>
                )}
                {!isLegitArticle && i === Math.min(1, article.sections.length - 1) && subjectReddit && (
                  <div className="my-10">
                    <RedditThreadCarousel
                      providers={[subjectReddit]}
                      reviewHrefFor={(id) => hubLink(ctx, `/reviews/${id}`)}
                    />
                  </div>
                )}

                {/* Inline company CTA after 2nd section. Suppressed on
                    "is X legit" articles: a trust-check page advertising the
                    reviewed provider's competitors undermines the article's
                    credibility and cannibalizes its own conversion. */}
                {i === 1 && !/^is-.+-legit$/.test(slug) && topProviders.length > 0 && (
                  <>
                    <TopProviderCards
                      config={config}
                      limit={3}
                      linkPrefix=""
                      pageType="listing"
                      sourceFlow="main_comparison"
                      title="Top-Rated Gold IRA Companies"
                    />
                    <p className="-mt-4 mb-2 text-[12px] text-gray-500">
                      Some companies listed pay us when you request a kit or open an account through our links.{" "}
                      <Link href={hubLink(ctx, "/disclaimer")} className="underline">Disclosure</Link>
                    </p>
                  </>
                )}
              </div>
            ))}
          </article>

          {/* CTA box */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 text-center sm:p-8">
            <p className="text-[18px] font-bold text-[#191919]">
              Ready to compare gold IRA companies?
            </p>
            <p className="mt-1 text-[14px] text-gray-500">
              See minimums, setup and yearly fees, storage and buyback terms
              side by side.
            </p>
            <div className="mt-5 flex justify-center">
              <Link
                href={hubLink(ctx, "/")}
                className="inline-flex h-[44px] items-center justify-center rounded-lg bg-[#E6D3A3] px-6 text-[14px] font-bold text-[#0F2540] transition-colors hover:bg-[#D9BE7C]"
              >
                Compare Gold IRA Companies
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-5 text-[18px] font-bold text-[#191919]">
                Related Articles
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedArticles.map((ra) => (
                  <Link
                    key={ra.slug}
                    href={hubLink(ctx, `/articles/${ra.slug}`)}
                    className="group rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
                  >
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold mb-2 ${categoryColors[ra.category] || "bg-gray-100 text-gray-600"}`}
                    >
                      {ra.category}
                    </span>
                    <p className="text-[14px] font-semibold leading-snug text-[#191919] group-hover:text-[#1E3A5F] transition-colors">
                      {ra.title}
                    </p>
                    <p className="mt-1.5 text-[12px] text-gray-500 line-clamp-2">
                      {ra.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next navigation */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {prevArticle ? (
              <Link
                href={hubLink(ctx, `/articles/${prevArticle.slug}`)}
                className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-gray-500 group-hover:text-[#1E3A5F] transition-colors" strokeWidth={2} />
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    Previous
                  </span>
                  <p className="mt-0.5 text-[14px] font-semibold leading-snug text-[#191919] group-hover:text-[#1E3A5F] transition-colors">
                    {prevArticle.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle && (
              <Link
                href={hubLink(ctx, `/articles/${nextArticle.slug}`)}
                className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md sm:text-right sm:flex-row-reverse"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-500 group-hover:text-[#1E3A5F] transition-colors" strokeWidth={2} />
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    Next
                  </span>
                  <p className="mt-0.5 text-[14px] font-semibold leading-snug text-[#191919] group-hover:text-[#1E3A5F] transition-colors">
                    {nextArticle.title}
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/* Contextual comparison hub: routes informational readers into the
              head-to-head pages, built from the config's battles. */}
          {(config.battles ?? []).length > 0 && (
            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
              <h2 className="mb-1 text-[17px] font-bold text-[#191919]">Compare gold IRA companies head-to-head</h2>
              <p className="mb-4 text-[13.5px] text-gray-500">
                Minimums, fees, buyback terms and track records, side by side.
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {(config.battles ?? []).slice(0, 6).map((b) => (
                  <Link
                    key={b.slug}
                    href={hubLink(ctx, `/${b.slug}`)}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-semibold text-[#1E3A5F] transition-colors hover:border-[#B8862B]/30 hover:bg-[#B8862B]/[0.02]"
                  >
                    <span className="truncate">{b.matchupLabel ?? b.title}</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <MedicalSources vertical={ctx.vertical} />

          </div>
        </div>
      </div>
    </>
  );
}
