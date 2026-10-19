import type { ArticleSection } from "@/lib/config";

// Part 2 of "Gold IRA Rules 2026".
// Ineligible items, the storage rule, home storage and McNulty, and the 2026
// contribution rules (with the employer-plan limits that matter for rollovers).

export const part2: ArticleSection[] = [
  {
    heading: "What the IRS does not allow: collectibles, Krugerrands, numismatics and jewelry",
    body: `<p>The flip side of the eligibility rule is a list of things that look like gold investments but are treated as <strong>collectibles</strong> if an IRA buys them. This is where well-meaning savers - and some aggressive salespeople - get into trouble.</p>
<h3>Common items that are not eligible</h3>
<table>
<thead><tr><th>Item</th><th>Why it fails</th></tr></thead>
<tbody>
<tr><td>South African Krugerrand</td><td>22-karat (.9167) and not a US coin, so it fails both routes</td></tr>
<tr><td>British Sovereign, Mexican 50 Peso and similar older coins</td><td>Below .995 fineness and not named in the statute</td></tr>
<tr><td>Pre-1933 US gold coins (Liberty, Saint-Gaudens, Indian Head)</td><td>About 90% gold; not covered by the American Eagle exception; usually sold as numismatics</td></tr>
<tr><td>Graded "rare" or "certified" coins (other than eligible Eagles)</td><td>Valued for rarity or condition, not metal content - treated as collectibles</td></tr>
<tr><td>Commemorative coins and medals</td><td>Not bullion of the required fineness and not statutory Eagles</td></tr>
<tr><td>Gold jewelry, watches and scrap</td><td>A "metal or gem" that is not investment-grade bullion</td></tr>
<tr><td>Bars from unrecognised refiners or without assay marks</td><td>Fineness cannot be relied on; most custodians refuse them</td></tr>
<tr><td>Coins or bars you already own</td><td>Not eligible as a contribution - IRA contributions must be cash</td></tr>
</tbody>
</table>
<p>Some coins in this table are pure enough on paper but still refused by custodians because they are sold mainly as collector items. Custodians set their own acceptance lists, and they tend to be conservative because they do not want to be part of a disallowed transaction. If your custodian says no, take that as useful information, not an obstacle to work around.</p>
<h3>What happens if your IRA buys an ineligible item</h3>
<p>Section 408(m)(1) is blunt: if an IRA acquires a collectible, the amount spent is <strong>treated as distributed to you</strong> in that year. For a traditional IRA, that means:</p>
<ul>
<li>The cost of the item is added to your taxable income for the year.</li>
<li>If you are under 59½ and no exception applies, a 10% additional tax applies to that amount as well.</li>
<li>The IRA still holds the item, but it now has "basis" equal to the amount already taxed, which needs careful record-keeping later.</li>
</ul>
<p>For a Roth IRA, the deemed distribution follows the Roth ordering rules - contributions first, then conversions, then earnings - so the tax cost depends on your history. Either way, it is a mess you do not want, and unwinding it usually needs a tax professional.</p>
<h3>Worked example: the Krugerrand mistake</h3>
<p>Tom, 55, has a $90,000 traditional self-directed IRA. A dealer convinces him that 10 one-ounce Krugerrands are "just as good as Eagles", and the IRA pays $43,000 for them. The custodian processes the order without checking (this should not happen with a careful custodian, but suppose it does).</p>
<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Cost treated as a distribution</td><td>$43,000</td></tr>
<tr><td>Federal income tax at an assumed 22% bracket</td><td>$9,460</td></tr>
<tr><td>10% additional tax (Tom is under 59½)</td><td>$4,300</td></tr>
<tr><td>Total federal cost (before any state tax)</td><td>$13,760</td></tr>
</tbody>
</table>
<p>Tom paid $13,760 in federal tax to own coins he could have bought with eligible Eagles or Maple Leafs for roughly the same gold content. This is a simplified example - the real bracket depends on his other income, and some of the $43,000 may push him into a higher bracket - but it shows why checking eligibility first is worth the phone call.</p>
<p>For the full list of commonly accepted coins and bars, see our guide to <a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a>.</p>`,
  },
  {
    heading: "The storage rule: trustee possession and approved depositories",
    body: `<p>Eligible bullion must be "in the physical possession of a trustee" to qualify for the 408(m)(3) exception. That short phrase is the basis of the whole storage industry around gold IRAs. In practice, custodians meet it by having the metal held at an <strong>approved depository</strong> - a secure, insured vault that holds the metal in the custodian's name for the benefit of your IRA.</p>
<h3>What "approved depository" means</h3>
<p>There is no IRS list of approved depositories. "Approved" means approved by your custodian, which has agreements with specific vaults and will only ship metal to them. Common names include Delaware Depository, Brink's, International Depository Services (IDS) in Delaware and Texas, and the state-run Texas Bullion Depository. The depository is not your custodian and not your dealer; it is a third party that stores the metal and reports holdings to the custodian.</p>
<h3>Segregated vs commingled storage</h3>
<p>Depositories offer two ways to hold IRA metal. Both are generally accepted as meeting the possession requirement; the difference is about which physical items you get back.</p>
<table>
<thead><tr><th></th><th>Commingled (non-segregated)</th><th>Segregated</th></tr></thead>
<tbody>
<tr><td>How it is held</td><td>Your metal is stored with other customers' metal of the same type</td><td>Your specific coins and bars are stored separately and tagged to your account</td></tr>
<tr><td>What you get back</td><td>The same type and quantity, not necessarily the exact pieces</td><td>The exact pieces you bought</td></tr>
<tr><td>Typical cost</td><td>Lower</td><td>Higher</td></tr>
<tr><td>Example custodian-bundled storage</td><td>Equity Trust $110/yr; STRATA $115/yr; GoldStar $125/yr</td><td>Equity Trust $160/yr; STRATA $175/yr</td></tr>
<tr><td>Who it suits</td><td>Most bullion buyers</td><td>Buyers of bars with serial numbers, or anyone who wants specific items back</td></tr>
</tbody>
</table>
<p>The storage figures above are what those custodians reported in their fee schedules or third-party summaries as of 2025-2026; they change, so check current schedules. Some depositories price by value instead - for example, Delaware Depository's election form quoted $0.80 per $1,000 per year for commingled storage ($95 minimum) and $1.60 per $1,000 for segregated ($190 minimum), and Brink's was quoted at $1.50 per $1,000. On a $100,000 account, that works out to $95 a year for Delaware commingled (the $80 calculated fee is below the $95 minimum), $160 for Delaware segregated and $150 at Brink's.</p>
<h3>Does "commingled" break the no-commingling rule?</h3>
<p>Section 408 says IRA assets may not be commingled with other property. Commingled depository storage does not mean your IRA's metal is mixed with your personal property; it means fungible metal held for many IRA accounts is stored together, with records showing each account's share. Depositories and custodians treat this as acceptable, and it is the standard arrangement in the industry. If this point worries you, segregated storage removes the question for a modest extra cost.</p>
<h3>Insurance, audits and statements</h3>
<p>Ask your custodian or dealer three questions about any depository:</p>
<ul>
<li>Is the metal insured, by whom, and for how much? Is the policy all-risk, and does it cover the full replacement value?</li>
<li>How often is the vault audited, and by whom?</li>
<li>Will my custodian statement list each item, and can I get a holdings report directly from the depository?</li>
</ul>
<p>Good answers come quickly and in writing. Vague answers about "fully insured" without a named insurer deserve a follow-up.</p>
<h3>Can I visit or see my metal?</h3>
<p>Some depositories allow account holders to arrange a viewing by appointment through the custodian. Visiting does not break the possession rule; taking the metal home does. If you want the metal in your hands, the correct route is a <a href="#distributions-in-kind-taking-the-metal-itself">distribution in kind</a>, which is a taxable event in a traditional IRA.</p>
<p>For a deeper look at storage costs over time, try our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>.</p>`,
  },
  {
    heading: "Home storage and the \"checkbook IRA LLC\": what McNulty decided",
    body: `<p>Few gold IRA topics generate more advertising - or more risk - than "home storage". You may see pitches for a "home storage gold IRA", a "checkbook IRA" or an "IRA LLC" that lets you keep IRA coins in your own safe. Our full guide, <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a>, covers this in depth. Here is the essential version.</p>
<h3>How the structure is supposed to work</h3>
<p>The idea is that your self-directed IRA invests in a newly formed limited liability company. You are the LLC's manager. The LLC opens a bank account, buys eligible coins and - the selling point - stores them wherever the manager decides, including a home safe. Promoters argue that because the LLC owns the coins, and the IRA owns the LLC, the coins are still IRA assets.</p>
<h3>What the Tax Court said in McNulty (2021)</h3>
<p>In <strong>McNulty v. Commissioner, 157 T.C. No. 10 (2021)</strong>, two taxpayers used IRA LLCs set up through a "checkbook IRA" promoter. They bought American Eagle coins through the LLCs and kept them at home. The Tax Court held that their personal control of the coins was a <strong>taxable distribution</strong> from their IRAs. The court treated the coins as having been distributed when the owners took possession, and the taxpayers owed income tax on the value plus accuracy-related penalties, with the 10% early-distribution tax also in play where it applied.</p>
<p>Several points from the case are worth knowing, stated carefully:</p>
<ul>
<li>The court was not persuaded by the argument that American Eagles are exempt from the possession requirement because they are named in the statute. The owners' unrestricted personal control of IRA assets was the problem.</li>
<li>Relying on a promoter's assurances did not protect them from penalties. The court expected the taxpayers to have done more to check the advice.</li>
<li>The case involved home storage. It did not rule on every possible LLC arrangement, but it made the home-storage version very hard to defend.</li>
</ul>
<h3>Why this rule bites so hard</h3>
<p>If IRA metal is treated as distributed, the tax applies to the <strong>whole value</strong> moved into your possession, not just to any gain. And because it is a distribution, you cannot simply put the coins back next year: the 60-day rollover window will have long passed, and contributions must be in cash anyway.</p>
<h3>Worked example: the cost of a home-storage mistake</h3>
<p>Carol, 58, puts $120,000 of her traditional IRA into an LLC and buys American Eagles, which she keeps in a home safe. Two years later, the IRS examines her return and treats the $120,000 as distributed in the year she took possession.</p>
<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Amount treated as distributed</td><td>$120,000</td></tr>
<tr><td>Federal income tax (illustrative 24% bracket)</td><td>$28,800</td></tr>
<tr><td>10% additional tax (under 59½ at the time)</td><td>$12,000</td></tr>
<tr><td>Accuracy-related penalty (illustrative 20% of the underpayment of $40,800)</td><td>$8,160</td></tr>
<tr><td>Total before interest and state tax</td><td>$48,960</td></tr>
</tbody>
</table>
<p>That is about 41% of the account gone, before interest. In real life a distribution this size would push part of Carol's income into a higher bracket, so the true figure could be higher. The example is simplified to show the shape of the risk, not to predict a specific bill.</p>
<h3>What is - and is not - a reasonable alternative</h3>
<ul>
<li><strong>Keep IRA metal in an approved depository.</strong> This is the standard approach and what custodians require.</li>
<li><strong>Buy personal gold separately</strong> with after-tax money if you want metal at home. That gold sits outside the IRA rules - gains are generally taxed as collectibles when sold - but there is no risk of a disqualified IRA.</li>
<li><strong>Take a distribution in kind later</strong>, if you want IRA metal at home in retirement, and pay the tax on it knowingly.</li>
</ul>
<p>If someone tells you home storage is "IRS-approved" or "completely legal", ask them to put that in writing with a citation, and then show it to an independent tax professional. Our guide to <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> lists home-storage pitches among the warning signs.</p>`,
  },
  {
    heading: "Gold IRA contribution rules for 2026",
    body: `<p>A gold IRA has exactly the same contribution rules as any other IRA. The metal does not raise or lower your limit, and contributions to all your IRAs - gold and non-gold, traditional and Roth - share a single annual cap.</p>
<h3>The 2026 numbers</h3>
<table>
<thead><tr><th>Limit (2026)</th><th>Amount</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>IRA contribution limit</td><td>$7,500</td><td>Combined across all your traditional and Roth IRAs</td></tr>
<tr><td>Catch-up (age 50 or older by Dec 31)</td><td>$1,100</td><td>Total of $8,600</td></tr>
<tr><td>Roth IRA phase-out - single or head of household</td><td>$153,000-$168,000 MAGI</td><td>Reduced contribution inside the range; none above it</td></tr>
<tr><td>Roth IRA phase-out - married filing jointly</td><td>$242,000-$252,000 MAGI</td><td>Same</td></tr>
<tr><td>Roth IRA phase-out - married filing separately (lived with spouse)</td><td>$0-$10,000 MAGI</td><td>Same</td></tr>
<tr><td>Contribution deadline</td><td>Tax-filing due date for 2026 (normally mid-April 2027)</td><td>Extensions do not extend the contribution deadline</td></tr>
</tbody>
</table>
<p>Source: IRS Notice 2025-67 and the IRS <a href="https://www.irs.gov/retirement-plans/cola-increases-for-dollar-limitations-on-benefits-and-contributions" target="_blank" rel="noopener">cost-of-living adjustments page</a>. Whether a traditional IRA contribution is <strong>deductible</strong> depends on your income and whether you or your spouse are covered by a workplace retirement plan; those phase-out ranges are listed in <a href="https://www.irs.gov/publications/p590a" target="_blank" rel="noopener">Publication 590-A</a>.</p>
<h3>Five contribution rules people miss</h3>
<ol>
<li><strong>Contributions must be cash.</strong> Section 408 requires contributions (other than rollovers) to be made in cash. You cannot "contribute" gold coins you already own. The custodian receives cash, then buys metal.</li>
<li><strong>You need earned income.</strong> Wages, salary or self-employment income. Pensions, Social Security, interest and dividends do not count. Your contribution cannot exceed your taxable compensation for the year.</li>
<li><strong>There is no maximum age</strong> for traditional IRA contributions anymore - the SECURE Act removed the old age-70½ cut-off from 2020 - as long as you have earned income.</li>
<li><strong>Spousal IRAs.</strong> If you file jointly, a spouse with little or no earned income can contribute based on the working spouse's compensation, up to the normal limit, as long as the couple's combined contributions do not exceed their combined taxable compensation.</li>
<li><strong>Rollovers and transfers do not count</strong> toward the annual limit. That is why most gold IRAs are funded by moving existing retirement money, not by new contributions.</li>
</ol>
<h3>Worked example: a couple in their 60s</h3>
<p>Raymond, 64, still works part-time and earns $30,000. His wife Maria, 61, is retired with no earned income. They file jointly with MAGI of $110,000.</p>
<ul>
<li>Raymond can contribute up to $8,600 ($7,500 + $1,100 catch-up).</li>
<li>Maria can contribute up to $8,600 to a spousal IRA based on Raymond's earnings.</li>
<li>Combined: $17,200, which is below Raymond's $30,000 of compensation, so the full amount is allowed.</li>
<li>Their MAGI is below the $242,000 joint Roth phase-out, so either could choose a Roth gold IRA instead.</li>
</ul>
<h3>The 6% excess-contribution penalty</h3>
<p>If you contribute more than you are allowed - over the limit, without enough earned income, or to a Roth when your income is too high - the excess is subject to a <strong>6% excise tax for every year it stays in the account</strong> (reported on Form 5329). You can generally avoid the tax by withdrawing the excess and any earnings on it before your tax-return due date, including extensions.</p>
<p>Example: Ann contributes $8,600 to a Roth gold IRA, then finds her MAGI is $175,000 as a single filer - above the $168,000 limit. Her whole $8,600 is an excess contribution. Left in place, she owes 6%, or $516, for 2026 and again each year until it is fixed. With metal, fixing it may mean selling some coins inside the IRA to pay out cash, which adds dealer spread and custodian transaction fees. Check eligibility before you contribute.</p>
<h3>Employer-plan limits that matter for rollovers</h3>
<p>Most gold IRA money starts in a workplace plan. Those plans have much higher limits, which is why their balances are usually larger:</p>
<table>
<thead><tr><th>Workplace plan limit (2026)</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>401(k), 403(b), governmental 457(b), TSP - employee deferral</td><td>$24,500</td></tr>
<tr><td>Catch-up at 50 or older</td><td>$8,000 (total $32,500)</td></tr>
<tr><td>Catch-up at ages 60-63 (instead of $8,000)</td><td>$11,250 (total $35,750)</td></tr>
<tr><td>SIMPLE plan deferral</td><td>$17,000</td></tr>
<tr><td>Total annual additions (employee + employer)</td><td>$72,000</td></tr>
</tbody>
</table>
<p>These limits do not apply to a gold IRA directly - you cannot put $24,500 a year into an IRA. They matter because they explain where most gold IRA balances come from, and because money in a current employer's plan often cannot be moved until you leave, reach 59½, or meet the plan's in-service withdrawal rules. See our <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover</a> and <a href="/articles/tsp-to-gold-ira-rollover">TSP to gold IRA rollover</a> guides for the plan-specific rules.</p>`,
  },
];
