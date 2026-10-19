import type { Metadata } from "next";
import Link from "next/link";
import { getConfig } from "@/lib/config-store";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FeeCalculator } from "@/components/fee-calculator";

export const revalidate = 60;

const CANONICAL = "https://www.goldiraplanet.com/gold-ira-fee-calculator";

export const metadata: Metadata = {
  title: { absolute: "Gold IRA Fee Calculator: Total Cost Over 5, 10 or 20 Years" },
  description:
    "Estimate what a gold IRA really costs: setup fee, yearly custodian and storage fees, and the dealer markup - plus how much gold has to rise just to break even.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Gold IRA Fee Calculator",
    description: "Estimate setup, yearly and markup costs of a gold IRA and the price rise needed to break even.",
    url: CANONICAL,
    type: "website",
  },
};

export default async function FeeCalculatorPage() {
  const config = await getConfig();
  const companies = config.ranking.providerOrder
    .map((id) => config.providers.find((p) => p.id === id))
    .filter((p) => p !== undefined)
    .map((p) => ({ id: p.id, name: p.name, setupFee: p.setupFee, annualFee: p.annualFee }));

  return (
    <div className="mx-auto max-w-[900px] px-4 py-6 sm:py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gold IRA Fee Calculator" }]} />
      <h1 className="mt-3 text-[30px] font-extrabold leading-tight text-[#191919] sm:text-[38px]">Gold IRA Fee Calculator</h1>
      <p className="mt-3 text-[17px] leading-relaxed text-gray-700">
        Most gold IRA companies charge a flat yearly fee for the custodian and the vault, but the bigger cost is usually the markup built into the
        price of the coins or bars. Enter your numbers to see the total and how much gold has to rise before you break even.
      </p>

      <FeeCalculator companies={companies} />

      <section className="mt-10 space-y-4 text-[17px] leading-relaxed text-gray-800">
        <h2 className="text-[24px] font-bold text-[#191919]">How this estimate works</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Setup and yearly fees</strong> are the approximate figures we track for each company (custodian administration plus depository
            storage). They are flat dollar amounts, so they weigh more heavily on smaller accounts.
          </li>
          <li>
            <strong>Markup</strong> is the gap between what you pay for the metal and its spot value. Common bullion often carries roughly 5-10%;
            premium or proof coins can carry far more. Ask the company to state it in writing before you buy.
          </li>
          <li>
            <strong>Break-even</strong> is how much the price of gold would need to rise over the period just to cover the markup and fees - before
            you make any gain.
          </li>
        </ul>
        <p>
          Read the full breakdown in <Link className="font-semibold text-[#2E6DA4] hover:underline" href="/articles/gold-ira-fees-explained">gold IRA fees explained</Link>, or{" "}
          <Link className="font-semibold text-[#2E6DA4] hover:underline" href="/">compare gold IRA companies</Link>.
        </p>
        <p className="text-[14px] italic text-gray-500">
          This calculator gives a rough estimate for education only. It is not financial, tax or legal advice. Fees vary by custodian, storage type and
          account size, and promotions can change the first-year cost.
        </p>
      </section>
    </div>
  );
}
