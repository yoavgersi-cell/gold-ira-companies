// ───── The product catalog ─────
// Product entries (IRA-eligible coins and bars) for the optional product
// carousel. Images must be company-published product creatives supplied by
// the site operator - never generated. A null image renders the company-logo
// tile fallback; never invent a product shot.

export type CatalogProduct = {
  id: string;
  providerId: string;
  /** Card title, e.g. "American Gold Eagle, 1 oz". */
  name: string;
  metal: "gold" | "silver" | "platinum" | "palladium";
  form: "coin" | "bar";
  /** Headline price as published by the company, e.g. "$4,350". */
  price: string;
  /** The honest condition attached to the price (date, quantity, payment method). */
  priceNote: string;
  image: string | null;
};

// Empty on this site. Gold IRA companies rarely publish live product prices,
// and a stale metal price is worse than none, so every ProductCarousel renders
// nothing (items.length === 0 -> null). Add an entry only with a real product
// image and a published, dated price.
export const PRODUCT_CATALOG: CatalogProduct[] = [];

/** Numeric value for sorting ("$4,350" → 4350). */
export function productPriceValue(p: CatalogProduct): number {
  return Number(p.price.replace(/[^0-9.]/g, "")) || Number.MAX_SAFE_INTEGER;
}
