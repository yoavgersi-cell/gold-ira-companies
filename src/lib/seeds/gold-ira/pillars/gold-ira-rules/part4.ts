import type { ArticleSection } from "@/lib/config";

// Part 4 of "Gold IRA Rules 2026".
// RMDs, Roth gold IRA rules, inherited gold IRAs, how gold IRAs are taxed,
// and reporting forms, valuations and custodian fees.

export const part4: ArticleSection[] = [
  {
    heading: "Required minimum distribution rules for gold IRAs",
    body: `<p>Traditional, SEP and SIMPLE gold IRAs are subject to <strong>required minimum distributions</strong> (RMDs) once you reach a certain age. The rules are the same as for any IRA, but physical metal creates a practical problem that paper assets do not: you cannot sell a fraction of a coin, and every sale costs a spread. Planning ahead matters more here than almost anywhere else in the gold IRA rules.</p>
<h3>When RMDs start</h3>
<table>
<thead><tr><th>Year you were born</th><th>RMD age</th></tr></thead>
<tbody>
<tr><td>1950 or earlier</td><td>Already taking RMDs under earlier rules (70½ or 72)</td></tr>
<tr><td>1951-1959</td><td>73</td></tr>
<tr><td>1960 or later</td><td>75</td></tr>
</tbody>
</table>
<p>Your first RMD is for the year you reach your RMD age. You can delay that first one until <strong>April 1</strong> of the following year, but then you must take two in that year - the delayed first one and the second one by December 31. Taking two in one year can push you into a higher bracket, so many people take the first by December 31 of the year they reach RMD age. Every later RMD is due by December 31.</p>
<p>Roth IRA owners have <strong>no RMDs</strong> during their lifetime, and since 2024, Roth 401(k)s no longer have lifetime RMDs either. The IRS's <a href="https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" target="_blank" rel="noopener">RMD FAQs</a> cover the details.</p>
<h3>How the amount is calculated</h3>
<p>For most owners, the RMD for a year equals the IRA's <strong>value on December 31 of the previous year</strong> divided by a factor from the IRS <strong>Uniform Lifetime Table</strong> in <a href="https://www.irs.gov/publications/p590b" target="_blank" rel="noopener">Publication 590-B</a>. (If your spouse is the sole beneficiary and more than 10 years younger, a different, more favourable table applies.) A few factors from the Uniform Lifetime Table:</p>
<table>
<thead><tr><th>Age</th><th>Distribution period</th><th>RMD as % of balance (approx.)</th></tr></thead>
<tbody>
<tr><td>73</td><td>26.5</td><td>3.8%</td></tr>
<tr><td>75</td><td>24.6</td><td>4.1%</td></tr>
<tr><td>80</td><td>20.2</td><td>5.0%</td></tr>
<tr><td>85</td><td>16.0</td><td>6.3%</td></tr>
<tr><td>90</td><td>12.2</td><td>8.2%</td></tr>
</tbody>
</table>
<p>For a gold IRA, the December 31 value is the fair market value of the metal (plus any cash) as reported by your custodian. That is why custodians send year-end valuations and file <a href="#reporting-forms-valuations-and-paying-custodian-fees">Form 5498</a>.</p>
<h3>Worked example: a $200,000 gold IRA at age 73</h3>
<p>Helen turns 73 in 2026. Her gold IRA was valued at $200,000 on December 31, 2025, all in one-ounce Gold Eagles. For simplicity, assume each coin is valued at $4,170 when she takes her distribution.</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th><th>Result</th></tr></thead>
<tbody>
<tr><td>RMD</td><td>$200,000 / 26.5</td><td>$7,547.17</td></tr>
<tr><td>Coins needed if taken in kind</td><td>$7,547.17 / $4,170</td><td>1.81 coins - you cannot take 0.81 of a coin</td></tr>
<tr><td>Option A: take 2 coins in kind</td><td>2 x $4,170</td><td>$8,340 distributed ($792.83 more than required)</td></tr>
<tr><td>Option B: take 1 coin in kind plus cash</td><td>$4,170 + $3,377.17 cash</td><td>$7,547.17 exactly - but the cash must come from somewhere</td></tr>
<tr><td>Option C: sell 2 coins inside the IRA, distribute cash</td><td>2 x ~$4,100 bid = ~$8,200</td><td>Distribute $7,547.17; about $650 stays in the IRA as cash</td></tr>
</tbody>
</table>
<p>Two things to notice. With Option A, the extra $792.83 is taxable income this year, and taking more than the RMD in one year does <strong>not</strong> reduce next year's RMD. With Option C, Helen pays a dealer spread and liquidation fee, but she leaves some cash in the IRA that can cover next year's fees or part of next year's RMD.</p>
<h3>Liquidity planning for metal</h3>
<p>Because metal is lumpy and costs money to sell, many gold IRA owners plan their RMDs in advance:</p>
<ul>
<li><strong>Keep a cash reserve</strong> inside the gold IRA - enough for annual fees and part of an RMD.</li>
<li><strong>Own smaller units.</strong> A mix of one-ounce coins (or fractional coins) is easier to match to an RMD than a 10-ounce bar.</li>
<li><strong>Use aggregation</strong> (below) to take the whole RMD from a non-gold IRA instead.</li>
<li><strong>Start the process early.</strong> Selling metal or arranging an in-kind shipment can take one to three weeks. Requesting in late December risks missing the deadline.</li>
</ul>
<h3>Aggregation across IRAs</h3>
<p>If you have more than one traditional IRA, you must calculate the RMD for each, but you can <strong>take the total from any one or more of them</strong>. This is extremely useful for gold IRA owners.</p>
<p>Example: Walter, 75, has a $300,000 brokerage IRA and a $100,000 gold IRA. His RMDs are $300,000 / 24.6 = $12,195.12 and $100,000 / 24.6 = $4,065.04, a total of $16,260.16. He can take the full $16,260.16 from the brokerage IRA and leave the gold untouched.</p>
<p>Aggregation has limits. IRA RMDs cannot be satisfied from a 401(k), and 401(k) RMDs cannot be satisfied from an IRA. 403(b) RMDs can be aggregated only with other 403(b)s. Inherited IRAs can be aggregated only with other inherited IRAs from the same person.</p>
<h3>The penalty for missing an RMD</h3>
<p>If you take less than your RMD, the shortfall is subject to an excise tax of <strong>25%</strong>, reduced to <strong>10%</strong> if you correct it within the correction window (generally by the end of the second year after the year it was due, or sooner if the IRS assesses it first). You report it on Form 5329, and you can ask the IRS to waive the tax if the shortfall was due to reasonable error and you are taking steps to fix it.</p>
<p>Example: Helen forgets her $7,547.17 RMD entirely. The excise tax is $1,886.79 (25%), or $754.72 (10%) if she corrects it in time - on top of the income tax she still owes on the distribution once she takes it.</p>`,
  },
  {
    heading: "Roth gold IRA rules",
    body: `<p>A Roth gold IRA holds the same eligible metal, in the same kind of depository, with the same custodian rules as a traditional gold IRA. What changes is the tax treatment. Our <a href="/articles/roth-gold-ira">Roth gold IRA guide</a> covers the strategy; here are the rules.</p>
<h3>The basics</h3>
<ul>
<li>Contributions are made with after-tax money and are not deductible.</li>
<li>2026 eligibility phases out at $153,000-$168,000 MAGI for single filers and $242,000-$252,000 for married couples filing jointly.</li>
<li>Qualified distributions - including in-kind distributions of metal - are <strong>tax-free</strong>.</li>
<li>There are <strong>no required minimum distributions</strong> for the original owner.</li>
<li>Conversions from a traditional IRA are allowed at any income level and are taxable in the year of conversion.</li>
</ul>
<h3>The two five-year rules</h3>
<p>Roth IRAs have two separate five-year clocks, and people often mix them up:</p>
<table>
<thead><tr><th>Rule</th><th>What it controls</th><th>When the clock starts</th></tr></thead>
<tbody>
<tr><td>Five-year rule for qualified distributions</td><td>Whether <strong>earnings</strong> come out tax-free</td><td>January 1 of the tax year of your first contribution or conversion to <strong>any</strong> Roth IRA</td></tr>
<tr><td>Five-year rule for conversions</td><td>Whether converted amounts withdrawn before 59½ face the 10% additional tax</td><td>January 1 of the year of <strong>each</strong> conversion - a separate clock for each one</td></tr>
</tbody>
</table>
<p>A distribution is "qualified" (fully tax-free) when the five-year period has passed <strong>and</strong> you are 59½ or older, disabled, using up to $10,000 for a first home, or the distribution is to a beneficiary after your death.</p>
<h3>Ordering rules</h3>
<p>If you take a non-qualified distribution, the IRS treats it as coming out in this order: your regular contributions first (always tax- and penalty-free), then conversions (oldest first), then earnings. In practice, many people can withdraw their own contributions without tax even before the five-year rule is met.</p>
<h3>Converting a traditional gold IRA to Roth</h3>
<p>You can convert metal in kind - the custodian re-registers the coins from your traditional IRA to your Roth IRA. The conversion amount is the fair market value of the metal on the conversion date, and it is taxable income in that year. Because the tax bill depends on the metal's value that day, some owners convert in stages over several years to spread the income, and some convert after a price drop so that less is taxed. This is not a prediction that prices will rise; it is a reminder that the timing of a conversion changes the tax bill.</p>
<h3>Worked example: converting after a price fall</h3>
<p>Susan holds 20 one-ounce Gold Maple Leafs in her traditional gold IRA. In late June 2026, when gold had fallen to around $4,000 from its January peak, the custodian valued them at about $3,950 each.</p>
<table>
<thead><tr><th>Item</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Value converted (20 x $3,950)</td><td>$79,000</td></tr>
<tr><td>Taxable income from the conversion</td><td>$79,000</td></tr>
<tr><td>Federal tax at an assumed 24% bracket</td><td>$18,960</td></tr>
<tr><td>Future qualified withdrawals</td><td>Tax-free, whatever the coins are worth later</td></tr>
</tbody>
</table>
<p>If she had converted at the January peak (say $5,400 a coin, or $108,000), the taxable amount would have been $29,000 higher. If gold falls further after a conversion, she has paid tax on value that no longer exists - and conversions can no longer be undone (recharacterization of conversions ended in 2018). Paying the conversion tax from savings outside the IRA, rather than from the IRA itself, keeps more metal inside the Roth.</p>`,
  },
  {
    heading: "Inherited gold IRA rules",
    body: `<p>When a gold IRA owner dies, the metal passes to the beneficiaries named on the custodian's beneficiary form - not under the will, unless the estate is the beneficiary. What happens next depends on who inherits.</p>
<h3>Spouse beneficiaries</h3>
<p>A surviving spouse who is the sole beneficiary has the most choices:</p>
<ul>
<li><strong>Treat the IRA as their own</strong> - it becomes a normal IRA in the spouse's name, with RMDs based on the spouse's own age.</li>
<li><strong>Roll it over</strong> into the spouse's own IRA.</li>
<li><strong>Remain a beneficiary</strong> in an inherited IRA - useful if the spouse is under 59½ and may need money, because distributions to a beneficiary are exempt from the 10% additional tax.</li>
</ul>
<h3>Non-spouse beneficiaries: the 10-year rule</h3>
<p>Since 2020, most non-spouse beneficiaries - adult children, grandchildren, siblings more than 10 years younger, friends - must empty the inherited IRA by the end of the <strong>10th year</strong> after the year of death.</p>
<p>If the owner died on or after their required beginning date (that is, after RMDs had started), the beneficiary generally must also take annual RMDs in years 1 to 9, with the remainder out by year 10. The IRS waived penalties for missed annual amounts in 2021-2024 while it finalised regulations; annual distributions are expected from 2025. Check the current rules in <a href="https://www.irs.gov/publications/p590b" target="_blank" rel="noopener">Publication 590-B</a> or with a tax professional.</p>
<h3>Eligible designated beneficiaries</h3>
<p>Some beneficiaries are not limited to 10 years and can take distributions over their life expectancy:</p>
<ul>
<li>The surviving spouse.</li>
<li>A minor child of the owner (until age 21, then the 10-year rule starts).</li>
<li>A disabled or chronically ill individual.</li>
<li>Someone not more than 10 years younger than the owner.</li>
</ul>
<h3>How inherited metal moves</h3>
<p>A non-spouse beneficiary <strong>cannot roll over</strong> an inherited IRA. The only way to move it to another custodian is a <strong>trustee-to-trustee transfer</strong> to an inherited IRA, titled to show both the deceased owner and the beneficiary (for example, "Jane Smith, deceased, for the benefit of John Smith, beneficiary"). If the custodian sends the metal or cash to the beneficiary personally, it is a distribution and cannot be put back.</p>
<p>The metal can stay as metal: the custodian re-registers the coins into the inherited IRA without selling them. The beneficiary can later sell inside the IRA or take distributions in kind over the 10 years.</p>
<h3>Worked example: three siblings inherit a gold IRA</h3>
<p>Their mother, 80, dies in 2026 with a $180,000 traditional gold IRA and names her three adult children as equal beneficiaries. The custodian splits the account into three inherited IRAs of $60,000 each in metal.</p>
<ul>
<li>Each child has until December 31, 2036 to empty their share.</li>
<li>Because their mother had already started RMDs, each child generally must also take annual RMDs in 2027-2035, based on their own life expectancy.</li>
<li>One child takes coins in kind each year; another sells gradually inside the IRA; the third, in a high bracket, takes small amounts until retirement and the rest later in the window.</li>
</ul>
<p>Spreading distributions across the 10 years usually produces a lower total tax bill than taking everything in one year, but every situation is different.</p>`,
  },
  {
    heading: "How gold IRAs are taxed",
    body: `<p>Inside an IRA, gold is taxed like any other IRA asset. Outside an IRA, physical gold has its own, less favourable tax treatment. Understanding the difference explains a lot of the appeal - and some of the traps.</p>
<h3>Traditional vs Roth gold IRA</h3>
<table>
<thead><tr><th></th><th>Traditional gold IRA</th><th>Roth gold IRA</th></tr></thead>
<tbody>
<tr><td>Contributions</td><td>May be deductible, depending on income and workplace plan coverage</td><td>Not deductible</td></tr>
<tr><td>Growth inside the account</td><td>Tax-deferred</td><td>Tax-free if distributions are qualified</td></tr>
<tr><td>Selling metal inside the IRA</td><td>No tax at the time of sale</td><td>No tax at the time of sale</td></tr>
<tr><td>Distributions (cash or in kind)</td><td>Ordinary income at fair market value</td><td>Tax-free if qualified</td></tr>
<tr><td>Before 59½</td><td>10% additional tax unless an exception applies</td><td>Contributions out first, tax-free; earnings may be taxed and penalised</td></tr>
<tr><td>Lifetime RMDs</td><td>Yes, from 73 or 75</td><td>No</td></tr>
</tbody>
</table>
<h3>The collectibles rate - and why it does not apply inside an IRA</h3>
<p>Outside an IRA, physical gold and silver are treated as <strong>collectibles</strong> for capital gains purposes. Long-term gains (held more than a year) are taxed at ordinary rates up to a maximum of <strong>28%</strong>, instead of the 0%, 15% or 20% rates that apply to stocks. The same treatment applies to grantor-trust gold ETFs such as GLD that hold physical metal.</p>
<p>Inside an IRA, the collectibles rate does not apply. Gains on metal are not taxed when the IRA sells; a traditional IRA's distributions are simply ordinary income, and a Roth's qualified distributions are tax-free. Whether that is better depends on your bracket. For someone in a 12% or 22% bracket in retirement, ordinary income on traditional IRA distributions can be lower than a 28% collectibles rate; for someone in a 32% or higher bracket, a traditional IRA distribution can cost more than the collectibles rate would have. A traditional IRA also taxes the <strong>whole</strong> distribution, not just the gain, because the money went in pre-tax.</p>
<h3>Comparison: the same gold inside and outside an IRA</h3>
<p>Assume $50,000 of gold grows to $70,000 and is then sold, and the owner is in the 22% federal bracket. Simplified, ignoring fees, spreads and state tax:</p>
<table>
<thead><tr><th>Scenario</th><th>What is taxed</th><th>Federal tax (illustrative)</th></tr></thead>
<tbody>
<tr><td>Personal gold, after-tax money, held over a year</td><td>$20,000 gain at collectibles rates (capped at 28%; at a 22% bracket, 22%)</td><td>$4,400</td></tr>
<tr><td>Traditional gold IRA, funded pre-tax, full $70,000 withdrawn</td><td>$70,000 as ordinary income</td><td>$15,400 - but the original $50,000 was never taxed going in</td></tr>
<tr><td>Roth gold IRA, qualified withdrawal</td><td>Nothing</td><td>$0 - but the $50,000 went in after tax</td></tr>
</tbody>
</table>
<p>These are not like-for-like comparisons, because the money going in was taxed differently. The point is that the IRA wrapper changes <strong>when</strong> and <strong>how</strong> tax is paid, not whether gold is a good investment. For a fuller comparison, see our <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a> analysis.</p>
<h3>State taxes</h3>
<p>State treatment varies widely. Most states with an income tax follow federal rules and tax traditional IRA distributions; several have no income tax, and some exempt part of retirement income. A few states tax collectible gains differently. States also differ on sales tax for bullion, though purchases inside an IRA shipped to a depository are commonly not subject to sales tax - confirm with your custodian. Because of the variation, check your own state's rules with a tax professional.</p>`,
  },
  {
    heading: "Reporting forms, valuations and paying custodian fees",
    body: `<p>Your custodian handles most IRS reporting for a gold IRA, but you should know which forms to expect and what they mean.</p>
<h3>The forms</h3>
<table>
<thead><tr><th>Form</th><th>Who files it</th><th>What it reports</th><th>When</th></tr></thead>
<tbody>
<tr><td>Form 5498</td><td>Custodian</td><td>Contributions, rollovers, conversions, and the account's fair market value on December 31</td><td>Generally by May 31 of the following year</td></tr>
<tr><td>Form 1099-R</td><td>Custodian</td><td>Distributions, including in-kind distributions at fair market value, with codes showing the type</td><td>Generally by January 31 of the following year</td></tr>
<tr><td>Form 5329</td><td>You</td><td>The 10% additional tax, the 6% excess-contribution tax and the RMD excise tax, plus exception claims</td><td>With your tax return</td></tr>
<tr><td>Form 8606</td><td>You</td><td>Nondeductible traditional IRA contributions, Roth conversions and Roth distributions</td><td>With your tax return</td></tr>
</tbody>
</table>
<p>A trustee-to-trustee transfer between IRAs generally does not generate a 1099-R or a 5498 rollover entry. A direct rollover from a 401(k) produces a 1099-R from the plan, coded as a direct rollover, and a 5498 from the new custodian. Check that the codes are right; a wrongly coded 1099-R is a common source of IRS letters.</p>
<h3>Fair market value statements</h3>
<p>Custodians must report the account's fair market value each year. For metal, they usually use a market price for each product on December 31. This value drives your RMD for the next year, the amount taxed on conversions and in-kind distributions, and what your heirs inherit. If the statement looks wrong - for example, it values coins at the price you paid rather than the current market - ask the custodian how it prices them.</p>
<p>Remember that the statement value is a market reference, not a guaranteed sale price. If the IRA sells, it receives the dealer's bid, which is usually a little below spot for common bullion coins. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> explains spreads in more detail.</p>
<h3>Paying custodian and storage fees: inside or outside the IRA?</h3>
<p>Self-directed IRA fees are typically flat amounts. As an example, Equity Trust's schedule (revised November 2025) lists annual fees from $225 for accounts under $15,000 to $425 for $50,000-$99,999 and $500 for $100,000-$199,999, plus storage of $110 (commingled) or $160 (segregated). Other custodians are lower or higher; our <a href="/articles/gold-ira-custodians">custodian comparison</a> lists several.</p>
<p>You can usually pay these fees in one of two ways:</p>
<ul>
<li><strong>From inside the IRA</strong>, using cash held in the account. This reduces the IRA balance but is simple. It also means you need to keep some cash in the account - or sell metal to raise it.</li>
<li><strong>From outside the IRA</strong>, with a personal check or card. Under longstanding IRS guidance, trustee administrative fees billed separately and paid from outside are generally not treated as contributions, so they do not use up your annual limit. Paying from outside keeps more metal working in the account.</li>
</ul>
<p>The details matter. Not every charge counts as an administrative fee - for example, transaction costs and commissions tied to buying or selling assets are generally expected to be paid by the IRA itself, and paying them from outside could be treated as a contribution. Whether any fee is deductible on your personal return depends on current law, which has restricted many investment-expense deductions in recent years. Ask a tax professional before choosing an approach, and keep records of which fees you paid and how.</p>
<p>Want to see how fees add up over 10 or 20 years? Our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> runs the numbers.</p>`,
  },
];
