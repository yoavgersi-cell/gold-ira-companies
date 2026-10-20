import type { ArticleSection } from "@/lib/config";

// Part 1 of "Silver IRA: The Complete 2026 Guide".
// Quick answer, how a silver IRA works, silver vs gold, eligible and
// ineligible silver. Figures dated Oct 2026; sources in PILLAR-RESEARCH.md
// and RESEARCH.md. Question-shaped headings become FAQPage schema.

export const part1: ArticleSection[] = [
  {
    heading: "What is a silver IRA?",
    body: `<div class="qa"><strong>Short answer:</strong> A silver IRA is a <strong>self-directed individual retirement account</strong> that holds physical silver coins and bars instead of (or alongside) stocks, bonds and funds. It follows the <strong>same tax rules as any traditional or Roth IRA</strong> and the same rules as a gold IRA. The silver must be at least <strong>.999 fine</strong> (the American Silver Eagle is allowed by statute), it must be held by an IRS-approved trustee or custodian, and it must sit in an approved depository - <strong>not in your home</strong>. Silver is far cheaper per ounce than gold (about <strong>$57.70 vs $4,170</strong> on October 19, 2026, a ratio of roughly <strong>72 to 1</strong>), so it is more volatile, bulkier to store and more sensitive to the dealer's markup. Product choice matters a great deal: 100-ounce bars have recently sold near spot, while American Silver Eagles averaged about <strong>6.9-8.5% over spot</strong> in mid-2026.</div>
<p>That is the whole idea in one paragraph. The rest of this guide explains each part in plain English, with tables, real 2026 price data and worked examples you can check with a calculator.</p>
<p>The tax code does not mention "silver IRAs" at all. A silver IRA is an ordinary IRA that happens to own physical metal, under short, strict rules. Most of what goes wrong for silver investors comes from not knowing those rules - or from paying far too much for the metal itself.</p>
<p>This guide covers how the account works, silver vs gold, which silver is eligible, price history, premiums, storage, full 10-year cost examples, taxes and rollovers, ETFs and home storage as alternatives, risks and scams, and how to choose a company - including how "free silver" offers really work.</p>
<p>If you are new to precious metals IRAs in general, our <a href="/articles/gold-ira">complete gold IRA guide</a> covers the shared basics. Everything in it applies to silver, too. This guide focuses on what is <em>different</em> about silver.</p>
<h3>A note on our numbers</h3>
<p>Prices in this guide are <strong>approximate and dated</strong>. Spot silver was about <strong>$57.70 an ounce on October 19, 2026</strong>, and spot gold was about $4,170. Company and custodian figures are <strong>reported</strong> - usually by third-party review sites - and are current to the best of our knowledge as of October 2026. Those sites often disagree, so we say where a number came from. Every worked example is labeled as an <strong>illustration</strong>. It shows how the math works, not what you will pay or earn. Silver can and does fall sharply, and nothing here is a forecast or a promise of returns.</p>`,
  },
  {
    heading: "How a silver IRA works: custodian, dealer and depository",
    body: `<p>A regular IRA at a brokerage is a one-stop shop. The brokerage holds the account, buys the funds and keeps the records. A silver IRA splits that job among <strong>three separate businesses</strong>. Understanding who does what helps you see where the costs - and the risks - come from.</p>
<table>
<thead><tr><th>Role</th><th>What it does</th><th>How it gets paid</th></tr></thead>
<tbody>
<tr><td><strong>Custodian</strong> (or trustee)</td><td>Legally holds the IRA, keeps records, sends tax forms to you and the IRS, moves money and approves purchases</td><td>Setup fee, annual fee, transaction fees</td></tr>
<tr><td><strong>Dealer</strong></td><td>Sells you the silver and often buys it back later; many "silver IRA companies" are dealers that help you set up the account</td><td>The markup (spread) over the spot price of silver</td></tr>
<tr><td><strong>Depository</strong></td><td>Stores and insures the metal in a vault</td><td>Annual storage fee, usually billed through the custodian</td></tr>
</tbody>
</table>
<h3>The custodian</h3>
<p>The tax code says an IRA must be held by a bank or by another person that satisfies the IRS that it will administer the account properly (<a href="https://www.law.cornell.edu/uscode/text/26/408" rel="noopener">26 U.S.C. 408</a>). Most big brokerages do not hold physical metal, so silver IRAs use <strong>self-directed IRA custodians</strong> that specialize in "alternative" assets. Names you will see include Equity Trust, STRATA Trust, GoldStar Trust, Kingdom Trust, New Direction and others. Our guide to <a href="/articles/gold-ira-custodians">gold IRA custodians</a> compares them in depth; the same custodians handle silver.</p>
<h3>The dealer</h3>
<p>The dealer is the company you usually talk to first. When you see an ad for a "silver IRA company", you are almost always looking at a <strong>dealer</strong> - not a custodian and not an IRS-regulated entity. There is no such thing as an "IRS-approved" silver dealer. The IRS approves custodians and sets rules for the metal; it does not approve or endorse sellers.</p>
<p>Dealers earn most of their money on the <strong>spread</strong>: the gap between what they charge you and the spot price of silver, and later the gap between spot and what they pay when they buy it back. As you will see, that spread is usually the single biggest cost in a silver IRA.</p>
<h3>The depository</h3>
<p>The depository is a high-security vault, such as the Delaware Depository, Brink's, International Depository Services (IDS) or the state-run Texas Bullion Depository. Your silver is stored either <strong>commingled</strong> (pooled with other investors' identical products - you get back the same type and amount, not the exact bars) or <strong>segregated</strong> (your specific items are kept apart). Segregated storage costs more.</p>
<h3>How the money flows, step by step</h3>
<ol>
<li>You open a self-directed IRA with a custodian (the dealer often handles the paperwork).</li>
<li>You fund it by contribution, by a trustee-to-trustee transfer from another IRA, or by a rollover from a 401(k), 403(b), TSP or similar plan.</li>
<li>You agree on a purchase with the dealer - which products, how many ounces and at what price.</li>
<li>You (or the dealer) send a signed buy direction to the custodian, which pays the dealer from your IRA cash.</li>
<li>The dealer ships the silver straight to the depository, which confirms receipt to the custodian.</li>
<li>You pay annual custodian and storage fees for as long as you hold the silver.</li>
<li>Later, you sell the silver back (often to the same dealer), take it out "in kind" as a distribution, or move it to another custodian.</li>
</ol>
<p>The key safety point: <strong>the silver should never pass through your hands while it is in the IRA</strong>. The dealer ships it to the depository, not to you. If a company suggests you can keep IRA silver at home or in a safe-deposit box, read our article on <a href="/articles/can-you-store-ira-gold-at-home">whether you can store IRA gold at home</a> first - the same rules and the same tax court case apply to silver.</p>`,
  },
  {
    heading: "Silver vs gold in an IRA: the key differences",
    body: `<p>Silver and gold are both precious metals, and the IRA rules treat them almost the same way. But as investments they behave quite differently. Before you decide between a silver IRA and a gold IRA - or a mix - it helps to see the differences side by side.</p>
<table>
<thead><tr><th>Feature</th><th>Silver</th><th>Gold</th></tr></thead>
<tbody>
<tr><td>Spot price, Oct 19, 2026 (approx.)</td><td>$57.70/oz</td><td>$4,170/oz</td></tr>
<tr><td>2025 price change (approx.)</td><td>Up about 145%</td><td>Up about 65%</td></tr>
<tr><td>Record high (approx.)</td><td>~$121.62 on Jan 29, 2026 (one data source; unverified)</td><td>~$5,595 intraday on Jan 29, 2026 (Reuters)</td></tr>
<tr><td>Fall from record to Oct 19, 2026</td><td>About 53%</td><td>About 25%</td></tr>
<tr><td>Main source of demand</td><td>Industry plus investors</td><td>Investors, jewelry and central banks</td></tr>
<tr><td>Minimum IRA fineness</td><td>.999</td><td>.995 (Gold Eagle exempt by statute)</td></tr>
<tr><td>Typical premium, popular 1 oz coin</td><td>Silver Eagle ~6.9-8.5% (mid-2026)</td><td>Gold Eagle ~3-6%</td></tr>
<tr><td>Weight of $50,000 at Oct 2026 prices</td><td>About 59 pounds</td><td>Under 1 pound</td></tr>
</tbody>
</table>
<p class="small"><em>Price and premium data from PILLAR-RESEARCH sources (Kitco, Reuters, Metalcharts, findbullionprices, SD Bullion), Oct 2026. Percentages are our arithmetic from those figures.</em></p>
<h3>1. Silver is more volatile</h3>
<p>Silver tends to move further than gold in both directions. In 2025, silver rose about 145% while gold rose about 65% - roughly 2.2 times as much. Then, from their January 29, 2026 highs to October 19, 2026, silver fell about 53% while gold fell about 25% - again roughly twice as far.</p>
<p>Here is the math for the fall: $57.70 ÷ $121.62 = 0.474, so silver was about 52.6% below its reported peak. For gold, $4,170 ÷ $5,595 = 0.745, about 25.5% below its peak.</p>
<h3>2. The gold/silver ratio: about 72 to 1</h3>
<p>The <strong>gold/silver ratio</strong> is simply how many ounces of silver one ounce of gold buys. On October 19, 2026: $4,170 ÷ $57.70 = about <strong>72.3</strong>. On January 29, 2026, using the reported intraday highs, it was about $5,595 ÷ $121.62 = <strong>46</strong>. In other words, silver went from relatively "expensive" against gold to relatively "cheap" within nine months.</p>
<p>Some investors use the ratio to decide when to favor one metal over the other. That is a trading idea, not a law of nature: the ratio can stay high or low for years, and there is no rule that it must return to any particular level. Treat it as one piece of context, not a signal.</p>
<h3>3. Industrial demand cuts both ways</h3>
<p>Gold is mostly held as a store of value. Silver is different: a large share of the silver used each year goes into <strong>industrial products</strong> such as electronics, solar panels and other manufacturing. That gives silver a source of demand gold does not have - but it also ties silver's price to the business cycle. When factories slow down, industrial demand can fall, and silver can drop along with stocks rather than acting as a hedge against them.</p>
<h3>4. Bulk and storage</h3>
<p>Because silver is so much cheaper per ounce, the same dollar amount takes up far more space. $50,000 of gold at $4,170 is about 12 ounces - it fits in your palm. $50,000 of silver at $57.70 is about 867 ounces and weighs roughly 59 pounds. We work through the math in the <a href="#storage-silver-is-heavy-and-bulky">storage section</a>. Bulk matters for storage pricing, shipping, and taking silver out of the IRA later.</p>
<h3>5. Premiums are a bigger share of the price</h3>
<p>Making a one-ounce silver coin costs roughly as much work as making a one-ounce gold coin, but the silver inside is worth about 1/72 as much. So the minting and distribution costs are a much bigger percentage of the price. That is why Silver Eagles carry higher percentage premiums than Gold Eagles - and why choosing large bars over coins can save silver buyers far more than it saves gold buyers. See the <a href="#silver-premiums-why-product-choice-matters-more-than-with-gold">premiums section</a> for a worked example.</p>
<h3>What stays the same</h3>
<p>Almost all the rules are identical. Contribution limits, rollover rules, required minimum distributions, early-withdrawal penalties, the ban on home storage and the custodian requirement work the same way for silver as they do for gold. If you already understand the <a href="/articles/gold-ira-rules">gold IRA rules</a>, you understand most of the silver IRA rules too.</p>`,
  },
  {
    heading: "Eligible silver: the coins and bars that qualify",
    body: `<p>Not every silver coin or bar can go into an IRA. The rule comes from Section 408(m) of the tax code. If an IRA buys a "collectible" - and the law counts most coins and metals as collectibles - the purchase is treated as a <strong>distribution</strong>. That means it can be taxed, and if you are under 59½, hit with the 10% additional tax as well.</p>
<p>Section 408(m)(3) carves out two exceptions that make silver IRAs possible (<a href="https://www.law.cornell.edu/uscode/text/26/408" rel="noopener">26 U.S.C. 408(m)</a>):</p>
<ol>
<li><strong>Certain U.S. coins</strong> named in the statute, which include the <strong>American Silver Eagle</strong>, as well as the gold and platinum American Eagles and certain state-issued coins.</li>
<li><strong>Bullion</strong> that meets the minimum fineness required for a regulated futures contract - for silver, <strong>.999 fine</strong> (99.9% pure) - provided it is in the physical possession of the IRA trustee or custodian.</li>
</ol>
<p>IRS Publication 590-A summarizes the same rule in its section on investments in collectibles (<a href="https://www.irs.gov/publications/p590a" rel="noopener">IRS Pub. 590-A</a>). Our full article on <a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a> covers gold, platinum and palladium too.</p>
<h3>Commonly eligible silver products</h3>
<table>
<thead><tr><th>Product</th><th>Issuer</th><th>Fineness</th><th>Why it qualifies</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>American Silver Eagle (1 oz)</td><td>U.S. Mint</td><td>.999</td><td>Named U.S. coin under 408(m)(3)(A)</td><td>Most popular IRA silver coin; higher premium than bars</td></tr>
<tr><td>American Silver Eagle <strong>proof</strong></td><td>U.S. Mint</td><td>.999</td><td>Covered by the same statutory exemption</td><td>Eligible, but proof premiums are much higher - see below</td></tr>
<tr><td>Canadian Silver Maple Leaf</td><td>Royal Canadian Mint</td><td>.9999</td><td>Meets .999 bullion standard</td><td>Usually a slightly lower premium than the Silver Eagle</td></tr>
<tr><td>British Silver Britannia</td><td>The Royal Mint</td><td>.999 (2013 and later)</td><td>Meets .999 bullion standard</td><td>Older Britannias were .958 and do not meet the standard</td></tr>
<tr><td>Austrian Silver Philharmonic</td><td>Austrian Mint</td><td>.999</td><td>Meets .999 bullion standard</td><td>Widely accepted by custodians</td></tr>
<tr><td>Silver bars (1 oz to 1,000 oz)</td><td>Accredited refiners</td><td>.999 or better</td><td>Meets .999 bullion standard</td><td>100 oz and 1,000 oz bars carry the lowest premiums; custodians typically require bars from accredited refiners</td></tr>
</tbody>
</table>
<p class="small"><em>Fineness for the Maple Leaf, Philharmonic and Britannia is as stated by the mints and major dealers; the Britannia's switch from .958 to .999 in 2013 is reported by dealers such as APMEX and Money Metals (accessed Oct 2026). Always confirm a specific product, year and refiner with your custodian before buying.</em></p>
<h3>The American Silver Eagle exemption</h3>
<p>The Silver Eagle is special because it qualifies <strong>by name</strong>, not just by purity. That is also why American Eagle <strong>proof</strong> coins - the shiny, mirror-finish versions sold in presentation boxes - are allowed even though most proof and collector coins are not.</p>
<p>Being allowed is not the same as being a good buy. Proof coins are made in smaller numbers, packaged for collectors and sold at prices well above the silver they contain. One phone-sales dealer, American Bullion, disclosed spreads of <strong>7% on bullion, 20% on collectibles and 23% on proofs</strong> (reported by LendEdu). Custodians' own risk disclosures also warn that proof spreads are wider. If a salesperson steers you toward proof Silver Eagles "because they are IRA eligible", ask why - and ask what the coin would sell back for today.</p>
<h3>Bars from accredited refiners</h3>
<p>For silver bars, custodians generally want two things: <strong>.999 fineness</strong> and a bar made by a refiner on an accepted list (commonly refiners accredited by a major exchange or by the London Bullion Market Association). Bars should carry the refiner's stamp, the weight, the fineness and usually a serial number. The custodian or depository makes the final call, so get the product approved before you buy.</p>
<p>Common IRA bar sizes are 1 oz, 10 oz, 100 oz and 1,000 oz. Larger bars have lower premiums but are harder to sell in small pieces - a point that matters when you take required minimum distributions, as we explain in the <a href="#silver-ira-taxes-and-rmds">taxes and RMDs section</a>.</p>
<h3>Rounds and other products</h3>
<p>Silver "rounds" look like coins but are made by private mints and have no face value. Some .999 rounds from recognized refiners are accepted by some custodians; others are not. Because acceptance varies, treat rounds as "ask first". The same goes for other foreign bullion coins: many are .999 fine and commonly accepted, but the only answer that counts is your custodian's written approval.</p>`,
  },
  {
    heading: "Ineligible silver: junk silver, collectibles and other traps",
    body: `<p>Some of the most popular silver among home collectors cannot go into an IRA. Buying it inside an IRA is not just a bad idea - under Section 408(m), the IRA's cost is treated as a <strong>distribution</strong>, which can trigger income tax and, before age 59½, the 10% additional tax.</p>
<h3>"Junk silver" and 90% silver coins</h3>
<p>"Junk silver" is the nickname for circulated U.S. dimes, quarters and half dollars minted in 1964 and earlier. They are <strong>90% silver</strong>, which is well below the .999 fineness required for bullion, and they are not on the statute's list of named coins. So they do not qualify. The same is true for:</p>
<ul>
<li><strong>40% silver</strong> Kennedy half dollars and other partly silver coins.</li>
<li><strong>Morgan and Peace silver dollars</strong> (90% silver, and usually priced as collectibles).</li>
<li><strong>Sterling silver</strong> (.925) bars, flatware and jewelry.</li>
<li><strong>Pre-2013 Britannias</strong> (.958 fine).</li>
</ul>
<h3>Collectible and numismatic coins</h3>
<p>Rare-date coins, certified "graded" coins sold mainly for their collector value, commemoratives, colorized coins and limited editions are generally treated as collectibles. Apart from the statutory American Eagle exemption, proof and numismatic coins usually do not qualify. Even where a coin is technically allowed, the price is mostly collector premium rather than silver - which is the opposite of what most retirement savers want.</p>
<p>This is where many silver IRA problems begin. A sales representative says the "rare" or "limited mintage" coin will be worth more than ordinary bullion, the investor pays a large premium, and later learns the buyback price is far below what they paid. Regulators have seen this pattern repeatedly - see the <a href="#silver-ira-scams-the-safeguard-metals-case-and-other-red-flags">scams section</a>.</p>
<h3>Quick eligibility checklist</h3>
<table>
<thead><tr><th>Item</th><th>IRA eligible?</th><th>Reason</th></tr></thead>
<tbody>
<tr><td>American Silver Eagle (bullion)</td><td>Yes</td><td>Named in statute</td></tr>
<tr><td>American Silver Eagle (proof)</td><td>Yes</td><td>Named in statute - but very high premium</td></tr>
<tr><td>Silver Maple Leaf, Britannia (2013+), Philharmonic</td><td>Generally yes</td><td>.999 or better bullion</td></tr>
<tr><td>.999 bars from accredited refiners</td><td>Generally yes</td><td>.999 bullion; refiner list set by custodian</td></tr>
<tr><td>Silver rounds</td><td>Sometimes</td><td>Depends on refiner and custodian</td></tr>
<tr><td>Junk silver (90% U.S. coins, 1964 and earlier)</td><td>No</td><td>Below .999; not a named coin</td></tr>
<tr><td>Morgan and Peace dollars</td><td>No</td><td>90% silver; collectible</td></tr>
<tr><td>Sterling silver (.925)</td><td>No</td><td>Below .999</td></tr>
<tr><td>Rare, graded or commemorative coins</td><td>Generally no</td><td>Collectibles under 408(m)</td></tr>
<tr><td>Silver you already own at home</td><td>No (cannot be contributed)</td><td>IRA contributions must be cash; the IRA buys its own metal</td></tr>
</tbody>
</table>
<p>That last row surprises people. You <strong>cannot move silver you already own into an IRA</strong>. IRA contributions and rollovers are made in cash (or by transferring existing IRA assets). If you want your home silver in an IRA, you would have to sell it, contribute the cash within the annual limit, and let the IRA buy new metal.</p>
<h3>Who decides?</h3>
<p>The tax code sets the rules, but in practice your <strong>custodian</strong> decides which specific products it will accept. A good custodian keeps an approved list and will reject ineligible items. A dealer's statement that something is "IRA approved" is a sales claim, not a guarantee - check with the custodian, in writing, before you buy. For more on the IRS rules, see our <a href="/articles/gold-ira-rules">gold IRA rules guide</a>.</p>`,
  },
];
