"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ComparisonCard, type ComparisonCardProduct } from "./comparison-card";

// "How much are you looking to invest?" chips above the ranking. Choosing an
// amount never reorders the operator's ranking - it only flags the companies
// whose published minimum is above that amount, so the visitor doesn't call a
// company that will turn them away. Companies without a published minimum are
// never flagged.
const AMOUNTS: { label: string; value: number | null }[] = [
  { label: "Under $10k", value: 5000 },
  { label: "$10k - $25k", value: 10000 },
  { label: "$25k - $50k", value: 25000 },
  { label: "$50k - $100k", value: 50000 },
  { label: "$100k+", value: 100000 },
];

export function RankedProviders({ products }: { products: ComparisonCardProduct[] }) {
  const [amount, setAmount] = useState<number | null>(null);
  const eligible = amount === null ? products.length : products.filter((p) => !isBelow(p, amount)).length;

  return (
    <div className="space-y-3.5">
      <fieldset className="rounded-md border border-gray-300 bg-white px-4 py-3 sm:px-5">
        <legend className="sr-only">How much are you looking to invest?</legend>
        <p className="text-[14px] font-bold text-[#191919] sm:text-[15px]">How much are you looking to invest?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {AMOUNTS.map((a) => {
            const active = amount === a.value;
            return (
              <button
                key={a.label}
                type="button"
                aria-pressed={active}
                onClick={() => setAmount(active ? null : a.value)}
                className={cn(
                  "min-h-[36px] rounded-full border px-4 text-[13px] font-semibold transition-colors",
                  active
                    ? "border-[#1E4E79] bg-[#1E4E79] text-white"
                    : "border-gray-300 bg-white text-[#191919] hover:border-[#1E4E79]",
                )}
              >
                {a.label}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-[12px] text-gray-600" aria-live="polite">
          {amount === null
            ? "Pick an amount to see which companies accept it."
            : `${eligible} of ${products.length} companies accept this amount, based on their published minimums.`}
        </p>
      </fieldset>

      {products.map((product) => (
        <ComparisonCard key={product.id} product={product} belowMinimum={amount !== null && isBelow(product, amount)} />
      ))}

      <p className="text-[11px] leading-relaxed text-gray-500">
        <sup>1</sup> Offers, guarantees, endorsements and review counts shown on these cards are the companies&apos; own advertised claims; terms,
        minimum purchase amounts and eligibility apply. Confirm current terms with the company in writing before you invest.
      </p>
    </div>
  );
}

function isBelow(p: ComparisonCardProduct, amount: number) {
  return p.minInvestment !== undefined && p.minInvestment > amount;
}
