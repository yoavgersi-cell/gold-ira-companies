import type { ArticleSection } from "@/lib/config";

// Part 2 of "Gold vs Silver in 2026". Ratio history milestones, how "ratio
// rules" work (neutral, with caveats), annual performance 2015-2026, long-run
// returns since 2000 and volatility. Gold year-end closes and yearly changes
// match the gold-price-history pillar (JM Bullion); silver annual averages are
// from PILLAR-RESEARCH.md; silver year-end changes from MarketScreener.
// 2000 averages from Metalcharts. All CAGR figures are our arithmetic.

export const part2: ArticleSection[] = [
  {
    heading: "Gold-to-silver ratio history",
    body: `<p><strong>Since 1968 the gold-to-silver ratio has averaged roughly 59-61, but it has ranged from about 15-17 during the 1980 Hunt brothers squeeze to about 125 in the March 2020 Covid panic. In 2026 alone it swung from about 45 in late January to about 79 in early November.</strong></p>
<p>For most of recorded history, governments fixed the ratio by law - the US set it at 15 to 1 in 1792 and 16 to 1 in 1834. Since metals began trading freely in the early 1970s, the ratio has floated. These are the milestones most often cited.</p>
<table>
<thead><tr><th>Date</th><th>Approx. ratio</th><th>What was happening</th></tr></thead>
<tbody>
<tr><td>January 1980</td><td>About 17 (some daily data show 14-15)</td><td>Hunt brothers' attempt to corner silver; silver hit $49.45 on January 17</td></tr>
<tr><td>February 1991</td><td>First close above 100 (about 100.8, Feb 25)</td><td>Silver fell below $4 an ounce after a decade-long slump</td></tr>
<tr><td>April 2011</td><td>Low 30s (our estimate from prices at the time)</td><td>Silver neared $49.50, close to its 1980 high</td></tr>
<tr><td>March 2020</td><td>About 125 intraday (Mar 18); record close about 123.5 (Mar 17)</td><td>Covid market panic; silver fell much faster than gold</td></tr>
<tr><td>End of 2024</td><td>About 91 ($2,617 / $28.90, our arithmetic)</td><td>Gold rallying on central bank buying; silver lagging</td></tr>
<tr><td>End of 2025</td><td>About 60 ($4,316 / $72, our arithmetic)</td><td>Silver's record year (up roughly 145-150%)</td></tr>
<tr><td>January 27-29, 2026</td><td>About 45-46</td><td>Lowest close since September 2011 (45.4); both metals at records</td></tr>
<tr><td>October 28, 2026</td><td>75.1</td><td>Silver sliding toward its yearly low (USAGOLD)</td></tr>
<tr><td>November 3, 2026</td><td>79.4</td><td>Higher than on 84% of days since 1968 (Bullion Trading LLC)</td></tr>
</tbody>
</table>
<p class="small"><em>Sources: ratio histories published by <a href="https://bulliontradingllc.com/charts/gold-silver-ratio/" rel="nofollow noopener" target="_blank">Bullion Trading LLC</a>, <a href="https://sdbullion.com/blog/historical-gold-silver-ratio-long-term-and-now" rel="nofollow noopener" target="_blank">SD Bullion</a> and <a href="https://www.moneymetals.com/gold-silver-ratio" rel="nofollow noopener" target="_blank">Money Metals</a>; <a href="https://www.britannica.com/topic/Silver-Thursday" rel="nofollow noopener" target="_blank">Britannica</a> for the 1980 silver peak; USAGOLD (Oct 28, 2026). Exact readings differ between sources depending on whether they use intraday, closing or London fix prices. Year-end 2024 and 2025 prices are from the sources in our <a href="/articles/gold-price-history">gold price history</a> guide.</em></p>
<h3>Three things the history teaches</h3>
<ol>
<li><strong>Extremes happen in manias and panics.</strong> The 1980 low came during a speculative squeeze. The 2020 high came in a liquidity panic. Neither lasted, but neither could have been timed precisely.</li>
<li><strong>The ratio can stay "unusual" for years.</strong> It stayed above 60 for most of the period from the mid-1980s to the 2000s, and above 80 for much of 2019-2024. Anyone waiting for a return to "normal" waited a long time.</li>
<li><strong>The long-run average is not a law.</strong> Silver's role has changed - from money to photography to electronics and solar - and nothing pins the ratio to 60.</li>
</ol>
<p>Many ratio charts come from bullion sellers, who have an interest in calling silver "cheap" - a reason to read their commentary with care.</p>`,
  },
  {
    heading: "Can you use the gold-to-silver ratio to decide what to buy?",
    body: `<p><strong>Some investors use the ratio as a rough guide - favoring silver when the ratio is high and gold when it is low - but it is a relative-value idea, not a reliable signal. It says nothing about whether either metal will rise, and the ratio can stay high or low for many years.</strong></p>
<p>We describe the common "ratio rules" because sellers promote them - not to recommend them. Most retirement savers do not need a trading approach.</p>
<h3>How the common "ratio rules" work</h3>
<table>
<thead><tr><th>Approach</th><th>How it is described</th><th>Main caveats</th></tr></thead>
<tbody>
<tr><td>Ratio-based tilt</td><td>When the ratio is well above its long-run average, put new money into silver; when it is well below, favor gold</td><td>"Well above" and "average" are judgment calls; the ratio stayed above 80 for much of 2019-2024</td></tr>
<tr><td>Ratio swap</td><td>Trade gold for silver at a high ratio, then back to gold at a low ratio, aiming to end up with more ounces of gold</td><td>Every swap costs two spreads (sell one metal, buy the other), and outside an IRA each sale can trigger tax at up to 28%</td></tr>
<tr><td>Fixed-band rebalancing</td><td>Hold a set mix (say, 75% gold / 25% silver by value) and rebalance when it drifts</td><td>Less about prediction; still has trading costs and taxes</td></tr>
</tbody>
</table>
<h3>A worked "ratio swap" example - and its costs</h3>
<p><em>Illustration only, using round numbers and assumed costs.</em> Suppose you own 10 ounces of gold when the ratio is 80, and you swap into silver, then swap back when the ratio is 50.</p>
<ol>
<li><strong>Before costs:</strong> 10 oz gold x 80 = 800 oz silver. At a ratio of 50, 800 oz silver buys back 800 / 50 = <strong>16 oz of gold</strong>. That is the appeal: 60% more gold, regardless of whether prices went up or down.</li>
<li><strong>With costs:</strong> assume each leg loses about 5% to dealer spreads (selling below spot and buying above it). Four legs (sell gold, buy silver, sell silver, buy gold) at about 5% each leave roughly 0.95 x 0.95 x 0.95 x 0.95 = 81% of the value. 16 oz x 0.81 = about <strong>13 oz</strong>.</li>
<li><strong>With tax outside an IRA:</strong> each sale may create a taxable gain at up to 28% federally, which would shrink the result further.</li>
<li><strong>If the ratio never falls to 50:</strong> you could wait years holding the more volatile metal, or swap back at a worse ratio and end up with <em>fewer</em> ounces of gold than you started with.</li>
</ol>
<p>From 2019 to 2024 the ratio spent long stretches above 80. Someone who swapped into silver at 80 in 2019 would have waited until the end of 2025 to see a year-end ratio near 60. It worked eventually - but it took six years, a pandemic and a historic silver squeeze.</p>
<h3>Our take</h3>
<p>The ratio is a useful <strong>description</strong> of how the two metals are priced against each other. If you already plan to own both, it can help you decide which to add to when you put in new money. It is not a timing tool you can rely on, and we would not build a retirement plan around trading it. If you want to trade, a fee-only adviser can help you think through the costs and taxes first.</p>`,
  },
  {
    heading: "Gold vs silver performance 2015-2026",
    body: `<p><strong>From 2015 to 2025, gold rose in eight of eleven years and silver in six of the ten years for which we have year-end data, with silver posting both the biggest gains (about +145-150% in 2025, +48% in 2020) and deeper losses. In 2026, both fell sharply from January records: gold about 30% and silver about 59% by early November.</strong></p>
<p>The table below puts the two metals side by side. Gold columns use year-end closes (JM Bullion) and the matching yearly change, consistent with our <a href="/articles/gold-price-history">gold price history</a> guide. Silver columns use annual average prices from our research notes and year-end changes reported by MarketScreener.</p>
<table>
<thead><tr><th>Year</th><th>Gold year-end close</th><th>Gold yearly change</th><th>Gold annual average</th><th>Silver annual average</th><th>Silver average vs prior year (our arithmetic)</th><th>Silver year-end change</th></tr></thead>
<tbody>
<tr><td>2015</td><td>$1,061</td><td>-10.7%</td><td>n/a</td><td>$15.68</td><td>about -18%</td><td>about -11%</td></tr>
<tr><td>2016</td><td>$1,152</td><td>+6.8%</td><td>n/a</td><td>$17.14</td><td>+9.3%</td><td>n/a in our sources</td></tr>
<tr><td>2017</td><td>$1,303</td><td>+13.3%</td><td>n/a</td><td>$17.05</td><td>-0.5%</td><td>+6.6%</td></tr>
<tr><td>2018</td><td>$1,283</td><td>-1.9%</td><td>n/a</td><td>$15.71</td><td>-7.9%</td><td>-8.6%</td></tr>
<tr><td>2019</td><td>$1,517</td><td>+18.4%</td><td>$1,393</td><td>$16.21</td><td>+3.2%</td><td>+15.3%</td></tr>
<tr><td>2020</td><td>$1,899</td><td>+25.0%</td><td>$1,770</td><td>$20.55</td><td>+26.8%</td><td>+47.8%</td></tr>
<tr><td>2021</td><td>$1,829</td><td>-5.8%</td><td>$1,799</td><td>$25.14</td><td>+22.3%</td><td>-11.6%</td></tr>
<tr><td>2022</td><td>$1,823</td><td>~+0.4%</td><td>$1,800</td><td>$21.73</td><td>-13.6%</td><td>+2.8%</td></tr>
<tr><td>2023</td><td>$2,063</td><td>+12.8%</td><td>$1,941</td><td>$23.35</td><td>+7.5%</td><td>-0.7%</td></tr>
<tr><td>2024</td><td>~$2,610-$2,624</td><td>~+27%</td><td>$2,386</td><td>$28.27</td><td>+21.1%</td><td>+21.5%</td></tr>
<tr><td>2025</td><td>~$4,310-$4,323</td><td>~+65%</td><td>$3,431 (record)</td><td>$40.03</td><td>+41.6%</td><td>roughly +145-150%</td></tr>
<tr><td>2026 to early Nov</td><td>~$3,900 (Nov 1)</td><td>about -10% vs end-2025</td><td>n/a</td><td>n/a</td><td>n/a</td><td>about -31% vs end-2025 ($50 vs ~$72)</td></tr>
</tbody>
</table>
<p class="small"><em>Sources: gold closes and changes from JM Bullion via our gold price history guide; gold averages from the LBMA (2019-2024) and WGC (2025); silver averages from our <a href="/articles/silver-ira">silver IRA guide</a> research notes; silver year-end changes 2017-2024 from <a href="https://www.marketscreener.com/quote/commodity/SILVER-16221/quotes/" rel="nofollow noopener" target="_blank">MarketScreener</a> (other sources differ by up to a couple of points - for 2021, JM Bullion reports a fall of more than 14%); 2015 silver year-end change from <a href="https://www.macrotrends.net/1470/historical-silver-prices-10-year-chart" rel="nofollow noopener" target="_blank">Macrotrends</a> and similar price series (about -11% to -12%) and 2025 from wire reports summarized by Mining.com. 2026 changes are our arithmetic from Kitco ($3,900) and Fortune ($50.04).</em></p>
<h3>What the table shows</h3>
<ul>
<li><strong>Silver's big years are bigger.</strong> 2020 (+48%) and 2025 (+145% or more) were far stronger than gold's best years in the period.</li>
<li><strong>Silver's bad years are worse, and they come at odd times.</strong> In 2021, gold fell about 6% while silver fell about 12%. In 2023, gold rose about 13% while silver was roughly flat.</li>
<li><strong>The ratio of average prices barely moved for years.</strong> Dividing gold's average by silver's average gives about 86 in 2019 and 2020, 72 in 2021, 83 in 2022 and 2023, 84 in 2024 and 86 in 2025 (our arithmetic). Silver's huge late-2025 rally happened mostly in the final months, so the <em>average</em> ratio for 2025 was still high even though the <em>year-end</em> ratio was about 60.</li>
<li><strong>Timing dominates silver.</strong> Someone who bought silver at the end of 2025 near $72 was down about 31% by November 2026. Someone who bought at the 2025 average of $40 was up about 25%. With gold, the same comparison is about -10% versus +14%.</li>
</ul>
<p>The short version: over this decade, both metals ended far higher, but silver took a much bumpier road, and when you bought mattered far more.</p>`,
  },
  {
    heading: "Long-run returns: gold vs silver since 2000",
    body: `<p><strong>Measured from 2000 average prices to 2025 average prices, gold rose about 10.6% a year and silver about 8.7% a year (our arithmetic from LBMA-based data). Using different start and end dates, silver sometimes comes out ahead. Over the long run, neither metal clearly beat the other - and both lagged stocks over some long periods.</strong></p>
<p>Long-run comparisons are very sensitive to the dates you pick. Because silver swings so much, moving the end date by a few months can flip the answer. Here is our calculation, with the inputs shown so you can check it.</p>
<table>
<thead><tr><th>Measure</th><th>Gold</th><th>Silver</th></tr></thead>
<tbody>
<tr><td>2000 average price</td><td>$279</td><td>$4.95</td></tr>
<tr><td>2025 average price</td><td>$3,431</td><td>$40.03</td></tr>
<tr><td>Growth multiple</td><td>12.3x</td><td>8.1x</td></tr>
<tr><td>Annual rate, 2000-2025 averages (25 years)</td><td>About 10.6%</td><td>About 8.7%</td></tr>
<tr><td>Annual rate, 2000 average to early Nov 2026 spot (~26.3 years)</td><td>About 10.5% ($279 to $3,900)</td><td>About 9.2% ($4.95 to $50)</td></tr>
</tbody>
</table>
<p class="small"><em>2000 averages from Metalcharts (<a href="https://metalcharts.org/gold-price-history/2000" rel="nofollow noopener" target="_blank">gold</a>, <a href="https://metalcharts.org/silver-price-history/2000" rel="nofollow noopener" target="_blank">silver</a>), based on LBMA prices. 2025 averages from the WGC (gold) and our research notes (silver). Compound annual rates are our arithmetic: (end / start)^(1 / years) - 1. Prices only - metals pay no income. Not inflation-adjusted.</em></p>
<h3>Why other sources say silver won</h3>
<p>Some published comparisons put silver ahead of gold since 2000 - typically measured to the end of 2025, when silver had just closed near $72, or to early 2026. After silver fell about 59% from its peak, it was behind again on our November 2026 measure. The winner depends on the calendar, which is why we are wary of "silver beats gold" or "gold beats silver" headlines.</p>
<h3>How the metals compare with stocks</h3>
<p>For context, our research notes show:</p>
<ul>
<li><strong>Since 1971 (nominal):</strong> the S&P 500 with dividends returned about <strong>11.2% a year</strong> versus about <strong>8.8% a year</strong> for gold (Money Metals).</li>
<li><strong>1995-2025:</strong> gold returned about <strong>8.1% nominal / 5.4% real</strong>, and the S&P 500 total return about <strong>11.1% nominal / 8.4% real</strong> (Kiplinger).</li>
<li><strong>January 2000 - August 2025:</strong> gold returned about <strong>10.4% a year</strong> versus about <strong>7.9%</strong> for the S&P 500 total return (Barchart) - because 2000 was near a stock market peak and a gold low.</li>
</ul>
<p>We did not find a credible, consistently measured silver return since 1971 to put alongside these, so we have not included one. What we can say is that silver's 1980 high of $49.45 was not surpassed on a year-end basis until 2025 - a 45-year wait in nominal terms, and far longer after inflation.</p>
<p>The practical lesson: neither metal is a substitute for a diversified portfolio of stocks and bonds over long periods. Their job, for most people, is diversification and insurance - see <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold to hold in a retirement portfolio</a>.</p>`,
  },
  {
    heading: "Why is silver more volatile than gold?",
    body: `<p><strong>Silver is more volatile because its market is much smaller, more than half its demand is industrial and tied to the economy, and leveraged futures trading has an outsized effect on its price. The World Gold Council estimates silver's volatility at roughly twice gold's.</strong></p>
<p>"Volatility" here means how much the price swings, usually measured as the annualized standard deviation of daily returns. Higher volatility means bigger moves - up and down - and a bumpier ride.</p>
<h3>How much more volatile?</h3>
<table>
<thead><tr><th>Measure</th><th>Gold</th><th>Silver</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Relative volatility</td><td>Baseline</td><td>Roughly twice gold's</td><td><a href="https://www.gold.org/goldhub/research/gold-safe-haven-versus-silver-wildcard" rel="nofollow noopener" target="_blank">World Gold Council, Mar 2026</a></td></tr>
<tr><td>Over the past 20 years</td><td>Baseline</td><td>Up to twice gold's</td><td><a href="https://www.blackrock.com/us/financial-professionals/insights/gold-silver-prices-volatility" rel="nofollow noopener" target="_blank">BlackRock / iShares</a></td></tr>
<tr><td>Long-run average annualized volatility</td><td>About 16.2% (six decades)</td><td>Higher than gold more than 91% of the time since 1968</td><td><a href="https://www.bullionvault.com/gold-news/opinion-analysis/gold-volatility-price-silver-stocks-140520252" rel="nofollow noopener" target="_blank">BullionVault</a></td></tr>
<tr><td>Typical annualized range</td><td>About 10-18%</td><td>Commonly cited around 26-30% (secondary sources)</td><td>WGC research via press coverage; industry sources</td></tr>
<tr><td>Rise in volatility, 2026 to Mar 11</td><td>+46%</td><td>+106%</td><td><a href="https://news.metal.com/newscontent/103798977-Gold-and-silver-Price-market-volatility-and-what-is-next" rel="nofollow noopener" target="_blank">Metal.com, Mar 2026</a></td></tr>
<tr><td>Worst day of 2026</td><td>Fell sharply, but far less than silver</td><td>Futures -31.4% on Jan 30, the worst day since March 1980</td><td><a href="https://www.cnbc.com/2026/01/30/silver-gold-fall-price-usd-dollar-fed-warsh-chair-trump-metals.html" rel="nofollow noopener" target="_blank">CNBC, Jan 30, 2026</a></td></tr>
</tbody>
</table>
<p class="small"><em>Volatility figures depend on the window and method used, so numbers from different sources are not directly comparable. The 26-30% silver range comes from industry and secondary sources and is less authoritative than the WGC's "roughly twice" estimate.</em></p>
<h3>The five reasons</h3>
<ol>
<li><strong>A smaller market.</strong> Gold trades roughly six times as much volume each day as silver, according to WGC research cited by <a href="https://goldsilver.com/industry-news/article/small-market-big-swings-why-silver-is-more-volatile-than-gold/" rel="nofollow noopener" target="_blank">GoldSilver</a>. The same wave of buying or selling moves a smaller market further.</li>
<li><strong>Industrial demand.</strong> About 58% of silver demand comes from industry. When economic news turns, silver gets hit twice - as a precious metal and as an industrial input. The WGC describes silver as behaving "more cyclically".</li>
<li><strong>Leverage and futures.</strong> Futures let traders control large positions with a small deposit (margin). When prices fall and exchanges raise margin requirements, traders who cannot pay are forced to sell, which pushes prices down further. Coverage of the WGC's research also notes silver's much higher sensitivity to commodity-index flows.</li>
<li><strong>No central bank anchor.</strong> Central banks bought 863 tonnes of gold in 2025. They do not hold silver as a reserve, so silver lacks that steady, price-insensitive buyer.</li>
<li><strong>Retail and momentum buying.</strong> Silver's low price per ounce makes it popular with smaller buyers and with momentum traders, whose flows can reverse quickly.</li>
</ol>
<h3>What volatility means for you</h3>
<p>Volatility is not just a statistic. It changes how much you can sensibly hold. If gold's swings are about half of silver's, then - by a rough rule of thumb - a silver holding of a given dollar size adds roughly twice the price risk of the same amount in gold. That is one reason many commentators suggest keeping silver to a smaller share of a precious metals allocation, as we discuss in <a href="#how-much-silver-should-i-own-versus-gold">how much silver should I own versus gold?</a></p>
<p>It also matters for <strong>sequence risk</strong>. If you are 70 and taking required minimum distributions from an IRA, a 59% fall in the metal you need to sell is far more painful than a 30% fall. Our guide to <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a> explains how distributions work with physical metal.</p>`,
  },
];
