import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Best Gold Coins and Bars for an IRA (2026)".
// Checking a quote, buyback, sales pitches, storage by product, what the
// companies on this site sell (reported facts only), FAQs (question-shaped
// headings feed FAQPage schema) and the bottom line, ending with DISCLAIMER.

export const part5: ArticleSection[] = [
  {
    heading: "How to check a dealer quote, step by step",
    body: `<p>You do not need to be an expert to check whether a quote is fair. You need the spot price, a calculator and five minutes. Here is the method.</p>
<ol>
<li><strong>Ask for a written, itemized quote.</strong> It should list each product by exact name (for example, "1 oz American Gold Eagle, random year, bullion"), the quantity, the price per piece and the total.</li>
<li><strong>Ask for the spot price used.</strong> A good dealer will tell you the spot price at the moment of the quote. If they will not, look it up yourself on a major price site at the same time.</li>
<li><strong>Work out the metal value.</strong> Multiply spot by the gold content of each piece. A 1 oz coin at $4,170 spot contains $4,170 of gold; a 1/10 oz coin contains $417.</li>
<li><strong>Work out the premium.</strong> Premium % = (price per piece - metal value) / metal value x 100.</li>
<li><strong>Compare with the ranges in this guide.</strong> For 1 oz bullion coins, about 2-6% is typical at competitive dealers in 2026. Bars should be lower. Above about 10-15% on bullion, push back or walk away.</li>
<li><strong>Ask for today's buyback price</strong> on the same product, in writing. This tells you the round-trip cost.</li>
<li><strong>Get a second quote</strong> from another company for the same products. Comparing like for like is the fastest way to spot an outlier.</li>
<li><strong>Confirm eligibility with your custodian</strong> before you sign, not after.</li>
</ol>
<h3>Two quotes checked</h3>
<table>
<thead><tr><th></th><th>Quote A</th><th>Quote B</th></tr></thead>
<tbody>
<tr><td>Product</td><td>1 oz American Gold Eagle, bullion</td><td>1 oz American Gold Eagle, proof, in presentation box</td></tr>
<tr><td>Price per coin</td><td>$4,380</td><td>$5,900</td></tr>
<tr><td>Spot at time of quote</td><td>$4,170</td><td>$4,170</td></tr>
<tr><td>Premium in dollars</td><td>$4,380 - $4,170 = $210</td><td>$5,900 - $4,170 = $1,730</td></tr>
<tr><td>Premium in %</td><td>$210 / $4,170 = 5.04%</td><td>$1,730 / $4,170 = 41.49%</td></tr>
<tr><td>Assessment</td><td>Within the typical retail range</td><td>Collector pricing; same ounce of gold</td></tr>
</tbody>
</table>
<p>Both coins contain exactly one ounce of gold. Quote B costs $1,520 more per coin. On ten coins that is $15,200 for the polish and the box.</p>
<h3>Questions to ask on the phone</h3>
<ul>
<li>"What is your premium over spot on this product, as a percentage?"</li>
<li>"What would you pay me today to buy it back?"</li>
<li>"Can you quote me standard bullion Eagles or Maple Leafs instead?"</li>
<li>"Will you put that in writing before I sign anything?"</li>
</ul>
<p>The CFTC, FINRA and NASAA joint advisory suggests similar questions. A company that will not answer them clearly is telling you something. Our guide on <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a> covers more questions to ask before you commit.</p>`,
  },
  {
    heading: "Buyback: what dealers pay when you sell",
    body: `<p>Eventually you, or your heirs, will sell the metal or take it out. The price you get then matters as much as the price you pay now.</p>
<h3>Typical bids in 2026</h3>
<ul>
<li>For widely traded sovereign coins such as Eagles and Maple Leafs, dealers typically bid <strong>roughly 1-2% under spot</strong>. Other estimates put the bid at <strong>96-99% of spot</strong>.</li>
<li>A full round trip on a Gold Eagle - buying at retail and selling back - costs roughly <strong>4-8%</strong> (GoldSilver, June 2026).</li>
<li>Augusta Precious Metals reportedly buys back at about <strong>5% under its own sell price</strong> (Fortune, as reported). That figure is a spread against its selling price, not against spot.</li>
<li>For proof and "premium" coins, bids can be far below the original price, as the worked examples show.</li>
</ul>
<h3>"Buyback guarantees" and what they mean</h3>
<p>Many gold IRA companies advertise a buyback program. Read the wording carefully:</p>
<table>
<thead><tr><th>What it says</th><th>What it usually means</th></tr></thead>
<tbody>
<tr><td>"We'll buy it back"</td><td>The company is willing to bid on your metal. It does not say at what price.</td></tr>
<tr><td>"No buyback fees"</td><td>No separate fee is charged - but the bid price itself can still be well below what you paid.</td></tr>
<tr><td>"Highest buyback price"</td><td>A marketing pledge, not a contract. Compare against other bids.</td></tr>
<tr><td>"Guaranteed buyback"</td><td>Few firms can legally guarantee repurchase. American Hartford Gold, for example, describes a buyback commitment but says it cannot legally guarantee repurchase.</td></tr>
</tbody>
</table>
<h3>You are not locked in</h3>
<p>Your IRA metal belongs to your IRA, held by your custodian. You can ask the custodian to sell to any dealer that will deal with it, not only the company you bought from. Getting two or three bids before selling is worth the effort. Your custodian will also charge its own fees - for example, Equity Trust lists $10 per asset (max $30) for metals liquidation.</p>
<p>Our guide on <a href="/articles/how-to-sell-gold-ira">how to sell a gold IRA</a> covers the selling process, and the full cost of getting out is in the <a href="/articles/gold-ira-fees">gold IRA fees guide</a>.</p>`,
  },
  {
    heading: "Common sales pitches and how to answer them",
    body: `<p>Most markups are sold with a story. Here are the ones you are most likely to hear, and plain answers you can use.</p>
<table>
<thead><tr><th>The pitch</th><th>The reality</th><th>What to say</th></tr></thead>
<tbody>
<tr><td>"Bullion can be confiscated like in 1933; collector coins can't."</td><td>No such confiscation exists today, and IRA metal is held by a custodian either way. The story is used to justify collector premiums.</td><td>"I'd like a quote on bullion Eagles and Maple Leafs, please."</td></tr>
<tr><td>"These coins have numismatic value on top of the gold."</td><td>Modern "limited" coins made for the IRA market rarely have a deep resale market. Regulators found markups of 20-130% on such products.</td><td>"What would you pay me for it back today?"</td></tr>
<tr><td>"This is an IRS-approved coin from an IRS-approved company."</td><td>The IRS does not approve dealers. Eligibility says nothing about price.</td><td>"Eligible is not the same as fairly priced. What's your premium over spot?"</td></tr>
<tr><td>"Prices are about to explode - you need to act today."</td><td>Nobody knows. Gold fell about 29% from January to June 2026.</td><td>"I don't make decisions on the first call."</td></tr>
<tr><td>"Your 401(k) / bank / stocks are about to collapse."</td><td>Fear is a sales tool. Diversification decisions deserve calm advice.</td><td>"I'll talk to my adviser."</td></tr>
<tr><td>"Proofs are better quality, so they hold value better."</td><td>Proofs look nicer. The gold content is the same as bullion; resale bids are often near melt.</td><td>"I'm buying for the metal, not the finish."</td></tr>
<tr><td>"You'll get free silver if you buy today."</td><td>Promotions are paid for through the margin. Judge the total metal value received.</td><td>"What is the total spot value of everything I'd receive?"</td></tr>
<tr><td>"Store it at home with an IRA LLC."</td><td>The Tax Court treated this as a taxable distribution in <em>McNulty</em> (2021).</td><td>"No thank you."</td></tr>
</tbody>
</table>
<p>If you hear several of these on one call, it is a strong signal to stop. Our article on <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> has a longer list, and the <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="noopener" target="_blank">CFTC-FINRA-NASAA advisory</a> is a short, useful read before any call.</p>`,
  },
  {
    heading: "Storage considerations by product",
    body: `<p>All IRA metal is stored by your custodian at a depository. Storage is priced either as a flat yearly fee or as a percentage of value, and as <strong>commingled</strong> (your metal is pooled with identical products) or <strong>segregated</strong> (your exact pieces are kept separately).</p>
<table>
<thead><tr><th>Provider</th><th>Commingled</th><th>Segregated</th></tr></thead>
<tbody>
<tr><td>Delaware Depository (election form)</td><td>$0.80 per $1,000 a year ($95 minimum)</td><td>$1.60 per $1,000 ($190 minimum)</td></tr>
<tr><td>Brink's (Entrust form)</td><td colspan="2">$1.50 per $1,000 (0.15%) a year, all metals</td></tr>
<tr><td>Equity Trust (bundled)</td><td>$110 a year</td><td>$160 a year</td></tr>
<tr><td>STRATA Trust (bundled)</td><td>$115 a year</td><td>$175 a year</td></tr>
<tr><td>GoldStar Trust</td><td>$125 a year</td><td>$225 minimum plus about 0.18% above $125k</td></tr>
</tbody>
</table>
<p>For a $100,000 holding at Delaware, commingled storage works out to 100 x $0.80 = $80, so the $95 minimum applies; segregated is 100 x $1.60 = $160, so the $190 minimum applies. At Brink's, 0.15% of $100,000 is $150.</p>
<h3>Which storage suits which product</h3>
<table>
<thead><tr><th>Product</th><th>Suggested storage</th><th>Why</th></tr></thead>
<tbody>
<tr><td>1 oz bullion coins (Eagle, Maple, Buffalo, Philharmonic)</td><td>Commingled is usually fine</td><td>One bullion Eagle is as good as another; you get back the same product and quantity</td></tr>
<tr><td>Branded bars with serial numbers</td><td>Either; segregated if you want your exact bars back</td><td>Some buyers prefer to receive the same serial-numbered bars, especially for in-kind distributions</td></tr>
<tr><td>Kilo bars</td><td>Either</td><td>With flat or value-based pricing, bar size makes little difference to storage cost</td></tr>
<tr><td>Proof or graded coins</td><td>Segregated</td><td>Condition and packaging matter to their value - one more reason they are awkward in an IRA</td></tr>
<tr><td>Silver</td><td>Check how your depository prices it</td><td>Silver is about 72 times bulkier per dollar than gold at today's ratio</td></tr>
</tbody>
</table>
<p>Whatever you hold, it must stay with the custodian. Read <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a> before believing anyone who says otherwise, and see the <a href="/articles/gold-ira-custodians">custodians guide</a> for how storage is arranged.</p>`,
  },
  {
    heading: "What the companies on this site sell",
    body: `<p>We review four gold IRA companies. All four sell gold and silver for IRAs. Here is what has been reported about their terms; we have not verified their full product lists, and <strong>none of the four publishes its product spreads or markups</strong>. All figures are third-party reports as of October 2026, so confirm them with the company.</p>
<table>
<thead><tr><th>Company</th><th>Reported IRA minimum</th><th>Buyback (as advertised or reported)</th><th>Promotion (advertised)</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-hartford-gold">American Hartford Gold</a></td><td>$10,000</td><td>Buyback commitment with no liquidation fee; says it cannot legally guarantee repurchase</td><td>Up to $25k in free silver on qualifying orders; lowest price guarantee; storage waived 1 year at $50k+, 3 years at $100k+</td></tr>
<tr><td><a href="/reviews/goldco">Goldco</a></td><td>$25,000 ("generally")</td><td>"Highest buyback" pledge, not a contract</td><td>Up to 10% in bonus silver; fee waivers up to 3 years for eligible accounts</td></tr>
<tr><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a></td><td>$50,000</td><td>Advertises a no-fee lifetime buyback; reportedly about 5% under its sell price</td><td>Fee waivers on qualifying accounts (disclosed on a call)</td></tr>
<tr><td><a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></td><td>Not published</td><td>No buy-back fees (advertised)</td><td>Up to $15,000 in free silver; 7-day refund</td></tr>
</tbody>
</table>
<h3>How to use this when you call</h3>
<ul>
<li><strong>Ask for bullion pricing in writing.</strong> Request quotes on 1 oz Gold Eagles, Maple Leafs or bars, with the premium over spot and today's buyback price.</li>
<li><strong>Compare promotions by total metal value.</strong> Free silver and fee waivers are worth something, but only the total spot value you receive for your money tells you the real price.</li>
<li><strong>Decline proof and "exclusive" coins</strong> unless you have a clear reason and a written buyback price.</li>
</ul>
<p>Our <a href="/">gold IRA company rankings</a> compare the four in more detail, and <a href="/how-we-rank">how we rank</a> explains our method. Rankings and reviews may include links to companies that pay us; that does not change the advice in this guide.</p>`,
  },
  {
    heading: "Are American Gold Eagles the best coin for an IRA?",
    body: `<p>For most people, the 1 oz American Gold Eagle is the safest default. It is named in the tax code, so its eligibility is never in doubt; it is the most recognized coin in the US; and dealers bid on it readily, typically about 1-2% under spot. It is not always the cheapest - Maple Leafs (3.51% on October 9, 2026) and Philharmonics (about 2.7% in mid-2026) often cost a little less - so compare. Buy the bullion version, not the proof.</p>`,
  },
  {
    heading: "Why is the Krugerrand not allowed in an IRA?",
    body: `<p>The Krugerrand is .9167 fine (22 karat), below the .995 minimum for gold bullion in an IRA. The American Gold Eagle has the same fineness but is allowed only because the tax code names US Eagle coins specifically. No similar exemption covers South African coins. Buying one in an IRA would be treated as a distribution, which can be taxable. See <a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a> for the full list.</p>`,
  },
  {
    heading: "Are gold bars or coins better for an IRA?",
    body: `<p>Bars are cheaper per ounce - 2.17% for generic 1 oz bars and 1.83% for 10 oz bars on October 9, 2026, versus about 3-6% for 1 oz Eagles. Coins are easier to divide, distribute in kind and sell. Many investors use both: larger bars for low-cost bulk and 1 oz coins (plus a few fractionals) for flexibility as they approach required minimum distributions. See the <a href="#coins-vs-bars-in-an-ira-pros-and-cons">coins versus bars comparison</a> above.</p>`,
  },
  {
    heading: "Are proof coins a good choice for a gold IRA?",
    body: `<p>Usually not. American Eagle proofs are generally eligible, but they cost far more than bullion - one dealer disclosed a 23% spread on proofs - and dealers often bid near melt value when you sell. In our <a href="#worked-examples-what-50-000-buys-at-2-5-and-25-premiums">worked examples</a>, a 25% premium cost $10,000 on a $50,000 purchase, versus $980 at a 2% premium. If you collect proofs, buy them outside your IRA.</p>`,
  },
  {
    heading: "What gold coins should I avoid in an IRA?",
    body: `<p>Avoid ineligible coins - Krugerrands, British Sovereigns, pre-2013 Britannias, pre-1933 US gold and graded "rare" coins - because buying them in an IRA is treated as a distribution. And avoid high-markup products even when they are eligible: proof coins, "IRA-exclusive," "limited edition" and semi-numismatic coins. Regulators have found markups of 20% to 130% on these products in cases such as Red Rock Secured and Safeguard Metals. Our <a href="/articles/gold-ira-scams-red-flags">red flags guide</a> explains the warning signs.</p>`,
  },
  {
    heading: "Can I buy fractional gold coins in an IRA?",
    body: `<p>Yes. Fractional versions of eligible coins - such as 1/2, 1/4 and 1/10 oz Gold Eagles - are eligible. They cost more per ounce: the 1/10 oz Eagle averaged a 9.98% premium in July 2026 at the lowest dealers, against about 3-6% for 1 oz coins. They are most useful in small amounts, to make <a href="/articles/gold-ira-taxes-and-rmds">required minimum distributions</a> taken in kind easier to match.</p>`,
  },
  {
    heading: "Bottom line: what to buy, and what to skip",
    body: `<p>The best gold for an IRA is boring: widely traded bullion, bought at a small, stated premium over spot.</p>
<table>
<thead><tr><th>Buy</th><th>Consider</th><th>Skip</th></tr></thead>
<tbody>
<tr><td>1 oz Gold Eagles, Maple Leafs, Buffalos (when priced near Eagles), Philharmonics</td><td>Britannias (2013+), Kangaroos, generic bars from accepted refiners, a few fractionals for RMDs</td><td>Krugerrands and other ineligible coins</td></tr>
<tr><td>1 oz and 10 oz bars from PAMP, Valcambi and other recognized refiners</td><td>Kilo bars for large, long-term accounts</td><td>Proof coins and "IRA-exclusive," semi-numismatic or "limited edition" coins</td></tr>
</tbody>
</table>
<h3>Your checklist</h3>
<ol>
<li>Confirm each product's eligibility with your custodian in writing.</li>
<li>Get itemized, written quotes from at least two companies, showing the premium over spot.</li>
<li>Check each quote yourself: (price - metal value) / metal value.</li>
<li>Ask for today's buyback price on the same products.</li>
<li>Keep most of your gold in 1 oz coins or bars; add fractionals only as needed for distributions.</li>
<li>Run your own numbers in our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>.</li>
</ol>
<p>To go further, read our <a href="/articles/gold-ira">complete gold IRA guide</a>, the <a href="/articles/gold-ira-rules">gold IRA rules</a>, and the <a href="/articles/gold-ira-rollover">rollover guide</a> for moving money in. When you are ready to compare companies, start with our <a href="/">rankings</a> and the reviews of <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>.</p>
<p>A final reminder: picking the right coin keeps your costs down, but it does not make gold a safe or guaranteed investment. Gold pays no income and can fall sharply - by about 29% between January and June 2026. A fee-only financial adviser or tax professional who does not sell metals can help you decide how much, if any, belongs in your retirement plan.</p>
${DISCLAIMER}`,
  },
];
