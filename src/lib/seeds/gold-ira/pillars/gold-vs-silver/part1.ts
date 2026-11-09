import type { ArticleSection } from "@/lib/config";

// Part 1 of "Gold vs Silver in 2026: Which Is the Better Investment for Your
// Retirement?". Quick answer + key numbers, at-a-glance comparison table,
// what drives gold, what drives silver, and the gold-to-silver ratio.
// Prices dated Oct 30 - Nov 5, 2026 (Kitco, Fortune, Yahoo Finance via
// biztoc, Bullion Trading LLC). Demand data: WGC FY 2025 Gold Demand Trends
// (Jan 29, 2026) and the Silver Institute's World Silver Survey 2026
// (Apr 15, 2026). Question-shaped headings become FAQPage schema.

export const part1: ArticleSection[] = [
  {
    heading: "Is gold or silver the better investment?",
    body: `<div class="qa"><strong>Short answer:</strong> Neither metal is simply "better". <strong>Gold</strong> has been the steadier store of value, with roughly half of silver's volatility, lower premiums and easier storage. <strong>Silver</strong> is cheaper per ounce and can rise faster, but it falls harder - about 59% from its January 2026 high versus about 30% for gold. For most retirement savers, gold is the core holding and silver, if any, a smaller satellite.</div>
<p>The rest of this guide shows the evidence - prices, the ratio, volatility, crashes, premiums, storage, taxes, IRAs and ETFs - so you can decide what fits you. Everything is dated <strong>November 9, 2026</strong>.</p>
<h3>Key numbers (Nov 2026)</h3>
<ul>
<li><strong>Gold spot price:</strong> about <strong>$3,900 per troy ounce</strong> on November 1, 2026 (<a href="https://www.kitco.com/charts/gold" rel="nofollow noopener" target="_blank">Kitco</a>, $3,900.30). December gold futures opened at $4,075.40 on November 5 (Yahoo Finance, via <a href="https://biztoc.com/x/ce06e3e366ed8aa3" rel="nofollow noopener" target="_blank">biztoc</a>).</li>
<li><strong>Silver spot price:</strong> about <strong>$50 an ounce</strong> ($50.04 on October 30, 2026, per <a href="https://fortune.com/article/current-price-of-silver-10-30-2026/" rel="nofollow noopener" target="_blank">Fortune</a>). December silver futures opened at $52.32 on November 5 (Yahoo Finance, via <a href="https://biztoc.com/x/ce06e3e366ed8aa3" rel="nofollow noopener" target="_blank">biztoc</a>).</li>
<li><strong>Gold-to-silver ratio:</strong> about <strong>78-79</strong>. Bullion Trading LLC put it at <strong>79.4 on November 3, 2026</strong> - higher than on 84% of trading days since 1968 (<a href="https://bulliontradingllc.com/charts/gold-silver-ratio/" rel="nofollow noopener" target="_blank">Bullion Trading LLC</a>). At $3,900 and $50, our arithmetic gives 78.</li>
<li><strong>Record highs:</strong> gold about <strong>$5,595</strong> intraday on January 29, 2026 (Reuters); silver about <strong>$121.62</strong> the same day (Metalcharts; one data source, not independently verified).</li>
<li><strong>Fall from the records:</strong> gold about <strong>30%</strong> ($3,900 / $5,595); silver about <strong>59%</strong> ($50.04 / $121.62). Our arithmetic.</li>
<li><strong>2025 performance:</strong> gold up about <strong>65%</strong>, its best year since 1979; silver up roughly <strong>145-150%</strong>, its biggest annual gain on record (<a href="https://www.mining.com/web/gold-and-silver-stumble-at-the-end-of-best-year-since-the-1970s" rel="nofollow noopener" target="_blank">Mining.com, Jan 2026</a>; figures vary slightly by source and close time).</li>
<li><strong>Volatility:</strong> silver's volatility is <strong>roughly twice gold's</strong>, according to the World Gold Council (<a href="https://www.gold.org/goldhub/research/gold-safe-haven-versus-silver-wildcard" rel="nofollow noopener" target="_blank">WGC, March 2026</a>).</li>
<li><strong>Demand mix:</strong> total gold demand was a record <strong>5,002 tonnes</strong> in 2025, including <strong>863 t</strong> bought by central banks (<a href="https://www.gold.org/news-and-events/press-releases/gold-investment-rockets-2025-setting-new-high-uncertainty-bites" rel="nofollow noopener" target="_blank">WGC, Jan 29, 2026</a>). About <strong>58%</strong> of silver demand is industrial: <strong>657.4 million ounces</strong> of roughly 1.13 billion in 2025 (Silver Institute, <a href="https://edrsilver.com/site/assets/files/14910/world_silver_survey_2026_press_release.pdf" rel="nofollow noopener" target="_blank">World Silver Survey 2026 press release</a>; the share is our arithmetic).</li>
<li><strong>Premiums:</strong> about <strong>3-6%</strong> over spot on a new Gold Eagle versus about <strong>6.9-8.5%</strong> on a new Silver Eagle (mid-2026, findbullionprices). 100 oz silver bars have sold near spot.</li>
<li><strong>Bulk:</strong> $50,000 of gold at $3,900 is about <strong>12.8 oz - under 1 pound</strong>. $50,000 of silver at $50 is <strong>1,000 oz - about 69 pounds</strong>. Our arithmetic.</li>
</ul>
<p>Treat these as a dated snapshot, not a quote. Where sources disagree, we say so.</p>
<p>Short on time? Jump to <a href="#should-i-buy-gold-or-silver-for-retirement">should I buy gold or silver for retirement?</a>, the <a href="#which-fits-you-gold-silver-or-a-mix">decision matrix</a> or the <a href="#is-silver-cheaper-to-buy-than-gold">premium math</a>.</p>
<h3>Who we are and how we wrote this</h3>
<p>Gold IRA Planet is an independent site about gold and silver, especially for retirement savers. We are not a dealer and we do not sell metal. Some gold IRA companies pay us when readers contact them - we explain how that works, and how it does and does not affect our rankings, on our <a href="/how-we-rank">how we rank</a> page. In this guide, company names appear only in one clearly labelled section for retirement buyers near the end.</p>
<p>We used primary sources where we could - the World Gold Council, the Silver Institute, the World Bank, the IRS, the CFTC - and dated market reports where we could not. Every worked example is labelled as an <strong>illustration</strong>. It shows how the math works, not what you will pay or earn. Nothing here is a forecast or a recommendation for you personally.</p>`,
  },
  {
    heading: "Gold vs silver at a glance",
    body: `<p><strong>Gold is a large, deep, mostly monetary market driven by investors and central banks. Silver is a much smaller market where industry uses more than half of supply, so it swings harder, costs more to buy in small pieces and takes up far more room. Both qualify for IRAs and both are taxed as collectibles outside one.</strong></p>
<p>Here is the head-to-head comparison, using early November 2026 data. Sources are listed under the table and in the sections that follow.</p>
<table>
<thead><tr><th>Feature</th><th>Gold</th><th>Silver</th></tr></thead>
<tbody>
<tr><td>Spot price (early Nov 2026)</td><td>About $3,900/oz (Nov 1)</td><td>About $50/oz (Oct 30)</td></tr>
<tr><td>Record high</td><td>~$5,595 intraday, Jan 29, 2026</td><td>~$121.62, Jan 29, 2026 (unverified single source)</td></tr>
<tr><td>Fall from record to early Nov 2026</td><td>About 30%</td><td>About 59%</td></tr>
<tr><td>Market size</td><td>About 216,000 tonnes above ground - roughly $27 trillion at $3,900 (our arithmetic); gold trades about six times silver's daily volume (WGC research, via GoldSilver)</td><td>Much smaller; commentary estimates put gold's above-ground value at roughly 6-8 times silver's</td></tr>
<tr><td>Main demand drivers</td><td>Jewelry, bars and coins, ETFs, central banks (863 t in 2025)</td><td>Industry ~58% (electronics, solar, autos), plus jewelry, silverware, coins and bars</td></tr>
<tr><td>Volatility</td><td>Typically about 10-18% a year annualized (WGC research, via coverage)</td><td>Roughly twice gold's (WGC)</td></tr>
<tr><td>Typical premium, popular 1 oz coin</td><td>Gold Eagle ~3-6% (Oct 2026)</td><td>Silver Eagle ~6.9-8.5% (mid-2026)</td></tr>
<tr><td>Cheapest common form</td><td>10 oz bar ~1.8% over spot</td><td>100 oz bar about -1% to +0.6% (May 2026)</td></tr>
<tr><td>Storage for $50,000</td><td>~12.8 oz, under 1 lb, fits in a palm</td><td>~1,000 oz, ~69 lb, about ten 100 oz bars</td></tr>
<tr><td>IRA eligibility</td><td>.995 fine (Gold Eagle allowed by statute)</td><td>.999 fine (Silver Eagle allowed by statute)</td></tr>
<tr><td>Tax outside an IRA</td><td>Collectible: long-term gains taxed up to 28%</td><td>Same</td></tr>
<tr><td>Liquidity</td><td>Very high; tight dealer spreads</td><td>High for common coins and bars; wider spreads, bulky to ship</td></tr>
<tr><td>Main ETFs (expense ratio)</td><td>GLDM 0.10%, IAU 0.25%, GLD 0.40%</td><td>SIVR 0.30%, SLV 0.50%</td></tr>
<tr><td>Best for</td><td>Core long-term holding, wealth preservation, simpler storage</td><td>Smaller satellite holding for people who accept big swings</td></tr>
</tbody>
</table>
<p class="small"><em>Sources: Kitco (Nov 1, 2026); Fortune (Oct 30, 2026); Reuters and Metalcharts via our <a href="/articles/silver-ira">silver IRA guide</a>; World Gold Council FY 2025 and March 2026 research; Silver Institute World Silver Survey 2026; findbullionprices.com premium history (2026); FXStreet (Jan 2026) for the market-value comparison; issuer expense ratios as reported in 2026. The above-ground gold figure is a widely cited estimate; the dollar value is our arithmetic (216,000 t x 32,150.75 oz/t x $3,900).</em></p>
<p>The three rows that matter most for retirement savers are volatility, premiums and storage, and the rest of this guide takes them one at a time. If you mainly want the retirement angle, skip to <a href="#should-i-buy-gold-or-silver-for-retirement">should I buy gold or silver for retirement?</a> and our <a href="/articles/how-to-invest-in-gold-for-retirement">guide to investing in gold for retirement</a>.</p>`,
  },
  {
    heading: "What drives gold prices?",
    body: `<p><strong>Gold prices are driven mostly by investment and monetary demand: interest rates and the US dollar, fear and uncertainty, central bank buying, and flows into ETFs, bars and coins. Jewelry demand matters too, but industrial use is small.</strong></p>
<p>Gold has very little practical use compared with its total supply. Almost all the gold ever mined still exists, mostly as jewelry, bars, coins and central bank reserves. That means the price depends less on factories and more on how much people and governments want to <strong>hold</strong> gold.</p>
<h3>The 2025 gold demand picture</h3>
<p>The World Gold Council's full-year 2025 report gives the clearest picture we have of who buys gold (<a href="https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025" rel="nofollow noopener" target="_blank">WGC, FY 2025</a>):</p>
<table>
<thead><tr><th>Gold demand, 2025</th><th>Tonnes</th><th>Share of total (our arithmetic)</th></tr></thead>
<tbody>
<tr><td>Bars and coins</td><td>1,374</td><td>27%</td></tr>
<tr><td>Central banks</td><td>863</td><td>17%</td></tr>
<tr><td>ETFs (net inflows)</td><td>801</td><td>16%</td></tr>
<tr><td>Jewelry, technology and other (remainder)</td><td>1,964</td><td>39%</td></tr>
<tr><td><strong>Total</strong></td><td><strong>5,002</strong> (a record)</td><td>100%</td></tr>
</tbody>
</table>
<p class="small"><em>Totals from the WGC press release of Jan 29, 2026 and <a href="https://www.mining.com/web/global-gold-demand-hits-record-high-in-2025-wgc-says" rel="nofollow noopener" target="_blank">Mining.com</a>. The "remainder" row is 5,002 minus the three named categories; it is our subtraction, not a WGC category. Shares do not add to exactly 100% because of rounding.</em></p>
<p>Bar and coin demand hit a 12-year high, ETF inflows were worth a record <strong>$89 billion</strong> (<a href="https://www.gold.org/goldhub/research/gold-etfs-holdings-and-flows/2026/01" rel="nofollow noopener" target="_blank">WGC</a>), and central banks bought less than the 1,000-plus tonnes a year of 2022-2024 but far more than in the 2010s. At 2025's record average price of $3,431, 5,002 tonnes was worth roughly <strong>$550 billion</strong> (our arithmetic).</p>
<h3>The main gold price drivers</h3>
<ul>
<li><strong>Real interest rates.</strong> Gold pays no interest. When inflation-adjusted bond yields rise, holding gold costs more in lost income, and prices often soften. When rates fall, gold tends to benefit.</li>
<li><strong>The US dollar.</strong> Gold is priced in dollars, so a stronger dollar often weighs on the price, and a weaker one supports it.</li>
<li><strong>Fear and uncertainty.</strong> War, financial stress, worries about government debt or central bank independence can all push investors toward gold.</li>
<li><strong>Central banks.</strong> Their buying has been a large, steady source of demand since 2022 - and central banks hold gold, not silver, as a reserve asset.</li>
<li><strong>Investment flows.</strong> ETF buying and selling can move the price quickly in both directions, as 2026 showed.</li>
</ul>
<p>For a century of context, read our <a href="/articles/gold-price-history">gold price history</a> guide. For the question of whether gold is worth owning at all, see <a href="/articles/is-a-gold-ira-a-good-investment">is a gold IRA a good investment?</a></p>`,
  },
  {
    heading: "What drives silver prices?",
    body: `<p><strong>Silver is driven by two forces at once: investors who treat it like a cheaper cousin of gold, and manufacturers who use it in electronics, solar panels and cars. Industry takes roughly 58% of demand, so silver reacts to the economy and to solar-panel technology as well as to fear and interest rates.</strong></p>
<p>This "dual personality" explains most of what makes silver different. When investors pile into precious metals, silver often rises faster than gold. When the economy slows or factories cut back, silver can fall even while gold holds up.</p>
<h3>The 2025 silver demand picture</h3>
<p>The Silver Institute's <a href="https://www.silverinstitute.org" rel="nofollow noopener" target="_blank">World Silver Survey 2026</a>, published April 15, 2026 with Metals Focus, reported these 2025 figures (press release copy hosted by <a href="https://edrsilver.com/site/assets/files/14910/world_silver_survey_2026_press_release.pdf" rel="nofollow noopener" target="_blank">EDR Silver</a>; secondary coverage by <a href="https://www.miningvisuals.com/post/silver-supply-and-demand-a-2026-update" rel="nofollow noopener" target="_blank">MiningVisuals</a> and <a href="https://sdbullion.com/blog/silver-supply-vs-demand" rel="nofollow noopener" target="_blank">SD Bullion</a>):</p>
<table>
<thead><tr><th>Silver market, 2025</th><th>Figure</th><th>Change</th></tr></thead>
<tbody>
<tr><td>Total demand</td><td>About 1.13 billion oz</td><td>Down about 2%</td></tr>
<tr><td>Industrial demand</td><td>657.4 million oz (about 58% of total, our arithmetic)</td><td>Down 3% - the first fall after four record years</td></tr>
<tr><td>Of which solar (photovoltaic)</td><td>186.6 million oz</td><td>Down 6% from 197.5-197.6 million oz in 2024</td></tr>
<tr><td>Coins and bars</td><td>Not restated here</td><td>Up 14%</td></tr>
<tr><td>Mine production</td><td>846.6 million oz</td><td>Up 3%</td></tr>
<tr><td>Market deficit</td><td>About 40.3 million oz</td><td>Fifth straight year of deficit</td></tr>
<tr><td>2026 forecast deficit</td><td>About 46.3 million oz</td><td>Would be a sixth straight year</td></tr>
</tbody>
</table>
<p class="small"><em>Sources disagree on some details - for example, whether 2026 is the fifth or sixth deficit year, and exact industrial totals. Check the full survey at silverinstitute.org before relying on a single figure. 2024 industrial demand was a record 680.5 million oz (<a href="https://www.pv-magazine.com/2025/04/17/average-silver-price-up-21-in-2024-says-silver-institute/" rel="nofollow noopener" target="_blank">pv magazine, Apr 17, 2025</a>).</em></p>
<p>At an average 2025 price of $40.03, 1.13 billion ounces of silver demand was worth roughly <strong>$45 billion</strong> - about one-twelfth of the value of gold demand that year (our arithmetic). That size gap is one reason silver moves so much: a given amount of money flowing in or out has a bigger effect.</p>
<h3>Solar: silver's biggest growth story - and its biggest risk</h3>
<p>Solar panels became silver's largest single industrial use over the past decade. But high silver prices push manufacturers to use less of it per cell, a process called "thrifting". The Silver Institute's 2026 survey forecast photovoltaic silver demand to fall about <strong>19% in 2026, to roughly 151 million ounces</strong>, mainly because of lower silver loadings per cell (<a href="https://www.pv-magazine.com/?p=68707" rel="nofollow noopener" target="_blank">pv magazine</a>). Growth in data centers, power grids and car electronics was not expected to fully offset that.</p>
<p>The lesson is not that solar demand is "bad" for silver. It is that silver's industrial demand is <strong>price-sensitive</strong> in a way gold's is not. A big price spike can, over time, reduce the demand that helped cause it.</p>
<h3>What a "deficit" does and does not mean</h3>
<p>A deficit means a year's demand exceeded new supply, so the gap was filled from existing stockpiles. Sellers often present five straight deficits as bullish - yet silver still fell about 59% from its January 2026 high with a 2026 deficit forecast. Stockpiles can cover deficits for years. Treat the deficit as one input, not a price guarantee.</p>
<h3>The other silver drivers</h3>
<ul>
<li><strong>Gold's direction.</strong> Silver usually moves the same way as gold, only more so - see <a href="#does-silver-follow-gold">does silver follow gold?</a></li>
<li><strong>Interest rates and the dollar.</strong> Like gold, silver pays nothing, so rate-hike fears weighed on it through 2026.</li>
<li><strong>Leveraged trading.</strong> Silver's futures and options markets are small relative to the money that can flow into them, which magnifies swings. This was central to the January 30, 2026 crash.</li>
<li><strong>The business cycle.</strong> Recessions tend to cut industrial demand. In the March 2020 Covid panic, silver fell so much harder than gold that the ratio hit about 125.</li>
</ul>
<p>Our <a href="/articles/silver-ira">silver IRA guide</a> covers what all this means for retirement accounts in more detail.</p>`,
  },
  {
    heading: "What is the gold-to-silver ratio?",
    body: `<p><strong>The gold-to-silver ratio is the number of ounces of silver you could buy with one ounce of gold. You find it by dividing the gold price by the silver price. In early November 2026 it was about 78-79, meaning one ounce of gold bought roughly 78 ounces of silver.</strong></p>
<p>The formula is simple:</p>
<ul>
<li><strong>Gold-to-silver ratio = gold price per ounce / silver price per ounce</strong></li>
<li>Example: $3,900 / $50 = <strong>78</strong></li>
<li>Using November 5 futures opens: $4,075.40 / $52.32 = about <strong>77.9</strong> (our arithmetic)</li>
</ul>
<p>Bullion Trading LLC, which tracks the ratio daily, put it at <strong>79.4 on November 3, 2026</strong>, and noted that was higher than on 84% of trading days since 1968, 78% of days since 2000 and 33% of days in the last five years (<a href="https://bulliontradingllc.com/charts/gold-silver-ratio/" rel="nofollow noopener" target="_blank">Bullion Trading LLC</a>). USAGOLD reported 75.1 on October 28, up from about 60 at the start of the year (<a href="https://www.usagold.com/daily-precious-metals-market-report-october-28-2026/" rel="nofollow noopener" target="_blank">USAGOLD, Oct 28, 2026</a>).</p>
<h3>What a high or low ratio means</h3>
<table>
<thead><tr><th>Ratio</th><th>What it says</th><th>What it does not say</th></tr></thead>
<tbody>
<tr><td>High (say, above 80)</td><td>Silver is cheap relative to gold by historical standards</td><td>That silver is cheap in absolute terms, or that it will rise</td></tr>
<tr><td>Around the long-run average (about 59-61 since 1968-1971)</td><td>The metals are priced roughly in line with their modern relationship</td><td>That this is a "fair value" either metal must return to</td></tr>
<tr><td>Low (say, below 50)</td><td>Silver is expensive relative to gold</td><td>That silver must fall</td></tr>
</tbody>
</table>
<p class="small"><em>Long-run average: 59.1 (mean) and 61.6 (median) on daily data since 1968 per Bullion Trading LLC; about 60.5 as the mean of annual averages since 1971 per <a href="https://metalcharts.org/ratios/xau/xag" rel="nofollow noopener" target="_blank">Metalcharts</a>. Averages depend on the start date and method.</em></p>
<h3>Why the ratio moves</h3>
<p>The ratio rises when silver falls faster than gold - typically in recessions, market panics and periods of rate-hike fear - and it falls when silver outruns gold in precious metals rallies. In early 2026, silver's record run drove the ratio to about <strong>45.4 on January 27</strong>, its lowest close since September 2011 (Bullion Trading LLC). Using the two January 29 record highs, it was about $5,595 / $121.62 = <strong>46</strong>. By early November it had climbed back to the high 70s as silver fell much further than gold.</p>
<p>That swing - from about 46 to about 79 in nine months - shows how quickly "relative value" can change. Next, we look at the ratio's longer history and the "ratio rules" some investors follow, with the caveats that come with them.</p>`,
  },
];
