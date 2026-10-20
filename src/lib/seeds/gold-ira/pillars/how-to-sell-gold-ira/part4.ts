import type { ArticleSection } from "@/lib/config";

// Part 4 of "How to Sell or Withdraw Gold From Your IRA (2026)".
// In-kind distributions, holding distributed metal (basis, 28% collectibles
// rate), RMDs with metal (Uniform Lifetime example), partial sales and
// rebalancing, and selling in a falling market (2026 price path).

export const part4: ArticleSection[] = [
  {
    heading: "Taking your gold out in kind",
    body: `<p>An <strong>in-kind distribution</strong> means the custodian ships you the actual coins or bars instead of selling them. It is the only legitimate way to hold your IRA gold in your own hands. It is also a full distribution for tax purposes - there is no special break for taking metal instead of cash.</p>
<h3>How it is valued</h3>
<p>The custodian reports the distribution at the metal's <strong>fair market value (FMV)</strong> on the date of distribution, and that value goes on your Form 1099-R. From a traditional IRA, that FMV is generally taxable as ordinary income, with the 10% additional tax if you are under 59½ and no exception applies - exactly as if you had taken the same amount in cash. From a qualified Roth distribution, it is generally tax-free.</p>
<p>How a custodian determines FMV - for example, whether it uses spot, a dealer bid or another pricing source - varies. Ask your custodian which method it uses, because it sets the number you are taxed on. For proof or "IRA-exclusive" coins, the custodian's valuation may be well below what you paid, which at least means a lower taxable amount.</p>
<h3>Costs of taking delivery</h3>
<p>You avoid the dealer spread (nothing is sold), but you pay custodian and shipping costs. Using Equity Trust's published schedule as an example:</p>
<ul>
<li>In-kind transfer or distribution: <strong>$50</strong> per transaction</li>
<li>Coin shipping and handling: <strong>at cost + $10, $50 minimum</strong></li>
<li>Possibly a distribution fee of <strong>$100 per asset</strong> - ask how your custodian applies its fees to in-kind distributions</li>
</ul>
<p>Other custodians report different numbers: Preferred Trust lists <strong>$200</strong> for an in-kind distribution and uDirect IRA lists <strong>$75</strong>. Shipping is insured and usually requires a signature. If you live far from the depository, ask whether you can pick the metal up in person - some depositories allow this by appointment, others do not.</p>
<h3>Worked example: an in-kind distribution of 10 Gold Eagles</h3>
<p>Spot is about $4,170 and, for illustration, the custodian values each 1 oz Gold Eagle at $4,170.</p>
<ul>
<li>FMV reported on Form 1099-R: 10 × $4,170 = <strong>$41,700</strong></li>
<li>Custodian costs (Equity Trust example): $50 in-kind fee + shipping at cost plus $10 (say $60 total if the carrier charges $50) = about <strong>$110</strong>, plus any distribution fee your custodian applies</li>
<li>Federal income tax if the $41,700 falls in a 22% bracket: about <strong>$9,174</strong> - which you will need to pay from <em>other</em> money, since you took coins, not cash</li>
</ul>
<p>That last point catches people out. An in-kind distribution from a traditional IRA creates a tax bill without creating cash to pay it. Plan where the tax money will come from before you ask for the coins.</p>
<h3>When in-kind makes sense</h3>
<ul>
<li>You genuinely want physical gold at home for the long term, and you have cash to pay the tax.</li>
<li>You need to take an RMD but do not want to sell at today's price (see <a href="#rmds-with-a-gold-ira">RMDs with a gold IRA</a>).</li>
<li>You hold a qualified Roth IRA, so the distribution is generally tax-free either way.</li>
</ul>
<p>It makes less sense if you plan to sell the coins soon after delivery. You would pay shipping and custodian fees and still face a dealer spread when you sell - better to sell inside the IRA.</p>`,
  },
  {
    heading: "Holding distributed gold at home: cost basis and the 28% collectibles rate",
    body: `<p>Once coins leave the IRA, they are ordinary personal property, and the tax rules for physical gold outside a retirement account apply. This section is a general outline - confirm the details with a tax professional, because the IRS guidance on IRA in-kind distributions of metal is not spelled out in every detail.</p>
<h3>Your cost basis</h3>
<p>Under the general rules for in-kind distributions of property from an IRA, your <strong>cost basis</strong> in the coins is generally their <strong>fair market value on the date of distribution</strong> - the same value reported on your 1099-R and taxed (from a traditional IRA) as income. The idea is that you have already paid tax on that value, so you should not be taxed on it twice. Your holding period for later capital gains purposes generally starts on the distribution date. Keep the 1099-R and the custodian's valuation with your coins' records; you will need them when you sell.</p>
<h3>The 28% collectibles rate</h3>
<p>Physical gold held outside an IRA is treated by the IRS as a <strong>collectible</strong>. If you hold it for more than a year and sell at a gain, that long-term gain is taxed at your ordinary rate but capped at <strong>28%</strong>, rather than the lower 0%/15%/20% long-term rates that apply to stocks. Short-term gains (held a year or less) are taxed at ordinary rates. CNBC has a clear explainer on <a href="https://www.cnbc.com/2022/03/14/gold-silver-etf-owners-face-28-percent-top-tax-rate-on-capital-gains.html" target="_blank" rel="noopener">why gold and silver face a 28% top rate</a>, which also applies to grantor-trust gold ETFs such as GLD held in taxable accounts.</p>
<h3>Worked example</h3>
<p>You take 10 Gold Eagles in kind, valued at $41,700 ($4,170 each). Three years later you sell them to a dealer for $4,700 each, or $47,000.</p>
<ul>
<li>Basis: $41,700 (FMV at distribution)</li>
<li>Gain: $47,000 - $41,700 = <strong>$5,300</strong>, long-term</li>
<li>Maximum federal rate on that collectibles gain: 28%, or up to <strong>$1,484</strong> ($5,300 × 0.28). If your ordinary rate is lower than 28%, the lower rate generally applies.</li>
</ul>
<p>If the coins fall in value after distribution, you may have a capital loss when you sell. Either way, the gain or loss is measured from the distribution value, not from what the IRA originally paid.</p>
<p>For the full story on why "home storage" IRAs are different and risky, see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p>`,
  },
  {
    heading: "RMDs with a gold IRA",
    body: `<p>Required minimum distributions are the most common reason gold IRA owners have to sell or withdraw. The rules are the same as for any traditional IRA, but metal makes them a little more awkward because you cannot sell a third of a coin. The IRS answers common questions on its <a href="https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs" target="_blank" rel="noopener">RMD FAQs page</a>.</p>
<h3>When RMDs start</h3>
<table>
<thead><tr><th>Born</th><th>RMDs begin at age</th></tr></thead>
<tbody>
<tr><td>1951-1959</td><td>73</td></tr>
<tr><td>1960 or later</td><td>75</td></tr>
</tbody>
</table>
<p>Your first RMD can generally be delayed until April 1 of the year after you reach your RMD age; every later RMD is due by December 31. Delaying the first one means taking two in the same year, which can raise your tax bill. Roth IRA owners have no lifetime RMDs.</p>
<h3>How the amount is calculated</h3>
<p>For most owners, the RMD is your IRA balance on <strong>December 31 of the previous year</strong> divided by a life-expectancy factor from the IRS <strong>Uniform Lifetime Table</strong>. (A different table applies if your spouse is your sole beneficiary and more than 10 years younger.) For a gold IRA, the balance is the custodian's year-end valuation of your metal plus any cash.</p>
<p><strong>Example:</strong> you turn 73 in 2026 and your gold IRA was valued at $200,000 on December 31, 2025. The Uniform Lifetime factor at 73 is 26.5.</p>
<ul>
<li>RMD = $200,000 ÷ 26.5 = <strong>$7,547</strong> (rounded from $7,547.17)</li>
<li>At 75, with the same $200,000 balance and a factor of 24.6: $200,000 ÷ 24.6 = <strong>$8,130</strong></li>
</ul>
<h3>Your three main options</h3>
<table>
<thead><tr><th>Option</th><th>How it works</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Sell enough metal</td><td>Sell coins inside the IRA and distribute the cash</td><td>Dealer spread and per-sale custodian fees on a small sale; selling at a low price</td></tr>
<tr><td>Take coins in kind</td><td>Distribute coins worth at least the RMD at FMV</td><td>Need cash from elsewhere for the tax; shipping and in-kind fees</td></tr>
<tr><td>Take it from another IRA</td><td>Use IRA aggregation: total the RMDs for all your own traditional IRAs and take the total from any one or more of them</td><td>Works for your own IRAs only - not 401(k)s, and inherited IRAs are calculated separately</td></tr>
</tbody>
</table>
<p>The third option is often the cleanest. If you have a $200,000 gold IRA and a $400,000 brokerage IRA, you can calculate both RMDs and take the combined amount entirely from the brokerage IRA, leaving the gold untouched. The gold IRA still counts toward the total.</p>
<h3>Matching coins to the RMD</h3>
<p>Using the $7,547 RMD and a $4,170 spot price for illustration:</p>
<ul>
<li><strong>Two 1 oz Eagles</strong> in kind: 2 × $4,170 = $8,340. That covers the RMD; the extra $793 is simply an additional distribution (taxable, and it does not count toward next year's RMD).</li>
<li><strong>One 1 oz coin plus three 1/4 oz coins:</strong> $4,170 + 3 × ($4,170 ÷ 4) = $4,170 + $3,127.50 = $7,297.50. That leaves $249.50 to take in cash.</li>
<li><strong>Silver:</strong> at about $57.70, 130 one-ounce Silver Eagles have a melt value of $7,501, leaving $46 to cover in cash.</li>
</ul>
<p>(Custodian valuations for fractional coins and silver may differ from melt value; these are simplified.) Fractional coins usually carry higher premiums when you buy them, so holding a few for RMD flexibility has a cost.</p>
<h3>Keep a cash cushion</h3>
<p>Many custodians let you hold cash inside the gold IRA. Keeping one or two years of RMDs (plus the annual fee) in cash means you are never forced to sell metal in a hurry, in December, at whatever the price happens to be. Selling to build that cushion is not taxed - it stays inside the IRA.</p>
<h3>Missing an RMD</h3>
<p>The excise tax for a missed RMD is <strong>25%</strong> of the shortfall, reduced to <strong>10%</strong> if you correct it within the correction window. On a missed $7,547 RMD, that is about $1,887 at 25% or $755 at 10%. The IRS can also waive the tax for reasonable error if you correct it and request relief on Form 5329. Do not let a slow sale cause a missed RMD - start early.</p>
<p>For more detail, see <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</p>`,
  },
  {
    heading: "Partial sales and rebalancing",
    body: `<p>You do not have to sell everything. Many owners sell part of their gold to rebalance, take profits after a run-up or build an RMD cushion. Because selling inside the IRA is not taxed, partial sales are mainly a question of costs and paperwork.</p>
<h3>Why people rebalance</h3>
<p>Say you set out to keep 10% of your retirement savings in gold. After gold's 2025 rise of roughly 65%, a gold slice that started at 10% could easily have grown to 15% or more of your total, depending on how your other investments did. Rebalancing means selling some gold to bring it back to your target, usually moving the proceeds into other investments. It is a discipline that forces you to trim what has risen and add to what has lagged. It is not a forecast.</p>
<h3>Worked example</h3>
<p>Your total retirement savings are $800,000, of which $120,000 (15%) is in a gold IRA. Your target is 10%, or $80,000. To rebalance, you would sell about $40,000 of gold. At a bid of about $4,100 per 1 oz Eagle, that is about 10 coins ($41,000). The proceeds could stay in the gold IRA as cash, or be moved by direct transfer to a brokerage IRA and invested there.</p>
<h3>Partial sale tips</h3>
<ul>
<li><strong>Sell whole products where possible.</strong> Equity Trust charges $10 per asset (max $30) to liquidate - selling only one product type keeps the fee low.</li>
<li><strong>Check whether a smaller balance changes your fee tier.</strong> Equity Trust's annual fee drops from $500 to $425 when the account value falls below $100,000, for example. That should not drive the decision, but it is worth knowing.</li>
<li><strong>Partial transfers can cost more than you expect.</strong> Equity Trust lists a partial termination fee of $100 per asset when moving part of an account out.</li>
</ul>
<p>If the rebalancing reveals that gold is a smaller part of your plan than you want to pay specialist fees for, consider whether a gold ETF in an ordinary IRA would do the job more cheaply. We compare the two in <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a>.</p>`,
  },
  {
    heading: "Selling in a falling market: the 2026 example",
    body: `<p>2026 has been a reminder that gold can fall hard. According to Reuters, spot gold hit a record of about <strong>$5,595 per ounce</strong> intraday on January 29, 2026. By late June, the LBMA fix had fallen to about <strong>$3,994.50</strong>, roughly 29% below the peak. On October 19, 2026, spot was about <strong>$4,170</strong> (Kitco).</p>
<table>
<thead><tr><th>Date (2026)</th><th>Approximate gold price</th><th>Change from record</th></tr></thead>
<tbody>
<tr><td>Jan 29 (record, intraday)</td><td>$5,595</td><td>-</td></tr>
<tr><td>Late June (LBMA fix low)</td><td>$3,994.50</td><td>About -29% ($3,994.50 ÷ $5,595 = 0.714)</td></tr>
<tr><td>Oct 19</td><td>$4,170</td><td>About -25% ($4,170 ÷ $5,595 = 0.745)</td></tr>
</tbody>
</table>
<p>From the June low to October 19, the price recovered about 4.4% ($4,170 ÷ $3,994.50 = 1.044). Anyone who sold at the June low would have missed that; anyone who sold in January would have avoided most of the fall. Nobody reliably knows which situation they are in at the time.</p>
<p>This is not new. Gold fell about 70% from January 1980 to August 1999 in nominal terms, and about 45% from 2011 to 2015. Our article on <a href="/articles/is-a-gold-ira-a-good-investment">whether a gold IRA is a good investment</a> covers that history.</p>
<h3>Things to think about before selling into a fall (not advice)</h3>
<ul>
<li><strong>Do you need the money now?</strong> If not, selling inside the IRA and holding cash is not taxed - but neither is simply holding. The decision is about your plan, not about taxes.</li>
<li><strong>Is an RMD forcing the sale?</strong> If so, an in-kind distribution or taking the RMD from another IRA (aggregation) lets you meet the requirement without selling metal at a low price.</li>
<li><strong>Is your gold share now below your target?</strong> A fall can mean you are underweight, not overweight.</li>
<li><strong>Would selling in stages help you sleep?</strong> Some people sell a third at a time over a few months to avoid regretting a single date. It averages your price; it does not improve it on average.</li>
<li><strong>Is someone pressuring you?</strong> Falling markets bring sales calls urging you to "swap" into proof coins or other products "before it's too late". See <a href="#exit-scams-and-red-flags-when-you-sell">exit scams</a>.</li>
</ul>
<p>None of this is a prediction. Gold could be higher or lower by the time you read this. A fee-only financial planner who does not sell metals can help you decide how much gold belongs in your plan.</p>`,
  },
];
