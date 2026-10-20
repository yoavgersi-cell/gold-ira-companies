import type { ArticleSection } from "@/lib/config";

// Part 2 of "Silver IRA: The Complete 2026 Guide".
// Price history and volatility, premiums (with $50k worked example),
// storage bulk math, and the full cost picture. Figures dated Oct 2026.

export const part2: ArticleSection[] = [
  {
    heading: "Silver price history and volatility (2015-2026)",
    body: `<p>Looking at past prices will not tell you what silver will do next. It does show how widely silver can swing - which is exactly what you need to know before putting retirement money into it.</p>
<h3>Annual average silver prices, 2015-2025</h3>
<p>The table below uses <strong>annual average</strong> prices, which smooth out day-to-day noise. The "change" column is our arithmetic: this year's average divided by last year's, minus one.</p>
<table>
<thead><tr><th>Year</th><th>Average silver price</th><th>Change vs prior year's average</th></tr></thead>
<tbody>
<tr><td>2015</td><td>$15.68</td><td>-</td></tr>
<tr><td>2016</td><td>$17.14</td><td>+9.3%</td></tr>
<tr><td>2017</td><td>$17.05</td><td>-0.5%</td></tr>
<tr><td>2018</td><td>$15.71</td><td>-7.9%</td></tr>
<tr><td>2019</td><td>$16.21</td><td>+3.2%</td></tr>
<tr><td>2020</td><td>$20.55</td><td>+26.8%</td></tr>
<tr><td>2021</td><td>$25.14</td><td>+22.3%</td></tr>
<tr><td>2022</td><td>$21.73</td><td>-13.6%</td></tr>
<tr><td>2023</td><td>$23.35</td><td>+7.5%</td></tr>
<tr><td>2024</td><td>$28.27</td><td>+21.1%</td></tr>
<tr><td>2025</td><td>$40.03</td><td>+41.6%</td></tr>
</tbody>
</table>
<p class="small"><em>Annual averages as compiled in our research notes (Oct 2026). Changes are calculated from the averages, which is why 2025 shows +41.6% here even though silver rose about 145% from the start to the end of that year.</em></p>
<p>Two things stand out. First, silver went <strong>nowhere for five years</strong>: the 2019 average ($16.21) was only about 3% above the 2015 average ($15.68). Anyone who bought in 2015 and needed to sell in 2019 would have lost money once fees and spreads were counted. Second, after 2020 the moves got bigger, both up and down - including a 13.6% drop in the 2022 average before the big run in 2024 and 2025.</p>
<p>Over the full period, the average price rose from $15.68 to $40.03. That is $40.03 ÷ $15.68 = 2.55 times, or about +155% in ten years - most of it in the last two years.</p>
<h3>2025 and 2026: a surge and a crash</h3>
<table>
<thead><tr><th>Date / period</th><th>Silver (approx.)</th><th>What happened</th></tr></thead>
<tbody>
<tr><td>Full year 2025</td><td>Up about 145%, closing near $72</td><td>Strongest year in our data set</td></tr>
<tr><td>Jan 29, 2026</td><td>~$121.62 record (one data source, Metalcharts; <strong>unverified</strong>)</td><td>Same day gold hit its ~$5,595 record</td></tr>
<tr><td>Oct 19, 2026</td><td>~$57.70</td><td>About 53% below the reported record; about 20% below the 2025 close</td></tr>
</tbody>
</table>
<p>The math for the last row: $57.70 ÷ $121.62 = 0.474, so a fall of about 52.6%. And $57.70 ÷ $72 = 0.801, so about 19.9% below the 2025 year-end close.</p>
<p>We flag the $121.62 record as <strong>unverified</strong> because we found it in only one price source and could not confirm it against an official benchmark such as the LBMA silver price. The general picture - a very large spike in January 2026 followed by a deep fall - is consistent with gold's path, which is well documented.</p>
<h3>Silver vs gold: the same story, amplified</h3>
<table>
<thead><tr><th>Measure</th><th>Silver</th><th>Gold</th><th>Silver vs gold</th></tr></thead>
<tbody>
<tr><td>2025 calendar-year change</td><td>~+145%</td><td>~+65%</td><td>About 2.2x as large</td></tr>
<tr><td>Change in annual average, 2024 to 2025</td><td>+41.6%</td><td>+43.8% ($2,386 to $3,431)</td><td>Similar</td></tr>
<tr><td>Change in annual average, 2021 to 2022</td><td>-13.6%</td><td>+0.1% ($1,799 to $1,800)</td><td>Silver fell; gold flat</td></tr>
<tr><td>Change in annual average, 2019 to 2020</td><td>+26.8%</td><td>+27.1% ($1,393 to $1,770)</td><td>Similar</td></tr>
<tr><td>Fall from Jan 29, 2026 record to Oct 19, 2026</td><td>~-53%</td><td>~-25%</td><td>About 2.1x as large</td></tr>
</tbody>
</table>
<p>Silver did not always move more than gold. In some years the annual averages moved almost in step. But in the biggest moves - 2025's surge and 2026's fall - silver moved roughly twice as far. In 2022, when gold held flat, silver's average fell more than 13%.</p>
<h3>What volatility means for a retirement account</h3>
<p>In an IRA, volatility shows up in three practical ways:</p>
<ul>
<li><strong>Timing risk when you need money.</strong> If you must take a required minimum distribution or sell to pay bills during a slump, you lock in the loss. A retiree who bought silver near the January 2026 high and needed to sell in October 2026 would have been down about half before costs.</li>
<li><strong>Behavior risk.</strong> Big swings tempt people to buy after a run-up and sell after a crash - the opposite of what works.</li>
<li><strong>Cost drag is harder to recover.</strong> Silver's higher premiums mean you start further behind, so a flat or falling market hurts more.</li>
</ul>
<p>None of this means silver is a bad holding. It means silver is a <strong>higher-risk</strong> holding than gold, and many people size it accordingly. Our article on <a href="/articles/is-a-gold-ira-a-good-investment">whether a gold IRA is a good investment</a> covers the long-run return evidence for metals versus stocks, which applies broadly to silver as well.</p>`,
  },
  {
    heading: "Silver premiums: why product choice matters more than with gold",
    body: `<p>The <strong>premium</strong> is the amount you pay above the spot price of the metal. It covers minting, refining, shipping and the dealer's profit. With gold, the difference between a popular coin and a bar is a few percentage points. With silver, the gap can be several times larger in percentage terms - and for a retirement account, that gap is money you need the market to earn back before you break even.</p>
<h3>Reported silver premiums in 2026</h3>
<table>
<thead><tr><th>Product</th><th>Reported premium over spot</th><th>Source and date</th></tr></thead>
<tbody>
<tr><td>100 oz silver bar</td><td>About -1% to +0.6%; roughly $0.50-$1.50/oz over spot</td><td>findbullionprices (May 2026)</td></tr>
<tr><td>Canadian Silver Maple Leaf (1 oz)</td><td>Monthly averages 4.96%-7.66% in Jan, Mar-Jul 2026; Jul 2026 average 5.69%; spiked to a 12.89% average in Feb 2026</td><td><a href="https://findbullionprices.com/premium-history/2026-1-oz-Silver-Maple-Leaf-Coin/" rel="noopener">findbullionprices premium history</a> (accessed Oct 2026)</td></tr>
<tr><td>American Silver Eagle (1 oz)</td><td>Aug 2026 average 6.87% (range 6.36%-7.90%); about 8.5% in Jul 2026</td><td>findbullionprices</td></tr>
<tr><td>Phone-sales IRA bullion (disclosed)</td><td>10% inside an IRA (American Bullion disclosure)</td><td>Reported by LendEdu</td></tr>
<tr><td>Proof coins (disclosed)</td><td>23% (American Bullion disclosure)</td><td>Reported by LendEdu</td></tr>
<tr><td>Silver coins in an enforcement case</td><td>51% to over 70% (CFTC, Safeguard Metals)</td><td>CFTC; SEC average markup ~64%</td></tr>
</tbody>
</table>
<p class="small"><em>These are the lowest or average online premiums tracked by price-comparison sites unless stated otherwise. Phone-sales IRA dealers usually charge more than the cheapest online dealer. Gold for comparison: Gold Eagles about 3-6%, generic 1 oz gold bar about 2.2% (Oct 2026).</em></p>
<h3>Worked example: what $50,000 buys</h3>
<p>Here is an illustration. You have $50,000 to spend inside your IRA, spot silver is $57.70, and you choose different products. "Price per ounce" is spot times (1 + premium). "Ounces" is $50,000 divided by that price. "Premium paid" is $50,000 minus the spot value of the silver you receive.</p>
<table>
<thead><tr><th>Product (illustration)</th><th>Premium over spot</th><th>Price per oz</th><th>Ounces for $50,000</th><th>Spot value received</th><th>Premium paid</th></tr></thead>
<tbody>
<tr><td>100 oz bars, +$0.50/oz</td><td>0.87%</td><td>$58.20</td><td>859.1</td><td>$49,570</td><td>$430</td></tr>
<tr><td>100 oz bars, +$1.00/oz</td><td>1.73%</td><td>$58.70</td><td>851.8</td><td>$49,148</td><td>$852</td></tr>
<tr><td>Silver Maple Leafs</td><td>5.69%</td><td>$60.98</td><td>819.9</td><td>$47,308</td><td>$2,692</td></tr>
<tr><td>Silver Eagles (Aug 2026 avg)</td><td>6.87%</td><td>$61.66</td><td>810.8</td><td>$46,786</td><td>$3,214</td></tr>
<tr><td>Silver Eagles (Jul 2026)</td><td>8.5%</td><td>$62.60</td><td>798.7</td><td>$46,083</td><td>$3,917</td></tr>
<tr><td>10% markup (phone-dealer disclosure level)</td><td>10%</td><td>$63.47</td><td>787.8</td><td>$45,455</td><td>$4,545</td></tr>
<tr><td>23% markup (proof-coin disclosure level)</td><td>23%</td><td>$70.97</td><td>704.5</td><td>$40,650</td><td>$9,350</td></tr>
<tr><td>64% markup (SEC average in Safeguard case)</td><td>64%</td><td>$94.63</td><td>528.4</td><td>$30,488</td><td>$19,512</td></tr>
</tbody>
</table>
<p class="small"><em>Illustration only, at $57.70 spot. Example of the math for Silver Eagles: $57.70 × 1.0687 = $61.66; $50,000 ÷ $61.66 = 810.8 oz; 810.8 × $57.70 = $46,786; $50,000 - $46,786 = $3,214. Figures are rounded.</em></p>
<p>Look at the spread of outcomes. The same $50,000 buys anywhere from about <strong>528 ounces to 859 ounces</strong>. Choosing 100-oz bars at $1 over spot instead of Silver Eagles at 6.87% saves about <strong>$2,362</strong> on day one ($3,214 - $852) - that is about 41 extra ounces of silver.</p>
<h3>Break-even: how far silver must rise</h3>
<p>The premium is only half of the round trip. When you sell, the dealer usually pays a little <strong>below</strong> spot. Dealers reportedly bid about 1-2% under spot for common sovereign coins. Here is how much silver must rise just to get your money back, ignoring annual fees:</p>
<table>
<thead><tr><th>Product (illustration)</th><th>Buy at</th><th>Sell at (assumed)</th><th>Rise needed to break even</th></tr></thead>
<tbody>
<tr><td>100 oz bar</td><td>Spot + 1.73%</td><td>Spot - 1%</td><td>1.0173 ÷ 0.99 = <strong>+2.8%</strong></td></tr>
<tr><td>Silver Eagle</td><td>Spot + 6.87%</td><td>Spot - 2%</td><td>1.0687 ÷ 0.98 = <strong>+9.1%</strong></td></tr>
<tr><td>Proof coin</td><td>Spot + 23%</td><td>Spot - 5%</td><td>1.23 ÷ 0.95 = <strong>+29.5%</strong></td></tr>
<tr><td>Safeguard-level markup</td><td>Spot + 64%</td><td>Spot - 5%</td><td>1.64 ÷ 0.95 = <strong>+72.6%</strong></td></tr>
</tbody>
</table>
<p class="small"><em>Sell-side assumptions are illustrative. Proof and collector coins can sell back well below these levels; ask for today's written buyback price before you buy.</em></p>
<h3>Why the gap is bigger for silver</h3>
<p>A one-ounce gold coin and a one-ounce silver coin cost roughly similar amounts to mint, package and ship. But the gold coin contains about $4,170 of metal and the silver coin about $57.70. A $4 cost is about 0.1% of the gold coin and about 7% of the silver coin. That simple fact explains why silver coin premiums are higher in percentage terms, why they jump when demand spikes (the Maple Leaf averaged 12.89% in February 2026), and why <strong>large bars are often the most cost-efficient way to hold silver in an IRA</strong>.</p>
<p>Coins still have advantages: they are widely recognized, easy to sell in small amounts and handy for in-kind distributions. The point is to choose on purpose, with the numbers in front of you. Our guide to the <a href="/articles/best-gold-coins-for-ira">best gold coins for an IRA</a> walks through the same trade-offs for gold.</p>`,
  },
  {
    heading: "Storage: silver is heavy and bulky",
    body: `<p>Storage rarely gets much thought in a gold IRA. A six-figure gold position fits in a shoebox. Silver is a different story, and the difference can affect what you pay each year.</p>
<h3>How much does your silver weigh?</h3>
<p>Precious metals are priced in <strong>troy ounces</strong>. A troy ounce is about 31.1 grams - heavier than the everyday (avoirdupois) ounce of about 28.35 grams. So you cannot simply divide troy ounces by 16 to get pounds. One troy ounce is about 0.0686 pounds.</p>
<p>Worked example at $57.70 an ounce:</p>
<ul>
<li>$50,000 ÷ $57.70 = <strong>866.6 troy ounces</strong></li>
<li>866.6 × 31.1035 grams = 26,953 grams, or about <strong>27 kilograms</strong></li>
<li>26,953 ÷ 453.6 grams per pound = about <strong>59 pounds</strong></li>
</ul>
<p>(If you divided 866.6 by 16 you would get about 54 pounds - a common mistake that forgets troy ounces are heavier.)</p>
<table>
<thead><tr><th>Account size</th><th>Silver at $57.70 (troy oz)</th><th>Approx. weight</th><th>Gold at $4,170 (troy oz)</th><th>Approx. weight</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>433</td><td>30 lb</td><td>6.0</td><td>0.4 lb</td></tr>
<tr><td>$50,000</td><td>867</td><td>59 lb</td><td>12.0</td><td>0.8 lb</td></tr>
<tr><td>$100,000</td><td>1,733</td><td>119 lb</td><td>24.0</td><td>1.6 lb</td></tr>
<tr><td>$250,000</td><td>4,333</td><td>297 lb</td><td>60.0</td><td>4.1 lb</td></tr>
</tbody>
</table>
<p class="small"><em>Illustration at Oct 19, 2026 spot prices, before premiums. Coins in tubes and boxes, and bars with packaging, weigh a little more.</em></p>
<p>Silver is also less dense than gold (about 10.5 grams per cubic centimeter vs about 19.3 for gold). Combined with the 72-to-1 price ratio, the same dollar value of silver takes up roughly <strong>130 times the space</strong> of gold (72 × 19.3 ÷ 10.5 ≈ 132). The 867 ounces in our $50,000 example is about 2.6 liters of solid metal - more once it is in coin tubes and boxes.</p>
<h3>Why storage pricing method matters for silver</h3>
<p>Depositories and custodians price storage in a few different ways, and the method matters more for silver than for gold:</p>
<table>
<thead><tr><th>Pricing method</th><th>Example (reported, Oct 2026)</th><th>Good or bad for silver?</th></tr></thead>
<tbody>
<tr><td><strong>Flat fee per account</strong></td><td>Equity Trust $110 non-segregated / $160 segregated; STRATA $115 commingled / $175 segregated; GoldStar $125 commingled</td><td>Usually good: you pay the same regardless of weight or value</td></tr>
<tr><td><strong>Percentage of value</strong></td><td>Brink's about $1.50 per $1,000 (0.15%); Delaware Depository $0.80 per $1,000 commingled ($95 min), $1.60 per $1,000 segregated ($190 min) per one election form</td><td>Fine at small balances; grows if silver rises</td></tr>
<tr><td><strong>Silver-specific or weight-based pricing</strong></td><td>Some providers quote silver separately; Noble Gold's silver IRA reportedly has $250 Texas storage</td><td>Can be costly - ask how silver is priced</td></tr>
</tbody>
</table>
<p>Because silver is bulky, some storage providers price it differently from gold, or charge more for segregated silver. Not every company publishes this, so ask directly: "Is storage a flat fee, a percentage of value, or based on weight or number of items - and is silver priced differently from gold?"</p>
<h3>Storage cost as a share of a silver account</h3>
<table>
<thead><tr><th>Storage option (reported)</th><th>$25,000 account</th><th>$50,000 account</th><th>$100,000 account</th></tr></thead>
<tbody>
<tr><td>Flat $110 (Equity Trust non-segregated)</td><td>$110 (0.44%)</td><td>$110 (0.22%)</td><td>$110 (0.11%)</td></tr>
<tr><td>Flat $160 (Equity Trust segregated)</td><td>$160 (0.64%)</td><td>$160 (0.32%)</td><td>$160 (0.16%)</td></tr>
<tr><td>$0.80 per $1,000, $95 min (Delaware commingled)</td><td>$95 (0.38%)</td><td>$95 (0.19%)</td><td>$95 (0.095%)</td></tr>
<tr><td>$1.60 per $1,000, $190 min (Delaware segregated)</td><td>$190 (0.76%)</td><td>$190 (0.38%)</td><td>$190 (0.19%)</td></tr>
<tr><td>$1.50 per $1,000 (Brink's)</td><td>$37.50 (0.15%)*</td><td>$75 (0.15%)*</td><td>$150 (0.15%)</td></tr>
<tr><td>$250 flat (reported Noble Gold silver Texas storage)</td><td>$250 (1.0%)</td><td>$250 (0.5%)</td><td>$250 (0.25%)</td></tr>
</tbody>
</table>
<p class="small"><em>Illustration. Delaware math: $25,000 × $0.80 ÷ $1,000 = $20, so the $95 minimum applies; $100,000 gives $80, still under the minimum. *Brink's minimum charge, if any, was not in our sources - ask. Depository rates reach you through your custodian and vary by custodian agreement.</em></p>
<p>Two lessons. First, on a small silver account, a flat or minimum storage fee is a meaningful annual cost - 0.4% to 1% a year on $25,000. Second, percentage-of-value pricing looks cheap now but rises with the silver price: if silver doubled, Brink's-style storage on a $100,000 position would double from $150 to $300 a year.</p>
<h3>Segregated or commingled?</h3>
<p>Segregated storage means your specific bars and coins are kept apart; commingled means you are owed the same type and quantity, not the same items. For common bullion like Silver Eagles or 100-oz bars from the same refiner, many investors find commingled storage adequate and cheaper. Segregated storage may make more sense if you hold unusual products or plan to take specific items out later. Either way, the metal must stay with the depository while it is in the IRA - see our article on <a href="/articles/can-you-store-ira-gold-at-home">home storage of IRA metals</a> for why.</p>`,
  },
  {
    heading: "Silver IRA costs: custodian fees, storage, spreads and buyback",
    body: `<p>A silver IRA has the same five layers of cost as a gold IRA. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> covers each in depth; here is the silver-focused summary.</p>
<table>
<thead><tr><th>Cost layer</th><th>Who charges it</th><th>Reported range (Oct 2026)</th><th>Silver-specific note</th></tr></thead>
<tbody>
<tr><td>1. Setup</td><td>Custodian, sometimes dealer</td><td>$0-$75 at custodians; some dealers report ~$230</td><td>Same as gold</td></tr>
<tr><td>2. Annual custodian fee</td><td>Custodian</td><td>$90-$300 flat, or tiered $225-$2,250</td><td>Same as gold</td></tr>
<tr><td>3. Storage</td><td>Depository via custodian</td><td>About $95-$250 flat or minimum, or ~0.08%-0.16% of value</td><td>Ask whether silver is priced differently</td></tr>
<tr><td>4. Purchase premium</td><td>Dealer</td><td>~0-2% on 100 oz bars; ~5-8.5% on popular coins; 10-23% disclosed by some phone dealers; 51-70%+ in enforcement cases</td><td>Larger in percentage terms than gold</td></tr>
<tr><td>5. Exit and buyback</td><td>Dealer and custodian</td><td>Bid ~1-2% under spot on common coins; $10-$300 in custodian transaction fees</td><td>Shipping heavy silver out in kind costs more</td></tr>
</tbody>
</table>
<h3>Custodian annual fees</h3>
<p>Custodians charge the same whether your IRA holds gold or silver. Here is what we found:</p>
<table>
<thead><tr><th>Custodian</th><th>Setup</th><th>Annual fee</th><th>Storage (if bundled)</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Equity Trust</td><td>$50 online / $75 paper</td><td>Tiered: $225 under $15k; $320 at $15k-$24,999; $350 at $25k-$49,999; $425 at $50k-$99,999; $500 at $100k-$199,999; rising to $2,250 at $2M+</td><td>$110 non-seg / $160 seg</td><td>Official fee schedule, Rev. 11/06/2025</td></tr>
<tr><td>STRATA Trust</td><td>$50 (waived online)</td><td>$150 flat precious metals tier (from Sep 1, 2026)</td><td>$115 commingled / $175 seg</td><td>Third-party review</td></tr>
<tr><td>GoldStar Trust</td><td>$50</td><td>$90 flat (per reviews, 12/2025)</td><td>$125 commingled</td><td>Third-party review</td></tr>
<tr><td>New Direction</td><td>$30</td><td>$220 flat</td><td>Billed by depository</td><td>Company fee page</td></tr>
<tr><td>Advanta IRA</td><td>$50</td><td>$250 recordkeeping</td><td>Separate</td><td>Company fee schedule (Rev 05/24)</td></tr>
<tr><td>uDirect IRA</td><td>$50</td><td>$275</td><td>Separate</td><td>Company fee page</td></tr>
<tr><td>Preferred Trust</td><td>$50 (third-party)</td><td>$300 metals-only IRA</td><td>Separate</td><td>Company fee schedule</td></tr>
<tr><td>Madison Trust</td><td>$50</td><td>~$556/yr ($139/quarter first asset)</td><td>Separate</td><td>Company fees FAQ</td></tr>
</tbody>
</table>
<p class="small"><em>Reported figures as of Oct 2026; third-party figures often conflict. Confirm on each custodian's current fee schedule.</em></p>
<p>Notice the Equity Trust tiers. Many review sites quote "$75-$225 a year", but under the official schedule a silver IRA worth $50,000-$99,999 pays $425 a year in account fees before storage. That is not unusual for tiered custodians - it is just often missing from sales conversations. Our <a href="/articles/gold-ira-custodians">custodian comparison</a> goes further.</p>
<h3>Transaction and exit fees</h3>
<p>Under Equity Trust's schedule, for example: metals liquidation is $10 per asset (max $30); in-kind transfer or distribution $50 per transaction; coin shipping at cost plus $10 ($50 minimum); wire $30; full termination $250. Other custodians reportedly charge $40-$200 per trade or sale. Shipping heavy silver to your home in a distribution costs more than shipping a few gold coins, because carriers charge by weight and insurance.</p>
<h3>Buyback: the hidden second spread</h3>
<p>When you sell, the dealer pays its <strong>bid</strong> price. For common sovereign coins, dealers reportedly bid about 1-2% under spot; other estimates put the bid at 96-99% of spot. For proof and collectible coins the bid can be far lower relative to what you paid. None of the four companies reviewed on our site publishes its product spreads, so the only way to know is to ask for <strong>today's buy and sell prices in writing</strong> for the exact products you are considering.</p>
<p>To see how all of these layers add up over time, try our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> - it works for silver too if you enter a silver-appropriate premium - or read the worked examples in the next section.</p>`,
  },
];
