import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer & Affiliate Disclosure",
  description:
    "Not financial advice; not a broker, dealer or custodian; how affiliate compensation works; and why every fee on goldiraplanet.com is approximate.",
  alternates: {
    canonical: "https://www.goldiraplanet.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-[#191919]">Disclaimer &amp; Affiliate Disclosure</h1>
      <div className="space-y-4 text-[17px] leading-relaxed text-gray-700">
        <h2 className="text-xl font-semibold text-[#191919]">
          Not Financial, Tax or Legal Advice
        </h2>
        <p>
          Everything on Gold IRA Planet is general information for education and comparison. It is not
          financial, investment, tax or legal advice, and it is not a recommendation to buy, sell or hold
          any investment. We do not know your finances, goals or tax situation. Before you move retirement
          money, consider talking to a fee-only financial planner, a CPA or a tax attorney.
        </p>
        <p>
          Precious metals can lose value, pay no interest or dividends, and cost money to buy, store and
          sell. Past performance does not guarantee future results, and nothing on this site promises a
          return.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          We Are Not a Broker, Dealer or Custodian
        </h2>
        <p>
          Gold IRA Planet does not sell precious metals, hold IRA assets, store metal, open accounts or
          process rollovers. Those services are provided by the companies and custodians we write about,
          under their own agreements. Any account you open is between you and them.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Affiliate Compensation (FTC Disclosure)
        </h2>
        <p>
          Gold IRA Planet is reader-supported. Some companies listed on this site pay us when you click our
          links and then request an information kit, schedule a call or open an account. You do not pay
          anything extra because of this.
        </p>
        <p>
          Our editors set the ranking order, and affiliate relationships can affect which companies we list
          and where they appear. They do not change the facts we publish: minimums, fees, buyback terms,
          ratings, complaints and regulator actions are reported the same way for every company, whether it
          pays us or not. Read{" "}
          <Link href="/how-we-rank" className="font-semibold text-[#1E3A5F] hover:underline">
            how we rank
          </Link>{" "}
          for details.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Fees, Minimums and Ratings Are Approximate
        </h2>
        <p>
          Gold IRA companies rarely publish full fee schedules. Fees, minimums, promotions and ratings on this
          site are approximate snapshots, mostly from third-party sources that often disagree, and they
          change frequently. They also vary by account size, product and custodian. The markup or spread on
          the metal itself is usually not published and can be the largest cost. Always get current fees,
          minimums and the markup on your specific products in writing from the company and your custodian
          before you invest. Their written terms - not our summary - determine what you pay.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          No Endorsement by Government Agencies
        </h2>
        <p>
          The IRS does not approve or endorse precious metals dealers. References to IRS rules, the tax code,
          the CFTC, the SEC or other agencies are for information only and do not mean any agency endorses
          this site or any company on it.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Third-Party Content and Trademarks
        </h2>
        <p>
          Company names and logos belong to their owners and are used for identification only. Links to
          other websites are provided for convenience; we are not responsible for their content.
        </p>
      </div>
    </div>
  );
}
