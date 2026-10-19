import type { ArticleSection } from "@/lib/config";

// Part 2 of "Gold IRA: The Complete Guide to Precious Metals IRAs (2026)".
// 2026 contribution limits, funding (contributions, rollovers, transfers),
// costs overview with a worked example, and gold/silver price history.

export const part2: ArticleSection[] = [
  {
    heading: "2026 contribution limits for gold IRAs",
    body: `<p>A gold IRA follows exactly the same contribution limits as any other IRA. For 2026, the IRS raised most limits in <a href="https://www.irs.gov/retirement-plans/cola-increases-for-dollar-limitations-on-benefits-and-contributions" target="_blank" rel="noopener noreferrer">Notice 2025-67</a>. Most gold IRAs are funded by rollovers, which have <strong>no annual limit</strong>, but the numbers below matter if you plan to add new money each year or are still contributing to a workplace plan.</p>
<table>
<thead><tr><th>Account</th><th>Base limit (2026)</th><th>Catch-up</th><th>Total with catch-up</th></tr></thead>
<tbody>
<tr><td>Traditional + Roth IRA (combined)</td><td>$7,500</td><td>$1,100 at age 50+</td><td>$8,600</td></tr>
<tr><td>401(k), 403(b), governmental 457, TSP</td><td>$24,500</td><td>$8,000 at age 50+</td><td>$32,500</td></tr>
<tr><td>401(k), 403(b), 457, TSP - ages 60-63</td><td>$24,500</td><td>$11,250 (replaces the $8,000)</td><td>$35,750</td></tr>
<tr><td>SIMPLE IRA</td><td>$17,000</td><td>Separate SIMPLE catch-up rules</td><td>Ask your plan</td></tr>
<tr><td>SEP IRA / total plan additions</td><td>25% of compensation</td><td>None</td><td>Capped at $72,000 annual additions</td></tr>
</tbody>
</table>
<h3>Roth IRA income limits for 2026</h3>
<p>You can contribute directly to a Roth IRA only if your modified adjusted gross income (MAGI) is below these ranges. Inside the range, the amount you may contribute shrinks; above it, you cannot contribute directly at all.</p>
<table>
<thead><tr><th>Filing status</th><th>Full contribution below</th><th>Phase-out range</th><th>No direct contribution above</th></tr></thead>
<tbody>
<tr><td>Single / head of household</td><td>$153,000</td><td>$153,000-$168,000</td><td>$168,000</td></tr>
<tr><td>Married filing jointly</td><td>$242,000</td><td>$242,000-$252,000</td><td>$252,000</td></tr>
<tr><td>Married filing separately (lived with spouse)</td><td>-</td><td>$0-$10,000</td><td>$10,000</td></tr>
</tbody>
</table>
<h3>Things people often get wrong</h3>
<ul>
<li><strong>The IRA limit is shared.</strong> $7,500 (or $8,600 at 50+) is the total across every traditional and Roth IRA you own, including a gold IRA.</li>
<li><strong>You need earned income.</strong> You can only contribute up to the amount of your taxable compensation for the year. A spouse with no earnings may be able to use a spousal IRA based on the working spouse's income.</li>
<li><strong>Deductibility can phase out.</strong> If you or your spouse are covered by a workplace plan, your traditional IRA contribution may not be deductible above certain incomes. The thresholds are in IRS Publication 590-A.</li>
<li><strong>Annual contributions rarely buy much metal.</strong> At ~$4,170 an ounce, a full $8,600 contribution buys about two ounces of gold before costs. With flat custodian and storage fees of $200-$300 a year, a small account funded only by annual contributions loses a large share to fees. That is why most companies set minimums of $10,000 or more and why most gold IRAs start with a rollover.</li>
</ul>
<p>Contributions for a tax year can generally be made up to the tax-filing deadline the following April. Your custodian reports them to the IRS on Form 5498.</p>`,
  },
  {
    heading: "How to fund a gold IRA: contributions, rollovers and transfers",
    body: `<p>There are three ways to put money into a gold IRA. Remember that you always fund it with <strong>money</strong>, never with metal you already own. The custodian then uses that money to buy metal from your chosen dealer.</p>
<table>
<thead><tr><th>Method</th><th>Where the money comes from</th><th>Limit</th><th>Tax risk if done right</th><th>Main trap</th></tr></thead>
<tbody>
<tr><td>New contribution</td><td>Your bank account</td><td>$7,500 / $8,600 (2026)</td><td>None</td><td>Exceeding the shared IRA limit</td></tr>
<tr><td>Trustee-to-trustee transfer</td><td>Another IRA of the same type</td><td>Unlimited amount and frequency</td><td>None - you never touch the money</td><td>Paperwork delays at the old custodian</td></tr>
<tr><td>Direct rollover</td><td>A 401(k), 403(b), 457(b) or TSP</td><td>Unlimited</td><td>None - check goes to the new custodian</td><td>Plan may not allow it while you still work there</td></tr>
<tr><td>Indirect (60-day) rollover</td><td>A check paid to you</td><td>One IRA-to-IRA rollover per 12 months, across all your IRAs</td><td>High</td><td>Missing 60 days; 20% withholding from employer plans</td></tr>
</tbody>
</table>
<h3>Transfers and direct rollovers: the safe route</h3>
<p>In a <strong>trustee-to-trustee transfer</strong> (IRA to IRA) or a <strong>direct rollover</strong> (workplace plan to IRA), the money moves straight from the old institution to your new gold IRA custodian. You never receive a check made out to you personally, so nothing is withheld and nothing is taxed. You can do as many of these as you like. This is the method we recommend for almost everyone.</p>
<h3>Indirect rollovers: the risky route</h3>
<p>In an <strong>indirect rollover</strong>, the old plan pays the money to you and you have <strong>60 days</strong> to deposit it into the new IRA. Two rules make this dangerous:</p>
<ul>
<li><strong>20% mandatory withholding.</strong> When a 401(k) or similar plan pays an eligible rollover distribution to you, it must withhold 20% for federal tax. To roll over the full amount, you must make up that 20% from other savings within 60 days. Whatever you do not replace is taxed, and may also face the 10% additional tax if you are under 59&frac12;.</li>
<li><strong>One per 12 months.</strong> You can do only one 60-day IRA-to-IRA rollover in any 12-month period, counted across all your IRAs. A second one is a taxable distribution. Transfers and direct rollovers do not count toward this limit.</li>
</ul>
<p>The IRS can sometimes waive a missed 60-day deadline (for example, through the self-certification procedure in Rev. Proc. 2020-46 for specific reasons such as a financial institution's error or a serious illness), but you should never plan on that.</p>
<h3>Special situations</h3>
<ul>
<li><strong>Still working?</strong> Many 401(k) plans do not allow rollovers while you are employed, except after age 59&frac12; (an "in-service distribution"). Check your plan's rules.</li>
<li><strong>Federal employees:</strong> TSP rollovers have their own forms and timing. See our <a href="/articles/tsp-to-gold-ira-rollover">TSP to gold IRA rollover guide</a>.</li>
<li><strong>401(k) to gold IRA:</strong> step-by-step instructions are in our <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover guide</a>.</li>
<li><strong>Roth money</strong> must go into a Roth IRA. Rolling pre-tax money into a Roth is a conversion and is taxable in that year.</li>
<li><strong>Inherited IRAs:</strong> non-spouse beneficiaries cannot do a 60-day rollover; they can only move an inherited IRA by trustee-to-trustee transfer into another inherited IRA. Most non-spouse beneficiaries must also empty the account within 10 years.</li>
<li><strong>SIMPLE IRAs:</strong> wait until two years after you first joined the plan, or the early-withdrawal penalty is 25%.</li>
</ul>
<p>For the full process - forms, timelines, what to say to your old provider and how long it usually takes - read our complete <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a>. It is the companion pillar to this one.</p>
<h3>Do you have to move everything?</h3>
<p>No. You can do a <strong>partial</strong> rollover or transfer - for example, move $40,000 of a $400,000 401(k) into a gold IRA and leave the rest where it is. Most people who use gold IRAs hold them as one piece of a wider portfolio, not as their only retirement account. We discuss sensible sizes in the <a href="#how-much-of-your-retirement-should-be-in-gold">allocation section</a>.</p>`,
  },
  {
    heading: "What does a gold IRA cost?",
    body: `<div class="qa"><strong>Short answer:</strong> Expect a one-time setup fee of roughly $0-$75, yearly custodian and storage fees of roughly <strong>$200-$700+</strong> depending on the custodian and your account size, small per-trade and wire fees, and - the biggest cost - a dealer markup of about <strong>2-7%</strong> on common bullion at competitive online dealers or reportedly <strong>7-10%+</strong> at many phone-sales companies. Proof and "premium" coins can carry markups of 20% or more.</div>
<p>Gold IRA costs come in layers. Some are visible on your statement. The largest one usually is not.</p>
<h3>The cost layers</h3>
<table>
<thead><tr><th>Cost</th><th>When you pay it</th><th>Typical range (Oct 2026)</th><th>Shown on statement?</th></tr></thead>
<tbody>
<tr><td>Custodian setup fee</td><td>Once</td><td>$0-$75 (Equity Trust $50 online)</td><td>Yes</td></tr>
<tr><td>Custodian annual fee</td><td>Every year</td><td>$90-$300 flat at many custodians; tiered by value at some (Equity Trust $225 under $15k up to $2,250 at $2M+)</td><td>Yes</td></tr>
<tr><td>Storage fee</td><td>Every year</td><td>~$95-$240; commingled cheaper than segregated; some vaults charge ~0.08-0.15% of value</td><td>Yes</td></tr>
<tr><td>Dealer markup (premium over spot)</td><td>Each purchase</td><td>~2-7% common bullion online; reported 7-10%+ phone-sales; 20%+ proofs</td><td>Usually no - built into the price</td></tr>
<tr><td>Buyback spread</td><td>When you sell</td><td>Dealers typically bid ~1-2% under spot for common coins</td><td>Usually no</td></tr>
<tr><td>Transaction / trade fees</td><td>Each buy or sell</td><td>$0-$130 per trade at the custodian</td><td>Yes</td></tr>
<tr><td>Wire fee</td><td>Each wire</td><td>~$30</td><td>Yes</td></tr>
<tr><td>In-kind distribution / shipping</td><td>If you take metal out</td><td>~$50-$200 plus shipping at cost</td><td>Yes</td></tr>
<tr><td>Termination / closing fee</td><td>If you close the account</td><td>~$100-$300</td><td>Yes</td></tr>
</tbody>
</table>
<p>Sources: Equity Trust Retail Fee Schedule (Rev. 11/06/2025); Preferred Trust, uDirect IRA, Advanta IRA and New Direction fee pages; third-party summaries of STRATA, GoldStar and Kingdom Trust; findbullionprices.com premium data. Fee schedules change - check the current version.</p>
<h3>Same custodian, very different bills</h3>
<p>Flat-fee and tiered custodians produce very different costs as your account grows. Two examples from published schedules:</p>
<table>
<thead><tr><th>Account value</th><th>Flat-fee custodian (e.g. $150/yr + ~$115 storage)</th><th>Tiered custodian (Equity Trust annual + $110 storage)</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>~$265/yr</td><td>$350 + $110 = $460/yr</td></tr>
<tr><td>$100,000</td><td>~$265/yr</td><td>$500 + $110 = $610/yr</td></tr>
<tr><td>$250,000</td><td>~$265/yr</td><td>$700 + $110 = $810/yr</td></tr>
<tr><td>$500,000</td><td>~$265/yr</td><td>$1,750 + $110 = $1,860/yr</td></tr>
</tbody>
</table>
<p>The flat example uses STRATA's reported "Precious Metals Tier" ($150 from Sep 1, 2026) plus its reported commingled storage. Many review sites quote "$75-$225 a year" for Equity Trust - according to its own schedule, that is wrong for accounts above $15,000. Gold IRA companies often quote "about $225-$275 a year all-in," which may reflect waivers, older schedules or smaller accounts. Ask for the custodian's current fee schedule, not a salesperson's summary.</p>
<h3>Worked example: $100,000 rollover, held 10 years</h3>
<p>Suppose you roll over $100,000, buy gold, hold it for ten years, and the gold price ends exactly where it started. This shows how much the costs alone take.</p>
<table>
<thead><tr><th>Scenario</th><th>Melt value bought</th><th>10 years of fees</th><th>Value after selling at ~1.5% under spot, less fees</th><th>Gold rise needed to break even (approx.)</th></tr></thead>
<tbody>
<tr><td>Low-cost: 3% premium, ~$265/yr fees</td><td>~$97,100</td><td>~$2,650</td><td>~$93,000</td><td>~7%</td></tr>
<tr><td>Typical phone dealer: 8% markup, ~$400/yr</td><td>~$92,600</td><td>~$4,000</td><td>~$87,200</td><td>~14%</td></tr>
<tr><td>Proof coins: 30% markup, ~$400/yr</td><td>~$76,900</td><td>~$4,000</td><td>~$71,800</td><td>~37%</td></tr>
</tbody>
</table>
<p>Illustrative only, before taxes; assumes a flat gold price and ignores the time value of money. Fees here are assumed paid from the IRA. Some custodians let you pay annual fees from outside the account, which keeps more metal working for you - ask a tax professional how that applies to you.</p>
<p>The lesson: <strong>the markup you pay on day one usually matters more than the annual fees.</strong> A company that waives a year or two of $250 fees but charges a few extra percentage points of markup on a $100,000 order has not saved you money. Read the full breakdown in our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> and run your own scenario in the <a href="/gold-ira-fee-calculator">fee calculator</a>.</p>
<h3>"Free silver" and fee waivers</h3>
<p>Many companies advertise bonus silver or several years of waived fees on qualifying orders. These can be genuine, but the value has to come from somewhere - often a higher price on the metal you buy. Compare the <strong>total ounces you receive for your money</strong> against the current spot price, with and without the promotion. If a company will not tell you its markup in writing, assume it is high.</p>`,
  },
  {
    heading: "Gold price history and 2026 context",
    body: `<p>Before you buy any asset, it helps to see how it has actually behaved - not just in the good years. Here is what gold has done over the last decade, using year-end closing prices.</p>
<h3>Gold year-end closes, 2015-2025</h3>
<table>
<thead><tr><th>Year</th><th>Year-end close (USD/oz)</th><th>Change in year</th></tr></thead>
<tbody>
<tr><td>2015</td><td>$1,061</td><td>-10.7%</td></tr>
<tr><td>2016</td><td>$1,152</td><td>+6.8%</td></tr>
<tr><td>2017</td><td>$1,303</td><td>+13.3%</td></tr>
<tr><td>2018</td><td>$1,283</td><td>-1.9%</td></tr>
<tr><td>2019</td><td>$1,517</td><td>+18.4%</td></tr>
<tr><td>2020</td><td>$1,899</td><td>+25.0%</td></tr>
<tr><td>2021</td><td>$1,829</td><td>-5.8%</td></tr>
<tr><td>2022</td><td>$1,823</td><td>~+0.4%</td></tr>
<tr><td>2023</td><td>$2,063</td><td>+12.8%</td></tr>
<tr><td>2024</td><td>~$2,610-$2,624</td><td>~+27%</td></tr>
<tr><td>2025</td><td>~$4,310-$4,323</td><td>~+65%</td></tr>
</tbody>
</table>
<p>Source: JM Bullion historical data; yearly changes as reported (they reflect each source's own start and end points, so they may not match the closes exactly). In four of these eleven years, gold fell or was flat.</p>
<h3>Annual average prices</h3>
<p>Year-end prices can be misleading because one day's price may be unusual. Annual averages smooth that out. Gold averaged $1,393 in 2019, $1,770 in 2020, $1,799 in 2021, $1,800 in 2022, $1,941 in 2023 and $2,386 in 2024 (LBMA). In 2025 it averaged a record <strong>$3,431</strong>, according to the World Gold Council, setting 53 record LBMA afternoon prices during the year, with a fourth-quarter average of $4,135.</p>
<h3>2026: a record high, then a sharp fall</h3>
<ul>
<li><strong>January 29, 2026:</strong> gold hit a record of about <strong>$5,595 an ounce</strong> intraday (Reuters). The LBMA morning fix that day was $5,501.70 and the afternoon fix $5,405.00.</li>
<li><strong>January 30:</strong> spot fell 3.9% to about $5,183 in a single day.</li>
<li><strong>Late June 2026:</strong> the LBMA fix hit a low of about <strong>$3,994.50</strong> - roughly <strong>29% below the January peak</strong>.</li>
<li><strong>October 19, 2026:</strong> about <strong>$4,170</strong> (Kitco), still around 25% below the record but about 4% above the June low.</li>
</ul>
<p>That 2026 swing matters for anyone thinking about a gold IRA now. Someone who rolled $100,000 into gold at the January peak was sitting on roughly $71,000 of metal value by June - before counting the dealer markup. It is a vivid reminder that gold is not a "safe" asset in the sense of a stable price. It is a volatile asset that has historically behaved differently from stocks.</p>
<h3>Silver: even more volatile</h3>
<table>
<thead><tr><th>Year</th><th>Silver average (USD/oz)</th></tr></thead>
<tbody>
<tr><td>2015</td><td>$15.68</td></tr>
<tr><td>2017</td><td>$17.05</td></tr>
<tr><td>2019</td><td>$16.21</td></tr>
<tr><td>2020</td><td>$20.55</td></tr>
<tr><td>2021</td><td>$25.14</td></tr>
<tr><td>2022</td><td>$21.73</td></tr>
<tr><td>2023</td><td>$23.35</td></tr>
<tr><td>2024</td><td>$28.27</td></tr>
<tr><td>2025</td><td>$40.03</td></tr>
</tbody>
</table>
<p>Silver closed 2025 at about $72, up roughly 145% for the year, and reportedly reached about $121.62 on January 29, 2026 (Metalcharts; we could not independently verify this peak). On October 19, 2026 it traded near <strong>$57.70</strong> - more than 50% below that reported high. The gold-to-silver ratio was about 72 to 1. Silver's bigger swings cut both ways; see our <a href="/articles/silver-ira">silver IRA guide</a>.</p>
<h3>What drove the 2024-2026 run?</h3>
<p>Analysts generally point to record central-bank buying, strong investment demand (total gold demand hit a record 1,231 tonnes in the first quarter of 2026, according to industry data), inflation worries and geopolitical tension. Forecasts for 2026 were scattered - ING expected an average around $4,325, and Goldman Sachs ($4,900) and Bank of America ($5,000) published higher numbers before cutting them later in 2026 (to about $4,650 for end-2026 and a $4,360 average respectively; see our <a href="/articles/gold-price-history">gold price history</a>). Forecasts are opinions, not promises, and the spread between them shows how uncertain the outlook is. Nobody can tell you whether today's price is high or low.</p>`,
  },
];
