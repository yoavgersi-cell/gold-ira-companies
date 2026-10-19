import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SITE_ORIGIN, REVIEWERS, reviewerDisplayName, reviewerPath, reviewerPersonSchema } from "@/data/reviewers";

const CANONICAL = `${SITE_ORIGIN}/editorial-policy`;
const TITLE = "Editorial Policy: How We Research Gold IRA Companies";
const DESCRIPTION =
  "How Gold IRA Planet researches gold IRA companies and IRA rules, what we verify, what we do not, how update dates work, and how to report an error.";
const UPDATED = "2026-10-19";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL, type: "article", images: [{ url: `${SITE_ORIGIN}/opengraph-image`, width: 1200, height: 630 }], },
};

export default function EditorialPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": CANONICAL,
    url: CANONICAL,
    name: TITLE,
    description: DESCRIPTION,
    dateModified: UPDATED,
    isPartOf: { "@type": "WebSite", name: "Gold IRA Planet", url: SITE_ORIGIN },
    about: { "@type": "Organization", name: "Gold IRA Planet", url: SITE_ORIGIN, member: REVIEWERS.map(reviewerPersonSchema) },
  };
  const ext = "font-semibold text-[#1E3A5F] hover:underline";

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Editorial policy" }]} />
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-[#191919] sm:text-[36px]">How we research and check our content</h1>
          <p className="mt-3 max-w-[720px] text-[16px] leading-relaxed text-gray-500">
            Gold IRA Planet compares gold IRA companies and publishes plain-English guides on how gold IRAs work,
            what they cost and where buyers get hurt. This page says exactly how that content is produced, what we
            verify, and what we do not.
          </p>
          <p className="mt-3 text-[13px] text-gray-500">Last updated {UPDATED}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 text-[16px] leading-[1.75] text-gray-800 sm:px-6">
        {REVIEWERS.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-3 text-[24px] font-bold text-[#191919]">Who reviews</h2>
            <div className="space-y-3">
              {REVIEWERS.map((r) => (
                <Link key={r.slug} href={reviewerPath(r)} className="flex items-center gap-4 rounded-xl border border-[#E5E5E5] bg-white p-4 transition-colors hover:border-[#B8862B]/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image.thumb} alt={r.name} width={56} height={56} className={`h-14 w-14 ${r.isTeam ? "rounded-lg object-contain" : "rounded-full object-cover"}`} />
                  <span>
                    <span className="block text-[15px] font-bold text-[#191919]">{reviewerDisplayName(r)}</span>
                    <span className="block text-[13px] text-gray-500">{r.jobTitle} · {r.headline}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mb-10">
          <h2 className="mb-3 text-[24px] font-bold text-[#191919]">What we verify</h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>The same fact sheet for every company: minimum investment, setup and yearly fees, storage options, buyback terms, current promotion and years in business.</li>
            <li>Ratings (BBB, BCA, Trustpilot with review count) as captured on the date we note next to them.</li>
            <li>Regulator and court actions, only when there is a public record (CFTC, SEC, state attorneys general, court filings).</li>
            <li>IRA rules - contribution limits, rollovers, eligible metals, storage and RMDs - against IRS publications and the tax code.</li>
            <li>Whether a statement is supported by the source it cites, and whether the source is current.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[24px] font-bold text-[#191919]">What we do not verify</h2>
          <p className="mb-3">
            Gold IRA companies rarely publish full fee schedules, so many figures come from third-party reviews that
            often disagree. Every fee and minimum on this site is an approximate snapshot, never a quote, and we cannot
            see the markup a company will charge on a specific coin or bar on a given day. The company&rsquo;s and
            custodian&rsquo;s written terms, not our summary, decide what you pay.
          </p>
          <p>
            Rankings and &ldquo;best for&rdquo; verdicts are editorial: our editors set the order, under the method on{" "}
            <Link href="/how-we-rank" className={ext}>how we rank</Link>. Some companies pay us when readers request a
            kit or open an account through our links. That can affect which companies we list and where, but it never
            changes a fact, fee, limitation or warning we report.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[24px] font-bold text-[#191919]">How update dates work</h2>
          <p>
            Each review, comparison and guide shows a &ldquo;last updated&rdquo; date. It changes only when the content
            was actually re-checked, never automatically on every page load. We re-check a page when a company changes its
            fees, minimums or terms, when IRS limits change, or when a reader reports something out of date.
          </p>
        </section>

        <section className="mb-10 rounded-2xl border border-[#FBF5E6] bg-[#FBF5E6]/50 p-6">
          <h2 className="mb-2 flex items-center gap-2 text-[18px] font-bold text-[#191919]">
            <ShieldCheck className="h-5 w-5 text-[#B8862B]" strokeWidth={2} />
            Found an error?
          </h2>
          <p className="text-[15px] leading-[1.75] text-gray-600">
            Tell us through our <Link href="/contact" className={ext}>contact page</Link>, with the
            page address and the statement in question. Confirmed errors are corrected and the page date is updated.
          </p>
        </section>

        <p className="text-[13px] leading-relaxed text-gray-500">
          Nothing on this site is financial, tax or legal advice, and Gold IRA Planet is not a broker, dealer or
          custodian. Fees and minimums vary by account size and custodian and change often. Confirm current terms in
          writing before you invest.
        </p>
      </div>
    </div>
  );
}
