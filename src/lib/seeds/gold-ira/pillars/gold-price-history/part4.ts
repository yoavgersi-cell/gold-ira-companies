import type { ArticleSection } from "@/lib/config";

// Part 4 of "Gold Price History 1971-2026".
// Inflation-adjusted prices, silver in brief, what drives gold, gold vs
// stocks and the drawdown / recovery table.

export const part4: ArticleSection[] = [
  {
    heading: "Gold's price after inflation: the real record",
    body: `<p>A dollar in 1980 bought far more than a dollar today, so comparing $850 in 1980 with $5,595 in 2026 is not a fair fight. Adjusting for inflation changes the story considerably.</p>
<table>
<thead><tr><th>Price</th><th>In dollars of the day</th><th>Roughly in 2026 dollars</th><th>Source / method</th></tr></thead>
<tbody>
<tr><td>Official price, Aug 1971</td><td>$35</td><td>~$275-$285</td><td>Our estimate using the CPI (prices up roughly 8 times since 1971)</td></tr>
<tr><td>Peak, Jan 1980</td><td>$850</td><td>~$2,900-$3,600</td><td>Published estimates vary by CPI method and date (see below)</td></tr>
<tr><td>Low, Jul 1999</td><td>$252.80</td><td>~$490-$510</td><td>Our estimate using the CPI (prices roughly doubled since 1999)</td></tr>
<tr><td>Peak, Sep 2011</td><td>$1,921</td><td>~$2,700-$2,800</td><td>Our estimate using the CPI (prices up roughly 40-45% since 2011)</td></tr>
<tr><td>Record, Jan 2026</td><td>$5,595</td><td>~$5,595</td><td>Already in 2026 dollars</td></tr>
</tbody>
</table>
<p>Estimates for the 1980 peak in today's money vary a lot. Analyses using annual-average CPI put it at about $3,325; those using the January 1980 monthly CPI reach about $3,590; and one series quoted by <a href="https://eco3min.fr/en/gold-real-price-1980-peak-broken/" target="_blank" rel="noopener">Eco3min</a> puts it near $2,900 in 2026 dollars. Our own estimates in the table are rough and rounded; treat them as an order of magnitude.</p>
<h3>Three things the real price shows</h3>
<ul>
<li><strong>The 1980 peak was not beaten in real terms until 2025.</strong> Bloomberg reported in September 2025 that gold at about $3,674 had passed its inflation-adjusted 1980 high for the first time - roughly 45 years later.</li>
<li><strong>The long-run real gain is much smaller than the headline.</strong> In dollars, gold is up about 119 times since 1971 ($4,170 / $35). After inflation, it is up roughly 15 times ($4,170 / ~$280).</li>
<li><strong>Gold has not reliably kept pace with inflation over every period.</strong> Over 1980-2001 it lost most of its real value. Over 1995-2025, Kiplinger puts gold's real return at about 5.4% a year - positive, but well behind stocks at about 8.4%.</li>
</ul>`,
  },
  {
    heading: "Silver price history in brief",
    body: `<p>Silver tends to move in the same direction as gold but with bigger swings, because it is a smaller market and about half of demand comes from industry. Its history has the same peaks as gold's, only sharper.</p>
<table>
<thead><tr><th>Year / date</th><th>Silver price</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Jan 1980</td><td>~$49-$50 (peak)</td><td>Hunt brothers' attempt to corner the market; commonly cited</td></tr>
<tr><td>Apr 2011</td><td>~$48-$49 (peak)</td><td>Commonly cited; not verified in a primary series</td></tr>
<tr><td>2015</td><td>$15.68 average</td><td>Our research notes</td></tr>
<tr><td>2019</td><td>$16.21 average</td><td>Our research notes</td></tr>
<tr><td>2020</td><td>$20.55 average</td><td>Our research notes</td></tr>
<tr><td>2022</td><td>$21.73 average</td><td>Our research notes</td></tr>
<tr><td>2024</td><td>$28.27 average</td><td>Our research notes</td></tr>
<tr><td>2025</td><td>$40.03 average; year-end ~$72 (up ~145%)</td><td>Our research notes</td></tr>
<tr><td>Jan 29, 2026</td><td>~$121.62 (record)</td><td>MetalCharts; unverified</td></tr>
<tr><td>Oct 19, 2026</td><td>~$57.70</td><td>About 53% below the record ($57.70 / $121.62 - 1)</td></tr>
</tbody>
</table>
<p><strong>The gold/silver ratio</strong> - how many ounces of silver one ounce of gold buys - is about <strong>72:1</strong> today ($4,170 / $57.70 = 72.3). It has ranged from roughly 17:1 in January 1980 to just over 125:1 in March 2020, and MetalCharts puts the average of annual readings since 1971 at about 60:1. Silver's bigger swings cut both ways: it fell more than 50% from its 2026 peak, against about 29% for gold. Our <a href="/articles/silver-ira">silver IRA guide</a> covers silver in retirement accounts.</p>`,
  },
  {
    heading: "What drives the gold price: six forces with historical examples",
    body: `<p>No single factor explains gold's price. These six have mattered most since 1971, and they often pull in different directions at once.</p>
<table>
<thead><tr><th>Force</th><th>Usual effect</th><th>When it worked</th><th>When it did not</th></tr></thead>
<tbody>
<tr><td><strong>Real interest rates</strong> (interest after inflation)</td><td>Falling real rates tend to help gold; rising ones tend to hurt</td><td>Negative real rates in the 1970s, 2001-2011 and 2020; Volcker's high real rates ended the 1980 boom; rising real rates in 2013 and 2022</td><td>Gold rose in 2023-2024 despite positive real rates</td></tr>
<tr><td><strong>The US dollar</strong></td><td>A weaker dollar tends to help gold</td><td>Weak dollar 2002-2008; strong dollar hurt gold in 2014-2015, 2022 and mid-2026</td><td>Gold and the dollar rose together in 2024</td></tr>
<tr><td><strong>Central bank buying and selling</strong></td><td>Net buying supports prices</td><td>European selling in the 1990s helped push gold to $252.80; buying above 1,000t a year in 2022-2024 supported prices</td><td>Buying of ~863t in 2025 did not prevent the 2026 drop</td></tr>
<tr><td><strong>ETF and investor flows</strong></td><td>Inflows push prices up; outflows down</td><td>Record ETF inflows in 2020; ~801t in 2025; heavy selling in 2013 and May-June 2026</td><td>Flows often follow price rather than lead it</td></tr>
<tr><td><strong>Crises and fear</strong></td><td>Fear often lifts gold</td><td>1979-1980, 2008-2011, 2020, 2022 bank and war shocks</td><td>Gold fell in the most acute weeks of late 2008 and March 2020 as investors raised cash</td></tr>
<tr><td><strong>Inflation expectations</strong></td><td>Fear of inflation tends to help</td><td>1970s; post-2008 money-printing fears</td><td>Gold was flat in 2021-2022, when actual inflation hit a 40-year high</td></tr>
</tbody>
</table>
<p>Two practical points follow. First, whenever someone says "gold will rise because of X," history usually offers a period when X happened and gold fell. Second, the force that dominates changes over time: in the 1970s it was inflation and negative real rates; in 2022-2025 it was central banks; in the first half of 2026 it was rate expectations and leveraged selling. For a longer discussion of these drivers in an investment context, see our guide <a href="/articles/how-to-invest-in-gold-for-retirement">how to invest in gold for retirement</a>.</p>`,
  },
  {
    heading: "Gold vs stocks: why the start date changes the answer",
    body: `<p>Whether gold has "beaten" the stock market depends almost entirely on the dates you pick. These are the long-run figures we use across our guides:</p>
<table>
<thead><tr><th>Period</th><th>Gold (per year)</th><th>S&amp;P 500 with dividends (per year)</th><th>Ahead</th><th>Source</th></tr></thead>
<tbody>
<tr><td>1971-2025, nominal</td><td>~8.8%</td><td>~11.2%</td><td>Stocks</td><td>Money Metals Exchange</td></tr>
<tr><td>1995-2025, nominal</td><td>8.1%</td><td>11.1%</td><td>Stocks</td><td>Kiplinger</td></tr>
<tr><td>1995-2025, after inflation</td><td>5.4%</td><td>8.4%</td><td>Stocks</td><td>Kiplinger</td></tr>
<tr><td>Jan 2000-Aug 2025, nominal</td><td>~10.4%</td><td>~7.9%</td><td>Gold</td><td>Barchart</td></tr>
</tbody>
</table>
<p>All are before taxes, fees and dealer costs. Our own rough check on the longest period: $35 in August 1971 to about $4,170 in October 2026 is about 119 times over about 55 years, or roughly 9% a year - close to the Money Metals figure.</p>
<h3>Why the start date matters so much</h3>
<ul>
<li><strong>Start in 2000</strong> and you begin at the top of the dot-com stock bubble and near the bottom of gold's 20-year slump. Gold wins.</li>
<li><strong>Start in January 1980</strong> and gold took about 28 years just to get back to its starting price, while stocks multiplied many times over. Stocks win by a mile.</li>
<li><strong>Start in 1971</strong> and you capture every boom and bust for both. Stocks are ahead by about 2.4 points a year, which compounds into a large gap over decades.</li>
</ul>
<p>The lesson: whenever a salesperson or commentator quotes a gold return, ask "from when to when?" Our <a href="/articles/is-a-gold-ira-a-good-investment">gold IRA investment guide</a> shows what $10,000 would have become in each over these periods, and our <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF comparison</a> shows how the way you hold gold changes your actual result.</p>`,
  },
  {
    heading: "Gold's drawdowns and recovery times",
    body: `<p>A drawdown is the fall from a peak to the lowest point before a new peak. For someone living off savings, drawdowns and how long they last matter at least as much as average returns.</p>
<table>
<thead><tr><th>Episode</th><th>Peak</th><th>Low</th><th>Fall</th><th>Gain needed to recover</th><th>Time to regain the peak (nominal)</th></tr></thead>
<tbody>
<tr><td>1974-1976</td><td>~$195 (Dec 1974)</td><td>~$103 (Sep 1976)</td><td>~-47%</td><td>~+89%</td><td>~3.5 years (passed $200 in 1978; approximate)</td></tr>
<tr><td>1980-1999</td><td>~$850 (Jan 1980)</td><td>~$252.80 (Jul 1999)</td><td>~-70%</td><td>~+236%</td><td>~28 years (Jan 2008); ~45 years after inflation</td></tr>
<tr><td>2008</td><td>~$1,000+ (Mar 2008)</td><td>~$680-$710 (Oct-Nov 2008)</td><td>~-30%</td><td>~+43%</td><td>~1.5 years (back above $1,000 in late 2009; approximate)</td></tr>
<tr><td>2011-2015</td><td>~$1,921 (Sep 2011)</td><td>~$1,050 (Dec 2015)</td><td>~-45%</td><td>~+83%</td><td>~9 years (Aug 2020); 12 years on a year-end basis (2023)</td></tr>
<tr><td>2020-2022</td><td>~$2,067 (Aug 2020)</td><td>~$1,620 (Sep 2022)</td><td>~-22%</td><td>~+28%</td><td>~3.3 years (Dec 2023)</td></tr>
<tr><td>2026</td><td>~$5,595 (Jan 29)</td><td>~$3,994 (late Jun)</td><td>~-29%</td><td>~+40%</td><td>Not recovered as of Oct 19, 2026 (~-25%)</td></tr>
</tbody>
</table>
<p>Our arithmetic. The gain needed is peak / low - 1: for example $1,921 / $1,050 - 1 = +83% and $5,595 / $3,994.50 - 1 = +40%. The 1980-1999 figure uses the exact low ($850 / $252.80 - 1 = +236%); our companion guide rounds the fall to 70% and shows +233%. Dates marked "approximate" are commonly cited but not confirmed in a primary data series.</p>
<h3>What the table tells you</h3>
<ul>
<li><strong>Falls of 20-30% have come every few years,</strong> and falls of 45% or more have happened three times since 1974.</li>
<li><strong>Recovery has ranged from about 18 months to about 28 years</strong> in plain dollars - and longer after inflation.</li>
<li><strong>Losses hurt more than gains help.</strong> A 50% fall needs a 100% gain to recover. That is true of every asset.</li>
</ul>`,
  },
];
