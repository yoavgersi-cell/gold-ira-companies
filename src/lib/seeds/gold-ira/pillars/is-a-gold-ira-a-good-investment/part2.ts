import type { ArticleSection } from "@/lib/config";

// Part 2 of "Is a Gold IRA a Good Investment? Pros, Cons and 50 Years of Data (2026)".
// Long-run returns vs stocks (three periods), growth of $10,000 with the math
// shown, drawdowns and recovery times, inflation-hedge evidence and gold as a
// crisis hedge / diversifier.

export const part2: ArticleSection[] = [
  {
    heading: "Gold vs stocks: 50 years of long-run returns",
    body: `<p>Gold's price has floated freely since the early 1970s, when the US ended the link between the dollar and gold. That gives us roughly half a century of data. Here is how gold compares with the S&amp;P 500 (with dividends reinvested) over three commonly cited periods:</p>
<table>
<thead><tr><th>Period</th><th>Gold (per year)</th><th>S&amp;P 500 with dividends (per year)</th><th>Ahead</th><th>Source</th></tr></thead>
<tbody>
<tr><td>1971-2025, nominal</td><td>~8.8%</td><td>~11.2%</td><td>Stocks by ~2.4 points</td><td>Money Metals Exchange</td></tr>
<tr><td>1995-2025, nominal</td><td>8.1%</td><td>11.1%</td><td>Stocks by 3.0 points</td><td>Kiplinger</td></tr>
<tr><td>1995-2025, after inflation ("real")</td><td>5.4%</td><td>8.4%</td><td>Stocks by 3.0 points</td><td>Kiplinger</td></tr>
<tr><td>Jan 2000-Aug 2025, nominal</td><td>~10.4%</td><td>~7.9%</td><td>Gold by ~2.5 points</td><td>Barchart</td></tr>
</tbody>
</table>
<p>"Nominal" means the plain dollar return. "Real" means the return after subtracting inflation - what your money could actually buy. All of these are before taxes, fees and dealer costs, and all are for the gold <em>price</em>, not for a gold IRA, which would trail the price because of costs.</p>
<h3>Why the start date changes the answer</h3>
<p>Look at the last row. Over 2000-2025, gold <strong>beat</strong> stocks. Over 1971-2025 and 1995-2025, stocks beat gold. How can both be true?</p>
<p>Because the starting point matters enormously when an asset moves in long cycles:</p>
<ul>
<li><strong>January 2000</strong> was the peak of the dot-com stock bubble. Stocks then had two major crashes in the next nine years. Meanwhile, gold was near the bottom of a 20-year slump (it hit about $252 in August 1999). Starting there flatters gold and penalizes stocks.</li>
<li><strong>1995</strong> started with stocks reasonably priced and gold already in its long slide. That flatters stocks.</li>
<li><strong>1971</strong> captures gold's huge 1970s run <em>and</em> its 1980-1999 collapse, plus every stock boom and bust since - which is why it is often treated as the fairest long view.</li>
</ul>
<p>The practical lesson: <strong>whenever someone quotes you a gold return, ask "from when to when?"</strong> A salesperson can make gold look brilliant or a stock fan can make it look terrible simply by choosing the dates. The longest period in our data - since 1971 - shows stocks ahead by about 2.4 percentage points a year, and that gap compounds into a very large difference over decades, as the next section shows.</p>
<h3>Why stocks have usually won over long periods</h3>
<p>The basic reason is simple. A stock index represents a share in thousands of businesses that sell goods and services, earn profits, reinvest them and pay dividends. As the economy grows, those profits tend to grow. Gold produces no profit and pays no dividend; its return comes only from price changes. Over very long periods, an asset that generates cash has had a structural advantage over one that does not.</p>
<p>That does not mean stocks always win - 2000-2025 shows otherwise - or that gold is useless. It means gold's role, if it has one in your plan, is usually as a complement to stocks and bonds rather than a replacement. For a broader look at the different ways to own gold for retirement, see <a href="/articles/how-to-invest-in-gold-for-retirement">how to invest in gold for retirement</a>.</p>`,
  },
  {
    heading: "What $10,000 grew to in gold vs the S&P 500",
    body: `<p>Percentages per year are hard to feel. Here is what those reported annual rates would turn $10,000 into, using compound growth. The formula is: <strong>ending value = $10,000 x (1 + annual rate) to the power of the number of years</strong>.</p>
<h3>Since 1971 (about 54 years, nominal)</h3>
<table>
<thead><tr><th>Asset</th><th>Rate</th><th>Math</th><th>$10,000 became (approx.)</th></tr></thead>
<tbody>
<tr><td>Gold</td><td>8.8%</td><td>$10,000 x 1.088<sup>54</sup></td><td>~$950,000</td></tr>
<tr><td>S&amp;P 500 with dividends</td><td>11.2%</td><td>$10,000 x 1.112<sup>54</sup></td><td>~$3,090,000</td></tr>
</tbody>
</table>
<p>A 2.4-point annual gap became a roughly <strong>3-to-1</strong> difference in ending wealth. We used 54 years (1971 to 2025); counting 55 years would raise both numbers by about 9-11% but leave the comparison unchanged. These are nominal dollars - inflation over half a century means a dollar in 2025 buys far less than a dollar in 1971.</p>
<h3>1995-2025 (30 years)</h3>
<table>
<thead><tr><th>Asset</th><th>Rate</th><th>Math</th><th>$10,000 became (approx.)</th></tr></thead>
<tbody>
<tr><td>Gold, nominal</td><td>8.1%</td><td>$10,000 x 1.081<sup>30</sup></td><td>~$103,000</td></tr>
<tr><td>S&amp;P 500, nominal</td><td>11.1%</td><td>$10,000 x 1.111<sup>30</sup></td><td>~$235,000</td></tr>
<tr><td>Gold, after inflation</td><td>5.4%</td><td>$10,000 x 1.054<sup>30</sup></td><td>~$48,000 in 1995 purchasing power</td></tr>
<tr><td>S&amp;P 500, after inflation</td><td>8.4%</td><td>$10,000 x 1.084<sup>30</sup></td><td>~$112,000 in 1995 purchasing power</td></tr>
</tbody>
</table>
<p>The "real" rows are the most meaningful for a retirement saver, because they measure what the money can actually buy. Gold multiplied purchasing power by almost 5 times in 30 years - a solid result - while stocks multiplied it by about 11 times.</p>
<h3>January 2000 - August 2025 (about 25.6 years, nominal)</h3>
<table>
<thead><tr><th>Asset</th><th>Rate</th><th>Math</th><th>$10,000 became (approx.)</th></tr></thead>
<tbody>
<tr><td>Gold</td><td>10.4%</td><td>$10,000 x 1.104<sup>25.6</sup></td><td>~$126,000</td></tr>
<tr><td>S&amp;P 500 with dividends</td><td>7.9%</td><td>$10,000 x 1.079<sup>25.6</sup></td><td>~$70,000</td></tr>
</tbody>
</table>
<p>Same two assets, opposite result: gold came out ahead by about $56,000 on a $10,000 start. Someone who retired in 2000 with a meaningful slice in gold would have been glad of it.</p>
<h3>Important caveats on all three tables</h3>
<ul>
<li><strong>These are approximate.</strong> They apply a single average rate to every year. Real returns arrive unevenly, and the published annual rates are themselves rounded.</li>
<li><strong>No costs are included.</strong> A gold IRA buyer pays a dealer markup on the way in, a spread on the way out and custodian and storage fees every year. A stock index fund investor pays a small expense ratio. Costs would reduce both columns, but gold's more.</li>
<li><strong>No taxes are included.</strong> Inside an IRA, growth is tax-deferred (traditional) or tax-free (Roth) either way, so the comparison holds within an IRA. Outside an IRA the tax treatment differs - see our <a href="/articles/gold-ira-taxes-and-rmds">taxes and RMDs guide</a>.</li>
<li><strong>Past results do not predict future ones.</strong> Nothing here tells you which asset will do better from 2026 onward.</li>
</ul>`,
  },
  {
    heading: "Gold's worst drawdowns and how long recovery took",
    body: `<p>A "drawdown" is the fall from a peak to the lowest point before a new peak. For a retirement saver, drawdowns matter at least as much as average returns, because a deep drop at the wrong moment can permanently damage a plan. Gold has had three big ones in modern history:</p>
<table>
<thead><tr><th>Period</th><th>Peak</th><th>Low</th><th>Fall (nominal)</th><th>Gain needed to get back to the peak</th></tr></thead>
<tbody>
<tr><td>1980-1999</td><td>$850 (Jan 1980)</td><td>$252 (Aug 1999)</td><td>~-70%</td><td>~+233%</td></tr>
<tr><td>2011-2015</td><td>$1,921 (2011)</td><td>~$1,050 (2015)</td><td>~-45%</td><td>~+82%</td></tr>
<tr><td>2026</td><td>~$5,595 (Jan 29)</td><td>~$3,994 (late June)</td><td>~-29%</td><td>~+40%</td></tr>
</tbody>
</table>
<p>The math for the last column: to recover from a fall of X%, you need a gain of 1 / (1 - X) - 1. For a 70% fall: 1 / 0.30 - 1 = 2.33, or +233%. For 45%: 1 / 0.55 - 1 = +82%. For 29%: 1 / 0.71 - 1 = about +41% (using the exact prices, $5,595 / $3,994.50 - 1 = +40%). Losses hurt more than gains help - a basic fact of investing that applies to every asset.</p>
<h3>How long recovery took</h3>
<ul>
<li><strong>1980 peak:</strong> gold was still about 70% below its January 1980 high almost 20 years later, in August 1999. By most accounts it did not regain $850 in nominal terms until around 2008 - close to three decades after the peak. (Our data confirms it was above $850 by the end of 2015, when it closed at $1,061.) After inflation, the recovery took far longer still, because the cost of living kept rising throughout those years.</li>
<li><strong>2011 peak:</strong> on our year-end figures, gold closed 2019 at $1,517 and 2020 at $1,899 - still below the 2011 high of $1,921. The first year-end close above it was <strong>2023 ($2,063)</strong>, about 12 years after the peak. Prices briefly topped the old high during 2020, but a buyer at the 2011 peak would have spent most of a decade under water.</li>
<li><strong>2026 peak:</strong> as of October 19, 2026, gold is about $4,170, roughly 25% below the January record. Nobody knows when, or whether, it will regain $5,595.</li>
</ul>
<h3>What a drawdown means for someone aged 65</h3>
<p>Imagine you are 65, retired, and you need to raise $10,000 from your gold IRA for living costs or a required minimum distribution. Compare selling at the 2011 peak with selling near the 2015 low:</p>
<table>
<thead><tr><th>Gold price</th><th>Ounces you must sell to raise $10,000</th></tr></thead>
<tbody>
<tr><td>$1,921 (2011 peak)</td><td>$10,000 / $1,921 = about 5.2 oz</td></tr>
<tr><td>$1,050 (2015 low)</td><td>$10,000 / $1,050 = about 9.5 oz</td></tr>
</tbody>
</table>
<p>At the low, you would have to sell about 83% more metal to raise the same cash - and those ounces are gone for good, so they cannot benefit from any later recovery. (Real sales would also be slightly below spot after the dealer's buy-back spread.) This is called <strong>sequence-of-returns risk</strong>: a loss early in retirement, while you are withdrawing, does more lasting damage than the same loss later or before you retire.</p>
<p>Three practical points follow:</p>
<ol>
<li><strong>Do not hold money you will need in the next few years in gold.</strong> Many planners suggest keeping several years of withdrawals in cash or short-term bonds so you are never forced to sell a volatile asset at a bad time.</li>
<li><strong>A 12-year or 28-year recovery is longer than many retirements' "spending window."</strong> At 65, the 1980 experience would have lasted until you were in your 90s.</li>
<li><strong>RMDs do not wait for a recovery.</strong> If most of a traditional IRA is in gold, you must still take your required distribution each year - either by selling metal or by taking the coins or bars "in kind" and paying tax on their value. Our <a href="/articles/gold-ira-rules">gold IRA rules guide</a> covers the mechanics.</li>
</ol>
<p>Stocks have drawdowns too, of course, sometimes deeper and faster than gold's. The point is not that gold is uniquely risky, but that it is <strong>not the low-risk asset</strong> its marketing often implies.</p>`,
  },
  {
    heading: "Is gold a good inflation hedge?",
    body: `<p>"Gold protects you from inflation" is probably the most common reason people give for buying it. The evidence is genuinely mixed, and the honest answer depends on the time frame.</p>
<h3>The case that it is - over very long periods</h3>
<p>Over 1995-2025, gold returned about 8.1% a year nominal and about 5.4% a year after inflation (Kiplinger). Those two figures let us back out the average inflation rate the source used:</p>
<p style="text-align:center"><strong>1.081 / 1.054 - 1 = about 2.6% a year</strong></p>
<p>So over those 30 years, gold beat inflation by a wide margin - its purchasing power grew by roughly 5.4% a year. That is consistent with the popular idea that gold holds its value over the long run. The same is true of the 1971-2025 period as a whole: gold's ~8.8% nominal return was well above the general rate of price increases over that time. In the 1970s, when inflation was high, gold rose from the old official price of $35 an ounce to $850 by January 1980.</p>
<h3>The case that it is not - over the periods that matter to a retiree</h3>
<p>The problem is that "the long run" for gold can be longer than your retirement. Consider:</p>
<ul>
<li><strong>1980-1999.</strong> Consumer prices rose every year during the 1980s and 1990s, yet gold <em>fell</em> about 70% in nominal terms, from $850 to $252. Someone who bought gold in 1980 to protect against inflation lost most of their purchasing power and waited decades to get it back. This is the clearest counterexample to the "inflation hedge" claim.</li>
<li><strong>2021-2022.</strong> The US experienced its sharpest burst of inflation in about four decades. Gold's reported yearly change was <strong>-5.8% in 2021</strong> and <strong>about +0.4% in 2022</strong>. Its annual average barely moved: $1,799 in 2021 and $1,800 in 2022. In the very period when an inflation hedge was most needed, gold lagged rising prices.</li>
<li><strong>2024-2025.</strong> Gold then soared (+27% and +65%) while inflation was cooling from its peak. Gold's biggest gains came after the inflation scare, not during it.</li>
</ul>
<h3>Why the link is loose</h3>
<p>Recall the drivers from earlier. Inflation is only one of them, and it often works through <strong>real interest rates</strong>. In 2022, for example, central banks raised interest rates sharply to fight inflation. Higher real rates make non-yielding gold less attractive, which can offset the inflation effect. So gold's response to inflation depends on how policymakers respond - which is hard to predict.</p>
<h3>A fair summary</h3>
<ul>
<li>Over many decades, gold has broadly kept pace with or beaten inflation.</li>
<li>Over periods of 1 to 20 years - the periods that matter to most retirees - it has sometimes failed badly.</li>
<li>Other assets also respond to inflation. Stocks have beaten inflation over most long periods (8.4% real over 1995-2025), and Treasury Inflation-Protected Securities (TIPS) are designed specifically to track it. A fee-only adviser can explain how they compare for your situation.</li>
</ul>
<p>If inflation protection is your main reason for considering a gold IRA, it is worth knowing that gold is an <strong>unreliable</strong> inflation hedge in the short and medium term, even if it has worked over the very long term. We answer this directly in the FAQ <a href="#does-gold-beat-inflation">Does gold beat inflation?</a></p>`,
  },
  {
    heading: "Gold as a crisis hedge and portfolio diversifier",
    body: `<p>If gold is not a reliable growth asset or a reliable inflation hedge, what is its strongest case? For most researchers and planners, it is <strong>diversification</strong>: owning something that does not move in lockstep with your stocks and bonds.</p>
<h3>Why gold can diversify</h3>
<p>Diversification works when assets respond to different forces. Stocks depend mainly on company earnings and economic growth. Bonds depend mainly on interest rates and credit risk. Gold depends on a different mix - real rates, the dollar, central-bank reserve policy, fear, jewelry demand. Because those drivers overlap only partly, gold's price has often moved independently of stocks. Adding a modest amount of something that moves differently can smooth a portfolio's overall ride, even if that asset is volatile on its own.</p>
<h3>Crisis behavior: often helpful, not dependable</h3>
<p>Gold has a reputation for rising when markets panic, and in a number of episodes it has held up while stocks fell. Investors seeking a store of value outside the financial system - especially during banking scares, currency worries or geopolitical shocks - tend to add to that demand.</p>
<p>But three caveats are important:</p>
<ol>
<li><strong>It does not always work.</strong> In some sharp market sell-offs, gold has fallen alongside stocks at first, as investors sell whatever they can to raise cash or cover losses elsewhere. The protection, when it comes, may arrive later.</li>
<li><strong>Gold has its own crises.</strong> The 2026 fall of about 29% in five months happened to gold itself. A "hedge" that can lose almost a third of its value in half a year does not remove risk; it swaps one kind of risk for another.</li>
<li><strong>Price paid matters.</strong> Gold bought after a big run-up starts from a high base. If a crisis hits after gold has already rallied hard, there may be less room for it to rise further, and more room to fall when fear fades.</li>
</ol>
<h3>The diversification case in numbers - how to think about it</h3>
<p>We are not going to quote a single "optimal" gold allocation from a study, because results depend heavily on the period, the assets and the assumptions used, and they can be presented selectively. The principle is easier to state than to measure: a <strong>small</strong> position in an asset that sometimes zigs when others zag can reduce the depth of a portfolio's worst years, at the cost of some long-run growth. A <strong>large</strong> position simply makes your portfolio's fate depend on gold - which, as the drawdown table shows, is not a stable thing to depend on.</p>
<p>That is why the realistic question is usually not "Is gold a good investment?" but "<strong>Is a small amount of gold a good addition to what I already own, at the price I will pay for it?</strong>" We look at how much commentators typically suggest in <a href="#how-much-of-your-retirement-savings-should-be-in-gold">how much to hold</a>, and in depth in our guide <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold in a retirement portfolio</a>.</p>
<h3>Gold is a global, liquid market - but your access to it may not be</h3>
<p>Gold trades around the clock in London, New York, Shanghai and elsewhere, and the LBMA benchmark price is published twice each trading day. The <em>market</em> is deep. But the speed and cost at which <em>you</em> can sell depends on how you hold it. In a gold IRA, selling involves your custodian, the depository and a dealer, and you sell at the dealer's bid, typically below spot. In a crisis, dealer spreads can widen. A gold ETF in a brokerage IRA can be sold in seconds during market hours. That difference matters if your reason for owning gold is to have something you can use in an emergency.</p>`,
  },
];
