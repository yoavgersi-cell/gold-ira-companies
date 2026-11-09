import type { ArticleSection } from "@/lib/config";

// Part 4 of "Gold vs Silver in 2026". Taxes (in and out of IRAs, sales tax),
// gold IRA vs silver IRA, ETFs, how much of each (commentators' ranges, not
// advice), a worked rebalancing example, the 2026 "is silver better?" and
// "gold or silver for retirement?" questions, and the decision matrix.
// IRS rules from PILLAR-RESEARCH.md section 5 (IRC 408(m), Notice 2025-67).

export const part4: ArticleSection[] = [
  {
    heading: "How are gold and silver taxed?",
    body: `<p><strong>Outside an IRA, the IRS treats physical gold and silver - and physically backed ETFs such as GLD and SLV - as collectibles, so long-term gains are taxed at up to 28%. Inside a traditional IRA, gains grow tax-deferred and withdrawals are taxed as ordinary income; in a Roth IRA, qualified withdrawals are tax-free. The rules are the same for both metals.</strong></p>
<h3>Federal income tax</h3>
<table>
<thead><tr><th>How you hold it</th><th>Gold</th><th>Silver</th></tr></thead>
<tbody>
<tr><td>Physical metal, held more than one year</td><td>Collectible: up to 28% on long-term gains</td><td>Same</td></tr>
<tr><td>Physical metal, held one year or less</td><td>Short-term gain at ordinary income rates</td><td>Same</td></tr>
<tr><td>Grantor-trust ETFs (GLD, IAU, GLDM, SLV, SIVR)</td><td>Taxed like the metal: up to 28% long-term</td><td>Same</td></tr>
<tr><td>Traditional IRA (gold or silver IRA)</td><td>No tax on gains inside; withdrawals taxed as ordinary income; 10% additional tax before 59½ unless an exception applies</td><td>Same</td></tr>
<tr><td>Roth IRA</td><td>Qualified withdrawals tax-free; no RMDs for the original owner</td><td>Same</td></tr>
</tbody>
</table>
<p>The 28% figure is a <strong>maximum</strong> rate; if your ordinary rate is lower, the lower rate applies. Losses can offset gains. Because rules interact with your whole return, a tax professional should check your situation.</p>
<h3>Sales tax: a bigger issue for small silver buys</h3>
<p>Most states exempt investment bullion from sales tax, but not all, and many exemptions have <strong>minimum purchase thresholds</strong>. According to 2026 state-by-state guides, Hawaii, Maine, New Mexico, Vermont, Washington (which re-taxed bullion from January 1, 2026) and Washington, D.C. tax bullion; Maryland's treatment is reported inconsistently; Virginia exempts purchases over $1,000 and Connecticut over $500 (<a href="https://findbullionprices.com/blog/bullion-sales-tax-by-state/" rel="nofollow noopener" target="_blank">findbullionprices</a>; <a href="https://www.usagold.com/is-there-sales-tax-on-gold-and-silver-a-state-by-state-guide-2026/" rel="nofollow noopener" target="_blank">USAGOLD</a>). Check your own state's revenue department, because these rules change.</p>
<p>Thresholds matter more for silver. A single gold coin clears a $1,000 threshold easily. A small silver order may not - so a $400 silver purchase could be taxed where a $4,000 gold purchase is not. Inside an IRA, purchases are generally not subject to sales tax in practice, but confirm with your custodian.</p>
<h3>IRA eligibility</h3>
<p>Under IRC 408(m), most metals in an IRA count as collectibles - treated as a distribution - unless they qualify for an exception. Gold must be at least <strong>.995</strong> fine and silver at least <strong>.999</strong>, held by the trustee or custodian. American Gold and Silver Eagles qualify by name, including proofs. Junk silver, sterling and most collector coins do not. See our list of <a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a> and our <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a> guide.</p>`,
  },
  {
    heading: "Is a gold IRA or silver IRA better?",
    body: `<p><strong>Neither account is "better" in tax terms - a gold IRA and a silver IRA follow identical rules, and many precious metals IRAs hold both. The difference is the metal: a gold-heavy IRA has been less volatile, cheaper to fill with low-premium products and simpler to store, while a silver-heavy IRA has had bigger swings and higher coin premiums.</strong></p>
<p>The tax code has no separate "gold IRA" or "silver IRA". Both are self-directed IRAs holding physical metal through a custodian and an approved depository, with the same contribution limits ($7,500 plus a $1,100 catch-up at 50+ in 2026), rollover and RMD rules.</p>
<table>
<thead><tr><th>Question</th><th>Mostly gold IRA</th><th>Mostly silver IRA</th></tr></thead>
<tbody>
<tr><td>Price swings</td><td>Lower - about 30% fall from the 2026 record</td><td>Higher - about 59% fall from the 2026 record</td></tr>
<tr><td>Product premiums</td><td>Low on bars and common coins</td><td>Higher on coins; low on 100 oz and 1,000 oz bars</td></tr>
<tr><td>Storage</td><td>Compact; flat fees common</td><td>Bulky; ask whether silver costs more</td></tr>
<tr><td>Fixed yearly fees as a share of the account</td><td>Same dollar fees, same share</td><td>Same dollar fees, same share - but a bigger drag if returns are volatile and you sell low</td></tr>
<tr><td>RMDs and partial sales</td><td>Each coin is ~$4,000; fractional sales can be clumsy</td><td>Easy to sell small amounts</td></tr>
<tr><td>Taking metal out "in kind"</td><td>Easy to ship</td><td>Heavy; shipping costs more</td></tr>
</tbody>
</table>
<p>Most of the costs that matter in either account - setup, custodian and storage fees, and above all the dealer's spread - are covered in our <a href="/articles/gold-ira-fees">gold IRA fees</a> guide and our <a href="/articles/silver-ira">silver IRA guide</a>. If you are moving money from a 401(k) or another IRA, read <a href="/articles/gold-ira-rollover">how a gold IRA rollover works</a> first, and compare custodians in our <a href="/articles/gold-ira-custodians">custodian guide</a>.</p>
`,
  },
  {
    heading: "Gold ETFs vs silver ETFs",
    body: `<p><strong>Physically backed ETFs are the cheapest and simplest way to own either metal's price. The lowest-cost gold ETFs charge about 0.09-0.10% a year; the main silver ETFs charge 0.30% (SIVR) and 0.50% (SLV). Both are taxed as collectibles outside retirement accounts.</strong></p>
<table>
<thead><tr><th>Fund</th><th>Metal</th><th>Expense ratio</th><th>Yearly cost on $50,000</th></tr></thead>
<tbody>
<tr><td>IAUM</td><td>Gold</td><td>0.09%</td><td>$45</td></tr>
<tr><td>GLDM</td><td>Gold</td><td>0.10%</td><td>$50</td></tr>
<tr><td>SGOL</td><td>Gold</td><td>0.17%</td><td>$85</td></tr>
<tr><td>IAU</td><td>Gold</td><td>0.25%</td><td>$125</td></tr>
<tr><td>GLD</td><td>Gold</td><td>0.40%</td><td>$200</td></tr>
<tr><td>SIVR</td><td>Silver</td><td>0.30%</td><td>$150</td></tr>
<tr><td>SLV</td><td>Silver</td><td>0.50%</td><td>$250</td></tr>
</tbody>
</table>
<p class="small"><em>Expense ratios as reported in 2026 (our research notes; SLV and SIVR confirmed by <a href="https://247wallst.com/investing/2026/06/22/slv-vs-sivr-which-physical-silver-etf-is-the-smarter-hold/" rel="nofollow noopener" target="_blank">24/7 Wall St., Jun 22, 2026</a>). Check each issuer's current fact sheet before buying. Yearly cost is our arithmetic and ignores trading spreads and commissions.</em></p>
<h3>ETF or physical?</h3>
<ul>
<li><strong>ETFs</strong> avoid premiums, storage and bulk - a big advantage for silver - and fit in an ordinary IRA or brokerage account. You do not hold the metal yourself.</li>
<li><strong>Physical metal</strong> gives you something outside the financial system, but you pay premiums, spreads and storage costs.</li>
</ul>
<p>Our <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a> comparison works through the trade-offs and the 10-year cost math.</p>`,
  },
  {
    heading: "How much silver should I own versus gold?",
    body: `<p><strong>There is no correct split, and we cannot set one for you. Commentators who discuss it commonly suggest keeping total precious metals to a modest slice of a portfolio - often cited as 5-10% - with gold as the larger part and silver as a smaller part. Splits such as 75/25 or 80/20 gold-to-silver are often mentioned; these are rules of thumb, not advice.</strong></p>
<h3>Step 1: decide the total precious metals share</h3>
<p>The question "how much silver?" comes second. The first question is how much of your savings belongs in precious metals at all. Our guide to <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold to hold in a retirement portfolio</a> reviews the ranges commentators cite and the reasons for them. Metals pay no income, have long periods of poor returns, and have lagged stocks over long stretches - so most commentators keep them modest.</p>
<h3>Step 2: decide the split</h3>
<table>
<thead><tr><th>Split (gold / silver by value)</th><th>How it is typically described</th><th>Who it may suit</th></tr></thead>
<tbody>
<tr><td>100 / 0</td><td>Gold only; lowest volatility within metals</td><td>People who want insurance and simplicity, especially close to or in retirement</td></tr>
<tr><td>80 / 20 or 75 / 25</td><td>Gold core with a silver "satellite"</td><td>People who want some extra upside and accept bigger swings on a small part</td></tr>
<tr><td>50 / 50</td><td>Equal weights; noticeably more volatile</td><td>Longer time horizons and higher risk tolerance</td></tr>
<tr><td>Mostly silver</td><td>Highest volatility; biggest gains and losses</td><td>Few retirement savers; more of a speculative position</td></tr>
</tbody>
</table>
<h3>Step 3: check the risk you are really taking</h3>
<p><em>Illustration.</em> Suppose 10% of a $300,000 portfolio is in metals ($30,000). Using the January-to-November 2026 falls (gold about -30%, silver about -59%):</p>
<ul>
<li><strong>100% gold:</strong> $30,000 x 0.70 = $21,000 - a $9,000 loss, or 3% of the whole portfolio.</li>
<li><strong>75 / 25:</strong> $22,500 x 0.70 + $7,500 x 0.41 = $15,750 + $3,075 = $18,825 - a $11,175 loss, or about 3.7%.</li>
<li><strong>50 / 50:</strong> $15,000 x 0.70 + $15,000 x 0.41 = $10,500 + $6,150 = $16,650 - a $13,350 loss, or about 4.5%.</li>
</ul>
<p>If those numbers would cause you to sell in a panic, the split is too aggressive for you. A fee-only financial adviser - one who does not sell metals - can help you set both numbers in the context of your full plan.</p>`,
  },
  {
    heading: "Mixed portfolio examples and a worked rebalancing example",
    body: `<p><strong>Rebalancing means selling some of whatever has grown beyond its target share and buying what has shrunk. With a volatile metal like silver, it can lock in gains after a big run and limit the damage of a crash - though it adds trading costs, may create taxes outside an IRA, and does not always help.</strong></p>
<h3>A worked example using real 2025-2026 moves</h3>
<p><em>Illustration only. It uses actual approximate metal price changes but <strong>assumes</strong> the rest of the portfolio was flat, and it ignores dealer spreads and taxes. Hindsight makes any strategy look neat.</em></p>
<p><strong>Start (end of 2024):</strong> a $200,000 portfolio - $180,000 in other investments (90%), $15,000 in gold (7.5%) and $5,000 in silver (2.5%).</p>
<p><strong>End of 2025:</strong> gold up about 65%, silver up about 145%.</p>
<ul>
<li>Gold: $15,000 x 1.65 = $24,750</li>
<li>Silver: $5,000 x 2.45 = $12,250</li>
<li>Total: $180,000 + $24,750 + $12,250 = $217,000</li>
<li>Metals are now 17.1% of the portfolio, versus a 10% target. Silver alone is 5.6%.</li>
</ul>
<p><strong>Rebalance back to target:</strong> gold target 7.5% of $217,000 = $16,275; silver target 2.5% = $5,425. So the investor sells $8,475 of gold and $6,825 of silver and moves $15,300 into other investments ($195,300).</p>
<p><strong>Early November 2026:</strong> gold about $3,900 versus about $4,316 at end-2025 (down about 9.6%); silver about $50 versus about $72 (down about 30.6%).</p>
<table>
<thead><tr><th>Early Nov 2026</th><th>Rebalanced</th><th>Not rebalanced</th></tr></thead>
<tbody>
<tr><td>Gold</td><td>$16,275 x 0.904 = $14,706</td><td>$24,750 x 0.904 = $22,364</td></tr>
<tr><td>Silver</td><td>$5,425 x 0.694 = $3,767</td><td>$12,250 x 0.694 = $8,507</td></tr>
<tr><td>Other investments (assumed flat)</td><td>$195,300</td><td>$180,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$213,774</strong></td><td><strong>$210,871</strong></td></tr>
</tbody>
</table>
<p>In this illustration, rebalancing left the investor about <strong>$2,900</strong> better off, mainly by trimming silver near its peak. But if silver had kept rising through 2026, rebalancing would have cost money. And outside an IRA, selling $15,300 of metal could have triggered collectibles tax on the gains, plus dealer spreads on physical metal.</p>
<h3>Practical rebalancing points</h3>
<ul>
<li><strong>Use bands, not a calendar alone.</strong> Many people rebalance when a holding drifts a set amount from target (for example, when silver goes from 2.5% to above 4%).</li>
<li><strong>Rebalance with new money where you can</strong> - adding to the laggard avoids selling and taxes.</li>
<li><strong>In an IRA</strong>, selling metal does not create a current tax bill, but you still pay the dealer's spread.</li>
<li><strong>With ETFs</strong>, rebalancing costs very little, which makes them practical for this approach.</li>
</ul>`,
  },
  {
    heading: "Is silver a better investment than gold in 2026?",
    body: `<p><strong>Not clearly. In early November 2026 silver looked cheap relative to gold - a ratio near 79 versus a long-run average near 60 - but it had also just fallen about 59% from its record, analysts had cut their forecasts, and its volatility remained about twice gold's. Silver could rebound faster than gold or keep falling further; no one can reliably say which.</strong></p>
<p>Here are the honest arguments on each side as of November 9, 2026.</p>
<table>
<thead><tr><th>Arguments people make for silver now</th><th>Arguments people make for gold now</th></tr></thead>
<tbody>
<tr><td>The ratio near 79 is high by historical standards (above 84% of days since 1968)</td><td>Gold fell about half as far as silver in 2026 and has been steadier for decades</td></tr>
<tr><td>The Silver Institute forecast a sixth consecutive market deficit in 2026</td><td>Central banks bought 863 t of gold in 2025 - a buyer silver does not have</td></tr>
<tr><td>Silver is about 59% below its record; some see that as a discount</td><td>Gold's premiums and storage costs are lower, especially for small amounts</td></tr>
<tr><td>Coin and bar demand was forecast to rise 18% in 2026</td><td>Silver's solar demand was forecast to fall 19% in 2026, and industrial demand fell in 2025</td></tr>
<tr><td>Silver is still about 25% above its 2025 average</td><td>Forecasters including J.P. Morgan cut their silver outlook sharply during 2026</td></tr>
</tbody>
</table>
<p>Both columns contain real facts; the evidence does not settle the question. A high ratio has, in the past, sometimes been followed by silver outperforming - and sometimes by years of silver lagging. We do not make predictions, and we would be skeptical of anyone who says the answer is obvious.</p>
<p>What we can say is that <strong>the costs are known even when the returns are not</strong>: silver will almost certainly cost a higher premium, more storage space and a bumpier ride than the same dollars in gold.</p>`,
  },
  {
    heading: "Should I buy gold or silver for retirement?",
    body: `<p><strong>For most people saving for or living in retirement, gold is the more practical core precious metal: lower volatility, lower premiums on common products, compact storage and a deeper market. Silver can make sense as a smaller addition if you accept much bigger swings. Many commentators suggest that metals in total stay a modest part of a retirement portfolio.</strong></p>
<p>Retirement changes the question in three ways:</p>
<ol>
<li><strong>Time horizon shrinks.</strong> A 59% fall that takes ten years to recover is harder to live with at 68 than at 38.</li>
<li><strong>You need to sell.</strong> RMDs from a traditional IRA start at 73 (or 75 if born in 1960 or later). If your metal is down sharply when you must withdraw, you lock in losses. A Roth IRA has no RMDs for the original owner.</li>
<li><strong>Costs compound.</strong> Custodian and storage fees, plus the spread on every sale, matter more when the investment pays no income.</li>
</ol>
<p>None of this makes silver wrong for a retiree - it raises the bar. Low-premium bars or a low-cost ETF reduce the cost, and a smaller allocation limits the damage when it falls.</p>
<p>For the step-by-step version, read <a href="/articles/how-to-invest-in-gold-for-retirement">how to invest in gold for retirement</a> and our full <a href="/articles/gold-ira">gold IRA guide</a>. And please talk to a fee-only adviser or tax professional - someone who does not earn a commission on metal - before moving retirement savings.</p>`,
  },
  {
    heading: "Which fits you: gold, silver or a mix?",
    body: `<p><strong>Gold tends to fit people who want stability, simple storage and a long-term hedge; silver tends to fit people with longer horizons and higher risk tolerance who want more upside from a precious metals rally; a gold-heavy mix suits many people in between. Use the matrix below as a starting point, not a recommendation.</strong></p>
<table>
<thead><tr><th>Your situation</th><th>Goal</th><th>Time horizon</th><th>Account size for metals</th><th>Storage</th><th>Often the better fit</th></tr></thead>
<tbody>
<tr><td>Retired, taking withdrawals</td><td>Insurance against crises; stability</td><td>Under 10 years</td><td>Any</td><td>Depository or ETF</td><td><strong>Gold</strong> (or gold ETF)</td></tr>
<tr><td>Within 5-10 years of retiring</td><td>Diversification</td><td>10-20 years</td><td>$25,000+</td><td>Depository (IRA) or home safe</td><td><strong>Mostly gold</strong>, small silver share</td></tr>
<tr><td>Small budget, buying a little at a time</td><td>Build a position gradually</td><td>10+ years</td><td>Under $5,000</td><td>Home</td><td><strong>Gold ETF</strong>, or silver in low-premium forms; avoid high-premium small coins</td></tr>
<tr><td>Younger saver, high risk tolerance</td><td>Upside from a metals rally</td><td>20+ years</td><td>Any</td><td>Any</td><td><strong>Mix</strong>, possibly with a larger silver share</td></tr>
<tr><td>Wants metal at home in a small space</td><td>Hold metal outside the system</td><td>Any</td><td>$20,000+</td><td>Small home safe</td><td><strong>Gold</strong> (silver is bulky)</td></tr>
<tr><td>Wants small units to barter or sell</td><td>Granularity</td><td>Any</td><td>Any</td><td>Home</td><td><strong>Some silver</strong> alongside gold</td></tr>
<tr><td>Only wants the price, lowest cost</td><td>Exposure without storage</td><td>Any</td><td>Any</td><td>None</td><td><strong>Low-cost ETFs</strong> of either metal</td></tr>
<tr><td>Rolling over a 401(k) to physical metal</td><td>Tax-advantaged physical holding</td><td>Any</td><td>$10,000-$50,000+ (common company minimums)</td><td>Approved depository</td><td><strong>Gold-heavy precious metals IRA</strong>; check silver storage pricing</td></tr>
</tbody>
</table>
<p class="small"><em>This matrix reflects general trade-offs described in this guide, not personal advice. Your full financial picture, taxes and health all matter.</em></p>
<h3>Three questions to settle it</h3>
<ol>
<li><strong>Could you watch this holding fall 60% and not sell?</strong> If not, keep silver small or skip it.</li>
<li><strong>Where will it be stored, and what will that cost per year?</strong> If you plan home storage, measure your safe.</li>
<li><strong>What is the all-in price per ounce against spot?</strong> If you cannot get that number in writing, do not buy.</li>
</ol>`,
  },
];
