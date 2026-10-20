import type { ArticleSection } from "@/lib/config";

// Part 1 of "Is a Gold IRA a Good Investment? Pros, Cons and 50 Years of Data (2026)".
// Quick answer, what "good investment" means for a retirement saver, what
// drives gold prices, the 2015-2025 price history and the 2024-2026 run.
// All figures dated Oct 19, 2026 - sources in PILLAR-RESEARCH.md / RESEARCH.md.

export const part1: ArticleSection[] = [
  {
    heading: "Is a gold IRA a good investment?",
    body: `<div class="qa"><strong>Short answer:</strong> it depends - on what you need the money to do, how much of your savings you would put in, and what you pay to get in and out. Over the long run, gold has grown more slowly than US stocks (about 8.8% a year versus about 11.2% for the S&amp;P 500 with dividends since 1971), it pays no income, and it has suffered deep drops - about 70% from 1980 to 1999, about 45% from 2011 to 2015 and about 29% in the first half of 2026. But it has also had long stretches when it beat stocks, and it often moves differently from them, which is why many commentators see a <strong>small</strong> slice of gold as a diversifier. A gold IRA is one way to hold that slice inside a tax-advantaged account, but it is usually the <strong>most expensive</strong> way. For most retirement savers it can be a reasonable minor holding; it is rarely a sensible core holding.</div>
<p>That answer will not satisfy anyone who has seen an advertisement promising that gold "protects your retirement" - or anyone who has been told gold is a "pet rock" that only fools buy. Both views leave things out. This guide lays out the evidence on both sides, in plain English, with the numbers shown so you can check them yourself.</p>
<p>Here is what you will find below:</p>
<ul>
<li><strong>The data.</strong> Year-by-year gold prices from 2015 to 2025, the record run to about $5,595 an ounce in January 2026, the 29% drop that followed, and how gold compares with stocks over three different long periods.</li>
<li><strong>The worked math.</strong> What $10,000 would have grown to in gold and in stocks, how long gold took to recover from its worst crashes, and exactly how dealer markups and yearly fees change your break-even point.</li>
<li><strong>Both cases.</strong> A fair list of the real advantages, and an equally detailed list of the real drawbacks - the ones sales calls tend to skip.</li>
<li><strong>The alternatives.</strong> How a gold IRA compares with a gold ETF, coins in your own safe and gold-mining stocks.</li>
<li><strong>A self-check.</strong> Profiles of who a gold IRA can make sense for, a checklist of questions to ask yourself, and answers to the six questions we hear most.</li>
</ul>
<p>If you are still unsure what a gold IRA actually is, start with our short explainer <a href="/articles/what-is-a-gold-ira">What Is a Gold IRA?</a> or the full <a href="/articles/gold-ira">Gold IRA guide</a>, then come back. This article assumes you know the basics - that a gold IRA is a self-directed IRA holding IRS-eligible bullion through a custodian and an approved depository - and focuses on one question: <strong>is it worth it?</strong></p>
<h3>How we wrote this</h3>
<ul>
<li><strong>Every figure is dated.</strong> Prices and fees are as of <strong>October 19, 2026</strong> unless stated otherwise. Gold moves every minute.</li>
<li><strong>We show our arithmetic.</strong> Where we calculate something - growth of $10,000, a break-even, a percentage drop - we show the inputs so you can redo it. Calculated figures are approximate and before taxes unless we say so.</li>
<li><strong>Past performance is not a forecast.</strong> Nothing in the history below tells you what gold will do next year or next decade. We use history to show the <em>range</em> of outcomes, not to predict one.</li>
<li><strong>This is education, not advice.</strong> Whether gold belongs in <em>your</em> retirement plan depends on your income, other savings, health, taxes and goals. A <strong>fee-only financial adviser</strong> - one paid by you, not by commissions on what you buy - is the right person to make that call with you.</li>
</ul>`,
  },
  {
    heading: "What does \"good investment\" mean for a retirement saver?",
    body: `<p>"Is gold a good investment?" is really six questions in one. An asset can be excellent at one job and poor at another. A 30-year-old building wealth and a 70-year-old living off savings need very different things, so before looking at gold specifically, it helps to be clear about what you are asking it to do.</p>
<table>
<thead><tr><th>Job</th><th>What it means</th><th>How gold scores</th></tr></thead>
<tbody>
<tr><td><strong>Growth</strong></td><td>Increase in value over the long run, ahead of inflation</td><td>Mixed. Positive over most long periods, but behind US stocks since 1971 and over 1995-2025. Ahead of stocks over 2000-2025.</td></tr>
<tr><td><strong>Income</strong></td><td>Regular cash you can spend - dividends, interest, rent</td><td>Poor. Gold pays nothing. You only make money if you sell for more than you paid.</td></tr>
<tr><td><strong>Stability</strong></td><td>A value that does not swing wildly from year to year</td><td>Poor to fair. Gold has had yearly gains of 25% or more and falls of 10% or more within the last decade, plus multi-year slides of 45-70%.</td></tr>
<tr><td><strong>Diversification</strong></td><td>Tends to zig when your other holdings zag</td><td>Fair to good. Gold's price drivers differ from those of stocks and bonds, so it has often moved independently - but not reliably in every crisis.</td></tr>
<tr><td><strong>Liquidity</strong></td><td>How quickly and cheaply you can turn it into cash</td><td>Fair in an IRA. Selling takes a dealer, a custodian instruction and settlement time; you sell below the market price.</td></tr>
<tr><td><strong>Cost</strong></td><td>What you pay to buy, hold and sell</td><td>Poor in a gold IRA. Dealer markups plus roughly $200-$700+ a year in custodian and storage fees, versus 0.09%-0.40% a year for most gold ETFs.</td></tr>
</tbody>
</table>
<p>Put like that, the honest summary is: <strong>gold is not built to be a growth engine or an income source.</strong> Its strongest case is as a diversifier - something that may hold up, or even rise, when other parts of your savings are falling. Whether that job is worth the price you pay in a gold IRA is the question the rest of this guide tries to answer.</p>
<h3>Why retirement changes the scoring</h3>
<p>The same asset can be a good fit at 45 and a poor one at 70. Three things shift as you approach and enter retirement:</p>
<ol>
<li><strong>Time horizon shrinks.</strong> At 45 you might wait out a 10-year slump. At 70, a 10-year slump is a large share of the time you will be drawing on the money.</li>
<li><strong>Withdrawals begin.</strong> Once you are taking money out, a falling asset forces you to sell more units to raise the same cash. Traditional IRA owners must also take required minimum distributions (RMDs) from age 73 (75 for people born in 1960 or later), whether or not prices are good. Our <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs guide</a> explains how that works with metal.</li>
<li><strong>Income matters more.</strong> Many retirees want their savings to produce cash flow. Gold cannot do that; you have to sell some.</li>
</ol>
<p>None of this rules gold out. It means that, for a retirement saver, the bar is higher: gold has to earn its place mainly through diversification, and the cost of holding it has to be low enough not to eat the benefit.</p>
<h3>A simple way to frame your own question</h3>
<p>Instead of "Is gold good?", try asking: <em>"If I moved X dollars of my retirement savings into physical gold in an IRA, paying these specific costs, would my overall plan be more likely or less likely to meet my needs?"</em> That framing forces you to name the amount, the costs and the purpose. We come back to it in the <a href="#questions-to-ask-yourself-before-you-invest">checklist near the end</a>.</p>`,
  },
  {
    heading: "What drives the price of gold?",
    body: `<p>A share of stock is a claim on a company's future profits, and a bond is a promise of interest. Gold is neither. It is a metal whose price is set by what buyers around the world will pay for it at any moment. To judge whether it suits you, it helps to understand who those buyers are and what moves them. Economists argue about the exact weights, but most agree on these main drivers.</p>
<h3>1. Real interest rates</h3>
<p>A "real" interest rate is the interest you earn on safe savings - such as government bonds - minus inflation. Because gold pays no interest, holding it has an opportunity cost: the income you give up by not owning a bond or a savings account instead.</p>
<ul>
<li>When real rates are <strong>high</strong> (say, bonds paying well above inflation), that opportunity cost is large, and gold has tended to struggle.</li>
<li>When real rates are <strong>low or negative</strong> (bonds paying less than inflation), giving up interest costs little, and gold has tended to do better.</li>
</ul>
<p>This is a tendency, not a law. The relationship has weakened at times, and it does not tell you what rates will do next.</p>
<h3>2. The US dollar</h3>
<p>Gold is priced in dollars worldwide. When the dollar weakens against other currencies, gold becomes cheaper for buyers using euros, yen or rupees, which can lift demand and the dollar price. When the dollar strengthens, the reverse can happen. Again: a tendency, frequently overridden by other forces.</p>
<h3>3. Central-bank buying</h3>
<p>Central banks - the institutions that manage a country's currency and reserves - hold gold as part of their reserves. In recent years they have been buying at historically high levels, which has been one of the most discussed forces behind the rally. Reporting on the market describes <strong>record central-bank buying</strong>, and total gold demand reached a record <strong>1,231 tonnes in the first quarter of 2026</strong>. The <a href="https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025" rel="nofollow noopener" target="_blank">World Gold Council's Gold Demand Trends report for full-year 2025</a> is the best place to see the breakdown by buyer type; it also records a record annual average price of <strong>$3,431</strong> for 2025, with <strong>53 record LBMA PM prices</strong> set during the year.</p>
<p>The important point for a retirement saver: central-bank demand can change. Their buying decisions depend on politics, reserve policy and prices, and a slowdown in official buying would remove one of the supports under recent prices.</p>
<h3>4. Crisis and fear demand</h3>
<p>When investors are worried - about wars, banking problems, government debt, elections or sharp stock-market falls - some move money into gold. This "fear trade" can push prices up quickly. It can also reverse quickly when the fear fades, which is one reason gold's price can swing so sharply.</p>
<h3>5. Investment flows</h3>
<p>Investors buy gold through exchange-traded funds (ETFs), bars and coins, and futures contracts. Big flows into or out of gold ETFs can move the price for weeks or months. A wave of buying by people who saw prices rising - "momentum" buying - can carry prices above what other factors justify, and a wave of selling can do the opposite.</p>
<h3>6. Jewelry and industrial demand</h3>
<p>A large share of the gold mined each year ends up as jewelry, especially in countries with strong cultural traditions of gold-giving. Some is used in electronics, dentistry and other industries. Jewelry buyers tend to be price-sensitive: when gold gets very expensive, they buy less, which can soften demand at high prices.</p>
<h3>7. Mine supply</h3>
<p>New mine output adds to supply only slowly; new mines take many years to develop. Recycled gold (old jewelry and scrap) responds faster, rising when prices are high.</p>
<h3>What this means for you</h3>
<p>Notice that none of these forces is a steady engine of growth like company earnings. Gold's price is the net result of many buyers with very different motives, and it can move far and fast in either direction. That is the core reason gold is volatile - and the reason no one, including the people selling it, can tell you where it will be in five years.</p>
<p>You can see the official benchmark price history from the <a href="https://www.lbma.org.uk" rel="nofollow noopener" target="_blank">LBMA</a> (London Bullion Market Association), which publishes the twice-daily LBMA Gold Price used by much of the industry.</p>`,
  },
  {
    heading: "Gold price history 2015-2025: year by year",
    body: `<p>Long-run averages hide how bumpy the ride was. Here is gold year by year over the last decade-plus, using year-end prices per troy ounce. We show two "change" columns: the yearly change as reported in our source data, and the change we calculate from the year-end prices in the table. They do not always match, because published yearly changes are often based on slightly different closing prices or benchmark fixes. Neither is "wrong" - but you should know that even simple price history varies by source.</p>
<table>
<thead><tr><th>Year</th><th>Year-end price (approx.)</th><th>Reported yearly change</th><th>Change calculated from year-end prices</th></tr></thead>
<tbody>
<tr><td>2015</td><td>$1,061</td><td>-10.7%</td><td>n/a (no 2014 figure in our data)</td></tr>
<tr><td>2016</td><td>$1,152</td><td>+6.8%</td><td>+8.6%</td></tr>
<tr><td>2017</td><td>$1,303</td><td>+13.3%</td><td>+13.1%</td></tr>
<tr><td>2018</td><td>$1,283</td><td>-1.9%</td><td>-1.5%</td></tr>
<tr><td>2019</td><td>$1,517</td><td>+18.4%</td><td>+18.2%</td></tr>
<tr><td>2020</td><td>$1,899</td><td>+25.0%</td><td>+25.2%</td></tr>
<tr><td>2021</td><td>$1,829</td><td>-5.8%</td><td>-3.7%</td></tr>
<tr><td>2022</td><td>$1,823</td><td>~+0.4%</td><td>-0.3%</td></tr>
<tr><td>2023</td><td>$2,063</td><td>+12.8%</td><td>+13.2%</td></tr>
<tr><td>2024</td><td>~$2,610-$2,624</td><td>~+27%</td><td>~+27% (using ~$2,617)</td></tr>
<tr><td>2025</td><td>~$4,310-$4,323</td><td>~+65%</td><td>~+65% (using ~$4,316)</td></tr>
</tbody>
</table>
<p>Sources: year-end prices via JM Bullion; reported yearly changes from published annual returns. Calculated column is our arithmetic, for example 2016: $1,152 / $1,061 - 1 = +8.6%. For 2024 and 2025 we used the midpoint of the reported ranges.</p>
<h3>What the table shows</h3>
<ul>
<li><strong>Four down or flat years out of eleven.</strong> 2015, 2018, 2021 and 2022 were losing or roughly flat years. Someone who bought at the end of 2020 at about $1,899 was still slightly behind two years later.</li>
<li><strong>Most of the gain came in a few bursts.</strong> 2019-2020 and 2024-2025 did most of the work. In the years between, gold went sideways.</li>
<li><strong>The decade was unusually strong.</strong> From about $1,061 at the end of 2015 to about $4,316 at the end of 2025, gold roughly quadrupled. The math: $4,316 / $1,061 = about 4.07 times, which works out to roughly <strong>15% a year</strong> compounded over 10 years (4.07 to the power of 1/10 = about 1.151). That is far above gold's long-run average of about 8.8% - because 2015 was near the bottom of a four-year slide and 2025 was a record year. Pick different end points and you get a very different number.</li>
</ul>
<h3>Annual average prices tell a calmer story</h3>
<p>Year-end prices capture one day. Annual averages smooth out the noise:</p>
<table>
<thead><tr><th>Year</th><th>Average gold price</th></tr></thead>
<tbody>
<tr><td>2019</td><td>$1,393</td></tr>
<tr><td>2020</td><td>$1,770</td></tr>
<tr><td>2021</td><td>$1,799</td></tr>
<tr><td>2022</td><td>$1,800</td></tr>
<tr><td>2023</td><td>$1,941</td></tr>
<tr><td>2024</td><td>$2,386 (LBMA)</td></tr>
<tr><td>2025</td><td>$3,431 (World Gold Council - a record; Q4 2025 averaged $4,135)</td></tr>
</tbody>
</table>
<p>Notice the three years from 2020 to 2022: the average price barely moved ($1,770 to $1,800), even though those years included a pandemic and a surge in inflation - exactly the kind of events gold is supposed to respond to. We return to that point in the <a href="#is-gold-a-good-inflation-hedge">inflation section</a>.</p>
<p>The 2025 average of $3,431 was about 44% above 2024's $2,386 ($3,431 / $2,386 - 1 = 0.438). That is a big jump in a single year for an asset many people buy for "stability."</p>`,
  },
  {
    heading: "The 2024-2026 run: a record high, then a 29% drop",
    body: `<p>The last three years are the backdrop to almost every gold IRA advertisement you see today, so they deserve a close look.</p>
<h3>The rise</h3>
<ul>
<li><strong>End of 2023:</strong> about $2,063 an ounce.</li>
<li><strong>End of 2024:</strong> about $2,610-$2,624, up roughly 27%.</li>
<li><strong>End of 2025:</strong> about $4,310-$4,323, up roughly 65% in a single year.</li>
<li><strong>January 29, 2026:</strong> a record of about <strong>$5,595 an ounce</strong> intraday (Reuters). The LBMA morning fix that day was $5,501.70 and the afternoon fix $5,405.00.</li>
</ul>
<p>From the end of 2023 to the January 2026 peak, gold rose about 171% ($5,595 / $2,063 - 1 = 1.71). Even from the end of 2025, the extra climb to the peak was about 30% in four weeks ($5,595 / $4,316 - 1 = 0.296).</p>
<h3>The fall</h3>
<ul>
<li><strong>January 30, 2026:</strong> spot fell 3.9% to about $5,183 in one day.</li>
<li><strong>Late June 2026:</strong> the LBMA fix hit a low of about <strong>$3,994.50</strong> - roughly <strong>29% below the peak</strong> ($3,994.50 / $5,595 - 1 = -0.286). The 52-week low in spot trading was around $3,900.</li>
<li><strong>October 19, 2026:</strong> about <strong>$4,170</strong> (Kitco).</li>
</ul>
<table>
<thead><tr><th>If you bought at...</th><th>Price paid (spot)</th><th>Change to ~$4,170 on Oct 19, 2026</th></tr></thead>
<tbody>
<tr><td>End of 2023</td><td>~$2,063</td><td>~+102%</td></tr>
<tr><td>End of 2024</td><td>~$2,617</td><td>~+59%</td></tr>
<tr><td>End of 2025</td><td>~$4,316</td><td>~-3%</td></tr>
<tr><td>Record, Jan 29, 2026</td><td>~$5,595</td><td>~-25%</td></tr>
<tr><td>June 2026 low</td><td>~$3,994</td><td>~+4%</td></tr>
</tbody>
</table>
<p>Our arithmetic on spot prices, for example $4,170 / $5,595 - 1 = -25.5%. These figures <strong>ignore dealer markups and fees</strong>, which would make every row worse for a gold IRA buyer - by several percentage points or more. See <a href="#how-fees-change-the-math-break-even-examples">how fees change the math</a>.</p>
<h3>Why this matters</h3>
<p>Two lessons stand out. First, timing dominates short-term results: the same metal produced a doubling for one buyer and a 25% loss for another, depending only on the purchase date. Second, a 29% fall in five months is a large, fast drop - bigger than many stock-market corrections. Anyone who bought near the top in a gold IRA expecting "stability" got the opposite.</p>
<p>That does not mean gold was a bad buy in 2026 or that it will not recover; it may, and it may not. It means the honest description of gold is <strong>"volatile asset that sometimes diversifies"</strong> - not "safe store of value."</p>
<h3>What forecasters said - and why to be cautious</h3>
<p>Big banks publish gold forecasts. Earlier 2026 figures included an average of about $4,325 (ING), $4,900 (Goldman Sachs) and $5,000 (Bank of America); by mid-to-late 2026 several banks had cut theirs - for example Goldman Sachs to about $4,650 for end-2026 and Bank of America to a 2026 average of about $4,360 (see our <a href="/articles/gold-price-history">gold price history</a> for sources). Note how widely they differ, and remember that forecasts made before January 2026 did not predict either the spike to $5,595 or the fall to under $4,000. Treat any price forecast - from a bank or a gold dealer - as an opinion, not information.</p>`,
  },
];
