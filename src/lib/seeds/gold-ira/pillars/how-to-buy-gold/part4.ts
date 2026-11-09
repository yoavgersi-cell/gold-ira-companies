import type { ArticleSection } from "@/lib/config";

// Part 4 of "How to Buy Gold in 2026". Sales tax, IRS reporting (Form 8300,
// dealer 1099-B lists), taxes on sale (28% collectibles; IRA rules),
// counterfeit gold, storage costs and insurance.
// Sources: findbullionprices + other 2026 state trackers (sales tax counts
// disagree, 34-46); IRS Form 8300 page; APMEX tax FAQ and CoinWeek 2026 on
// 1099-B lists (conflicting bar thresholds); ValuePenguin (box cost); M&T
// Bank FAQ (FDIC); Texas Bullion Depository and BullionStar US fee pages;
// Adjusters International (ISO HO 00 03 $200 limit).

export const part4: ArticleSection[] = [
  {
    heading: "Do you pay sales tax on gold?",
    body: `<p><strong>In most US states, no. Roughly 40-46 states either have no sales tax or exempt investment-grade gold and silver bullion, though some exempt it only above a dollar threshold. A handful of states still tax bullion, and the rules change, so check your own state before you buy.</strong></p>
<p>Sales tax can quietly add 5-10% to the cost of gold in a state that taxes it - more than the dealer's premium. That makes it one of the first things to check.</p>
<h3>What the 2026 trackers say</h3>
<ul>
<li><strong>Five states have no statewide sales tax at all:</strong> Alaska, Delaware, Montana, New Hampshire and Oregon. (Some Alaska localities levy their own sales taxes.)</li>
<li><strong>Most other states exempt bullion</strong>, but the counts differ by tracker: guides published in 2026 put the number of exempt states anywhere from 34 to 46, depending on how they count threshold and partial exemptions (<a href="https://findbullionprices.com/blog/bullion-sales-tax-by-state/" rel="nofollow noopener" target="_blank">findbullionprices</a> and others).</li>
<li><strong>Threshold rules:</strong> some states exempt only purchases above a set amount. Connecticut, for example, is reported to exempt gold and silver transactions over $1,000.</li>
<li><strong>Recent changes:</strong> 2026 trackers report that Washington state ended its bullion exemption effective January 1, 2026. Laws like this change, which is one reason the counts disagree.</li>
</ul>
<p>Because no official national list exists and the trackers disagree, we do not print a state-by-state table here. The reliable source is your <strong>state department of revenue</strong>.</p>
<h3>How sales tax works when you buy online</h3>
<ul>
<li>Since the Supreme Court's 2018 <em>Wayfair</em> decision, large online sellers generally collect sales tax for the state you ship to. If your state taxes bullion, the dealer will usually charge it at checkout.</li>
<li>If your state exempts bullion, you should not see sales tax on qualifying products - but some states define "bullion" narrowly, and numismatic or collectible coins may still be taxed.</li>
<li>If a seller does not collect tax and your state taxes bullion, you may owe "use tax" yourself.</li>
</ul>
<p>Gold bought inside a gold IRA is generally handled by the custodian and dealer, and sales tax is not usually charged on IRA purchases stored at a depository - but confirm with your custodian.</p>`,
  },
  {
    heading: "Do dealers report gold purchases to the IRS?",
    body: `<p><strong>Generally, no - an ordinary purchase of gold is not reported to the IRS. The main exception is cash: a dealer that receives more than $10,000 in cash in one transaction, or in related transactions, must file Form 8300. When you sell certain products in certain quantities, the dealer may file Form 1099-B.</strong></p>
<p>This question attracts a lot of myth. Here are the rules as we understand them, with sources. If you are dealing in large amounts, talk to a tax professional.</p>
<h3>Buying: Form 8300 and cash</h3>
<p>Under the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/form-8300-and-reporting-cash-payments-of-over-10000" rel="nofollow noopener" target="_blank">IRS rules on Form 8300</a>, a business that receives more than $10,000 in cash in one transaction or in two or more related transactions must report it. "Cash" includes coins and currency, and in certain types of sales it can also include cashier's checks, bank drafts, traveler's checks and money orders with a face amount of $10,000 or less.</p>
<ul>
<li>Paying by <strong>personal check or bank wire</strong> is not "cash" for Form 8300 purposes.</li>
<li><strong>Splitting a cash purchase</strong> into smaller amounts to avoid a filing ("structuring") is itself a federal crime, even if the money is entirely legitimate.</li>
<li>The dealer must give you written notice that it filed.</li>
</ul>
<h3>Selling: Form 1099-B for certain products</h3>
<p>When you <strong>sell</strong> to a dealer, the dealer may have to report the sale on Form 1099-B for certain products in certain quantities. Dealer lists have traditionally included:</p>
<table>
<thead><tr><th>Product sold to a dealer</th><th>Commonly cited reporting trigger</th></tr></thead>
<tbody>
<tr><td>1 oz Gold Maple Leafs, Krugerrands or Mexican Onzas</td><td>25 or more coins in one transaction</td></tr>
<tr><td>Gold bars (.995 fine or better)</td><td>Traditionally 1 kilo (32.15 oz) or more in total; some 2026 guidance cites one 100 oz bar or three or more kilo bars</td></tr>
<tr><td>American Gold Eagles and Gold Buffalos</td><td>Generally not on the reportable list</td></tr>
</tbody>
</table>
<p>Sources: <a href="https://www.apmex.com/faq/tax-information-on-gold-silver-buying" rel="nofollow noopener" target="_blank">APMEX tax FAQ</a>; <a href="https://coinweek.com/precious-metals-reporting-requirements-what-every-gold-and-silver-investor-must-know-in-2026/" rel="nofollow noopener" target="_blank">CoinWeek, 2026</a>. Dealer lists disagree on the bar threshold, so ask your dealer before a large sale.</p>
<p><strong>Important:</strong> whether or not the dealer files a 1099-B, <strong>you are responsible for reporting any gain</strong> on your own tax return. "Non-reportable" products are not tax-free - a sales pitch that implies otherwise is a warning sign.</p>`,
  },
  {
    heading: "How is gold taxed when you sell it?",
    body: `<p><strong>Outside a retirement account, the IRS treats physical gold as a collectible. Gains on gold held more than a year are taxed at your ordinary rate up to a maximum of 28%, plus the 3.8% net investment income tax for higher earners. Gold held a year or less is taxed as ordinary income. Inside an IRA, normal IRA rules apply instead.</strong></p>
<p>This is the part of gold ownership many buyers learn about too late. Stocks held long term are taxed at a top federal rate of 20%. Gold's top long-term rate is <strong>28%</strong>.</p>
<h3>Gold outside an IRA</h3>
<ul>
<li><strong>Held one year or less:</strong> short-term gain, taxed as ordinary income.</li>
<li><strong>Held more than one year:</strong> long-term collectibles gain, taxed at your ordinary rate but <strong>capped at 28%</strong>. If your bracket is lower, you pay the lower rate.</li>
<li><strong>Net investment income tax:</strong> higher-income taxpayers may owe another 3.8%.</li>
<li><strong>Gold ETFs:</strong> grantor-trust funds that hold physical metal, such as GLD and IAU, are generally taxed the same way as physical gold. Gold mining stocks are taxed like ordinary stocks.</li>
<li><strong>Losses:</strong> a loss on gold held for investment can offset other capital gains under the usual rules.</li>
</ul>
<h3>A simple illustration</h3>
<p>Suppose you bought 2.5 ounces for $9,800 (your cost basis, including the premium) and sold them three years later for $12,000. Your gain is $2,200. If your marginal rate is 24%, the federal tax is about $528. If your rate is 32%, the collectibles cap applies and the tax is about $616 (28% of $2,200), plus any net investment income tax. This is an illustration only; state income tax may also apply.</p>
<h3>Gold inside an IRA</h3>
<ul>
<li>Gains inside a traditional gold IRA are not taxed each year. You pay ordinary income tax on withdrawals, and required minimum distributions start at 73 (or 75 if you were born in 1960 or later).</li>
<li>In a Roth gold IRA, qualified withdrawals are tax-free.</li>
<li>Taking physical coins out of an IRA is a distribution, taxed on their fair market value, and a 10% additional tax may apply before age 59&frac12;.</li>
</ul>
<p>Our guide on <a href="/articles/how-to-sell-gold-ira">how to sell gold in an IRA</a> walks through those choices. Because tax situations vary, we recommend a tax professional before any large sale.</p>`,
  },
  {
    heading: "How do you avoid fake gold?",
    body: `<p><strong>The best protection against fake gold is buying common products from established sellers and keeping bars sealed in their assay packaging. If you buy elsewhere, check weight and dimensions together, and use a conductivity tester or a professional dealer for anything valuable. Simple magnet and "ping" tests catch only crude fakes.</strong></p>
<p>Counterfeit gold is a real problem, especially in online marketplaces and private sales. The most dangerous fakes use <strong>tungsten</strong>, a metal with almost the same density as gold (about 19.25 g/cm&sup3; vs 19.32 for gold), so a tungsten-core bar can have the right size and the right weight.</p>
<h3>Tests, from simplest to most reliable</h3>
<table>
<thead><tr><th>Test</th><th>What it catches</th><th>What it misses</th></tr></thead>
<tbody>
<tr><td>Magnet test</td><td>Fakes made of steel or other magnetic metals (gold is not magnetic)</td><td>Tungsten, copper, brass and lead are also non-magnetic</td></tr>
<tr><td>Visual check against official images</td><td>Poor detail, wrong fonts, wrong edge reeding</td><td>High-quality fakes</td></tr>
<tr><td>Weight and dimensions together</td><td>Most fakes - they rarely get both right</td><td>Tungsten-core fakes</td></tr>
<tr><td>"Ping" (ring) test</td><td>Base-metal coins, which sound dull</td><td>Works poorly on bars; can miss well-made fakes</td></tr>
<tr><td>Electronic conductivity tester (e.g., Sigma Metalytics)</td><td>Tungsten cores and plating, through the packaging in many cases</td><td>Costs roughly $800-$1,500 per one dealer source; needs practice</td></tr>
<tr><td>Professional assay (XRF, ultrasound)</td><td>Nearly all fakes</td><td>Costs money and time; some methods only read the surface</td></tr>
</tbody>
</table>
<p>Sources: dealer authentication guides such as <a href="https://www.usagold.com/how-to-test-gold-coins-authentication-methods/" rel="nofollow noopener" target="_blank">USAGOLD</a>. Dealer guides sometimes recommend the tools they sell, so use several methods for anything valuable.</p>
<h3>Practical rules</h3>
<ul>
<li><strong>Buy common products from established sellers.</strong> Costco, large dealers and the US Mint supply chain carry far less counterfeit risk than marketplaces or strangers.</li>
<li><strong>Keep bars sealed.</strong> A bar in its original assay card with a matching serial number is easier to sell and trust.</li>
<li><strong>Be suspicious of prices below spot.</strong> No legitimate seller sells genuine gold for less than the metal is worth.</li>
<li><strong>Do not buy gold on social media or from someone you met online.</strong></li>
<li><strong>Have unfamiliar items tested</strong> before you pay - a reputable coin shop can usually do this quickly.</li>
</ul>`,
  },
  {
    heading: "Where should you store gold?",
    body: `<p><strong>Store small amounts at home in a bolted-down safe that only you know about, with proper insurance; store larger amounts in a bank safe deposit box or a professional vault. Gold held in an IRA must be stored at an approved depository. The right choice balances cost, access and the risk of theft.</strong></p>
<p>Storage is the cost many first-time buyers forget. Here are the main options and what they cost as of late 2026.</p>
<table>
<thead><tr><th>Storage option</th><th>Typical cost</th><th>Access</th><th>Insured?</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Home safe</td><td>One-time cost of the safe and installation (varies widely)</td><td>Immediate</td><td>Only if you add a rider; standard policies often cap coins and bullion at about $200</td><td>A few ounces you want close at hand</td></tr>
<tr><td>Bank safe deposit box</td><td>About $60 a year on average, more for larger boxes (<a href="https://www.valuepenguin.com/banking/average-cost-of-safety-deposit-box" rel="nofollow noopener" target="_blank">ValuePenguin</a>)</td><td>Bank hours only</td><td>No - contents are not FDIC insured and banks generally do not insure them (<a href="https://www.mtb.com/help-center/faqs/safe-deposit-box" rel="nofollow noopener" target="_blank">M&amp;T Bank FAQ</a>)</td><td>Moderate amounts; people who rarely need access</td></tr>
<tr><td>Private vault / depository (non-IRA)</td><td>About 0.39-0.49% of value a year at US examples: BullionStar US 0.39% for gold; Texas Bullion Depository 0.49% in its lowest tier (from Apr 1, 2026)</td><td>By appointment or shipment</td><td>Usually included</td><td>Larger holdings; buyers who do not want gold at home</td></tr>
<tr><td>Gold IRA depository</td><td>About $100-$300 a year flat, or about 0.08-0.18% of value, through the custodian</td><td>Through the custodian only</td><td>Included</td><td>Gold held in a retirement account</td></tr>
<tr><td>Gold ETF (no storage needed)</td><td>Built into the 0.09-0.40% expense ratio</td><td>Sell any market day</td><td>Fund's own arrangements</td><td>People who want price exposure only</td></tr>
</tbody>
</table>
<p>Vault rates: <a href="https://www.bullionstar.us/help/vault-feeschedule" rel="nofollow noopener" target="_blank">BullionStar US fee schedule</a>; <a href="https://texasbulliondepository.gov/pricing" rel="nofollow noopener" target="_blank">Texas Bullion Depository</a>. IRA storage ranges come from custodian and depository fee schedules summarized in our <a href="/articles/gold-ira-fees">gold IRA fees guide</a>.</p>
<h3>What storage costs on $50,000 of gold (illustration)</h3>
<ul>
<li>Bank box: about <strong>$60</strong> a year (0.12%), but uninsured unless you buy coverage.</li>
<li>Private vault at 0.39%: <strong>$195</strong> a year. At 0.49%: <strong>$245</strong> a year.</li>
<li>Gold IRA depository: about <strong>$100-$300</strong> a year, plus custodian fees.</li>
<li>Gold ETF at 0.10%: <strong>$50</strong> a year; at 0.40%: <strong>$200</strong> a year.</li>
</ul>
<h3>Home storage: do it carefully</h3>
<ul>
<li><strong>Tell almost no one.</strong> The biggest risk is people knowing you have gold.</li>
<li><strong>Bolt the safe down</strong> and choose a fire-rated model.</li>
<li><strong>Avoid obvious hiding places</strong> and shipping boxes left on the curb.</li>
<li><strong>Make a record for your heirs</strong> - an inventory and where to find it - so the gold is not lost or sold for scrap.</li>
</ul>
<p>One firm rule: <strong>gold in an IRA cannot be stored at home.</strong> The Tax Court treated home storage through an "IRA LLC" as a taxable distribution in <em>McNulty v. Commissioner</em> (2021). See <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p>`,
  },
  {
    heading: "Do you need insurance for gold at home?",
    body: `<p><strong>Usually yes, if you keep more than a few hundred dollars of gold at home. Standard homeowner's policies often limit theft coverage for coins, gold and silver to about $200-$250. To cover bullion at full value you typically need a scheduled personal property rider or a separate policy.</strong></p>
<p>Many homeowners assume their policy covers everything in the house. For precious metals, it usually does not. The widely used ISO HO 00 03 homeowner's form sets a special limit of <strong>$200 for money, coins, gold and silver</strong>, and the AAIS form uses $250 (<a href="https://www.adjustersinternational.com/resources/news-and-events/homeowners-policies-limit-coverage-on-your-valuables" rel="nofollow noopener" target="_blank">Adjusters International</a>). At $3,900 an ounce, that covers about one-twentieth of a single 1 oz coin.</p>
<h3>Your options</h3>
<ul>
<li><strong>Scheduled personal property rider (floater):</strong> lists items at declared values. Ask your insurer whether it covers bullion, whether it requires a safe, and how values are updated when gold moves.</li>
<li><strong>Separate valuables or collections policy:</strong> some insurers write standalone policies for larger holdings.</li>
<li><strong>Vault storage with included insurance:</strong> often the simplest way to insure a larger holding.</li>
</ul>
<p>Keep your receipts, serial numbers and photos in a separate place - they help with both insurance claims and taxes.</p>`,
  },
];
