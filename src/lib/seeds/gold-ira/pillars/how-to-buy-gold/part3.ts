import type { ArticleSection } from "@/lib/config";

// Part 3 of "How to Buy Gold in 2026". Gold ETFs, gold IRAs (with the only
// company CTAs, in a labelled box), coins vs bars, beginner products, premium
// table + "$10,000 at 1.8/4/8/25%" worked example, and fractional gold.
// Spot used for illustrations: $3,900 (Kitco, Nov 1, 2026). ETF expense ratios
// per fund sponsors as summarized by Motley Fool (Jan 2026) and PILLAR-RESEARCH.

export const part3: ArticleSection[] = [
  {
    heading: "Are gold ETFs a better way to buy gold?",
    body: `<p><strong>For many people, yes. A physically backed gold ETF tracks the gold price with no dealer premium, no storage worries and instant selling, for a yearly fee of about 0.09-0.40%. The trade-off is that you own fund shares, not gold you can hold, and gains are still taxed like collectibles.</strong></p>
<p>Exchange-traded funds (ETFs) that hold gold bars in vaults have become the biggest single way investors buy gold. Worldwide, gold ETFs took in a record <strong>$89 billion in 2025</strong> (801 tonnes), and holdings reached about 4,025 tonnes, according to the <a href="https://www.gold.org/goldhub/research/gold-etfs-holdings-and-flows/2026/01" rel="nofollow noopener" target="_blank">World Gold Council</a>. North American funds alone took in about $51 billion. Flows kept coming in 2026, with a record of roughly <strong>$31 billion in Q3 2026</strong> (<a href="https://www.kitco.com/news/article/2026-10-12/gold-etf-demand-defies-rising-bond-yields-investors-pour-31-billion-record" rel="nofollow noopener" target="_blank">Kitco</a>).</p>
<h3>Main US gold ETFs and their costs</h3>
<table>
<thead><tr><th>Fund (ticker)</th><th>Expense ratio</th><th>Yearly cost on $10,000</th></tr></thead>
<tbody>
<tr><td>iShares Gold Trust Micro (IAUM)</td><td>0.09%</td><td>$9</td></tr>
<tr><td>SPDR Gold MiniShares (GLDM)</td><td>0.10%</td><td>$10</td></tr>
<tr><td>abrdn Gold ETF Trust (SGOL)</td><td>0.17%</td><td>$17</td></tr>
<tr><td>Goldman Sachs Physical Gold ETF (AAAU)</td><td>0.18%</td><td>$18</td></tr>
<tr><td>iShares Gold Trust (IAU)</td><td>0.25%</td><td>$25</td></tr>
<tr><td>SPDR Gold Shares (GLD)</td><td>0.40%</td><td>$40</td></tr>
</tbody>
</table>
<p>Expense ratios as reported in 2026 (for example, <a href="https://www.fool.com/coverage/etfs/2026/01/24/gold-etfs-gldm-offers-lower-costs-while-iau-boasts-more-assets-under-management" rel="nofollow noopener" target="_blank">Motley Fool, Jan 2026</a>); confirm on each fund's own page before you buy. GLD is the largest and most traded, which matters to active traders; long-term holders usually care more about the lower fees of GLDM, IAUM or IAU.</p>
<h3>ETF vs physical gold: the honest comparison</h3>
<table>
<thead><tr><th></th><th>Gold ETF</th><th>Physical gold at home</th></tr></thead>
<tbody>
<tr><td>Cost to buy</td><td>Small trading spread; often no commission</td><td>Premium of about 1.8-6% on common bullion</td></tr>
<tr><td>Yearly cost</td><td>0.09-0.40% of value</td><td>Storage and insurance (from nothing to about 0.5% a year)</td></tr>
<tr><td>Cost to sell</td><td>Small trading spread</td><td>Dealer bid, typically around 1-2% under spot on common coins</td></tr>
<tr><td>Speed</td><td>Seconds, during market hours</td><td>Hours to days</td></tr>
<tr><td>Hold it in your hand</td><td>No</td><td>Yes</td></tr>
<tr><td>Counterparty</td><td>Fund trustee, custodian and broker</td><td>None once in your possession</td></tr>
<tr><td>Federal tax on long-term gains</td><td>Collectibles rate, up to 28%, for grantor-trust funds like GLD and IAU</td><td>Collectibles rate, up to 28%</td></tr>
</tbody>
</table>
<p>Inside an IRA or 401(k), an ETF avoids the collectibles issue altogether, because gains inside the account are not taxed until you withdraw. That is a key reason many retirement savers use ETFs rather than a physical gold IRA. We compare the two in depth in <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a>.</p>`,
  },
  {
    heading: "How do you buy gold for an IRA?",
    body: `<p><strong>To buy physical gold for retirement, you open a self-directed IRA with a custodian, fund it by transfer or rollover from an existing IRA or 401(k), and have the custodian buy IRS-eligible bullion (at least .995 fine, or American Eagles) from a dealer. The metal must be stored at an approved depository, not at home.</strong></p>
<p>A gold IRA is simply an individual retirement account that holds physical metal instead of stocks and funds. The same tax rules apply as for any IRA, but the plumbing is different: a <strong>custodian</strong> holds the account, a <strong>dealer</strong> sells the metal, and a <strong>depository</strong> stores it. Our <a href="/articles/gold-ira">complete gold IRA guide</a> covers how it all fits together.</p>
<h3>The steps in brief</h3>
<ol>
<li><strong>Choose a dealer and a self-directed IRA custodian.</strong> Many gold IRA companies will suggest a custodian, but you can choose your own. See our list of <a href="/articles/gold-ira-custodians">gold IRA custodians</a>.</li>
<li><strong>Fund the account.</strong> A trustee-to-trustee transfer or a direct rollover avoids taxes and withholding. Our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a> explains the one-rollover-per-12-months rule and the 60-day trap.</li>
<li><strong>Pick eligible metal.</strong> The tax code allows bullion of at least .995 fineness for gold, plus American Eagles by name. Most proof and collectible coins, and Krugerrands, are not allowed. See <a href="/articles/irs-approved-precious-metals">which precious metals an IRA can hold</a> and <a href="/articles/best-gold-coins-for-ira">the best gold coins for an IRA</a>.</li>
<li><strong>Get the price in writing.</strong> Ask for the premium over spot on each product and the dealer's current buyback price before you approve the trade.</li>
<li><strong>Choose storage.</strong> The metal goes to an approved depository - commingled or segregated. Home storage of IRA gold has led to taxes and penalties in court; see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></li>
</ol>
<h3>What it costs</h3>
<p>Expect a setup fee of about $0-$75 at the custodian, yearly custodian and storage fees of roughly $175-$300 at flat-fee custodians (more on tiered schedules), and - usually the largest cost - the dealer's spread on the metal. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> breaks this down with real fee schedules, and our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> runs the numbers for your amount. If you are still deciding whether this makes sense at all, read <a href="/articles/is-a-gold-ira-a-good-investment">is a gold IRA a good investment?</a> first.</p>
<h3>If you're buying for retirement: companies we review</h3>
<p><em>Disclosure: some of the gold IRA companies below pay us when readers contact them. This does not change the facts we report, and it is explained on our <a href="/how-we-rank">how we rank</a> page. Figures are reported or advertised terms as of October 2026 - confirm them in writing.</em></p>
<table>
<thead><tr><th>Company</th><th>Reported minimum</th><th>Notes</th><th>Our review</th></tr></thead>
<tbody>
<tr><td>American Hartford Gold</td><td>$10,000 (IRA)</td><td>Advertises a buyback commitment with no liquidation fee; setup about $230 reported</td><td><a href="/reviews/american-hartford-gold">American Hartford Gold review</a></td></tr>
<tr><td>Goldco</td><td>$25,000 ("generally")</td><td>Advertises bonus silver on qualifying orders; up to 3 years of fee waivers for eligible accounts</td><td><a href="/reviews/goldco">Goldco review</a></td></tr>
<tr><td>Augusta Precious Metals</td><td>$50,000</td><td>Positions itself for larger savers; advertises a no-fee buyback</td><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals review</a></td></tr>
</tbody>
</table>
<p>None of these companies publishes the spread it charges on each product, so ask. To compare more broadly, see our <a href="/">gold IRA company rankings</a>, <a href="/articles/gold-ira-reviews">gold IRA reviews</a> and <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a>. If you are worried about what happens if a dealer fails, read <a href="/articles/what-happens-if-gold-ira-company-goes-bankrupt">what happens if a gold IRA company goes bankrupt</a>. And if you are thinking about silver too, our <a href="/articles/silver-ira">silver IRA guide</a> covers the differences.</p>`,
  },
  {
    heading: "Should you buy gold coins or gold bars?",
    body: `<p><strong>Buy bars if your goal is the most gold for your money: larger bars carry the lowest premiums, often under 2% for 10 oz sizes. Buy government coins if you value easy recognition, simple resale and smaller units. Many buyers hold both.</strong></p>
<p>The coins-vs-bars question is really about three things: price per ounce, ease of selling, and the size of each piece.</p>
<table>
<thead><tr><th></th><th>Government bullion coins (Eagle, Buffalo, Maple Leaf)</th><th>Gold bars (1 oz, 10 oz, kilo)</th></tr></thead>
<tbody>
<tr><td>Typical premium (Oct 2026)</td><td>About 3.5-6% for current-year 1 oz coins; lower for random-year Eagles</td><td>About 2.2% on a generic 1 oz bar, 1.8% on a 10 oz bar, about 1-3% on a kilo</td></tr>
<tr><td>Who guarantees it</td><td>A national mint - weight and purity are backed by a government</td><td>A private refiner (PAMP, Valcambi, Rand Refinery, Perth Mint and others)</td></tr>
<tr><td>Recognition when selling</td><td>Instantly recognized by almost every dealer</td><td>Well-known refiners are easy to sell; unknown brands may need testing</td></tr>
<tr><td>Counterfeit risk</td><td>Exists, but design detail and tight specs make fakes easier to spot</td><td>Higher for large bars and unknown brands; tungsten-core fakes target bars</td></tr>
<tr><td>Flexibility</td><td>Good - sell one ounce at a time</td><td>Large bars must be sold whole</td></tr>
<tr><td>IRA-eligible</td><td>Gold Eagles, Buffalos and Maple Leafs, yes; Krugerrands, no</td><td>Yes, if .995 fine or better from an accredited refiner</td></tr>
</tbody>
</table>
<h3>When coins make more sense</h3>
<ul>
<li>You are buying a few ounces and want the easiest possible resale.</li>
<li>You want to be able to sell small amounts over time.</li>
<li>You prefer a government guarantee over a private refiner.</li>
</ul>
<h3>When bars make more sense</h3>
<ul>
<li>You are buying $20,000 or more and want the lowest cost per ounce.</li>
<li>You will store the gold in a vault, where a few large bars are simple to hold.</li>
<li>You are comfortable sticking with top refiners and keeping bars sealed in their assay cards.</li>
</ul>
<p>A sensible split for many buyers is <strong>coins for flexibility and 10 oz bars for bulk</strong>. Kilo bars (32.15 troy ounces, worth about $125,000 at $3,900 spot) are cheapest per ounce but hard to sell in part, and some kilo-bar sales may be reported to the IRS by the dealer - see <a href="#do-dealers-report-gold-purchases-to-the-irs">IRS reporting</a>.</p>`,
  },
  {
    heading: "What are the best gold products for beginners?",
    body: `<p><strong>The best first gold purchase is a 1 oz bullion coin - an American Gold Eagle, American Gold Buffalo or Canadian Maple Leaf - or a 1 oz bar from a major refiner. They are widely recognized, easy to price against spot and easy to sell. Avoid proof, graded and "limited mintage" coins.</strong></p>
<h3>Our beginner shortlist (bullion only)</h3>
<table>
<thead><tr><th>Product</th><th>Gold content and purity</th><th>Why beginners like it</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>American Gold Eagle, 1 oz</td><td>1 troy oz pure gold; .9167 (22 karat)</td><td>US government coin; most recognized in America; IRA-eligible</td><td>Current-year coins carry a higher premium than random-year coins</td></tr>
<tr><td>American Gold Buffalo, 1 oz</td><td>1 troy oz; .9999</td><td>US Mint's 24-karat coin; IRA-eligible</td><td>Premium was about 6% at the cheapest dealer in October 2026</td></tr>
<tr><td>Canadian Gold Maple Leaf, 1 oz</td><td>1 troy oz; .9999</td><td>Often cheaper than US coins; security features; IRA-eligible</td><td>Softer 24-karat gold scratches more easily</td></tr>
<tr><td>1 oz bar (PAMP, Valcambi, Perth Mint, Rand Refinery and others)</td><td>1 troy oz; .9999</td><td>Lowest premium for a single ounce; sealed assay card</td><td>Stick to known refiners; keep the seal intact</td></tr>
<tr><td>10 oz bar</td><td>10 troy oz; .999-.9999</td><td>Very low premium per ounce</td><td>About $39,000 per bar at $3,900 spot; sold whole</td></tr>
</tbody>
</table>
<h3>What to skip as a beginner</h3>
<ul>
<li><strong>Proof coins.</strong> Mirror-finish coins made for collectors. They cost far more than their gold content, and when you sell, many dealers pay little more than melt value.</li>
<li><strong>Graded and "slabbed" coins</strong> (for example "MS70" or "First Strike" labels). The grading adds cost that only collectors value.</li>
<li><strong>"Rare", "semi-numismatic" and "pre-1933" coins sold as investments.</strong> These have been at the center of many enforcement cases about excessive markups. If a salesperson steers you here, ask why.</li>
<li><strong>Gold jewelry as an investment.</strong> You pay for design and labor, and sell for scrap value.</li>
<li><strong>Unbranded bars and "gold-plated" novelty items</strong> from online marketplaces.</li>
</ul>
<p>For the retirement version of this list, see our <a href="/articles/best-gold-coins-for-ira">best gold coins for an IRA</a>. And for a dose of skepticism about the famous faces selling gold on TV, see <a href="/articles/celebrity-gold-ira-endorsements">celebrity gold IRA endorsements</a>.</p>`,
  },
  {
    heading: "How much over spot should you pay for gold?",
    body: `<p><strong>For common 1 oz gold coins and bars, a fair premium in 2026 is roughly 1-4% over spot from low-cost sellers, and under 2% for 10 oz and kilo bars. Paying 6-8% is high for bullion. Anything above 10-15% on bullion is a red flag.</strong></p>
<p>The 10-15% "push back" line is our rule of thumb, not a regulation. It reflects the fact that the cheapest sellers in 2026 charged a small fraction of that, while disclosed spreads at some phone-sales firms ran 7-10% on bullion and enforcement cases involved markups of 50% to 130%.</p>
<h3>Premiums by product (dated)</h3>
<table>
<thead><tr><th>Product</th><th>Premium over spot</th><th>Date and source</th></tr></thead>
<tbody>
<tr><td>10 oz gold bar</td><td>About 1.83% (lowest available)</td><td>Oct 9, 2026 - findbullionprices.com</td></tr>
<tr><td>Kilo gold bar</td><td>About 1-3%</td><td>2026 - GoldSilverSelect</td></tr>
<tr><td>1 oz gold bar, generic</td><td>About 2.17% (lowest available)</td><td>Oct 9, 2026 - findbullionprices.com</td></tr>
<tr><td>1 oz gold bar, branded (PAMP, Valcambi)</td><td>About 3-5%</td><td>2026 - GoldSilverSelect</td></tr>
<tr><td>1 oz Gold Eagle, random year</td><td>About 1.10% average lowest (range 0.16-1.48%)</td><td>Jul 2026 - <a href="https://www.findbullionprices.com/premium-history/gold-coins/Random-Year-1-oz-American-Gold-Eagle/" rel="nofollow noopener" target="_blank">findbullionprices</a></td></tr>
<tr><td>1 oz Gold Eagle, current year</td><td>About 3-6% online; Costco about 4.2% (low of 0.41% on Mar 2, 2026)</td><td>Oct 2026 - SD Bullion; Costco tracker</td></tr>
<tr><td>1 oz Maple Leaf</td><td>About 3.51% (lowest available)</td><td>Oct 9, 2026 - findbullionprices.com</td></tr>
<tr><td>1 oz Gold Buffalo</td><td>About 5.98% (lowest available)</td><td>Oct 9, 2026 - findbullionprices.com</td></tr>
<tr><td>Proof and "premium" coins</td><td>Often 20%+; 20-130% in disclosures and enforcement cases</td><td>Company disclosures; SEC and CFTC cases</td></tr>
</tbody>
</table>
<h3>Worked example: what $10,000 buys</h3>
<p>This is an <strong>illustration</strong>. We assume a spot price of <strong>$3,900 an ounce</strong> (Kitco, November 1, 2026) and four premiums: 1.8% (a 10 oz bar at a low-cost dealer), 4% (a typical current-year Gold Eagle), 8% (a high premium for bullion) and 25% (a proof-style markup).</p>
<p>The math: price per ounce = $3,900 x (1 + premium). Ounces bought = $10,000 / price per ounce. Value at spot = ounces x $3,900.</p>
<table>
<thead><tr><th>Premium</th><th>Price per oz</th><th>Ounces of gold</th><th>Value at spot</th><th>Cost of premium</th><th>Gold rise needed to break even*</th></tr></thead>
<tbody>
<tr><td>1.8%</td><td>$3,970.20</td><td>2.519 oz</td><td>$9,823.18</td><td>$176.82</td><td>About 2.8%</td></tr>
<tr><td>4%</td><td>$4,056.00</td><td>2.466 oz</td><td>$9,615.38</td><td>$384.62</td><td>About 5.1%</td></tr>
<tr><td>8%</td><td>$4,212.00</td><td>2.374 oz</td><td>$9,259.26</td><td>$740.74</td><td>About 9.1%</td></tr>
<tr><td>25%</td><td>$4,875.00</td><td>2.051 oz</td><td>$8,000.00</td><td>$2,000.00</td><td>About 26.3%</td></tr>
</tbody>
</table>
<p>*Break-even assumes you later sell at 1% under spot: required rise = (1 + premium) / 0.99 - 1. For example, at 4%: 1.04 / 0.99 - 1 = 5.05%.</p>
<p>The difference between the cheapest and the most expensive row is <strong>$1,823</strong> of gold on a $10,000 purchase - and the 25% buyer needs gold to rise about 26% just to get back to even, before any storage costs. That is why the premium is the single most important number to get in writing.</p>
<h3>How to check a quote in 30 seconds</h3>
<ol>
<li>Note the live spot price.</li>
<li>Divide the all-in price per coin (including shipping and payment fees) by the ounces of pure gold in it.</li>
<li>Divide that by spot and subtract 1. That is your premium.</li>
<li>Ask the seller what they would pay to buy it back today. The gap is your spread.</li>
</ol>
<p>Our <a href="/gold-ira-fee-calculator">fee calculator</a> does the same arithmetic for retirement accounts, including yearly fees.</p>`,
  },
  {
    heading: "Is fractional gold worth the extra premium?",
    body: `<p><strong>Fractional gold coins (1/10, 1/4 and 1/2 oz) cost noticeably more per ounce than 1 oz coins - the US Mint itself charges dealers 5-9% over spot on fractional Gold Eagles versus 3% on the 1 oz coin. They make sense only if you value small units for gifts or bartering, not as the cheapest way to own gold.</strong></p>
<p>Fractional coins appeal to buyers who want something affordable, or who imagine using small coins in an emergency. At $3,900 spot, a 1/10 oz coin holds about $390 of gold, which is easier to give as a gift than a $4,000 ounce.</p>
<h3>The cost of going small (illustration)</h3>
<p>Using only the US Mint's wholesale premiums to Authorized Purchasers - before any dealer adds its own margin - here is what one ounce of gold costs in different sizes at $3,900 spot:</p>
<table>
<thead><tr><th>Gold Eagle size</th><th>Mint premium</th><th>Cost per ounce at Mint wholesale</th><th>Extra vs 1 oz coin</th></tr></thead>
<tbody>
<tr><td>1 oz</td><td>3%</td><td>$4,017</td><td>-</td></tr>
<tr><td>1/2 oz (x2)</td><td>5%</td><td>$4,095</td><td>$78</td></tr>
<tr><td>1/4 oz (x4)</td><td>7%</td><td>$4,173</td><td>$156</td></tr>
<tr><td>1/10 oz (x10)</td><td>9%</td><td>$4,251</td><td>$234</td></tr>
</tbody>
</table>
<p>Retail prices are higher still, because dealers add their own margin on top. And you usually do not get the extra premium back when you sell - dealers tend to bid closer to spot on fractional coins than the premium you paid.</p>
`,
  },
];
