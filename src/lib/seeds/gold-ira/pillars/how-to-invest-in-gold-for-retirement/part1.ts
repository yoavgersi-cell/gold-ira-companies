import type { ArticleSection } from "@/lib/config";

// Part 1 of "How to Invest in Gold for Retirement (2026)".
// Quick answer, the seven-method overview table, the honest case for and
// against gold, and Method 1 (gold IRA with physical metal).
// All figures dated Oct 2026; sources in PILLAR-RESEARCH.md / RESEARCH.md.

export const part1: ArticleSection[] = [
  {
    heading: "What is the best way to invest in gold for retirement?",
    body: `<div class="qa"><strong>Short answer:</strong> There is no single best way - it depends on what you want gold to do for you. If you mainly want <strong>gold's price exposure at the lowest cost</strong>, a low-fee physically backed gold ETF (expense ratios from about <strong>0.09%-0.25% a year</strong> in October 2026) held inside an IRA or a 401(k) brokerage window is usually the cheapest and most liquid route. If you want <strong>physical metal you own inside a tax-advantaged account</strong>, a gold IRA does that, but it typically costs about <strong>$175-$300+ a year</strong> in custodian and storage fees plus a dealer markup on every purchase. If you want <strong>metal you can hold in your hand</strong>, buy common bullion coins or bars with taxable savings. Mining stocks, futures and digital gold accounts are different tools with different risks. Many retirees combine two methods, and most commentators who favor gold suggest keeping it to a modest slice - often <strong>5-10%</strong> - of a portfolio.</div>
<p>That is the honest answer in one paragraph. The rest of this guide walks through all seven common ways to own gold for retirement, side by side, with real 2026 costs, tax rules and worked examples you can check with a calculator.</p>
<p>We run a site that reviews gold IRA companies, so you might expect us to tell you a gold IRA is always the answer. It is not. For many savers, a gold ETF in an existing IRA does the same job for a fraction of the cost. For others, owning real coins outside the banking system matters more than cost. Our goal is to help you pick the method that fits your goals, not the one that pays anyone the most.</p>
<p>Here is what you will find below:</p>
<ul>
<li>A <strong>one-page overview table</strong> of the seven methods: cost, taxes, liquidity, complexity and who each one suits.</li>
<li>A <strong>deep dive on each method</strong>: how it works, how to buy step by step, the full cost breakdown, taxes, liquidity, risks, and pros and cons.</li>
<li>An <strong>ETF expense ratio table</strong> (GLD, IAU, GLDM, IAUM, SGOL, AAAU, BAR, SLV, SIVR and GDX).</li>
<li>A <strong>coin and bar premium table</strong> dated to October 2026, plus typical buyback spreads.</li>
<li>A <strong>10-year cost comparison</strong> for $50,000 invested five different ways, with every step of the math shown.</li>
<li><strong>Tax and liquidity tables</strong> comparing traditional IRAs, Roth IRAs and taxable accounts, and how required minimum distributions (RMDs) work with each method.</li>
<li>How to <strong>combine methods</strong>, how much gold commentators suggest, common <strong>mistakes</strong>, the biggest <strong>scams</strong> regulators have caught, and a simple <strong>decision guide</strong>.</li>
</ul>
<h3>A note on our numbers</h3>
<p>Every price, fee and premium in this guide is <strong>reported and approximate as of October 2026</strong>, and we say where each one comes from. ETF expense ratios change, so <strong>verify each one with the fund issuer</strong> before you buy. Every worked example is labeled as an <strong>illustration</strong>: it shows how the math works, not what you will pay or earn. In the cost comparisons we hold the gold price flat on purpose, so you can see the cost of each method on its own, without a guess about where gold goes next.</p>
<p>Nothing here is personal advice. For a decision about your own retirement money, a <strong>fee-only financial adviser</strong> (one who does not earn commissions on what you buy) or a <strong>tax professional</strong> can look at your full picture.</p>`,
  },
  {
    heading: "The 7 ways to invest in gold for retirement at a glance",
    body: `<p>Before we go method by method, here is the whole map on one page. "Cost" means the typical ongoing and buy-sell costs reported in October 2026. "Tax" is a summary - the full tax table comes later in the guide.</p>
<table>
<thead><tr><th>Method</th><th>Typical cost</th><th>Tax treatment (summary)</th><th>Liquidity</th><th>Complexity</th><th>Who it tends to suit</th></tr></thead>
<tbody>
<tr><td>1. Gold IRA with physical metal</td><td>About $175-$300+ a year in custodian and storage fees, plus a dealer spread of about 2-6% (low-cost) to 10%+ (phone dealers) on bullion</td><td>Tax-deferred (traditional) or tax-free (Roth); no 28% collectibles rate inside the IRA</td><td>Days: the dealer or another buyer must buy the metal back</td><td>High: dealer, custodian and depository</td><td>Savers with $25,000+ who specifically want physical metal inside a retirement account</td></tr>
<tr><td>2. Gold ETFs (in an IRA, 401(k) window or brokerage)</td><td>Expense ratio about 0.09%-0.40% a year; small trading spread; often no commission</td><td>Inside an IRA: normal IRA rules. In a taxable account: physically backed (grantor-trust) gold ETFs are taxed as collectibles, up to 28% long-term</td><td>High: sell any trading day</td><td>Low</td><td>Most people who want gold price exposure cheaply, at any balance</td></tr>
<tr><td>3. Physical coins and bars at home</td><td>Premium about 2-6% over spot on common bullion; buyback about 1-2% under spot; plus a safe and insurance</td><td>Taxable money only; gains taxed as collectibles, up to 28% long-term</td><td>Medium: you must take the metal to a dealer or ship it</td><td>Low to medium</td><td>People who value holding metal outside the financial system, usually as a small slice</td></tr>
<tr><td>4. Gold mining stocks and miner ETFs</td><td>Miner ETF GDX about 0.51% a year; single stocks: trading costs only</td><td>Regular stock rules, not collectibles; dividends may be taxed as qualified dividends</td><td>High</td><td>Medium: company and stock-market risk</td><td>Investors comfortable with stock-like swings who want a gold-linked business</td></tr>
<tr><td>5. Gold or commodity funds inside a 401(k)</td><td>The fund's expense ratio, plus any plan fees</td><td>Normal 401(k) rules: tax-deferred or Roth</td><td>High within the plan</td><td>Low, if your plan offers one</td><td>Workers still in a 401(k) whose menu or brokerage window includes a gold option</td></tr>
<tr><td>6. Gold futures and options</td><td>Commissions and margin; losses can exceed your deposit</td><td>Special futures rules (often 60% long-term / 40% short-term) in a taxable account</td><td>High, but positions can be closed out against you</td><td>Very high</td><td>Experienced traders only - rarely suitable for retirement savings</td></tr>
<tr><td>7. Digital, vaulted gold and gold accounts</td><td>Storage or account fees that vary by provider, plus buy-sell spreads</td><td>Usually treated like owning the metal (collectibles) in a taxable account - confirm with a tax pro</td><td>Usually high online; physical delivery costs extra</td><td>Medium: you must trust the provider</td><td>People who want fractional, vaulted metal without a home safe, and accept provider risk</td></tr>
</tbody>
</table>
<h3>The two questions that narrow it down fast</h3>
<p>Most readers can get to a short list by answering two questions.</p>
<ol>
<li><strong>Do you need to own the physical metal, or is gold's price enough?</strong> If price exposure is enough, ETFs (Method 2) or a 401(k) fund (Method 5) are usually cheapest. If you want physical metal, you are choosing between a gold IRA (Method 1), coins at home (Method 3) and a vaulted account (Method 7).</li>
<li><strong>Where is your money now?</strong> Money inside a 401(k) or IRA keeps its tax shelter only if it stays in a retirement account - so the realistic options are an ETF or fund inside that account, or a transfer to a gold IRA. Money in a savings or brokerage account can go anywhere, but faces the collectibles tax on physical gold and physically backed ETFs.</li>
</ol>
<p>The rest of the guide gives you the detail behind each cell in that table. If you already know you are comparing just two options, our head-to-head <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a> guide goes deeper on that pair.</p>`,
  },
  {
    heading: "Why retirees add gold - and the honest downsides",
    body: `<p>Before choosing a method, it helps to be clear about what gold can and cannot do in a retirement plan. People usually give three reasons for owning it:</p>
<ul>
<li><strong>Diversification.</strong> Gold does not always move with stocks and bonds, so a small amount can soften a portfolio's swings in some periods.</li>
<li><strong>A hedge against inflation and currency worries.</strong> Gold has held purchasing power over very long periods, though not smoothly.</li>
<li><strong>Crisis insurance.</strong> Some savers want an asset that is not a promise from a bank or a company.</li>
</ul>
<p>Those reasons are real. But so are the downsides, and a retirement plan has to account for both.</p>
<h3>Gold has fallen hard, more than once</h3>
<table>
<thead><tr><th>Period</th><th>From</th><th>To</th><th>Approximate fall</th></tr></thead>
<tbody>
<tr><td>1980-1999</td><td>$850 (Jan 1980)</td><td>$252 (Aug 1999)</td><td>About -70% (nominal)</td></tr>
<tr><td>2011-2015</td><td>$1,921</td><td>About $1,050</td><td>About -45%</td></tr>
<tr><td>2026</td><td>About $5,595 (Jan 29 intraday record)</td><td>About $3,994 (late June LBMA fix low)</td><td>About -29%</td></tr>
</tbody>
</table>
<p>The 2026 drop is a good reminder. Gold hit a record of about <strong>$5,595 an ounce</strong> intraday on January 29, 2026 (Reuters). By late June the LBMA fix had dropped to about <strong>$3,994.50</strong>. On October 19, 2026, spot was about <strong>$4,170</strong> (Kitco) - roughly 25% below the peak. The math: ($5,595 - $4,170) / $5,595 = $1,425 / $5,595 = about 25%.</p>
<h3>Gold pays no income</h3>
<p>A stock can pay dividends and a bond pays interest. A gold coin pays nothing. Its only return is a change in price, and every storage fee, expense ratio or dealer spread comes straight out of that. This is why costs matter so much in this guide: with no income to offset them, they decide a large part of your result.</p>
<h3>Long-run returns depend on the dates you pick</h3>
<table>
<thead><tr><th>Period</th><th>Gold (per year)</th><th>S&amp;P 500 with dividends (per year)</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Since 1971 (nominal)</td><td>About 8.8%</td><td>About 11.2%</td><td>Money Metals</td></tr>
<tr><td>1995-2025</td><td>8.1% nominal / 5.4% real</td><td>11.1% nominal / 8.4% real</td><td>Kiplinger</td></tr>
<tr><td>Jan 2000-Aug 2025</td><td>About 10.4%</td><td>About 7.9%</td><td>Barchart</td></tr>
</tbody>
</table>
<p>Over the longest periods, stocks have usually earned more. Starting in 2000, gold did better. Neither fact predicts the next 10 years. We do not promise any return, and you should be wary of anyone who does. If you want a fuller look at gold's track record and how it fits a retirement portfolio, see <a href="/articles/is-a-gold-ira-a-good-investment">is a gold IRA a good investment?</a></p>
<h3>Gold is volatile from year to year</h3>
<p>Recent yearly changes show the swings: 2015 -10.7%, 2016 +6.8%, 2017 +13.3%, 2018 -1.9%, 2019 +18.4%, 2020 +25.0%, 2021 -5.8%, 2022 about +0.4%, 2023 +12.8%, 2024 about +27% and 2025 about +65%. Someone who bought near the January 2026 peak was sitting on a loss of about 25% by October. That is the kind of move you need to be able to live through, whichever method you choose.</p>`,
  },
  {
    heading: "Method 1: A gold IRA holding physical metal",
    body: `<p>A gold IRA is a <strong>self-directed individual retirement account</strong> that holds physical gold (and often silver, platinum or palladium) instead of stocks and bonds. It follows the same basic tax rules as any IRA - traditional or Roth - but the metal has to meet strict rules on what you can buy and where it is kept. Our <a href="/articles/gold-ira">complete gold IRA guide</a> covers the basics in more depth.</p>
<h3>How it works</h3>
<p>Three businesses are involved:</p>
<ul>
<li>A <strong>dealer</strong> sells you the metal. Many "gold IRA companies" are dealers that also help with the paperwork.</li>
<li>A <strong>custodian</strong> - a bank or an IRS-authorized non-bank trustee - holds the account, keeps records and reports to the IRS. See our <a href="/articles/gold-ira-custodians">gold IRA custodians guide</a>.</li>
<li>A <strong>depository</strong> stores the metal in a vault, such as Delaware Depository, Brink's or IDS.</li>
</ul>
<p>Under Internal Revenue Code section 408(m), most collectibles bought by an IRA are treated as a taxable distribution. The law makes exceptions for certain US coins (such as the American Gold Eagle) and for bullion that meets minimum fineness - <strong>.995 for gold</strong>, .999 for silver and .9995 for platinum and palladium - as long as the trustee has physical possession. Krugerrands, most proof and "rare" coins and jewelry do not qualify. Our guide to <a href="/articles/irs-approved-precious-metals">IRA-eligible precious metals</a> has the full list, and <a href="/articles/gold-ira-rules">gold IRA rules</a> covers the rest.</p>
<p>One rule surprises many people: <strong>you cannot keep IRA gold at home</strong>. In <em>McNulty v. Commissioner</em>, 157 T.C. No. 10 (2021), the Tax Court treated metal kept at home through an "IRA LLC" as a taxable distribution, plus penalties. Our article on <a href="/articles/can-you-store-ira-gold-at-home">storing IRA gold at home</a> explains the case.</p>
<h3>How to buy, step by step</h3>
<ol>
<li><strong>Pick a dealer and a custodian.</strong> Get written fee schedules from both.</li>
<li><strong>Open a self-directed IRA</strong> with the custodian. Setup fees run about $0-$75 at custodians; some dealers report their own application fee of around $230-$275.</li>
<li><strong>Fund it</strong> with a direct trustee-to-trustee transfer from an existing IRA, a direct rollover from a former employer's 401(k), or a new contribution (up to $7,500 in 2026, or $8,600 if you are 50 or older).</li>
<li><strong>Choose IRA-eligible bullion</strong> and get a written quote showing the price per coin, the spot price and the markup.</li>
<li><strong>The custodian pays the dealer</strong>, and the dealer ships the metal to the depository.</li>
<li><strong>Check your statement</strong> to confirm the exact coins and bars are listed in your account.</li>
</ol>
<p>The full walkthrough is in our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a>, and we summarize it later in <a href="#step-by-step-the-gold-ira-route">the gold IRA route</a>.</p>
<h3>Full cost breakdown</h3>
<table>
<thead><tr><th>Cost</th><th>Typical reported range (Oct 2026)</th><th>How often</th></tr></thead>
<tbody>
<tr><td>Setup / application</td><td>$0-$75 at custodians (Equity Trust $50 online); some dealers report about $230-$275</td><td>Once</td></tr>
<tr><td>Custodian annual fee</td><td>About $90-$300 flat at many custodians; tiered at others (Equity Trust: $225 under $15,000, $320 at $15,000-$24,999, $350 at $25,000-$49,999, $425 at $50,000-$99,999)</td><td>Yearly</td></tr>
<tr><td>Storage and insurance</td><td>About $100-$240 flat (Equity Trust $110 non-segregated / $160 segregated), or a percentage such as Brink's 0.15% a year</td><td>Yearly</td></tr>
<tr><td>Dealer spread over spot</td><td>About 2-6% on common bullion at low-cost dealers; one phone dealer disclosed 10% on bullion inside an IRA, 20% on collectible and 23% on proof coins</td><td>Every purchase</td></tr>
<tr><td>Buyback discount when you sell</td><td>Roughly 1-2% under spot for common sovereign coins at many dealers</td><td>Every sale</td></tr>
<tr><td>Exit and transaction fees</td><td>Liquidation $10 per asset (Equity Trust, max $30); wire $30; full termination $250 at Equity Trust</td><td>When you sell, transfer or close</td></tr>
</tbody>
</table>
<p>Two things stand out. First, the yearly fees are <strong>flat dollar amounts</strong>, so they hurt small accounts most: $260 a year is about 1% of $25,000 but only about 0.1% of $250,000. Second, the <strong>dealer spread</strong> is usually the biggest single cost, and it never appears on a fee schedule. Our full <a href="/articles/gold-ira-fees">gold IRA fees guide</a> breaks every layer down, and the <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> runs the numbers for your amount.</p>
<h3>Taxes</h3>
<p>Inside the IRA, the metal is taxed like any other IRA asset. In a traditional gold IRA, you pay ordinary income tax on what you withdraw, and nothing on gains while the metal stays in the account. In a Roth gold IRA, qualified withdrawals are tax-free (see our <a href="/articles/roth-gold-ira">Roth gold IRA guide</a>). The <strong>28% collectibles rate does not apply</strong> to gains inside an IRA. Withdrawals before age 59½ usually face a 10% additional tax.</p>
<h3>Liquidity</h3>
<p>To raise cash, you ask the custodian to sell the metal, usually back to the dealer. Expect it to take a few days, and expect to sell at the dealer's bid price, below spot. Dealer "buyback programs" are usually a commitment or a pledge, not a contract that guarantees a price. You can also take the metal out "in kind" - shipped to you - which counts as a distribution taxed at its fair market value.</p>
<h3>Risks</h3>
<ul>
<li><strong>Price risk:</strong> the metal can fall, as it did by about 29% from January to June 2026.</li>
<li><strong>Markup risk:</strong> paying a high spread, especially on proof or "premium" coins, can put you 20% or more behind on day one.</li>
<li><strong>Sales pressure and scams:</strong> regulators have caught dealers charging markups of up to 130% (see <a href="#gold-scams-and-red-flags-to-watch-for">scams and red flags</a>).</li>
<li><strong>Rule-breaking:</strong> holding ineligible coins or storing metal at home can turn the account into a taxable distribution.</li>
<li><strong>RMD friction:</strong> required withdrawals mean selling metal or shipping coins out each year once they start.</li>
</ul>
<h3>Pros and cons</h3>
<table>
<thead><tr><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>You own specific physical bars and coins, held in your name through the custodian</td><td>Highest ongoing cost of the mainstream methods, especially under about $50,000</td></tr>
<tr><td>Tax-deferred or tax-free growth, with no collectibles rate inside the IRA</td><td>Dealer spreads are often undisclosed until you ask</td></tr>
<tr><td>Can be funded by a tax-free transfer from an existing IRA or old 401(k)</td><td>Slower to sell than an ETF; RMDs are more work</td></tr>
<tr><td>Metal sits outside the banking and stock-market system</td><td>You cannot hold it at home, and you must follow strict eligibility rules</td></tr>
</tbody>
</table>
<p><strong>Bottom line on Method 1:</strong> a gold IRA makes the most sense when owning physical metal inside a retirement account is the point, the balance is large enough to absorb flat fees, and you buy common bullion at a fair, written spread.</p>`,
  },
];
