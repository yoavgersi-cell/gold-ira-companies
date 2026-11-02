import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "How to Buy Gold in 2026". Selling (round-trip cost table), scams
// (CFTC advisory, SEC/CFTC cases, FBI gold-courier warnings), how much to hold
// (Gallup 2025/2026), checklist, glossary, extra FAQs and the bottom line.
// FBI courier figures: FBI Boston release reported Sep 2025 (Boston Globe,
// Charlestown Bridge). Gallup 2025: Kitco (May 12, 2025); 2026 figures from
// secondary coverage (BAM) - not confirmed on gallup.com.

export const part5: ArticleSection[] = [
  {
    heading: "How do you sell gold?",
    body: `<p><strong>To sell gold, check the spot price, get buyback quotes from two or three dealers or coin shops, and sell to the highest reputable bid. Expect around 1-2% under spot for common coins and sealed bars, and much less for proofs and collectibles. Keep your receipts to report any gain.</strong></p>
<p>Selling is where the true cost of gold shows up. The spread you paid when you bought, plus the discount you accept when you sell, together make your <strong>round-trip cost</strong>.</p>
<h3>Where to sell</h3>
<ul>
<li><strong>Online dealers</strong> often publish buyback prices. You lock a price by phone or online, ship the metal insured, and get paid after it is checked.</li>
<li><strong>Local coin shops</strong> pay on the spot, which avoids shipping risk. Compare their bid with online bids first.</li>
<li><strong>The dealer you bought from</strong>, if it offers a buyback. A "buyback guarantee" usually means a promise to make a bid, not a promise of a particular price.</li>
<li><strong>Costco does not buy gold back</strong>, so Costco buyers sell to dealers or coin shops.</li>
<li><strong>Gold ETFs</strong> sell like any stock, in seconds, at the market price.</li>
<li><strong>Gold IRAs</strong> sell through the custodian, which arranges the sale with a dealer. See <a href="/articles/how-to-sell-gold-ira">how to sell gold in an IRA</a>.</li>
</ul>
<h3>Round-trip cost on $10,000 (illustration)</h3>
<p>These rows combine an assumed buying premium with an assumed selling discount to spot, at a constant gold price. They are illustrations, not quotes. Formula: loss = $10,000 - ($10,000 / (1 + premium)) x (1 - selling discount).</p>
<table>
<thead><tr><th>Scenario</th><th>Buy premium</th><th>Sell vs spot</th><th>Round-trip cost</th><th>Gold rise needed to break even</th></tr></thead>
<tbody>
<tr><td>Kilo bar from a low-cost dealer</td><td>1.5%</td><td>-0.5%</td><td>$197</td><td>About 2.0%</td></tr>
<tr><td>Costco 1 oz bar (before rewards)</td><td>2%</td><td>-1%</td><td>$294</td><td>About 3.0%</td></tr>
<tr><td>Current-year Gold Eagle online</td><td>4%</td><td>-1.5%</td><td>$529</td><td>About 5.6%</td></tr>
<tr><td>Bullion from a high-premium phone seller</td><td>8%</td><td>-2%</td><td>$926</td><td>About 10.2%</td></tr>
<tr><td>Proof coin sold at melt value</td><td>25%</td><td>0% (at spot)</td><td>$2,000</td><td>25%</td></tr>
</tbody>
</table>
<p>Check one row: Gold Eagle at 4% premium, sold 1.5% under spot. Metal value at purchase = $10,000 / 1.04 = $9,615.38. Sale proceeds = $9,615.38 x 0.985 = $9,471.15. Loss = $528.85. Break-even rise = 1.04 / 0.985 - 1 = 5.58%.</p>
<h3>Tips for a better sale</h3>
<ol>
<li><strong>Know spot and the dealer's posted bid</strong> before you call.</li>
<li><strong>Get at least two quotes</strong> - bids for the same coin can differ by a percentage point or more.</li>
<li><strong>Keep coins clean and bars sealed.</strong> Damaged items and unknown brands may get lower bids or need testing.</li>
<li><strong>Do not sell bullion as jewelry</strong> to "cash for gold" outlets, which often pay well below dealer bids.</li>
<li><strong>Keep records</strong> of what you paid and what you received, for your tax return.</li>
</ol>`,
  },
  {
    heading: "What gold scams should you watch for?",
    body: `<p><strong>The most common gold scams are excessive markups on "rare" or proof coins, high-pressure phone sales, fake storage or "delivery" schemes, and impostors who tell victims to buy gold and hand it to a courier. No government agency or legitimate bank will ever ask you to buy gold to protect your money.</strong></p>
<p>Gold attracts fraud because it feels safe and because many buyers do not know what a fair price is. Regulators have warned about it for years - see the joint <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="nofollow noopener" target="_blank">CFTC advisory on precious metals</a>.</p>
<h3>1. The gold-bar courier scam</h3>
<p>Fraudsters pose as bank staff, government officials or tech support, claim your accounts are compromised, and tell you to withdraw savings, buy gold bars and hand them to a "courier" for safekeeping. The FBI counted at least <strong>1,737 cases</strong> of couriers collecting cash or gold bars, with losses of about <strong>$186.2 million</strong> from 2023 to May 2025, and said <strong>98% of losses</strong> were reported by people over 60 (<a href="https://charlestownbridge.com/2025/09/24/fbi-boston-warns-of-increase-in-gold-bar-and-bulk-cash-courier-scams/" rel="nofollow noopener" target="_blank">FBI Boston, Sep 2025</a>; <a href="https://www.bostonglobe.com/2025/09/22/metro/gold-bar-scam-fbi-warning/" rel="nofollow noopener" target="_blank">Boston Globe</a>). The FBI's message is blunt: the US government and legitimate businesses will never ask you to buy gold. If it happens to you or someone you love, report it at ic3.gov; people 60 and older can also call the Justice Department's Elder Fraud Hotline at 1-833-FRAUD-11.</p>
<h3>2. Excessive markups on "special" coins</h3>
<p>Regulators have repeatedly found firms charging enormous hidden markups:</p>
<ul>
<li><strong>Red Rock Secured:</strong> told investors markups were 1-5% but charged up to <strong>130%</strong>, per the SEC; a <strong>$76.4 million</strong> final judgment followed.</li>
<li><strong>Safeguard Metals:</strong> the SEC alleged an average markup of about <strong>64%</strong> versus disclosed 4-33%; a final judgment in October 2025 required about $25.6 million in restitution plus an equal penalty.</li>
<li><strong>Lear Capital:</strong> the New York Attorney General cited undisclosed commissions of up to 33%; the company agreed to a $6 million settlement.</li>
<li><strong>Goldline (2012):</strong> markups described as "upwards of 55%"; the company agreed to refunds without admitting wrongdoing.</li>
</ul>
<p>The pattern is the same each time: a salesperson steers a buyer away from common bullion into proof, "semi-numismatic" or "limited" coins, without clearly stating the markup. Our guide to <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> covers these cases in detail.</p>
<h3>3. Fear-based selling</h3>
<p>Be wary of pitches built on fear: "the dollar is about to collapse", "the government will confiscate your 401(k)", "banks are about to freeze accounts". These claims push buyers into acting fast and paying high premiums. Famous spokespeople do not change the math - see <a href="/articles/celebrity-gold-ira-endorsements">celebrity gold IRA endorsements</a>.</p>
<h3>4. Storage and delivery schemes</h3>
<p>Some schemes sell "gold" that is supposedly stored for you but never existed, or offer financed "leveraged" metals deals. The CFTC advisory warns specifically about firms that do not deliver the metal you paid for.</p>
<h3>Red flags at a glance</h3>
<ul>
<li>They called you first.</li>
<li>They will not state the premium over spot or the buyback price in writing.</li>
<li>They push proof, "rare" or "IRS-proof" coins.</li>
<li>They pressure you to move retirement money quickly.</li>
<li>They want payment by gift card, crypto, or cash handed to a courier.</li>
<li>They claim gold "can't lose value". It can: gold fell about 30% from its January 2026 record by early November.</li>
</ul>`,
  },
  {
    heading: "How much of your savings should be in gold?",
    body: `<p><strong>There is no single right amount, and this is not personal advice. Many financial commentators suggest keeping gold to a modest share of a diversified portfolio, often cited as about 5-10%. Gold pays no income and can fall sharply, so the right share depends on your age, income needs and other savings.</strong></p>
<p>Gold's popularity has swung with its price. In Gallup's April 2025 survey, <strong>23%</strong> of Americans named gold the best long-term investment, second only to real estate (37%) and ahead of stocks (16%) (<a href="https://www.kitco.com/news/article/2025-05-12/gold-replaces-stocks-best-long-term-us-investment-after-real-estate-gallup" rel="nofollow noopener" target="_blank">Kitco, May 12, 2025</a>). Coverage of Gallup's 2026 survey reports gold at <strong>18%</strong>, behind real estate (38%) and stocks (20%) (<a href="https://nowbam.com/real-estate-ranked-1-long-term-investment-for-the-14th-year-running/" rel="nofollow noopener" target="_blank">BAM summary</a>; we could not confirm the 2026 figures on Gallup's own site).</p>
<h3>Things to weigh</h3>
<ul>
<li><strong>Gold has no yield.</strong> It does not pay interest or dividends. Over very long periods, stocks have returned more, though gold has beaten stocks over some periods, depending on the start date.</li>
<li><strong>Gold can fall a lot.</strong> It lost about 70% between 1980 and 1999, about 45% between 2011 and 2015, and about 30% from January to November 2026.</li>
<li><strong>Gold can also diversify.</strong> It has often moved differently from stocks and bonds, which is the main reason people hold some.</li>
<li><strong>Costs matter more for small, short holdings.</strong> A 5% round trip is a big bite out of a one-year holding.</li>
<li><strong>Your income needs come first.</strong> Retirees who rely on their savings for income usually need assets that produce it.</li>
</ul>
<p>Our guide to <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold to hold in a retirement portfolio</a> goes deeper, and our <a href="/articles/gold-price-history">gold price history</a> shows how gold has behaved through past crises. For a decision about your own savings, a fee-only financial adviser - one who does not sell metals - is the right person to ask.</p>`,
  },
  {
    heading: "Gold buyer's checklist",
    body: `<p><strong>Before you buy gold, run through this checklist. If you cannot tick every box, wait.</strong></p>
<h3>Before you buy</h3>
<ul>
<li>I know why I am buying gold and how much I will spend in total.</li>
<li>I have decided between physical gold, a gold ETF and a gold IRA.</li>
<li>I have chosen a common bullion product (1 oz coin or bar, or a 10 oz bar).</li>
<li>I checked the live spot price today.</li>
<li>I compared the all-in price from at least three sellers, including shipping and payment fees.</li>
<li>I calculated the premium over spot, and it is in a reasonable range for the product.</li>
<li>I know what the seller (or another dealer) would pay to buy it back today.</li>
<li>I checked whether my state charges sales tax on bullion.</li>
</ul>
<h3>When you pay</h3>
<ul>
<li>I confirmed wire details by calling the dealer at the number on its official website.</li>
<li>I am not paying by gift card, crypto to a stranger, or cash handed to a courier.</li>
<li>Nobody pressured me, contacted me first, or told me to move money "for safety".</li>
<li>I understand that cash over $10,000 means a Form 8300 filing, and I am not splitting payments to avoid it.</li>
</ul>
<h3>After it arrives</h3>
<ul>
<li>The package matches my order, and bars are sealed in their assay cards.</li>
<li>I have a safe storage plan and have checked my insurance limits.</li>
<li>I filed my invoice so I can report my cost basis when I sell.</li>
<li>Someone I trust knows how to find my gold and my records if something happens to me.</li>
</ul>
`,
  },
  {
    heading: "Gold buying glossary",
    body: `<p><strong>These are the terms you will meet when buying gold, in plain English.</strong></p>
<ul>
<li><strong>Spot price:</strong> the current wholesale market price of one troy ounce of gold.</li>
<li><strong>Premium:</strong> the amount a seller charges above spot, usually shown as a percentage.</li>
<li><strong>Spread:</strong> the gap between a dealer's selling price (ask) and buying price (bid); the cost of a round trip.</li>
<li><strong>Bid / ask:</strong> the bid is what a dealer will pay you; the ask is what the dealer charges you.</li>
<li><strong>Troy ounce:</strong> the standard unit for precious metals - <strong>31.1035 grams</strong>, about 10% more than a regular (avoirdupois) ounce of 28.35 grams.</li>
<li><strong>Kilo bar:</strong> a 1,000-gram bar, equal to about 32.15 troy ounces.</li>
<li><strong>Fineness:</strong> purity in parts per thousand. ".9999" means 99.99% pure gold.</li>
<li><strong>Bullion:</strong> gold valued for its metal content - common coins and bars - rather than rarity.</li>
<li><strong>Numismatic coin:</strong> a coin valued for rarity, condition or history; priced well above its gold content.</li>
<li><strong>Proof coin:</strong> a specially struck, mirror-finish collector coin, sold at a large premium.</li>
<li><strong>Assay card:</strong> the sealed package and certificate in which many bars are sold, showing weight, purity and serial number.</li>
<li><strong>LBMA:</strong> the London Bullion Market Association, which sets standards for refiners and runs the benchmark gold price auctions.</li>
<li><strong>Melt value:</strong> the value of a coin's or bar's gold content at today's spot price.</li>
<li><strong>Cost basis:</strong> what you paid, including premium and fees - used to calculate a taxable gain.</li>
<li><strong>Collectibles tax:</strong> the federal rule taxing long-term gains on physical gold (and most gold ETFs) at up to 28%.</li>
<li><strong>Segregated vs commingled storage:</strong> segregated means your exact items are stored separately; commingled means you get back the same type and amount, not the identical pieces.</li>
</ul>`,
  },
  {
    heading: "More questions about buying gold",
    body: `<h3>How much does it cost to buy one ounce of gold today?</h3>
<p>With spot at about $3,900 (November 1-2, 2026), a 1 oz bar from a low-cost source cost roughly $3,970-$4,000 (about 2% over spot), and a new 1 oz Gold Eagle roughly $4,020-$4,130 (about 3-6% over spot), before any sales tax or shipping. Prices change every minute.</p>
<h3>What is the gold price per ounce today?</h3>
<p>As of November 1, 2026, the spot price was about $3,900 per troy ounce (Kitco). For a live price, check a site such as Kitco or a large dealer's chart, and remember spot is a wholesale price - you will pay a premium above it.</p>
<h3>Can I buy gold with a credit card?</h3>
<p>Yes, at most dealers and at Costco. Dealers usually charge a few percent more for card payments than for wires or checks. Costco charges the same price, and some cards earn rewards. Do not carry a card balance to buy gold - interest would quickly outweigh any gain.</p>
<h3>Is it safe to buy gold online?</h3>
<p>It can be, if you use established sellers with transparent pricing, insured shipping and verifiable contact details, and you confirm wire instructions by phone. The riskiest places are marketplaces, social media and anyone who contacts you first.</p>
<h3>What is the minimum amount needed to buy gold?</h3>
<p>For physical gold, the price of one small coin - a 1/10 oz coin holds about $390 of gold at $3,900 spot, plus a high premium. A 1 oz coin or bar costs about $4,000. A gold ETF can be bought for the price of one share, and some brokers allow fractional shares. Full-service gold IRA companies often have minimums of $10,000-$50,000.</p>
<h3>Is gold in a gold IRA safe if the company goes out of business?</h3>
<p>The metal is held by an independent depository in your IRA's name through the custodian, not on the dealer's balance sheet, which offers important protection. Read <a href="/articles/what-happens-if-gold-ira-company-goes-bankrupt">what happens if a gold IRA company goes bankrupt</a> for the details.</p>`,
  },
  {
    heading: "The bottom line on how to buy gold",
    body: `<p><strong>Buy common bullion, pay a low premium over spot, compare at least three sellers, store it safely, and keep your receipts. That simple approach beats almost every sales pitch you will hear.</strong></p>
<p>As of November 2, 2026, gold trades near $3,900 an ounce - well below its January record but still far above where it was a few years ago. Demand has been strong worldwide, with a record 5,002 tonnes in 2025 and record ETF inflows, but price swings this year show that gold is not a one-way bet.</p>
<p>Here is what we would remember:</p>
<ol>
<li><strong>The premium and the spread are the real cost.</strong> On $10,000, the difference between a 1.8% and a 25% premium is about $1,800 worth of gold.</li>
<li><strong>Costco can be a good deal</strong> for a few ounces when its listed premium is low, especially with member rewards - but there are no returns and no buyback.</li>
<li><strong>Bars are cheapest per ounce; coins are easiest to sell.</strong> A mix suits many people.</li>
<li><strong>Gold ETFs</strong> are the lowest-cost way to own the price, with no storage worries.</li>
<li><strong>Gold IRAs</strong> keep tax advantages for retirement savings but add custodian and storage fees - get every price in writing.</li>
<li><strong>Taxes:</strong> long-term gains on physical gold and most gold ETFs outside an IRA are taxed at up to 28%. Buying is generally not reported to the IRS unless you pay more than $10,000 in cash.</li>
<li><strong>Nobody legitimate will ever ask you to buy gold to protect your money</strong> or hand it to a courier.</li>
</ol>
<p>To go further, read our <a href="/articles/how-to-invest-in-gold-for-retirement">guide to investing in gold for retirement</a>, the <a href="/articles/gold-ira">complete gold IRA guide</a>, and <a href="/articles/gold-ira-fees">gold IRA fees</a>. If you are comparing companies for a retirement account, start with our <a href="/">rankings</a> and <a href="/how-we-rank">how we rank</a>. More background on the gold market and current data is available from the <a href="https://www.gold.org" rel="nofollow noopener" target="_blank">World Gold Council</a>.</p>
<p>And because gold pays no income and can fall sharply, consider talking to a fee-only financial adviser or a tax professional - someone who does not sell metals - before you commit a large share of your savings.</p>
${DISCLAIMER}`,
  },
];
