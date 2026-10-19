import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Gold IRA Fees & Costs (2026)".
// FAQ sections (question headings become FAQPage schema) and the bottom line,
// which ends with the site-wide DISCLAIMER.

export const part5: ArticleSection[] = [
  {
    heading: "What fees should a gold IRA have?",
    body: `<p>A normal, fairly priced gold IRA has a short list of costs. As a rough benchmark, based on the reported figures in this guide as of October 2026:</p>
<table>
<thead><tr><th>Cost</th><th>Reasonable benchmark (reported range)</th><th>Question to ask if it is higher</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$0-$75 at the custodian</td><td>"What else is bundled into this fee?"</td></tr>
<tr><td>Custodian admin</td><td>About $90-$300 a year flat; tiered schedules more at higher balances</td><td>"Is this flat or tiered? Which tier am I in?"</td></tr>
<tr><td>Storage + insurance</td><td>About $100-$175 commingled; $150-$240 segregated, or a percentage of value</td><td>"Do I need segregated storage for bullion?"</td></tr>
<tr><td>Dealer premium on bullion</td><td>About 2-6% at competitive online dealers; phone dealers often more</td><td>"What is your markup over spot, as a percentage?"</td></tr>
<tr><td>Buyback</td><td>About 1-2% under spot on common coins</td><td>"What would you pay me for these today?"</td></tr>
<tr><td>Exit / transaction fees</td><td>About $10-$300 per event</td><td>"What does it cost to sell, distribute or close?"</td></tr>
</tbody>
</table>
<p>What a gold IRA should <strong>not</strong> have: an unexplained "processing" fee, a markup the company will not state, or "free" metal with no disclosed spot value. If you want to model your own numbers, use the <a href="/gold-ira-fee-calculator">fee calculator</a>. For a refresher on how the account itself is structured, see <a href="/articles/what-is-a-gold-ira">what is a gold IRA</a>.</p>`,
  },
  {
    heading: "Why don't gold IRA companies publish their fees?",
    body: `<p>There are several reasons, some reasonable and some less so.</p>
<ul>
<li><strong>Metal prices change every minute.</strong> A dealer cannot print one price list that stays accurate. That explains why prices are quoted live - but not why the <strong>markup percentage</strong> is kept private. A markup can be published even when the price moves.</li>
<li><strong>Custodian fees belong to the custodian.</strong> The dealer does not set them, and they vary with your account size and choices. That is fair, but the dealer can still send you the custodian's schedule.</li>
<li><strong>Promotions and pricing vary by customer.</strong> Fee waivers and bonus metal depend on the size of the account, which makes a single public price awkward.</li>
<li><strong>Sales model.</strong> Many gold IRA companies sell through phone consultations. Publishing spreads would make comparison shopping easy, which reduces the room for higher markups. One third-party reviewer reported that a large company's live chat would not quote fees and pushed for a sales call.</li>
</ul>
<p>Some dealers do publish fees, and one review list found only three companies on it that posted fees online. Transparency is one of the things we weigh in our <a href="/how-we-rank">ranking method</a>. When a company will not publish, the fix is simple: ask for a written, itemized quote using the <a href="#how-to-get-a-written-quote-and-check-it-against-spot">question script</a> above.</p>`,
  },
  {
    heading: "What is a normal markup on gold IRA coins?",
    body: `<p>For <strong>common bullion</strong> - Gold Eagles, Maple Leafs, Buffalos and bars from accredited refiners - retail premiums at competitive online dealers in 2026 ran from about <strong>1.8% (10 oz bars) to about 6% (Buffalos)</strong>, with 1 oz Gold Eagles typically 3-6%. Gold IRA companies that sell by phone usually charge more. One dealer that disclosed its spreads reported <strong>10% on bullion inside an IRA</strong>, and a common consumer rule of thumb is to push back on anything above roughly <strong>10-15% for bullion</strong> (a heuristic, not a rule).</p>
<p>For <strong>proof and collectible coins</strong>, markups are higher: the same dealer disclosed 20% for collectibles and 23% for proofs, and enforcement cases found markups of roughly <strong>50% to 130%</strong>. Those coins also tend to have weaker buyback prices.</p>
<p>Illustration of what that range means on a $50,000 purchase:</p>
<table>
<thead><tr><th>Markup (share of amount paid)</th><th>Cost in dollars</th><th>Metal value at spot</th></tr></thead>
<tbody>
<tr><td>3%</td><td>$1,500</td><td>$48,500</td></tr>
<tr><td>6%</td><td>$3,000</td><td>$47,000</td></tr>
<tr><td>10%</td><td>$5,000</td><td>$45,000</td></tr>
<tr><td>15%</td><td>$7,500</td><td>$42,500</td></tr>
<tr><td>23%</td><td>$11,500</td><td>$38,500</td></tr>
<tr><td>50%</td><td>$25,000</td><td>$25,000</td></tr>
</tbody>
</table>
<p>The full premium data, with dates and sources, is in the <a href="#dealer-premium-over-spot-the-biggest-cost-most-people-never-see">dealer premium section</a>. Which coins are eligible at all is covered in our guide to <a href="/articles/irs-approved-precious-metals">IRA-eligible precious metals</a>.</p>`,
  },
  {
    heading: "Are gold IRA storage fees per year or per ounce?",
    body: `<p><strong>Per year</strong>, in almost every case. Storage is billed annually (Equity Trust, for example, bills it in January), and it is calculated in one of two ways:</p>
<ul>
<li><strong>A flat yearly fee</strong>, such as $110 non-segregated or $160 segregated on Equity Trust's published schedule, regardless of how many ounces you hold.</li>
<li><strong>A percentage of the metal's value</strong>, such as $1.50 per $1,000 a year at Brink's (per one custodian's form), or $0.80 per $1,000 commingled at Delaware Depository with a $95 minimum.</li>
</ul>
<p>We did not find mainstream IRA storage priced per ounce. But the number of ounces still matters indirectly: silver is far bulkier than gold for the same dollar value (about 72 ounces of silver per ounce of gold at October 2026 prices), and some arrangements price large silver holdings differently. With percentage pricing, your storage bill also goes up when metal prices rise. See <a href="#depository-storage-rates-compared">depository storage rates compared</a> for the full table.</p>`,
  },
  {
    heading: "Can I avoid gold IRA fees?",
    body: `<p>You cannot avoid them entirely - someone has to keep the records and guard the vault - but you can cut them sharply. In rough order of impact:</p>
<ol>
<li><strong>Cut the spread.</strong> Buy common, low-premium bullion (bars, Maple Leafs, Eagles) instead of proof or "premium" coins. On $100,000, moving from a 15% to a 3% spread saves $12,000.</li>
<li><strong>Compare written quotes from two or three companies</strong> on identical products, on the same day.</li>
<li><strong>Hold for longer.</strong> Most costs are front-loaded; selling after a year or two is the most expensive outcome.</li>
<li><strong>Choose flat fees on larger accounts.</strong> At $250,000, a flat-fee custodian could save several hundred dollars a year compared with a tiered retail schedule.</li>
<li><strong>Choose commingled storage for bullion.</strong> It typically saves about $50 a year with no difference in vault security.</li>
<li><strong>Keep holdings simple.</strong> Fewer product types means fewer per-asset fees when you sell or distribute.</li>
<li><strong>Use real fee waivers wisely</strong> - but only after checking the spread.</li>
<li><strong>Consider whether you need physical metal at all.</strong> A low-cost gold ETF in an ordinary IRA costs about $90-$100 a year per $100,000 for the cheapest funds. See <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a>.</li>
</ol>
<p>One thing you should <strong>not</strong> do to avoid fees is store IRA metal at home. That arrangement was treated as a taxable distribution in <em>McNulty v. Commissioner</em>; read <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home</a> before considering it.</p>`,
  },
  {
    heading: "What does it cost to close a gold IRA?",
    body: `<p>Closing a gold IRA usually involves three costs: the price you get for your metal, the custodian's fees, and any taxes if the money leaves the IRA.</p>
<table>
<thead><tr><th>Cost of closing (illustration, $100,000 of metal at spot)</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Buyback at 1.5% under spot (common bullion)</td><td>$1,500</td></tr>
<tr><td>Metals liquidation fee (Equity Trust: $10 per asset, max $30)</td><td>$10-$30</td></tr>
<tr><td>Full termination fee (Equity Trust: $250; others reported $225-$300)</td><td>$250</td></tr>
<tr><td>Wire out (Equity Trust: $30)</td><td>$30</td></tr>
<tr><td><strong>Total, if you sell and move the cash to another IRA</strong></td><td><strong>About $1,790-$1,810</strong></td></tr>
</tbody>
</table>
<p>If you hold proof or collectible coins, the buyback discount can be far larger than 1.5% of what you paid, because buyers usually pay little more than metal value.</p>
<h3>Three ways to close, three different costs</h3>
<ul>
<li><strong>Sell and transfer the cash to another IRA:</strong> no tax if done as a direct transfer; costs are the buyback discount and fees above.</li>
<li><strong>Transfer the metal itself to a new custodian:</strong> avoids the buyback spread; expect termination and possibly shipping or handling fees.</li>
<li><strong>Take the metal or cash out of the IRA:</strong> in a traditional IRA, the distribution is taxed as ordinary income, plus a possible 10% additional tax before age 59½. An in-kind distribution is taxed on the metal's fair market value. See <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</li>
</ul>
<p>If you are moving to a different gold IRA company rather than closing, the <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a> covers how to transfer without triggering taxes.</p>`,
  },
  {
    heading: "The bottom line on gold IRA fees",
    body: `<p>Gold IRA fees are not mysterious once you break them into their five layers. The visible fees - setup, custodian administration and storage - are usually about <strong>$175-$300 a year</strong> at flat-fee custodians and small balances, and can reach <strong>$500-$900 or more</strong> on tiered schedules at larger balances. Watch for tiered pricing: Equity Trust's published schedule charges at least $320 a year once an account reaches $15,000, not the "$75-$225" many sites repeat.</p>
<p>The invisible costs are bigger. The <strong>dealer's spread</strong> - about 2-6% on common bullion at competitive dealers, often 10% or more by phone, and far higher on proof and "premium" coins - plus the <strong>buyback discount</strong> when you sell, usually outweigh every yearly fee combined. In our illustrations, a $100,000 gold IRA held 10 years and sold costs about <strong>$7,400</strong> in a low-cost setup and about <strong>$22,200</strong> in a high-cost one. That gap of nearly $15,000 comes mostly from the spread.</p>
<p>Here is what we would do, in plain terms:</p>
<ol>
<li>Decide whether you want physical metal at all, or whether a low-cost <a href="/articles/gold-ira-vs-gold-etf">gold ETF in a regular IRA</a> meets your goal.</li>
<li>If you want a gold IRA, stick mainly to common bullion that is eligible for IRAs.</li>
<li>Get written, itemized quotes from at least two companies - including the markup over spot and today's buyback price.</li>
<li>Read the custodian's own fee schedule and know your tier.</li>
<li>Judge promotions by the total metal value at spot you receive, not by what is "free".</li>
<li>Use a direct transfer, not a 60-day rollover check, to move your money.</li>
<li>Run the numbers in our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> before you sign.</li>
</ol>
<p>To go further, read our <a href="/articles/gold-ira">complete gold IRA guide</a>, the <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a>, and our <a href="/articles/silver-ira-guide">silver IRA guide</a> if you are considering silver. When you are ready to compare companies, start with our <a href="/">gold IRA company rankings</a> and the individual reviews of <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>.</p>
<p>And one last reminder: a gold IRA is a long-term holding with real costs and no yield. Gold can fall sharply, as it did by about 29% between January and June 2026. A fee-only financial adviser or tax professional who does not sell metals can help you decide how much, if any, belongs in your retirement plan.</p>
${DISCLAIMER}`,
  },
];
