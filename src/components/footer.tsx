import Link from "next/link";
import { getConfig } from "@/lib/config-store";

// Single-site gold IRA footer. Category links are absolute site routes. Popular
// comparisons are resolved from live config, so an entry that isn't a real
// battle is silently dropped (the footer never renders a dead link).
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Reviews",
    links: [
      { label: "American Hartford Gold", href: "/reviews/american-hartford-gold" },
      { label: "Goldco", href: "/reviews/goldco" },
      { label: "Augusta Precious Metals", href: "/reviews/augusta-precious-metals" },
      { label: "American Gold and Silver Group", href: "/reviews/american-gold-and-silver-group" },
      { label: "All Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "What Is a Gold IRA?", href: "/articles/what-is-a-gold-ira" },
      { label: "401(k) to Gold IRA Rollover", href: "/articles/401k-to-gold-ira-rollover" },
      { label: "Gold IRA Fees Explained", href: "/articles/gold-ira-fees" },
      { label: "IRS-Approved Precious Metals", href: "/articles/irs-approved-precious-metals" },
      { label: "Gold IRA Scams & Red Flags", href: "/articles/gold-ira-scams-red-flags" },
      { label: "Can You Store IRA Gold at Home?", href: "/articles/can-you-store-ira-gold-at-home" },
      { label: "Fee Calculator", href: "/gold-ira-fee-calculator" },
      { label: "All Guides", href: "/articles" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Rank", href: "/how-we-rank" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Contact", href: "/contact" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

async function featuredComparisons(): Promise<{ label: string; href: string }[]> {
  try {
    const cfg = await getConfig();
    const nameOf = (id: string) => cfg.providers.find((p) => p.id === id)?.name ?? id;
    return (cfg.battles ?? []).slice(0, 5).map((b) => ({
      label: b.matchupLabel || `${nameOf(b.provider1Id)} vs ${nameOf(b.provider2Id)}`,
      href: `/${b.slug}`,
    }));
  } catch {
    return [];
  }
}

export async function Footer() {
  const comparisons = await featuredComparisons();
  const columns = [
    ...COLUMNS,
    ...(comparisons.length > 0 ? [{ title: "Popular Comparisons", links: comparisons }] : []),
  ];

  return (
    <footer className="mt-auto border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand blurb */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-[13px] leading-relaxed text-gray-500">
              <span className="font-bold"><span className="text-[#0F2540]">Gold IRA</span> <span className="text-[#B8862B]">Planet</span></span> is an independent comparison
              publisher for gold IRA companies - minimums, fees, storage and buyback terms.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-2.5 text-[12px] font-bold uppercase tracking-wider text-[#191919]">{col.title}</h2>
              <nav className="space-y-1.5">
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="block text-[13px] text-gray-500 hover:text-[#1E3A5F]">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="mb-2 text-xs font-semibold text-gray-600">
            Not financial advice. Gold IRA Planet is not a broker, dealer or custodian.
          </p>
          <p className="mb-4 text-xs text-gray-500">
            <strong className="text-gray-500">Affiliate Disclosure:</strong> Gold IRA Planet is reader-supported. Some
            companies listed pay us when you request a kit or open an account through our links. This can affect
            which companies appear and where, but not the facts, fees or warnings we publish for each company.
          </p>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[12px] text-gray-500">
              &copy; {new Date().getFullYear()} Gold IRA Planet. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-500">
              Fees and minimums are approximate. Confirm current terms with the company and your custodian before you invest.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
