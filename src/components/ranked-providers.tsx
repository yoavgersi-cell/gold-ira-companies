import { ComparisonCard, type ComparisonCardProduct } from "./comparison-card";

// The homepage ranking: the operator-ordered cards plus the footnote that
// marks the offers on them as the companies' own claims. (An investment-amount
// filter lived here; it was removed until a better filter is designed - the
// cards still accept `belowMinimum` for that.)
export function RankedProviders({ products }: { products: ComparisonCardProduct[] }) {
  return (
    <div className="space-y-3.5">
      {products.map((product) => (
        <ComparisonCard key={product.id} product={product} />
      ))}

      <p className="text-[11px] leading-relaxed text-gray-500">
        <sup>1</sup> Offers, guarantees, endorsements and review counts shown on these cards are the companies&apos; own advertised claims; terms,
        minimum purchase amounts and eligibility apply. Confirm current terms with the company in writing before you invest.
      </p>
    </div>
  );
}
