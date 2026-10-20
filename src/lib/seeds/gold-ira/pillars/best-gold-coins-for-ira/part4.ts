import type { ArticleSection } from "@/lib/config";

// Part 4 of "Best Gold Coins and Bars for an IRA (2026)".
// Silver/platinum/palladium options, the master comparison table, worked
// examples ($50,000 at 2%/5%/25% premiums; round-trip costs), coins vs bars,
// fractional coins and RMD planning, and how dealers price metal.
// Spot $4,170 (Kitco, Oct 19, 2026); silver $57.70 same day.

export const part4: ArticleSection[] = [
  {
    heading: "Silver, platinum and palladium options",
    body: `<p>This guide is about gold, but many IRA buyers hold some silver or platinum as well. The same six tests apply. Here is a brief look at the main options; our <a href="/articles/silver-ira">silver IRA guide</a> covers silver in depth.</p>
<table>
<thead><tr><th>Product</th><th>Fineness / rule</th><th>Typical 2026 premium</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>American Silver Eagle (1 oz)</td><td>.999; named in the statute</td><td>August 2026 average 6.87% (range 6.36-7.90%); about 8.5% in July (findbullionprices)</td><td>The default silver IRA coin; $1 face value</td></tr>
<tr><td>Canadian Silver Maple Leaf (1 oz)</td><td>.9999; meets the .999 silver standard</td><td>No figure in our research; usually quoted below Silver Eagles - get a written quote</td><td>Royal Canadian Mint; security features like the gold Maple</td></tr>
<tr><td>100 oz silver bar</td><td>.999 from a recognized refiner</td><td>About -1% to +0.6%, or roughly $0.50-$1.50 an ounce over spot (May 2026, findbullionprices)</td><td>Lowest premium for silver, but bulky and indivisible</td></tr>
<tr><td>American Platinum Eagle (1 oz)</td><td>.9995; named in the statute</td><td>July 2026 average 9.21%; February 2026 average 13.35% (findbullionprices)</td><td>Thin market; premiums swing more than gold</td></tr>
<tr><td>Palladium (Palladium Eagle, bars)</td><td>.9995</td><td>No figure in our research</td><td>Very thin retail market; few IRA buyers hold it</td></tr>
</tbody>
</table>
<h3>Silver in numbers</h3>
<p>With silver at about $57.70 an ounce on October 19, 2026:</p>
<ul>
<li>A Silver Eagle at the August 2026 average premium of 6.87% costs about $57.70 x 1.0687 = <strong>$61.66</strong>. $10,000 buys about 162 coins ($10,000 / $61.66).</li>
<li>A 100 oz bar at about $1 over spot costs about $58.70 an ounce, or <strong>$5,870</strong> for the bar. At that price, $10,000 would buy about 170 ounces of silver - though in practice you buy whole bars, so you would hold one bar and the rest in coins or cash.</li>
</ul>
<p>Two things set silver apart from gold in an IRA. First, premiums on silver coins are higher in percentage terms because the metal is cheaper per ounce. Second, silver is bulky: at a gold-to-silver ratio of about 72 to 1, the same dollar amount of silver weighs roughly 72 times as much as gold. That makes silver more sensitive to storage costs at depositories that price by weight or volume, though many IRA storage plans price by value.</p>
<p>Silver is also more volatile. It reached a reported record of about $121.62 on January 29, 2026 (a figure we could not independently verify) and was about $57.70 by October 19, 2026 - a fall of more than half.</p>
<h3>Platinum and palladium</h3>
<p>The Platinum Eagle is eligible by statute, and platinum and palladium bullion must be at least .9995 fine. Their retail markets are much smaller than gold's, which is why the Platinum Eagle's average premium was about 9.21% in July 2026 even at the lowest dealers, and 13.35% in February. For most IRA buyers these metals are an optional extra, not a core holding.</p>`,
  },
  {
    heading: "Master comparison table: every IRA gold product side by side",
    body: `<p>Here is everything from the product profiles in one place. Premiums are lowest-dealer or large-dealer retail figures from 2026 with the date shown; phone-sales IRA dealers often charge more. Always get a written quote.</p>
<table>
<thead><tr><th>Product</th><th>Fineness</th><th>IRA eligible?</th><th>Typical 2026 premium</th><th>Resale / liquidity</th><th>Best use</th></tr></thead>
<tbody>
<tr><td>American Gold Eagle 1 oz</td><td>.9167</td><td>Yes (by statute)</td><td>3-6%; Costco +4.2% (Oct 2026); random year ~0.7% at cheapest dealer</td><td>Excellent</td><td>Core holding</td></tr>
<tr><td>American Gold Buffalo 1 oz</td><td>.9999</td><td>Yes</td><td>5.98% (Oct 9, 2026); ~4.3% elsewhere</td><td>Excellent</td><td>Core holding if priced near Eagles</td></tr>
<tr><td>Canadian Gold Maple Leaf 1 oz</td><td>.9999</td><td>Yes</td><td>3.51% (Oct 9, 2026)</td><td>Excellent</td><td>Core holding; often best value</td></tr>
<tr><td>Austrian Philharmonic 1 oz</td><td>.9999</td><td>Yes</td><td>~2.7% (Jul 2026 avg; search snapshot)</td><td>Very good; fewer US dealers</td><td>Value alternative</td></tr>
<tr><td>British Britannia 1 oz (2013+)</td><td>.9999</td><td>Yes (pre-2013: No)</td><td>Uncertain; ~1.8-2.1% cheapest-dealer snapshots, 4-7% per one dealer guide</td><td>Good</td><td>Only with confirmed date and price</td></tr>
<tr><td>Australian Kangaroo 1 oz</td><td>.9999</td><td>Yes</td><td>Uncertain; ~2.1% cheapest, ~3.3% average (undated snapshot)</td><td>Good</td><td>Value alternative at bullion price</td></tr>
<tr><td>South African Krugerrand</td><td>.9167</td><td><strong>No</strong></td><td>n/a</td><td>Excellent outside IRAs</td><td>Non-IRA money only</td></tr>
<tr><td>1 oz bar (generic)</td><td>.999-.9999</td><td>Yes, if refiner accepted</td><td>2.17% (Oct 9, 2026)</td><td>Good</td><td>Low-cost flexible holding</td></tr>
<tr><td>1 oz bar (PAMP, Valcambi)</td><td>.9999</td><td>Yes</td><td>3-5%</td><td>Very good</td><td>Flexible holding with easy resale</td></tr>
<tr><td>10 oz bar</td><td>.999-.9999</td><td>Yes, if refiner accepted</td><td>1.83% (Oct 9, 2026)</td><td>Good</td><td>Low-cost bulk</td></tr>
<tr><td>Kilo bar (~32.15 oz)</td><td>.9999</td><td>Yes, if refiner accepted</td><td>1-3%</td><td>Fair; indivisible</td><td>Large accounts only</td></tr>
<tr><td>Fractional coins (1/10-1/2 oz)</td><td>As 1 oz version</td><td>Yes</td><td>1/10 Eagle 9.98% (Jul 2026); 1/2 oz Kangaroo ~6.3% (snapshot)</td><td>Very good</td><td>Small slice for RMDs</td></tr>
<tr><td>Proof Gold Eagle</td><td>.9167</td><td>Generally yes</td><td>23% spread disclosed by one dealer; possibly ~46% over melt at Mint issue price (unverified)</td><td>Weaker; collector market</td><td>Avoid in an IRA</td></tr>
<tr><td>"IRA-exclusive" / semi-numismatic</td><td>Varies</td><td>Sometimes</td><td>20-130% in disclosures and enforcement cases</td><td>Poor</td><td>Avoid</td></tr>
</tbody>
</table>
<p>The pattern is clear. The <strong>top five or six rows</strong> - major 1 oz government coins and bars from good refiners - are where you get the most gold for your money with the fewest resale headaches. The bottom rows are where IRA buyers lose money.</p>`,
  },
  {
    heading: "Worked examples: what $50,000 buys at 2%, 5% and 25% premiums",
    body: `<p>Premiums sound small when quoted as percentages. In dollars and ounces they are not. Here is what a $50,000 purchase buys at three premium levels, using spot gold of $4,170 an ounce (October 19, 2026):</p>
<ul>
<li><strong>2%</strong> - a competitive price on 1 oz bars or Maple Leafs.</li>
<li><strong>5%</strong> - a typical retail price on Gold Eagles or Buffalos.</li>
<li><strong>25%</strong> - a typical proof or "premium coin" price, and still well below the worst enforcement cases.</li>
</ul>
<h3>Example 1: ounces bought with $50,000</h3>
<table>
<thead><tr><th></th><th>2% premium</th><th>5% premium</th><th>25% premium</th></tr></thead>
<tbody>
<tr><td>Price per ounce</td><td>$4,170 x 1.02 = $4,253.40</td><td>$4,170 x 1.05 = $4,378.50</td><td>$4,170 x 1.25 = $5,212.50</td></tr>
<tr><td>Ounces bought</td><td>$50,000 / $4,253.40 = 11.76 oz</td><td>$50,000 / $4,378.50 = 11.42 oz</td><td>$50,000 / $5,212.50 = 9.59 oz</td></tr>
<tr><td>Metal value at spot</td><td>$49,019.61</td><td>$47,619.05</td><td>$40,000.00</td></tr>
<tr><td>Lost to premium on day one</td><td>$980.39</td><td>$2,380.95</td><td>$10,000.00</td></tr>
<tr><td>Whole 1 oz coins (cash left over)</td><td>11 coins ($3,212.60 left)</td><td>11 coins ($1,836.50 left)</td><td>9 coins ($3,087.50 left)</td></tr>
</tbody>
</table>
<p>Notice that a 25% premium does not cost you 25% of your money - it costs you 20%. That is because the premium is charged on the metal value, not on your total. The formula is: <strong>share of your money lost = premium / (1 + premium)</strong>. For 25%: 0.25 / 1.25 = 20%. For 5%: 0.05 / 1.05 = 4.76%. For 2%: 0.02 / 1.02 = 1.96%.</p>
<p>In real orders you buy whole coins, so leftover cash usually stays in the IRA as cash or goes toward a smaller piece. The ounce figures above show the value comparison on an equal footing.</p>
<h3>Example 2: what you get back if you sell straight away</h3>
<p>Now suppose you sold everything the same day, at an unchanged spot price. We assume a dealer bid of 1% under spot for bullion (the low end of the 1-2% range), and a bid of spot (melt value) for the proof coins. That second figure is an assumption: proof bids vary and can be a bit above or below melt.</p>
<table>
<thead><tr><th></th><th>Bullion at 2%</th><th>Bullion at 5%</th><th>Proof at 25%</th></tr></thead>
<tbody>
<tr><td>Sale value</td><td>$49,019.61 x 0.99 = $48,529.41</td><td>$47,619.05 x 0.99 = $47,142.86</td><td>$40,000.00 x 1.00 = $40,000.00</td></tr>
<tr><td>Round-trip loss</td><td>$1,470.59</td><td>$2,857.14</td><td>$10,000.00</td></tr>
<tr><td>Round-trip loss as % of $50,000</td><td>2.94%</td><td>5.71%</td><td>20.00%</td></tr>
<tr><td>Gold rise needed just to break even</td><td>1.02 / 0.99 = +3.03% (to $4,296)</td><td>1.05 / 0.99 = +6.06% (to $4,423)</td><td>1.25 / 1.00 = +25% (to $5,212.50)</td></tr>
</tbody>
</table>
<h3>Example 3: round trips for bullion versus proof</h3>
<p>The research puts the typical retail round trip on a Gold Eagle at about <strong>4-8%</strong> (GoldSilver, June 2026). Here is how different buy and sell levels compare on $50,000:</p>
<table>
<thead><tr><th>Scenario</th><th>Buy premium</th><th>Sell price vs spot</th><th>Round-trip cost</th><th>On $50,000</th></tr></thead>
<tbody>
<tr><td>Low-cost bullion</td><td>+2%</td><td>-1%</td><td>(1.02 - 0.99) / 1.02 = 2.94%</td><td>$1,470.59</td></tr>
<tr><td>Typical retail Eagle</td><td>+4%</td><td>-2%</td><td>(1.04 - 0.98) / 1.04 = 5.77%</td><td>$2,884.62</td></tr>
<tr><td>Higher retail Eagle</td><td>+6%</td><td>-2%</td><td>(1.06 - 0.98) / 1.06 = 7.55%</td><td>$3,773.58</td></tr>
<tr><td>Proof, sold a little over melt (assumed)</td><td>+30%</td><td>+5%</td><td>(1.30 - 1.05) / 1.30 = 19.23%</td><td>$9,615.38</td></tr>
<tr><td>Proof at ~46% over melt, sold at melt (assumed)</td><td>+46%</td><td>0%</td><td>(1.46 - 1.00) / 1.46 = 31.51%</td><td>$15,753.42</td></tr>
</tbody>
</table>
<p>The proof rows are illustrations, not quotes. Their purpose is to show how a big buy premium dominates everything else. Even if a proof coin sells back above melt, the round trip is several times that of bullion. To cover the 31.51% round trip in the last row, gold would have to rise 46% from where you bought - from $4,170 to about $6,088 - just for you to get your money back.</p>
<p>For comparison, a whole year of custodian and storage fees at a flat-fee custodian is roughly $175-$300. Choosing proof coins over bullion on a $50,000 purchase can cost the equivalent of decades of those fees. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> covers the yearly costs, and the <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> lets you add premiums and fees together for your own numbers.</p>`,
  },
  {
    heading: "Coins vs bars in an IRA: pros and cons",
    body: `<p>Both coins and bars are eligible, and both are held the same way. The choice comes down to cost, flexibility and how you expect to leave the IRA one day.</p>
<table>
<thead><tr><th>Factor</th><th>Government 1 oz coins</th><th>Bars (1 oz to kilo)</th></tr></thead>
<tbody>
<tr><td>Premium over spot</td><td>About 3-6% (Eagle); 3.51% (Maple Leaf, Oct 9, 2026)</td><td>2.17% (1 oz generic) down to 1.83% (10 oz) and 1-3% (kilo)</td></tr>
<tr><td>Authenticity</td><td>Government-guaranteed weight and purity; strong anti-counterfeit features on modern Maples and Britannias</td><td>Depends on refiner; branded assay packaging helps</td></tr>
<tr><td>Recognition when selling</td><td>Universal</td><td>Good for major refiners; weaker for unknown brands</td></tr>
<tr><td>Divisibility</td><td>Excellent - each coin is about $4,170, with fractionals available</td><td>Good for 1 oz; poor for 10 oz ($41,700) and kilo (~$134,068)</td></tr>
<tr><td>In-kind distribution</td><td>Easy to take a coin or two at a time</td><td>Large bars force large, taxable distributions</td></tr>
<tr><td>Buyback bid</td><td>Roughly 1-2% under spot</td><td>Similar for major refiners; can be lower or slower for less-known bars and kilos</td></tr>
<tr><td>Eligibility checks</td><td>Simple for major coins (watch Britannia dates)</td><td>Must confirm fineness and accepted refiner</td></tr>
</tbody>
</table>
<h3>When bars win</h3>
<ul>
<li>You have a large balance and want the lowest cost per ounce.</li>
<li>You are many years from distributions and do not expect to sell in pieces.</li>
<li>You stick to well-known refiners such as PAMP and Valcambi.</li>
</ul>
<h3>When coins win</h3>
<ul>
<li>You are within a few years of required minimum distributions.</li>
<li>You may want to take metal out in kind rather than sell it.</li>
<li>You want the easiest possible resale with any dealer.</li>
</ul>
<h3>A common middle path</h3>
<p>Many buyers put the bulk of a larger account in 10 oz bars or 1 oz coins and keep a slice in fractional coins. For example, a $100,000 IRA might hold two 10 oz bars, around a dozen 1 oz Eagles or Maple Leafs, and a handful of 1/4 oz or 1/10 oz coins. That is an illustration of the trade-off, not a recommendation: the right mix depends on your age, other accounts and whether you plan to take metal or cash out.</p>`,
  },
  {
    heading: "Fractional coins and RMD planning",
    body: `<p>If you have a traditional gold IRA, <a href="/articles/gold-ira-taxes-and-rmds">required minimum distributions</a> start at age 73 for people born 1951 to 1959, and at 75 for people born in 1960 or later. Roth IRA owners have no RMDs. Each year's RMD is the prior year-end account value divided by a life-expectancy factor from the IRS tables.</p>
<p>A gold IRA has two ways to meet an RMD:</p>
<ul>
<li><strong>Sell metal and take cash.</strong> The custodian sells some of your holdings and pays you the cash.</li>
<li><strong>Take metal "in kind."</strong> The custodian ships you coins or bars. The fair market value on the day of distribution counts as the distribution and is taxed as income.</li>
</ul>
<p>Either way, the size of your pieces matters.</p>
<h3>Worked example: a $150,000 gold IRA at age 73</h3>
<p>The IRS Uniform Lifetime Table factor at age 73 is 26.5. So the RMD on a $150,000 balance is $150,000 / 26.5 = <strong>$5,660.38</strong>. With gold at $4,170:</p>
<table>
<thead><tr><th>What you hold</th><th>Closest in-kind distribution</th><th>Value at spot</th><th>Gap to the RMD</th></tr></thead>
<tbody>
<tr><td>Only kilo bars</td><td>Not possible without taking a whole bar (~$134,068)</td><td>n/a</td><td>Must sell metal or use other assets</td></tr>
<tr><td>Only 10 oz bars</td><td>One bar would be $41,700 - far too much</td><td>n/a</td><td>Must sell metal or use other assets</td></tr>
<tr><td>Only 1 oz coins</td><td>1 coin</td><td>$4,170</td><td>$1,490.38 short - must be covered in cash</td></tr>
<tr><td>1 oz coins plus fractionals</td><td>1 oz + 1/4 oz + 1/10 oz = 1.35 oz</td><td>$5,629.50</td><td>$30.88 short - a small cash top-up</td></tr>
</tbody>
</table>
<p>A few points to keep in mind:</p>
<ul>
<li><strong>The custodian values the metal</strong>, not you. Its fair market value on the distribution date may be a bid or spot figure, so the numbers will not match spot exactly.</li>
<li><strong>Transaction fees apply.</strong> Equity Trust charges $50 per in-kind distribution transaction and $10 per asset to liquidate metals (max $30). uDirect IRA lists $75 for in-kind and $50 for metals liquidation. Preferred Trust lists $200 for an in-kind distribution and $200 per sale. Fees on small, frequent distributions add up.</li>
<li><strong>You can combine IRAs.</strong> If you have several traditional IRAs, the IRS lets you add up their RMDs and take the total from any one or more of them. Many people take their RMD from a regular IRA holding cash or funds and leave the gold untouched.</li>
<li><strong>Keep some cash in the gold IRA.</strong> A small cash balance can cover fees and top up an in-kind distribution.</li>
</ul>
<h3>How many fractionals do you need?</h3>
<p>Not many. Fractionals cost about 5-8 percentage points more in premium per ounce, so holding a large share of your gold in them is expensive. A practical approach is to hold just enough small coins to round out a few years of distributions, and rely on 1 oz coins (and sales) for the rest. If you are a decade or more from RMDs, you may not need any fractionals yet.</p>
<p>Taxes on distributions can be complicated - especially in-kind ones. A tax professional can help you plan the year-by-year approach.</p>`,
  },
  {
    heading: "How dealers price IRA gold: spot plus premium",
    body: `<p>Every gold price you are quoted is built from two parts:</p>
<p><strong>Your price = (spot price x ounces of gold) + premium</strong></p>
<p>The <strong>spot price</strong> moves all day on global markets. The <strong>premium</strong> is the dealer's add-on, set as a percentage or a dollar amount per piece. It covers:</p>
<ul>
<li>The mint's or refiner's own charge for producing the coin or bar.</li>
<li>Wholesale distribution, shipping and insurance.</li>
<li>The dealer's operating costs - including, for phone-sales firms, advertising, salespeople and commissions.</li>
<li>The dealer's profit.</li>
</ul>
<h3>Ask price, bid price and spread</h3>
<p>Dealers quote two prices for every product:</p>
<table>
<thead><tr><th>Term</th><th>Meaning</th><th>Example for a 1 oz Eagle at $4,170 spot</th></tr></thead>
<tbody>
<tr><td>Ask</td><td>What the dealer sells to you for</td><td>$4,345.14 (4.2% over spot)</td></tr>
<tr><td>Bid</td><td>What the dealer pays you to buy it back</td><td>$4,128.30 (1% under spot)</td></tr>
<tr><td>Spread</td><td>Ask minus bid</td><td>$216.84, or about 5.0% of the ask price</td></tr>
</tbody>
</table>
<p>The spread is the dealer's built-in margin on a round trip. You cannot avoid it, but you can choose products and dealers where it is small.</p>
<h3>Why IRA dealers often charge more than online dealers</h3>
<p>The premium figures in this guide are mostly from large online dealers and price trackers. Many gold IRA companies sell by phone, with education, account set-up help and promotions such as "free silver" - and these cost money. One firm, American Bullion, disclosed spreads of 7% on bullion and 10% on bullion purchased inside an IRA. That does not make a phone-based company bad, but it does mean you should compare. A common rule of thumb is to push back on any bullion premium above about 10-15% (a heuristic, not a standard).</p>
<h3>Promotions are paid for somewhere</h3>
<p>"Up to 10% in bonus silver" or "up to $25,000 in free silver" offers are real promotions, but the silver has to be paid for from the margin on what you buy. The only fair way to judge an offer is the total value at spot of all the metal you receive, divided by what you paid. Our <a href="/articles/gold-ira-fees">fees guide</a> walks through this calculation.</p>
<h3>Price locks</h3>
<p>Because IRA purchases are paid by your custodian, there is a delay between agreeing a price and the money arriving. Reputable dealers lock the price when you confirm the order and send a written confirmation showing the product, quantity, price per piece and spot price at the time. Ask for that confirmation every time.</p>`,
  },
];
