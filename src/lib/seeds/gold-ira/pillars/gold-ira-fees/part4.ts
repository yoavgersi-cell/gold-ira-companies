import type { ArticleSection } from "@/lib/config";

// Part 4 of "Gold IRA Fees & Costs (2026)".
// Break-even math, gold IRA vs gold ETF cost, fees by company (reported),
// tax treatment of fees (general), how to get a written quote, red flags.

export const part4: ArticleSection[] = [
  {
    heading: "Break-even: how much gold has to rise to cover your costs",
    body: `<p>Costs are easier to judge when you turn them into a single question: <strong>how much does the price of gold have to rise before I am back to where I started?</strong> That is your break-even.</p>
<h3>The formula</h3>
<p>There are two versions, depending on whether you count the cost of selling.</p>
<div class="qa"><strong>Break-even formulas</strong>
<em>On paper (holding):</em> Required rise = (Amount invested + all fees paid) / Metal value at spot - 1<br>
<em>After selling:</em> Required rise = (Amount invested + all fees paid + exit fees) / (Metal value at spot x (1 - buyback discount)) - 1</div>
<p>"Metal value at spot" is what your metal is worth on day one at the market price - the amount you invested minus the dealer's spread.</p>
<h3>Worked example: $100,000, high-cost, 10 years, then sold</h3>
<ol>
<li>Money out of pocket: $100,000 invested + $5,250 setup and yearly fees + $280 exit fees = <strong>$105,530</strong>.</li>
<li>Metal value at spot on day one: $100,000 - $15,000 spread = <strong>$85,000</strong>.</li>
<li>After a 2% buyback discount, you receive 98% of the metal's value: $85,000 x 0.98 = <strong>$83,300</strong> (at today's price).</li>
<li>Required rise: $105,530 / $83,300 - 1 = 1.2669 - 1 = <strong>26.7%</strong>.</li>
</ol>
<p>In plain English: gold would have to rise about 26.7% over 10 years just for you to get your $100,000 back. On paper, without selling, the figure is ($100,000 + $5,250) / $85,000 - 1 = 23.8%.</p>
<h3>Worked example: $100,000, low-cost, 10 years, then sold</h3>
<ol>
<li>Money out of pocket: $100,000 + $2,650 + $280 = <strong>$102,930</strong>.</li>
<li>Metal value at spot: $100,000 - $3,000 = <strong>$97,000</strong>.</li>
<li>After a 1.5% buyback discount: $97,000 x 0.985 = <strong>$95,545</strong>.</li>
<li>Required rise: $102,930 / $95,545 - 1 = <strong>7.7%</strong>.</li>
</ol>
<h3>Break-even table (after selling)</h3>
<p>Using the same two scenarios as our <a href="#worked-examples-the-true-1-5-and-10-year-cost">worked examples</a> (illustration):</p>
<table>
<thead><tr><th>Invested</th><th>Low-cost: 1 yr</th><th>Low-cost: 5 yrs</th><th>Low-cost: 10 yrs</th><th>High-cost: 1 yr</th><th>High-cost: 5 yrs</th><th>High-cost: 10 yrs</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>7.1%</td><td>11.5%</td><td>16.9%</td><td>25.0%</td><td>34.6%</td><td>46.6%</td></tr>
<tr><td>$50,000</td><td>5.9%</td><td>8.1%</td><td>10.8%</td><td>22.5%</td><td>27.3%</td><td>33.3%</td></tr>
<tr><td>$100,000</td><td>5.3%</td><td>6.4%</td><td>7.7%</td><td>21.3%</td><td>23.7%</td><td>26.7%</td></tr>
<tr><td>$250,000</td><td>4.9%</td><td>5.3%</td><td>5.9%</td><td>20.5%</td><td>21.5%</td><td>22.7%</td></tr>
</tbody>
</table>
<h3>What those numbers mean per year</h3>
<p>Spread over 10 years, a 7.7% total rise is about 0.74% a year; a 26.7% total rise is about 2.39% a year; and the $25,000 high-cost case (46.6%) needs about 3.9% a year. (We compound: for example, 1.267 to the power of 1/10 is about 1.0239.)</p>
<p>Those may look easy to beat. But gold has no dividends or interest, and it does not rise in a straight line. In our price data, gold fell about 70% in nominal terms from January 1980 to August 1999, about 45% from 2011 to 2015, and about 29% from its January 2026 record to the late-June 2026 low. It also rose about 65% in 2025. Long-run returns depend heavily on the start date: from 1995 to 2025, gold returned about 8.1% a year nominal, while the S&P 500 with dividends returned about 11.1%; from January 2000 to August 2025, gold did better than stocks. Past performance does not tell you what will happen next. What you control is the cost, and lower costs mean a lower hurdle whatever gold does.</p>
<p>Run your own break-even in the <a href="/gold-ira-fee-calculator">fee calculator</a> - it shows the required rise for any amount, markup and holding period.</p>`,
  },
  {
    heading: "Gold IRA vs gold ETF: what each really costs",
    body: `<p>A gold IRA is not the only way to own gold in a retirement account. You can also buy a <strong>gold exchange-traded fund (ETF)</strong> in an ordinary IRA at a brokerage. The fund holds physical gold in a vault; you own shares of the fund. The cost structure is completely different.</p>
<h3>Gold ETF expense ratios (reported, verify before buying)</h3>
<table>
<thead><tr><th>Fund</th><th>Ticker</th><th>Expense ratio</th><th>Yearly cost per $100,000</th></tr></thead>
<tbody>
<tr><td>iShares Gold Trust Micro</td><td>IAUM</td><td>0.09%</td><td>$90</td></tr>
<tr><td>SPDR Gold MiniShares</td><td>GLDM</td><td>0.10%</td><td>$100</td></tr>
<tr><td>abrdn Gold ETF Trust</td><td>SGOL</td><td>0.17%</td><td>$170</td></tr>
<tr><td>Goldman Sachs Physical Gold</td><td>AAAU</td><td>0.18%</td><td>$180</td></tr>
<tr><td>iShares Gold Trust</td><td>IAU</td><td>0.25%</td><td>$250</td></tr>
<tr><td>SPDR Gold Shares</td><td>GLD</td><td>0.40%</td><td>$400</td></tr>
</tbody>
</table>
<p>For silver, SLV reportedly charges 0.50% and SIVR 0.30%. (Gold mining funds such as GDX, at 0.51%, own company shares, not gold, and behave very differently.)</p>
<h3>$100,000 over 10 years: side by side</h3>
<p>Illustration with the gold price held flat, so the costs are comparable to our worked examples. ETF figures assume a brokerage IRA with no account fee and no trading commission, which is common at large brokerages but not universal - check yours.</p>
<table>
<thead><tr><th>Option (illustration)</th><th>Math</th><th>10-year cost</th><th>% of $100,000</th></tr></thead>
<tbody>
<tr><td>IAUM in a brokerage IRA</td><td>$100,000 x 0.09% x 10</td><td>About $900</td><td>0.9%</td></tr>
<tr><td>GLDM in a brokerage IRA</td><td>$100,000 x 0.10% x 10</td><td>About $1,000</td><td>1.0%</td></tr>
<tr><td>IAU in a brokerage IRA</td><td>$100,000 x 0.25% x 10</td><td>About $2,500</td><td>2.5%</td></tr>
<tr><td>GLD in a brokerage IRA</td><td>$100,000 x 0.40% x 10</td><td>About $4,000</td><td>4.0%</td></tr>
<tr><td>Gold IRA, low-cost scenario</td><td>See worked examples</td><td>$7,385</td><td>7.4%</td></tr>
<tr><td>Gold IRA, high-cost scenario</td><td>See worked examples</td><td>$22,230</td><td>22.2%</td></tr>
</tbody>
</table>
<p>Two caveats keep this comparison fair. First, an ETF's expense ratio is a percentage of value, so if gold rises, the dollar cost rises too, while a gold IRA's flat fees do not. Second, ETF shares trade with a small bid-ask spread - usually tiny for large funds, but not zero.</p>
<h3>The tax point many people miss</h3>
<p>Outside a retirement account, gains on physical gold and on grantor-trust gold ETFs such as GLD are taxed as <strong>collectibles</strong>, at up to 28% for long-term gains. Inside any IRA - a gold IRA or a brokerage IRA holding a gold ETF - that collectibles rate does not apply to growth while the money stays in the account. Traditional IRA withdrawals are taxed as ordinary income either way, and qualified Roth withdrawals are tax-free either way. So the tax treatment is the same; only the costs and the form of ownership differ.</p>
<h3>What you give up with an ETF</h3>
<ul>
<li><strong>You do not own specific coins or bars.</strong> You own fund shares. You cannot take an in-kind distribution of coins.</li>
<li><strong>You rely on the fund structure</strong> and its custodian and trustee arrangements.</li>
<li><strong>Some people simply want physical metal</strong> held in their name in a vault, and are willing to pay more for that.</li>
</ul>
<p>Neither choice is right for everyone. If cost is your top priority, an ETF is hard to beat. If owning physical metal matters to you, a gold IRA with a low spread can still be reasonable. Our full comparison of <a href="/articles/gold-ira-vs-gold-etf">gold IRAs vs gold ETFs</a> goes deeper on risk, liquidity and control.</p>`,
  },
  {
    heading: "Fees by company: what the big four report",
    body: `<p>Here is what is reported about fees at the four companies we cover most closely. Every figure is <strong>third-party-reported and approximate as of October 2026</strong>, and several sources conflict. <strong>None of these four companies publishes its product spreads</strong>, so the most important number - the markup on the metal - is something you must ask for.</p>
<table>
<thead><tr><th>Company</th><th>Reported minimum</th><th>Reported setup</th><th>Reported yearly fees</th><th>Promotions / waivers (advertised)</th><th>Buyback (reported)</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-hartford-gold">American Hartford Gold</a></td><td>$10,000 IRA ($5,000 cash)</td><td>About $230</td><td>About $225-$275</td><td>Storage waived 1 yr at $50k+, 3 yrs at $100k+; up to $25,000 in free silver; 7-day full refund; lowest price guarantee</td><td>"Buyback commitment", no liquidation fee; says it cannot legally guarantee repurchase</td></tr>
<tr><td><a href="/reviews/goldco">Goldco</a></td><td>Generally $25,000</td><td>$50 (one source: $275 application)</td><td>Admin $100-$125 + storage $100 non-seg / $150 seg; about $225-$275 all-in</td><td>Up to 3 years of fee waivers for eligible accounts; up to 10% bonus silver</td><td>"Highest buyback" pledge, not a contract</td></tr>
<tr><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a></td><td>$50,000</td><td>$50 (one source: $275 application)</td><td>About $100 custodian + about $100 storage ($150 segregated); another source: $225 non-seg / $275 seg</td><td>Fee waiver "up to 10 years" per one source, disclosed on a call</td><td>Advertises a no-fee lifetime buyback; one source says about 5% under its sell price in practice</td></tr>
<tr><td><a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></td><td>Not published</td><td>Not published</td><td>Not published</td><td>Up to $15,000 free silver; 7-day refund</td><td>Advertises no buy-back fees</td></tr>
</tbody>
</table>
<h3>How to read this table</h3>
<ul>
<li><strong>The yearly fees are similar.</strong> Most reported all-in figures cluster at roughly $225-$275 a year. Over 10 years, the difference between companies on yearly fees is usually a few hundred dollars.</li>
<li><strong>The promotions differ - and are paid for somewhere.</strong> As our <a href="#fees-waived-and-free-silver-promotions-what-they-really-cost">promotions example</a> shows, a fee waiver or bonus silver is only good value if the spread is competitive.</li>
<li><strong>The spread is the unknown.</strong> Because none of the four publishes spreads, two companies with identical yearly fees could cost you very different amounts. Ask each for a written, itemized quote on the same products and compare.</li>
<li><strong>Minimums shape who each company serves.</strong> Augusta's reported $50,000 minimum targets larger savers; American Hartford Gold's reported $10,000 minimum is more accessible - though, as our <a href="#worked-examples-the-true-1-5-and-10-year-cost">worked examples</a> show, fixed fees weigh heavily on small accounts.</li>
</ul>
<h3>Head-to-head comparisons</h3>
<p>If you are choosing between two of these companies, our head-to-head pages compare fees, minimums, buybacks and reputation in more detail:</p>
<ul>
<li><a href="/american-hartford-gold-vs-goldco">American Hartford Gold vs Goldco</a></li>
<li><a href="/augusta-vs-goldco">Augusta vs Goldco</a></li>
<li><a href="/augusta-vs-american-hartford-gold">Augusta vs American Hartford Gold</a></li>
</ul>
<p>Our <a href="/">gold IRA company rankings</a> weigh fee transparency alongside reputation and service. The <a href="/how-we-rank">how we rank</a> page explains the method, including how companies that publish fees and spreads are treated. If we earn a commission when you contact a company through our site, we say so next to the link.</p>`,
  },
  {
    heading: "Are gold IRA fees tax-deductible?",
    body: `<p>For most people today, <strong>probably not</strong> - but the details depend on your situation, so treat this section as general background and ask a tax professional before you act.</p>
<h3>The general picture</h3>
<p>Before 2018, some investment and IRA custodial fees paid with outside money could be deducted as a miscellaneous itemized deduction, subject to a 2%-of-income floor. That category of deduction was suspended starting in 2018, so for most individual taxpayers there is currently no federal deduction for IRA custodial or storage fees. Rules can change and state rules differ, which is why we suggest confirming your own case with a tax professional. IRS <a href="https://www.irs.gov/publications/p590a" target="_blank" rel="noopener noreferrer">Publication 590-A</a> (contributions) and <a href="https://www.irs.gov/publications/p590b" target="_blank" rel="noopener noreferrer">Publication 590-B</a> (distributions) are the IRS's main IRA references.</p>
<h3>Paying fees from inside vs outside the IRA</h3>
<p>Most custodians let you choose how to pay yearly fees: from cash held inside the IRA, or with a check or card from your own money outside it.</p>
<table>
<thead><tr><th></th><th>Paid from inside the IRA</th><th>Paid from outside the IRA</th></tr></thead>
<tbody>
<tr><td>Effect on the account</td><td>Reduces the IRA balance; in a metals-only IRA you may need to keep cash or sell metal to cover fees</td><td>Leaves the IRA balance untouched</td></tr>
<tr><td>Contribution limit</td><td>Not a contribution</td><td>Generally, paying the IRA's own administrative fees separately has long been treated as not counting as a contribution - but confirm with a tax professional, because the treatment of trading costs and other charges can differ</td></tr>
<tr><td>Practical risk</td><td>If there is no cash, the custodian may sell metal (with fees) or bill you</td><td>If you forget to pay, late fees (Equity Trust: $50) or forced sales may follow</td></tr>
<tr><td>Who it suits</td><td>People who want the account to be self-contained</td><td>People who want every dollar inside the IRA working, and can pay from savings</td></tr>
</tbody>
</table>
<p>For a traditional IRA, paying fees from outside can help preserve the tax-deferred balance. For a Roth IRA, where qualified withdrawals are tax-free, keeping more inside the account can be even more valuable. Whether that is right for you depends on your cash flow and taxes - a fee-only financial adviser or tax professional can help you decide.</p>
<h3>Spreads are not "fees" for tax purposes</h3>
<p>The dealer's markup is part of what you pay for the metal, not a separate fee. Inside an IRA, it simply reduces the value of what you own. You do not deduct it, and you do not track a cost basis for metal inside a traditional IRA in the same way you would in a taxable account. More on how gold IRA distributions are taxed is in our <a href="/articles/gold-ira-taxes-and-rmds">taxes and RMDs guide</a>.</p>`,
  },
  {
    heading: "How to get a written quote and check it against spot",
    body: `<p>The single most useful thing you can do to control gold IRA costs is to get an <strong>itemized written quote</strong> and check it yourself. It takes about 15 minutes and requires nothing more than a phone, a calculator and a live spot-price website.</p>
<h3>Step by step</h3>
<ol>
<li><strong>Ask for the product list.</strong> Exact product names (for example, "1 oz American Gold Eagle, current year" or "1 oz gold bar, PAMP"), quantities and the price per unit.</li>
<li><strong>Ask for the spot price used</strong> and the date and time of the quote.</li>
<li><strong>Calculate the premium for each product:</strong> (price per ounce - spot) / spot x 100.</li>
<li><strong>Ask for today's buyback price</strong> on each product. Calculate the buy-sell spread: (buy price - buyback price) / buy price x 100.</li>
<li><strong>Ask for the custodian's fee schedule</strong> - the custodian's own document, not a dealer summary - and identify your tier.</li>
<li><strong>Ask for the storage arrangement in writing</strong>: depository name, commingled or segregated, flat or percentage pricing, and whether insurance is included.</li>
<li><strong>Get the terms of any promotion in writing</strong>: what is waived, for how long, and whether there is a clawback.</li>
<li><strong>Compare at least two or three companies</strong> on the same products and the same day.</li>
<li><strong>Enter the numbers in our <a href="/gold-ira-fee-calculator">fee calculator</a></strong> to see the total cost and break-even.</li>
</ol>
<h3>Worked example: checking a quote</h3>
<p>Illustration: a dealer quotes 20 one-ounce Gold Eagles at $4,700 each when spot is $4,170.</p>
<ul>
<li>Total price: 20 x $4,700 = <strong>$94,000</strong>.</li>
<li>Metal value at spot: 20 x $4,170 = <strong>$83,400</strong>.</li>
<li>Markup in dollars: $94,000 - $83,400 = <strong>$10,600</strong>.</li>
<li>Premium over spot: ($4,700 - $4,170) / $4,170 = $530 / $4,170 = <strong>12.7%</strong>.</li>
</ul>
<p>Compare that with the 3-6% retail premium on Gold Eagles from online dealers in 2026. A 12.7% premium is above the 10% bullion IRA spread one dealer disclosed, and near the 10-15% range where many consumer advocates suggest pushing back. You might accept it for good service - or you might ask a second company to quote the same 20 coins.</p>
<h3>A script of questions to ask</h3>
<p>You can read these out word for word. A reputable company will answer all of them.</p>
<ol>
<li>"What is the price per coin or bar, and what spot price are you using right now?"</li>
<li>"What is your markup over spot on each product, as a percentage?"</li>
<li>"If I wanted to sell these same products back to you today, what would you pay?"</li>
<li>"Which custodian will hold my account, and can you send me their full fee schedule?"</li>
<li>"Is the custodian fee flat or tiered by account value? Which tier will I be in?"</li>
<li>"Which depository, commingled or segregated, and what is the yearly storage cost? Is insurance included?"</li>
<li>"What will it cost me to sell, take an RMD, take metal out in kind, or close the account?"</li>
<li>"Are any fees waived? Which ones, for how long, and is there any clawback if I leave early?"</li>
<li>"Is the free or bonus metal priced into my order in any way? What is its spot value?"</li>
<li>"Can you put all of this in writing before I sign or fund the account?"</li>
</ol>
<p>The CFTC, FINRA and NASAA advisory, <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" target="_blank" rel="noopener noreferrer">"10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals"</a>, covers many of the same points.</p>
<h3>What a good answer sounds like</h3>
<p>A good answer is a number, a document and no pressure. "Our markup on Eagles today is about 5% over spot; here's the custodian's schedule; take your time." A bad answer is vague ("our prices are very competitive"), deflecting ("let's talk about why gold is going up"), or urgent ("this price is only good today").</p>`,
  },
  {
    heading: "Gold IRA fee red flags: a checklist",
    body: `<p>Use this list when you talk to any gold IRA company. One red flag does not prove wrongdoing, but two or three should make you slow down and get a second quote.</p>
<table>
<thead><tr><th>Red flag</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Will not state the markup over spot as a percentage</td><td>The spread is the biggest cost; refusing to state it hides it</td></tr>
<tr><td>Will not quote a buyback price on the same products</td><td>You cannot know your round-trip cost</td></tr>
<tr><td>Pushes proof, "premium", "rare" or "IRA-exclusive" coins</td><td>Enforcement cases found markups of roughly 50-130% on such products</td></tr>
<tr><td>Claims coins are "confiscation-proof" or "not reportable"</td><td>A sales pitch, not a reason to pay more</td></tr>
<tr><td>Calls itself or its products "IRS-approved"</td><td>The IRS does not approve dealers; it sets rules for eligible metals and custodians</td></tr>
<tr><td>Only gives a dealer summary, not the custodian's fee schedule</td><td>The custodian's schedule is the binding document</td></tr>
<tr><td>Quotes "$75-$225 a year" for a large Equity Trust account</td><td>Equity Trust's published fees are $320+ at $15,000 and up</td></tr>
<tr><td>Big "free silver" or "no fees" offers with no stated spread</td><td>The promotion may be funded by a higher markup</td></tr>
<tr><td>Pressure to decide today or "before prices rise"</td><td>Urgency prevents comparison shopping</td></tr>
<tr><td>Suggests a "home storage" gold IRA</td><td>Home storage of IRA metal risked a taxable distribution in <em>McNulty</em></td></tr>
<tr><td>Wants you to take a 60-day rollover check instead of a direct transfer</td><td>Withholding and once-per-12-months limits can create taxes and penalties</td></tr>
<tr><td>Discourages you from talking to a family member or adviser</td><td>A classic sign of high-pressure selling to retirees</td></tr>
<tr><td>Refuses to put terms in writing</td><td>If it is not in writing, you cannot enforce it</td></tr>
</tbody>
</table>
<p>If several of these apply, walk away. Our guide to <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> covers each one in more depth, along with how to report a problem to your state securities regulator or the CFTC.</p>`,
  },
];
