import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, BookOpen, Search, BarChart3, ListChecks } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "About Gold IRA Planet - Mission, Team & Methodology" },
  description:
    "How goldiraplanet.com compares gold IRA companies: the same fact sheet for every company, plain-English guides, and clear disclosure of how we make money.",
  alternates: {
    canonical: "https://www.goldiraplanet.com/about",
  },
};

export default async function AboutPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gold IRA Planet",
    url: "https://www.goldiraplanet.com",
    description:
      "Independent comparison publisher for gold IRA companies. Not a broker, dealer or custodian.",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            About Gold IRA Planet
          </h1>
          <p className="mt-3 max-w-[600px] text-[17px] leading-relaxed text-gray-600">
            We help pre-retirees and retirees compare gold IRA companies in plain English - minimums,
            real fees, storage, buyback terms and complaint history, side by side.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our Mission</h2>
          <p className="mb-4 text-[17px] leading-[1.75] text-gray-600">
            Gold IRA companies rarely publish their fees, and the cost that hurts buyers most - the
            markup on the coins and bars themselves - is almost never shown. Fee figures quoted around
            the web often conflict and go out of date, and regulators have brought cases against dealers
            that charged retirement savers markups of 100% or more.
          </p>
          <p className="text-[17px] leading-[1.75] text-gray-600">
            Gold IRA Planet exists to make this decision clearer. We collect the same facts for every
            company, explain the rules and the real costs in plain English, and point to the warning
            signs regulators have published - so you can ask the right questions before you move any
            retirement money.
          </p>
        </section>

        {/* What we do - icons grid */}
        <section className="mb-12">
          <h2 className="mb-6 text-[22px] font-bold text-[#191919]">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Search, title: "Research Companies", desc: "We gather each company's minimum, setup and yearly fees, storage options, buyback terms, ratings and regulator history." },
              { icon: BarChart3, title: "Compare Side by Side", desc: "Every company gets the same fact sheet, so you can compare them directly in our tables, reviews and head-to-head pages." },
              { icon: BookOpen, title: "Explain the Rules", desc: "Our guides cover rollovers, eligible metals, storage rules, taxes and RMDs, fees and markups, and how to spot a scam." },
            ].map(({ icon: Icon, title, desc }) => (
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

        {/* Editorial team */}
        <ExpertTeam experts={experts} />

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How We Compare Companies</h2>
          <p className="mb-6 text-[17px] leading-[1.75] text-gray-600">
            We look at the same factors for every company and update them as companies change their
            fees, minimums and promotions.
          </p>
          <ul className="space-y-3">
            {[
              { category: "Minimum investment", desc: "The smallest IRA or purchase the company will accept." },
              { category: "Fees and transparency", desc: "Setup, yearly custodian and storage fees, and whether the company publishes its prices or will put its markup in writing." },
              { category: "Buyback and storage", desc: "What the company says about buying your metal back, and which approved depositories it uses." },
              { category: "Track record", desc: "Years in business, BBB and BCA ratings, Trustpilot score and review count, and any regulator or court actions." },
            ].map(({ category, desc }) => (
              <li key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-[#B8862B]" strokeWidth={2} />
                <div>
                  <p className="text-[15px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[14px] text-gray-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[16px] leading-[1.75] text-gray-600">
            Our editors set the ranking order, and some companies pay us - read exactly how in{" "}
            <Link href="/how-we-rank" className="font-semibold text-[#1E3A5F] hover:underline">
              how we rank
            </Link>
            .
          </p>
        </section>

        {/* Editorial standards */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Editorial Standards</h2>
          <div className="space-y-4 text-[17px] leading-[1.75] text-gray-600">
            <p>
              <strong className="text-[#191919]">Same facts for everyone.</strong> Every company gets the
              same fact sheet and the same caveats, whether it pays us or not.
            </p>
            <p>
              <strong className="text-[#191919]">Transparency about money.</strong> Some companies pay us
              when you request a kit or open an account through our links. That can affect which companies
              we list and in what order. It does not change the facts, fees or warnings we publish.
            </p>
            <p>
              <strong className="text-[#191919]">No fake social proof.</strong> We do not publish invented
              reviews, testimonials, &quot;people viewing now&quot; counters or countdown timers.
            </p>
            <p>
              <strong className="text-[#191919]">Sources and dates.</strong> IRA rules are checked against
              IRS publications and the tax code; scam warnings come from federal and state regulators. Pages
              show when they were last updated. Read our full{" "}
              <Link href="/editorial-policy" className="font-semibold text-[#1E3A5F] hover:underline">
                editorial policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Trust signals */}
        <section className="mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Award className="h-8 w-8 shrink-0 text-[#1E3A5F]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">{config.providers.length}</p>
                <p className="text-[13px] text-gray-600">Companies reviewed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <BookOpen className="h-8 w-8 shrink-0 text-[#1E3A5F]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">{(config.articles ?? []).length}</p>
                <p className="text-[13px] text-gray-600">Plain-English guides</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Shield className="h-8 w-8 shrink-0 text-[#1E3A5F]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">0</p>
                <p className="text-[13px] text-gray-600">Fake reviews or countdown timers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[16px] leading-[1.75] text-gray-600">
              Gold IRA Planet is not a broker, dealer or custodian and does not sell precious metals. The
              information on this site is general information, not financial, tax or legal advice. Fees,
              minimums and promotions are approximate, vary by account size and custodian, and change over
              time. The company&apos;s and custodian&apos;s written terms - not our summary - determine what
              you pay. Read the full{" "}
              <Link href="/disclaimer" className="font-semibold text-[#1E3A5F] hover:underline">
                disclaimer
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[17px] font-bold text-[#191919]">Ready to compare gold IRA companies?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[48px] items-center justify-center rounded-lg bg-[#1E4E79] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#163B5C]"
            >
              Compare Companies
            </Link>
            <Link
              href="/reviews"
              className="inline-flex h-[48px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-[15px] font-semibold text-[#191919] transition-colors hover:bg-gray-50"
            >
              Read Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
