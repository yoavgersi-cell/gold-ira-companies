import { PRODUCT_CATALOG, productPriceValue, type CatalogProduct } from "@/lib/product-catalog";
import { ProviderCta } from "@/components/provider-cta";
import type { Provider } from "@/lib/config";
import { AFFILIATE_PROVIDER_IDS } from "@/lib/config";

// ───── Product carousel ─────
// Scroll-snap strip of IRA-eligible coins and bars: product image, title,
// published price with its condition, and the company name. Every price comes
// from the catalog; the whole card is the affiliate CTA. Cards without a
// supplied product image render a company-logo tile rather than an invented
// product shot. The catalog is empty on this site, so this renders nothing
// until real, dated products are added. No Product/Offer schema is emitted:
// prices for metals change daily and we are not the seller.

const METAL_CHIP: Record<CatalogProduct["metal"], { label: string; className: string }> = {
  gold: { label: "Gold", className: "bg-amber-50 text-amber-800 ring-amber-200" },
  silver: { label: "Silver", className: "bg-slate-50 text-slate-700 ring-slate-200" },
  platinum: { label: "Platinum", className: "bg-gray-50 text-gray-700 ring-gray-200" },
  palladium: { label: "Palladium", className: "bg-gray-50 text-gray-700 ring-gray-200" },
};

function ProductCard({
  product,
  provider,
  position,
  pageType,
}: {
  product: CatalogProduct;
  provider: Provider;
  position: number;
  pageType: "listing" | "review" | "battle";
}) {
  const chip = METAL_CHIP[product.metal];
  return (
    <div className="flex w-[200px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md sm:w-[212px]">
      <ProviderCta
        href={provider.affiliateUrl}
        providerName={provider.name}
        providerSlug={provider.id}
        position={position}
        pageType={pageType}
        sourceFlow="main_comparison"
        className="flex flex-1 flex-col"
      >
        {/* Product image - or logo tile when no real product shot exists */}
        <div className="relative flex h-[150px] items-center justify-center border-b border-gray-100 bg-white p-3">
          <span
            className={`absolute left-2 top-2 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold ring-1 ${chip.className}`}
          >
            {chip.label} {product.form}
          </span>
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={`${provider.name} ${product.name}`}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#FBF5E6] to-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={provider.logo} alt={`${provider.name} logo`} className="max-h-[36px] max-w-[120px] object-contain" />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-3.5">
          <p className="text-[13px] font-semibold leading-snug text-[#1E3A5F] line-clamp-2">
            {product.name}
          </p>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-[17px] font-extrabold tracking-tight text-[#191919] [font-variant-numeric:tabular-nums]">
              {product.price}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] leading-snug text-gray-500">{product.priceNote}</p>
          <p className="mt-auto pt-2 text-[12.5px] font-medium text-gray-800">{provider.name}</p>
        </div>
      </ProviderCta>
    </div>
  );
}

export function ProductCarousel({
  providers,
  title = "IRA-eligible coins and bars",
  subtitle = "Published prices with their conditions - prices change daily, so confirm before you buy.",
  highlightProviderIds = [],
  onlyProviderIds,
  pageType = "listing",
}: {
  providers: Provider[];
  title?: string;
  subtitle?: string;
  /** These companies' products sort first (e.g. a battle's two contenders). */
  highlightProviderIds?: string[];
  /** Restrict to specific companies (e.g. a review page's own company). */
  onlyProviderIds?: string[];
  pageType?: "listing" | "review" | "battle";
  /** Accepted for compatibility; no product schema is emitted. */
  withSchema?: boolean;
  /** Accepted for compatibility; no product schema is emitted. */
  pageUrl?: string;
}) {
  const byId = new Map(providers.map((p) => [p.id, p]));
  const highlight = new Set(highlightProviderIds);

  let items = PRODUCT_CATALOG.filter(
    (p) => byId.has(p.providerId) && AFFILIATE_PROVIDER_IDS.includes(p.providerId)
  );
  if (onlyProviderIds) items = items.filter((p) => onlyProviderIds.includes(p.providerId));
  items = items.sort((a, b) => {
    const ha = highlight.has(a.providerId) ? 0 : 1;
    const hb = highlight.has(b.providerId) ? 0 : 1;
    if (ha !== hb) return ha - hb;
    return productPriceValue(a) - productPriceValue(b);
  });

  if (items.length === 0) return null;

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <h2 className="text-[20px] font-bold text-[#191919]">{title}</h2>
      </div>
      <p className="mb-4 max-w-[640px] text-[13.5px] text-gray-500">{subtitle}</p>
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
        <div className="flex snap-x snap-mandatory gap-3">
          {items.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              provider={byId.get(p.providerId)!}
              position={i + 1}
              pageType={pageType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
