import type { ArticleSection } from "@/lib/config";

// Part 1 of "Gold IRA Custodians & Depositories Compared (2026)".
// Quick answer, custodian vs dealer vs depository, what makes a custodian
// qualified, and how custodian fees are structured. Figures dated Oct 2026;
// sources in PILLAR-RESEARCH.md and RESEARCH.md. [3P] figures are labelled
// "reported" in the copy.

export const part1: ArticleSection[] = [
  {
    heading: "What does a gold IRA custodian do?",
    body: `<div class="qa"><strong>Short answer:</strong> A gold IRA custodian is the <strong>bank, trust company or IRS-approved non-bank trustee</strong> that legally holds your IRA. It opens the account, receives your rollover or transfer, pays the dealer when you buy metal, arranges for the metal to be stored at a depository, keeps the records, and sends the required tax reports to you and the IRS. It does <strong>not</strong> sell you gold and it does <strong>not</strong> usually store the gold itself. In October 2026, reported custodian fees run from about <strong>$90 to $700 a year</strong> before storage at balances up to about $300,000, and storage adds roughly <strong>$75 to $250+ a year</strong> at common account sizes. Fee schedules change, so always confirm the current one with the custodian.</div>
<p>If you are opening a gold IRA, three different businesses will touch your money. The <strong>dealer</strong> sells you the coins or bars. The <strong>custodian</strong> owns the account on paper, on your behalf. The <strong>depository</strong> keeps the metal in a vault. Most people only ever speak to the dealer, so the custodian and depository can feel invisible. They are not. Between them they charge most of the yearly fees you will pay for as long as you own the account.</p>
<p>This guide is about those two "invisible" businesses. We compare nine custodians that are often used for precious metals IRAs and five depositories, with fee tables, worked examples and the questions you should ask before you sign anything.</p>
<p>Here is what you will find below:</p>
<ul>
<li>A plain-English explanation of who does what: <strong>custodian vs dealer vs depository</strong>, who you pay and who you get to choose.</li>
<li>What makes a custodian <strong>qualified</strong> to hold an IRA, and how to check the IRS list of approved non-bank trustees yourself.</li>
<li>The three ways custodians price their services: <strong>flat, tiered and per-asset</strong>.</li>
<li>Profiles of <strong>Equity Trust, STRATA Trust, Kingdom Trust, GoldStar Trust, Preferred Trust, Madison Trust, Advanta IRA, uDirect IRA and New Direction Trust</strong>, each with a fee table and honest notes on what we could and could not confirm.</li>
<li>A <strong>10-year fee comparison</strong> at $50,000, $100,000 and $250,000, with the math shown line by line.</li>
<li>The main <strong>depositories</strong> - Delaware Depository, Brink's, IDS, the Texas Bullion Depository and the A-Mark/CNT option - and a storage cost table from $50,000 to $500,000 showing where percentage pricing overtakes a flat fee.</li>
<li><strong>Segregated vs commingled</strong> storage, insurance and audits, how to switch custodians, red flags, a question script and a checklist.</li>
</ul>
<p>If you are new to the topic, our <a href="/articles/what-is-a-gold-ira">guide to what a gold IRA is</a> and our <a href="/articles/gold-ira">complete gold IRA guide</a> cover the basics. If you mainly want to know the total cost - including the dealer's markup, which is usually bigger than any custodian fee - read our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> alongside this one.</p>
<h3>A note on our numbers</h3>
<p>Only one custodian fee schedule in this guide - <strong>Equity Trust's</strong> - comes straight from the custodian's own published document (Retail Fee Schedule FS-0001-03, revised November 6, 2025). A few others come from the custodian's own website as reported in October 2026. Many figures come from <strong>third-party review sites</strong>, which often disagree with each other and are sometimes out of date. We label every figure as <strong>reported</strong>, give its date where we have one, and point out conflicts. Treat every number here as a starting point for your own questions, not as a quote. Custodians change their fees, sometimes more than once a year.</p>
<p>None of this is financial advice. A gold IRA has real costs, pays no interest or dividends, and gold can fall sharply - it dropped about 29% between its record of roughly $5,595 an ounce on January 29, 2026 and a low near $3,994 in late June 2026. A fee-only adviser who does not sell metals can help you decide whether it fits your plan at all.</p>`,
  },
  {
    heading: "Custodian vs dealer vs depository: who does what",
    body: `<p>The single most useful thing to understand about a gold IRA is that it is a <strong>three-party arrangement</strong>. Each party has a different job, a different way of getting paid and a different relationship with you.</p>
<table>
<thead><tr><th>Party</th><th>What it does</th><th>How it gets paid</th><th>Who usually picks it</th></tr></thead>
<tbody>
<tr><td>Dealer (the "gold IRA company")</td><td>Sells you the coins or bars, often helps with the paperwork, and may offer to buy the metal back later</td><td>The markup (spread) between what it pays for metal and what it charges you; sometimes small fees</td><td>You</td></tr>
<tr><td>Custodian (trustee)</td><td>Legally holds the IRA, moves money, pays the dealer on your instructions, keeps records, files IRS forms</td><td>Setup fee, annual fee, transaction fees, exit fees</td><td>You, but often steered by the dealer</td></tr>
<tr><td>Depository</td><td>Stores the metal in an insured vault, counts it, reports holdings to the custodian</td><td>Storage fee, usually billed through the custodian</td><td>Usually you, from a list the custodian works with</td></tr>
</tbody>
</table>
<h3>The dealer</h3>
<p>The dealer is the company you see advertised: the firms we review on this site, such as <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>. A dealer is a <strong>seller of metal</strong>. It is not a custodian, it is not a trustee, and it is <strong>never "IRS-approved"</strong> - the IRS does not approve or endorse precious metals dealers. If a sales rep tells you otherwise, treat it as a warning sign (see our <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags guide</a>).</p>
<p>The dealer makes most of its money on the markup, which is usually the largest single cost in a gold IRA. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> covers markups in depth.</p>
<h3>The custodian</h3>
<p>The custodian is the legal holder of your IRA. Under federal tax law, an IRA must have a trustee or custodian that is a bank, a federally insured credit union, a savings and loan, or another entity the IRS has approved. You cannot be your own custodian, and neither can the dealer (unless the dealer is itself a qualified trustee, which the ones we review are not).</p>
<p>In practice the custodian:</p>
<ul>
<li>Opens the account and checks your identity.</li>
<li>Requests the transfer or rollover from your old IRA, 401(k), TSP or 403(b).</li>
<li>Pays the dealer when you sign a "buy direction" form, and confirms the metal arrived at the depository.</li>
<li>Sends you statements, and files IRS Form 5498 (contributions and year-end value) and Form 1099-R (distributions).</li>
<li>Handles distributions, including required minimum distributions (RMDs) from traditional IRAs.</li>
</ul>
<p>The custodian does <strong>not</strong> give investment advice and does not judge whether the price you paid was fair. Most self-directed custodians make you sign a form saying exactly that. That matters: if a dealer overcharges you, the custodian will usually still process the purchase.</p>
<h3>The depository</h3>
<p>The depository is the vault. It receives the metal from the dealer, checks it in, stores it and reports to the custodian. IRS rules require IRA gold to be in the physical possession of the trustee or its agent, which is why your coins cannot sit in your safe at home (see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a>). The depository acts as that agent.</p>
<h3>Who you actually pay</h3>
<p>This is where people get confused. In a typical gold IRA:</p>
<ul>
<li>You pay the <strong>dealer</strong> once, when you buy, through the markup built into the price.</li>
<li>You pay the <strong>custodian</strong> a setup fee and then an annual fee, usually from cash held in the IRA or by card.</li>
<li>You pay the <strong>depository</strong> through the custodian, which adds the storage fee to its own bill.</li>
</ul>
<p>So your yearly bill usually comes from one place (the custodian) but covers two businesses. When a dealer says "fees are about $225 a year", it usually means custodian plus storage at a small balance. It does not include the markup.</p>
<h3>Who you get to choose - and the "partner custodian" problem</h3>
<p>Legally, the IRA is yours, so you can pick the custodian. In practice, most dealers have one or two custodians they work with all the time, and the account-opening paperwork they send you is often pre-filled for that custodian. Dealers may steer you to a "partner" custodian because it is familiar to their staff, because the paperwork is fast, or because of a business relationship. None of that is necessarily bad, but it means the custodian was chosen for the dealer's convenience, not yours.</p>
<p>The good news: custodian fees are published, or at least available on request, so you can check whether the partner custodian is competitive before you sign. We cover this in more detail in <a href="#can-you-choose-your-own-custodian-when-you-buy-through-a-dealer">can you choose your own custodian?</a> below.</p>`,
  },
  {
    heading: "What makes a gold IRA custodian qualified?",
    body: `<p>Not every company that calls itself a "custodian" can legally hold an IRA. The rules come from the Internal Revenue Code and Treasury regulations, and IRS Publication 590-A explains them for ordinary readers (<a href="https://www.irs.gov/publications/p590a" rel="noopener noreferrer" target="_blank">IRS Pub 590-A</a>).</p>
<h3>Three kinds of qualified custodians</h3>
<table>
<thead><tr><th>Type</th><th>Examples of what this means</th><th>Who oversees it</th><th>Common in gold IRAs?</th></tr></thead>
<tbody>
<tr><td>Bank or federally insured credit union / savings institution</td><td>A chartered bank with trust powers</td><td>Federal and/or state banking regulators</td><td>Rare - most banks do not hold physical metals in IRAs</td></tr>
<tr><td>State-chartered trust company</td><td>A trust company chartered by a state banking department</td><td>The state banking regulator; audits and capital rules vary by state</td><td>Very common - most precious metals custodians are trust companies</td></tr>
<tr><td>IRS-approved non-bank trustee</td><td>A company that has applied to the IRS and been approved to act as a trustee without being a bank</td><td>The IRS, which publishes a list of approved non-bank trustees and custodians</td><td>Common for some self-directed IRA firms</td></tr>
</tbody>
</table>
<h3>The IRS approves non-bank trustees - not dealers</h3>
<p>This is the point the sales pitches blur. The IRS keeps a public list of <strong>approved non-bank trustees and custodians</strong>: <a href="https://www.irs.gov/retirement-plans/approved-nonbank-trustees-and-custodians" rel="noopener noreferrer" target="_blank">IRS approved non-bank trustees and custodians</a>. Being on that list means a company has shown the IRS it meets certain standards (such as net worth, audits and fiduciary experience) to act as an IRA trustee even though it is not a bank.</p>
<p>That approval is about <strong>holding IRAs</strong>. It says nothing about the price of gold you buy, and it never covers a dealer that is not itself a trustee. So:</p>
<ul>
<li>"IRS-approved custodian" can be a true statement if the custodian is on the list (or is a bank or qualifying trust company that does not need to be).</li>
<li>"IRS-approved gold IRA company" or "IRS-approved dealer" is not a real category. The IRS does not approve dealers.</li>
<li>"IRS-approved coins" is shorthand for coins and bars that meet the tax-code rules on fineness. See our <a href="/articles/irs-approved-precious-metals">guide to IRS-eligible precious metals</a> for what that actually means.</li>
</ul>
<h3>How to check a custodian in five minutes</h3>
<ol>
<li><strong>Get the full legal name</strong> of the custodian from your paperwork - for example "Equity Trust Company", not just "Equity".</li>
<li><strong>Search the IRS non-bank trustee list</strong> for that name. If it is there, note the listing.</li>
<li><strong>If it is not on the list</strong>, ask the custodian directly what kind of entity it is: a bank? A trust company? Chartered in which state? A legitimate trust company will tell you which state regulator oversees it.</li>
<li><strong>Look up that regulator</strong> and confirm the charter. State banking departments usually have a search page for licensed trust companies.</li>
<li><strong>Read the custodian's own fee schedule and disclosure</strong>, not a dealer's summary of it.</li>
</ol>
<p>If a company cannot or will not tell you how it is legally qualified to hold an IRA, do not send it money.</p>
<h3>Watch for brand names and affiliates</h3>
<p>Some custodians operate several brands or have separate affiliates for metals. We note one example in the Kingdom Trust section below, where reports say precious metals accounts may now sit with an affiliate. Make sure the name on your account application matches the name you checked.</p>
<h3>What "qualified" does not mean</h3>
<p>Even a fully qualified custodian is not your adviser. It will not tell you whether a coin is overpriced, whether a gold IRA suits you, or whether a dealer is honest. Self-directed custodians are designed to follow your instructions. That is why your own due diligence - on the dealer, the custodian and the depository - matters so much. Our guide on <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a> covers the dealer side.</p>`,
  },
  {
    heading: "How are gold IRA custodian fees structured?",
    body: `<p>Custodians use three basic pricing models. Knowing which one you are looking at tells you how your bill will change as your account grows.</p>
<table>
<thead><tr><th>Model</th><th>How it works</th><th>Example (reported, Oct 2026)</th><th>Best for</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Flat fee</td><td>The same annual fee whatever the account value</td><td>STRATA Trust $150 "Precious Metals Tier"; GoldStar Trust $90; New Direction Trust $220</td><td>Larger accounts</td><td>Can be relatively expensive on small accounts; separate trade fees</td></tr>
<tr><td>Tiered by value</td><td>The fee steps up as the account value crosses set thresholds</td><td>Equity Trust: $225 under $15,000, rising to $500 at $100,000 and $2,250 at $2 million+</td><td>Small accounts</td><td>Costs rise as gold prices rise, even if you buy nothing</td></tr>
<tr><td>Per-asset</td><td>A fee for the first asset plus more for each additional asset</td><td>Madison Trust: $139 a quarter for the first asset plus $30 a quarter per extra asset</td><td>Accounts with one simple holding</td><td>Bills add up if each coin type or bar counts as a separate asset - ask how they count</td></tr>
</tbody>
</table>
<h3>Flat fees</h3>
<p>A flat fee is the easiest to budget. If the annual fee is $150 and storage is $115, you pay $265 a year whether you hold $30,000 or $300,000 of metal. Flat pricing gets cheaper as a percentage of your account as the account grows: $265 is 0.53% of $50,000 but only 0.106% of $250,000.</p>
<p>The catch is that flat-fee custodians often charge separately for each purchase or sale. STRATA, for example, reportedly charges $40 per trade plus a $35 depository handling fee. If you buy once and hold, that barely matters. If you buy every month, it adds up.</p>
<h3>Tiered fees</h3>
<p>Tiered schedules charge more as your account value rises. Equity Trust is the clearest example because its schedule is published in full. A $14,000 account pays $225 a year, a $60,000 account pays $425, and a $250,000 account pays $700, before storage.</p>
<p>Two things to know about tiers:</p>
<ul>
<li><strong>Your fee can rise without you doing anything.</strong> If gold climbs and your account crosses a threshold, you move into the next tier. That is what happened to many accounts in 2025, when gold rose about 65%.</li>
<li><strong>Thresholds can matter more than the rate.</strong> An account worth $99,999 at Equity Trust pays $425; one worth $100,000 pays $500. Check which value the custodian uses (for example, a year-end value) and when.</li>
</ul>
<h3>Per-asset fees</h3>
<p>Some self-directed custodians were built for real estate, private loans and other alternative assets, where "one asset" means one property or one note. When they hold metals, the question is how they count. Is all your gold one asset? Is each coin type separate? Each bar? The answer can double or triple the bill. Madison Trust's reported schedule charges $139 a quarter for the first asset and $30 a quarter for each extra one, so a second asset adds $120 a year.</p>
<h3>Percentage-of-value fees</h3>
<p>A few custodians, and many depositories, charge a percentage of value, often quoted in "basis points" (1 basis point = 0.01%) or "dollars per $1,000". GoldStar's older schedule, for example, was reported as 0.08% of value with a $50 minimum and $250 maximum. Percentage pricing is cheap on small accounts and gets expensive on large ones - we show exactly where it overtakes flat pricing in the storage section.</p>
<h3>The fees that are not "annual"</h3>
<p>Every custodian also has a list of smaller fees. These are easy to miss and can add up:</p>
<table>
<thead><tr><th>Fee</th><th>What triggers it</th><th>Reported examples</th></tr></thead>
<tbody>
<tr><td>Setup / account opening</td><td>Opening the IRA</td><td>$0-$75 (Equity Trust $50 online, $75 paper)</td></tr>
<tr><td>Purchase / trade</td><td>Each buy or sell</td><td>STRATA $40 + $35 handling; Preferred Trust $50 buy / $200 sale; New Direction $130 [reported]</td></tr>
<tr><td>Wire</td><td>Sending money by wire</td><td>$30 (Equity Trust, Preferred Trust)</td></tr>
<tr><td>In-kind distribution or transfer</td><td>Taking metal out, or moving it to another custodian, without selling</td><td>$50 per transaction (Equity Trust); $75 (uDirect); $200 (Preferred Trust)</td></tr>
<tr><td>Termination</td><td>Closing the account</td><td>$225 (Madison Trust); $250 full (Equity Trust); $300 reported (Kingdom Trust)</td></tr>
<tr><td>Paper statements, late fees</td><td>Choosing paper, paying late</td><td>Equity Trust: $60/yr paper statements, $50 late fee</td></tr>
</tbody>
</table>
<p>For the whole cost picture - including dealer markups and buyback spreads - our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> walks through all five layers, and our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> lets you plug in your own numbers.</p>`,
  },
];
