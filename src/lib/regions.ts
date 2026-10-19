// ───── Geo-region scaffold ─────
//
// The site serves the US market at the root. The template supports a second
// market under a path prefix (e.g. "/uk"), but gold IRAs are a US-only
// product (IRS rules), so only the US region is published.
//
// To go live for a region: add its id to PUBLISHED_REGIONS and build the
// region-aware routing/config for it. Everything else keys off this file.

export interface Region {
  id: string; // "us" | "gb"
  /** Path prefix under the hub origin: "" for US (root), "/uk" for GB. */
  pathPrefix: string;
  /** hreflang value for <link rel="alternate"> / metadata languages. */
  hreflang: string;
  /** ISO country for schema (addressCountry, geo.region, applicableCountry). */
  country: string;
  label: string;
}

export const REGIONS: Region[] = [
  { id: "us", pathPrefix: "", hreflang: "en-US", country: "US", label: "United States" },
  { id: "gb", pathPrefix: "/uk", hreflang: "en-GB", country: "GB", label: "United Kingdom" },
];

export const DEFAULT_REGION = "us";

// Live, indexable regions. This gold IRA site serves the US market only - there are no /uk routes
// on this site, so GB must stay out of PUBLISHED_REGIONS, or hreflang would
// advertise en-GB alternates at /uk/* URLs that 404.
export const PUBLISHED_REGIONS = ["us"];
export const isPublishedRegion = (id: string): boolean => PUBLISHED_REGIONS.includes(id);

export const regionById = (id: string): Region | undefined => REGIONS.find((r) => r.id === id);
const US_REGION = regionById("us")!;
const GB_REGION = regionById("gb")!;

// The region a hub pathname belongs to, by its leading segment, plus the path
// with the region prefix stripped so downstream vertical routing is unchanged.
// "/uk/reviews" -> { region: gb, rest: "/reviews" }; anything else -> us.
export function regionFromPathname(pathname: string): { region: Region; rest: string } {
  if (pathname === GB_REGION.pathPrefix || pathname.startsWith(`${GB_REGION.pathPrefix}/`)) {
    return { region: GB_REGION, rest: pathname.slice(GB_REGION.pathPrefix.length) || "/" };
  }
  return { region: US_REGION, rest: pathname };
}

// hreflang language map for a region-relative content path (e.g. "/reviews"
// or "/" for the home). Only PUBLISHED regions are advertised, plus an
// x-default pointing at the US version. When GB is published this map grows to
// include en-GB automatically - no per-page changes needed.
export function hreflangLanguages(origin: string, contentPath: string): Record<string, string> {
  const suffix = contentPath === "/" ? "" : contentPath;
  const out: Record<string, string> = {};
  for (const r of REGIONS) {
    if (isPublishedRegion(r.id)) out[r.hreflang] = `${origin}${r.pathPrefix}${suffix}`;
  }
  out["x-default"] = `${origin}${US_REGION.pathPrefix}${suffix}`;
  return out;
}
