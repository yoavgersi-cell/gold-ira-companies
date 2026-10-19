"use client";

import { trackProviderClick } from "@/lib/analytics";

interface ProviderCtaProps {
  href: string;
  providerName: string;
  providerSlug: string;
  position?: number;
  pageType: "listing" | "review" | "battle" | "quiz_results";
  sourceFlow: "main_comparison" | "provider_review" | "battle_page" | "matching_flow";
  className: string;
  children: React.ReactNode;
}

export function ProviderCta({
  href,
  providerName,
  providerSlug,
  position,
  pageType,
  sourceFlow,
  className,
  children,
}: ProviderCtaProps) {
  // No affiliate link yet ("" or "#"): send the visitor to our review of the
  // company instead of a dead button. Swaps to the tracking link automatically
  // once one is saved in /admin.
  const hasLink = !!href && href !== "#";
  return (
    <a
      href={hasLink ? href : `/reviews/${providerSlug}`}
      {...(hasLink ? { target: "_blank", rel: "sponsored nofollow noopener noreferrer" } : {})}
      className={className}
      onClick={() => {
        trackProviderClick({
          provider_name: providerName,
          provider_slug: providerSlug,
          provider_position: position,
          page_type: pageType,
          source_flow: sourceFlow,
        });
      }}
    >
      {children}
    </a>
  );
}
