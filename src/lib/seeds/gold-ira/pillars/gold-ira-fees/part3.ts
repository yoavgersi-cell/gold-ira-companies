import type { ArticleSection } from "@/lib/config";

// Part 3 of "Gold IRA Fees & Costs (2026)".
// Buyback spreads and exit costs, transaction/termination fees, promotions
// ("fees waived", "free silver") and the worked total-cost tables.
// Model (illustration): low-cost = $50 setup, 3% spread, $260/yr, 1.5% buyback
// discount; high-cost = $250 setup, 15% spread, $500/yr, 2% buyback discount;
// both +$280 exit fees. Spread treated as % of amount invested (matches the
// /gold-ira-fee-calculator). Gold price held flat.

export const part3: ArticleSection[] = [
  {
    heading: "Buyback spreads and exit costs",
    body: `<p>Every gold IRA ends one of three ways: you <strong>sell the metal</strong> for cash inside the IRA, you <strong>take the metal out</strong> as an in-kind distribution, or you <strong>transfer</strong> the account to another custodian. Each has a cost, and the biggest is usually the price the buyer pays you for your metal.</p>
<h3>The bid, the ask and the round trip</h3>
<p>A dealer quotes two prices: the <strong>ask</strong> (what you pay to buy) and the <strong>bid</strong> (what it pays you when you sell). The gap between them is the <strong>buy-sell spread</strong>, and it is the true cost of a round trip.</p>
<ul>
<li>Dealers typically bid about <strong>1-2% under spot</strong> for common sovereign coins such as Gold Eagles and Maple Leafs. Other estimates put the bid at <strong>96-99% of spot</strong>.</li>
<li>A full round trip on a Gold Eagle - buying it and selling it back - costs roughly <strong>4-8%</strong> at retail dealers, according to GoldSilver (June 2026).</li>
<li>For proof and collectible coins, the round trip can be far wider, because buyers often pay little more than metal value for a coin you bought at a large premium.</li>
</ul>
<h3>Illustration: the round trip on 10 Gold Eagles</h3>
<table>
<thead><tr><th>Step (illustration, spot $4,170 unchanged)</th><th>Math</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Buy 10 Eagles at 4.2% over spot</td><td>10 x $4,345.14</td><td>$43,451.40</td></tr>
<tr><td>Sell 10 Eagles back at 1.5% under spot</td><td>10 x ($4,170 x 0.985) = 10 x $4,107.45</td><td>$41,074.50</td></tr>
<tr><td>Round-trip cost</td><td>$43,451.40 - $41,074.50</td><td><strong>$2,376.90 (about 5.5% of what you paid)</strong></td></tr>
</tbody>
</table>
<p>That 5.5% sits right in the middle of the 4-8% retail range. Now repeat the exercise with a proof coin bought at a 23% markup and sold back at 1.5% under spot: you pay $5,129.10 per coin and get back $4,107.45 - a loss of $1,021.65 per coin, or about <strong>19.9%</strong>, even though the gold price did not move.</p>
<h3>"Buyback guarantees" and "no-fee buybacks"</h3>
<p>Many gold IRA companies advertise a buyback program. Read the wording carefully:</p>
<ul>
<li><strong>"No buyback fee" or "no liquidation fee"</strong> means the company will not charge a separate fee when it buys your metal. It does <strong>not</strong> tell you the price it will pay. A company can charge no fee and still bid well below spot.</li>
<li><strong>"Highest buyback price"</strong> or <strong>"buyback commitment"</strong> are usually pledges, not contracts. American Hartford Gold, for example, reportedly says it cannot legally guarantee repurchase. Goldco's "highest buyback" pledge is likewise reported as a pledge rather than a contract.</li>
<li><strong>A dealer's buyback price is not your only option.</strong> Your custodian can sell your metal through another dealer. You do not have to sell back to the company that sold it to you.</li>
</ul>
<p>One third-party source (Fortune) reported that Augusta Precious Metals buys back in practice at about 5% under its own selling price. Whatever the company, ask for today's buyback price on the exact products you are being offered, and compare it with the sell price. That single number tells you more about your real cost than any brochure.</p>
<h3>Custodian fees when you leave</h3>
<p>On top of the dealer's bid, your custodian charges for the paperwork of selling, distributing or closing. On Equity Trust's published schedule, that is a <strong>$10 per asset</strong> metals liquidation fee (maximum $30), a <strong>$250 full termination fee</strong> and a <strong>$30 wire</strong>. We list these fees across custodians in the next section.</p>
<p>In our worked examples, we use <strong>$280 in exit fees</strong> ($30 liquidation + $250 termination, from the Equity Trust schedule) for a full close-out. That is a realistic figure for closing an account completely. If you only sell some metal to cover a required minimum distribution, you would typically pay a smaller liquidation fee and no termination fee.</p>`,
  },
  {
    heading: "Transaction, wire, termination and in-kind fees",
    body: `<p>These are the small fees that appear on a custodian's schedule and rarely in a dealer's sales pitch. None of them is large on its own, but they add up - especially if you take required minimum distributions (RMDs) in metal, own several different products, or move your account.</p>
<h3>Custodian transaction fees side by side</h3>
<table>
<thead><tr><th>Fee</th><th>Equity Trust (official)</th><th>Others (reported)</th></tr></thead>
<tbody>
<tr><td>Metals purchase or sale</td><td>Liquidation $10 per asset, max $30</td><td>STRATA $40 per trade + $35 depository handling; Kingdom $40; Preferred $50 purchase / $200 sale; New Direction $130 per trade (third-party); uDirect $50 liquidation; GoldStar reportedly none</td></tr>
<tr><td>Wire transfer</td><td>$30</td><td>Preferred $30</td></tr>
<tr><td>Full account termination</td><td>$250</td><td>Kingdom $300 (its FAQ also says $100 per asset); Madison $225</td></tr>
<tr><td>Partial termination</td><td>$100 per asset</td><td>Varies</td></tr>
<tr><td>In-kind transfer or distribution</td><td>$50 per transaction</td><td>Preferred $200; uDirect $75</td></tr>
<tr><td>Distribution / re-registration</td><td>$100 per asset</td><td>Varies</td></tr>
<tr><td>Coin shipping and handling</td><td>At cost + $10 ($50 minimum)</td><td>Varies; ask for a quote</td></tr>
<tr><td>Late fee</td><td>$50</td><td>Varies</td></tr>
<tr><td>Paper statements</td><td>$60 a year</td><td>Many custodians charge for paper; choose e-statements</td></tr>
</tbody>
</table>
<h3>What it costs to take your gold out in kind</h3>
<p>An <strong>in-kind distribution</strong> means the custodian ships the actual coins or bars to you. It counts as a distribution: in a traditional IRA, you owe income tax on the fair market value of the metal on the day it is distributed, and if you are under 59½ a 10% additional tax may also apply. Our guide to <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a> explains how that works.</p>
<p>Illustration of the fees, using Equity Trust's published schedule, for one in-kind distribution of 5 Gold Eagles:</p>
<table>
<thead><tr><th>Fee (illustration)</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>In-kind distribution fee</td><td>$50</td></tr>
<tr><td>Distribution / re-registration fee (1 asset type)</td><td>$100</td></tr>
<tr><td>Shipping and handling (at cost + $10, $50 minimum)</td><td>$50 or more, depending on insured shipping cost</td></tr>
<tr><td><strong>Total custodian fees</strong></td><td><strong>About $200 or more</strong></td></tr>
</tbody>
</table>
<p>If you hold three different products and take some of each, the per-asset fee applies three times. That is a good reason to keep your holdings simple.</p>
<h3>RMDs: the fee most people forget to plan for</h3>
<p>Required minimum distributions start at age 73 if you were born from 1951 to 1959, and at 75 if you were born in 1960 or later. Roth IRA owners do not take RMDs. In a traditional gold IRA, each year's RMD means either selling some metal (liquidation fee plus the dealer's bid discount) or distributing some metal in kind (distribution and shipping fees). Over 10 or 15 years of RMDs, those repeated small fees can add up to more than $1,000.</p>
<p>One way some people reduce the friction is to keep a small cash balance in the IRA, or to take the RMD amount from a different traditional IRA (the IRS lets you total IRA RMDs and take them from any of your IRAs - confirm the details with a tax professional). Planning this before you buy can save both fees and forced sales at a bad time.</p>
<h3>Transferring to another custodian</h3>
<p>If you are unhappy with your custodian, you can transfer the account, and the metal can often move between depositories without being sold. Expect a termination fee at the old custodian (about $225-$300 at the custodians in our table), possibly a depository handling or shipping charge, and a setup fee at the new one. A transfer that avoids selling also avoids the dealer's buyback spread - a much bigger saving.</p>`,
  },
  {
    heading: "\"Fees waived\" and \"free silver\" promotions: what they really cost",
    body: `<p>Gold IRA advertising is full of offers: <strong>"no fees for up to 10 years"</strong>, <strong>"up to $25,000 in free silver"</strong>, <strong>"up to 10% back in bonus silver"</strong>. They sound generous. Here is how to judge them.</p>
<h3>Who pays for the "free" part?</h3>
<p>A gold IRA company earns most of its revenue from the spread on the metal it sells. When it pays your custodian fees or hands you silver, that money has to come from somewhere - usually from the price you pay for everything else. That is not automatically a bad deal. It is simply a trade-off, and you can only judge it if you know the spread.</p>
<h3>Worked example: the "free silver" offer</h3>
<p>Illustration only - these are not quotes from any named company. Imagine two offers for a $100,000 rollover:</p>
<table>
<thead><tr><th></th><th>Dealer A: no promotion</th><th>Dealer B: "10% free silver"</th></tr></thead>
<tbody>
<tr><td>Spread on the gold</td><td>4%</td><td>18%</td></tr>
<tr><td>Gold's value at spot</td><td>$100,000 x (1 - 0.04) = $96,000</td><td>$100,000 x (1 - 0.18) = $82,000</td></tr>
<tr><td>"Free" silver (priced at the dealer's retail price)</td><td>$0</td><td>$10,000</td></tr>
<tr><td>Silver's value at spot (if its price carries a 15% spread)</td><td>$0</td><td>$10,000 x (1 - 0.15) = $8,500</td></tr>
<tr><td><strong>Total metal value at spot</strong></td><td><strong>$96,000</strong></td><td><strong>$82,000 + $8,500 = $90,500</strong></td></tr>
</tbody>
</table>
<p>In this illustration, the "free" silver leaves you <strong>$5,500 worse off</strong> on day one ($96,000 - $90,500). The bonus is real metal, but it was paid for by a higher spread on the gold. Real offers may be better or worse - the point is that you cannot tell without knowing both spreads.</p>
<h3>Worked example: "fees waived for 3 years"</h3>
<p>Now take a fee waiver. Suppose your yearly custodian and storage fees would be $260. Waiving them for three years saves:</p>
<p><strong>$260 x 3 = $780.</strong></p>
<p>Compare that with the spread. On a $100,000 purchase, each extra percentage point of markup costs $1,000. So a 3-year fee waiver is worth less than a single extra point of spread. If the company offering the waiver charges even 1% more than a competitor, the "free" years cost you money.</p>
<table>
<thead><tr><th>Account size</th><th>Value of 3 years waived ($260/yr)</th><th>Cost of 1 extra point of spread</th><th>Cost of 5 extra points</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>$780</td><td>$250</td><td>$1,250</td></tr>
<tr><td>$50,000</td><td>$780</td><td>$500</td><td>$2,500</td></tr>
<tr><td>$100,000</td><td>$780</td><td>$1,000</td><td>$5,000</td></tr>
<tr><td>$250,000</td><td>$780</td><td>$2,500</td><td>$12,500</td></tr>
</tbody>
</table>
<p>For a $25,000 account, a fee waiver can genuinely matter. For a $250,000 account, it is small change next to the spread.</p>
<h3>Waivers that come with strings</h3>
<p>Read the conditions. Reported examples as of October 2026:</p>
<ul>
<li><strong>American Hartford Gold:</strong> storage reportedly waived for 1 year on accounts of $50,000 or more, and for 3 years at $100,000 or more. That waives storage only - at around $100-$150 a year, that is worth roughly $100-$450.</li>
<li><strong>Goldco:</strong> up to 3 years of fee waivers "for eligible accounts", per third-party reports.</li>
<li><strong>Augusta Precious Metals:</strong> one source reported fee waivers of "up to 10 years", disclosed only on a call.</li>
</ul>
<p>Ask three questions about any waiver: Which fees exactly? For how many years? And what happens if I transfer or sell before the period ends - is there a clawback?</p>
<h3>What to do with a promotion</h3>
<p>Do not refuse a promotion just because it is a promotion. Instead, ask for the spread on every product in the order, then compare the <strong>total metal value at spot</strong> you receive for your money - including any bonus metal - across two or three companies. The offer that gives you the most metal value per dollar, after fees, wins. Our <a href="/gold-ira-fee-calculator">fee calculator</a> makes that comparison quick.</p>`,
  },
  {
    heading: "Worked examples: the true 1-, 5- and 10-year cost",
    body: `<p>This is the heart of the guide. Below we total every cost layer for four account sizes over three holding periods, under two scenarios. These are <strong>illustrations</strong> to show how costs behave, not quotes or predictions.</p>
<h3>The two scenarios</h3>
<table>
<thead><tr><th>Assumption (illustration)</th><th>Low-cost scenario</th><th>High-cost scenario</th></tr></thead>
<tbody>
<tr><td>Setup fee</td><td>$50</td><td>$250</td></tr>
<tr><td>Dealer spread when buying</td><td>3% (common bullion, competitive price)</td><td>15% (phone-sales markup or premium coins)</td></tr>
<tr><td>Yearly admin + storage</td><td>$260 (e.g., $150 flat admin + $110 commingled storage)</td><td>$500 (e.g., higher admin + segregated storage)</td></tr>
<tr><td>Buyback discount when selling</td><td>1.5% under spot</td><td>2% under spot</td></tr>
<tr><td>Exit fees (liquidation + termination)</td><td>$280</td><td>$280</td></tr>
</tbody>
</table>
<p><strong>Other assumptions:</strong> the gold price stays flat (so we measure cost alone, not gains or losses); yearly fees are paid every year including year 1; the spread is treated as a share of the money you spend, so a 3% spread on $25,000 is $750 (this matches how our <a href="/gold-ira-fee-calculator">fee calculator</a> works). The high-cost yearly figure of $500 is conservative - on a tiered schedule such as Equity Trust's, a $250,000 account with segregated storage would pay $860 a year.</p>
<h3>Step-by-step math: $100,000, low-cost, 10 years</h3>
<ol>
<li><strong>Spread:</strong> $100,000 x 3% = $3,000. Metal value at spot: $97,000.</li>
<li><strong>Setup + yearly fees:</strong> $50 + ($260 x 10) = $2,650.</li>
<li><strong>Buyback discount:</strong> $97,000 x 1.5% = $1,455.</li>
<li><strong>Exit fees:</strong> $280.</li>
<li><strong>Total:</strong> $3,000 + $2,650 + $1,455 + $280 = <strong>$7,385</strong>, or 7.4% of $100,000.</li>
</ol>
<h3>Step-by-step math: $100,000, high-cost, 10 years</h3>
<ol>
<li><strong>Spread:</strong> $100,000 x 15% = $15,000. Metal value at spot: $85,000.</li>
<li><strong>Setup + yearly fees:</strong> $250 + ($500 x 10) = $5,250.</li>
<li><strong>Buyback discount:</strong> $85,000 x 2% = $1,700.</li>
<li><strong>Exit fees:</strong> $280.</li>
<li><strong>Total:</strong> $15,000 + $5,250 + $1,700 + $280 = <strong>$22,230</strong>, or 22.2% of $100,000.</li>
</ol>
<h3>Low-cost scenario: total cost if you sell at the end</h3>
<table>
<thead><tr><th>Invested</th><th>Spread (3%)</th><th>Buyback (1.5%) + exit fees</th><th>After 1 year</th><th>After 5 years</th><th>After 10 years</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>$750</td><td>$364 + $280 = $644</td><td>$1,704 (6.8%)</td><td>$2,744 (11.0%)</td><td>$4,044 (16.2%)</td></tr>
<tr><td>$50,000</td><td>$1,500</td><td>$728 + $280 = $1,008</td><td>$2,818 (5.6%)</td><td>$3,858 (7.7%)</td><td>$5,158 (10.3%)</td></tr>
<tr><td>$100,000</td><td>$3,000</td><td>$1,455 + $280 = $1,735</td><td>$5,045 (5.0%)</td><td>$6,085 (6.1%)</td><td>$7,385 (7.4%)</td></tr>
<tr><td>$250,000</td><td>$7,500</td><td>$3,638 + $280 = $3,918</td><td>$11,728 (4.7%)</td><td>$12,768 (5.1%)</td><td>$14,068 (5.6%)</td></tr>
</tbody>
</table>
<p>Setup + yearly fees in this scenario are $310 after 1 year, $1,350 after 5 years and $2,650 after 10 years, for every account size. Each total is spread + fees + buyback + exit fees. Example: $25,000 after 5 years = $750 + $1,350 + $364 + $280 = $2,744.</p>
<h3>High-cost scenario: total cost if you sell at the end</h3>
<table>
<thead><tr><th>Invested</th><th>Spread (15%)</th><th>Buyback (2%) + exit fees</th><th>After 1 year</th><th>After 5 years</th><th>After 10 years</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>$3,750</td><td>$425 + $280 = $705</td><td>$5,205 (20.8%)</td><td>$7,205 (28.8%)</td><td>$9,705 (38.8%)</td></tr>
<tr><td>$50,000</td><td>$7,500</td><td>$850 + $280 = $1,130</td><td>$9,380 (18.8%)</td><td>$11,380 (22.8%)</td><td>$13,880 (27.8%)</td></tr>
<tr><td>$100,000</td><td>$15,000</td><td>$1,700 + $280 = $1,980</td><td>$17,730 (17.7%)</td><td>$19,730 (19.7%)</td><td>$22,230 (22.2%)</td></tr>
<tr><td>$250,000</td><td>$37,500</td><td>$4,250 + $280 = $4,530</td><td>$42,780 (17.1%)</td><td>$44,780 (17.9%)</td><td>$47,280 (18.9%)</td></tr>
</tbody>
</table>
<p>Setup + yearly fees in this scenario are $750 after 1 year, $2,750 after 5 years and $5,250 after 10 years. Example: $50,000 after 10 years = $7,500 + $5,250 + $850 + $280 = $13,880.</p>
<h3>The gap between the two scenarios</h3>
<table>
<thead><tr><th>Invested</th><th>Low-cost, 10 years</th><th>High-cost, 10 years</th><th>Extra cost of the high-cost route</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>$4,044</td><td>$9,705</td><td>$5,661</td></tr>
<tr><td>$50,000</td><td>$5,158</td><td>$13,880</td><td>$8,722</td></tr>
<tr><td>$100,000</td><td>$7,385</td><td>$22,230</td><td>$14,845</td></tr>
<tr><td>$250,000</td><td>$14,068</td><td>$47,280</td><td>$33,212</td></tr>
</tbody>
</table>
<h3>What the tables teach</h3>
<ul>
<li><strong>Small accounts suffer most from yearly fees.</strong> At $25,000, fees alone take 10.6% over 10 years in the low-cost case ($2,650 / $25,000). Gold IRAs under about $25,000 are hard to justify on cost unless you are confident about a long hold and a low spread.</li>
<li><strong>Large accounts suffer most from the spread.</strong> At $250,000, the 15% spread ($37,500) is more than seven times the 10 years of yearly fees ($5,250).</li>
<li><strong>Costs are front-loaded.</strong> In both scenarios, most of the cost lands in year 1. Selling after a short hold is expensive.</li>
<li><strong>The spread is the lever.</strong> Moving from a 15% to a 3% spread on $100,000 saves $12,000 on day one - more than the high-cost scenario's 10 years of fees ($5,250) twice over.</li>
</ul>
<p>Your own numbers will differ. Try your amount, markup and holding period in the <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>, and see the next section for how much gold has to rise to cover these costs.</p>`,
  },
];
