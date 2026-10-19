import type { ArticleSection } from "@/lib/config";

// Part 2 of "How to Invest in Gold for Retirement (2026)".
// Method 2 (gold ETFs, with the expense ratio table) and Method 3 (physical
// coins and bars at home, with the dated premium table and buyback spreads).
// Expense ratios: PILLAR-RESEARCH.md section 7 - verify with each issuer.

export const part2: ArticleSection[] = [
  {
    heading: "Method 2: Gold ETFs in an IRA, 401(k) or brokerage account",
    body: `<p>A gold exchange-traded fund (ETF) is a fund that trades on the stock market like a share. The most common type for retirement savers is a <strong>physically backed gold ETF</strong>: the fund holds gold bars in a vault, and each share represents a small slice of that gold. When gold rises or falls, the share price follows, minus the fund's yearly fee.</p>
<p>Because ETFs trade like stocks, you can hold them almost anywhere you already invest: a traditional or Roth IRA at a brokerage, a 401(k) that offers a brokerage window, or an ordinary taxable brokerage account.</p>
<h3>Expense ratios of common precious metals ETFs</h3>
<p>The expense ratio is the yearly fee, taken out of the fund's assets as a percentage. You never get a bill - the fee is built into the share price. Here are the figures we found in October 2026. <strong>Fees change, so verify each one with the issuer</strong> before buying.</p>
<table>
<thead><tr><th>Ticker</th><th>What it holds</th><th>Expense ratio (verify with issuer)</th><th>Yearly cost on $50,000</th></tr></thead>
<tbody>
<tr><td>IAUM</td><td>Physical gold</td><td>0.09%</td><td>$45</td></tr>
<tr><td>GLDM</td><td>Physical gold</td><td>0.10%</td><td>$50</td></tr>
<tr><td>SGOL</td><td>Physical gold</td><td>0.17%</td><td>$85</td></tr>
<tr><td>BAR</td><td>Physical gold</td><td>About 0.17%</td><td>About $85</td></tr>
<tr><td>AAAU</td><td>Physical gold</td><td>0.18%</td><td>$90</td></tr>
<tr><td>IAU</td><td>Physical gold</td><td>0.25%</td><td>$125</td></tr>
<tr><td>GLD</td><td>Physical gold</td><td>0.40%</td><td>$200</td></tr>
<tr><td>SIVR</td><td>Physical silver</td><td>0.30%</td><td>$150</td></tr>
<tr><td>SLV</td><td>Physical silver</td><td>0.50%</td><td>$250</td></tr>
<tr><td>GDX</td><td>Gold mining company stocks (not metal)</td><td>0.51%</td><td>$255</td></tr>
</tbody>
</table>
<p>The math in the last column is simple: $50,000 x 0.10% = $50; $50,000 x 0.40% = $200. Over time the fee is charged on a slowly shrinking balance (if gold is flat), so the real 10-year total is a touch lower than 10 times the first year - for GLDM, about $498 rather than $500.</p>
<p>Notice the range. GLD, the oldest and largest gold ETF, costs four times what GLDM costs. Both track the gold price. GLD has very high trading volume, which matters to big traders, but for a retirement saver who buys and holds, the cheaper funds usually do the same job. Note too that <strong>GDX is not a gold fund</strong> - it owns mining companies, which we cover in Method 4.</p>
<h3>How to buy a gold ETF, step by step</h3>
<ol>
<li><strong>Decide which account to use.</strong> An IRA or Roth IRA avoids the collectibles tax (more below). If your money is in a 401(k), check whether your plan has a brokerage window (see Method 5).</li>
<li><strong>Log in to your brokerage</strong> and search for the ticker, such as GLDM or IAU.</li>
<li><strong>Read the fund's fact sheet</strong> on the issuer's website: confirm it holds physical gold, check the expense ratio and where the gold is vaulted.</li>
<li><strong>Place a limit order</strong> - an order with a maximum price - rather than a market order, so you do not pay more than you expect during a fast market.</li>
<li><strong>Check the confirmation</strong> for the number of shares, the price and any commission. Many large brokerages charge no commission on ETF trades, but check yours.</li>
</ol>
<p>That is it. There is no dealer, no custodian application and no shipping. The whole process can take a few minutes inside an account you already have.</p>
<h3>Full cost breakdown</h3>
<table>
<thead><tr><th>Cost</th><th>Typical amount</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Expense ratio</td><td>0.09%-0.40% a year for physical gold ETFs</td><td>Built into the share price</td></tr>
<tr><td>Commission</td><td>Often $0 at large brokerages</td><td>Check your broker's fee schedule</td></tr>
<tr><td>Bid-ask spread</td><td>Usually small on large funds</td><td>The gap between the buying and selling price on the exchange</td></tr>
<tr><td>Account fee</td><td>Many brokerage IRAs charge none; some do</td><td>Check before you open an account</td></tr>
<tr><td>Storage, insurance, shipping</td><td>None separately</td><td>Covered inside the expense ratio</td></tr>
</tbody>
</table>
<h3>Taxes: why the account matters so much</h3>
<p>This is the single most important tax point in this guide. Physically backed gold ETFs such as GLD, IAU and GLDM are organized as <strong>grantor trusts</strong>. For tax purposes, owning a share is treated like owning the gold itself. So in a <strong>taxable</strong> brokerage account, long-term gains are taxed at the <strong>collectibles rate of up to 28%</strong>, not the lower rates that apply to stocks. CNBC explains the rule in <a href="https://www.cnbc.com/2022/03/14/gold-silver-etf-owners-face-28-percent-top-tax-rate-on-capital-gains.html" target="_blank" rel="noopener noreferrer">this report on the collectibles tax for gold and silver ETF owners</a>.</p>
<p>Inside an IRA or 401(k), that rule does not bite. A traditional account taxes withdrawals as ordinary income, whatever you owned; a Roth account's qualified withdrawals are tax-free. So <strong>the same ETF can be taxed very differently depending on where you hold it.</strong> IRS Publication 590-A covers <a href="https://www.irs.gov/publications/p590a" target="_blank" rel="noopener noreferrer">IRA contribution and rollover rules</a> if you want the primary source.</p>
<p>Holding a gold ETF in an IRA does not count as the IRA buying a collectible, because the IRA owns shares of a fund, not coins. Gold IRAs and ETF IRAs both avoid the collectibles rate - the difference is cost and whether you own specific metal.</p>
<h3>Liquidity</h3>
<p>Very high. You can sell any trading day and the cash usually settles in a business day or two. You can sell part of a position - even a single share - which makes RMDs and partial withdrawals easy.</p>
<h3>Risks</h3>
<ul>
<li><strong>Price risk:</strong> the same as gold itself.</li>
<li><strong>You do not hold the metal:</strong> you own shares in a trust. Most retail shareholders cannot ask for bars to be delivered. If owning metal in your hand is the point, an ETF does not do that.</li>
<li><strong>Fund structure:</strong> read the prospectus. Some "gold" funds use futures or own miners, which behave differently from physically backed funds.</li>
<li><strong>Tracking:</strong> over time the share price drifts slightly below the gold price by the amount of fees.</li>
</ul>
<h3>Pros and cons</h3>
<table>
<thead><tr><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>Lowest cost route to gold's price for most people</td><td>No physical metal you can touch or take delivery of</td></tr>
<tr><td>Works in an existing IRA, Roth IRA or 401(k) brokerage window</td><td>Taxed as a collectible (up to 28%) in a taxable account</td></tr>
<tr><td>Sell any trading day, in any amount</td><td>Depends on the fund's trustee, custodian and vault arrangements</td></tr>
<tr><td>No minimum beyond one share; good for small balances</td><td>Easy to trade - which tempts some people to trade too often</td></tr>
</tbody>
</table>
<p>For a deeper side-by-side with physical gold IRAs, see <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a>.</p>`,
  },
  {
    heading: "Method 3: Physical gold coins and bars at home",
    body: `<p>The oldest way to own gold is still the simplest to understand: buy coins or bars from a dealer and keep them yourself. This is <strong>not a retirement account</strong>. You buy with money that has already been taxed, and you cannot put home-stored coins into an IRA. But many retirees keep some physical metal as part of their overall retirement plan, usually alongside their IRAs and 401(k)s.</p>
<h3>How it works</h3>
<p>You buy from a coin shop, an online bullion dealer or a warehouse retailer. You pay the <strong>spot price</strong> (the market price for raw gold) plus a <strong>premium</strong> to cover minting, distribution and the dealer's profit. When you sell, a dealer pays you a <strong>bid price</strong>, usually a little below spot. The gap between what you pay and what you get back is your round-trip cost.</p>
<h3>Premiums over spot in 2026</h3>
<p>These are reported retail premiums from online dealers, with the dates they were recorded. Premiums move with demand - they tend to jump when people panic-buy - so treat them as a snapshot.</p>
<table>
<thead><tr><th>Product</th><th>Typical premium over spot</th><th>Date / source</th></tr></thead>
<tbody>
<tr><td>American Gold Eagle, 1 oz</td><td>3-6% at a major online dealer; Costco +4.2% (Oct 2026), as low as +0.41% (Mar 2, 2026); about 0.7% for random-year coins at the cheapest dealer</td><td>SD Bullion; costcogoldinventory.com; findbullionprices</td></tr>
<tr><td>American Gold Buffalo, 1 oz</td><td>5.98% average lowest; about 4.3% elsewhere</td><td>Oct 9, 2026, findbullionprices</td></tr>
<tr><td>Canadian Gold Maple Leaf, 1 oz</td><td>3.51%</td><td>Oct 9, 2026, findbullionprices</td></tr>
<tr><td>1 oz gold bar</td><td>2.17% generic; 3-5% branded (PAMP, Valcambi)</td><td>Oct 9, 2026, findbullionprices; goldsilverselect</td></tr>
<tr><td>10 oz gold bar</td><td>1.83%</td><td>Oct 9, 2026, findbullionprices</td></tr>
<tr><td>Kilo gold bar</td><td>1-3%</td><td>goldsilverselect</td></tr>
<tr><td>American Silver Eagle</td><td>Aug 2026 average 6.87% (range 6.36-7.90%); about 8.5% in July</td><td>findbullionprices</td></tr>
<tr><td>100 oz silver bar</td><td>About -1% to +0.6%; $0.50-$1.50/oz over spot (May 2026)</td><td>findbullionprices</td></tr>
</tbody>
</table>
<p>What this means in dollars, at about $4,170 an ounce: a 3.51% premium on a Maple Leaf is $4,170 x 0.0351 = about $146 per coin. A 2.17% premium on a generic 1 oz bar is about $90. Larger bars carry lower premiums, but they are harder to sell in small pieces - you cannot sell half a 10 oz bar.</p>
<h3>Buyback spreads</h3>
<p>When you sell, dealers typically bid about <strong>1-2% under spot</strong> for common sovereign coins such as Eagles and Maple Leafs; other estimates put bids at 96-99% of spot. A full round trip on a Gold Eagle - buy, then sell back - costs roughly <strong>4-8%</strong> (GoldSilver, June 2026).</p>
<p>Illustration: you buy 10 Maple Leafs at spot of $4,170 plus 3.51%. You pay 10 x $4,316 = about $43,160. If you sold the same day at 1.5% under spot, you would receive 10 x $4,107 = about $41,070. Round-trip cost: about $2,090, or about 4.8% of what you paid. That is why physical gold works best as a long-term holding, not something you trade.</p>
<h3>How to buy, step by step</h3>
<ol>
<li><strong>Stick to common bullion</strong> - Eagles, Buffalos, Maple Leafs and bars from well-known refiners. They are the easiest to sell later.</li>
<li><strong>Compare at least two dealers</strong> on the same product, on the same day, as a percentage over spot.</li>
<li><strong>Ask for the buyback price today</strong> as well as the selling price, so you know the full spread.</li>
<li><strong>Check payment terms:</strong> card payments often cost more than bank wire or check.</li>
<li><strong>Arrange secure delivery</strong> - insured, signature-required shipping, or in-person pickup.</li>
<li><strong>Keep the receipt</strong>. You will need your purchase price for taxes when you sell.</li>
</ol>
<h3>Storage, insurance and theft risk at home</h3>
<p>Home storage is free in the sense that nobody sends a bill. But it has real costs and risks:</p>
<ul>
<li><strong>A good safe</strong>, ideally bolted down and not in an obvious spot.</li>
<li><strong>Insurance:</strong> a standard homeowner's policy may cover only a small amount of coins or bullion. Ask your insurer about a rider or scheduled coverage and get the cost in writing.</li>
<li><strong>Theft and loss:</strong> gold is small, valuable and anonymous. Tell as few people as possible. Do not post about it.</li>
<li><strong>Your heirs:</strong> make sure a trusted person knows where the metal is and how to sell it. Unrecorded coins can be lost or sold cheaply after a death.</li>
<li><strong>Bank safe deposit box:</strong> an alternative, but contents are usually not insured by the bank, and you can only reach them during bank hours.</li>
</ul>
<p>Some people use a private vault instead, which adds a storage fee but takes the metal out of the house.</p>
<h3>Taxes</h3>
<p>Physical gold held outside an IRA is a <strong>collectible</strong> for federal tax purposes. Long-term gains (held more than a year) are taxed at up to <strong>28%</strong>; short-term gains are taxed as ordinary income. Losses can generally offset other capital gains. Some dealers must report certain sales to the IRS, but whether or not they do, you are responsible for reporting the gain. A tax professional can help with your state's rules, which vary.</p>
<h3>Liquidity</h3>
<p>Medium. Common coins are easy to sell, but you have to take them to a dealer or ship them insured, then wait for payment. Expect to get a bid price below spot. Selling fast in a panic can mean a worse price.</p>
<h3>Can home coins be part of a retirement plan?</h3>
<p>Yes, as long as you understand they are <strong>outside</strong> any IRA. They have no contribution limit and no RMDs. But they also have no tax deferral, and the 28% collectibles rate applies. Trying to hold IRA gold at home is a different thing entirely and can cost you dearly - see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p>
<h3>Pros and cons</h3>
<table>
<thead><tr><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>You hold real metal, with no custodian, fund or bank in between</td><td>Theft, loss and insurance are your problem</td></tr>
<tr><td>Low premiums on common bullion (about 2-6%) at competitive dealers</td><td>No tax shelter; gains taxed up to 28%</td></tr>
<tr><td>No annual account fees</td><td>Round trip of about 4-8% on coins makes short-term trading costly</td></tr>
<tr><td>Private and simple to understand</td><td>Slower to sell; harder for heirs if poorly documented</td></tr>
</tbody>
</table>
<p><strong>Bottom line on Method 3:</strong> coins and bars at home suit people who value direct ownership, buy common bullion at a low premium, and keep the amount modest enough that a theft would not wreck their retirement.</p>`,
  },
];
