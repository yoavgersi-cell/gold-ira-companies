import type { ArticleSection } from "@/lib/config";

// Part 1 of "Gold IRA Rules 2026".
// Quick answer, the legal basis, the self-directed IRA and custodian rule,
// and which metals are eligible.

export const part1: ArticleSection[] = [
  {
    heading: "What are the IRS rules for a gold IRA?",
    body: `<div class="qa"><strong>Short answer:</strong> A gold IRA follows the same tax rules as any other IRA - the same contribution limits, rollover rules, early-withdrawal penalty, required minimum distributions and tax treatment. On top of those, it must follow a few extra rules for physical metal. The account must be a <strong>self-directed IRA</strong> held by a bank, trust company or IRS-approved non-bank trustee. It may only hold gold, silver, platinum or palladium that meets the purity standards in <strong>Internal Revenue Code section 408(m)</strong> (gold generally .995 fine, silver .999, platinum and palladium .9995, with an exception for American Eagle coins). The metal must stay in the <strong>physical possession of the trustee</strong>, which in practice means an approved depository, not your home. And you, your family and other "disqualified persons" may not do business with the IRA. Break one of these rules and the IRS can treat some or all of the account as distributed - which usually means income tax, and possibly a 10% additional tax if you are under 59½.</div>
<p>That paragraph is the core of it. The rest of this guide explains each rule in plain English, shows the numbers for 2026, and walks through worked examples so you can see what each rule means for real money. We also point out the places where the rules are genuinely unsettled, so you know when to ask a tax professional instead of relying on a salesperson's say-so.</p>
<p>If you are brand new to the idea, our short explainer <a href="/articles/what-is-a-gold-ira">what is a gold IRA?</a> covers the basics in a few minutes, and our <a href="/articles/gold-ira">complete gold IRA guide</a> covers whether owning gold in a retirement account makes sense for you at all. This guide is narrower: it is about the rules.</p>
<h3>The rules at a glance</h3>
<table>
<thead><tr><th>Rule area</th><th>What it says (2026)</th><th>Where to read more</th></tr></thead>
<tbody>
<tr><td>Account type</td><td>Self-directed traditional, Roth, SEP or SIMPLE IRA held by a qualified trustee or custodian</td><td><a href="#rule-1-you-need-a-self-directed-ira-and-a-qualified-trustee">Custodian rule</a></td></tr>
<tr><td>Eligible metals</td><td>Gold .995+, silver .999+, platinum and palladium .9995+, plus American Eagles and state-issued coins</td><td><a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a></td></tr>
<tr><td>Collectibles</td><td>Buying a collectible inside an IRA is treated as a distribution of its cost</td><td><a href="#what-the-irs-does-not-allow-collectibles-krugerrands-numismatics-and-jewelry">Ineligible items</a></td></tr>
<tr><td>Storage</td><td>Metal must be in the trustee's physical possession - an approved depository</td><td><a href="/articles/can-you-store-ira-gold-at-home">Can you store IRA gold at home?</a></td></tr>
<tr><td>Contributions</td><td>$7,500, plus $1,100 catch-up at 50+ ($8,600 total), in cash only</td><td><a href="#gold-ira-contribution-rules-for-2026">Contribution rules</a></td></tr>
<tr><td>Rollovers</td><td>Direct transfers unlimited; one 60-day IRA-to-IRA rollover per 12 months</td><td><a href="/articles/gold-ira-rollover">Gold IRA rollover guide</a></td></tr>
<tr><td>Early withdrawals</td><td>10% additional tax before 59½ unless an exception applies</td><td><a href="#distribution-rules-age-59-the-10-penalty-and-the-exceptions">Distribution rules</a></td></tr>
<tr><td>RMDs</td><td>Start at 73 (born 1951-59) or 75 (born 1960 or later); none for Roth IRA owners</td><td><a href="/articles/gold-ira-taxes-and-rmds">Gold IRA taxes and RMDs</a></td></tr>
<tr><td>Prohibited transactions</td><td>No personal use, no buying from or selling to yourself or family</td><td><a href="#prohibited-transactions-and-disqualified-persons">Prohibited transactions</a></td></tr>
</tbody>
</table>
<h3>Who these rules apply to</h3>
<p>Everything in this guide applies to <strong>physical metal held inside an IRA</strong>. It does not apply to gold you buy with after-tax money and keep in your own safe, and it does not apply to gold exchange-traded funds held in an ordinary brokerage IRA. Those are different products with different rules - see our comparison of a <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs a gold ETF</a> if you are weighing the two.</p>
<p>The same rules also apply to silver, platinum and palladium. People say "gold IRA" as shorthand, but a precious metals IRA can hold any mix of the four eligible metals. If silver is your main interest, our <a href="/articles/silver-ira">silver IRA guide</a> covers the silver-specific details.</p>
<h3>A note on dates and numbers</h3>
<p>All dollar limits in this guide are the 2026 figures the IRS published in Notice 2025-67. Gold prices are approximate and dated - gold traded around $4,170 an ounce on October 19, 2026, after a record of about $5,595 intraday on January 29, 2026. We use round prices in the worked examples to keep the arithmetic easy to follow. Tax rules change; check the current IRS publications before acting, and treat this guide as general information rather than advice for your situation.</p>`,
  },
  {
    heading: "The legal basis: IRC 408, 408(m) and IRS Publications 590-A and 590-B",
    body: `<p>Gold IRA rules are not set by gold companies, and they are not set by custodians. They come from federal tax law - mainly section 408 of the Internal Revenue Code - and from the IRS publications and regulations that explain it. Knowing where the rules live helps you tell the difference between a real requirement and a sales line.</p>
<h3>Section 408: what an IRA is</h3>
<p><a href="https://www.law.cornell.edu/uscode/text/26/408" target="_blank" rel="noopener">Section 408 of the Internal Revenue Code</a> defines an individual retirement account. Among other things, it says an IRA must be a trust or custodial account, that the trustee must be a bank or another person who shows the IRS they will administer the account properly, that contributions (other than rollovers) must be in cash and are capped each year, and that the account's assets may not be commingled with other property except in a common trust fund. Every one of those points shows up later in this guide, because each one has a direct consequence for physical metal.</p>
<h3>Section 408(m): the collectibles rule</h3>
<p>The part of the law that matters most for gold is section 408(m). It says that if an IRA acquires a <strong>collectible</strong>, the purchase is treated as a distribution to you of the amount spent. Collectibles include works of art, rugs, antiques, stamps, alcoholic beverages, and - importantly - "any metal or gem" and "any coin".</p>
<p>Read on its own, that would rule out gold entirely. The key is section 408(m)(3), which carves out exceptions:</p>
<ul>
<li><strong>Certain US coins.</strong> Gold, silver and platinum coins minted under specific sections of federal law - the American Eagle family - and coins issued under the laws of any US state.</li>
<li><strong>Bullion.</strong> Gold, silver, platinum or palladium bullion of a fineness that a regulated futures contract market requires for delivery, as long as it is <strong>in the physical possession of the trustee</strong>.</li>
</ul>
<p>So the "IRS-approved metals" that dealers talk about are really "metals that fall within the 408(m)(3) exceptions". The IRS does not publish a product list, approve particular coins by brand or bless any dealer's catalogue. Custodians decide which products they will accept based on their own reading of the statute.</p>
<h3>Section 4975: prohibited transactions</h3>
<p><a href="https://www.law.cornell.edu/uscode/text/26/4975" target="_blank" rel="noopener">Section 4975</a> lists the transactions a retirement account may not engage in with "disqualified persons" - you, your close family, your fiduciaries and certain businesses you control. Section 408(e) then says what happens to an IRA if its owner engages in one: the account stops being an IRA. We cover this in detail in the prohibited transactions section below.</p>
<h3>The IRS publications</h3>
<p>The IRS explains IRA rules in two plain-language publications that are updated every year:</p>
<ul>
<li><a href="https://www.irs.gov/publications/p590a" target="_blank" rel="noopener">Publication 590-A</a> covers <strong>contributions</strong> - limits, deductions, Roth eligibility, rollovers, transfers, recharacterizations and prohibited transactions. It includes a short passage confirming that investing IRA money in collectibles is treated as a distribution, and noting the exceptions for certain coins and bullion.</li>
<li><a href="https://www.irs.gov/publications/p590b" target="_blank" rel="noopener">Publication 590-B</a> covers <strong>distributions</strong> - early withdrawals and their exceptions, required minimum distributions, the life-expectancy tables, inherited IRAs and Roth distribution rules.</li>
</ul>
<p>Neither publication is written specifically for precious metals, and you will not find the words "gold IRA" in either. That is the point: a gold IRA is simply an IRA that holds an unusual asset. The general rules apply in full, and the metal-specific rules sit on top.</p>
<h3>Other sources you will see cited</h3>
<table>
<thead><tr><th>Source</th><th>What it adds</th></tr></thead>
<tbody>
<tr><td>IRS Notice 2025-67</td><td>The 2026 dollar limits for IRAs and workplace plans</td></tr>
<tr><td>IRS rollover chart</td><td>Which account types can roll into which (<a href="https://www.irs.gov/pub/irs-tege/rollover_chart.pdf" target="_blank" rel="noopener">PDF</a>)</td></tr>
<tr><td>SECURE Act (2019) and SECURE 2.0 (2022)</td><td>RMD starting ages, the 10-year rule for most heirs, the lower RMD penalty, new early-withdrawal exceptions</td></tr>
<tr><td>Bobrow v. Commissioner (2014)</td><td>Led to the one-rollover-per-12-months rule being applied across all your IRAs</td></tr>
<tr><td>McNulty v. Commissioner, 157 T.C. No. 10 (2021)</td><td>Home storage of IRA coins through an "IRA LLC" treated as a taxable distribution</td></tr>
<tr><td>Rev. Proc. 2020-46</td><td>Self-certification for a late 60-day rollover in certain situations</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "Rule 1: You need a self-directed IRA and a qualified trustee",
    body: `<p>The first rule is about the account itself. You cannot buy gold coins and put them in the IRA you already have at a big brokerage. Most mainstream IRA providers only allow stocks, bonds, mutual funds and ETFs, and they will not hold physical metal. To own physical metal, you need a <strong>self-directed IRA</strong> - an IRA whose custodian permits "alternative" assets such as precious metals, real estate or private notes.</p>
<h3>What "self-directed" means - and does not mean</h3>
<p>"Self-directed" means you choose the investments and the custodian carries out your instructions. It does <strong>not</strong> mean you hold the assets yourself, sign contracts on the IRA's behalf without the custodian, or have any special freedom from the tax rules. A self-directed IRA is still an IRA under section 408, with the same limits and penalties as any other.</p>
<p>It also does not mean the custodian checks whether your investment is wise. Self-directed custodians generally do not give investment advice, do not vet dealers and do not review prices. Their job is administrative: hold the account, process transactions, keep records and report to the IRS. That is why the CFTC and other regulators warn that a custodian's involvement is not an endorsement of the metals you buy.</p>
<h3>Who can be the trustee or custodian</h3>
<p>Section 408 requires the trustee to be a bank (which includes federally insured credit unions and savings institutions) or another entity that satisfies the IRS that it will administer the account properly. Entities in the second group are often called <strong>IRS-approved non-bank trustees</strong>, and many self-directed IRA custodians are state-chartered trust companies that fall into the first group or hold this approval. The IRS publishes a list of approved non-bank trustees.</p>
<p>This is the only part of a gold IRA where "IRS-approved" is a real phrase. It applies to the <strong>trustee</strong>, not to the dealer selling you the coins and not to the depository storing them. Our guide to <a href="/articles/gold-ira-custodians">gold IRA custodians</a> covers how to compare them.</p>
<h3>Which IRA types can hold metal</h3>
<table>
<thead><tr><th>Account type</th><th>Can it hold eligible metal?</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Traditional IRA</td><td>Yes</td><td>The most common gold IRA; funded by contributions or rollovers of pre-tax money</td></tr>
<tr><td>Roth IRA</td><td>Yes</td><td>Same metal rules; qualified withdrawals tax-free; see <a href="/articles/roth-gold-ira">Roth gold IRA</a></td></tr>
<tr><td>SEP IRA</td><td>Yes</td><td>Employer contributions for the self-employed; same metal and storage rules</td></tr>
<tr><td>SIMPLE IRA</td><td>Yes, if the custodian allows</td><td>Moving money out to a non-SIMPLE IRA in the first two years of participation can trigger a 25% additional tax</td></tr>
<tr><td>Inherited IRA</td><td>Yes</td><td>Must be set up as a beneficiary IRA; inheritance rules still apply</td></tr>
<tr><td>401(k), 403(b), TSP</td><td>Generally no</td><td>Most workplace plans do not offer physical metal; people roll eligible money into a self-directed IRA instead</td></tr>
</tbody>
</table>
<h3>The three parties - and who answers to whom</h3>
<p>Every gold IRA involves three separate roles, even if one company coordinates the paperwork:</p>
<ol>
<li><strong>The trustee or custodian</strong> holds the account legally, buys and sells on your written instructions, pays bills from the account, and files IRS forms.</li>
<li><strong>The dealer</strong> sells metal to the IRA and may buy it back later. Companies such as <a href="/reviews/goldco">Goldco</a> or <a href="/reviews/american-hartford-gold">American Hartford Gold</a> are dealers.</li>
<li><strong>The depository</strong> stores the metal in the custodian's name for the benefit of your IRA.</li>
</ol>
<p>The order of events matters. The custodian opens and funds the account first. You then sign a purchase direction telling the custodian which dealer to buy from and what to buy. The custodian pays the dealer from IRA cash, and the dealer ships directly to the depository. At no point should the metal pass through your hands, and at no point should you write a personal check to the dealer for metal you intend to put in the IRA. We explain why in the contribution rules section: IRA contributions must be in cash, so metal you have already bought cannot simply be "added" later.</p>
<h3>Worked example: the right order of operations</h3>
<p>Linda, 62, wants to move $60,000 from an existing IRA at a brokerage into gold.</p>
<ol>
<li>She opens a self-directed IRA with a custodian that accepts precious metals.</li>
<li>She signs a <strong>transfer request</strong> with the new custodian, which asks her brokerage to send $60,000 directly. No tax, no withholding, and it does not count against her one-rollover-per-year limit.</li>
<li>When the cash arrives, she chooses a dealer, agrees prices in writing, and signs the custodian's <strong>buy direction</strong> form.</li>
<li>The custodian wires $60,000 (less any fees the account owes) to the dealer, and the dealer ships the coins to the depository named on the form.</li>
<li>The depository confirms receipt to the custodian, and the metal shows up on Linda's next statement.</li>
</ol>
<p>Each step is documented by the custodian. That paper trail is exactly what protects Linda if the IRS ever asks how the metal came to be in her IRA. For the transfer side of this in detail, see our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a>.</p>`,
  },
  {
    heading: "Which metals are allowed: purity standards and the American Eagle exemption",
    body: `<p>Not every gold coin or bar can go into an IRA. The test comes straight from section 408(m)(3), and it has two routes: a product can qualify as a specified <strong>US coin</strong>, or it can qualify as <strong>bullion</strong> of sufficient fineness held by the trustee. Our dedicated guide to <a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a> lists popular products in more detail; here we cover the rule itself.</p>
<h3>Route 1: bullion that meets the fineness standard</h3>
<p>The statute does not name a purity number. It refers to the fineness "required for a contract market" - that is, the minimum purity a regulated futures exchange requires before it will accept the metal for delivery under a futures contract regulated by the Commodity Futures Trading Commission. In practice, custodians and the industry read that as:</p>
<table>
<thead><tr><th>Metal</th><th>Minimum fineness</th><th>As a percentage</th><th>Examples commonly accepted</th></tr></thead>
<tbody>
<tr><td>Gold</td><td>.995</td><td>99.5%</td><td>Canadian Gold Maple Leaf (.9999), American Gold Buffalo (.9999), Austrian Philharmonic (.9999), bars from accredited refiners</td></tr>
<tr><td>Silver</td><td>.999</td><td>99.9%</td><td>Canadian Silver Maple Leaf, Austrian Silver Philharmonic, .999 bars from accredited refiners</td></tr>
<tr><td>Platinum</td><td>.9995</td><td>99.95%</td><td>Platinum bars and coins meeting the standard</td></tr>
<tr><td>Palladium</td><td>.9995</td><td>99.95%</td><td>Palladium bars and coins meeting the standard</td></tr>
</tbody>
</table>
<p>Two practical points. First, custodians usually want bars to come from refiners on recognised accreditation lists, with a hallmark and serial number, so the purity can be relied on later. Second, eligibility is necessary but not sufficient: a product can meet the fineness test and still be a poor buy if the dealer's markup is high. Fineness tells you whether the IRS allows it, not whether the price is fair.</p>
<h3>Route 2: US coins named in the statute</h3>
<p>Section 408(m)(3)(A) exempts gold, silver and platinum coins minted under particular sections of Title 31 of the US Code - the American Eagle bullion coin programmes - and any coin issued under the laws of a US state. These coins do not have to meet the .995 fineness test, which is why they get special mention.</p>
<p>The best-known example is the <strong>American Gold Eagle</strong>. It is 22-karat gold - about 91.67% pure, alloyed with silver and copper for durability - so it would fail the .995 bullion test. It is allowed anyway because the statute names it. The <strong>American Silver Eagle</strong> and <strong>American Platinum Eagle</strong> are covered in the same way.</p>
<h3>What about proof American Eagles?</h3>
<p>The US Mint produces American Eagles in several finishes: bullion, proof (polished, sold in a presentation case) and sometimes burnished or other versions. Because the statutory exception refers to the coins by the law they are minted under rather than by their finish, proof American Eagles are widely treated as IRA-eligible, and many custodians accept them. The Gold Eagle proofs are among the rare "premium" coins that can legally go into an IRA.</p>
<p>Being allowed is not the same as being sensible. Proof coins usually carry much wider dealer spreads than bullion Eagles. One dealer's published disclosures, for example, showed a 23% spread on proof coins against 7% on bullion, and custodian disclosures warn that proof-coin spreads are wider. Enforcement cases brought by the SEC, CFTC and state regulators have involved IRA buyers steered into "premium" coins at markups of 50% to well over 100%. If someone recommends proofs for your IRA, ask for the spread in writing and compare it with plain bullion Eagles.</p>
<h3>State-issued coins</h3>
<p>The statute also exempts "any coin issued under the laws of any State". This exception is real but rarely matters in practice, because very few states have issued legal-tender bullion coins, and custodian acceptance varies. Treat a "state coin" pitch with the same scepticism as any other unusual product: ask the custodian directly, in writing, whether it will accept the specific coin.</p>
<h3>Worked example: three coins, three answers</h3>
<table>
<thead><tr><th>Product</th><th>Fineness</th><th>Eligible?</th><th>Why</th></tr></thead>
<tbody>
<tr><td>1 oz American Gold Eagle</td><td>.9167</td><td>Yes</td><td>Named in the statute; fineness test does not apply</td></tr>
<tr><td>1 oz Canadian Gold Maple Leaf</td><td>.9999</td><td>Yes</td><td>Meets the .995 bullion standard; must be held by the trustee</td></tr>
<tr><td>1 oz South African Krugerrand</td><td>.9167</td><td>No</td><td>Not a US coin, and below .995 - treated as a collectible</td></tr>
</tbody>
</table>
<p>All three contain one troy ounce of gold, and all three trade close to the gold price. Two can go in an IRA; one cannot. That is the kind of detail the rules turn on, and it is why you should confirm eligibility with your custodian before any purchase - not after.</p>`,
  },
];
