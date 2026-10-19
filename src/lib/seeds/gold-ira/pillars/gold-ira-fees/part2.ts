import type { ArticleSection } from "@/lib/config";

// Part 2 of "Gold IRA Fees & Costs (2026)".
// Storage (commingled vs segregated, flat vs % of value), depository rates,
// insurance, dealer premiums over spot and proof/"IRA-exclusive" coin markups
// including the enforcement cases (figures per PILLAR-RESEARCH.md corrections).

export const part2: ArticleSection[] = [
  {
    heading: "Storage fees: commingled vs segregated, flat vs percentage",
    body: `<p>The IRS does not let you keep IRA gold in your kitchen drawer. Under the tax code, IRA bullion has to be in the physical possession of the trustee - in practice, an approved depository arranged through your custodian. Keeping it at home through an "IRA LLC" was treated as a taxable distribution in <em>McNulty v. Commissioner</em> (2021). Our guide to <a href="/articles/can-you-store-ira-gold-at-home">whether you can store IRA gold at home</a> explains why the "home storage IRA" pitch is so risky.</p>
<p>That vault space costs money. Storage fees depend on two choices: <strong>how</strong> your metal is stored, and <strong>how</strong> the fee is calculated.</p>
<h3>Commingled vs segregated storage</h3>
<table>
<thead><tr><th></th><th>Commingled (non-segregated, pooled)</th><th>Segregated</th></tr></thead>
<tbody>
<tr><td>What it means</td><td>Your metal is stored alongside other customers' identical items. You own a specific quantity of a specific product, but not specific serial-numbered pieces.</td><td>Your metal is kept on its own shelf or in its own bin, labeled to your account. You get back the exact pieces you bought.</td></tr>
<tr><td>Typical reported cost</td><td>About $100-$150 a year flat, or about 0.08%-0.10% of value</td><td>About $150-$240 a year flat, or about 0.16%-0.18% of value</td></tr>
<tr><td>Who it suits</td><td>Most bullion investors holding common coins and bars</td><td>People who want their exact bars back, or who hold unusual items</td></tr>
<tr><td>Is it safer?</td><td colspan="2">Both are held in the same insured, audited vaults. Segregation changes recordkeeping, not the strength of the vault. For common bullion, a Gold Eagle is a Gold Eagle.</td></tr>
</tbody>
</table>
<p>For ordinary bullion coins and bars, segregated storage is usually a cost you can skip. Over 10 years, the difference of about $50 a year adds up to $500 - enough to matter on a smaller account. If a sales rep insists you need segregated storage, ask why in writing.</p>
<h3>Flat fees vs percentage-of-value fees</h3>
<p>Some storage is priced as a flat yearly amount. Other storage is priced per $1,000 of metal value (often with a minimum). The difference becomes large as your account grows, or as the gold price rises.</p>
<ul>
<li><strong>Flat:</strong> Equity Trust bills $110 non-segregated or $160 segregated per year on its published schedule. STRATA reportedly bills $115 commingled or $175 segregated. GoldStar reportedly charges $125 commingled.</li>
<li><strong>Percentage:</strong> Brink's, according to one custodian's election form, charges $1.50 per $1,000 of value per year (0.15%). Delaware Depository's election form shows $0.80 per $1,000 commingled (minimum $95) and $1.60 per $1,000 segregated (minimum $190).</li>
</ul>
<h3>Worked example: flat vs percentage at different account sizes</h3>
<p>This illustration compares a $110 flat fee with a 0.15% fee (the Brink's rate above):</p>
<table>
<thead><tr><th>Metal value</th><th>Flat $110</th><th>0.15% of value</th><th>Cheaper option</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>$110</td><td>$25,000 x 0.0015 = $37.50</td><td>Percentage</td></tr>
<tr><td>$50,000</td><td>$110</td><td>$75</td><td>Percentage</td></tr>
<tr><td>$100,000</td><td>$110</td><td>$150</td><td>Flat</td></tr>
<tr><td>$250,000</td><td>$110</td><td>$375</td><td>Flat</td></tr>
<tr><td>$500,000</td><td>$110</td><td>$750</td><td>Flat</td></tr>
</tbody>
</table>
<p>The crossover in this illustration is at about $73,000 ($110 / 0.0015). Below it, percentage pricing is cheaper; above it, flat pricing wins. Percentage pricing also means your storage bill rises when gold rises. If gold went up 50%, a 0.15% storage fee would go up 50% too.</p>
<h3>Silver needs more room - and sometimes costs more</h3>
<p>With silver at about $57.70 an ounce and gold at about $4,170 in mid-October 2026, the same dollar amount of silver weighs about 72 times as much as gold. Flat-fee storage does not care, but some depositories and custodians charge more for large silver holdings or have separate silver pricing, and segregated silver can be expensive. One review reported a silver IRA quote of $225 plus $250 for Texas storage at one company. If you are considering silver, read our <a href="/articles/silver-ira-guide">silver IRA guide</a> and ask specifically about silver storage pricing.</p>`,
  },
  {
    heading: "Depository storage rates compared",
    body: `<p>Here is a fact most investors never learn: <strong>no major depository publishes a public rate card for IRA storage</strong>. Rates reach you through your custodian's forms, and those forms do not always agree. The table below shows what we found, with the source for each. Treat every row as reported and approximate as of October 2026.</p>
<table>
<thead><tr><th>Depository</th><th>Commingled / non-segregated</th><th>Segregated</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Delaware Depository</td><td>$0.80 per $1,000 a year ($95 minimum)</td><td>$1.60 per $1,000 ($190 minimum)</td><td>Custodian election form</td></tr>
<tr><td>Delaware Depository (via Birch Gold)</td><td>$1.00 per $1,000 ($125 minimum)</td><td>$1.80 per $1,000 ($220 minimum)</td><td>Dealer-reported</td></tr>
<tr><td>Delaware Depository (many review sites)</td><td>$100 flat</td><td>$150 flat</td><td>Third-party</td></tr>
<tr><td>Brink's</td><td colspan="2">$1.50 per $1,000 (0.15%) a year, all metals</td><td>Entrust custodian form</td></tr>
<tr><td>IDS (Delaware / Texas)</td><td>n/a</td><td>$150 flat under $500,000; $200 above</td><td>Custodian schedule, possibly outdated</td></tr>
<tr><td>Texas Bullion Depository (state-run)</td><td colspan="2">Daily accrual, $25 per quarter minimum (official 2018 schedule); IRA rates negotiated; older press reported about 0.5% of value</td><td>Official (2018) + press</td></tr>
<tr><td>Custodian-bundled</td><td>Equity Trust $110; STRATA $115; GoldStar $125</td><td>Equity Trust $160; STRATA $175</td><td>Official (Equity Trust) / third-party</td></tr>
</tbody>
</table>
<h3>What those rates cost at real account sizes</h3>
<p>Using the published per-$1,000 rates and minimums, here is the yearly storage cost at four account values (illustration; actual bills may differ):</p>
<table>
<thead><tr><th>Metal value</th><th>Delaware commingled ($0.80/$1,000, $95 min)</th><th>Delaware segregated ($1.60/$1,000, $190 min)</th><th>Brink's ($1.50/$1,000)</th><th>IDS segregated (flat)</th></tr></thead>
<tbody>
<tr><td>$50,000</td><td>$40 (minimum applies) = $95</td><td>$80 (minimum applies) = $190</td><td>$75</td><td>$150</td></tr>
<tr><td>$100,000</td><td>$80 (minimum applies) = $95</td><td>$160 (minimum applies) = $190</td><td>$150</td><td>$150</td></tr>
<tr><td>$250,000</td><td>$200</td><td>$400</td><td>$375</td><td>$150</td></tr>
<tr><td>$1,000,000</td><td>$800</td><td>$1,600</td><td>$1,500</td><td>$200</td></tr>
</tbody>
</table>
<p>Two lessons jump out. First, at small and mid-size balances, the minimums do most of the work, so storage costs about $75-$190 a year almost anywhere. Second, at large balances, the pricing model matters enormously: at $1 million, the same segregated storage could cost $200 or $1,600 a year depending on the arrangement. If you are moving a large account, ask your custodian exactly which depository it uses, which pricing applies, and whether a flat-fee option exists.</p>
<h3>Does the depository location matter for cost?</h3>
<p>Mostly no. Delaware, Texas, Utah, Nevada and other locations are used mainly for logistics and customer preference. A few investors like the idea of a state-run vault such as the Texas Bullion Depository; others prefer a long-established private operator. What matters more is that the depository is one your custodian has approved, that it is insured, and that it is audited. Location becomes a cost issue only if you later take an <strong>in-kind distribution</strong> and need the metal shipped to you - see <a href="#transaction-wire-termination-and-in-kind-fees">transaction and in-kind fees</a> below.</p>`,
  },
  {
    heading: "Insurance: what your storage fee should cover",
    body: `<p>When you pay for storage, you should also be paying for insurance. Major depositories carry insurance on the metal in their vaults, and that coverage is generally built into the storage fee rather than billed separately. Still, "insured" can mean different things, and it is worth a few questions.</p>
<h3>Questions to ask about insurance</h3>
<ol>
<li><strong>Is insurance included in the storage fee, or billed separately?</strong> It should be included. A separate insurance line is not necessarily wrong, but it should be disclosed up front.</li>
<li><strong>Is the coverage for the full replacement value of my metal?</strong> Ask how the value is measured - usually the market value of the metal, not the price you paid. If you paid a 20% markup, insurance will not cover that markup.</li>
<li><strong>Who is the insurer, and is the policy "all-risk"?</strong> A reputable depository will tell you who underwrites the coverage.</li>
<li><strong>Is my metal covered during shipping?</strong> When metal moves from the dealer to the depository, or from the depository to you after a distribution, it is usually covered by the shipper's or dealer's policy. Confirm this, especially for in-kind distributions.</li>
<li><strong>How often is the vault audited, and can I see my holdings?</strong> Most custodians provide statements listing your metal by product and quantity. Some depositories offer online access or third-party audits.</li>
</ol>
<h3>The insurance trap nobody mentions</h3>
<p>Insurance protects against theft, fire and loss. It does <strong>not</strong> protect you against overpaying. If a dealer sold you $100,000 of coins whose metal is worth $70,000, your insurance covers roughly $70,000 - the market value. The difference was lost the day you bought. That is why the next two sections, on dealer premiums and proof-coin markups, are the most important part of this guide.</p>`,
  },
  {
    heading: "Dealer premium over spot: the biggest cost most people never see",
    body: `<p>The <strong>spot price</strong> is the current market price for one troy ounce of raw metal, traded in large quantities. You cannot buy a single coin at spot. Every dealer adds a <strong>premium</strong> (also called a markup or spread) to cover minting, distribution, the dealer's costs and its profit.</p>
<p>A modest premium is normal and fair. The problem is that premiums vary from about 1% to well over 50% depending on the product and the dealer - and most gold IRA companies sell by phone and <strong>do not publish their prices</strong>. You only learn the premium if you compare the price you are quoted with the spot price at that moment.</p>
<h3>What retail premiums looked like in 2026</h3>
<p>These figures are from online dealer price trackers and dealer sites. They are dated because premiums change from week to week.</p>
<table>
<thead><tr><th>Product</th><th>Typical premium over spot</th><th>Date / source</th></tr></thead>
<tbody>
<tr><td>American Gold Eagle, 1 oz</td><td>3-6% (SD Bullion); Costco 2026 Eagle about 4.2% (Oct 2026), low of 0.41% (Mar 2, 2026); random-year Eagles about 0.7% at the cheapest dealer</td><td>2026; SD Bullion, Costco tracker, FindBullionPrices</td></tr>
<tr><td>Gold Buffalo, 1 oz</td><td>5.98% average lowest; about 4.3% elsewhere</td><td>Oct 9, 2026; FindBullionPrices</td></tr>
<tr><td>Gold Maple Leaf, 1 oz</td><td>3.51%</td><td>Oct 9, 2026; FindBullionPrices</td></tr>
<tr><td>1 oz gold bar (generic)</td><td>2.17%; branded PAMP or Valcambi 3-5%</td><td>Oct 9, 2026; FindBullionPrices, GoldSilverSelect</td></tr>
<tr><td>10 oz gold bar</td><td>1.83%</td><td>Oct 9, 2026; FindBullionPrices</td></tr>
<tr><td>Kilo gold bar</td><td>1-3%</td><td>2026; GoldSilverSelect</td></tr>
<tr><td>American Silver Eagle</td><td>6.87% average (range 6.36-7.90%) in Aug 2026; about 8.5% in Jul</td><td>FindBullionPrices</td></tr>
<tr><td>100 oz silver bar</td><td>About -1% to +0.6%; $0.50-$1.50 an ounce over spot</td><td>May 2026; FindBullionPrices</td></tr>
<tr><td>Platinum Eagle, 1 oz</td><td>9.21% average (Jul 2026); 13.35% (Feb 2026)</td><td>FindBullionPrices</td></tr>
</tbody>
</table>
<p>These are prices for cash buyers at competitive online dealers. Gold IRA companies that sell by phone, provide account setup help and handle the paperwork generally charge more. How much more is the question you need answered.</p>
<h3>What a premium costs you in dollars</h3>
<p>Here is an illustration at a gold spot price of $4,170 an ounce (about the Oct 19, 2026 level):</p>
<table>
<thead><tr><th>Product and premium (illustration)</th><th>Math</th><th>Price per oz</th><th>Premium per oz</th></tr></thead>
<tbody>
<tr><td>Generic 1 oz bar at 2.17%</td><td>$4,170 x 1.0217</td><td>$4,260.49</td><td>$90.49</td></tr>
<tr><td>Maple Leaf at 3.51%</td><td>$4,170 x 1.0351</td><td>$4,316.37</td><td>$146.37</td></tr>
<tr><td>Gold Eagle at 4.2%</td><td>$4,170 x 1.042</td><td>$4,345.14</td><td>$175.14</td></tr>
<tr><td>Gold Buffalo at 5.98%</td><td>$4,170 x 1.0598</td><td>$4,419.37</td><td>$249.37</td></tr>
<tr><td>Bullion at a 10% IRA markup</td><td>$4,170 x 1.10</td><td>$4,587.00</td><td>$417.00</td></tr>
<tr><td>Proof coin at a 23% markup</td><td>$4,170 x 1.23</td><td>$5,129.10</td><td>$959.10</td></tr>
</tbody>
</table>
<p>On 20 ounces, the gap between a generic bar and a 23% proof coin is ($959.10 - $90.49) x 20 = <strong>$17,372.20</strong>. Same gold content, very different bill.</p>
<h3>What phone-based gold IRA dealers disclose</h3>
<p>Very few gold IRA dealers publish their spreads. One that did, American Bullion, disclosed spreads of <strong>7% on bullion, 20% on collectible coins, 23% on proof coins and 10% on bullion inside an IRA</strong>, according to a third-party review (LendEdu). Notice that the IRA bullion spread was higher than the cash bullion spread. Custodian disclosure forms - for example, STRATA Trust's - also warn that spreads on proof coins are wider than on bullion.</p>
<p>A common rule of thumb among consumer advocates is to <strong>push back on any bullion markup above roughly 10-15%</strong>. That is a heuristic, not a regulation, but it is a useful line in the sand. If the gold IRA company's service is worth a few extra percentage points to you, that can be a reasonable trade. Just know the number before you sign.</p>
<h3>Why the premium is a cost, not an investment</h3>
<p>When you buy at a premium, you need the spot price to rise just to get back to even. If you buy at a 10% markup and the price of gold does not move, the custodian's statement will show your metal worth roughly 10% less than you paid on day one. When you sell, a dealer will typically pay you a little <strong>under</strong> spot, not your original premium back. We show the exact break-even math in the <a href="#break-even-how-much-gold-has-to-rise-to-cover-your-costs">break-even section</a>.</p>
<p>Eligibility matters, too. Only certain coins and bars can go into an IRA (gold generally must be .995 fine, with the American Gold Eagle allowed by statute). Our guide to <a href="/articles/irs-approved-precious-metals">IRA-eligible precious metals</a> lists what qualifies. Choosing the lowest-premium eligible product - often a common bar or a Maple Leaf - is one of the simplest ways to cut costs.</p>`,
  },
  {
    heading: "Proof and \"IRA-exclusive\" coin markups",
    body: `<p>If there is one place where gold IRA buyers lose the most money, it is here. Some dealers steer retirement savers away from plain bullion and toward <strong>proof coins, "premium" coins, limited mintages or "IRA-exclusive" products</strong>. The pitch usually sounds like this: these coins are rarer, they will appreciate faster, they are protected from confiscation, or they are specially approved for IRAs.</p>
<p>None of those claims justifies a huge markup. Here is what to know.</p>
<h3>Why these coins carry bigger markups</h3>
<ul>
<li><strong>There is no transparent price.</strong> A 1 oz bullion coin has a price you can check against spot and against dozens of online dealers. A "special edition" coin from a single seller has no public price to compare against, so the seller can set almost any markup.</li>
<li><strong>The buyback is weaker.</strong> When you sell, most dealers will pay close to the metal value - not the collectible premium you paid. American Bullion's disclosed spreads (20% collectible, 23% proof) show how wide the gap can be even at a dealer that publishes its numbers.</li>
<li><strong>Commissions are higher.</strong> Regulators have repeatedly found that salespeople earned larger commissions on high-markup coins, which gives them a reason to push those products.</li>
<li><strong>"IRA-eligible" does not mean "good value".</strong> American Eagle proof coins are IRA-eligible by statute, but that says nothing about the price. Most other proof and numismatic coins are <strong>not</strong> IRA-eligible at all.</li>
</ul>
<h3>What enforcement cases found</h3>
<p>These figures come from regulators and court actions. Several earlier articles online have mixed up the numbers between cases, so we list the corrected figures here.</p>
<table>
<thead><tr><th>Company</th><th>What regulators alleged or found</th><th>Outcome (reported)</th></tr></thead>
<tbody>
<tr><td>Red Rock Secured</td><td>Markups of up to about 130% on coins sold to retirement savers, far above what customers were told (SEC). The CFTC case says about $61.8 million came from roughly 950 customers, largely from IRAs, 401(k)s and TSP accounts.</td><td>$76.4 million final judgment (SEC Litigation Release No. 25996)</td></tr>
<tr><td>Safeguard Metals</td><td>Average markup of about 64% versus disclosed markups of 4-33% (SEC); silver-coin markups of 51% to over 70% (CFTC)</td><td>Final judgment Oct 2025: about $25.6 million restitution plus an equal penalty (about $51 million total)</td></tr>
<tr><td>Lear Capital</td><td>Undisclosed commissions of up to 33% on more than $43 million of sales (New York Attorney General)</td><td>About $6 million settlement; later a bankruptcy plan</td></tr>
<tr><td>Goldline (2012)</td><td>Coin markups "upwards of 55%"</td><td>Up to $4.5 million in refunds plus an $800,000 fund; no admission of wrongdoing</td></tr>
<tr><td>Metals.com</td><td>One couple was charged a 54% markup (Massachusetts action)</td><td>State enforcement action</td></tr>
</tbody>
</table>
<p>You can read the CFTC's announcement of the Red Rock action in its <a href="https://www.cftc.gov/PressRoom/PressReleases/8704-23" target="_blank" rel="noopener noreferrer">press release 8704-23</a>. The CFTC, FINRA and NASAA also publish a joint advisory, <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" target="_blank" rel="noopener noreferrer">"10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals"</a>, which is worth reading before any purchase.</p>
<h3>What a 64% markup actually does</h3>
<p>Illustration: you roll over $100,000 and the dealer's average markup is 64%, the figure the SEC cited for Safeguard. If we define that markup over the metal's value, the metal you receive is worth $100,000 / 1.64 = about <strong>$60,976</strong>. Gold would have to rise about 64% just to get you back to $100,000 - before any yearly fees and before the dealer's buyback discount. For reference, gold's best calendar year in the last decade was 2025, at about +65%. The worst stretch in our data, from the January 2026 record to the late-June 2026 low, was about -29%.</p>
<h3>How to protect yourself</h3>
<ol>
<li><strong>Stick to common bullion</strong> - widely traded coins and bars from accredited refiners - unless you have a specific, informed reason not to.</li>
<li><strong>Ask for the markup as a percentage over spot, in writing</strong>, for each product before you buy.</li>
<li><strong>Ask for the buyback price today</strong> on the same product. The gap between the buy price and the buyback price is your real round-trip cost.</li>
<li><strong>Be suspicious of urgency, fear and exclusivity</strong> - "confiscation-proof" coins, "only for IRA clients", "price goes up tomorrow".</li>
</ol>
<p>Our full guide to <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> covers the sales tactics regulators see most often.</p>`,
  },
];
