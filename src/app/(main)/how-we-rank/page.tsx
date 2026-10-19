import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Database, ShieldCheck, Scale, Trophy, RefreshCw, Check, X, HandCoins } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LastUpdated } from "@/components/last-updated";
import { CONTENT_LAST_UPDATED } from "@/lib/config";

export const revalidate = 60;

const ORIGIN = "https://www.goldiraplanet.com";
const CANONICAL = `${ORIGIN}/how-we-rank`;

export const metadata: Metadata = {
  title: { absolute: "How We Rank Gold IRA Companies | Gold IRA Planet" },
  description:
    "How we compare gold IRA companies: minimums, setup and yearly fees, price transparency, buyback terms, storage, track record and regulator actions - and how we make money.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How We Rank & Review Gold IRA Companies - Our Methodology",
    description:
      "The facts we collect for every gold IRA company, where they come from, who sets the ranking order and how we are paid.",
    url: CANONICAL,
    type: "article",
    images: [{ url: `${ORIGIN}/opengraph-image`, width: 1200, height: 630 }],
  },
};

// The fact sheet collected for every company - identical fields for partners
// and non-partners (see src/lib/seeds/gold-ira/shared.ts).
const FACTORS = [
  { category: "Minimum investment", desc: "The smallest IRA balance or purchase the company accepts. It is the first filter for most readers, so it sits at the top of every comparison." },
  { category: "Setup and yearly fees", desc: "One-time setup or application fees, yearly custodian or admin fees and storage fees - and whether they are charged by the company or the custodian." },
  { category: "Fee and price transparency", desc: "Whether the company publishes its fees and metal prices online, or will state its markup in writing before you pay." },
  { category: "Buyback terms", desc: "What the company says about buying your metal back - a written guarantee, a program, or \"in practice\" only - and any liquidation fee." },
  { category: "Storage options", desc: "Which approved depositories the company works with, and whether segregated storage is offered." },
  { category: "Years in business", desc: "How long the company has been operating, as reported." },
  { category: "BBB, BCA and Trustpilot ratings", desc: "Better Business Bureau and Business Consumer Alliance ratings, and Trustpilot score with its review count - always as a dated snapshot." },
  { category: "Regulator and court actions", desc: "Actions by the CFTC, SEC, state attorneys general or courts that we can find in public records. Rumors without a record are not reported as fact." },
];

const METHOD_FAQS = [
  {
    question: "Who decides the ranking order?",
    answer:
      "Our editors. We weigh the facts above, but the final order is an editorial judgment, not the output of a formula. Some companies we list pay us, and that can affect which companies appear and where. We say so on every page with affiliate links.",
  },
  {
    question: "Does being a paying partner change the facts you publish?",
    answer:
      "No. Minimums, fees, buyback terms, ratings and regulator actions are stated the same way for every company, paying or not - including complaints, high minimums and fees a company does not publish.",
  },
  {
    question: "How current are the fees and minimums?",
    answer:
      "They are dated snapshots, mostly from third-party reviews, because gold IRA companies rarely publish full fee schedules. Sources often disagree, so we show ranges and label figures as approximate. Always confirm current fees, minimums and the markup on your metals in writing before you invest.",
  },
  {
    question: "Why don't you show the markup for each company?",
    answer:
      "Because almost no company publishes it, and it varies by product and by day. We explain how markups work and what to ask in our fee guide instead of guessing a number.",
  },
];

const SOURCES = [
  { icon: Database, title: "Company materials", desc: "Published fees, minimums, promotions, buyback and storage policies from each company's own site and disclosures, where available." },
  { icon: ClipboardCheck, title: "Third-party reviews and ratings", desc: "Fee and minimum snapshots from established review sites, plus BBB, BCA and Trustpilot profiles. Where sources disagree, we show the range." },
  { icon: Scale, title: "Government and legal sources", desc: "IRS publications and the tax code for IRA rules, and CFTC, SEC and state regulator releases for enforcement actions and investor alerts." },
  { icon: ShieldCheck, title: "Public records", desc: "Court filings and settlements that we can verify. We do not repeat lawsuit rumors that have no record behind them." },
];

export default async function HowWeRankPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How We Rank & Review Gold IRA Companies - Our Methodology",
    description:
      "The facts we collect for every gold IRA company, where they come from, who sets the ranking order and how we are paid.",
    url: CANONICAL,
    ...pageReviewSchema("/how-we-rank"),
    publisher: { "@type": "Organization", name: "Gold IRA Planet", url: ORIGIN },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
      { "@type": "ListItem", position: 2, name: "How We Rank", item: CANONICAL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: METHOD_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How We Rank" }]} />
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            How We Rank &amp; Review Gold IRA Companies
          </h1>
          <p className="mt-3 max-w-[640px] text-[17px] leading-relaxed text-gray-600">
            Every review and comparison on this site uses the same fact sheet for every company. Here is
            what we collect, where it comes from, who decides the order - and how we get paid.
          </p>
          <LastUpdated date={CONTENT_LAST_UPDATED} className="mt-4" />
          <MedicalReviewBar path="/how-we-rank" className="mt-4 max-w-[760px]" />
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Honest summary up top */}
        <section className="mb-12 rounded-2xl border border-[#B8862B]/30 bg-[#FBF5E6] p-6">
          <div className="flex items-start gap-4">
            <HandCoins className="mt-0.5 h-6 w-6 shrink-0 text-[#B8862B]" strokeWidth={2} />
            <div className="space-y-3 text-[16px] leading-[1.75] text-gray-700">
              <p>
                <strong className="text-[#191919]">The ranking order is set by our editors, and some
                companies pay us.</strong> When you request a kit or open an account through our links, a
                company may pay us. That can affect which companies we list and where they appear.
              </p>
              <p>
                <strong className="text-[#191919]">The facts are the same for every company.</strong>{" "}
                Minimums, fees, buyback terms, ratings and regulator actions are reported identically for
                companies that pay us and companies that do not.
              </p>
            </div>
          </div>
        </section>

        {/* Factors */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">What we compare</h2>
          <p className="mb-6 text-[17px] leading-[1.75] text-gray-600">
            For every company we collect the same eight things and date them:
          </p>
          <div className="space-y-3">
            {FACTORS.map(({ category, desc }) => (
              <div key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#B8862B]" strokeWidth={2.5} />
                <div>
                  <p className="text-[15px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[14px] leading-relaxed text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What moves our view */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">What counts in a company&rsquo;s favor - and against it</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.06em] text-emerald-700">
                <Check className="h-4 w-4" strokeWidth={2.5} /> In its favor
              </p>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-800">
                <li>Fees and prices published online</li>
                <li>Willingness to state the markup in writing</li>
                <li>A clear buyback policy</li>
                <li>A long track record and strong, high-volume ratings</li>
                <li>A clean regulator and court record</li>
                <li>No-pressure sales and real education</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.06em] text-amber-700">
                <X className="h-4 w-4" strokeWidth={2.5} /> Against it
              </p>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-800">
                <li>Fees available only on a sales call</li>
                <li>Pushing &quot;premium&quot;, proof or numismatic coins</li>
                <li>&quot;Free silver&quot; or &quot;no fee&quot; offers paid for through higher coin prices</li>
                <li>Recurring complaints about pricing or buybacks</li>
                <li>Regulator actions or court judgments</li>
                <li>Claims of being &quot;IRS-approved&quot; or promises of returns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integrity rules */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our integrity rules</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="divide-y divide-gray-100 text-[15px] leading-[1.75] text-gray-600">
              <p className="p-5"><strong className="text-[#191919]">No invented figures.</strong> If we cannot find a fee or rating, the page says so. Where sources disagree, we show the range and label it approximate.</p>
              <p className="p-5"><strong className="text-[#191919]">No fake reviews or social proof.</strong> We quote customer reviews only verbatim and linked to the source, and we never publish invented testimonials, &quot;people viewing now&quot; counters or countdown timers.</p>
              <p className="p-5"><strong className="text-[#191919]">Every promotion carries its condition.</strong> Fee waivers and free-metal offers are shown with the account size they require.</p>
              <p className="p-5"><strong className="text-[#191919]">Rules come from the source.</strong> Contribution limits, rollover rules, eligible metals, storage rules and RMDs are checked against IRS publications and the tax code.</p>
              <p className="p-5"><strong className="text-[#191919]">We don&rsquo;t repeat what we can&rsquo;t verify.</strong> Lawsuits and regulator actions appear only when there is a public record, no matter who they help or hurt.</p>
            </div>
          </div>
        </section>

        {/* Data sources */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Where our information comes from</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {SOURCES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#B8862B]/5">
                  <Icon className="h-5 w-5 text-[#1E3A5F]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1 text-[15px] font-bold text-[#191919]">{title}</h3>
                <p className="text-[14px] leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scores */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">What our ratings mean</h2>
          <p className="text-[17px] leading-[1.75] text-gray-600">
            The score out of 10 next to each company is our editorial rating, tied to its position in our
            ranking. It summarizes our view of the facts above; it is not a customer rating, a measure of
            investment performance or a recommendation to buy. Customer ratings (BBB, BCA, Trustpilot) are
            always shown separately and attributed to their source.
          </p>
        </section>

        {/* Head-to-head winners */}
        <section className="mb-12">
          <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <Trophy className="mt-0.5 h-6 w-6 shrink-0 text-[#B8862B]" strokeWidth={2} />
            <div>
              <h2 className="mb-2 text-[22px] font-bold text-[#191919]">How we pick a head-to-head winner</h2>
              <p className="text-[16px] leading-[1.75] text-gray-600">
                In a head-to-head comparison we go category by category - minimum, fees and transparency,
                buyback and promotions, and track record - and name the company that comes out ahead for
                most readers. We always say where the other company wins, because the better choice depends
                on your amount and what you value.
              </p>
            </div>
          </div>
        </section>

        {/* Freshness */}
        <section className="mb-12">
          <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <RefreshCw className="mt-0.5 h-6 w-6 shrink-0 text-[#1E3A5F]" strokeWidth={2} />
            <div>
              <h2 className="mb-2 text-[22px] font-bold text-[#191919]">Keeping pages current</h2>
              <p className="text-[16px] leading-[1.75] text-gray-600">
                Fees, minimums and promotions change often. We re-check them on a regular cycle and when we
                learn of a change, and every review and comparison shows when it was last updated.
              </p>
            </div>
          </div>
        </section>

        {/* Who's behind the reviews */}
        <ExpertTeam experts={experts} />

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[16px] leading-[1.75] text-gray-600">
              Gold IRA Planet is not a broker, dealer or custodian and does not sell precious metals. Nothing
              on this site is financial, tax or legal advice. Fees and minimums are approximate and change
              often - the company&rsquo;s and custodian&rsquo;s written terms determine what you pay. See our{" "}
              <Link href="/disclaimer" className="font-semibold text-[#1E3A5F] hover:underline">full disclaimer</Link>.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Methodology FAQs</h2>
          <div className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {METHOD_FAQS.map((f, i) => (
              <div key={i} className="p-6">
                <h3 className="mb-2 text-[16px] font-bold text-[#191919]">{f.question}</h3>
                <p className="text-[15px] leading-[1.75] text-gray-600">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[17px] font-bold text-[#191919]">See the comparison</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[48px] items-center justify-center rounded-lg bg-[#1E4E79] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#163B5C]"
            >
              Compare Gold IRA Companies
            </Link>
            <Link
              href="/reviews"
              className="inline-flex h-[48px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-[15px] font-semibold text-[#191919] transition-colors hover:bg-gray-50"
            >
              Read Our Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
