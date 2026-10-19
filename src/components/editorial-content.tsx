import Link from "next/link";

// Long-form homepage / battle-page editorial block. Every figure here comes
// from RESEARCH.md (third-party snapshots, Oct 2026) and is written as
// approximate - keep it that way, and keep company-specific numbers in the
// seed fact sheet rather than here so the two never drift apart.

const feeRows: [string, string, string][] = [
  ["Setup / application fee", "About $0-$275, one time", "Is it charged by the company or the custodian? Is it waived for my amount?"],
  ["Yearly custodian / admin fee", "Flat, often bundled with storage - roughly $175-$300 a year all-in", "Is it flat or a percentage of my balance? Does it rise as my balance grows?"],
  ["Storage fee", "Often about $100-$150 a year; segregated storage usually costs more than commingled", "Which depository, segregated or commingled, and is insurance included?"],
  ["Markup (spread) on the metal", "Roughly 5-10% on common bullion; 30-130% on 'premium' or proof coins in enforcement cases", "What is your markup on this exact product, in writing, before I pay?"],
  ["Buyback spread", "The gap between what you pay and what the company will pay you to buy it back", "What would you pay me for these coins today if I sold them back?"],
];

const rolloverRows: [string, string, string, string][] = [
  ["How the money moves", "Straight from your old plan or IRA to the new custodian", "Paid to you first; you must deposit it within 60 days", "Direct is the safer default"],
  ["Taxes withheld", "None", "A 401(k) that pays you directly withholds 20%", "You must replace the 20% from other savings or it counts as a distribution"],
  ["How often", "No limit", "Once per 12 months for IRA-to-IRA rollovers", "A second indirect rollover in a year can be taxed"],
  ["Risk if something goes wrong", "Low - the custodians handle the paperwork", "Miss the 60-day deadline and it is treated as a taxable distribution", "Ask the new custodian to request the transfer for you"],
];

function FeeTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[600px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Cost</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Typical range (approx.)</th>
            <th className="px-4 py-3 font-bold text-[#191919]">What to ask</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([k, a, b], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{k}</td>
              <td className="px-4 py-3 align-top text-gray-600">{a}</td>
              <td className="px-4 py-3 align-top text-gray-600">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RolloverTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[640px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Factor</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Direct transfer</th>
            <th className="px-4 py-3 font-bold text-[#191919]">60-day indirect rollover</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Why it matters</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([f, s, t, w], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{f}</td>
              <td className="px-4 py-3 align-top text-gray-600">{s}</td>
              <td className="px-4 py-3 align-top text-gray-600">{t}</td>
              <td className="px-4 py-3 align-top text-gray-600">{w}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EditorialContent({ midSlot }: { midSlot?: React.ReactNode }) {
  const link = "font-semibold text-[#0F2540] underline decoration-[#B8862B]/60 underline-offset-2 hover:decoration-[#B8862B]";
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-6 pb-12 text-[17px] leading-[1.75] text-gray-800">
      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        The Best Gold IRA Companies, Compared
      </h2>
      <p className="mb-4">
        To compare gold IRA companies, we put the same facts side by side for every company: the
        minimum it accepts, the setup and yearly fees, where your metal is stored, what it says about
        buying the metal back, how long it has been in business, its BBB, BCA and Trustpilot ratings,
        and any regulator actions we could find. We also explain the cost most rankings leave out -
        the markup on the coins and bars themselves.
      </p>
      <p className="mb-8">
        This page is a plain-English overview of what a gold IRA is, what it really costs, how a
        rollover works and the warning signs to watch for. Want the company details? Read our reviews
        of{" "}
        <Link href="/reviews/american-hartford-gold" className={link}>American Hartford Gold</Link>,{" "}
        <Link href="/reviews/goldco" className={link}>Goldco</Link>,{" "}
        <Link href="/reviews/augusta-precious-metals" className={link}>Augusta Precious Metals</Link>{" "}
        and{" "}
        <Link href="/reviews/american-gold-and-silver-group" className={link}>American Gold and Silver Group</Link>,
        or see{" "}
        <Link href="/reviews" className={link}>all reviews</Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">What Is a Gold IRA?</h2>
      <p className="mb-4">
        A gold IRA is a <strong>self-directed individual retirement account that holds physical
        precious metals</strong> - gold, and often silver, platinum or palladium - instead of (or as
        well as) stocks and funds. It follows the same tax rules and contribution limits as any other
        IRA. For 2026 the IRA limit is $7,500, plus a $1,100 catch-up if you are 50 or older.
      </p>
      <p className="mb-4">
        Three parties are involved: a <strong>dealer</strong> (the gold IRA company) sells you the
        metal, a <strong>custodian</strong> (a trust company the IRS allows to hold IRA assets)
        administers the account, and an <strong>approved depository</strong> stores the metal. The
        companies on this page are dealers. The IRS does not &quot;approve&quot; dealers, so be wary of
        any company that says it is &quot;IRS-approved&quot;.
      </p>
      <p className="mb-8">
        A gold IRA can be either traditional (pre-tax) or Roth (after-tax). Start with{" "}
        <Link href="/articles/what-is-a-gold-ira" className={link}>what is a gold IRA?</Link>{" "}
        and, if you are deciding between the two,{" "}
        <Link href="/articles/roth-gold-ira" className={link}>our Roth gold IRA guide</Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">How We Compare Gold IRA Companies</h2>
      <p className="mb-4">We collect the same fact sheet for every company:</p>
      <ul className="mb-4 list-disc space-y-1.5 pl-6">
        <li><strong>Minimum investment</strong> - the first filter, because many companies will not open an account below $10,000, $25,000 or even $50,000.</li>
        <li><strong>Setup, yearly and storage fees</strong> - and whether they are published or only quoted on a sales call.</li>
        <li><strong>Price transparency</strong> - whether the company posts its prices or will put its markup in writing.</li>
        <li><strong>Buyback terms</strong> - a written buyback guarantee is rare; most companies say they buy back &quot;in practice&quot;.</li>
        <li><strong>Storage options</strong> - which depositories, and whether segregated storage is available.</li>
        <li><strong>Track record</strong> - years in business, BBB and BCA ratings, Trustpilot score and review count, and any regulator or court actions.</li>
      </ul>
      <p className="mb-8">
        Some companies pay us when you request a kit or open an account, and our editors set the
        ranking order. The facts and warnings we publish are the same for every company, whether it
        pays us or not. Read{" "}
        <Link href="/how-we-rank" className={link}>how we rank</Link>{" "}
        for the full method.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">Minimums: Which Companies Accept Your Amount?</h2>
      <p className="mb-4">
        Minimums vary widely, and they are the quickest way to narrow the list. As reported by
        third-party reviews in October 2026, American Hartford Gold&apos;s minimum is about $10,000,
        Goldco&apos;s about $25,000 and Augusta Precious Metals&apos; about $50,000. Minimums change, and
        some apply to the IRA balance while others apply to a single purchase - confirm with the
        company before you start paperwork.
      </p>
      <p className="mb-8">
        If your balance is below a company&apos;s minimum, it is usually a sign that company is built
        for larger accounts, not a reason to stretch. Use the amount filter at the top of this page to
        see which companies fit.
      </p>

      {midSlot && <div className="mb-8">{midSlot}</div>}

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">Gold IRA Fees and Markups</h2>
      <p className="mb-4">
        Yearly gold IRA fees are usually <strong>flat dollar amounts, not a percentage</strong> of
        your balance - roughly $175 to $300 a year for custody and storage combined. On a large
        account that is a small share; on a $10,000 account it adds up quickly.
      </p>
      <FeeTable rows={feeRows} />
      <p className="mb-8">
        The biggest cost is often the <strong>markup on the metal itself</strong>, and few dealers
        publish it. In the enforcement cases we cover, buyers of &quot;premium&quot; or proof coins
        paid markups of 30% to 130%. Ask for the markup in writing on the exact product before you
        pay. See{" "}
        <Link href="/articles/gold-ira-fees-explained" className={link}>gold IRA fees explained</Link>{" "}
        or estimate your own costs with our{" "}
        <Link href="/gold-ira-fee-calculator" className={link}>gold IRA fee calculator</Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">Rollover Basics</h2>
      <p className="mb-4">
        Most people fund a gold IRA by moving money from an existing 401(k), IRA or TSP rather than
        with new contributions. How the money moves matters:
      </p>
      <RolloverTable rows={rolloverRows} />
      <p className="mb-8">
        A 401(k) from a current employer may not allow a rollover until you leave or reach the plan&apos;s
        in-service age; the TSP allows an in-service withdrawal at 59&frac12; or after you separate from
        service. Step-by-step guides:{" "}
        <Link href="/articles/401k-to-gold-ira-rollover" className={link}>401(k) to gold IRA rollover</Link>{" "}
        and{" "}
        <Link href="/articles/tsp-to-gold-ira-rollover" className={link}>TSP to gold IRA rollover</Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">What You Can Hold, and Where It Must Be Stored</h2>
      <p className="mb-4">
        Under the tax code (26 U.S.C. 408(m)), collectibles bought in an IRA are treated as
        distributions. The exceptions are certain US-minted coins such as the American Gold Eagle, and
        bullion that meets minimum fineness - .995 for gold and .999 for silver. Commonly eligible
        products include the American Gold Eagle and Gold Buffalo, the Canadian Maple Leaf, the
        Austrian Philharmonic and the American Silver Eagle. Krugerrands and most proof or
        &quot;rare&quot; numismatic coins do not qualify. See{" "}
        <Link href="/articles/irs-approved-precious-metals" className={link}>IRS-approved precious metals</Link>{" "}
        and the{" "}
        <Link href="/articles/silver-ira-guide" className={link}>silver IRA guide</Link>.
      </p>
      <p className="mb-8">
        IRA metal must be held by a trustee or custodian in an approved depository.{" "}
        <strong>Home storage is not allowed</strong> - in <em>McNulty v. Commissioner</em> (2021) the
        Tax Court treated metal kept at home through an &quot;IRA LLC&quot; as a taxable distribution.
        Read{" "}
        <Link href="/articles/can-you-store-ira-gold-at-home" className={link}>can you store IRA gold at home?</Link>{" "}
        before you believe any &quot;home storage IRA&quot; pitch.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">Red Flags to Watch For</h2>
      <ul className="mb-4 list-disc space-y-1.5 pl-6">
        <li>Pressure to move your money <strong>out of a safe IRA into &quot;premium&quot; or proof coins</strong>.</li>
        <li>A company that <strong>will not state its markup in writing</strong> before you pay.</li>
        <li>Claims of being &quot;IRS-approved&quot;, &quot;guaranteed&quot; returns or &quot;no-fee&quot; offers that are paid for through higher coin prices.</li>
        <li>Fear-based scripts about bank failures or market crashes used to rush a decision.</li>
        <li>Offers to let you store IRA metal at home.</li>
      </ul>
      <p className="mb-8">
        These are not hypothetical. In 2023 the CFTC, SEC and state regulators sued Red Rock Secured,
        alleging it took about $61.8 million from roughly 950 customers - much of it from IRAs, 401(k)s
        and TSPs - with average markups of 100-130% against the 4-29% it disclosed. Read{" "}
        <Link href="/articles/gold-ira-scams-red-flags" className={link}>gold IRA scams and red flags</Link>{" "}
        for the questions regulators recommend asking.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">Taxes and Required Distributions</h2>
      <p className="mb-8">
        A traditional gold IRA follows the normal required minimum distribution rules - RMDs start at
        age 73 under SECURE 2.0. You can sell metal to take the RMD in cash, or take the metal itself
        &quot;in kind&quot;, which is taxed at its fair market value. Roth IRAs have no RMDs for the
        original owner. Details in{" "}
        <Link href="/articles/gold-ira-taxes-and-rmds" className={link}>gold IRA taxes and RMDs</Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">Who a Gold IRA Is Not For</h2>
      <ul className="mb-4 list-disc space-y-1.5 pl-6">
        <li><strong>Smaller balances</strong>, where flat yearly fees of a few hundred dollars eat a large share of any return.</li>
        <li><strong>People who may need the money soon</strong> - selling metal back costs the buyback spread, and early withdrawals have the usual IRA taxes and penalties.</li>
        <li><strong>Anyone wanting income</strong> - gold pays no interest or dividends.</li>
        <li><strong>Investors who just want gold exposure</strong> - a gold ETF in an ordinary IRA is usually cheaper and easier to sell. Compare them in{" "}
          <Link href="/articles/gold-ira-vs-gold-etf" className={link}>gold IRA vs gold ETF</Link>.</li>
        <li><strong>Moving most of your savings at once</strong> - gold prices swing; the record close of about $5,318 an ounce in January 2026 was followed by a drop of roughly 20% by October.</li>
      </ul>
      <p className="mb-8">
        For general education on sizing, see{" "}
        <Link href="/articles/how-much-gold-in-retirement-portfolio" className={link}>how much gold to hold in a retirement portfolio</Link>.
        For advice on your own situation, talk to a fee-only financial planner or tax professional.
      </p>

      <hr className="mb-8 border-gray-200" />

      <p className="text-[13.5px] leading-[1.6] text-gray-500">
        <strong>General information, not financial, tax or legal advice.</strong> Gold IRA Planet is
        not a broker, dealer or custodian. Fees, minimums, promotions and ratings are approximate
        third-party snapshots (October 2026) that change often and vary by account size and custodian.
        The company&apos;s and custodian&apos;s written terms - not our summary - determine what you pay.
        Precious metals can lose value, and past performance does not guarantee future results.
      </p>
    </div>
  );
}
