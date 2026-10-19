import { ArrowRight, Check, Star, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { RatingBadge } from "./rating-badge";
import { ProviderCta } from "./provider-cta";

export interface ComparisonCardProduct {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  highlights: string[];
  affiliateUrl: string;
  ctaText: string;
  rank: number;
  rating: number;
  ratingLabel: string;
  starRating?: number;
  badge?: string;
  cardPill?: string;
  offerTag?: string;
  endorsement?: string;
  minInvestment?: number;
}

interface ComparisonCardProps {
  product: ComparisonCardProduct;
  hideRank?: boolean;
  pageType?: "listing" | "review" | "battle" | "quiz_results";
  sourceFlow?: "main_comparison" | "provider_review" | "battle_page" | "matching_flow";
  /** Kept for call-site compatibility; fake visit counters are no longer shown. */
  socialProof?: { number: string; text: string };
  linkPrefix?: string;
  /** Set when the visitor's chosen amount is below this company's minimum. */
  belowMinimum?: boolean;
}

export const formatUsd = (n: number) => `$${n.toLocaleString("en-US")}`;

// Ranking card: logo | name, review link, headline and offer bullets | score
// and CTA. Large type and a single strong CTA - the audience is mostly 50+.
export function ComparisonCard({
  product,
  hideRank,
  pageType = "listing",
  sourceFlow = "main_comparison",
  linkPrefix = "",
  belowMinimum,
}: ComparisonCardProps) {
  const cta = (className: string) => (
    <ProviderCta
      href={product.affiliateUrl}
      providerName={product.name}
      providerSlug={product.id}
      position={product.rank}
      pageType={pageType}
      sourceFlow={sourceFlow}
      className={className}
    >
      Visit Site
      <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
    </ProviderCta>
  );

  return (
    <article
      className={cn(
        "relative rounded-md border border-gray-300 bg-white transition-shadow hover:shadow-md",
        belowMinimum && "opacity-70",
      )}
    >
      {!hideRank && (
        <div className="absolute -left-px -top-px z-10 flex">
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-tl-md rounded-br-md bg-[#191919] text-[13px] font-bold text-white">
            {product.rank}
          </span>
          {product.badge && (
            <span className="flex h-[26px] items-center gap-1.5 rounded-br-md bg-[#1E4E79] px-2.5 text-[12px] font-semibold text-white">
              {product.badge}
              <ThumbsUp className="h-3 w-3 fill-white" strokeWidth={1.5} />
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-3 px-4 pb-4 pt-9 sm:flex-row sm:gap-5 sm:px-6 sm:pb-4 sm:pt-9">
        {/* Logo (+ score on mobile) */}
        <div className="flex items-center justify-between gap-3 sm:items-start sm:w-[190px] sm:shrink-0 sm:justify-center sm:pt-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.logo}
            alt={`${product.name} logo`}
            className="block max-h-[44px] w-auto max-w-[120px] object-contain sm:max-h-[72px] sm:max-w-[180px]"
          />
          <RatingBadge className="sm:hidden" rating={product.rating} label={product.ratingLabel} starRating={product.starRating} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-[17px] font-semibold leading-tight text-[#191919] sm:text-[18px]">{product.name}</h3>
          <a
            href={`${linkPrefix}/reviews/${product.id}`}
            className="mt-0.5 inline-block text-[13px] font-semibold text-[#2E6DA4] hover:underline sm:text-[14px]"
          >
            Read Review
          </a>
          {product.cardPill && (
            <div className="mt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#191919] px-3 py-1 text-[12px] font-semibold text-white">
                <Star className="h-3 w-3 fill-white" strokeWidth={0} />
                {product.cardPill}
              </span>
            </div>
          )}
          <p className="mt-2 text-[14px] font-bold leading-snug text-[#191919] sm:text-[15px]">{product.tagline}</p>
          <ul className="mt-1.5 space-y-1">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-[13px] leading-[1.45] text-gray-800 sm:text-[14px]">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2E6DA4]" strokeWidth={2.25} />
                {h}
              </li>
            ))}
          </ul>
          {belowMinimum && product.minInvestment !== undefined && (
            <p className="mt-2 rounded-md bg-amber-50 px-2.5 py-1.5 text-[13px] font-medium text-amber-900">
              Minimum investment is {formatUsd(product.minInvestment)} - above the amount you selected.
            </p>
          )}
        </div>

        {/* Score + CTA */}
        <div className="flex flex-col items-stretch gap-3 sm:w-[190px] sm:shrink-0">
          <RatingBadge size="lg" className="hidden sm:flex" rating={product.rating} label={product.ratingLabel} starRating={product.starRating} />
          {cta(
            "flex h-[42px] w-full items-center justify-center gap-2 rounded-sm bg-[#1E4E79] text-[15px] font-semibold text-white transition-colors hover:bg-[#163B5C] sm:h-[44px] sm:text-[16px]",
          )}
          {product.endorsement && (
            <p className="mx-auto border-y border-[#1E4E79] px-1 py-1 text-center text-[12px] text-[#1E4E79] sm:text-[13px]">
              {product.endorsement}
            </p>
          )}
        </div>
      </div>

      {product.offerTag && (
        <div className="mx-4 border-t border-gray-200 py-2.5 sm:mx-6">
          <span className="inline-block rounded-full bg-[#EEF4FA] px-3 py-1 text-[12px] text-[#191919]">
            {product.offerTag}
            <sup>1</sup>
          </span>
        </div>
      )}
    </article>
  );
}
