import type { ArticleSection } from "@/lib/config";

// Part 4 of "How to Invest in Gold for Retirement (2026)".
// 10-year $50,000 cost comparison (gold price held flat; every step shown),
// tax comparison, liquidity and RMDs, combining methods, allocation, and the
// gold IRA route (the only section with company review links).

export const part4: ArticleSection[] = [
  {
    heading: "10-year cost comparison: $50,000 in gold five ways",
    body: `<p>Here is the comparison most guides skip. We take <strong>$50,000</strong>, hold it for <strong>10 years</strong>, then sell - using five different methods. To isolate cost, we <strong>hold the gold price flat</strong> the whole time. If gold rose or fell, every method would rise or fall with it; what differs is how much each one takes along the way.</p>
<p><strong>These are illustrations, not quotes.</strong> They use reported October 2026 figures and simple assumptions that we state at every step. Your costs will differ. To test your own numbers for a gold IRA, use our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>.</p>
<h3>Scenario A: Gold IRA, low-cost setup (illustration)</h3>
<ul>
<li>Custodian setup: <strong>$50</strong>.</li>
<li>Dealer spread of 3% on common bullion: $50,000 x 3% = <strong>$1,500</strong>. Metal value at spot: $50,000 - $1,500 = $48,500.</li>
<li>Yearly fees: a flat $90 custodian fee plus $125 commingled storage (GoldStar Trust as reported by a third-party site) = $215 a year. Over 10 years: $215 x 10 = <strong>$2,150</strong>.</li>
<li>Sale at 1% under spot: $48,500 x 1% = <strong>$485</strong>.</li>
<li>Wire out: <strong>$30</strong>.</li>
<li><strong>Total: $50 + $1,500 + $2,150 + $485 + $30 = $4,215</strong>, or about 8.4% of $50,000.</li>
</ul>
<h3>Scenario B: Gold IRA, high-cost setup (illustration)</h3>
<ul>
<li>Dealer application fee (reported at some dealers): <strong>$230</strong>.</li>
<li>Dealer spread of 10% (the bullion-in-IRA spread one phone dealer disclosed): $50,000 x 10% = <strong>$5,000</strong>. Metal value at spot: $45,000.</li>
<li>Yearly fees: Equity Trust's published $350 tier for accounts of $25,000-$49,999, plus $160 segregated storage = $510 a year. Over 10 years: $510 x 10 = <strong>$5,100</strong>.</li>
<li>Sale at 2% under spot: $45,000 x 2% = <strong>$900</strong>.</li>
<li>Exit fees at Equity Trust: liquidation $30 (the $10-per-asset maximum) + $30 wire + $250 full termination = <strong>$310</strong>.</li>
<li><strong>Total: $230 + $5,000 + $5,100 + $900 + $310 = $11,540</strong>, or about 23.1% of $50,000.</li>
</ul>
<h3>Scenario C: GLDM in an IRA (illustration)</h3>
<ul>
<li>Assumes a brokerage IRA with no annual account fee and no commission (common at large brokerages, but check yours).</li>
<li>Expense ratio 0.10% a year. Simple math: $50,000 x 0.10% = $50 a year, x 10 = $500. Because the fee is taken from a slowly shrinking balance, the exact figure is $50,000 x (1 - 0.999<sup>10</sup>) = about <strong>$498</strong>.</li>
<li>Bid-ask spread when buying and selling: we assume about <strong>$25</strong> in total (an assumption for illustration - large ETFs usually trade with very small spreads).</li>
<li><strong>Total: about $498 + $25 = $523</strong>, or about 1.0% of $50,000.</li>
</ul>
<h3>Scenario D: IAU in an IRA or taxable account (illustration)</h3>
<ul>
<li>Expense ratio 0.25%: $50,000 x (1 - 0.9975<sup>10</sup>) = about <strong>$1,236</strong> (simple math: $125 x 10 = $1,250).</li>
<li>Trading spread: about <strong>$25</strong> (same assumption as above).</li>
<li><strong>Total: about $1,261</strong>, or about 2.5% of $50,000. With gold flat there is no gain, so even in a taxable account there is no tax to pay in this example.</li>
<li>For reference, GLD at 0.40% would cost about $50,000 x (1 - 0.996<sup>10</sup>) = about $1,964, plus $25 = about $1,989 (4.0%).</li>
</ul>
<h3>Scenario E: Gold Eagles at home (illustration)</h3>
<ul>
<li>Premium of 4% (Costco's 2026 Gold Eagle was about 4.2% in October 2026; one online dealer lists 3-6%): $50,000 x 4% = <strong>$2,000</strong>. Metal value at spot: $48,000.</li>
<li>No yearly account fees.</li>
<li>Sale at 1.5% under spot (dealers typically bid 1-2% under): $48,000 x 1.5% = <strong>$720</strong>.</li>
<li><strong>Basic total: $2,000 + $720 = $2,720</strong>, or about 5.4%. That 5.4% round trip sits inside the 4-8% range GoldSilver reported for Gold Eagles.</li>
<li><strong>With home security (hypothetical):</strong> if you also bought a $500 safe and paid $150 a year for an insurance rider - both made-up figures, so get real quotes - add $500 + ($150 x 10) = $2,000, for a total of <strong>$4,720</strong>, or about 9.4%.</li>
<li>Tax: you would sell for $50,000 - $2,720 = $47,280, which is less than you paid, so there is no gain to tax in this flat-price example.</li>
</ul>
<h3>Side by side</h3>
<table>
<thead><tr><th>Method (illustration)</th><th>10-year cost</th><th>Cost as % of $50,000</th><th>Money left after selling</th><th>Rough gold rise needed to break even</th></tr></thead>
<tbody>
<tr><td>C. GLDM in an IRA</td><td>About $523</td><td>About 1.0%</td><td>About $49,477</td><td>About 1%</td></tr>
<tr><td>D. IAU in an IRA or taxable account</td><td>About $1,261</td><td>About 2.5%</td><td>About $48,739</td><td>About 2.6%</td></tr>
<tr><td>E. Gold Eagles at home (basic)</td><td>$2,720</td><td>About 5.4%</td><td>$47,280</td><td>About 5.8%</td></tr>
<tr><td>A. Gold IRA, low-cost</td><td>$4,215</td><td>About 8.4%</td><td>$45,785</td><td>About 8.8%</td></tr>
<tr><td>E. Gold Eagles at home with safe and insurance (hypothetical)</td><td>$4,720</td><td>About 9.4%</td><td>$45,280</td><td>About 10%</td></tr>
<tr><td>B. Gold IRA, high-cost</td><td>$11,540</td><td>About 23.1%</td><td>$38,460</td><td>About 26%</td></tr>
</tbody>
</table>
<p>How we got the break-even column, using Scenario A: you need the sale proceeds minus the yearly and exit fees to equal $50,000. The metal is worth $48,500 at spot and sells at 99% of spot, so 48,500 x 0.99 = $48,015 per unit of gold price. Fees to cover: $2,150 + $50 + $30 = $2,230. So $48,015 x (1 + rise) = $52,230, which gives a rise of about 8.8%. For Scenario B: 45,000 x 0.98 = $44,100; fees $5,100 + $230 + $310 = $5,640; $44,100 x (1 + rise) = $55,640, a rise of about 26%. (In real life, a higher gold price would also lift Equity Trust's tiered fee, so the true figure would be a little higher.) For coins: 48,000 x 0.985 = $47,280, and $50,000 / $47,280 = 1.0575, a rise of about 5.8%.</p>
<h3>What the comparison tells you</h3>
<ul>
<li><strong>Low-cost ETFs win on cost by a wide margin.</strong> GLDM's 10-year cost is about one-eighth of the low-cost gold IRA's.</li>
<li><strong>A well-run gold IRA is not outrageous</strong> - about 8% over 10 years in Scenario A - but the gap between low-cost and high-cost gold IRAs ($4,215 vs $11,540) is bigger than the gap between a low-cost gold IRA and an ETF.</li>
<li><strong>The dealer spread is the swing factor.</strong> In Scenario B, the 10% spread alone ($5,000) costs more than the entire Scenario A.</li>
<li><strong>Coins at home look cheap until you add security.</strong> Then they land near the low-cost gold IRA.</li>
<li><strong>Cost is not the only thing.</strong> The gold IRA and coins give you specific physical metal; the ETF does not. Whether that is worth the difference is your call.</li>
</ul>
<p>For a deeper look at every gold IRA fee, see our <a href="/articles/gold-ira-fees">gold IRA fees guide</a>.</p>`,
  },
  {
    heading: "Tax comparison: IRA vs Roth IRA vs taxable account",
    body: `<p>Where you hold gold can matter as much as how you hold it. Here is how each method is generally taxed in each kind of account under federal rules. State taxes vary, and your situation may differ - a tax professional can confirm.</p>
<table>
<thead><tr><th>Method</th><th>Traditional IRA or 401(k)</th><th>Roth IRA or Roth 401(k)</th><th>Taxable account</th></tr></thead>
<tbody>
<tr><td>Gold IRA (physical metal)</td><td>No tax on gains inside; withdrawals taxed as ordinary income</td><td>Qualified withdrawals tax-free</td><td>Not applicable - it is an IRA</td></tr>
<tr><td>Physically backed gold or silver ETFs (GLD, IAU, GLDM, SLV and similar grantor trusts)</td><td>No tax inside; withdrawals taxed as ordinary income; no collectibles rate</td><td>Qualified withdrawals tax-free</td><td>Long-term gains taxed as collectibles, up to 28%; short-term as ordinary income</td></tr>
<tr><td>Coins and bars at home</td><td>Not allowed - home storage of IRA metal is treated as a distribution</td><td>Not allowed</td><td>Collectibles: up to 28% long-term; short-term as ordinary income</td></tr>
<tr><td>Mining stocks and miner ETFs (e.g. GDX)</td><td>No tax inside; withdrawals taxed as ordinary income</td><td>Qualified withdrawals tax-free</td><td>Regular capital gains rates (top federal rate 20%); many dividends qualify for the same rates</td></tr>
<tr><td>Gold or commodity funds in a 401(k)</td><td>Taxed as ordinary income on withdrawal</td><td>Qualified withdrawals tax-free</td><td>Depends on the fund's structure - check the fund's tax documents</td></tr>
<tr><td>Futures and options</td><td>Rarely permitted; special approval if at all</td><td>Rarely permitted</td><td>Regulated futures: generally 60% long-term / 40% short-term, counted each year-end</td></tr>
<tr><td>Digital or vaulted gold</td><td>Usually not available</td><td>Usually not available</td><td>Generally treated like owning the metal (collectibles, up to 28%) - confirm with a tax pro</td></tr>
</tbody>
</table>
<h3>Three tax points that change decisions</h3>
<ol>
<li><strong>The 28% collectibles rate is easy to avoid by using an IRA.</strong> If you are going to hold a physically backed gold ETF, holding it in an IRA or 401(k) window removes the collectibles issue. Inside the account, gold is taxed like everything else.</li>
<li><strong>A Roth account can be a good home for an asset you expect to grow</strong>, because qualified withdrawals are tax-free and there are no RMDs for the original owner of a Roth IRA. Converting pre-tax money to Roth is taxable in the year you convert. See our <a href="/articles/roth-gold-ira">Roth gold IRA guide</a>.</li>
<li><strong>A traditional IRA turns every gain into ordinary income</strong> when you withdraw. That is not a penalty unique to gold - it applies to stocks too - but it means the "28% rate" does not matter inside the account; your income tax bracket does.</li>
</ol>
<p>Withdrawals from any IRA or 401(k) before age 59½ generally add a 10% additional tax unless an exception applies. For more detail on taxes inside a gold IRA, read <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</p>`,
  },
  {
    heading: "Liquidity and RMDs compared",
    body: `<p>In retirement, you need to turn savings into cash - sometimes on a schedule set by the IRS. Required minimum distributions (RMDs) start at <strong>age 73 if you were born 1951-1959</strong> and <strong>age 75 if you were born in 1960 or later</strong>. Roth IRA owners do not take RMDs during their lifetime.</p>
<table>
<thead><tr><th>Method</th><th>Time to cash</th><th>Can you sell a small piece?</th><th>How RMDs work</th></tr></thead>
<tbody>
<tr><td>Gold IRA</td><td>Usually several days (custodian instructs the sale, dealer buys back)</td><td>Only whole coins or bars</td><td>Sell metal for cash, or take coins "in kind" (taxed at fair market value). Some owners keep cash in the IRA to cover RMDs</td></tr>
<tr><td>Gold ETF in an IRA</td><td>Sell any trading day; settles in about a business day</td><td>Yes, down to one share</td><td>Sell the exact amount needed, or transfer shares out in kind</td></tr>
<tr><td>Coins at home</td><td>A day to a week (visit or ship to a dealer)</td><td>Only whole coins</td><td>No RMDs - not a retirement account</td></tr>
<tr><td>Miner stocks or ETFs</td><td>Any trading day</td><td>Yes</td><td>Same as any IRA stock</td></tr>
<tr><td>401(k) gold or commodity fund</td><td>Usually a day or two within the plan</td><td>Yes</td><td>Plan handles RMDs; Roth 401(k)s have had no RMDs since 2024</td></tr>
<tr><td>Futures</td><td>Any trading session</td><td>Micro contracts help, but sizes are large</td><td>Rarely held in IRAs</td></tr>
<tr><td>Vaulted or digital gold</td><td>Often same day online; delivery takes longer</td><td>Usually yes (by the gram)</td><td>Usually not in an IRA</td></tr>
</tbody>
</table>
<h3>A worked RMD example (illustration)</h3>
<p>Suppose your gold IRA holds 1 oz Gold Eagles only, gold is about $4,170, and your RMD this year is a hypothetical $3,000. You cannot sell three-quarters of a coin. Your choices:</p>
<ul>
<li>Sell one whole coin (about $4,170 at spot, less the dealer's bid discount) and withdraw $3,000, leaving the rest as cash in the IRA.</li>
<li>Take one coin out in kind. Its fair market value - about $4,170 - counts as your distribution, which is more than the $3,000 you needed, so you pay tax on more income than necessary that year.</li>
<li>Take the whole RMD from a different IRA instead. The IRS lets you total the RMDs from all your traditional IRAs and take the total from any one or more of them.</li>
</ul>
<p>With an ETF, you would simply sell $3,000 of shares. This is one reason some people keep part of their gold in an ETF even if they own a gold IRA. Note that the aggregation rule above applies to IRAs; 401(k) RMDs are generally taken from each plan separately.</p>`,
  },
  {
    heading: "How to combine methods",
    body: `<p>You do not have to pick one method. Many retirees use two, each for a different job: a low-cost ETF for cheap, liquid exposure, and a smaller amount of physical metal for peace of mind. Here are some common combinations, with illustrative numbers.</p>
<h3>Example: $400,000 in savings, 7.5% target in gold (illustration)</h3>
<p>Target gold: $400,000 x 7.5% = <strong>$30,000</strong>. Here are three ways to split it.</p>
<table>
<thead><tr><th>Approach</th><th>How the $30,000 is split</th><th>Rough first-year cost</th></tr></thead>
<tbody>
<tr><td>All ETF</td><td>$30,000 GLDM in an IRA or 401(k) window</td><td>$30,000 x 0.10% = $30</td></tr>
<tr><td>ETF core + coins</td><td>$20,000 GLDM in the IRA; $10,000 Gold Eagles at home from taxable savings</td><td>$20,000 x 0.10% = $20, plus a one-time 4% premium on coins ($400) = $420</td></tr>
<tr><td>All gold IRA (low-cost)</td><td>$30,000 in a gold IRA</td><td>$50 setup + 3% spread ($900) + $215 yearly fees = $1,165</td></tr>
</tbody>
</table>
<p>After year one, the ETF-plus-coins mix costs about $20 a year (plus your security costs at home), while the low-cost gold IRA costs about $215 a year. That is not a reason to rule out a gold IRA - just a clear view of what each piece costs.</p>
<h3>Common combinations</h3>
<ul>
<li><strong>ETF in the 401(k) + a few coins at home.</strong> Suits people still working whose plan has a brokerage window. The ETF does the heavy lifting; the coins provide physical ownership without a large theft risk.</li>
<li><strong>Gold IRA + ETF in another IRA.</strong> Suits people with larger balances who want physical metal in a tax-advantaged account but also want an easy asset to sell for RMDs and rebalancing.</li>
<li><strong>Roth IRA with an ETF + traditional IRA untouched.</strong> Some people choose to hold gold in a Roth so any growth can come out tax-free. A tax professional can help decide which account is the better home.</li>
<li><strong>Miners as a small "satellite".</strong> Some investors add a small miner ETF position alongside metal or a metal ETF, accepting extra swings for the chance of extra gains.</li>
</ul>
<h3>Rules for combining sensibly</h3>
<ol>
<li><strong>Count every piece toward one gold target.</strong> It is easy to own an ETF, a gold IRA, coins and a miner fund and end up at 20% gold by accident.</li>
<li><strong>Put the most liquid piece where you will need cash first</strong> - usually the account you will draw from for RMDs.</li>
<li><strong>Keep physical holdings at home small</strong> relative to your net worth.</li>
<li><strong>Write it all down</strong> for your heirs: account numbers, custodians, coin counts and where the safe key is.</li>
</ol>`,
  },
  {
    heading: "How much gold should you hold for retirement?",
    body: `<p>There is no rule that fits everyone, and we cannot tell you what is right for you. What we can tell you is what commentators commonly suggest and how to think about it.</p>
<p>Many commentators who favor gold suggest holding about <strong>5-10% of a portfolio</strong> in gold or precious metals. Some suggest less, and a few suggest more. That range is a starting point for a conversation, not advice. Here is what it means in dollars:</p>
<table>
<thead><tr><th>Total retirement savings</th><th>5% in gold</th><th>10% in gold</th></tr></thead>
<tbody>
<tr><td>$100,000</td><td>$5,000</td><td>$10,000</td></tr>
<tr><td>$250,000</td><td>$12,500</td><td>$25,000</td></tr>
<tr><td>$500,000</td><td>$25,000</td><td>$50,000</td></tr>
<tr><td>$1,000,000</td><td>$50,000</td><td>$100,000</td></tr>
</tbody>
</table>
<p>The table also says something about method. At $5,000-$12,500, a gold IRA's flat fees of about $215-$510 a year would eat roughly 2-10% of the gold every year ($215 / $12,500 = about 1.7%; $510 / $5,000 = about 10.2%). At those amounts, an ETF or a few coins is usually more cost-effective. At $50,000 and above, flat fees become a smaller share.</p>
<h3>Questions to ask yourself</h3>
<ul>
<li><strong>Could I live with a 30-45% drop</strong> in this part of my savings? Gold has done that, as recently as 2026 (about -29%) and 2011-2015 (about -45%).</li>
<li><strong>Do I need income?</strong> Gold pays none. Money for living expenses in the next few years probably belongs in something steadier.</li>
<li><strong>What else do I own?</strong> Social Security, a pension or real estate change how much risk your savings can carry.</li>
<li><strong>Am I buying because of fear?</strong> Ads built on crash warnings are designed to make you act fast. Decisions made calmly tend to be better.</li>
</ul>
<h3>Rebalancing (illustration)</h3>
<p>Say you set 10% of $500,000, or $50,000, in gold. Then gold rises 65% in a year - as it did in 2025 - while the rest stays flat. Gold is now $50,000 x 1.65 = $82,500; the rest is $450,000; total $532,500. Gold has drifted to $82,500 / $532,500 = about 15.5%. To return to 10%, the target is $53,250, so you would sell $82,500 - $53,250 = $29,250 of gold. With an ETF, that is a few clicks. With a gold IRA, it means a dealer buyback at the bid price. Plan for how you will rebalance before you buy.</p>
<p>For a fuller discussion, read <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold should be in a retirement portfolio</a>, and consider a fee-only adviser who does not earn commissions on metals.</p>`,
  },
  {
    heading: "Step by step: the gold IRA route",
    body: `<p>If you have weighed the options and want physical metal inside a retirement account, here is the short version of the process. Our full <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a> covers every step in detail, and our <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover guide</a> covers workplace plans.</p>
<ol>
<li><strong>Decide how much.</strong> Set a dollar amount before you speak to any salesperson, and stick to it.</li>
<li><strong>Shortlist companies.</strong> Read independent reviews and complaint records. Our <a href="/articles/how-to-choose-a-gold-ira-company">guide to choosing a gold IRA company</a> lists the questions to ask, and our <a href="/">gold IRA company rankings</a> explain who we think is worth a call - see <a href="/how-we-rank">how we rank</a> for our method.</li>
<li><strong>Get written quotes from at least two.</strong> Ask for the price per coin, the spot price at the time, the markup as a percentage, and today's buyback price.</li>
<li><strong>Confirm the custodian and depository</strong>, and read the custodian's own fee schedule. Our <a href="/articles/gold-ira-custodians">custodians guide</a> compares them.</li>
<li><strong>Open the self-directed IRA</strong> with the custodian.</li>
<li><strong>Move the money by direct transfer</strong> (IRA to IRA) or direct rollover (from a 401(k)). Avoid taking a check yourself: only one 60-day IRA-to-IRA rollover is allowed per 12 months across all your IRAs, and an employer plan that pays you directly must withhold 20%.</li>
<li><strong>Buy IRA-eligible bullion</strong>, not proof or "rare" coins. Check our list of <a href="/articles/irs-approved-precious-metals">IRA-eligible precious metals</a>.</li>
<li><strong>Verify your statement</strong> lists the exact metal you bought and where it is stored.</li>
</ol>
<h3>Reported minimums at the companies we review</h3>
<p>Dealers set their own minimums. As reported in October 2026, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> lists about $10,000 for an IRA, <a href="/reviews/goldco">Goldco</a> generally $25,000, and <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> $50,000. None of these companies publishes its product spreads, so ask for them in writing. Promotions such as "free silver" or fee waivers should be judged by the total metal value at spot you receive for your money, not by what is called free. And remember that a gold IRA company is only one of your options - the ETF and 401(k) routes above involve no dealer at all.</p>
<p>If you are still unsure whether physical metal is worth the extra cost over an ETF, read <a href="/articles/is-a-gold-ira-a-good-investment">is a gold IRA a good investment?</a> before you commit.</p>`,
  },
];
