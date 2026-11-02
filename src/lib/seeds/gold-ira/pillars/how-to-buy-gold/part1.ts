import type { ArticleSection } from "@/lib/config";

// Part 1 of "How to Buy Gold in 2026: Coins, Bars, Costco, ETFs and Gold IRAs".
// Quick answer + key numbers, what you are paying for (spot, premium, spread),
// the main ways to buy gold (overview table), the 7-step how-to and where to buy.
// Prices dated Nov 1-2, 2026 (Kitco spot ~$3,900); WGC 2025 demand data from
// the FY 2025 Gold Demand Trends report (Jan 29, 2026). Premium snapshots from
// PILLAR-RESEARCH.md (findbullionprices, SD Bullion, Costco tracker, Oct 2026).

export const part1: ArticleSection[] = [
  {
    heading: "What is the best way to buy gold?",
    body: `<div class="qa"><strong>Short answer:</strong> For most people, the best way to buy gold is common bullion - a 1 oz American Gold Eagle, Maple Leaf or a 1 oz bar from a known refiner - bought from a reputable seller at a <strong>low premium of about 1-4% over the spot price</strong>, then stored safely. If you only want price exposure, a low-cost gold ETF is cheaper. Avoid proof and "rare" coins.</div>
<p>That is the whole answer in a few lines. The rest of this guide shows you how to do it well: where to buy, what a fair price looks like as of <strong>November 2, 2026</strong>, how Costco's gold really compares, how taxes and IRS reporting work, how to avoid fakes and scams, and how to sell when the time comes.</p>
<h3>Key numbers (Nov 2026)</h3>
<ul>
<li><strong>Gold spot price:</strong> about <strong>$3,900 per troy ounce</strong> on November 1-2, 2026 (<a href="https://www.kitco.com/charts/gold" rel="nofollow noopener" target="_blank">Kitco</a>, $3,900.30 at 7:16 p.m. ET on Nov 1). One market report described this as a year low after a wave of forced selling (<a href="https://www.mitrade.com/insights/commodity-analysis/gold/gold-selloff-liquidation-oil-spikes-fed-hike" rel="nofollow noopener" target="_blank">Mitrade, Nov 2, 2026</a>).</li>
<li><strong>Record high:</strong> about <strong>$5,595 an ounce intraday on January 29, 2026</strong> (Reuters). Today's price is roughly <strong>30% below</strong> that peak - a reminder that gold can fall hard.</li>
<li><strong>2025 average price:</strong> <strong>$3,431</strong>, a record annual average, with 53 record highs during the year (<a href="https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-full-year-2025" rel="nofollow noopener" target="_blank">World Gold Council, FY 2025</a>).</li>
<li><strong>Silver:</strong> about <strong>$50 an ounce</strong> ($50.04 on October 30, 2026, per <a href="https://fortune.com/article/current-price-of-silver-10-30-2026/" rel="nofollow noopener" target="_blank">Fortune</a>), putting the gold-to-silver ratio near 78.</li>
<li><strong>Bar and coin demand:</strong> <strong>1,374 tonnes</strong> worldwide in 2025, a 12-year high and up 16%; total gold demand hit a record <strong>5,002 tonnes</strong> (<a href="https://www.gold.org/news-and-events/press-releases/gold-investment-rockets-2025-setting-new-high-uncertainty-bites" rel="nofollow noopener" target="_blank">World Gold Council, Jan 29, 2026</a>).</li>
<li><strong>Central banks:</strong> bought <strong>863 tonnes</strong> in 2025, down from more than 1,000 tonnes a year in 2022-2024 but well above the 2010-2021 average (<a href="https://www.mining.com/web/global-gold-demand-hits-record-high-in-2025-wgc-says" rel="nofollow noopener" target="_blank">Mining.com, citing the World Gold Council</a>). Retail buying stayed strong into 2026: bar and coin demand rose 42% to <strong>474 tonnes in Q1 2026</strong> (<a href="https://www.kitco.com/news/article/2026-04-29/bar-and-coin-demand-drives-gold-market-central-banks-stay-resilient-amid" rel="nofollow noopener" target="_blank">Kitco, Apr 29, 2026</a>).</li>
<li><strong>Gold ETFs:</strong> 801 tonnes of net inflows in 2025, worth a record <strong>$89 billion</strong> (<a href="https://www.gold.org/goldhub/research/gold-etfs-holdings-and-flows/2026/01" rel="nofollow noopener" target="_blank">World Gold Council</a>), and another record quarter of about <strong>$31 billion in Q3 2026</strong> (<a href="https://www.kitco.com/news/article/2026-10-12/gold-etf-demand-defies-rising-bond-yields-investors-pour-31-billion-record" rel="nofollow noopener" target="_blank">Kitco, Oct 12, 2026</a>).</li>
<li><strong>Typical premiums (Oct 2026):</strong> about <strong>1.8%</strong> on a 10 oz bar, <strong>2.2%</strong> on a generic 1 oz bar, <strong>3.5%</strong> on a Maple Leaf and <strong>3-6%</strong> on a new Gold Eagle at online dealers; Costco's 2026 Gold Eagle was about <strong>4.2%</strong> over spot in October 2026.</li>
<li><strong>Taxes:</strong> long-term gains on physical gold held outside an IRA are taxed as "collectibles" at up to <strong>28%</strong> federally, and cash payments over <strong>$10,000</strong> trigger an IRS Form 8300 filing by the dealer.</li>
</ul>
<p>Every figure above carries a source and a date. Gold prices move every minute, and premiums change week to week, so treat these as a snapshot, not a quote.</p>
<h3>What this guide covers</h3>
<ul>
<li>What you are actually paying for: <strong>spot price, premium and spread</strong>.</li>
<li>The main <strong>places to buy gold</strong> - Costco, online dealers, local coin shops, the US Mint, banks, gold ETFs and gold IRAs - compared side by side.</li>
<li>A simple <a href="#how-to-buy-gold-in-7-steps">7-step buying process</a> you can follow this week.</li>
<li>An honest look at <a href="#is-costco-gold-a-good-deal">whether Costco gold is a good deal</a>, including purchase limits, the no-returns rule and member rewards.</li>
<li><a href="#should-you-buy-gold-coins-or-gold-bars">Coins vs bars</a>, the <a href="#what-are-the-best-gold-products-for-beginners">best products for beginners</a>, and <a href="#how-much-over-spot-should-you-pay-for-gold">how much over spot you should pay</a>, with a worked "$10,000" example.</li>
<li><a href="#do-you-pay-sales-tax-on-gold">Sales tax</a>, <a href="#do-dealers-report-gold-purchases-to-the-irs">IRS reporting</a> and <a href="#how-is-gold-taxed-when-you-sell-it">taxes when you sell</a>.</li>
<li><a href="#how-do-you-avoid-fake-gold">Avoiding fake gold</a>, <a href="#where-should-you-store-gold">storage</a>, <a href="#how-do-you-sell-gold">selling</a> and <a href="#what-gold-scams-should-you-watch-for">scams</a>.</li>
<li>A <a href="#gold-buyer-s-checklist">buyer's checklist</a>, a <a href="#gold-buying-glossary">glossary</a> and answers to common questions.</li>
</ul>
<h3>Who we are and how we wrote this</h3>
<p>Gold IRA Planet is an independent site about buying gold and silver, especially for retirement. We are not a dealer and we do not sell metal. Some gold IRA companies pay us when readers contact them - we explain how that works, and how it does and does not affect our rankings, on our <a href="/how-we-rank">how we rank</a> page. In this guide, company names appear only in one clearly labelled section for retirement buyers.</p>
<p>Our numbers come from primary sources where we could get them - the World Gold Council, the US Mint, the IRS, the CFTC and the FBI - and from dated price trackers and news reports where we could not. When sources disagree, we say so. Every worked example is labelled as an <strong>illustration</strong>: it shows how the math works, not what you will pay or earn.</p>`,
  },
  {
    heading: "What are you actually paying for when you buy gold?",
    body: `<p><strong>When you buy gold, you pay the spot price of the metal plus a premium - the seller's markup over spot. When you sell, you usually receive a little less than spot. The gap between the buying and selling price is the spread, and it is the real cost of owning physical gold.</strong></p>
<p>Understanding these three words - <strong>spot, premium and spread</strong> - will protect you from most bad deals. Almost every overpriced sale we have seen in enforcement cases came down to a buyer who did not know what the metal was worth on the day they paid.</p>
<h3>Spot price: what the raw metal is worth</h3>
<p>The <strong>spot price</strong> is the current market price for one troy ounce of gold delivered in large wholesale quantities. It is set by trading in London, New York and other markets, and it changes nearly every second while markets are open. When you see a headline like "gold hits $3,900", that is spot.</p>
<p>Two details trip people up:</p>
<ul>
<li><strong>A troy ounce is not a kitchen ounce.</strong> One troy ounce is <strong>31.1035 grams</strong>, about 10% heavier than the 28.35-gram ounce used for food. All gold prices are quoted in troy ounces.</li>
<li><strong>Spot is a wholesale price.</strong> Nobody sells a single coin at spot. Refiners, mints, wholesalers and retailers each add a little for their work.</li>
</ul>
<p>You can check spot for free on sites such as <a href="https://www.kitco.com/charts/gold" rel="nofollow noopener" target="_blank">Kitco</a> or the price charts on large dealer websites. Write it down before you talk to any seller. For the long-term picture, see our <a href="/articles/gold-price-history">gold price history</a> guide.</p>
<h3>Premium: the seller's markup</h3>
<p>The <strong>premium</strong> is the amount you pay above spot, usually shown as a percentage. If spot is $3,900 and a coin costs $4,056, the premium is $156, or 4%.</p>
<p>Premiums cover real costs - minting, refining, shipping, insurance, credit card fees and the seller's profit. They also rise and fall with demand. When buyers rush in, premiums widen. When things are calm, they shrink. Here is the simple formula we use throughout this guide:</p>
<ul>
<li><strong>Premium % = (price you pay - spot) / spot x 100</strong></li>
<li>Example: ($4,056 - $3,900) / $3,900 x 100 = <strong>4.0%</strong></li>
</ul>
<h3>Spread: the cost of a round trip</h3>
<p>The <strong>spread</strong> is the difference between what a dealer charges you to buy (the <strong>ask</strong>) and what the same dealer will pay you to buy it back (the <strong>bid</strong>). Dealers typically bid somewhere around 1-2% under spot for common sovereign coins, and GoldSilver estimated in June 2026 that buying and later selling a Gold Eagle costs roughly 4-8% in total.</p>
<p>That round-trip cost is the number that really matters. It tells you how far gold must rise before you get back to even. We work through this in detail in the <a href="#how-much-over-spot-should-you-pay-for-gold">premium section</a> and the <a href="#how-do-you-sell-gold">selling section</a>.</p>
<h3>Fineness: how pure the gold is</h3>
<p>Gold purity is shown as <strong>fineness</strong> - parts per thousand. Most modern bullion is <strong>.9999</strong> fine (24 karat), such as the Canadian Maple Leaf and the American Gold Buffalo. The American Gold Eagle is <strong>.9167</strong> fine (22 karat), but it still contains a full troy ounce of pure gold; the extra weight is a little copper and silver that makes it harder to scratch. You pay for the pure gold content, not the total weight.</p>
<p>The key lesson: <strong>always compare products by the price per ounce of pure gold, and by the premium over spot</strong> - not by the sticker price or the sales pitch.</p>`,
  },
  {
    heading: "What are the main ways to buy gold?",
    body: `<p><strong>There are seven common ways for Americans to buy gold: a warehouse club such as Costco, an online bullion dealer, a local coin shop, the US Mint (collector coins only), a bank, a gold ETF in a brokerage account, and a gold IRA for retirement savings. They differ mainly in price, minimums, convenience and who holds the metal.</strong></p>
<p>The first five give you <strong>physical gold you own outright</strong>. A gold ETF gives you <strong>shares in a trust</strong> that holds gold for you. A gold IRA gives you <strong>physical gold held by a custodian</strong> inside a tax-advantaged retirement account. Here is how they compare as of November 2026.</p>
<table>
<thead><tr><th>Where you buy</th><th>Typical premium over spot</th><th>Minimum</th><th>Convenience</th><th>Safety notes</th><th>Tax notes</th></tr></thead>
<tbody>
<tr><td>Costco (online, members only)</td><td>About 0.4-4.2% reported in 2026 on bars and Gold Eagles; about 1.6-2% on bars in 2024 reports</td><td>One coin or bar (about $4,000+)</td><td>High when in stock; strict per-member limits; no returns</td><td>Ships sealed from known refiners; you handle storage</td><td>Sales tax depends on your state; 28% collectibles rate on long-term gains</td></tr>
<tr><td>Online bullion dealer</td><td>About 1.8-6% on common bullion (Oct 2026); higher on small sizes</td><td>Often one coin; some dealers have small order minimums</td><td>High; wide choice; prices update in real time</td><td>Choose established dealers; insured shipping; you handle storage or pay for a vault</td><td>Same as above</td></tr>
<tr><td>Local coin shop</td><td>Varies widely; often a bit above large online dealers</td><td>One coin</td><td>Medium; you can inspect and pay in person</td><td>No shipping risk; quality varies by shop</td><td>Same as above; cash over $10,000 triggers Form 8300</td></tr>
<tr><td>US Mint (usmint.gov)</td><td>Bullion coins not sold to the public; collector and proof coins sell far above melt value</td><td>One coin</td><td>Easy to order, but release dates sell out</td><td>Genuine product, but proofs are costly to resell</td><td>Same as above</td></tr>
<tr><td>Bank</td><td>Major US banks generally do not sell physical gold to retail customers; where available, premiums tend to be higher</td><td>Varies</td><td>Low</td><td>Bank safe deposit box contents are not FDIC insured</td><td>Same as above</td></tr>
<tr><td>Gold ETF (e.g., GLDM, IAU, GLD)</td><td>No premium; small trading spread; yearly expense ratio of about 0.09-0.40%</td><td>The price of one share (from under $100 to a few hundred dollars, depending on the fund)</td><td>Very high; buy and sell in seconds</td><td>You own shares, not specific bars; no home-theft risk</td><td>Physically backed grantor-trust ETFs are taxed like collectibles (up to 28%)</td></tr>
<tr><td>Gold IRA</td><td>Varies by dealer; often several percent and sometimes much more on phone-sale products</td><td>Often $10,000-$50,000 at full-service companies</td><td>Medium; paperwork and a custodian are required</td><td>Metal held by an approved depository; no home storage</td><td>Tax-deferred (or tax-free in a Roth); withdrawals follow IRA rules</td></tr>
</tbody>
</table>
<p>A few notes on the table. The Costco premium range comes from third-party trackers and news reports, because Costco does not publish a premium. The ETF share-price range is approximate. The gold IRA minimums are the published or reported minimums of the companies we review. Sources for each figure appear in the relevant section below.</p>
<h3>Physical gold or paper gold?</h3>
<p>The biggest choice is not which store to use. It is whether you want to <strong>hold the metal yourself</strong> or simply <strong>own the price</strong>.</p>
<ul>
<li><strong>Choose physical gold</strong> if you want an asset outside the financial system that you can hold, pass on, or use in an emergency - and you are willing to pay a premium, store it safely and accept a wider spread when you sell.</li>
<li><strong>Choose a gold ETF</strong> if you mainly want gold's price movements in a brokerage or retirement account, with low costs and instant selling. You give up the ability to hold the metal.</li>
<li><strong>Choose a gold IRA</strong> if you specifically want physical gold inside a retirement account and accept higher yearly fees for that. Our <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a> comparison lays out the trade-offs in detail.</li>
</ul>
<p>Many people end up with a mix: a few coins at home, and the larger share of their gold allocation in a low-cost fund or a retirement account.</p>`,
  },
  {
    heading: "How to buy gold in 7 steps",
    body: `<p><strong>To buy gold safely: decide why and how much, choose physical or paper gold, pick a common bullion product, compare at least three sellers on premium over spot, pay with a traceable method, plan storage before the metal arrives, and keep your receipts for taxes.</strong></p>
<p>Here is the process we would follow ourselves. It takes an afternoon, not a month.</p>
<ol>
<li><strong>Decide why you want gold and how much.</strong> Write down your reason - a hedge, diversification, a store of value for heirs - and a dollar limit. Many financial commentators suggest keeping gold to a modest slice of savings, often cited as 5-10%. That is a general rule of thumb, not advice for you; see <a href="#how-much-of-your-savings-should-be-in-gold">how much of your savings should be in gold</a>.</li>
<li><strong>Choose physical gold, an ETF or a gold IRA.</strong> Physical gold you hold yourself, a fund in a brokerage account, or physical gold inside a retirement account. Each has different costs and tax rules, summarized in the <a href="#what-are-the-main-ways-to-buy-gold">comparison table</a> above.</li>
<li><strong>Pick a common bullion product.</strong> For most buyers that means a 1 oz American Gold Eagle, American Gold Buffalo, Canadian Maple Leaf, or a 1 oz or 10 oz bar from a well-known refiner. Skip proof, "limited edition", graded and "rare" coins unless you are a collector. Our <a href="#what-are-the-best-gold-products-for-beginners">beginner product guide</a> explains why.</li>
<li><strong>Check the spot price, then compare at least three sellers.</strong> Note spot on the day. Get the all-in price - including shipping, insurance, and any card fee - from at least three sources, such as Costco, two large online dealers and a local coin shop. Convert each to a <strong>premium over spot</strong>.</li>
<li><strong>Pay with a traceable method.</strong> Bank wire or check usually gets the lowest price at dealers; cards usually cost a few percent more at dealers (check each dealer's price table) but may carry rewards. Never pay by gift card, crypto sent to a stranger, or cash handed to a courier. Paying more than $10,000 in cash means the dealer files IRS Form 8300.</li>
<li><strong>Plan storage before the gold arrives.</strong> Decide between a home safe, a bank safe deposit box or a private vault, and check your homeowner's insurance limits. Many standard policies cover only about $200 of coins and bullion against theft unless you add a rider. See <a href="#where-should-you-store-gold">where to store gold</a>.</li>
<li><strong>Inspect, record and keep receipts.</strong> When the package arrives, check it matches your order, keep sealed bars in their assay cards, and file the invoice. You will need your purchase price (your "cost basis") to report a gain or loss when you sell.</li>
</ol>
<p>If you are buying for a retirement account, the steps are similar, but a custodian sits in the middle and the metal must go to an approved depository. Our <a href="/articles/how-to-invest-in-gold-for-retirement">how to invest in gold for retirement</a> guide walks through that version step by step.</p>
`,
  },
  {
    heading: "Where is the best place to buy gold?",
    body: `<p><strong>The best place to buy gold is whichever reputable seller offers the lowest all-in premium over spot on a common bullion product on the day you buy. For small purchases that is often Costco or a large online dealer; for larger orders, a 10 oz or kilo bar from an established dealer is usually cheapest per ounce.</strong></p>
<p>There is no single "best" store, because premiums change every week and each seller is good at different things. What stays constant is the test: <strong>who sells you the most pure gold for your dollar, safely, from a source you trust</strong>.</p>
<h3>Best place by situation</h3>
<table>
<thead><tr><th>Your situation</th><th>Often the best fit</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Buying 1-4 ounces, already a Costco member</td><td>Costco (when in stock)</td><td>Competitive premiums, sealed refinery bars and US Mint coins, member rewards; but no returns and strict limits</td></tr>
<tr><td>Buying 1-50 ounces, want choice</td><td>Large online bullion dealer</td><td>Real-time prices, many products, bank-wire discounts, published buyback prices at many dealers</td></tr>
<tr><td>Want to see the gold and pay in person</td><td>Established local coin shop</td><td>No shipping, immediate possession, a local buyer when you sell</td></tr>
<tr><td>Buying $50,000+ as a long-term holding</td><td>Online dealer or coin shop; 10 oz or kilo bars</td><td>Lowest premiums per ounce, often under 2%</td></tr>
<tr><td>Only want price exposure</td><td>Low-cost gold ETF in a brokerage account</td><td>No premium, no storage, instant selling; yearly fee</td></tr>
<tr><td>Buying with retirement savings</td><td>Gold IRA through a custodian and dealer</td><td>Keeps tax advantages; requires an approved depository</td></tr>
<tr><td>Collector who values design and rarity</td><td>US Mint or specialist numismatic dealer</td><td>Proofs and rare coins - but these are collectibles, not low-cost gold</td></tr>
</tbody>
</table>
<h3>Three questions that decide it</h3>
<p><strong>1. How much are you buying?</strong> Premiums shrink as the size of each piece grows. In October 2026, findbullionprices.com recorded the lowest available premium on a 10 oz bar at about 1.83%, versus about 2.17% for a generic 1 oz bar and about 3.51% for a 1 oz Maple Leaf. Fractional coins (1/10 oz, 1/4 oz) cost much more per ounce.</p>
<p><strong>2. How will you pay?</strong> Most online dealers show a lower "cash or wire" price and a higher card price. Costco's price is the same however you pay, but members can earn rewards on it - which is part of why Costco became so popular.</p>
<p><strong>3. How will you sell later?</strong> A seller that publishes a <strong>buyback (bid) price</strong> gives you a clear exit. Costco does not buy gold back at all, so a Costco buyer must sell elsewhere. A local coin shop gives you a face-to-face exit. A gold ETF can be sold in seconds.</p>
<p>The next sections look at each main seller in turn, starting with the one most people ask us about: Costco.</p>`,
  },
];
