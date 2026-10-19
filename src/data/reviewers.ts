// ───── Editorial reviewers ─────
// Code-authoritative reviewer profiles and the page review log. Lives in code,
// not the CMS blob, so a CMS save can never blank a byline, and so the same
// Person entity (same @id) is emitted on every page that names the reviewer.
//
// House rules:
//   - Every credential, degree and employer is as supplied by the reviewer.
//     Nothing is added, upgraded or inferred. No credential letters that the
//     person does not hold.
//   - A page says "reviewed" and emits `reviewedBy` / `lastReviewed` ONLY when
//     REVIEW_LOG has an entry for it. Pages without an entry name the site's
//     expert reviewer as staff - never as having reviewed that page.
//   - The byline wording is "Reviewed for accuracy by" - it must never imply a
//     credential or licence the reviewer does not hold.

export const SITE_ORIGIN = "https://www.goldiraplanet.com";

export interface ReviewerCredential {
  title: string;
  issuer: string;
  detail?: string;
}

export interface ReviewerEducation {
  degree: string;
  school: string;
  location?: string;
  detail: string;
}

export interface ReviewerExperienceGroup {
  area: string;
  items: string[];
}

export interface ReviewerWork {
  title: string;
  outlet: string;
  url: string;
}

export interface Reviewer {
  slug: string;
  /** Plain name, no suffixes. */
  name: string;
  /** Post-nominal letters, in display order. */
  credentials: string[];
  /** Role as shown in bylines and schema jobTitle. */
  jobTitle: string;
  /** One line under the name: what the person is, in plain words. */
  headline: string;
  /** 40-60 words, third person. */
  shortBio: string;
  /** Long bio, one paragraph per entry. */
  longBio: string[];
  image: { src: string; webp: string; thumb: string; width: number; height: number };
  licensure: ReviewerCredential[];
  education: ReviewerEducation[];
  experience: ReviewerExperienceGroup[];
  specialties: string[];
  selectedWork: ReviewerWork[];
  /** Public profile URLs (LinkedIn etc.). Only real, supplied URLs. */
  sameAs: string[];
  linkedin?: string;
  /** What this reviewer checks on a page, in the reviewer's scope statement. */
  scope: string;
  /** Verticals this reviewer covers. */
  verticals: string[];
  /** Month the reviewer joined, YYYY-MM. */
  since: string;
  /** True for the in-house editorial team (an Organization, not a Person). */
  isTeam?: boolean;
}

// The in-house editorial team only. Add a named, credentialed reviewer (for
// example a CFP or CPA for rollover and tax pages) only once a real person has
// agreed to review - never invent a person or a credential.
export const REVIEWERS: Reviewer[] = [
  {
    slug: "editorial-team",
    name: "Gold IRA Planet Editorial Team",
    credentials: [],
    jobTitle: "Editorial team",
    headline: "The in-house team that researches, writes and fact-checks every page on Gold IRA Planet.",
    shortBio:
      "The Gold IRA Planet Editorial Team researches gold IRA companies, fees and IRA rules, and writes and fact-checks every page on the site. We compare the same facts for every company and cite the IRS, the tax code and federal regulators for rules and warnings.",
    longBio: [
      "The Gold IRA Planet Editorial Team writes and maintains every review, comparison and guide on the site. For each company we collect the same fact sheet - minimum investment, setup and yearly fees, storage options, buyback terms, years in business, BBB, BCA and Trustpilot ratings, and any regulator or court actions we can find - and date it.",
      "Rules and limits (contribution limits, rollover rules, eligible metals, storage and RMDs) are checked against IRS publications and the tax code. Scam and red-flag content is based on published actions and advisories from the CFTC, SEC and state regulators.",
      "The team is not made up of licensed financial advisers, and nothing on the site is financial, tax or legal advice. Company fees and minimums are approximate third-party snapshots; we ask readers to confirm current terms in writing before they invest.",
    ],
    image: { src: "/logo-mark.png", webp: "/logo-mark.png", thumb: "/logo-mark.png", width: 128, height: 128 },
    licensure: [],
    education: [],
    experience: [],
    specialties: ["Gold IRA fees", "401(k) and IRA rollovers", "IRS rules for precious metals IRAs", "Precious metals scams and red flags"],
    selectedWork: [],
    sameAs: [],
    scope:
      "Checks every factual statement on a page - fees, minimums, ratings, IRA rules and regulator actions - against the company's published information, third-party sources and government sources, and updates the page date when it changes.",
    verticals: ["gold-ira"],
    since: "2026-10",
    isTeam: true,
  },
];

/** The reviewer named sitewide on content pages. */
export const SITE_REVIEWER_SLUG = "editorial-team";

// ───── Review log ─────
// Keyed by the site path (e.g. "/", "/reviews/goldco").
// An entry means the named reviewer actually reviewed that page on that date.
// Entries are added ONLY when the operator confirms the page was reviewed.
// Never backfill dates. Until a page has an entry, its review bar names the
// editorial team without claiming that page was reviewed, and no
// `reviewedBy` / `lastReviewed` is emitted in its structured data.
export interface PageReview {
  reviewer: string; // Reviewer.slug
  reviewedAt: string; // YYYY-MM-DD
}

// Add entries only when the operator confirms the reviewer reviewed that page,
// e.g. "/reviews/goldco": { reviewer: "editorial-team", reviewedAt: "2026-11-01" }.
export const REVIEW_LOG: Record<string, PageReview> = {};

export function getReviewer(slug: string = SITE_REVIEWER_SLUG): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}

export function reviewerDisplayName(r: Reviewer): string {
  return r.credentials.length ? `${r.name}, ${r.credentials.join(", ")}` : r.name;
}

export function reviewerUrl(r: Reviewer): string {
  return `${SITE_ORIGIN}/reviewers/${r.slug}`;
}

export function reviewerPath(r: Reviewer): string {
  return `/reviewers/${r.slug}`;
}

/** Normalize a path for the log: strip origin, query, trailing slash. */
function logKey(path: string): string {
  let p = path.replace(/^https?:\/\/[^/]+/, "").split("?")[0];
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
}

export function getPageReview(path: string): (PageReview & { reviewerProfile: Reviewer }) | null {
  const entry = REVIEW_LOG[logKey(path)];
  if (!entry) return null;
  const reviewerProfile = getReviewer(entry.reviewer);
  if (!reviewerProfile) return null;
  return { ...entry, reviewerProfile };
}

/** Schema.org Person (or Organization, for the editorial team) for a
 *  reviewer, with a stable @id reused on every page. */
export function reviewerPersonSchema(r: Reviewer) {
  if (r.isTeam) {
    return {
      "@type": "Organization",
      "@id": `${reviewerUrl(r)}#person`,
      name: r.name,
      description: r.shortBio,
      url: reviewerUrl(r),
      logo: `${SITE_ORIGIN}${r.image.src}`,
      parentOrganization: { "@type": "Organization", name: "Gold IRA Planet", url: SITE_ORIGIN },
      knowsAbout: r.specialties,
    };
  }
  const schema: Record<string, unknown> = {
    "@type": "Person",
    "@id": `${reviewerUrl(r)}#person`,
    name: r.name,
    honorificSuffix: r.credentials.join(", "),
    jobTitle: r.jobTitle,
    description: r.shortBio,
    url: reviewerUrl(r),
    image: `${SITE_ORIGIN}${r.image.src}`,
    worksFor: { "@type": "Organization", name: "Gold IRA Planet", url: SITE_ORIGIN },
    knowsAbout: r.specialties,
    alumniOf: r.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    hasCredential: [
      ...r.licensure.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: c.title,
        recognizedBy: { "@type": "Organization", name: c.issuer },
      })),
      ...r.education.map((e) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: e.degree,
        recognizedBy: { "@type": "CollegeOrUniversity", name: e.school },
      })),
    ],
  };
  if (r.sameAs.length) schema.sameAs = r.sameAs;
  return schema;
}

/**
 * Schema fragment for a content page: `reviewedBy` + `lastReviewed` when the
 * page is in the review log, nothing otherwise. Spread into Article/WebPage.
 */
export function pageReviewSchema(path: string): Record<string, unknown> {
  const review = getPageReview(path);
  if (!review) return {};
  return {
    reviewedBy: { "@id": `${reviewerUrl(review.reviewerProfile)}#person` },
    lastReviewed: review.reviewedAt,
  };
}

/** Standalone JSON-LD document for a reviewer Person (adds @context). */
export function reviewerPersonJsonLd(r: Reviewer): Record<string, unknown> {
  return { "@context": "https://schema.org", ...reviewerPersonSchema(r) };
}
