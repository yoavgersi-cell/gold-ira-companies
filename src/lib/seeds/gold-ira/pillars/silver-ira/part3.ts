import type { ArticleSection } from "@/lib/config";

// Part 3 of "Silver IRA: The Complete 2026 Guide".
// 10-year cost examples ($25k/$50k/$100k), gold/silver mixes, taxes and
// RMDs, rollovers, and silver IRA vs ETFs vs home silver.

export const part3: ArticleSection[] = [
  {
    heading: "10-year cost examples: $25,000, $50,000 and $100,000",
    body: `<p>Fee schedules are easy to compare one line at a time. What matters is the <strong>total</strong> - what you would pay over a realistic holding period, including the purchase spread and the cost of getting out. Below are two illustrations for each account size: a low-cost setup and a high-cost setup.</p>
<h3>Our assumptions (illustration only)</h3>
<table>
<thead><tr><th>Assumption</th><th>Low-cost setup</th><th>High-cost setup</th></tr></thead>
<tbody>
<tr><td>Setup fee</td><td>$50</td><td>$230 (a reported dealer application fee)</td></tr>
<tr><td>Annual custodian fee</td><td>$150 flat (like STRATA's reported tier)</td><td>Equity Trust-style tier based on metal value ($320, $350 or $425)</td></tr>
<tr><td>Annual storage</td><td>$115 commingled</td><td>$160 segregated</td></tr>
<tr><td>Purchase spread (as % of what you pay)</td><td>2% (large bars at a low-cost dealer)</td><td>15% (premium or proof coins from a high-markup seller)</td></tr>
<tr><td>Sell price at exit</td><td>1% under spot</td><td>3% under spot</td></tr>
<tr><td>Exit fees</td><td>$100</td><td>$280 ($250 termination + $30 liquidation)</td></tr>
<tr><td>Silver price</td><td colspan="2">Unchanged for 10 years, so we isolate costs. Annual fees paid from outside cash.</td></tr>
</tbody>
</table>
<p>These are not quotes from any company. Real costs can be lower or higher. A 15% spread is not the worst case - regulators have documented 51%-70%+ markups on silver coins - but it is well above what competitive bullion dealers charge.</p>
<h3>The math, step by step: $50,000 low-cost</h3>
<ol>
<li>Spread: 2% of $50,000 = $1,000, so you hold <strong>$49,000</strong> of silver at spot.</li>
<li>Sell after 10 years at 1% under spot: $49,000 × 0.99 = <strong>$48,510</strong>.</li>
<li>Loss on the metal round trip: $50,000 - $48,510 = $1,490.</li>
<li>Fees: $50 setup + ($150 + $115) × 10 years = $50 + $2,650 = <strong>$2,700</strong>.</li>
<li>Exit fees: <strong>$100</strong>.</li>
<li>Total cost: $1,490 + $2,700 + $100 = <strong>$4,290</strong>, or about <strong>8.6%</strong> of $50,000.</li>
</ol>
<h3>The math, step by step: $50,000 high-cost</h3>
<ol>
<li>Spread: 15% of $50,000 = $7,500, so you hold <strong>$42,500</strong> of silver at spot.</li>
<li>That value sits in Equity Trust's $25,000-$49,999 tier: <strong>$350</strong> a year.</li>
<li>Sell at 3% under spot: $42,500 × 0.97 = <strong>$41,225</strong>. Loss on the metal: $50,000 - $41,225 = $8,775.</li>
<li>Fees: $230 + ($350 + $160) × 10 = $230 + $5,100 = <strong>$5,330</strong>.</li>
<li>Exit fees: <strong>$280</strong>.</li>
<li>Total cost: $8,775 + $5,330 + $280 = <strong>$14,385</strong>, or about <strong>28.8%</strong> of $50,000.</li>
</ol>
<h3>All three account sizes</h3>
<table>
<thead><tr><th>Illustration</th><th>Silver at spot after purchase</th><th>Sale proceeds (yr 10)</th><th>Setup + 10 yrs of fees</th><th>Exit fees</th><th>Total 10-yr cost</th><th>% of amount invested</th><th>Silver rise needed to break even</th></tr></thead>
<tbody>
<tr><td>$25,000 low-cost</td><td>$24,500</td><td>$24,255</td><td>$2,700</td><td>$100</td><td>$3,545</td><td>14.2%</td><td>+14.6%</td></tr>
<tr><td>$25,000 high-cost</td><td>$21,250</td><td>$20,612.50</td><td>$5,030</td><td>$280</td><td>$9,697.50</td><td>38.8%</td><td>+47.0%</td></tr>
<tr><td>$50,000 low-cost</td><td>$49,000</td><td>$48,510</td><td>$2,700</td><td>$100</td><td>$4,290</td><td>8.6%</td><td>+8.8%</td></tr>
<tr><td>$50,000 high-cost</td><td>$42,500</td><td>$41,225</td><td>$5,330</td><td>$280</td><td>$14,385</td><td>28.8%</td><td>+34.9%</td></tr>
<tr><td>$100,000 low-cost</td><td>$98,000</td><td>$97,020</td><td>$2,700</td><td>$100</td><td>$5,780</td><td>5.8%</td><td>+6.0%</td></tr>
<tr><td>$100,000 high-cost</td><td>$85,000</td><td>$82,450</td><td>$6,080</td><td>$280</td><td>$23,910</td><td>23.9%</td><td>+29.0%</td></tr>
</tbody>
</table>
<p class="small"><em>Illustration only. High-cost tiers: $25,000 account holds $21,250 of metal, so $320/yr tier + $160 storage = $480/yr; $100,000 account holds $85,000, so $425 + $160 = $585/yr. Break-even = (amount invested + all fees) ÷ (metal at spot × sell factor) - 1; e.g. $100,000 high-cost: ($100,000 + $6,080 + $280) ÷ $82,450 = 1.290, or +29.0%.</em></p>
<h3>What the examples show</h3>
<ul>
<li><strong>Flat fees punish small accounts.</strong> In the low-cost setup, $2,700 of fees is 10.8% of a $25,000 account but only 2.7% of $100,000.</li>
<li><strong>The spread dominates larger accounts.</strong> In the $100,000 high-cost case, $17,550 of the $23,910 total came from the purchase spread and sell discount - nearly three-quarters.</li>
<li><strong>Product choice is a bigger lever than custodian choice.</strong> Switching from a $425 tier to a $150 flat fee saves $2,750 over 10 years. Switching from a 15% spread to a 2% spread saves $13,000 on day one on $100,000.</li>
<li><strong>Silver has to work hard just to break even.</strong> In the high-cost $50,000 case, silver must rise about 35% over 10 years before you make a dollar. Given how far silver can fall, that is a meaningful hurdle.</li>
</ul>
<p>Plug in your own numbers with our <a href="/gold-ira-fee-calculator">fee calculator</a>. For the same math on gold with more account sizes, see the <a href="/articles/gold-ira-fees">gold IRA fees guide</a>.</p>`,
  },
  {
    heading: "Gold and silver mix strategies",
    body: `<p>Many precious metals IRAs hold both gold and silver. There is no "right" mix, and we cannot tell you what yours should be. But it helps to understand the trade-offs, so you can ask better questions of a dealer or a fee-only financial adviser.</p>
<h3>Why some investors mix the two</h3>
<ul>
<li><strong>Different demand drivers.</strong> Gold is driven mostly by investors and central banks; silver also by industry. They usually move in the same direction, but not always by the same amount.</li>
<li><strong>Volatility budget.</strong> Silver adds more swing per dollar. Some investors use a small silver slice to add potential upside while keeping most of the metal allocation in steadier gold.</li>
<li><strong>Flexibility at distribution time.</strong> Small silver units can make it easier to take precise in-kind distributions.</li>
</ul>
<h3>Common mixes, illustrated on $50,000</h3>
<p>The table shows what different splits would buy at October 19, 2026 spot prices, plus a rough premium cost assuming gold coins at 4% over spot and Silver Eagles at 6.87% over spot.</p>
<table>
<thead><tr><th>Mix (gold / silver)</th><th>Gold oz</th><th>Silver oz</th><th>Total weight</th><th>Approx. premium paid</th></tr></thead>
<tbody>
<tr><td>100% / 0%</td><td>12.0</td><td>0</td><td>0.8 lb</td><td>$1,923</td></tr>
<tr><td>80% / 20%</td><td>9.6</td><td>173</td><td>12.5 lb</td><td>$2,181</td></tr>
<tr><td>70% / 30%</td><td>8.4</td><td>260</td><td>18.4 lb</td><td>$2,310</td></tr>
<tr><td>50% / 50%</td><td>6.0</td><td>433</td><td>30.1 lb</td><td>$2,569</td></tr>
<tr><td>0% / 100%</td><td>0</td><td>867</td><td>59.4 lb</td><td>$3,214</td></tr>
</tbody>
</table>
<p class="small"><em>Illustration. Premium paid on an amount X at markup p = X × p ÷ (1 + p). Example for 80/20: $40,000 × 0.04 ÷ 1.04 = $1,538 on gold, plus $10,000 × 0.0687 ÷ 1.0687 = $643 on silver, for $2,181. Using 100-oz silver bars instead of coins would cut the silver premium sharply.</em></p>
<h3>Questions to ask yourself</h3>
<ol>
<li><strong>How much of my total retirement savings should be in metals at all?</strong> This is the bigger decision. Precious metals pay no interest or dividends, and both gold and silver have had long, deep slumps. Our guide to <a href="/articles/how-to-invest-in-gold-for-retirement">investing in gold for retirement</a> discusses allocation in more depth.</li>
<li><strong>How would I feel if the silver part fell by half?</strong> It just did, from the reported January 2026 high to October 2026.</li>
<li><strong>When will I need to take money out?</strong> If RMDs or withdrawals are a few years away, a volatile slice may be harder to live with.</li>
<li><strong>Am I paying for the mix or for the products?</strong> A mix sold as proof coins can cost far more than the same mix in bullion.</li>
</ol>
<h3>Be wary of mix advice tied to a sale</h3>
<p>Some sellers recommend specific gold/silver ratios based on the gold/silver ratio "returning to its average", or on forecasts. Those are opinions, not facts, and they come from people paid on what you buy. A neutral, fee-only adviser who does not sell metals is a better source for allocation advice. Whatever you choose, revisit it occasionally - the mix will drift as prices move.</p>`,
  },
  {
    heading: "Silver IRA taxes and RMDs",
    body: `<p>Good news: there are <strong>no special tax rules for silver IRAs</strong>. The same rules that govern any traditional or Roth IRA - and any gold IRA - apply. Our full guide to <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a> has the details; here is the summary with the silver-specific twists.</p>
<h3>The basics (2026)</h3>
<table>
<thead><tr><th>Rule</th><th>2026 figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>IRA contribution limit</td><td>$7,500, plus $1,100 catch-up at 50+ (total $8,600)</td><td>IRS Notice 2025-67</td></tr>
<tr><td>Roth IRA income phase-out</td><td>Single $153,000-$168,000; married filing jointly $242,000-$252,000</td><td>IRS Notice 2025-67</td></tr>
<tr><td>Early withdrawal</td><td>10% additional tax before age 59½ (exceptions apply)</td><td>IRC 72(t)</td></tr>
<tr><td>RMD starting age</td><td>73 if born 1951-1959; 75 if born 1960 or later</td><td>SECURE 2.0</td></tr>
<tr><td>Roth IRA RMDs</td><td>None for the original owner</td><td>IRS Pub. 590-B</td></tr>
</tbody>
</table>
<p>In a <strong>traditional</strong> silver IRA, gains are tax-deferred and withdrawals are taxed as <strong>ordinary income</strong> - not at the 28% "collectibles" rate that applies to physical silver held outside an IRA. In a <strong>Roth</strong> silver IRA, qualified withdrawals are tax-free. See <a href="https://www.irs.gov/publications/p590a" rel="noopener">IRS Publication 590-A</a> for contribution rules.</p>
<h3>Required minimum distributions with silver</h3>
<p>Once you reach your RMD age, you must take a minimum amount out of a traditional IRA each year. With silver you have two choices:</p>
<ol>
<li><strong>Sell silver and take cash.</strong> The dealer buys the metal, the custodian receives cash, and you withdraw it. You pay the buyback spread and any liquidation fee.</li>
<li><strong>Take silver "in kind".</strong> The custodian ships the actual coins or bars to you. The fair market value on the date of distribution counts as taxable income, just like cash.</li>
</ol>
<h3>Worked example: an RMD from a $100,000 silver IRA</h3>
<p>Illustration: a 73-year-old has a traditional silver IRA worth $100,000 on December 31 of the prior year. The IRS Uniform Lifetime Table divisor at age 73 is 26.5.</p>
<ul>
<li>RMD = $100,000 ÷ 26.5 = <strong>$3,773.58</strong></li>
<li>At $57.70 an ounce, that is $3,773.58 ÷ $57.70 = about <strong>65.4 ounces</strong> of silver</li>
</ul>
<p>Here is the silver-specific problem. If the IRA holds only 100-oz bars, each bar is worth about $5,770 - more than the whole RMD. You cannot distribute half a bar. You would have to either take a whole bar (and report the full $5,770 as income, taking more than required), or sell a bar and distribute cash. If you hold some 1 oz coins or 10 oz bars, you can distribute 65 or 66 ounces fairly precisely.</p>
<p>That is one reason some investors hold a mix of large bars (for low premiums) and smaller units (for flexibility). If you plan to take silver in kind, also remember that 65 ounces weigh about 4.5 pounds, and custodians charge shipping and in-kind distribution fees - Equity Trust, for example, lists $50 per in-kind distribution plus shipping at cost plus $10 ($50 minimum).</p>
<h3>Valuation matters for taxes</h3>
<p>When you take silver in kind, the custodian reports its fair market value - typically based on the spot price or a dealer bid - as your taxable distribution. That value can be well below what you originally paid if you bought high-premium coins. You do not get a tax deduction for the premium you overpaid inside the IRA.</p>
<h3>After you take silver out</h3>
<p>Once distributed, the silver is yours personally. Your cost basis for future sales is generally the value reported on the distribution. If you later sell it at a gain, that gain is taxed under the rules for collectibles held outside an IRA - up to 28% for long-term gains. Talk with a tax professional about your situation.</p>`,
  },
  {
    heading: "Rolling over into a silver IRA",
    body: `<p>Most silver IRAs are funded with money that already sits in a retirement account - an old 401(k), a 403(b), a TSP or another IRA. Moving it correctly is the single most important step for avoiding taxes and penalties. Our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a> walks through every scenario step by step; the process for silver is identical. Here is the short version.</p>
<h3>Transfer vs rollover</h3>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Limits and risks</th></tr></thead>
<tbody>
<tr><td><strong>Trustee-to-trustee transfer</strong> (IRA to IRA)</td><td>Your old custodian sends money directly to the new self-directed custodian</td><td>No tax, no withholding, no limit on how often</td></tr>
<tr><td><strong>Direct rollover</strong> (401(k), 403(b), TSP to IRA)</td><td>Your plan pays the new custodian directly</td><td>No tax or withholding; plan rules may restrict in-service rollovers</td></tr>
<tr><td><strong>Indirect (60-day) rollover</strong></td><td>Money is paid to you; you deposit it in the new IRA within 60 days</td><td>Only one IRA-to-IRA 60-day rollover per 12 months across all your IRAs; employer plans withhold 20%; miss the deadline and it is taxable</td></tr>
</tbody>
</table>
<p>For almost everyone, a <strong>direct transfer or direct rollover</strong> is the safer choice. With an indirect rollover from a 401(k), the plan withholds 20%, and you must make up that 20% from other money within 60 days or it is treated as a taxable distribution.</p>
<h3>Other points to know</h3>
<ul>
<li><strong>Roth stays Roth, pre-tax stays pre-tax.</strong> Moving pre-tax money into a Roth silver IRA is a conversion, taxable in the year you do it.</li>
<li><strong>SIMPLE IRAs</strong> have a 25% penalty if moved to a non-SIMPLE account in the first two years of participation.</li>
<li><strong>Inherited IRAs</strong> cannot be rolled over by non-spouse beneficiaries; only a trustee-to-trustee transfer to an inherited IRA is allowed, and the 10-year rule usually applies.</li>
<li><strong>TSP</strong> generally allows rollovers after you separate from service, or an in-service withdrawal at 59½.</li>
<li><strong>You do not have to move everything.</strong> A partial rollover lets you keep most of your savings in diversified funds and put a portion into silver.</li>
</ul>
<h3>Timing the purchase</h3>
<p>Once the money arrives at the new custodian, it sits as cash until you approve a purchase. There is no rush. Use that window to get written quotes from more than one dealer for the same products - the price difference on silver can easily be several percent, as the <a href="#silver-premiums-why-product-choice-matters-more-than-with-gold">premium examples</a> showed.</p>`,
  },
  {
    heading: "Silver IRA vs silver ETFs vs physical silver at home",
    body: `<p>A silver IRA is only one way to own silver for retirement. Two common alternatives are a <strong>silver exchange-traded fund (ETF)</strong>, which you can hold in an ordinary IRA, and <strong>physical silver kept at home</strong> outside any retirement account. Each has trade-offs.</p>
<table>
<thead><tr><th>Feature</th><th>Silver IRA (physical)</th><th>Silver ETF in a regular IRA</th><th>Physical silver at home (no IRA)</th></tr></thead>
<tbody>
<tr><td>What you own</td><td>Specific coins and bars in a depository</td><td>Shares of a trust that holds silver</td><td>Coins and bars you hold yourself</td></tr>
<tr><td>Yearly cost</td><td>About $175-$600+ in custodian and storage fees</td><td>Expense ratio: SLV 0.50%, SIVR 0.30%</td><td>Your own safe or insurance, if any</td></tr>
<tr><td>Buying cost</td><td>Premium: ~0-2% (100 oz bars) to ~7-8.5% (Silver Eagles) or more</td><td>Brokerage commission (often $0) plus a small bid-ask spread</td><td>Same premiums as a silver IRA</td></tr>
<tr><td>Tax on gains</td><td>Tax-deferred (traditional) or tax-free (qualified Roth)</td><td>Same as silver IRA when held in an IRA</td><td>Up to 28% collectibles rate on long-term gains</td></tr>
<tr><td>Can you hold the metal?</td><td>Not while it is in the IRA</td><td>No</td><td>Yes</td></tr>
<tr><td>Ease of selling</td><td>Call dealer; custodian processes</td><td>Sell any market day in seconds</td><td>Find a dealer; ship or visit</td></tr>
<tr><td>Main risk beyond price</td><td>High markups, dealer practices</td><td>Fund structure and counterparties</td><td>Theft, loss, no tax shelter</td></tr>
</tbody>
</table>
<p class="small"><em>Expense ratios as listed in our research notes (Oct 2026); verify on each fund's site before investing. Mentioning a fund is not a recommendation.</em></p>
<h3>Cost comparison over 10 years on $50,000</h3>
<p>Illustration, with silver's price held flat:</p>
<ul>
<li><strong>SIVR at 0.30%:</strong> about $150 a year × 10 = <strong>$1,500</strong>.</li>
<li><strong>SLV at 0.50%:</strong> about $250 a year × 10 = <strong>$2,500</strong>.</li>
<li><strong>Low-cost silver IRA</strong> (from our examples above): <strong>$4,290</strong>.</li>
<li><strong>High-cost silver IRA</strong>: <strong>$14,385</strong>.</li>
</ul>
<p>On pure cost, an ETF in an ordinary IRA usually wins, especially for small and mid-sized accounts. What you give up is direct ownership of specific metal: you own fund shares, not coins, and you rely on the fund's structure and custodians.</p>
<h3>Physical silver at home and the 28% rate</h3>
<p>Silver kept at home has no account fees and no custodian. But outside an IRA, long-term gains on physical silver - and on grantor-trust silver ETFs held in a taxable account - are taxed as <strong>collectibles, at up to 28%</strong>, rather than at the lower long-term capital gains rates that apply to stocks. You also take on theft and loss risk, and you pay the same dealer premiums.</p>
<p>What you cannot do is keep <strong>IRA</strong> silver at home. Some promoters sell "home storage" or "checkbook" IRA LLC arrangements. In <em>McNulty v. Commissioner</em>, 157 T.C. No. 10 (2021), the Tax Court treated metal kept at home this way as a taxable distribution, with penalties. Read our article on <a href="/articles/can-you-store-ira-gold-at-home">storing IRA gold at home</a> before you consider any such offer.</p>
<h3>Which fits whom?</h3>
<ul>
<li><strong>Silver ETF in an existing IRA:</strong> lowest cost and easiest to trade; suits people who want silver price exposure without handling metal.</li>
<li><strong>Silver IRA:</strong> suits people who specifically want vaulted physical metal in a tax-advantaged account and accept higher costs.</li>
<li><strong>Silver at home:</strong> suits people who want metal in hand outside the financial system and accept the tax and security trade-offs.</li>
</ul>
<p>Our comparison of <a href="/articles/gold-ira-vs-gold-etf">gold IRAs vs gold ETFs</a> covers the same choice for gold in more depth.</p>`,
  },
];
