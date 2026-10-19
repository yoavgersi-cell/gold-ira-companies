import { Check, Star, ThumbsUp } from "lucide-react";
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
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-tl-md rounded-br-md bg-[#191919] text-[17px] font-bold text-white">
            {product.rank}
          </span>
          {product.badge && (
            <span className="flex h-[34px] items-center gap-1.5 rounded-br-md bg-[#1E4E79] px-3.5 text-[15px] font-semibold text-white">
              {product.badge}
              <ThumbsUp className="h-4 w-4 fill-white" strokeWidth={1.5} />
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-5 px-5 pb-5 pt-12 sm:flex-row sm:gap-6 sm:px-8 sm:pb-6 sm:pt-12">
        {/* Logo (+ score on mobile) */}
        <div className="flex items-center justify-between gap-3 sm:items-start sm:w-[260px] sm:shrink-0 sm:justify-center sm:pt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.logo}
            alt={`${product.name} logo`}
            className="block max-h-[60px] w-auto max-w-[150px] object-contain sm:max-h-[110px] sm:max-w-[250px]"
          />
          <RatingBadge className="sm:hidden" rating={product.rating} label={product.ratingLabel} starRating={product.starRating} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-[21px] font-semibold leading-tight text-[#191919] sm:text-[24px]">{product.name}</h3>
          <a
            href={`${linkPrefix}/reviews/${product.id}`}
            className="mt-1 inline-block text-[17px] font-semibold text-[#2E6DA4] hover:underline sm:text-[19px]"
          >
            Read Review
          </a>
          {product.cardPill && (
            <div className="mt-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#191919] px-4 py-1.5 text-[15px] font-semibold text-white">
                <Star className="h-4 w-4 fill-white" strokeWidth={0} />
                {product.cardPill}
              </span>
            </div>
          )}
          <p className="mt-3 text-[17px] font-bold leading-snug text-[#191919] sm:text-[19px]">{product.tagline}</p>
          <ul className="mt-2 space-y-1.5">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[16px] leading-[1.45] text-gray-800 sm:text-[17px]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#2E6DA4]" strokeWidth={2.25} />
                {h}
              </li>
            ))}
          </ul>
          {belowMinimum && product.minInvestment !== undefined && (
            <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-[15px] font-medium text-amber-900">
              Minimum investment is {formatUsd(product.minInvestment)} - above the amount you selected.
            </p>
          )}
        </div>

        {/* Score + CTA */}
        <div className="flex flex-col items-stretch gap-4 sm:w-[240px] sm:shrink-0">
          <RatingBadge size="lg" className="hidden sm:flex" rating={product.rating} label={product.ratingLabel} starRating={product.starRating} />
          {cta(
            "flex h-[56px] w-full items-center justify-center rounded-sm bg-[#1E4E79] text-[20px] font-semibold text-white transition-colors hover:bg-[#163B5C] sm:h-[60px] sm:text-[22px]",
          )}
          {product.endorsement && (
            <p className="mx-auto border-y-2 border-[#1E4E79] px-1 py-1.5 text-center text-[15px] text-[#1E4E79] sm:text-[16px]">
              {product.endorsement}
            </p>
          )}
        </div>
      </div>

      {product.offerTag && (
        <div className="mx-5 border-t border-gray-200 py-4 sm:mx-8">
          <span className="inline-block rounded-full bg-[#EEF4FA] px-4 py-2 text-[16px] text-[#191919]">
            {product.offerTag}
            <sup>1</sup>
          </span>
        </div>
      )}
    </article>
  );
}
