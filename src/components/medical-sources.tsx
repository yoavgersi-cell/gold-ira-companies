import { BookOpen } from "lucide-react";

// Authoritative outgoing citations, per vertical. Every entry is a real,
// stable government or legal-reference page - never invent or approximate a
// citation. Rendered as a "Sources" section on articles, reviews and
// comparisons so pages visibly ground their claims. (File and type names are
// kept from the template to avoid churn; nothing here is medical.)
export interface MedicalSource {
  label: string;
  publisher: string;
  href: string;
}

export const SOURCES_BY_VERTICAL: Record<string, MedicalSource[]> = {
  "gold-ira": [
    {
      label: "Retirement topics - IRA contribution limits",
      publisher: "Internal Revenue Service",
      href: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-ira-contribution-limits",
    },
    {
      label: "Publication 590-A: Contributions to Individual Retirement Arrangements (IRAs)",
      publisher: "Internal Revenue Service",
      href: "https://www.irs.gov/publications/p590a",
    },
    {
      label: "Publication 590-B: Distributions from Individual Retirement Arrangements (IRAs)",
      publisher: "Internal Revenue Service",
      href: "https://www.irs.gov/publications/p590b",
    },
    {
      label: "26 U.S. Code § 408 - Individual retirement accounts",
      publisher: "Legal Information Institute, Cornell Law School",
      href: "https://www.law.cornell.edu/uscode/text/26/408",
    },
    {
      label: "10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals",
      publisher: "Commodity Futures Trading Commission (CFTC)",
      href: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html",
    },
    {
      label: "CFTC, SEC and states charge Red Rock Secured in precious metals fraud",
      publisher: "Commodity Futures Trading Commission (CFTC)",
      href: "https://www.cftc.gov/PressRoom/PressReleases/8704-23",
    },
    {
      label: "Investor Alert: Self-Directed IRAs and the Risk of Fraud",
      publisher: "U.S. Securities and Exchange Commission (Investor.gov)",
      href: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-27",
    },
    {
      label: "FTC's Endorsement Guides: What People Are Asking",
      publisher: "Federal Trade Commission",
      href: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking",
    },
  ],
};

// Compact citation list for the bottom of YMYL content pages. Renders nothing
// for verticals without a curated source list yet.
export function MedicalSources({ vertical }: { vertical: string }) {
  const sources = SOURCES_BY_VERTICAL[vertical];
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
      <div className="mb-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-[#1E3A5F]" strokeWidth={2} />
        <h2 className="text-[15px] font-bold uppercase tracking-[0.05em] text-[#191919]">
          Sources &amp; references
        </h2>
      </div>
      <p className="mb-4 text-[13px] leading-relaxed text-gray-500">
        IRA rules and limits on this page come from the IRS and the tax code; scam warnings come from
        federal regulators. Company fees and terms are approximate third-party snapshots. This content
        is general information, not financial, tax or legal advice - always confirm current fees and
        terms in writing with the company and your custodian before you invest.
      </p>
      <ol className="space-y-2">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
            <span className="shrink-0 font-semibold text-gray-500">{i + 1}.</span>
            <span className="text-gray-600">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1E3A5F] underline underline-offset-2 hover:text-[#16304F]"
              >
                {s.label}
              </a>{" "}
              <span className="text-gray-500">- {s.publisher}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// One-line affiliate disclosure under the byline, above the first affiliate
// link (FTC: clear, conspicuous, before the links). Deliberately compact - the
// "not financial advice" disclaimer lives once at the bottom of these pages
// (SourcesMethodology footer, or the MedicalSources intro below) instead of
// being repeated here.
export function TrustDisclosure({ disclaimerHref }: { disclaimerHref: string }) {
  return (
    <p className="mt-2.5 max-w-[720px] text-[11.5px] leading-[1.55] text-gray-500 sm:mt-3 sm:text-[12px]">
      Some companies on this page pay us when you request a kit or open an account through our
      links. This can affect which companies we list and where, but not the facts we publish (
      <a href={disclaimerHref} className="font-medium text-[#1E3A5F] hover:underline">
        our disclosure
      </a>
      ). Not financial advice.
    </p>
  );
}
