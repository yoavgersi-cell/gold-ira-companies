import type { ArticleSection } from "@/lib/config";

// Part 3 of "Is a Gold IRA a Good Investment? Pros, Cons and 50 Years of Data (2026)".
// The case for (each pro with evidence and caveat), the case against, and
// worked break-even examples showing how markups and yearly fees change the math.

export const part3: ArticleSection[] = [
  {
    heading: "The case for a gold IRA: the pros",
    body: `<p>Here are the strongest arguments for holding some gold in a retirement account - each with the evidence behind it and the catch that comes with it. We have tried to state each one as fairly as its supporters would.</p>
<h3>1. It can diversify a stock-and-bond portfolio</h3>
<p><strong>Evidence:</strong> gold's price is driven by different forces from stocks and bonds (real interest rates, the dollar, central-bank buying, fear demand), and over 2000-2025 it returned about 10.4% a year while the S&amp;P 500 returned about 7.9% - a period in which a stock-heavy retiree would have benefited from owning some gold.</p>
<p><strong>Caveat:</strong> diversification helps only in modest amounts, and gold's independence from stocks is not reliable in every crisis. It also costs more to hold in an IRA than other diversifiers.</p>
<h3>2. It has held purchasing power over very long periods</h3>
<p><strong>Evidence:</strong> over 1995-2025, gold returned about 5.4% a year after inflation (Kiplinger); over 1971-2025 about 8.8% a year nominal.</p>
<p><strong>Caveat:</strong> over shorter periods - including the entire 1980s and 1990s and the high-inflation years of 2021-2022 - it did not. See <a href="#is-gold-a-good-inflation-hedge">the inflation section</a>.</p>
<h3>3. It is not anyone's promise to pay</h3>
<p><strong>Evidence:</strong> a bar of gold does not depend on a company staying in business or a government paying its debts. It has no default risk in the way a bond does. That is a big part of why central banks hold it, and why recent central-bank buying has been described as at record levels.</p>
<p><strong>Caveat:</strong> "no default risk" is not "no price risk." Gold's price can still fall 29%-70%, as history shows. And in a gold IRA you rely on a custodian and a depository to hold and record your metal, so you are not free of counterparty relationships.</p>
<h3>4. Tax advantages of an IRA</h3>
<p><strong>Evidence:</strong> inside a traditional IRA, gains grow tax-deferred; inside a Roth IRA, qualified withdrawals are tax-free (see our <a href="/articles/roth-gold-ira">Roth gold IRA guide</a>). Outside an IRA, gains on physical gold - and on grantor-trust gold ETFs such as GLD - are taxed as "collectibles" at up to 28% long-term, higher than the usual long-term capital gains rates.</p>
<p><strong>Caveat:</strong> you can get exactly the same tax shelter by holding a gold ETF inside an ordinary IRA at a brokerage, usually at a much lower cost. The tax advantage belongs to the IRA, not to physical metal.</p>
<h3>5. You own specific physical metal</h3>
<p><strong>Evidence:</strong> a gold IRA holds actual coins or bars in an approved depository, held for your account. Some people value owning a physical asset rather than a share of a fund, and segregated storage lets you hold identifiable items.</p>
<p><strong>Caveat:</strong> you cannot keep IRA gold at home - doing so through an "IRA LLC" was treated as a taxable distribution in <em>McNulty v. Commissioner</em> (2021). So in practice you never touch the metal while it is in the IRA, which makes the "physical" benefit more psychological than practical. Our <a href="/articles/gold-ira-rules">gold IRA rules guide</a> explains storage requirements.</p>
<h3>6. It can be moved from an existing account without tax</h3>
<p><strong>Evidence:</strong> a direct trustee-to-trustee transfer or direct rollover from a 401(k), 403(b), TSP or existing IRA is not taxed and has no annual limit. You do not need new cash to start.</p>
<p><strong>Caveat:</strong> rolling over retirement money is exactly how many retirees have been drawn into high-markup sales. Regulators have documented markups of up to about 130% in enforcement cases. See <a href="/articles/gold-ira-rollover">our rollover guide</a> before moving anything.</p>
<h3>7. Recent momentum and strong demand</h3>
<p><strong>Evidence:</strong> gold hit a record annual average of $3,431 in 2025 with 53 record LBMA PM prices, and total demand reached a record 1,231 tonnes in Q1 2026.</p>
<p><strong>Caveat:</strong> momentum is the weakest argument on this list. Gold fell about 29% within five months of its record. Strong recent performance is a reason prices are high, not a reason they will keep rising.</p>`,
  },
  {
    heading: "The case against a gold IRA: the cons",
    body: `<p>Now the other side, in the same detail. These are the drawbacks we think every buyer should understand before signing anything.</p>
<h3>1. No income</h3>
<p>Gold pays no interest, dividends or rent. A retiree who holds $100,000 of gold gets nothing from it until they sell some. Compare a stock fund or bond fund, which pays cash you can spend without selling. Over decades, those reinvested payments are a major part of why the S&amp;P 500 has outgrown gold (about 11.2% vs 8.8% a year since 1971).</p>
<h3>2. Volatility that does not suit "safe money"</h3>
<p>Gold's yearly moves in the last decade ranged from about -10.7% to about +65%, and in 2026 it fell about 29% in five months. If you are buying gold for peace of mind, you should be comfortable seeing your gold IRA statement drop by a quarter or more without selling in panic.</p>
<h3>3. Long flat or losing periods</h3>
<p>Gold's history includes a 70% nominal slide from 1980 to 1999 and roughly a decade (2011-2020/2023) below its 2011 high. Over 2020-2022, the annual average price barely moved ($1,770, $1,799, $1,800). Long periods of going nowhere are a real cost when you are also paying yearly fees.</p>
<h3>4. Fee drag</h3>
<p>A gold IRA is among the most expensive ways to own gold. You pay:</p>
<ul>
<li>A <strong>dealer markup</strong> over the spot price - roughly 2-7% on common bullion at online dealers, often more at phone-sales gold IRA companies, and far more on "premium" or proof coins.</li>
<li>A <strong>spread when you sell</strong> - dealers typically bid 1-2% under spot for common coins.</li>
<li><strong>Yearly custodian and storage fees</strong> - commonly about $200-$700 or more combined, depending on the custodian, account size and storage type.</li>
</ul>
<p>On a small account, those flat fees can take 1-2% a year - more than many gold ETFs cost in five or ten years. We quantify this in the <a href="#how-fees-change-the-math-break-even-examples">next section</a> and in our full <a href="/articles/gold-ira-fees">gold IRA fees guide</a>.</p>
<h3>5. Liquidity and RMD friction</h3>
<p>Selling metal in an IRA takes several steps: you ask the custodian, the custodian arranges the sale through a dealer, the metal leaves the depository, and the cash settles. That can take days and costs a fee at many custodians (for example, Equity Trust charges a $10-per-asset liquidation fee, up to $30). Taking RMDs "in kind" means paying for shipping and handling and paying tax on the metal's value with money from elsewhere. Neither is a dealbreaker, but both are slower and costlier than selling a fund.</p>
<h3>6. Sales pressure and scams</h3>
<p>The gold IRA industry is heavily marketed to people aged 50 and over, often using fear of a market crash, inflation or bank failures. Enforcement cases show what can go wrong:</p>
<table>
<thead><tr><th>Case</th><th>What regulators found</th></tr></thead>
<tbody>
<tr><td>Red Rock Secured</td><td>Told investors markups of 1-5%; charged up to about 130% (SEC); $76.4M final judgment</td></tr>
<tr><td>Safeguard Metals</td><td>Average markup about 64% vs a disclosed 4-33% (SEC); about $51M total in restitution and penalty (Oct 2025)</td></tr>
<tr><td>Lear Capital</td><td>Undisclosed commissions of up to 33% (New York AG); $6M settlement</td></tr>
<tr><td>Goldline (2012)</td><td>Markups "upwards of 55%"; refunds of up to $4.5M plus an $800k fund, without admission of wrongdoing</td></tr>
</tbody>
</table>
<p>None of this means every gold IRA company behaves this way. It means the risk of overpaying is real and you must check prices yourself. Read our <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags guide</a> and the joint CFTC/FINRA/NASAA advisory, <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="nofollow noopener" target="_blank">10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals</a>.</p>
<h3>7. Opportunity cost</h3>
<p>Every dollar in gold is a dollar not in something else. Over 1995-2025, the gap between gold's 5.4% real return and stocks' 8.4% real return turned $10,000 into roughly $48,000 vs $112,000 of 1995 purchasing power. If a large gold position causes you to miss even part of that kind of growth, the cost may be bigger than any fee.</p>
<h3>8. Marketing that overstates safety</h3>
<p>Watch for language like "crash-proof," "guaranteed to protect," "the IRS-approved way" or "the government may seize your 401(k)." No gold IRA carries a government guarantee of value, dealers are not "IRS-approved," and gold's own history disproves "crash-proof." Sales scripts built on fear are a reason to slow down, not speed up.</p>
<h3>Pros and cons at a glance</h3>
<table>
<thead><tr><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>Different price drivers from stocks and bonds - can diversify</td><td>No income; returns come only from price changes</td></tr>
<tr><td>Long-run record of beating inflation (5.4% real, 1995-2025)</td><td>Has failed as an inflation hedge for 20-year stretches</td></tr>
<tr><td>No default risk; not a promise to pay</td><td>Large drawdowns: ~-29% (2026), ~-45% (2011-15), ~-70% (1980-99)</td></tr>
<tr><td>IRA tax shelter (deferred or tax-free)</td><td>Same tax shelter is available more cheaply via an ETF</td></tr>
<tr><td>Tax-free funding by transfer or direct rollover</td><td>Markups, spreads and $200-$700+ a year in fees</td></tr>
<tr><td>Physical, identifiable metal</td><td>You cannot hold it at home; selling and RMDs are slower</td></tr>
<tr><td>Strong recent central-bank demand</td><td>Aggressive sales and documented markups up to ~130%</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "How fees change the math: break-even examples",
    body: `<p>Fees are the part of the gold IRA decision you can actually control, so it is worth seeing exactly how much they matter. The following examples are <strong>hypothetical illustrations</strong> using round numbers, not quotes from any company.</p>
<h3>The setup</h3>
<p>Two investors each move <strong>$100,000</strong> into a gold IRA. They buy the same kind of bullion. The only differences are what they pay:</p>
<table>
<thead><tr><th></th><th>Investor A ("good deal")</th><th>Investor B ("expensive deal")</th></tr></thead>
<tbody>
<tr><td>Dealer markup over spot</td><td>5%</td><td>15%</td></tr>
<tr><td>Yearly custodian + storage fees</td><td>$260</td><td>$500</td></tr>
<tr><td>Sell price when cashing out</td><td>1% under spot</td><td>1% under spot</td></tr>
</tbody>
</table>
<p>For context: $260 a year is in line with a low-cost custodian plus commingled storage (for example, STRATA's reported $150 metals tier plus $115 storage = $265). $500 is the Equity Trust annual fee for a $100,000-$199,999 account <em>before</em> storage ($110-$160 more). Real fees vary widely - use our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> with your own quotes.</p>
<h3>Step 1: how much gold you actually get</h3>
<ul>
<li><strong>A:</strong> $100,000 / 1.05 = <strong>$95,238</strong> of gold at spot value. The other $4,762 is the dealer's markup.</li>
<li><strong>B:</strong> $100,000 / 1.15 = <strong>$86,957</strong> of gold at spot value. The other $13,043 is markup.</li>
</ul>
<h3>Step 2: what you would get if you sold the next day</h3>
<ul>
<li><strong>A:</strong> $95,238 x 0.99 = <strong>$94,286</strong>, a loss of about $5,714 (5.7%).</li>
<li><strong>B:</strong> $86,957 x 0.99 = <strong>$86,087</strong>, a loss of about $13,913 (13.9%).</li>
</ul>
<p>That is the "hole" each investor starts in on day one, even if gold's price does not move at all.</p>
<h3>Step 3: how much gold must rise just to break even</h3>
<p>Break-even rise = (money put in + fees paid) / day-one sale value - 1. We assume fees are paid from outside the IRA, so they add to what you have spent.</p>
<table>
<thead><tr><th>Holding period</th><th>A: total fees</th><th>A: gold must rise</th><th>B: total fees</th><th>B: gold must rise</th></tr></thead>
<tbody>
<tr><td>Sell immediately</td><td>$0</td><td>~6.1% ($100,000 / $94,286 - 1)</td><td>$0</td><td>~16.2% ($100,000 / $86,087 - 1)</td></tr>
<tr><td>5 years</td><td>$1,300</td><td>~7.4% total (~1.45% a year)</td><td>$2,500</td><td>~19.1% total (~3.55% a year)</td></tr>
<tr><td>10 years</td><td>$2,600</td><td>~8.8% total (~0.85% a year)</td><td>$5,000</td><td>~22.0% total (~2.0% a year)</td></tr>
</tbody>
</table>
<p>Example of the math for B over 10 years: ($100,000 + $5,000) / $86,087 = 1.2197, so gold must rise about 22% just to get back to even. Spread over 10 years, that is 1.2197 to the power of 1/10 = about 1.020, or about 2.0% a year. Investor B needs gold to rise more than twice as fast as investor A simply to stand still.</p>
<h3>Step 4: the same gold return, different results</h3>
<p>Now suppose gold rises a steady 5% a year for 10 years (a hypothetical rate, not a forecast). At the end, each investor sells at 1% under spot and we subtract the fees paid along the way:</p>
<table>
<thead><tr><th>Route</th><th>Math (approx.)</th><th>Net after 10 years</th></tr></thead>
<tbody>
<tr><td>No costs at all (theoretical)</td><td>$100,000 x 1.05<sup>10</sup></td><td>~$162,900</td></tr>
<tr><td>Gold ETF at 0.10% a year</td><td>$100,000 x (1.05 x 0.999)<sup>10</sup></td><td>~$161,300</td></tr>
<tr><td>Gold ETF at 0.40% a year</td><td>$100,000 x (1.05 x 0.996)<sup>10</sup></td><td>~$156,500</td></tr>
<tr><td>Investor A (5% markup, $260/yr)</td><td>$95,238 x 1.05<sup>10</sup> x 0.99 - $2,600</td><td>~$151,000</td></tr>
<tr><td>Investor B (15% markup, $500/yr)</td><td>$86,957 x 1.05<sup>10</sup> x 0.99 - $5,000</td><td>~$135,200</td></tr>
</tbody>
</table>
<p>Same gold, same decade. Investor B ends up about <strong>$15,800 behind</strong> investor A and about <strong>$26,000 behind</strong> a low-cost ETF holder. (ETF figures ignore the small brokerage bid-ask spread, and the IRA figures assume fees are paid from outside the account; if fees were deducted by selling metal, results would be slightly lower again.)</p>
<h3>Step 5: fees as a percentage depend on account size</h3>
<p>Because custodian and storage fees are mostly flat dollar amounts, they hit small accounts hardest:</p>
<table>
<thead><tr><th>Account size</th><th>$260 a year is</th><th>$500 a year is</th><th>Compare: GLDM ETF at 0.10%</th></tr></thead>
<tbody>
<tr><td>$25,000</td><td>1.04% a year</td><td>2.0% a year</td><td>$25 a year</td></tr>
<tr><td>$50,000</td><td>0.52%</td><td>1.0%</td><td>$50</td></tr>
<tr><td>$100,000</td><td>0.26%</td><td>0.5%</td><td>$100</td></tr>
<tr><td>$250,000</td><td>0.10%</td><td>0.2%</td><td>$250</td></tr>
</tbody>
</table>
<p>The takeaway: <strong>the smaller your gold IRA, the harder it is to justify the flat fees</strong>, and <strong>the higher the markup, the longer gold must rise before you make anything.</strong> A 15% markup is close to the point where many commentators suggest pushing back; anything above that on ordinary bullion deserves a hard look (this is a rule of thumb, not an industry standard). For a full breakdown of every fee, custodian schedules and how to negotiate, read our <a href="/articles/gold-ira-fees">gold IRA fees guide</a>.</p>`,
  },
];
