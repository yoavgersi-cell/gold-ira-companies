import type { ArticleSection } from "@/lib/config";

// Part 1 of "Gold IRA: The Complete Guide to Precious Metals IRAs (2026)".
// Quick answer, how the custodian/dealer/depository triangle works, account
// types, eligible metals and what an IRA cannot hold (including home storage).

export const part1: ArticleSection[] = [
  {
    heading: "What is a gold IRA?",
    body: `<div class="qa"><strong>Short answer:</strong> A gold IRA is a <strong>self-directed individual retirement account</strong> that holds physical, IRS-eligible gold, silver, platinum or palladium bullion instead of (or alongside) stocks, bonds and funds. It follows the same tax rules as any other IRA - traditional, Roth, SEP or SIMPLE - but the metal must be bought through the account, held by a trustee (the <strong>custodian</strong>) and stored in an approved <strong>depository</strong>, not at your home. You pay extra costs that a normal IRA does not have: dealer markups, custodian fees and storage fees.</div>
<p>That is the whole idea in one paragraph. People also call it a <strong>precious metals IRA</strong>, a <strong>self-directed gold IRA</strong> or, when the account holds mainly silver, a <a href="/articles/silver-ira-guide">silver IRA</a>. They are all the same type of account. "Gold IRA" is just the name the industry uses in its advertising.</p>
<p>This guide is the hub of everything we have written on the subject. It explains how the account works, which metals qualify, what it really costs, how gold has actually performed (including its painful drops), the tax rules, how it compares with gold ETFs and physical gold at home, and how to avoid the scams that have cost retirees tens of millions of dollars. Every section links to a deeper guide if you want more detail. If you prefer a shorter introduction first, read our plain-English explainer <a href="/articles/what-is-a-gold-ira">What Is a Gold IRA?</a></p>
<p>A few ground rules for how we write:</p>
<ul>
<li><strong>Every number is dated.</strong> Prices, fees and company details are as of <strong>October 19, 2026</strong> unless we say otherwise. Gold prices move every minute and companies change their terms often.</li>
<li><strong>Company figures are "reported."</strong> Most gold IRA companies do not publish fees or minimums on their websites. The figures we quote come from third-party reviews and company materials, and sources often disagree. Confirm everything in writing before you send money.</li>
<li><strong>We show the downsides.</strong> Gold has lost 29% to 70% of its value in past downturns, pays no income and costs more to hold than an index fund. You deserve to see that before you decide.</li>
<li><strong>This is education, not advice.</strong> A fee-only financial adviser or a tax professional who knows your whole situation is the right person to make a recommendation.</li>
</ul>
<p>If you only have five minutes, read this answer, the <a href="#what-does-a-gold-ira-cost">cost section</a>, the <a href="#cons-and-risks-of-a-gold-ira">cons and risks</a> and the <a href="#gold-ira-scams-and-regulator-warnings">scam warnings</a>. Those four sections will protect you from most of the expensive mistakes people make.</p>
<h3>A gold IRA in numbers (October 2026)</h3>
<table>
<thead><tr><th>Item</th><th>Figure</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Gold spot price</td><td>~$4,170/oz</td><td>Oct 19, 2026 (Kitco)</td></tr>
<tr><td>All-time high</td><td>~$5,595/oz intraday</td><td>Jan 29, 2026 (Reuters)</td></tr>
<tr><td>2026 IRA contribution limit</td><td>$7,500 ($8,600 at 50+)</td><td>IRS Notice 2025-67</td></tr>
<tr><td>Minimum gold purity</td><td>.995 fine (American Eagle exempt)</td><td>IRC 408(m)</td></tr>
<tr><td>Typical yearly custodian + storage</td><td>~$200-$700+</td><td>Depends on custodian and account size</td></tr>
<tr><td>Typical company minimum</td><td>~$10,000-$50,000 (reported)</td><td>Varies by company</td></tr>
<tr><td>RMD starting age</td><td>73 (75 if born 1960 or later)</td><td>Traditional, SEP and SIMPLE IRAs</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "How a gold IRA works: custodian, dealer and depository",
    body: `<p>An ordinary IRA at a brokerage is a one-stop shop. The brokerage holds your account, executes your trades and keeps your shares in electronic form. A gold IRA splits those jobs among <strong>three separate parties</strong>, and understanding who does what is the single most useful thing you can learn before you start. It explains where the fees come from and where the risks sit.</p>
<h3>1. The custodian (the trustee that legally holds the account)</h3>
<p>Federal law requires every IRA to have a trustee or custodian - a bank, a trust company, or another institution the IRS has approved to act as a nonbank trustee. Most stock brokerages will not hold physical metal, so gold IRAs use specialized <strong>self-directed IRA custodians</strong> such as Equity Trust, STRATA Trust, GoldStar Trust, Kingdom Trust or New Direction Trust Company.</p>
<p>The custodian:</p>
<ul>
<li>Opens the IRA in your name and files the required IRS paperwork (Forms 5498 and 1099-R).</li>
<li>Receives your rollover, transfer or contribution money.</li>
<li>Pays the dealer when you approve a purchase, and receives the proceeds when you sell.</li>
<li>Arranges for the metal to be held at a depository in the IRA's name.</li>
<li>Processes distributions and required minimum distributions.</li>
</ul>
<p>The custodian does <strong>not</strong> pick your metals or give investment advice. In a self-directed IRA, you (often guided by a salesperson) make the choices and the custodian simply carries out your signed instructions.</p>
<h3>2. The dealer (the company you see advertised)</h3>
<p>The companies with TV ads and radio spots - <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a> and many others - are <strong>precious metals dealers</strong>. They are not custodians and they are not banks. Their job is to sell you the metal. Most also help with the paperwork to open the account and start the rollover, which is why people call them "gold IRA companies."</p>
<p>The dealer earns money mainly through the <strong>spread or markup</strong>: the difference between what it pays for the metal and what it charges your IRA. That cost is usually not shown as a separate line on your statement. It is built into the price per coin or bar. This is the single biggest cost in most gold IRAs, and it is the place where most abuses happen.</p>
<p>One important point: <strong>no dealer is "IRS-approved."</strong> The IRS does not approve, license or endorse gold sellers. When you see that phrase in an ad, it usually means the dealer sells coins that are eligible for IRAs, which is a different thing. Treat the phrase as a small warning sign about how carefully the company words its marketing.</p>
<h3>3. The depository (the vault)</h3>
<p>The metal must sit in the physical possession of the trustee or an approved depository. In practice, that means a high-security vault such as the Delaware Depository, Brink's, International Depository Services (IDS) in Delaware or Texas, or the state-run Texas Bullion Depository. The depository stores, insures (through its own commercial policies) and audits the metal, and releases it only on the custodian's instructions.</p>
<p>You will usually choose between two storage types:</p>
<ul>
<li><strong>Commingled (non-segregated) storage:</strong> your coins are stored with other clients' identical coins. You own a specific quantity of a specific product, but you may not get back the exact same pieces. It is cheaper.</li>
<li><strong>Segregated storage:</strong> your metal is kept on its own shelf or in its own bin, labelled to your account. You get back the exact items you bought. It costs more, typically $50-$100 a year extra at the custodians we checked.</li>
</ul>
<h3>Who you pay, and for what</h3>
<table>
<thead><tr><th>Party</th><th>What it does</th><th>How it gets paid</th><th>Typical cost (Oct 2026)</th></tr></thead>
<tbody>
<tr><td>Dealer</td><td>Sells the metal, helps with paperwork, buys it back later</td><td>Markup/premium over spot on each purchase; spread when it buys back</td><td>~2-7% for common bullion online; reported 7-10%+ at phone-sales firms; 20%+ on proof coins</td></tr>
<tr><td>Custodian</td><td>Legally holds the IRA, handles money and IRS reporting</td><td>Setup fee, annual fee, transaction and wire fees</td><td>Setup ~$0-$75; annual ~$90-$300 flat, or tiered by value at some (e.g. $225-$2,250 at Equity Trust)</td></tr>
<tr><td>Depository</td><td>Stores and insures the metal</td><td>Annual storage fee, often billed through the custodian</td><td>~$95-$240/yr, or a percentage of value at some vaults</td></tr>
</tbody>
</table>
<p>Because three businesses are involved, a gold IRA has more paperwork and more fees than a regular IRA. That is the price of owning a physical asset inside a tax-advantaged account. Our full breakdown is in the <a href="/articles/gold-ira-fees">gold IRA fees guide</a>, and you can model your own numbers with the <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>.</p>
<h3>Why the dealer usually picks the custodian</h3>
<p>Most gold IRA companies work with one or two "preferred" custodians and steer customers to them. That is convenient, because the paperwork is familiar to both sides, but it is not a legal requirement. You are free to open the IRA at any custodian that will hold precious metals and then buy from any dealer that custodian will work with. If a company refuses to work with a custodian of your choice, ask why. Fee schedules differ more than most people realize, as you will see in the <a href="#what-does-a-gold-ira-cost">cost section</a>.</p>`,
  },
  {
    heading: "Types of gold IRAs: traditional, Roth, SEP and SIMPLE",
    body: `<p>A "gold IRA" is not a separate category in the tax code. It is a regular IRA that happens to hold metal. That means it can be any of the four main IRA types, and the tax treatment depends entirely on which type you open - not on what the account holds.</p>
<table>
<thead><tr><th>Type</th><th>Who it suits</th><th>Tax on money going in</th><th>Tax on money coming out</th><th>RMDs?</th><th>2026 contribution limit</th></tr></thead>
<tbody>
<tr><td>Traditional gold IRA</td><td>Most rollovers from a 401(k), 403(b), TSP or traditional IRA</td><td>Pre-tax (rollovers) or possibly deductible (new contributions)</td><td>Ordinary income tax; 10% extra tax before 59&frac12; unless an exception applies</td><td>Yes, from 73 or 75</td><td>$7,500; $8,600 at 50+</td></tr>
<tr><td>Roth gold IRA</td><td>People who expect higher taxes later, or who roll over a Roth 401(k)</td><td>After-tax</td><td>Tax-free if qualified (age 59&frac12; and the 5-year rule)</td><td>No, for the original owner</td><td>$7,500; $8,600 at 50+ (income limits apply)</td></tr>
<tr><td>SEP gold IRA</td><td>Self-employed people and small-business owners</td><td>Employer contributions, deductible to the business</td><td>Same as traditional</td><td>Yes</td><td>Up to 25% of compensation, capped by the $72,000 annual additions limit</td></tr>
<tr><td>SIMPLE gold IRA</td><td>Employees of small businesses with a SIMPLE plan</td><td>Pre-tax salary deferrals plus employer match</td><td>Same as traditional; 25% extra tax in first 2 years of participation if under 59&frac12;</td><td>Yes</td><td>$17,000 deferral (catch-up rules separate)</td></tr>
</tbody>
</table>
<p>Sources: IRS Notice 2025-67 for 2026 limits; IRS Publications <a href="https://www.irs.gov/publications/p590a" target="_blank" rel="noopener noreferrer">590-A</a> and <a href="https://www.irs.gov/publications/p590b" target="_blank" rel="noopener noreferrer">590-B</a> for the general rules.</p>
<h3>Traditional gold IRA</h3>
<p>This is by far the most common type, because most people fund a gold IRA by rolling over an old 401(k) or traditional IRA - money that has never been taxed. The money stays tax-deferred inside the new IRA. You pay ordinary income tax when you take it out, whether you take cash or the metal itself. Required minimum distributions start at age 73 (75 if you were born in 1960 or later), which matters more for a metals IRA than for a stock IRA because you may have to sell or ship metal to meet them.</p>
<h3>Roth gold IRA</h3>
<p>A Roth gold IRA is funded with after-tax money. Qualified withdrawals - generally after age 59&frac12; and once the account has met the 5-year rule - are tax-free, and the original owner never has to take RMDs. For a long-term holder who wants to leave metal untouched for decades, that last point is a real practical advantage. You can fund one with new Roth contributions (subject to income limits), a rollover from a Roth 401(k), or by converting traditional money, which is taxable in the year you convert. Our <a href="/articles/roth-gold-ira">Roth gold IRA guide</a> covers the trade-offs and the conversion math.</p>
<h3>SEP and SIMPLE gold IRAs</h3>
<p>Business owners and the self-employed can hold metals in a SEP IRA, and employees of small firms can do the same in a SIMPLE IRA - as long as the custodian supports it. Be careful with SIMPLE IRAs: if you are under 59&frac12; and move money out to a non-SIMPLE account within the first <strong>two years</strong> of joining the plan, the early-withdrawal penalty is 25% instead of 10%. Wait until the two years are up before rolling a SIMPLE IRA into a traditional gold IRA.</p>
<h3>Can I have more than one?</h3>
<p>Yes. Many people keep their main retirement savings in a regular brokerage IRA or 401(k) and open a separate, smaller self-directed IRA just for metals. The annual contribution limit is shared across all your traditional and Roth IRAs, though, so opening a second IRA does not give you a second $7,500 allowance.</p>`,
  },
  {
    heading: "What metals can a gold IRA hold?",
    body: `<p>A gold IRA can hold four metals: <strong>gold, silver, platinum and palladium</strong>. But not every coin or bar made of those metals qualifies. The rules come from <a href="https://www.law.cornell.edu/uscode/text/26/408" target="_blank" rel="noopener noreferrer">Internal Revenue Code section 408(m)</a>, which treats "collectibles" bought by an IRA as a taxable distribution - and then carves out exceptions for certain coins and bullion.</p>
<h3>The two routes to eligibility under IRC 408(m)</h3>
<ol>
<li><strong>Specific US coins named in the statute.</strong> The American Gold Eagle, American Silver Eagle and American Platinum Eagle coins, plus coins issued under the laws of a US state, are allowed by name. That is why the Gold Eagle qualifies even though it is only 22-karat (91.67% gold) - it is exempt from the purity test.</li>
<li><strong>Bullion that meets a minimum fineness.</strong> Other coins, bars and rounds qualify if they meet the purity required for a regulated futures contract and are held in the physical possession of the IRA trustee.</li>
</ol>
<h3>Minimum fineness requirements</h3>
<table>
<thead><tr><th>Metal</th><th>Minimum fineness</th><th>In plain English</th></tr></thead>
<tbody>
<tr><td>Gold</td><td>.995</td><td>99.5% pure (American Gold Eagle exempt by statute)</td></tr>
<tr><td>Silver</td><td>.999</td><td>99.9% pure</td></tr>
<tr><td>Platinum</td><td>.9995</td><td>99.95% pure</td></tr>
<tr><td>Palladium</td><td>.9995</td><td>99.95% pure</td></tr>
</tbody>
</table>
<h3>Common IRA-eligible products</h3>
<table>
<thead><tr><th>Product</th><th>Metal / purity</th><th>Why it qualifies</th><th>Typical online premium (2026)</th></tr></thead>
<tbody>
<tr><td>American Gold Eagle</td><td>Gold, .9167</td><td>Named in the statute</td><td>~3-6% (lowest seen ~0.4-0.7%)</td></tr>
<tr><td>American Gold Buffalo</td><td>Gold, .9999</td><td>Fineness</td><td>~4-6%</td></tr>
<tr><td>Canadian Gold Maple Leaf</td><td>Gold, .9999</td><td>Fineness</td><td>~3.5%</td></tr>
<tr><td>Austrian Gold Philharmonic</td><td>Gold, .9999</td><td>Fineness</td><td>Similar to Maple Leaf</td></tr>
<tr><td>Gold bars from accredited refiners (PAMP, Valcambi, etc.)</td><td>Gold, .999+</td><td>Fineness</td><td>1 oz ~2-5%; 10 oz ~1.8%; kilo ~1-3%</td></tr>
<tr><td>American Silver Eagle</td><td>Silver, .999</td><td>Named in the statute</td><td>~6-9%</td></tr>
<tr><td>100 oz silver bars</td><td>Silver, .999</td><td>Fineness</td><td>About spot to ~$1.50/oz over</td></tr>
<tr><td>American Platinum Eagle</td><td>Platinum, .9995</td><td>Named in the statute</td><td>~9-13%</td></tr>
</tbody>
</table>
<p>Premium figures are approximate online-dealer ranges from findbullionprices.com, SD Bullion and Costco listings in 2026. Phone-sales gold IRA companies generally charge more, and most do not publish their prices.</p>
<p>The full list - with notes on proof coins, rounds and lesser-known mints - is in our guide to <a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a>. (The IRS does not literally publish an approved list. "IRS-approved" in that context is shorthand for "meets the 408(m) rules.")</p>
<h3>Gold, silver, platinum or palladium?</h3>
<p>Most gold IRA money goes into gold, which is the deepest and most liquid market. Silver is cheaper per ounce and more volatile - it more than doubled in 2025 and then fell by roughly half from its reported January 2026 high. It also costs more to store per dollar of value because it is bulkier. Platinum and palladium are small, industrial-driven markets with high premiums. Our <a href="/articles/silver-ira-guide">silver IRA guide</a> covers silver in depth.</p>
<h3>Proof coins: legal is not the same as smart</h3>
<p>The statute covers American Eagle proofs, so they are technically allowed. But proof coins carry far larger markups than bullion - one dealer disclosed a 23% spread on proofs versus 7% on bullion - and when you sell, you are usually paid a price closer to melt value. Salespeople often push proofs and "premium" coins because they earn more on them. For most retirement savers, plain bullion coins and bars give you more metal for your money.</p>`,
  },
  {
    heading: "What you can't hold in a gold IRA - and why home storage fails",
    body: `<p>The flip side of the eligibility rules is a list of things an IRA cannot own. If your IRA buys a collectible, IRC 408(m) treats the purchase price as a <strong>distribution</strong> - taxable as income, plus the 10% additional tax if you are under 59&frac12;.</p>
<h3>Not allowed in a gold IRA</h3>
<table>
<thead><tr><th>Item</th><th>Why not</th></tr></thead>
<tbody>
<tr><td>South African Krugerrands</td><td>Only .9167 fine and not named in the statute, so they fail the purity test</td></tr>
<tr><td>Most rare, numismatic or "collector" coins</td><td>Collectibles; value depends on rarity, not metal content</td></tr>
<tr><td>Graded "certified" coins sold at collector prices</td><td>Often numismatic; even where the underlying coin qualifies, many custodians decline them and the collector premium is rarely recovered</td></tr>
<tr><td>Pre-1933 US gold coins (e.g. old Double Eagles)</td><td>Numismatic; below the purity standard</td></tr>
<tr><td>Gold jewelry and scrap gold</td><td>Collectibles; not bullion</td></tr>
<tr><td>Commemorative medals and novelty rounds</td><td>Collectibles or below fineness</td></tr>
<tr><td>Metal you already own</td><td>IRAs accept cash contributions only, and selling your own metal to your IRA is a prohibited transaction</td></tr>
</tbody>
</table>
<p>A good rule: if a salesperson describes a coin by its rarity, its "limited mintage," its grade or its "historic" story rather than its weight and purity, it is probably either ineligible or carries a very large markup. Ask for the product's exact name, fineness and the dealer's markup in writing.</p>
<h3>The home storage myth</h3>
<p>Some websites advertise a "home storage gold IRA" or "checkbook IRA" that lets you keep your IRA's coins in a safe at home. The pitch is attractive to people who distrust institutions. The reality is that it puts your entire account at risk.</p>
<p>The law says IRA bullion must be in the <strong>physical possession of the trustee</strong>. The leading court case is <strong>McNulty v. Commissioner, 157 T.C. No. 10 (2021)</strong>. Mrs McNulty set up a self-directed IRA that owned an LLC, had the LLC buy American Eagle coins, and stored them at home. The US Tax Court ruled that taking personal possession of the coins was a <strong>taxable distribution</strong> of their full value, and upheld accuracy-related penalties on top. In other words, a large part of her retirement savings became taxable income in a single year.</p>
<p>The practical risks of home storage:</p>
<ul>
<li><strong>Tax:</strong> the IRS can treat the metal as distributed - income tax on the full value, plus the 10% additional tax if you are under 59&frac12;, plus possible penalties.</li>
<li><strong>Prohibited-transaction risk:</strong> if you personally use or control IRA assets, the IRS may argue the whole IRA is disqualified.</li>
<li><strong>Theft and insurance:</strong> home insurance often covers only a small amount of bullion without a special rider.</li>
<li><strong>No independent audit trail</strong> showing the IRA still owns what it claims to own.</li>
</ul>
<p>If you want gold you can hold in your hand, the clean way is to buy it outside your IRA with after-tax money - or take an in-kind distribution and pay the tax. Our full analysis is in <a href="/articles/can-you-store-ira-gold-at-home">Can You Store IRA Gold at Home?</a> Any company that promises home storage inside an IRA is a red flag, as we explain in <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a>.</p>
<h3>Other prohibited moves</h3>
<p>The general IRA prohibited-transaction rules also apply. You cannot borrow from your IRA, use IRA metal as collateral for a loan, sell your own property to the IRA, or buy metal from the IRA for personal use. A prohibited transaction can cause the whole IRA to stop being an IRA as of the first day of that year, with the entire balance treated as distributed. When in doubt, ask your custodian and a tax professional before you act.</p>`,
  },
];
