import type { ArticleSection } from "@/lib/config";

// Part 2 of "How to Sell or Withdraw Gold From Your IRA (2026)".
// Timelines, the buyback bid vs spot, worked $100,000 examples (Eagles vs
// proof coins) and the custodian fees that apply when selling or withdrawing.

export const part2: ArticleSection[] = [
  {
    heading: "How long a gold IRA liquidation takes",
    body: `<p>Selling a gold IRA is slower than selling a stock fund in a brokerage IRA, which settles in a day or two. Physical metal has to be released, moved, checked and paid for, and several companies are involved. None of the custodians or dealers we researched publishes a guaranteed timetable, so the ranges below are <strong>approximate planning estimates</strong> based on how the process works, not promises. Always ask your own custodian and buyer for their current turnaround times.</p>
<h3>Typical timeline for a sale (approximate)</h3>
<table>
<thead><tr><th>Stage</th><th>Rough time</th><th>What can slow it down</th></tr></thead>
<tbody>
<tr><td>Getting quotes and choosing a buyer</td><td>Same day to a few days</td><td>Waiting for call-backs; shopping several dealers</td></tr>
<tr><td>Custodian processes your signed instructions</td><td>About 1-3 business days</td><td>Missing signatures, mismatched product descriptions, paper forms by mail</td></tr>
<tr><td>Depository releases the metal</td><td>About 1-5 business days</td><td>Shipping vs internal transfer; holiday backlogs; segregated storage</td></tr>
<tr><td>Buyer receives, verifies and pays</td><td>About 1-3 business days after receipt</td><td>Large orders; unusual products; verification questions</td></tr>
<tr><td>Custodian credits cash to the IRA</td><td>About 1-2 business days after payment</td><td>Wire cut-off times</td></tr>
<tr><td>Distribution to your bank (if requested)</td><td>About 1-5 business days</td><td>Check by mail vs wire; withholding paperwork</td></tr>
</tbody>
</table>
<p>Add those up and a straightforward sale of common bullion, with the cash staying in the IRA, often lands somewhere around <strong>one to two weeks</strong>. A sale with a cash distribution to your bank often takes <strong>one to three weeks</strong>. Moving a whole account to a different custodian, especially if metal has to move between depositories, can take <strong>several weeks</strong>. Again: approximate, and your experience may differ.</p>
<h3>The price is locked early - the money arrives later</h3>
<p>One reassuring point: the slow part of the process usually happens <em>after</em> the price is locked. Once the buyer confirms a trade at, say, $4,100 per coin, a fall in the gold price the next day does not change what you receive. That is why getting a written trade confirmation matters.</p>
<p>The reverse is also true. If the gold price jumps after you lock, you do not benefit. If you are selling a large holding and are worried about timing, some people sell in two or three tranches over several weeks instead of all at once. That is a personal choice, not a recommendation - see <a href="#selling-in-a-falling-market-the-2026-example">selling in a falling market</a> for the trade-offs.</p>
`,
  },
  {
    heading: "What you will actually be paid: the buyback bid vs spot",
    body: `<p>The "spot price" you see on the news is the price for large wholesale trades of raw gold. It is a useful benchmark, but nobody buys coins from the public at spot, and nobody sells them at spot either. There are two prices that matter to you:</p>
<ul>
<li><strong>The ask</strong> - what a dealer charges you to buy. This is spot <em>plus</em> a premium.</li>
<li><strong>The bid</strong> - what a dealer pays you when you sell. For common bullion this is usually a little <em>below</em> spot.</li>
</ul>
<p>The gap between the two is the <strong>spread</strong>. It is the single biggest cost of owning physical gold for a few years, often bigger than all your custodian and storage fees combined. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> covers the buying side in depth; here we focus on selling.</p>
<h3>Typical bids by product (2026)</h3>
<table>
<thead><tr><th>What you hold</th><th>Typical buy premium (what you paid over spot)</th><th>Typical sell bid</th></tr></thead>
<tbody>
<tr><td>American Gold Eagle, 1 oz</td><td>About 3-6% at online dealers (SD Bullion); Costco 2026 Eagle about 4.2% (Oct 2026)</td><td>Roughly 1-2% under spot for sovereign coins</td></tr>
<tr><td>Gold Buffalo / Maple Leaf, 1 oz</td><td>About 3.5-6% (Oct 9, 2026 dealer averages)</td><td>Roughly 1-2% under spot</td></tr>
<tr><td>1 oz and larger gold bars</td><td>About 1.8-2.2% for generic 1 oz and 10 oz bars; 3-5% branded (Oct 2026)</td><td>Often near or a little under spot</td></tr>
<tr><td>American Silver Eagle</td><td>About 6.9% average (Aug 2026)</td><td>Usually below spot; wider than gold</td></tr>
<tr><td>Proof or "IRA-exclusive" coins</td><td>Phone-sales spreads disclosed at about 20-23% at one dealer; far higher in enforcement cases</td><td>Often only the selling company will bid, sometimes near melt value</td></tr>
</tbody>
</table>
<p class="small">Sources: premium data from SD Bullion, costcogoldinventory.com and findbullionprices.com (2026); bid estimates from dealer surveys including GoldSilver (June 2026), which also puts a Gold Eagle round trip at about 4-8%. Other estimates put common-coin bids at 96-99% of spot. Proof spread figures from American Bullion disclosures as reported by LendEdu. All approximate and changeable.</p>
<h3>The round-trip cost</h3>
<p>Put the buy premium and the sell discount together and you get the <strong>round-trip cost</strong>: how far gold has to rise just for you to break even. For a 1 oz Gold Eagle bought from a retail dealer and sold back, GoldSilver estimated that round trip at about <strong>4-8%</strong> in June 2026. That is the cost of the coin itself, before custodian and storage fees.</p>
<p>Inside an IRA it is often higher. American Bullion, a phone-sales dealer, disclosed a <strong>7%</strong> spread on bullion generally but <strong>10%</strong> on bullion bought inside an IRA, <strong>20%</strong> on collectible coins and <strong>23%</strong> on proof coins (as reported by LendEdu). Custodian disclosures, such as STRATA Trust's, warn that proof coins carry wider spreads. As a rough rule of thumb that many consumer writers use - a heuristic, not an official standard - push back on any bullion spread above about 10-15%.</p>
<h3>Why proof and "IRA-exclusive" coins are hard to sell</h3>
<p>A common bullion coin like a 1 oz Gold Eagle is bought and sold by thousands of dealers, so competition keeps bids close to spot. A proof coin or a special "IRA-exclusive" product is a different story. Its price was set by the company that sold it, often at a large premium for packaging, mintage or "rarity". When you sell, most other dealers will only bid on the gold content - the <strong>melt value</strong> - and some will not bid at all.</p>
<p>So the premium you paid above melt value is often simply gone. That is why enforcement cases in this industry have focused on product switching: in the cases brought against Red Rock Secured, regulators alleged markups of up to 130% (SEC) on coins sold to retirement savers who were told markups were 1-5%. We cover these cases in <a href="#exit-scams-and-red-flags-when-you-sell">exit scams and red flags</a>.</p>
`,
  },
  {
    heading: "Worked example: selling $100,000 of Gold Eagles vs proof coins",
    body: `<p>Numbers make this concrete. The examples below are illustrations built from the research ranges above, not quotes. We use an October 19, 2026 spot price of about <strong>$4,170 per ounce</strong> (Kitco) and assume, to isolate the effect of the spread, that the gold price did not change between buying and selling.</p>
<h3>Example A: you paid $100,000 for 1 oz Gold Eagles at a 5% premium</h3>
<p>A 5% premium is within the 3-6% range reported for online dealers.</p>
<ul>
<li>Gold value of what you bought: $100,000 ÷ 1.05 = <strong>$95,238</strong></li>
<li>That is about $95,238 ÷ $4,170 = <strong>22.8 ounces</strong> (in practice you would own 22 or 23 coins; we keep the decimal to keep the math clean)</li>
<li>Sell at a bid 2% under spot: $95,238 × 0.98 = <strong>$93,333</strong></li>
<li>Custodian liquidation fee at Equity Trust: $10 per asset, one asset type = <strong>$10</strong></li>
<li>Cash credited to the IRA: $93,333 - $10 = <strong>$93,323</strong></li>
<li>Round-trip cost: $100,000 - $93,323 = <strong>$6,677</strong>, or about <strong>6.7%</strong></li>
</ul>
<p>If the bid were 1% under spot instead: $95,238 × 0.99 = $94,286, less $10 = $94,276, a round-trip cost of $5,724 (about 5.7%). Both land inside the 4-8% round trip GoldSilver estimated for Gold Eagles.</p>
<h3>Example B: you paid $100,000 for proof coins with a 23% spread</h3>
<p>Now assume the same $100,000 went into proof coins from a dealer whose disclosed spread on proof coins is 23% - the figure American Bullion disclosed, as reported by LendEdu. A 23% spread means the dealer's bid is 23% below what you paid:</p>
<ul>
<li>Buyback: $100,000 × (1 - 0.23) = <strong>$77,000</strong></li>
<li>Less the $10 liquidation fee = <strong>$76,990</strong></li>
<li>Round-trip cost: <strong>$23,010</strong>, about 23%</li>
</ul>
<p>Gold would have to rise about 30% from your purchase date ($100,000 ÷ $77,000 = 1.30) just to get you back to even, before any annual fees. With Eagles in Example A, it would need to rise about 7.2% ($100,000 ÷ $93,323 = 1.072).</p>
<h3>Example C: an enforcement-case markup</h3>
<p>In the worst cases, the spread is not 23% but far higher. Suppose a seller charged a 130% markup - the upper end alleged by the SEC against Red Rock Secured. Then $100,000 bought metal with a gold value of only $100,000 ÷ 2.30 = <strong>$43,478</strong>. Even if you sold that gold content at full spot, you would get back about $43,478, losing about <strong>$56,522</strong> - and in practice, other dealers might pay only melt value less a discount.</p>
<h3>All three side by side</h3>
<table>
<thead><tr><th></th><th>A. Gold Eagles (5% premium, 2% bid discount)</th><th>B. Proof coins (23% spread)</th><th>C. Enforcement-case markup (130%)</th></tr></thead>
<tbody>
<tr><td>Amount paid</td><td>$100,000</td><td>$100,000</td><td>$100,000</td></tr>
<tr><td>Gold value at purchase</td><td>$95,238</td><td>Not disclosed separately</td><td>$43,478</td></tr>
<tr><td>Approximate sale proceeds (flat gold price)</td><td>$93,333</td><td>$77,000</td><td>About $43,478 at best</td></tr>
<tr><td>Less liquidation fee ($10)</td><td>$93,323</td><td>$76,990</td><td>About $43,468</td></tr>
<tr><td>Round-trip cost</td><td>About $6,677 (6.7%)</td><td>About $23,010 (23%)</td><td>About $56,532 (57%)</td></tr>
<tr><td>Gold rise needed to break even</td><td>About 7.2%</td><td>About 30%</td><td>About 130%</td></tr>
</tbody>
</table>
<p>The lesson is not "never buy gold". It is that the product decision made on the day you bought largely determines what you can get on the day you sell. If you hold proof or "IRA-exclusive" coins today, the best time to find out what they are really worth is now - by asking two or three unrelated dealers for a bid - not on the day you need the money. If you are still buying, choose common bullion: see our <a href="/articles/best-gold-coins-for-ira">best gold coins for an IRA</a>.</p>
`,
  },
  {
    heading: "Custodian fees when you sell or withdraw",
    body: `<p>Dealer spreads are the big cost, but custodians charge their own fees when you sell, distribute, ship or close an account. These are usually flat dollar amounts, so they matter most on small transactions such as a single RMD.</p>
<h3>Equity Trust (published fee schedule)</h3>
<p>Equity Trust is one of the most common custodians for gold IRAs and publishes a full fee list. These figures come from its <a href="https://s3.us-east-2.amazonaws.com/forms.equitytrustcompany.info/Retail-Fee-Schedule.pdf" target="_blank" rel="noopener">Retail Fee Schedule (FS-0001-03, Rev. 11/06/2025)</a>:</p>
<table>
<thead><tr><th>Fee</th><th>Amount</th><th>When it applies</th></tr></thead>
<tbody>
<tr><td>Metals liquidation</td><td>$10 per asset (max $30)</td><td>Each time you sell metal</td></tr>
<tr><td>Distribution / re-registration</td><td>$100 per asset</td><td>Taking an asset out of the IRA</td></tr>
<tr><td>In-kind transfer or distribution</td><td>$50 per transaction</td><td>Moving or distributing metal as metal</td></tr>
<tr><td>Coin shipping / handling</td><td>At cost + $10 ($50 minimum)</td><td>Shipping coins to you</td></tr>
<tr><td>Wire</td><td>$30</td><td>Sending cash by wire</td></tr>
<tr><td>Full termination</td><td>$250</td><td>Closing the account</td></tr>
<tr><td>Partial termination</td><td>$100 per asset</td><td>Moving part of the account out</td></tr>
<tr><td>Annual fee</td><td>$225-$2,250, tiered by account value</td><td>Every year (e.g. $500 at $100,000-$199,999)</td></tr>
<tr><td>Storage</td><td>$110 non-segregated / $160 segregated</td><td>Every year, billed in January</td></tr>
</tbody>
</table>
<h3>Other custodians (reported)</h3>
<table>
<thead><tr><th>Custodian</th><th>Sale / liquidation</th><th>In-kind distribution</th><th>Other exit fees</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Preferred Trust</td><td>$200 per sale</td><td>$200</td><td>Wire $30</td><td>Company fee schedule</td></tr>
<tr><td>uDirect IRA</td><td>$50 metals liquidation</td><td>$75</td><td>$500 minimum balance</td><td>Company fee page</td></tr>
<tr><td>STRATA Trust</td><td>$40 per trade + $35 depository handling (one site: $75)</td><td>Ask</td><td>-</td><td>Third-party (reported)</td></tr>
<tr><td>Kingdom Trust</td><td>$40 per transaction</td><td>Ask</td><td>Termination $300 (FAQ: $100 per asset)</td><td>Third-party (reported, high uncertainty)</td></tr>
<tr><td>New Direction (NDTCO)</td><td>$130 per metals trade</td><td>Ask</td><td>-</td><td>Third-party (reported; a 2021 PDF showed $50 / $160)</td></tr>
<tr><td>Madison Trust</td><td>-</td><td>Ask</td><td>Termination $225</td><td>Company fees FAQ</td></tr>
</tbody>
</table>
<p class="small">Fees as reported in October 2026 research. "Reported" means taken from third-party review sites that we could not confirm on the custodian's own site. Fee schedules change - ask for the current one in writing.</p>
<h3>Worked example: one $20,000 cash withdrawal at Equity Trust</h3>
<p>Say you sell 5 one-ounce Gold Eagles at a bid of about $4,000 each and take the $20,000 out by wire. Using Equity Trust's schedule:</p>
<ul>
<li>Liquidation: $10 (one asset type)</li>
<li>Distribution: $100 (one asset - the cash being distributed; confirm how your custodian counts "assets")</li>
<li>Wire: $30</li>
<li>Total custodian fees: <strong>$140</strong>, or 0.7% of $20,000</li>
</ul>
<p>The same sale at a custodian charging $200 per sale (Preferred Trust, as published) plus a $30 wire would cost $230 before any distribution fee - 1.15% of $20,000. On a $5,000 RMD sale, a $200 sale fee alone is 4%. If you expect many small sales, the per-transaction fee matters more than the annual fee.</p>
<h3>Worked example: closing a $100,000 account</h3>
<p>Selling everything and closing at Equity Trust might involve a liquidation fee of up to $30 (if you hold three or more products), a $250 full termination fee and a $30 wire: about <strong>$310</strong>. That is small next to a dealer spread of 1-2% on $100,000 ($1,000-$2,000), but it is not nothing. Also check whether the annual fee for the coming year has already been billed - Equity Trust's schedule says its annual fee is not prorated and that storage is billed in January, so ask exactly when the next year's fees will be charged - a closure completed before that date may avoid paying for a year you will not use.</p>
<p>To see how these fees fit into your total yearly cost, try our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> and compare custodians in our <a href="/articles/gold-ira-custodians">custodian guide</a>.</p>`,
  },
];
