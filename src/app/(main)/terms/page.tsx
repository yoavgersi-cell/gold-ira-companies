import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of Gold IRA Planet (goldiraplanet.com), including our informational-only nature, affiliate disclosure, and limitation of liability.",
  alternates: { canonical: "https://www.goldiraplanet.com/terms" },
};

const UPDATED = "October 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-[#191919]">Terms of Service</h1>
      <p className="mb-6 text-sm text-gray-500">Last updated: {UPDATED}</p>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of goldiraplanet.com
          (the &quot;Site&quot;), operated by Gold IRA Planet (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By using the Site, you agree to these Terms. If you do not agree, please do
          not use the Site.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Informational Purpose Only - Not Financial Advice</h2>
        <p>
          Gold IRA Planet is an independent comparison and information publisher. All content is provided
          for general informational purposes only and is <strong>not financial, investment, tax or legal
          advice</strong>. We are not a broker, dealer or custodian, and we do not sell precious metals,
          hold IRA assets or open accounts. Fees, minimums and promotions vary by company, account size and
          custodian, and the company&apos;s and custodian&apos;s written agreements always control. Always
          confirm current terms in writing before you invest or move retirement money.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Affiliate Disclosure</h2>
        <p>
          The Site contains affiliate links. If you click a link to a company and take a qualifying
          action, we may earn a commission at no additional cost to you. Our editors set the ranking order,
          and compensation can affect which companies we list and where - see our{" "}
          <Link href="/disclaimer" className="font-semibold text-[#1E3A5F] hover:underline">disclosure</Link>{" "}
          and{" "}
          <Link href="/how-we-rank" className="font-semibold text-[#1E3A5F] hover:underline">ranking methodology</Link>.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">No Warranty on Accuracy</h2>
        <p>
          We work to keep information accurate and current, but company fees, minimums, promotions and
          policies change frequently, and many figures on the Site are approximate third-party snapshots.
          The Site is provided &quot;as is&quot; without warranties of any kind. Always confirm current
          fees, minimums and the markup on your metals directly with the company and your custodian before
          making a decision.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Intellectual Property</h2>
        <p>
          The content, design, and branding on this Site are owned by Gold IRA Planet or its licensors and
          are protected by applicable intellectual-property laws. You may not copy, reproduce, or
          redistribute our content without permission. Third-party names and logos are the property of
          their respective owners and are used for identification only.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Third-Party Websites</h2>
        <p>
          The Site links to third-party websites we do not control. We are not responsible for the
          content, products, services, or privacy practices of those sites. Accessing them is at your
          own risk and subject to their terms.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Gold IRA Planet and its operators will not be liable for
          any indirect, incidental, or consequential damages arising from your use of the Site or
          reliance on its content, including investment, rollover or purchase decisions. Your use of
          the Site is at your own risk.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Eligibility</h2>
        <p>The Site is intended for adults aged 18 and older.</p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Changes take effect when posted, and continued
          use of the Site means you accept the revised Terms.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">Contact</h2>
        <p>
          Questions about these Terms? Reach us via our{" "}
          <Link href="/contact" className="font-semibold text-[#1E3A5F] hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
