import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Gold vs Silver in 2026". Forecasts and their track record
// (World Bank, J.P. Morgan, UBS - summarised, no predictions of our own),
// scams and upsells (Safeguard Metals figures per PILLAR-RESEARCH.md),
// mistakes checklist, labelled company section, glossary, FAQs and bottom
// line. Company facts match FACTS in ../../shared (third-party, Oct 2026).
// The final section ends with DISCLAIMER.

export const part5: ArticleSection[] = [
  {
    heading: "Silver price predictions: what forecasters say and how reliable they are",
    body: `<p><strong>Major forecasters published silver targets for 2026 and 2027 ranging roughly from the mid-$60s to $80 an ounce - all well above the ~$50 price of early November 2026. Their 2026 forecasts have already proved too high, and several were cut sharply during the year. We do not make price predictions, and we suggest treating anyone's forecast as a scenario, not a plan.</strong></p>
<h3>What the forecasters said</h3>
<table>
<thead><tr><th>Forecaster</th><th>Forecast</th><th>When published</th><th>Source</th></tr></thead>
<tbody>
<tr><td>J.P. Morgan</td><td>2026 average $81</td><td>February 2026</td><td><a href="https://www.kitco.com/news/article/2026-02-11/silver-will-average-81oz-year-more-double-2025-average-price-floor-rises-jp" rel="nofollow noopener" target="_blank">Kitco, Feb 11, 2026</a></td></tr>
<tr><td>J.P. Morgan (revised)</td><td>2026 average $70.60 (from $84.30); Q4 2026 $63 (from $90); 2027 average $63.90 (from $85.80)</td><td>September 2026</td><td><a href="https://www.canadianminingreport.com/blog/jpmorgan-cuts-silver-forecast-for-2027-could-higher-rates-keep-prices-under-pressure" rel="nofollow noopener" target="_blank">Canadian Mining Report, Sep 11, 2026</a></td></tr>
<tr><td>UBS</td><td>$70 by Dec 2026; $75 in Mar and Jun 2027; $80 by Sep 2027</td><td>2026</td><td><a href="https://uk.finance.yahoo.com/news/silver-could-reach-80-september-142746719.html" rel="nofollow noopener" target="_blank">Yahoo Finance UK</a></td></tr>
<tr><td>World Bank</td><td>2026 average $70; 2027 average $65</td><td>April 2026</td><td><a href="https://thedocs.worldbank.org/en/doc/f3138644a1e8e2bb631399ae11d6c408-0050012026/related/CMO-April-2026-Forecasts.pdf" rel="nofollow noopener" target="_blank">World Bank CMO forecasts</a></td></tr>
<tr><td>World Bank (update)</td><td>2026 average kept at $70; warns silver faces a steeper correction than gold; gold seen above $4,000 through 2028</td><td>October 2026</td><td><a href="https://www.kitco.com/news/article/2026-11-05/world-bank-sees-gold-holding-above-4000-through-2028-warns-silver-faces" rel="nofollow noopener" target="_blank">Kitco, Nov 5, 2026</a></td></tr>
</tbody>
</table>
<p class="small"><em>Several of these figures come from press summaries of bank research rather than the notes themselves. We found no publicly available 2027 silver target from Goldman Sachs or Citi that we could confirm. Forecasts may have changed since publication.</em></p>
<h3>How reliable have they been?</h3>
<ul>
<li><strong>The 2026 average forecasts look hard to reach.</strong> An annual average reflects the whole year, including the record-setting January, so it can still land above today's price - but with silver near $50 in late October and November, every 2026 forecast above was well above where silver was trading.</li>
<li><strong>Big revisions within months.</strong> J.P. Morgan's 2027 forecast fell 26% between its earlier and September 2026 views. Its Q4 2026 target fell from $90 to $63 - and silver was trading below even the revised figure by late October.</li>
<li><strong>Forecasts tend to follow the price.</strong> Targets rose as silver soared and fell as it slumped. That pattern is common in commodity forecasting.</li>
</ul>
<p>If a seller quotes a bullish forecast to encourage a purchase, ask two questions: <em>what was this forecaster's target a year ago, and what would I lose if the low end of the range happened instead?</em> The CFTC's advisory <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="nofollow noopener" target="_blank">10 things to know before buying precious metals</a> warns specifically about price-forecast sales pitches.</p>`,
  },
  {
    heading: "Scams and upsells to avoid with gold and silver",
    body: `<p><strong>The biggest risk for most precious metals buyers is not the price - it is paying far too much. Watch for proof and "IRA-exclusive" coins sold at large markups, pressure to switch from bullion into "rare" coins, "free silver" offers built into the price, and anyone who asks you to move savings to "protect" them.</strong></p>
<h3>A silver-coin case study: Safeguard Metals</h3>
<p>Regulators' case against Safeguard Metals is one of the clearest examples of what high markups do to silver buyers, many of them older investors using retirement accounts:</p>
<ul>
<li>The <strong>CFTC</strong> said Safeguard's markups on <strong>silver coins ranged from 51% to more than 70%</strong>.</li>
<li>The <strong>SEC</strong> said the <strong>average markup was about 64%</strong>, while customers had been told to expect roughly 4-33%.</li>
<li>A <strong>final judgment in October 2025</strong> required about <strong>$25.6 million in restitution plus an equal civil penalty</strong> - roughly $51 million in total.</li>
</ul>
<p><em>Illustration.</em> At a 64% markup and $50 silver, $10,000 buys about 122 ounces ($10,000 / $82), worth about $6,100 at spot on day one. Silver would need to rise about 64% just to get back to $10,000 - before any selling discount or fees. Compare that with about 196 ounces from 100 oz bars in our <a href="#is-silver-cheaper-to-buy-than-gold">premium table</a>.</p>
<h3>Common red flags</h3>
<table>
<thead><tr><th>Pitch</th><th>Why it is a problem</th></tr></thead>
<tbody>
<tr><td>"Proof Silver Eagles are IRA-approved, so they're the best choice"</td><td>Eligible is not the same as good value. Proofs carry much larger spreads; one dealer disclosed 23% on proofs versus 7% on bullion</td></tr>
<tr><td>"IRA-exclusive" or "limited edition" coins</td><td>No such IRS category exists. These are often high-premium products with few buyers when you sell</td></tr>
<tr><td>"Silver is about to explode - the ratio says so"</td><td>The ratio is not a timing signal (see <a href="#can-you-use-the-gold-to-silver-ratio-to-decide-what-to-buy">ratio rules</a>)</td></tr>
<tr><td>"Free silver" with your purchase</td><td>The cost is built into the price; compare the all-in price per ounce</td></tr>
<tr><td>"Your bank or IRA is unsafe - move it to metals now"</td><td>A classic pressure tactic; legitimate firms do not rush you</td></tr>
<tr><td>"Store your IRA metal at home"</td><td>Home storage of IRA metal can be treated as a taxable distribution (McNulty v. Commissioner, 2021)</td></tr>
<tr><td>"We're an IRS-approved dealer"</td><td>The IRS does not approve or endorse dealers</td></tr>
</tbody>
</table>
<p>Other cases worth knowing include Red Rock Secured (markups of up to 130%, $76.4 million final judgment, SEC) and Lear Capital (undisclosed commissions of up to 33%, New York AG). Our full guide to <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> covers more, and the CFTC's <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="nofollow noopener" target="_blank">precious metals advisory</a> is worth reading before any purchase.</p>`,
  },
  {
    heading: "Gold vs silver mistakes checklist",
    body: `<p><strong>The most common mistakes are buying silver because it "looks cheap" per ounce, paying high premiums on small coins or proofs, holding too much of the more volatile metal close to retirement, ignoring storage weight, and trying to trade the ratio without counting costs and taxes.</strong></p>
<p>Before you buy either metal, run through this list:</p>
<ul>
<li>&#9744; <strong>Confusing price per ounce with value.</strong> Silver at $50 is not "cheaper" than gold at $3,900. What matters is the premium and the risk.</li>
<li>&#9744; <strong>Paying a high premium on small silver.</strong> A 7.5% coin premium means silver must rise 7.5% to break even. Compare against bars.</li>
<li>&#9744; <strong>Buying proof or "IRA-exclusive" coins for investment.</strong> Ask for the buyback price today, in writing.</li>
<li>&#9744; <strong>Holding too much silver near retirement.</strong> Silver fell about 59% from its 2026 record; gold about 30%.</li>
<li>&#9744; <strong>Treating the ratio as a guarantee.</strong> It stayed above 80 for long stretches of 2019-2024.</li>
<li>&#9744; <strong>Forgetting storage weight.</strong> $50,000 of silver is about 69 pounds. Measure your safe and check your insurance rider.</li>
<li>&#9744; <strong>Chasing a rally.</strong> Buying silver after a record run in early 2026 led to some of the worst losses of the year.</li>
<li>&#9744; <strong>Not getting the all-in price per ounce against spot</strong> before paying.</li>
<li>&#9744; <strong>Skipping independent advice.</strong> A fee-only adviser or tax professional costs far less than one bad markup.</li>
</ul>`,
  },
  {
    heading: "If you're buying for retirement: comparing gold IRA companies",
    body: `<p><strong>If you want physical gold or silver inside an IRA, you will need a custodian, an approved depository and a dealer. Several full-service gold IRA companies arrange all three; they differ mainly in minimums, fees, promotions and how transparent they are about product prices.</strong></p>
<p><em>Disclosure: some gold IRA companies pay us when readers contact them. That does not change the facts below, which are third-party snapshots from October 2026. See <a href="/how-we-rank">how we rank</a> for our methods.</em></p>
<table>
<thead><tr><th>Company</th><th>Reported minimum</th><th>Yearly fees (custodian + storage)</th><th>Current promotion</th><th>Our review</th></tr></thead>
<tbody>
<tr><td>American Hartford Gold</td><td>$10,000</td><td>~$225-$275/yr</td><td>Up to $25k in free silver on qualifying orders</td><td><a href="/reviews/american-hartford-gold">American Hartford Gold review</a></td></tr>
<tr><td>Goldco</td><td>$25,000 (reported)</td><td>~$225-$275/yr</td><td>Up to 10% in bonus silver</td><td><a href="/reviews/goldco">Goldco review</a></td></tr>
<tr><td>Augusta Precious Metals</td><td>$50,000</td><td>~$225-$275/yr</td><td>Fee waivers on qualifying accounts (varies)</td><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals review</a></td></tr>
</tbody>
</table>
<p class="small"><em>Figures are third-party snapshots (Oct 2026) and change often. None of these companies publishes its product spreads, so ask for the all-in price per ounce against spot, in writing, before you buy.</em></p>
<p>Whichever company you consider, ask the same questions:</p>
<ol>
<li>What is the price per ounce, and the premium over spot, for each product you recommend?</li>
<li>What would you pay to buy the same product back today?</li>
<li>Is silver storage priced differently from gold?</li>
<li>Are any recommended coins proof, "exclusive" or numismatic? Why?</li>
<li>Which custodian and depository will hold the metal, and what are their fees?</li>
</ol>
<p>For more detail, see our <a href="/">company rankings</a>, our <a href="/articles/gold-ira-reviews">gold IRA reviews</a> and <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a>. Use our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> to compare yearly costs.</p>`,
  },
  {
    heading: "Gold vs silver glossary",
    body: `<p><strong>These are the terms you will meet most often when comparing gold and silver.</strong></p>
<ul>
<li><strong>Spot price</strong> - the current wholesale price of one troy ounce of metal.</li>
<li><strong>Troy ounce</strong> - the standard unit for precious metals: 31.1035 grams, about 10% heavier than a kitchen ounce.</li>
<li><strong>Premium</strong> - the amount a seller charges above spot, usually shown as a percentage.</li>
<li><strong>Spread</strong> - the gap between bid and ask; the real round-trip cost of physical metal.</li>
<li><strong>Gold-to-silver ratio</strong> - the gold price divided by the silver price; how many ounces of silver one ounce of gold buys.</li>
<li><strong>Volatility</strong> - how much a price swings, usually the annualized standard deviation of daily returns.</li>
<li><strong>Drawdown</strong> - the fall from a peak to a later low.</li>
<li><strong>Fineness</strong> - purity in parts per thousand. IRAs require .995 for gold and .999 for silver (Eagles excepted by statute).</li>
<li><strong>Proof coin</strong> - a specially struck collector coin with a mirror finish, sold at a high premium.</li>
<li><strong>Junk silver</strong> - pre-1965 US dimes, quarters and half dollars (90% silver); not IRA-eligible.</li>
<li><strong>Thrifting</strong> - manufacturers reducing the amount of silver used per product, such as per solar cell.</li>
<li><strong>Market deficit</strong> - a year in which demand exceeds new supply, met from existing stocks.</li>
<li><strong>Margin</strong> - the deposit a futures trader must post; raising it can force leveraged traders to sell.</li>
<li><strong>Collectibles tax rate</strong> - the maximum 28% federal rate on long-term gains from physical metals and grantor-trust metal ETFs.</li>
</ul>`,
  },
  {
    heading: "Gold vs silver FAQs",
    body: `<p><strong>Quick answers to the questions readers ask us most about gold versus silver.</strong></p>
<h3>Is silver a good investment right now?</h3>
<p>It depends on your goals and risk tolerance. In early November 2026, silver was about 59% below its January record and the gold-to-silver ratio was near 79, high by historical standards. But forecasters had cut their outlooks and silver remains about twice as volatile as gold. We do not predict prices.</p>
<h3>What is the gold-to-silver ratio today?</h3>
<p>About 78-79 in early November 2026: 79.4 on November 3 (Bullion Trading LLC), and 78 using $3,900 gold and $50 silver.</p>
<h3>What is a "good" gold-to-silver ratio to buy silver?</h3>
<p>There is no reliable threshold. Some investors favor silver when the ratio is well above its long-run average of about 60, but the ratio has stayed above 80 for years at a time.</p>
<h3>Will silver reach $100 again?</h3>
<p>No one knows. Silver traded above $100 in January 2026 (by one data source's record of about $121.62), then fell to about $50. The major bank and World Bank forecasts we found for 2026-2027 ranged from the mid-$60s to $80.</p>
<h3>Is gold or silver better in a recession?</h3>
<p>Historically gold has held up better in sharp downturns, because silver's industrial demand falls with the economy. In the March 2020 panic, the ratio rose to about 125 as silver fell much harder than gold.</p>
<h3>Do central banks buy silver?</h3>
<p>Not as a reserve asset in any meaningful way. Central banks bought 863 tonnes of gold in 2025 (World Gold Council), and their buying has been one of gold's steadiest sources of demand since 2022. Silver has no equivalent buyer, which is one reason it swings more.</p>
<h3>Should I buy silver coins or silver bars?</h3>
<p>Coins such as Silver Eagles are easy to recognize and sell in small amounts but carried about 6.9-8.5% premiums in mid-2026. 100 oz bars sold close to spot. Many buyers hold a mix; for a larger amount, bars cut the cost sharply.</p>`,
  },
  {
    heading: "The bottom line on gold vs silver",
    body: `<p><strong>Gold has been the steadier, cheaper-to-hold store of value; silver has offered bigger gains and much bigger losses. For most retirement savers, gold makes sense as the core precious metal, with silver - if any - as a smaller, deliberate addition bought in low-premium forms.</strong></p>
<p>As of November 9, 2026, gold trades near $3,900 and silver near $50, a ratio of about 78-79. Both are well below their January records - gold by about 30%, silver by about 59%. Here is what we would remember:</p>
<ol>
<li><strong>Silver is about twice as volatile as gold</strong> (World Gold Council). Size your holding for the falls, not the rallies.</li>
<li><strong>The ratio is context, not a signal.</strong> It ranged from about 15-17 in 1980 to about 125 in 2020, and from about 45 to 79 within 2026.</li>
<li><strong>Premiums matter more with silver.</strong> On $10,000, a Silver Eagle round trip cost about 7% in our illustration versus about 3-5% for gold bullion and about 4% for 100 oz silver bars.</li>
<li><strong>Storage matters more with silver.</strong> $50,000 is under 1 pound of gold or about 69 pounds of silver.</li>
<li><strong>Taxes are the same:</strong> up to 28% on long-term gains outside an IRA; standard IRA rules inside one.</li>
<li><strong>ETFs solve silver's practical problems</strong> - premiums and weight - for people who only want the price.</li>
<li><strong>Forecasts have been unreliable.</strong> Every major 2026 silver forecast we found was well above where silver traded in late 2026.</li>
<li><strong>Avoid high-markup products.</strong> Regulators found average markups of about 64% in the Safeguard Metals silver-coin case.</li>
</ol>
<p>To go further, read our <a href="/articles/silver-ira">silver IRA guide</a>, <a href="/articles/gold-ira">complete gold IRA guide</a>, <a href="/articles/gold-price-history">gold price history</a> and <a href="/articles/is-a-gold-ira-a-good-investment">is a gold IRA a good investment?</a> Background data is available from the <a href="https://www.gold.org" rel="nofollow noopener" target="_blank">World Gold Council</a>, the <a href="https://www.silverinstitute.org" rel="nofollow noopener" target="_blank">Silver Institute</a> and the <a href="https://www.lbma.org.uk" rel="nofollow noopener" target="_blank">LBMA</a>.</p>
<p>Because neither metal pays income and both can fall sharply, consider talking to a fee-only financial adviser or a tax professional - someone who does not sell metals - before you commit a significant share of your savings.</p>
${DISCLAIMER}`,
  },
];
