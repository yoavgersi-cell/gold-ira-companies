import type { ArticleSection } from "@/lib/config";

// Part 3 of "Gold vs Silver in 2026". Drawdowns and recovery, why silver
// crashed in 2026 (sourced explanations only), whether silver follows gold,
// premiums and the $10,000 round-trip illustration, storage weight/volume,
// and selling. Premiums from findbullionprices / SD Bullion (2026) as in
// PILLAR-RESEARCH.md; the round-trip bids are labelled assumptions.

export const part3: ArticleSection[] = [
  {
    heading: "Drawdowns: how far gold and silver have fallen and how long recovery took",
    body: `<p><strong>Silver's worst falls have been far deeper than gold's: about 78% in ten weeks in 1980 and about 72% from 2011 to 2015, versus about 70% (over nearly 20 years) and 45% for gold. In 2026, silver fell about 59% from its record by early November and gold about 30%. Recoveries have taken years, sometimes decades.</strong></p>
<p>A "drawdown" is the fall from a peak to a later low. It is the number that tests whether you can actually hold an investment. Here are the big ones.</p>
<table>
<thead><tr><th>Episode</th><th>Metal</th><th>Peak</th><th>Low</th><th>Fall</th><th>Time to recover the peak (nominal)</th></tr></thead>
<tbody>
<tr><td>1980 Hunt brothers collapse</td><td>Silver</td><td>$49.45 (Jan 17, 1980)</td><td>$10.80 (Mar 27, 1980); below $4 by 1991</td><td>About -78% in ten weeks; about -92% by 1991</td><td>About 45 years on a year-end basis (first year-end above $49.45 was 2025)</td></tr>
<tr><td>1980-1999 bear market</td><td>Gold</td><td>$850 (Jan 1980)</td><td>$252 (Aug 1999)</td><td>About -70%</td><td>About 28 years (2008)</td></tr>
<tr><td>2011-2015</td><td>Silver</td><td>About $49.50 (Apr 2011)</td><td>About $13.65 (Dec 2015)</td><td>About -72%</td><td>About 14 years (2025)</td></tr>
<tr><td>2011-2015</td><td>Gold</td><td>About $1,921 (Sep 2011)</td><td>About $1,050 (Dec 2015)</td><td>About -45%</td><td>About 9 years (Aug 2020)</td></tr>
<tr><td>2026 (ongoing)</td><td>Silver</td><td>About $121.62 (Jan 29, 2026; unverified)</td><td>About $50 (Oct 30, 2026)</td><td>About -59%</td><td>Not recovered as of Nov 2026</td></tr>
<tr><td>2026 (ongoing)</td><td>Gold</td><td>About $5,595 (Jan 29, 2026)</td><td>About $3,900 (Nov 1, 2026)</td><td>About -30%</td><td>Not recovered as of Nov 2026</td></tr>
</tbody>
</table>
<p class="small"><em>Sources: <a href="https://www.britannica.com/topic/Silver-Thursday" rel="nofollow noopener" target="_blank">Britannica</a> (1980 silver); ratio histories for the 1991 silver low; <a href="https://bulliontradingllc.com/blog/silver-after-record-highs/" rel="nofollow noopener" target="_blank">Bullion Trading LLC</a> and Metalcharts for 2011-2015 silver (peak and trough figures vary slightly by source; the roughly 72% fall is consistent); our <a href="/articles/gold-price-history">gold price history</a> guide for gold; Kitco and Fortune for November 2026. Percentages are our arithmetic. Recovery times are nominal - after inflation, silver's 1980 peak has still not been regained.</em></p>
<h3>What these numbers mean in dollars</h3>
<p><em>Illustration.</em> If you had $50,000 in each metal at the January 29, 2026 highs, by early November the gold would be worth about $34,850 ($50,000 x 3,900 / 5,595) and the silver about $20,570 ($50,000 x 50.04 / 121.62). Gold would need to rise about 43% to get back to even; silver would need to rise about 143%.</p>
<p>That asymmetry is worth remembering: <strong>the deeper the fall, the bigger the gain you need just to break even.</strong> A 30% loss needs a 43% gain to recover. A 59% loss needs a 143% gain. A 72% loss needs a 257% gain.</p>
<h3>Why this matters more after 60</h3>
<p>A 40-year-old can wait 14 years for silver to recover; a 68-year-old selling metal for income or RMDs may not. That is a main reason commentators on retirement portfolios tend to treat gold as the core metal and keep silver smaller - its falls can outlast a retirement timetable.</p>`,
  },
  {
    heading: "Why did silver crash in 2026?",
    body: `<p><strong>Silver's fall from its January 2026 record was triggered by forced selling of leveraged futures after the nomination of Kevin Warsh as Fed chair lifted the dollar, followed by months of pressure from expected interest-rate hikes, weaker solar demand and fading investor interest. It was not caused by a collapse in silver's long-term supply-demand picture.</strong></p>
<p>We have stuck to explanations reporters and analysts actually gave; sources weigh them differently.</p>
<h3>Stage 1: the January 30 collapse</h3>
<ul>
<li><strong>The setup.</strong> Silver had run up very quickly. One analysis described a parabolic rally of about 57% in January alone. Silver hit about $121.62 on January 29 (one data source), and the gold-to-silver ratio fell to about 45.</li>
<li><strong>The trigger.</strong> On January 30, after President Trump named Kevin Warsh as his nominee for Fed chair, silver futures fell <strong>31.4% to settle at $78.53</strong> - their worst day since March 1980 - as the nomination eased concerns about the Fed's independence and sent the dollar higher (<a href="https://www.cnbc.com/2026/01/30/silver-gold-fall-price-usd-dollar-fed-warsh-chair-trump-metals.html" rel="nofollow noopener" target="_blank">CNBC, Jan 30, 2026</a>). Axios, citing MarketWatch, reported a 27% fall (<a href="https://www.axios.com/2026/01/30/kevin-warsh-silver-price-today-gold" rel="nofollow noopener" target="_blank">Axios</a>), and Bloomberg reported an intraday drop of as much as 36% (<a href="https://finance.yahoo.com/news/silver-plunges-record-36-precious-130623502.html" rel="nofollow noopener" target="_blank">via Yahoo Finance</a>). The figures differ because of futures versus spot prices and intraday versus closing levels.</li>
<li><strong>The amplifier.</strong> Reports linked the size of the fall to forced liquidation of leveraged positions, including higher exchange margin requirements and rebalancing in leveraged ETFs. WisdomTree reported large outflows from silver ETPs in North America and Europe (<a href="https://www.wisdomtree.com/us/insights/blog/gold-and-silvers-most-volatile-day" rel="nofollow noopener" target="_blank">WisdomTree</a>).</li>
</ul>
<h3>Stage 2: the long slide</h3>
<ul>
<li><strong>Rate-hike fears.</strong> Through 2026, expectations of Federal Reserve rate hikes and a strong dollar weighed on both metals. In June, USAGOLD reported silver tumbling 5% as rate-hike bets drove the dollar to a one-year high (<a href="https://www.usagold.com/daily-precious-metals-market-report-june-24-2026/" rel="nofollow noopener" target="_blank">USAGOLD, Jun 24, 2026</a>). In October, a hot inflation report revived hike bets and silver fell about 6.3% to $55.74 on October 14 (<a href="https://www.kucoin.com/news/flash/silver-price-hits-2026-low-amid-fed-rate-hike-fears" rel="nofollow noopener" target="_blank">KuCoin News / BeInCrypto</a>). Money Metals also points to rate hikes, a strong dollar and forced futures selling (<a href="https://www.moneymetals.com/price/why-is-silver-going-down" rel="nofollow noopener" target="_blank">Money Metals</a>).</li>
<li><strong>Weaker solar demand.</strong> The Silver Institute forecast a 19% drop in photovoltaic silver demand for 2026 as manufacturers use less silver per cell (<a href="https://www.pv-magazine.com/?p=68707" rel="nofollow noopener" target="_blank">pv magazine</a>), and industrial demand had already fallen 3% in 2025.</li>
<li><strong>Analysts cutting forecasts.</strong> J.P. Morgan cut its 2027 average silver forecast from $85.80 to $63.90 and its 2026 average from $84.30 to $70.60, citing softer physical demand, fewer solar ounces and a rate path that raises the cost of holding metal (<a href="https://www.canadianminingreport.com/blog/jpmorgan-cuts-silver-forecast-for-2027-could-higher-rates-keep-prices-under-pressure" rel="nofollow noopener" target="_blank">Canadian Mining Report, Sep 11, 2026</a>).</li>
</ul>
<p>By October 30, silver was at $50.04 (Fortune) - about 59% below its record and about 31% below where it ended 2025. Gold fell too, but by about 30% from its record and about 10% from its end-2025 level.</p>
<h3>What the crash does and does not tell you</h3>
<p>It does not prove silver is a "bad" investment - silver was still about 25% above its 2025 average price in early November. It does show, again, that silver can lose more than half its value in months, even with a supply deficit and even after a record year. Anyone who bought near the top with money they needed soon was badly hurt.</p>`,
  },
  {
    heading: "Does silver follow gold?",
    body: `<p><strong>Mostly, yes - silver usually moves in the same direction as gold, but by a larger amount. In the ten years from 2015 to 2025 for which we have year-end data for both, the two metals moved the same way in nine. The exceptions, and the size differences, are what make silver riskier.</strong></p>
<p>Using the yearly changes in our <a href="#gold-vs-silver-performance-2015-2026">performance table</a>, gold and silver both fell in 2015, 2018 and 2021, and both rose in 2017, 2019, 2020, 2022, 2024 and 2025. The one clear split was 2023, when gold rose about 13% and silver slipped about 1%. In 2026, both fell from the same-day January 29 records - silver about twice as far.</p>
<h3>How closely do they move?</h3>
<ul>
<li><strong>Direction:</strong> usually the same, especially on big news about interest rates, the dollar or fear.</li>
<li><strong>Size:</strong> silver's moves tend to be larger - the WGC estimates its volatility at roughly twice gold's.</li>
<li><strong>Stress periods:</strong> in sharp market sell-offs, silver tends to behave more like an industrial commodity and fall more. The WGC notes silver's greater equity sensitivity during drawdowns. This is why the ratio spiked to about 125 in March 2020.</li>
<li><strong>Manias:</strong> in strong precious metals rallies, silver tends to catch up and overshoot, pushing the ratio down - as in 1980, 2011 and early 2026.</li>
</ul>
<h3>What this means for diversification</h3>
<p>Because the two metals usually move together, owning both is <strong>not</strong> much diversification against each other. Adding silver to gold mostly adds <em>more</em> precious metals risk, not a different kind of risk. If your goal is to diversify a stock-and-bond portfolio, gold has historically been the steadier tool. If your goal is more upside from a precious metals rally - accepting bigger falls - silver adds that.</p>`,
  },
  {
    heading: "Is silver cheaper to buy than gold?",
    body: `<p><strong>Silver is cheaper per ounce, but usually more expensive to buy as a percentage. A new Silver Eagle cost about 6.9-8.5% over spot in mid-2026 versus about 3-6% for a Gold Eagle. Large 100 oz silver bars, however, have sold close to spot - so the product you choose matters more with silver than with gold.</strong></p>
<p>A one-ounce silver coin takes roughly as much work to mint, package, ship and insure as a one-ounce gold coin, but the metal inside is worth about 1/78 as much. So the fixed costs are a far bigger share of the price.</p>
<h3>Typical premiums in 2026</h3>
<table>
<thead><tr><th>Product</th><th>Typical premium over spot</th><th>Source (2026)</th></tr></thead>
<tbody>
<tr><td>10 oz gold bar</td><td>About 1.8%</td><td>findbullionprices (Oct 9)</td></tr>
<tr><td>Generic 1 oz gold bar</td><td>About 2.2%</td><td>findbullionprices (Oct 9)</td></tr>
<tr><td>1 oz Gold Eagle (new)</td><td>About 3-6%</td><td>SD Bullion</td></tr>
<tr><td>1 oz Silver Eagle (new)</td><td>About 6.9-8.5% (Aug avg 6.87%; about 8.5% in Jul)</td><td><a href="https://findbullionprices.com/premium-history/2026-american-silver-eagle-1-oz-bu-coin/" rel="nofollow noopener" target="_blank">findbullionprices</a></td></tr>
<tr><td>Random-year Silver Eagle</td><td>Lowest dealer price was briefly below spot (-0.3%, Aug 5)</td><td><a href="https://findbullionprices.com/premium-history/silver-coins/American-Silver-Eagle-Random-Year/" rel="nofollow noopener" target="_blank">findbullionprices</a></td></tr>
<tr><td>100 oz silver bar</td><td>About -1% to +0.6%; $0.50-$1.50/oz over spot (May)</td><td>findbullionprices</td></tr>
</tbody>
</table>
<p class="small"><em>Premiums change weekly and widen sharply in buying rushes. During the 2021-2022 retail silver rush, Silver Eagle premiums at times exceeded 50% over spot, according to findbullionprices. Phone-sales IRA dealers often charge far more than the online prices above.</em></p>
<h3>What $10,000 buys - and what it costs to get out</h3>
<p><em>Illustration, using spot prices of $3,900 (gold) and $50 (silver), premiums within the 2026 ranges above, and our <strong>assumed</strong> buyback prices: Gold Eagle bid 1.5% under spot, gold bar 1% under spot, Silver Eagle at spot, 100 oz bar $1 under spot. Ounces are shown as fractions for comparison; in practice you buy whole coins and bars.</em></p>
<table>
<thead><tr><th>Product</th><th>Price per oz</th><th>Ounces for $10,000</th><th>Melt value on day one</th><th>Assumed buyback value</th><th>Round-trip cost</th><th>Price rise needed to break even</th></tr></thead>
<tbody>
<tr><td>Gold Eagle at 4% premium</td><td>$4,056</td><td>2.465 oz</td><td>$9,615</td><td>$9,471</td><td>$529 (5.3%)</td><td>About 5.6%</td></tr>
<tr><td>1 oz gold bar at 2.2% premium</td><td>$3,985.80</td><td>2.509 oz</td><td>$9,785</td><td>$9,687</td><td>$313 (3.1%)</td><td>About 3.2%</td></tr>
<tr><td>Silver Eagle at 7.5% premium</td><td>$53.75</td><td>186.0 oz</td><td>$9,302</td><td>$9,302</td><td>$698 (7.0%)</td><td>About 7.5%</td></tr>
<tr><td>100 oz silver bar at $1 over spot</td><td>$51.00</td><td>196.1 oz</td><td>$9,804</td><td>$9,608</td><td>$392 (3.9%)</td><td>About 4.1%</td></tr>
</tbody>
</table>
<h3>Showing the math</h3>
<ul>
<li><strong>Gold Eagle:</strong> $3,900 x 1.04 = $4,056 per oz. $10,000 / $4,056 = 2.465 oz. Buyback at $3,900 x 0.985 = $3,841.50 per oz, so 2.465 x $3,841.50 = $9,471. Break-even spot = $10,000 / (2.465 x 0.985) = about $4,118, which is 5.6% above $3,900.</li>
<li><strong>Silver Eagle:</strong> $50 x 1.075 = $53.75. $10,000 / $53.75 = 186.0 oz. At an assumed buyback of $50, that is $9,302. Silver must rise 7.5% just to get you back to $10,000.</li>
<li><strong>100 oz bar:</strong> $51 per oz. $10,000 / $51 = 196.1 oz. Buyback at $49 = $9,608. Break-even silver price = $10,000 / 196.1 / ($49/$50) = about $52.04, about 4.1% above $50. Note that $10,000 actually buys one whole 100 oz bar ($5,100) with $4,900 left over.</li>
</ul>
<p>The conclusions: <strong>for small amounts, gold bullion is usually cheaper to own than silver coins</strong>, and silver bars close most of the gap. A high-markup product changes everything - at a 25% proof-style markup, silver would need to rise about 25% before you broke even, before any fees. Our <a href="/articles/how-to-buy-gold">how to buy gold</a> guide covers premiums and spreads in more depth, and our <a href="/articles/best-gold-coins-for-ira">best gold coins for an IRA</a> guide compares coin choices.</p>`,
  },
  {
    heading: "Storage and insurance: gold vs silver",
    body: `<p><strong>Gold is about 78 times more compact than silver for the same dollar value at today's prices. $50,000 of gold weighs under a pound; $50,000 of silver weighs about 69 pounds. That makes silver harder to keep at home, more costly to ship and sometimes more costly to vault.</strong></p>
<p>Here is the physical reality of $50,000 in each metal at early November 2026 prices.</p>
<table>
<thead><tr><th>$50,000 in...</th><th>Gold at $3,900</th><th>Silver at $50</th></tr></thead>
<tbody>
<tr><td>Troy ounces</td><td>12.8 oz</td><td>1,000 oz</td></tr>
<tr><td>Weight</td><td>About 399 g (0.88 lb)</td><td>About 31.1 kg (68.6 lb)</td></tr>
<tr><td>Volume of the metal itself</td><td>About 21 cm³ (about 1.3 cubic inches)</td><td>About 2,965 cm³ (about 181 cubic inches, or 3 liters)</td></tr>
<tr><td>In common products</td><td>About 13 one-ounce coins - a single coin tube</td><td>Ten 100 oz bars (about 6.9 lb each) or two 500-coin boxes of Silver Eagles</td></tr>
<tr><td>Fits in</td><td>A small home safe or a safe deposit box with room to spare</td><td>A heavy-duty safe; a safe deposit box may be too small or too weak</td></tr>
</tbody>
</table>
<p class="small"><em>Our arithmetic: 1 troy oz = 31.1035 g; 1 lb = 453.592 g; densities of 19.32 g/cm³ (gold) and 10.49 g/cm³ (silver). Volumes are for the pure metal; coins in tubes and boxes take more space. A 500-coin "monster box" is the US Mint's standard shipping box for Silver Eagles.</em></p>
<h3>Home storage and insurance</h3>
<ul>
<li><strong>Insurance limits.</strong> The widely used ISO homeowner's form limits theft cover for money, coins, gold and silver to about $200 unless you add a rider - for either metal. Check your policy and ask about a scheduled rider.</li>
<li><strong>Weight and floors.</strong> A few hundred thousand dollars of silver is several hundred pounds of metal. That affects the safe you need and where you can put it.</li>
</ul>
<h3>Vault and IRA storage</h3>
<p>Inside an IRA, metal must be held by an approved depository, not at home - see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a> Depositories charge in different ways: a flat fee, a percentage of value, or sometimes a price based on weight or number of items. Some quote silver separately. Under a flat fee, silver costs no more. Under weight-based pricing it can cost much more. Always ask: <em>"Is silver priced differently from gold, and how?"</em> Our <a href="/articles/gold-ira-fees">gold IRA fees</a> guide and <a href="/gold-ira-fee-calculator">fee calculator</a> help you compare total yearly costs.</p>
`,
  },
  {
    heading: "Which is easier to sell, gold or silver?",
    body: `<p><strong>Both are easy to sell in common forms, but gold is generally easier: it trades in a deeper market, a single coin carries thousands of dollars of value, and it ships cheaply. Silver sells readily too, but large amounts are heavy to ship or carry, and bids on some products can be weaker.</strong></p>
<table>
<thead><tr><th>Factor</th><th>Gold</th><th>Silver</th></tr></thead>
<tbody>
<tr><td>Market depth</td><td>About six times silver's daily trading volume (WGC research, via GoldSilver)</td><td>Smaller; prices can gap in fast markets</td></tr>
<tr><td>Typical dealer bid on common coins</td><td>Roughly 1-2% under spot for sovereign coins</td><td>Varies more; often near spot for Silver Eagles and bars, lower for generic rounds</td></tr>
<tr><td>Shipping $50,000</td><td>A small insured parcel under 1 lb</td><td>About 69 lb - several insured boxes, higher cost</td></tr>
<tr><td>Selling in pieces</td><td>Each coin is about $3,900-$4,000; harder to sell small amounts</td><td>Each coin is about $50; easy to sell exactly what you need</td></tr>
<tr><td>ETF version</td><td>Very liquid (GLD, IAU, GLDM)</td><td>Very liquid (SLV); SIVR smaller but adequate for most investors</td></tr>
</tbody>
</table>
<p class="small"><em>Bid estimates from our research notes (GoldSilver and dealer data, 2026). Silver bid behavior is a general observation from dealer price lists; always get a live quote.</em></p>
<h3>Tips for selling either metal</h3>
<ol>
<li><strong>Check spot first</strong>, then get two or three quotes.</li>
<li><strong>Sell common products.</strong> Eagles, Maple Leafs and bars from known refiners get the best bids. Proof and "collector" coins often sell well below what you paid.</li>
<li><strong>Know the reporting rules.</strong> Dealers may file Form 1099-B for certain products in certain quantities. Whether or not they do, you must report any gain.</li>
<li><strong>Inside an IRA</strong>, the custodian handles the sale and the cash stays in the account. See <a href="/articles/how-to-sell-gold-ira">how to sell a gold IRA</a>.</li>
</ol>
<p>Silver's one real selling advantage is <strong>granularity</strong>: if you need $1,000, you can sell 20 coins. The smallest common gold bullion unit is worth several thousand dollars.</p>`,
  },
];
