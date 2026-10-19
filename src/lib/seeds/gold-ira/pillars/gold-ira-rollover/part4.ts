import type { ArticleSection } from "@/lib/config";

// Part 4 of "Gold IRA Rollover: The Complete 2026 Guide".
// Storage rules, worked cost examples, mistakes and penalties, and sales
// tactics / enforcement cases.

export const part4: ArticleSection[] = [
  {
    heading: "Storage rules and why home storage fails",
    body: `<p>The metal you buy with rollover money must be held by your IRA's trustee or custodian - in practice, in an approved, insured depository the custodian works with. You can visit some depositories by appointment, and you can see your holdings on your statement, but you cannot keep IRA metal in your house, your safe or your safe deposit box while it remains in the IRA.</p>
<h3>Why: the "physical possession of the trustee" rule</h3>
<p>The bullion exception in IRC 408(m) applies only to metal "in the physical possession" of the IRA trustee. If you take possession yourself, the metal no longer fits the exception, and the IRS treats it as a distribution. That means income tax on its value and, if you are under 59½, the 10% additional tax.</p>
<h3>The McNulty case</h3>
<p>Some promoters sell "home storage gold IRAs" or "checkbook IRAs": the IRA owns a limited liability company (LLC), you manage the LLC, and the LLC buys coins that you keep at home. In <strong><em>McNulty v. Commissioner</em>, 157 T.C. No. 10 (2021)</strong>, the U.S. Tax Court looked at exactly this arrangement. The taxpayers had used IRA-owned LLCs to buy American Eagle coins and kept them at home. The court held that taking physical possession of the coins counted as <strong>taxable distributions</strong> from the IRAs, and penalties applied on top. Being the "manager" of the LLC did not make the taxpayers trustees.</p>
<p>The lesson is simple: if anyone offers you a legal way to keep IRA gold at home, walk away. We explain the case and the promoters' arguments in detail in <a href="/articles/can-you-store-ira-gold-at-home">Can you store IRA gold at home?</a></p>
<h3>Segregated vs non-segregated storage</h3>
<table>
<thead><tr><th></th><th>Non-segregated (commingled)</th><th>Segregated</th></tr></thead>
<tbody>
<tr><td>How it works</td><td>Your metal is stored with other customers' identical products; you get back the same type and quantity</td><td>Your specific coins and bars are stored separately and returned exactly</td></tr>
<tr><td>Typical cost</td><td>Lower</td><td>Higher</td></tr>
<tr><td>Equity Trust example (Rev. 11/06/2025)</td><td>$110 a year</td><td>$160 a year</td></tr>
<tr><td>Who it suits</td><td>Most bullion buyers</td><td>People who want specific items back, or who hold unusual bars</td></tr>
</tbody>
</table>
<h3>What storage reportedly costs</h3>
<ul>
<li><strong>Bundled by custodian:</strong> Equity Trust $110 non-segregated / $160 segregated; STRATA Trust reportedly $115 / $175; GoldStar reportedly $125 commingled.</li>
<li><strong>Delaware Depository</strong> (per one election form): commingled about $0.80 per $1,000 of value a year ($95 minimum) and segregated about $1.60 per $1,000 ($190 minimum). Other sources quote different rates.</li>
<li><strong>Brink's:</strong> about $1.50 per $1,000 a year, per one custodian form.</li>
<li><strong>Texas Bullion Depository</strong> (state-run): IRA rates are negotiated through the custodian.</li>
</ul>
<p>No major depository publishes a single IRA rate card, so ask your custodian for its current storage fee in writing. On a value-based schedule, storage rises as gold prices rise.</p>
<h3>Insurance and audits</h3>
<p>Ask the custodian or depository: who insures the metal, for how much, and how often holdings are audited. Reputable depositories carry insurance and are audited regularly. Your custodian statement should list each product and quantity, not just a dollar figure.</p>`,
  },
  {
    heading: "What a gold IRA rollover costs: first-year and 10-year examples",
    body: `<p>A gold IRA has two kinds of cost, and most marketing talks only about the smaller one.</p>
<ol>
<li><strong>Account fees</strong> - setup, annual custodian fee, storage, and transaction and exit fees. These are flat dollar amounts, published by the custodian.</li>
<li><strong>The dealer spread</strong> - the difference between what you pay for the metal and what it would fetch if you sold it back. Gold IRA dealers rarely publish this, and none of the four companies we rank publishes product spreads. It is usually the biggest single cost.</li>
</ol>
<p>To make this concrete, here is a fully worked example. <strong>These are illustrations, not quotes.</strong> They use Equity Trust's published Retail Fee Schedule (FS-0001-03, Rev. 11/06/2025) and two assumed dealer spreads - 5%, roughly what a competitive bullion purchase might cost through a gold IRA dealer, and 15%, a level that should prompt hard questions. To isolate costs, we assume the price of gold stays flat for ten years. In real life it will not.</p>
<h3>Assumptions</h3>
<ul>
<li>Rollover amount: $100,000 from a former employer's 401(k), done as a direct rollover (no tax).</li>
<li>Setup: $50 (online application).</li>
<li>Account value after the spread: about $95,000 (5% spread) or $85,000 (15% spread), so both fall in the $50,000-$99,999 annual fee tier: <strong>$425 a year</strong>.</li>
<li>Storage: non-segregated, <strong>$110 a year</strong>.</li>
<li>Exit after ten years: metals liquidation $10 per asset (maximum $30) plus full account termination $250.</li>
<li>"Spread" here means the round trip: the gap between your purchase price and the immediate sell-back value.</li>
</ul>
<h3>First-year cost on $100,000</h3>
<table>
<thead><tr><th>Cost</th><th>5% spread (illustration)</th><th>15% spread (illustration)</th></tr></thead>
<tbody>
<tr><td>Dealer spread</td><td>$5,000</td><td>$15,000</td></tr>
<tr><td>Custodian setup</td><td>$50</td><td>$50</td></tr>
<tr><td>Annual custodian fee</td><td>$425</td><td>$425</td></tr>
<tr><td>Storage (non-segregated)</td><td>$110</td><td>$110</td></tr>
<tr><td><strong>Total first-year cost</strong></td><td><strong>$5,585</strong></td><td><strong>$15,585</strong></td></tr>
<tr><td>Sell-back value at end of year 1 (flat prices)</td><td>about $95,000</td><td>about $85,000</td></tr>
</tbody>
</table>
<h3>Ten-year cost on $100,000</h3>
<table>
<thead><tr><th>Cost over 10 years</th><th>5% spread (illustration)</th><th>15% spread (illustration)</th></tr></thead>
<tbody>
<tr><td>Dealer spread (one time)</td><td>$5,000</td><td>$15,000</td></tr>
<tr><td>Setup</td><td>$50</td><td>$50</td></tr>
<tr><td>Annual fee ($425 x 10)</td><td>$4,250</td><td>$4,250</td></tr>
<tr><td>Storage ($110 x 10)</td><td>$1,100</td><td>$1,100</td></tr>
<tr><td>Liquidation + termination at exit</td><td>$280</td><td>$280</td></tr>
<tr><td><strong>Total ten-year cost</strong></td><td><strong>$10,680</strong></td><td><strong>$20,680</strong></td></tr>
<tr><td>Average per year</td><td>about $1,068 (about 1.1% of $100,000)</td><td>about $2,068 (about 2.1% of $100,000)</td></tr>
</tbody>
</table>
<p>In plain terms: at a 5% spread, gold would need to rise by roughly $10,700 over ten years on this account just to get you back to $100,000. At a 15% spread, it would need to rise by about $20,700. The difference between the two scenarios is <strong>$10,000</strong> - and it is decided in a single phone call on the day you buy.</p>
<h3>The same example on $50,000</h3>
<table>
<thead><tr><th>Cost over 10 years</th><th>5% spread (illustration)</th><th>15% spread (illustration)</th></tr></thead>
<tbody>
<tr><td>Dealer spread</td><td>$2,500</td><td>$7,500</td></tr>
<tr><td>Setup</td><td>$50</td><td>$50</td></tr>
<tr><td>Annual fee ($350 tier, $25,000-$49,999, x 10)</td><td>$3,500</td><td>$3,500</td></tr>
<tr><td>Storage ($110 x 10)</td><td>$1,100</td><td>$1,100</td></tr>
<tr><td>Liquidation + termination</td><td>$280</td><td>$280</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$7,430 (about 14.9%)</strong></td><td><strong>$12,430 (about 24.9%)</strong></td></tr>
</tbody>
</table>
<p class="small"><em>All figures are illustrations based on one custodian's published schedule and assumed spreads. Your custodian, tier, storage choice and dealer pricing will differ. If gold rises, value-based tiers and storage fees can rise too.</em></p>
<h3>What changes the numbers</h3>
<ul>
<li><strong>Segregated storage</strong> adds $50 a year at Equity Trust ($500 over ten years).</li>
<li><strong>Cheaper custodians.</strong> Some flat-fee custodians reportedly charge far less on large accounts - for example STRATA Trust's reported $150 a year precious metals tier. Others charge more: Preferred Trust lists $300 a year for a metals-only IRA, and Madison Trust's quarterly fee works out to roughly $556 a year for one asset.</li>
<li><strong>Fee waivers.</strong> Dealers sometimes cover the first year or several years of fees. American Hartford Gold reportedly waives storage for one year at $50,000+ and three years at $100,000+; Goldco advertises up to three years of waivers for eligible accounts. Waivers are worth having - but compare them against the spread, because $1,605 of waived fees (three years at $535) is small next to a 5- or 10-point difference in spread.</li>
<li><strong>Product choice.</strong> Proof and "premium" coins carry much wider spreads than bullion (see <a href="#which-metals-you-can-buy-with-rollover-money">which metals you can buy</a>).</li>
</ul>
<p>You can run your own numbers with our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>, and our <a href="/articles/gold-ira-fees">complete guide to gold IRA fees</a> compares custodian schedules line by line.</p>`,
  },
  {
    heading: "Rollover mistakes and penalties to avoid",
    body: `<p>Almost every expensive gold IRA rollover story comes down to one of a dozen mistakes. Here they are, roughly in order of how much they can cost.</p>
<table>
<thead><tr><th>Mistake</th><th>What happens</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Taking a check payable to you from a 401(k), 403(b), 457(b) or TSP</td><td>20% withheld; any amount not redeposited within 60 days is taxable (+10% under 59½)</td><td>Ask for a direct rollover</td></tr>
<tr><td>Missing the 60-day deadline</td><td>The whole amount becomes a taxable distribution</td><td>Use direct methods; if late, check Rev. Proc. 2020-46</td></tr>
<tr><td>Two IRA-to-IRA indirect rollovers in 12 months</td><td>Second one is taxable and may become an excess contribution (6% a year)</td><td>Use trustee-to-trustee transfers</td></tr>
<tr><td>Rolling over a required minimum distribution</td><td>RMDs cannot be rolled over; the amount can become an excess contribution</td><td>Take this year's RMD before you roll the rest</td></tr>
<tr><td>Buying ineligible metal (e.g. Krugerrands, rare coins)</td><td>Treated as a distribution under 408(m)</td><td>Buy only eligible bullion or American Eagles</td></tr>
<tr><td>Storing IRA metal at home</td><td>Taxable distribution, plus penalties (<em>McNulty</em>)</td><td>Use an approved depository</td></tr>
<tr><td>Moving a SIMPLE IRA within 2 years</td><td>Up to 25% additional tax</td><td>Wait two years, or move to another SIMPLE IRA</td></tr>
<tr><td>Non-spouse beneficiary "rolling over" an inherited IRA</td><td>Fully taxable, cannot be put back</td><td>Trustee-to-trustee transfer to an inherited IRA only</td></tr>
<tr><td>Mixing Roth and pre-tax money</td><td>Mis-reported accounts and possible tax problems</td><td>Open separate traditional and Roth accounts</td></tr>
<tr><td>Rolling 457(b) money you need before 59½</td><td>Loses the 457(b) penalty-free access</td><td>Leave what you may need in the 457(b)</td></tr>
<tr><td>Rolling 401(k) money you need between 55 and 59½</td><td>May lose the "rule of 55" exception</td><td>Check with a tax professional first</td></tr>
<tr><td>Paying a wide spread on proof or "exclusive" coins</td><td>Immediate loss of 20%+ of value in some cases</td><td>Get spreads in writing; stick to bullion</td></tr>
</tbody>
</table>
<h3>The RMD trap in more detail</h3>
<p>If you are already at required minimum distribution age (73 for people born 1951-1959, 75 for people born in 1960 or later), the first dollars that come out of a traditional IRA or 401(k) in a year count toward that year's RMD - and <strong>RMDs are not eligible to be rolled over</strong>. So if you move a 401(k) in a year you owe an RMD, take the RMD first (or make sure the plan pays it to you separately) and roll only the rest. IRS <a href="https://www.irs.gov/publications/p590b" rel="noopener" target="_blank">Publication 590-B</a> covers RMD rules in detail.</p>
<h3>Softer mistakes that still cost money</h3>
<ul>
<li><strong>Moving more than you planned</strong> because a minimum or a promotion nudged you higher.</li>
<li><strong>Not reading the buy direction letter</strong> before signing - it is your last chance to catch the wrong product or price.</li>
<li><strong>Ignoring liquidity.</strong> Metal has to be sold (or distributed in kind) to pay RMDs. If your gold IRA is your only IRA, plan how you will meet RMDs.</li>
<li><strong>Not keeping records.</strong> Invoices, confirmations, 1099-R and 5498 forms are your proof if the IRS asks questions.</li>
<li><strong>Not asking a professional.</strong> One hour with a tax professional before a large rollover costs far less than fixing a mis-coded distribution.</li>
</ul>`,
  },
  {
    heading: "Sales tactics and red flags during a rollover",
    body: `<p>Most gold IRA companies sell by phone, and many are paid largely through the spread on the metal they sell you. That does not make them dishonest - but it does mean the person on the phone has an incentive to sell more, and to sell higher-margin products. Regulators have repeatedly found that some firms crossed the line into fraud, often targeting retirees rolling over 401(k), IRA and TSP money.</p>
<h3>Common tactics and what is really going on</h3>
<ul>
<li><strong>"Free silver" or bonus metal.</strong> Offers such as "up to 10% bonus silver" or "up to $25,000 in free silver" are paid for by the company's margin on what you buy. They are not necessarily bad deals, but the real question is your total price per ounce. Ask: "What is my total spread over spot, including the bonus?"</li>
<li><strong>Buyback promises.</strong> Advertised "buyback guarantees" or "highest buyback" pledges are generally policies, not contracts, and they do not fix the price you will receive. American Hartford Gold, for example, says it cannot legally guarantee repurchase. A promise to buy back means little if the buyback price is far below what you paid.</li>
<li><strong>Fear and urgency.</strong> Scripts about imminent bank failures, dollar collapse or government seizure of retirement accounts are designed to rush you. A legitimate rollover can wait a week while you check facts.</li>
<li><strong>"IRS-approved" dealers.</strong> The IRS does not approve dealers. The phrase is a red flag on its own.</li>
<li><strong>Steering to proof, semi-numismatic or "exclusive" coins.</strong> These typically carry far wider spreads than bullion (one dealer disclosed 20-23% on collectible and proof coins versus 10% on IRA bullion).</li>
<li><strong>Home storage pitches.</strong> See the <a href="#storage-rules-and-why-home-storage-fails">McNulty case</a>.</li>
<li><strong>Pressure to move everything</strong>, or to move more than the minimum you stated.</li>
<li><strong>Refusing to put prices and spreads in writing</strong>, or to quote fees except on a sales call.</li>
<li><strong>Telling you to take a check payable to yourself.</strong> This exposes you to the 20% withholding trap.</li>
</ul>
<h3>What regulators have found</h3>
<table>
<thead><tr><th>Case</th><th>What regulators said</th><th>Outcome (as reported)</th></tr></thead>
<tbody>
<tr><td>Red Rock Secured (CFTC, SEC, states, 2023)</td><td>About $61.8M taken from roughly 950 customers, much of it IRA, 401(k) and TSP money; customers were told markups were small but were charged as much as about 130%</td><td>SEC litigation release lr-25996 reports a final judgment of about $76.4M</td></tr>
<tr><td>Safeguard Metals (SEC, CFTC)</td><td>SEC: average markup about 64% versus disclosed 4-33%; CFTC: silver coin markups from 51% to over 70%</td><td>Final judgment Oct 2025: about $25.6M restitution plus an equal penalty (about $51M total)</td></tr>
<tr><td>Lear Capital (New York AG)</td><td>Undisclosed commissions of up to 33% on more than $43M of sales</td><td>Settlement of roughly $5-6M; later Chapter 11 plan</td></tr>
<tr><td>Goldline (2012, Santa Monica)</td><td>Coin markups of upwards of 55%</td><td>Up to $4.5M in refunds plus an $800,000 fund; no admission of wrongdoing</td></tr>
<tr><td>Metals.com (Massachusetts)</td><td>One couple charged a 54% markup</td><td>State enforcement action</td></tr>
</tbody>
</table>
<p>The CFTC, FINRA and NASAA published a joint advisory on March 20, 2024, "<a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="noopener" target="_blank">10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals</a>". It is short and worth reading before any call. Our <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags guide</a> covers more cases.</p>
<h3>Questions to ask every dealer, in writing</h3>
<ol>
<li>What is the spread over spot on each product you are recommending, today?</li>
<li>What would you pay me to buy it back today, and how is that price set?</li>
<li>Who is the custodian, and can I use a different one?</li>
<li>Which depository, and is storage segregated or commingled?</li>
<li>What fees will the custodian charge in year one and every year after?</li>
<li>What exactly is the bonus or promotion, and is its cost included in my price?</li>
<li>Is there a cancellation or refund window, and what does it cost to use it?</li>
</ol>
<p>A company that answers clearly and in writing is not guaranteed to be the cheapest, but one that refuses is telling you something. A rule of thumb many buyers use - a heuristic, not a regulation - is to push back hard on any bullion spread above roughly 10-15%.</p>`,
  },
];
