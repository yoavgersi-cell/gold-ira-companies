import type { ArticleSection } from "@/lib/config";

// Part 1 of "How to Sell or Withdraw Gold From Your IRA (2026)".
// Quick answer, the four exit options, who buys IRA metal and why the
// custodian must execute, and the step-by-step liquidation process.

export const part1: ArticleSection[] = [
  {
    heading: "How do you sell gold in an IRA?",
    body: `<div class="qa"><strong>Short answer:</strong> You do not sell IRA gold yourself. You tell your <strong>custodian</strong> (the trust company that legally holds the account) which coins or bars to sell and who the buyer is - usually the dealer you bought from, another dealer, or a dealer the custodian works with. The buyer locks a price over the phone, the custodian authorizes the depository to release the metal to that buyer, the buyer pays the custodian, and the cash lands back <strong>inside your IRA</strong>. Selling inside the IRA is not taxed. Tax only happens when money or metal leaves the IRA as a distribution: ordinary income tax on a traditional IRA, possibly a 10% additional tax if you are under 59½, and usually no tax on a qualified Roth withdrawal. You can also take the coins out "in kind", move the account to another custodian, or sell and send the cash to a regular IRA to buy something else.</div>
<p>That is the whole process in one paragraph. The rest of this guide slows it down. Most people spend weeks choosing a gold IRA company and almost no time thinking about how they will get out. Then the day comes - an RMD is due, a roof needs replacing, gold has jumped and they want to take some profit, or they simply want lower fees - and they find out that the exit has its own costs, its own paperwork and its own sales tactics.</p>
<p>Two ground rules before we start. First, this is general information, not tax advice. The tax rules below are standard IRS rules, but your own situation - your other income, your state, your age, whether the account is inherited - can change the answer. Before any large withdrawal, talk to a CPA or enrolled agent. Second, every company figure in this guide is <strong>reported</strong> by the company or by third-party review sites as of October 2026, and fees change. Get current numbers in writing from your own custodian.</p>
<p>If you are still deciding whether to open a gold IRA at all, our <a href="/articles/gold-ira">complete gold IRA guide</a> and our honest look at <a href="/articles/is-a-gold-ira-a-good-investment">whether a gold IRA is a good investment</a> are better starting points. If you want the full rulebook, see <a href="/articles/gold-ira-rules">gold IRA rules for 2026</a>.</p>`,
  },
  {
    heading: "Your four exit options at a glance",
    body: `<p>"Selling my gold IRA" can mean four quite different things. Each has a different tax result, a different cost and a different speed. Knowing which one you actually want is the most important decision in this guide, because the wrong one can trigger a tax bill you did not need to pay.</p>
<h3>Option 1: Sell the metal and keep the cash inside the IRA</h3>
<p>The custodian sells some or all of your coins and bars, and the cash stays in the IRA. Nothing leaves the account, so <strong>there is no tax and no penalty</strong>, whatever your age. People do this to take profits after a run-up, to rebalance, to build a cash cushion for future RMDs, or as the first step before moving the cash to a different kind of IRA.</p>
<h3>Option 2: Sell the metal and withdraw the cash</h3>
<p>The custodian sells the metal and then sends the cash to your bank account. This is a <strong>distribution</strong>. From a traditional IRA, it is generally taxed as ordinary income in the year you take it, and if you are under 59½ a 10% additional tax may also apply unless an exception fits. From a Roth IRA, a qualified distribution is generally tax-free. This is the option most people mean when they say "cash out".</p>
<h3>Option 3: Take the metal itself ("in kind")</h3>
<p>Instead of selling, you ask the custodian to ship the actual coins or bars to you. This is also a distribution. The IRS treats it as if you received cash equal to the metal's <strong>fair market value</strong> on the day it is distributed, so the tax result is generally the same as Option 2. The difference is that you now hold physical gold outside any retirement account, with its own tax rules when you eventually sell it.</p>
<h3>Option 4: Move the account without cashing out</h3>
<p>You can move the gold IRA to a different self-directed custodian (often to cut fees), or sell the metal inside the IRA and send the cash by direct trustee-to-trustee transfer to an ordinary brokerage IRA, where you could buy a gold ETF, index funds or bonds. Done as a <strong>direct transfer</strong>, neither move is taxed and neither counts against the once-per-12-months limit on 60-day IRA rollovers.</p>
<h3>Side-by-side comparison</h3>
<table>
<thead><tr><th>Exit option</th><th>Taxed?</th><th>Typical costs</th><th>Rough speed (approximate)</th></tr></thead>
<tbody>
<tr><td>1. Sell, keep cash in IRA</td><td>No</td><td>Dealer spread below spot + custodian liquidation fee (e.g. $10 per asset, max $30 at Equity Trust)</td><td>About 1-2 weeks until cash shows in the IRA</td></tr>
<tr><td>2. Sell and withdraw cash</td><td>Yes - ordinary income (traditional); usually none on a qualified Roth; possible 10% additional tax under 59½</td><td>Spread + liquidation fee + distribution and wire fees (e.g. $100 per asset distribution, $30 wire at Equity Trust)</td><td>About 1-3 weeks until cash reaches your bank</td></tr>
<tr><td>3. Take metal in kind</td><td>Yes - on fair market value, same as cash</td><td>No dealer spread now, but in-kind fee (e.g. $50 at Equity Trust) + shipping and insurance at cost</td><td>About 1-3 weeks for delivery</td></tr>
<tr><td>4a. Transfer to another gold IRA custodian</td><td>No (direct transfer)</td><td>Termination fee at the old custodian (e.g. $250 at Equity Trust) + possible depository moving costs</td><td>Often several weeks</td></tr>
<tr><td>4b. Sell and move cash to a regular IRA</td><td>No (direct transfer)</td><td>Spread + liquidation + termination fees, then ordinary fund costs</td><td>About 2-4 weeks</td></tr>
</tbody>
</table>
<p class="small">Timelines are rough planning ranges, not guarantees, and vary by custodian, dealer, depository and time of year. Equity Trust fees are from its published Retail Fee Schedule (Rev. 11/06/2025).</p>
<p>A simple way to remember it: <strong>selling is not the taxable event - leaving the IRA is.</strong> You can sell your gold inside the IRA as often as you like without a tax bill. What the IRS cares about is when money or metal comes out to you.</p>
<p>The rest of this guide takes each option in turn. If your only goal is lower costs, skip to <a href="#moving-to-a-cheaper-custodian-or-rolling-back-into-a-regular-ira">moving to a cheaper custodian</a> - you may not need to sell anything at all. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> and <a href="/gold-ira-fee-calculator">fee calculator</a> will show you what you are paying now.</p>`,
  },
  {
    heading: "Who buys IRA gold: the original dealer, another dealer or the custodian's desk",
    body: `<p>Your custodian holds the account, but it usually does not buy your metal itself. A dealer does. You generally have three choices of buyer, and you are <strong>not</strong> required to sell back to the company you bought from.</p>
<h3>1. The dealer you bought from (the "buyback")</h3>
<p>Most gold IRA companies - American Hartford Gold, Goldco, Augusta Precious Metals, American Gold and Silver Group and others - say they will buy metal back from their customers. This is usually the path of least resistance: they already know your account, they know which products you hold, and their staff fill in the custodian paperwork for you.</p>
<p>The catch is price. A company that sold you coins at a high markup has no obligation to buy them back near what you paid, and some do not publish their buyback prices at all. None of the four companies we review publishes its product spreads, according to our research. Convenience is worth something, but it is worth checking.</p>
<h3>2. A different dealer</h3>
<p>Any reputable precious metals dealer that is set up to work with IRA custodians can bid on your metal. Large online bullion dealers often publish live "we buy" prices for common coins such as American Gold Eagles, Gold Buffalos and Canadian Maple Leafs. Comparing those published bids with your original dealer's offer is one of the simplest ways to make sure you are not being lowballed. We show you how in <a href="#how-to-compare-buyback-quotes">comparing buyback quotes</a>.</p>
<h3>3. Your custodian's liquidation process</h3>
<p>Some self-directed custodians can arrange a sale through dealers they work with if you do not name a buyer. Equity Trust's published fee schedule, for example, lists a <strong>metals liquidation fee of $10 per asset, capped at $30</strong>, which implies a standard liquidation process. Ask your custodian whether it has such a process, which dealers it uses, and how the price is set. A custodian-arranged sale can be handy for a small RMD sale or when your original dealer has gone out of business, but the price is still a dealer's bid, so it is worth comparing.</p>
<p>Whichever buyer you choose, the type of metal you hold matters more than the buyer. Widely traded bullion - see our list of the <a href="/articles/best-gold-coins-for-ira">best gold coins for an IRA</a> - attracts competitive bids from many dealers. Proof coins and "IRA-exclusive" products often attract bids only from the company that sold them, which is exactly why those products tend to be the most expensive to exit.</p>`,
  },
  {
    heading: "Why the custodian must execute every sale",
    body: `<p>It can feel strange that you cannot simply phone a dealer and sell "your" gold. The reason is that, legally, the metal is not yours yet. It belongs to the IRA, which is a trust or custodial account held for your benefit. The tax code requires that IRA bullion be in the physical possession of the trustee - in practice, an approved depository holding it in the custodian's name for your account.</p>
<p>That has three practical consequences when you sell:</p>
<ol>
<li><strong>Only the custodian can sign the metal over.</strong> The depository will not release coins on your say-so. It needs written authorization from the custodian, and the custodian needs written instructions from you.</li>
<li><strong>The money must go to the IRA, not to you.</strong> The buyer pays the custodian, which credits the cash to your IRA. If a dealer offers to send a check made out to you personally for IRA metal, something is wrong - that would at least be a distribution, and it may be a sign of a scam.</li>
<li><strong>You cannot "self-deal".</strong> You, your spouse, your parents, your children and other "disqualified persons" generally cannot buy metal from your IRA. Selling your IRA's gold coins to yourself, even at a fair price, is a prohibited transaction. If you want the coins personally, the correct route is an in-kind distribution (Option 3), which is reported and taxed.</li>
</ol>
<p>The same rule is why storing IRA gold at home is so risky. In <em>McNulty v. Commissioner</em> (2021), the Tax Court treated metal that an IRA owner kept at home through an "IRA LLC" as distributed, with tax and penalties. Our guide on <a href="/articles/can-you-store-ira-gold-at-home">whether you can store IRA gold at home</a> covers that case in detail.</p>
<p>The custodian's role also protects you. Because every sale passes through a regulated trust company, there is a paper trail: a signed instruction, a trade confirmation from the buyer, a depository release, and a statement showing the cash arriving. If any of these are missing, ask why. Our <a href="/articles/gold-ira-custodians">gold IRA custodians guide</a> explains what custodians do and how they differ.</p>
<p>One thing the custodian does <strong>not</strong> do is judge whether the dealer's price is fair. Self-directed custodians are generally "directed" trustees: they follow your instructions and do not give investment advice. If you instruct them to sell 20 Gold Eagles to a dealer at a poor price, they will usually process it. Checking the price is your job, which is why the sections below on <a href="#what-you-will-actually-be-paid-the-buyback-bid-vs-spot">what you will be paid</a> and <a href="#how-to-compare-buyback-quotes">comparing quotes</a> matter.</p>`,
  },
  {
    heading: "Step-by-step: how a gold IRA liquidation works",
    body: `<p>Here is what actually happens when you sell metal in a gold IRA. The exact forms and order differ a little between custodians, but the shape is the same everywhere.</p>
<h3>Step 1: Decide what to sell and what happens to the cash</h3>
<p>Write down exactly which products and how many: "10 one-ounce American Gold Eagles" is clearer than "$40,000 of gold". Then decide whether the cash will stay in the IRA, be distributed to you, or move to another IRA. This decision determines which forms you sign and whether tax withholding applies.</p>
<p>Look at your most recent custodian statement to confirm what you hold. The statement lists each product, quantity and the custodian's estimated value. If what is on the statement does not match what you thought you bought, sort that out before you sell.</p>
<h3>Step 2: Get quotes</h3>
<p>Call your original dealer and at least one other dealer that buys from IRAs. Ask each for a bid per coin or per bar, and ask how that bid compares with the current spot price. A good dealer will tell you the spot price and its bid in the same breath. Write the numbers down with the time of the call - gold prices move every minute.</p>
<h3>Step 3: Send instructions to the custodian</h3>
<p>Most custodians use a form often called a "buy/sell direction", "trade direction" or "liquidation request". It typically asks for:</p>
<ul>
<li>Your account number and signature</li>
<li>The products and quantities to sell</li>
<li>The buyer's name and contact details</li>
<li>The agreed price, or an instruction that the price will be locked on a recorded call</li>
<li>Where the cash should go (stay in the IRA, distribution, or transfer)</li>
</ul>
<p>If you are taking the cash out, you will also complete a distribution request, including your <strong>federal (and possibly state) tax withholding election</strong>. We cover that in <a href="#state-taxes-and-tax-withholding-on-gold-ira-withdrawals">state taxes and withholding</a>.</p>
<p>Many dealers will fill in the custodian forms for you and send them for your signature. That is fine and normal, but read every line before you sign, especially the product list and the price.</p>
<h3>Step 4: Lock the price</h3>
<p>The buyer locks the price - usually on a recorded phone call or by written confirmation - at a stated amount per coin or bar. From that moment the trade is agreed even though the metal has not moved. Ask for a written trade confirmation showing product, quantity, price per unit, total and date.</p>
<h3>Step 5: Depository release</h3>
<p>The custodian sends a release authorization to the depository. The depository pulls the metal and either ships it to the buyer (fully insured) or, if the buyer has an account at the same depository, moves it by internal transfer. Internal transfers are typically faster and cheaper.</p>
<h3>Step 6: The buyer verifies and pays</h3>
<p>The buyer receives the metal, checks it, and pays the custodian, usually by wire. Bullion from an approved depository rarely has verification problems, but if the count or product does not match, the buyer will contact the custodian.</p>
<h3>Step 7: Cash is credited, then (optionally) sent on</h3>
<p>The custodian credits the cash to your IRA and deducts its own fees, such as a liquidation fee. If you asked for a distribution, the custodian then withholds any tax you elected and sends the rest to your bank, typically by wire or check. If you asked for a transfer, it sends the cash to the receiving IRA custodian.</p>
<h3>Step 8: Keep the paperwork</h3>
<p>Save the trade confirmation, the custodian's transaction statement and, if you took a distribution, the Form 1099-R the custodian sends early the following year. Your tax preparer will need it.</p>
<p>If you are under pressure - an RMD deadline, a bill to pay - start early. The next section gives rough timelines so you can plan backward from the date you need the money.</p>`,
  },
];
