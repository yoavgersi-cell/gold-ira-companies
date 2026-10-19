import type { ArticleSection } from "@/lib/config";

// Part 4 of "Is a Gold IRA a Good Investment? Pros, Cons and 50 Years of Data (2026)".
// Gold IRA vs ETF vs home bullion vs miners, who it suits (profiles table),
// how much to hold with a rebalancing example, timing after a record run
// (lump sum vs dollar-cost averaging) and a brief look at silver/platinum/palladium.

export const part4: ArticleSection[] = [
  {
    heading: "Gold IRA vs gold ETF vs physical gold vs mining stocks",
    body: `<p>If you decide you want some gold exposure, a gold IRA is only one of four common routes. Each is better for a different purpose.</p>
<table>
<thead><tr><th></th><th>Gold IRA (physical metal)</th><th>Gold ETF in an IRA or brokerage account</th><th>Coins or bars at home</th><th>Gold-mining stocks or funds</th></tr></thead>
<tbody>
<tr><td><strong>What you own</strong></td><td>Specific IRS-eligible bullion held by a depository for your IRA</td><td>Shares of a fund that holds gold in a vault</td><td>Metal in your own possession</td><td>Shares in companies that dig gold</td></tr>
<tr><td><strong>Cost to buy</strong></td><td>Dealer markup, roughly 2-7% on common bullion online, often more via phone sales</td><td>Normal share trade; small bid-ask spread</td><td>Dealer markup (similar to IRA)</td><td>Normal share trade</td></tr>
<tr><td><strong>Yearly cost</strong></td><td>~$200-$700+ custodian and storage fees</td><td>Expense ratio 0.09%-0.40% (see below)</td><td>Your own safe or bank box, insurance</td><td>Fund fee (GDX: 0.51%) or none for single stocks</td></tr>
<tr><td><strong>Selling</strong></td><td>Through custodian and dealer; days; sell under spot</td><td>Seconds, during market hours</td><td>Find a dealer; sell under spot</td><td>Seconds, during market hours</td></tr>
<tr><td><strong>Tax</strong></td><td>IRA rules (deferred or Roth tax-free)</td><td>IRA rules inside an IRA; collectibles rate up to 28% for grantor-trust funds like GLD outside one</td><td>Collectibles rate up to 28% on long-term gains</td><td>Ordinary stock capital gains rules outside an IRA</td></tr>
<tr><td><strong>Main risk beyond gold's price</strong></td><td>Overpaying; fees; dealer practices</td><td>Fund structure; tracking</td><td>Theft, loss, fakes, no paper trail</td><td>Company risk; tends to swing more than gold itself</td></tr>
</tbody>
</table>
<h3>Gold ETF expense ratios</h3>
<p>Expense ratios (the yearly fund fee as a percentage of your holding) for well-known funds, as of our latest check - verify before you buy:</p>
<table>
<thead><tr><th>Fund</th><th>Ticker</th><th>Expense ratio</th><th>Yearly cost on $100,000</th></tr></thead>
<tbody>
<tr><td>SPDR Gold MiniShares</td><td>GLDM</td><td>0.10%</td><td>$100</td></tr>
<tr><td>iShares Gold Trust Micro</td><td>IAUM</td><td>0.09%</td><td>$90</td></tr>
<tr><td>abrdn Gold ETF</td><td>SGOL</td><td>0.17%</td><td>$170</td></tr>
<tr><td>Goldman Sachs Physical Gold</td><td>AAAU</td><td>0.18%</td><td>$180</td></tr>
<tr><td>iShares Gold Trust</td><td>IAU</td><td>0.25%</td><td>$250</td></tr>
<tr><td>SPDR Gold Shares</td><td>GLD</td><td>0.40%</td><td>$400</td></tr>
<tr><td>VanEck Gold Miners (mining stocks)</td><td>GDX</td><td>0.51%</td><td>$510</td></tr>
</tbody>
</table>
<h3>When each route tends to be better</h3>
<ul>
<li><strong>Gold ETF in an existing IRA</strong> is usually the cheapest and simplest way to add a small gold slice to retirement savings. No new custodian, no storage bill, no dealer markup, and you can rebalance in seconds. It suits most people whose goal is diversification. Our <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF comparison</a> goes deeper.</li>
<li><strong>A gold IRA</strong> can make more sense if you specifically want identifiable physical bullion held for you, have a large enough amount (so flat fees are a small percentage), and can buy at a competitive markup. Some people also simply distrust fund structures.</li>
<li><strong>Coins at home</strong> suit people who want metal they can hold, outside the financial system, and who accept theft risk and the collectibles tax rate. It cannot be done with IRA money.</li>
<li><strong>Mining stocks</strong> are a bet on companies, not on gold. They often rise more than gold in good years and fall more in bad ones, and they carry business risks (costs, management, politics). They are a different investment, not a substitute.</li>
</ul>
<p>Put simply: if your goal is "some gold exposure at the lowest cost," a gold ETF usually wins. If your goal is "own specific physical bullion in a tax-advantaged account," a gold IRA is the main option - and the job is to keep its costs as low as possible.</p>`,
  },
  {
    heading: "Who a gold IRA can make sense for - and who it doesn't",
    body: `<p>There is no single answer, but some situations fit a gold IRA better than others. These profiles are general illustrations, not recommendations.</p>
<table>
<thead><tr><th>Profile</th><th>Age</th><th>Account size</th><th>Goal</th><th>Gold IRA fit</th></tr></thead>
<tbody>
<tr><td>Pre-retiree with a large, stock-heavy 401(k) who wants physical metal</td><td>55-65</td><td>$500,000+</td><td>Diversify a small slice into bullion; long horizon</td><td><strong>Can make sense</strong> for a modest slice, if markups and fees are low; flat fees are a small percentage</td></tr>
<tr><td>Retiree with pensions and Social Security covering basics</td><td>65-75</td><td>$250,000+</td><td>Hedge part of savings; does not need income from it</td><td><strong>Can make sense</strong> for a small slice; keep withdrawal money elsewhere</td></tr>
<tr><td>Retiree living on IRA withdrawals</td><td>65-75</td><td>$100,000-$300,000</td><td>Steady income and stability</td><td><strong>Often a poor fit.</strong> No income, high volatility and RMD friction work against the goal</td></tr>
<tr><td>Saver with a small IRA</td><td>Any</td><td>Under $50,000</td><td>"Protect" savings</td><td><strong>Usually a poor fit.</strong> $260-$500 a year is 0.5%-2% of the account; an ETF does the job for a fraction of the cost</td></tr>
<tr><td>Someone moving most or all savings into gold out of fear</td><td>Any</td><td>Any</td><td>Avoid a crash</td><td><strong>Poor fit.</strong> Concentrates risk in one volatile asset; gold has fallen 29%-70% in past drops</td></tr>
<tr><td>Younger saver building wealth</td><td>30-50</td><td>Any</td><td>Long-term growth</td><td><strong>Usually a poor fit</strong> as a main holding; stocks have historically grown faster</td></tr>
<tr><td>Roth IRA owner with long horizon and estate goals</td><td>50+</td><td>$100,000+</td><td>Tax-free growth on a diversifier; no RMDs for the owner</td><td><strong>Can make sense</strong> for a slice; no lifetime RMDs reduces selling pressure</td></tr>
</tbody>
</table>
<h3>Signs a gold IRA is probably not right for you now</h3>
<ul>
<li>You would need to sell the gold within the next few years.</li>
<li>You are relying on the account for monthly income.</li>
<li>You are considering it mainly because of a phone call, advertisement or "free silver" offer.</li>
<li>You would be putting in a large share of your total savings.</li>
<li>You cannot get written prices showing the markup over spot.</li>
<li>Your account is small enough that the yearly fees exceed about 1% of it.</li>
</ul>
<h3>Signs it may be worth exploring</h3>
<ul>
<li>You already have a diversified plan, with emergency cash and several years of withdrawals in stable assets.</li>
<li>You want a small physical-metal slice and understand it may fall 30% or more.</li>
<li>Your account is large enough that flat fees are a small percentage.</li>
<li>You are willing to compare prices from several dealers and walk away from pressure.</li>
<li>You have discussed it with a fee-only adviser who has no commission on the sale.</li>
</ul>`,
  },
  {
    heading: "How much of your retirement savings should be in gold?",
    body: `<p>There is no official answer, and nobody can tell you the right amount without knowing your full situation. As general education: commentators and planners who include gold commonly cite <strong>roughly 5-10%</strong> of a portfolio as a typical range, and some suggest less or none. You will hear much higher figures from companies that sell gold - remember who is giving the advice.</p>
<p>What those percentages mean in dollars:</p>
<table>
<thead><tr><th>Total retirement savings</th><th>5% in gold</th><th>10% in gold</th></tr></thead>
<tbody>
<tr><td>$200,000</td><td>$10,000</td><td>$20,000</td></tr>
<tr><td>$500,000</td><td>$25,000</td><td>$50,000</td></tr>
<tr><td>$1,000,000</td><td>$50,000</td><td>$100,000</td></tr>
</tbody>
</table>
<p>Notice the bottom of the first row: $10,000 is the minimum at some gold IRA companies, and at that size $260-$500 a year in fees would be 2.6%-5% of the gold. That is why, for smaller portfolios, a low-cost gold ETF inside an existing IRA is often a more practical way to hold a 5-10% slice.</p>
<h3>Rebalancing: a worked example</h3>
<p>Choosing a percentage is only half of it. The other half is <strong>rebalancing</strong> - periodically trimming whatever has grown too big and adding to what has shrunk, to get back to your target. This is a hypothetical illustration:</p>
<ol>
<li>You have $500,000 and target 10% in gold: <strong>$50,000 gold, $450,000 other</strong>.</li>
<li>Gold rises 65% in a year (as it roughly did in 2025): $50,000 x 1.65 = <strong>$82,500</strong>. For simplicity, assume everything else stays at $450,000.</li>
<li>Your total is now $532,500, and gold is $82,500 / $532,500 = <strong>15.5%</strong> - well above your 10% target.</li>
<li>10% of $532,500 is $53,250. To rebalance, you would sell $82,500 - $53,250 = <strong>$29,250</strong> of gold and move it into your other holdings.</li>
</ol>
<p>Rebalancing forces you to sell some of what has risen and buy what has lagged - in this case, it would have locked in part of the 2025 gain before the 2026 drop. It works the other way too: after a fall, you would add to gold. In a gold IRA, rebalancing involves dealer spreads and possibly custodian fees each time, which is one more reason some people hold their gold slice in a low-cost ETF instead.</p>
<p>For a fuller discussion of allocation frameworks, see <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold in a retirement portfolio</a>. Our FAQ <a href="#what-percentage-of-my-retirement-should-be-in-gold">What percentage of my retirement should be in gold?</a> gives the short version.</p>`,
  },
  {
    heading: "Buying after a record run: lump sum or dollar-cost averaging",
    body: `<p>Many people start thinking about gold after it has already made headlines - which, in 2026, means after it rose from about $2,063 at the end of 2023 to about $5,595 in January 2026 and then fell back to about $4,170. Is it too late? Nobody knows. What you can control is <strong>how</strong> you buy.</p>
<h3>Two approaches</h3>
<ul>
<li><strong>Lump sum:</strong> invest the whole amount at once. If the price then rises, you benefit fully; if it falls, you take the full hit.</li>
<li><strong>Dollar-cost averaging (DCA):</strong> invest equal amounts at regular intervals - for example, monthly over six months. You buy more ounces when prices are low and fewer when they are high, and you avoid putting everything in at a single unlucky moment.</li>
</ul>
<h3>Two hypothetical examples</h3>
<p>You have $60,000 to put into gold. Compare buying all at once with $10,000 a month for six months. The prices below are <strong>invented for illustration</strong>, not forecasts.</p>
<p><strong>Scenario 1 - prices fall, then partly recover:</strong> monthly prices of $5,000, $4,600, $4,200, $4,000, $4,200, $4,400.</p>
<ul>
<li>Lump sum at $5,000: $60,000 / $5,000 = <strong>12.0 oz</strong>, worth $52,800 at $4,400.</li>
<li>DCA: $10,000 / each price, added up = <strong>about 13.7 oz</strong>, an average cost of about $4,377, worth about $60,300 at $4,400.</li>
</ul>
<p><strong>Scenario 2 - prices rise steadily:</strong> $4,200, $4,400, $4,600, $4,800, $5,000, $5,200.</p>
<ul>
<li>Lump sum at $4,200: $60,000 / $4,200 = <strong>about 14.3 oz</strong>, worth about $74,300 at $5,200.</li>
<li>DCA: <strong>about 12.8 oz</strong>, an average cost of about $4,675, worth about $66,700 at $5,200.</li>
</ul>
<p>So DCA did better when prices fell and worse when they rose. That is the general pattern: because markets more often rise than fall over time, a lump sum has tended to come out ahead more often than not, but DCA reduces the regret and damage of buying right before a drop. For a volatile asset bought after a big run, many people value that protection.</p>
<h3>DCA inside a gold IRA has extra costs</h3>
<p>Each purchase in a gold IRA may carry a custodian transaction fee (for example, STRATA reportedly charges $40 a trade plus depository handling) and each dealer order has its own markup. Six small purchases can cost more than one large one. Ask your custodian about per-trade fees before planning a DCA schedule - or consider averaging into a low-cost ETF instead, where small regular purchases are cheap.</p>
<h3>What not to do</h3>
<ul>
<li>Do not rush because a salesperson says prices are "about to explode" or that an offer ends today.</li>
<li>Do not move more than you planned because the price just dropped and "it's on sale." A falling price can keep falling.</li>
<li>Do not use money you will need for living costs in the next few years.</li>
</ul>`,
  },
  {
    heading: "What about silver, platinum and palladium?",
    body: `<p>Precious metals IRAs can also hold silver (.999 fine), platinum (.9995) and palladium (.9995). They are often pitched as cheaper or "higher upside" alternatives to gold. Briefly:</p>
<h3>Silver</h3>
<ul>
<li><strong>Annual average prices:</strong> 2015 $15.68 - 2016 $17.14 - 2017 $17.05 - 2018 $15.71 - 2019 $16.21 - 2020 $20.55 - 2021 $25.14 - 2022 $21.73 - 2023 $23.35 - 2024 $28.27 - 2025 $40.03.</li>
<li><strong>2025:</strong> closed around $72, up about 145% for the year.</li>
<li><strong>Record:</strong> reportedly about $121.62 on January 29, 2026 (one source; not independently verified).</li>
<li><strong>Now:</strong> about $57.70 (October 19, 2026) - roughly 53% below that reported record ($57.70 / $121.62 - 1 = -0.526).</li>
<li><strong>Gold/silver ratio:</strong> about 72:1 ($4,170 / $57.70 = 72.3), meaning one ounce of gold buys about 72 ounces of silver.</li>
</ul>
<p>Silver's swings are larger than gold's - a 145% gain followed by a roughly 50% fall within about a year. It also has heavier industrial demand, so it is more sensitive to the economy. And it typically costs more to buy: American Silver Eagles averaged about a 6.87% premium in August 2026, versus about 3-6% for Gold Eagles, and silver takes far more storage space per dollar. See our <a href="/articles/silver-ira-guide">silver IRA guide</a>.</p>
<h3>Platinum and palladium</h3>
<p>Both are much smaller markets, driven heavily by industrial use (especially vehicle catalytic converters). That makes them more volatile and more tied to manufacturing cycles than gold. Premiums can be high: Platinum Eagles averaged about 9.21% over spot in July 2026 and about 13.35% in February 2026. For most retirement savers, these metals are niche holdings at best.</p>
<h3>The bottom line on other metals</h3>
<p>If gold is too volatile for a given role in your plan, silver, platinum and palladium are more so. They can add diversification, but they amplify the downsides discussed in this guide - and a salesperson steering you toward them, or toward "premium" coins of any metal, may be steering you toward higher markups.</p>`,
  },
];
