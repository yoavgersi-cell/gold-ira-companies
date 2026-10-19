import type { ArticleSection } from "@/lib/config";

// Part 1 of "Gold IRA Fees & Costs (2026)".
// Quick answer, the five cost layers, setup fees, annual custodian fees
// (Equity Trust tier table from the primary fee schedule) and the custodian
// comparison table. All figures dated Oct 2026; sources in PILLAR-RESEARCH.md.

export const part1: ArticleSection[] = [
  {
    heading: "How much does a gold IRA really cost?",
    body: `<div class="qa"><strong>Short answer:</strong> Most gold IRAs charge about <strong>$50-$300 to open</strong> and roughly <strong>$175-$300 a year</strong> in custodian and storage fees at small balances - but some custodians use tiered schedules that rise to <strong>$500-$860+ a year</strong> on larger accounts. The biggest cost is usually not a fee at all: it is the <strong>dealer's markup (spread) over the spot price</strong> of the metal, which runs from about <strong>2-6% on common bullion</strong> at low-cost dealers to <strong>15-30% or more on proof and "premium" coins</strong>. In our illustrations, a $100,000 gold IRA held for 10 years and then sold costs roughly <strong>$7,400 (about 7%)</strong> in a low-cost setup and roughly <strong>$22,200 (about 22%)</strong> in a high-cost setup.</div>
<p>That is the honest answer in one paragraph. The rest of this guide shows you exactly where every dollar goes, with real fee schedules, real premium data from 2026 and worked examples you can check with a calculator.</p>
<p>Most articles about gold IRA fees stop at the yearly custodian bill. That is like judging the cost of a house by the property tax and ignoring the price you paid for it. A gold IRA has <strong>five layers of cost</strong>, and the two that matter most - the markup when you buy and the discount when you sell - almost never appear on a fee schedule.</p>
<p>Here is what you will find below:</p>
<ul>
<li>The full, current <strong>Equity Trust fee schedule</strong>, taken from the custodian's own PDF, and why the "$75-$225 a year" figure you see on many review sites is wrong for most accounts.</li>
<li>A <strong>custodian comparison table</strong> covering Equity Trust, STRATA, Kingdom Trust, GoldStar, Preferred Trust, Madison Trust, Advanta IRA, uDirect IRA and New Direction.</li>
<li><strong>Storage costs</strong> at the main depositories - Delaware Depository, Brink's, IDS and the Texas Bullion Depository - and how flat and percentage pricing compare.</li>
<li><strong>Retail premiums over spot</strong> for Gold Eagles, Buffalos, Maple Leafs, bars and silver, dated to the week they were recorded.</li>
<li>What <strong>regulators found</strong> when they looked at markups at Red Rock Secured, Safeguard Metals, Lear Capital and Goldline.</li>
<li><strong>Total-cost tables</strong> for $25,000, $50,000, $100,000 and $250,000 accounts over 1, 5 and 10 years, plus the break-even gold price rise for each.</li>
<li>A side-by-side cost comparison with <strong>gold ETFs</strong> such as GLDM, IAUM, IAU and GLD.</li>
<li>A <strong>question script</strong> for getting a written quote, and a red-flag checklist.</li>
</ul>
<p>If you would rather plug in your own numbers, our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> does the same math for any amount, markup and holding period. If you are still deciding whether a gold IRA makes sense at all, start with <a href="/articles/what-is-a-gold-ira">what a gold IRA is</a> or our <a href="/articles/gold-ira">complete gold IRA guide</a>, then come back here.</p>
<h3>A note on our numbers</h3>
<p>Every company and custodian figure in this guide is <strong>reported and approximate as of October 2026</strong>. Where we had the primary source - such as Equity Trust's published fee schedule - we say so. Where a figure comes from a third-party review site, we say that too, because those sites often disagree with each other and with the companies themselves. Every worked example is labeled as an <strong>illustration</strong>: it shows how the math works, not what you will pay or earn. Gold prices move, fees change and promotions come and go, so always get current terms in writing before you sign anything.</p>`,
  },
  {
    heading: "The 5 layers of gold IRA costs",
    body: `<p>Think of a gold IRA as a small chain of businesses, each charging for its piece of the job. A <strong>dealer</strong> sells you the metal. A <strong>custodian</strong> (a bank or a non-bank trustee the IRS allows to hold IRAs) keeps the records and files the tax reports. A <strong>depository</strong> stores the metal in a vault. When you leave, the dealer (or another buyer) takes the metal back and the custodian closes or transfers the account.</p>
<p>Every link in that chain has a price. Here are the five layers in the order you meet them.</p>
<table>
<thead><tr><th>Layer</th><th>Who charges it</th><th>Typical reported range (Oct 2026)</th><th>How often</th></tr></thead>
<tbody>
<tr><td>1. Setup / application fee</td><td>Custodian (sometimes the dealer adds its own)</td><td>$0-$75 at custodians; some dealers report $230-$275</td><td>Once</td></tr>
<tr><td>2. Custodian administration fee</td><td>Custodian</td><td>About $90-$300 flat, or $225-$2,250 tiered by account value</td><td>Every year</td></tr>
<tr><td>3. Storage and insurance</td><td>Depository, billed through the custodian</td><td>About $100-$240 flat, or 0.08%-0.18% of value</td><td>Every year</td></tr>
<tr><td>4. Dealer spread (premium over spot)</td><td>Dealer</td><td>About 2-6% on common bullion online; 7-10% disclosed by some phone dealers; 20-130% in proof-coin and enforcement cases</td><td>Every purchase</td></tr>
<tr><td>5. Exit, buyback and transaction fees</td><td>Dealer and custodian</td><td>Buyback 1-2% under spot on common coins; $10-$300 in liquidation, wire, termination and distribution fees</td><td>Every sale, transfer or distribution</td></tr>
</tbody>
</table>
<h3>Why the layers matter differently</h3>
<p>Layers 1, 2 and 3 are <strong>visible</strong>. They appear on a fee schedule and on your yearly statement. Because they are fixed dollar amounts, they hit small accounts hardest. A $260 yearly bill is about 1% of a $25,000 account, but only about 0.1% of a $250,000 account.</p>
<p>Layers 4 and 5 are <strong>mostly invisible</strong>. The dealer's markup is built into the price per coin. You never see a line on a statement that says "markup: $15,000". You only see that you paid $100,000 and the custodian's year-end statement values your metal at something less. Because the markup is a percentage, it does not shrink as your account grows - a 15% markup costs $3,750 on $25,000 and $37,500 on $250,000.</p>
<p>That is why our rule of thumb is simple: <strong>for any account above about $25,000, the spread on the metal matters more than every annual fee combined</strong>, at least over the first several years. We prove this with numbers in the <a href="#worked-examples-the-true-1-5-and-10-year-cost">worked examples</a> below.</p>
<h3>A quick illustration of the five layers</h3>
<p>Here is a simple illustration for a $50,000 rollover into a gold IRA, using mid-range numbers. It is not a quote from any company.</p>
<table>
<thead><tr><th>Cost layer (illustration)</th><th>Assumption</th><th>Cost</th></tr></thead>
<tbody>
<tr><td>Setup fee</td><td>One-time custodian fee</td><td>$50</td></tr>
<tr><td>Custodian admin, year 1</td><td>Flat fee</td><td>$150</td></tr>
<tr><td>Storage, year 1</td><td>Commingled, flat</td><td>$110</td></tr>
<tr><td>Dealer spread</td><td>5% of $50,000</td><td>$2,500</td></tr>
<tr><td>Exit (if sold after year 1)</td><td>1.5% buyback discount on $47,500 of metal, plus $280 liquidation and termination fees</td><td>$712.50 + $280 = $992.50</td></tr>
<tr><td><strong>Total, year 1</strong></td><td>$50 + $150 + $110 + $2,500 + $992.50</td><td><strong>$3,802.50 (about 7.6%)</strong></td></tr>
</tbody>
</table>
<p>Notice where the money went: $310 in visible fees and nearly $3,500 in the spread and exit costs. That pattern repeats in almost every scenario we ran. You can change the markup and the holding period in the <a href="/gold-ira-fee-calculator">fee calculator</a> to see how quickly the picture changes.</p>`,
  },
  {
    heading: "Setup and application fees",
    body: `<p>The setup fee is the first charge you see, and usually the smallest. It pays the custodian to open the account, check your identity, and process the paperwork that brings money in from your old 401(k), IRA or TSP.</p>
<h3>What custodians charge to open an account</h3>
<p>Self-directed IRA custodians that hold precious metals generally charge between nothing and $75 to open an account. Here is what we found as of October 2026:</p>
<table>
<thead><tr><th>Custodian</th><th>Reported setup fee</th><th>Source quality</th></tr></thead>
<tbody>
<tr><td>Equity Trust</td><td>$50 online / $75 on paper</td><td>Primary - official fee schedule (Rev. 11/06/2025)</td></tr>
<tr><td>STRATA Trust</td><td>$50, waived if you apply online</td><td>Third-party review site</td></tr>
<tr><td>Kingdom Trust</td><td>$0-$50</td><td>Third-party, high uncertainty</td></tr>
<tr><td>GoldStar Trust</td><td>$50</td><td>Third-party review site</td></tr>
<tr><td>Preferred Trust</td><td>$50</td><td>Third-party review site</td></tr>
<tr><td>Madison Trust</td><td>$50</td><td>Official fees FAQ</td></tr>
<tr><td>Advanta IRA</td><td>$50</td><td>Official fee schedule PDF</td></tr>
<tr><td>uDirect IRA</td><td>$50</td><td>Official fees page</td></tr>
<tr><td>New Direction Trust</td><td>$30</td><td>Official fees page</td></tr>
</tbody>
</table>
<h3>Why some quotes say $230-$275 instead</h3>
<p>If a gold IRA company quotes you an "application" or "setup" fee of $230 or $275, that number usually bundles more than the custodian's account-opening charge. Third-party reviews have reported a setup cost of about $230 at American Hartford Gold and a $275 application fee at both Goldco and Augusta in one source - while other sources report $50 for the same companies. These conflicting reports are a good reminder that fee quotes depend on who is asking, when, and which custodian is used.</p>
<p>A bundled figure may include the custodian's setup fee, a first-year administration fee, a wire or transfer fee, and sometimes the first year of storage. There is nothing wrong with a bundle, as long as you know what is in it. Ask the company to break any one-time fee into its parts, in writing.</p>
<h3>Transfer-out fees at your old account</h3>
<p>Do not forget the account you are leaving. Many 401(k) plans and brokerage IRAs charge an exit or "transfer out" fee when you move money to a new custodian. These are typically modest, but they belong in your total. Your old provider's fee schedule will list it, or you can call and ask.</p>
<p>How the money moves matters, too - not for fees so much as for taxes. A <strong>direct trustee-to-trustee transfer</strong> has no limit on how often it can be done and is not taxed. An <strong>indirect 60-day rollover</strong> paid to you from an employer plan comes with <strong>20% mandatory withholding</strong>, and IRA-to-IRA indirect rollovers are limited to <strong>one per 12 months</strong> across all your IRAs. A mistake there can cost far more than any fee in this guide. Our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a> and our step-by-step <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover</a> walkthrough cover the rules in detail.</p>
<h3>Bottom line on setup fees</h3>
<p>A setup fee between $0 and $75 is normal at the custodian level. A higher "application" fee is not automatically a problem, but it should be itemized. Either way, setup is a one-time cost and rarely the deciding factor. The yearly fees and, above all, the metal spread matter far more.</p>`,
  },
  {
    heading: "Annual custodian fees: flat vs tiered",
    body: `<p>The custodian administration fee is the yearly charge for keeping your account: recordkeeping, statements, tax forms (such as Form 5498 and Form 1099-R), and processing buys, sells and distributions. Every gold IRA has one. The question is <strong>how it is calculated</strong>, and that is where many investors get surprised.</p>
<p>There are two basic models:</p>
<ul>
<li><strong>Flat fee:</strong> the same dollar amount every year, whatever your account is worth. STRATA Trust's "Precious Metals Tier" ($150 a year from September 1, 2026, reportedly up from $125), GoldStar Trust (reported $90 flat) and New Direction ($220 flat) are examples.</li>
<li><strong>Tiered fee:</strong> the fee steps up as your account value crosses set thresholds. Equity Trust - one of the custodians most often used by large gold IRA dealers - uses a tiered schedule.</li>
</ul>
<h3>The Equity Trust fee schedule, in full</h3>
<p>Equity Trust publishes its retail fee schedule as a PDF (form FS-0001-03, revised November 6, 2025). You can read it yourself on the <a href="https://s3.us-east-2.amazonaws.com/forms.equitytrustcompany.info/Retail-Fee-Schedule.pdf" target="_blank" rel="noopener noreferrer">Equity Trust retail fee schedule</a>. The annual account fee is set by account value, and the schedule says it is <strong>not prorated</strong> - you pay the full year's fee for the tier you fall into.</p>
<table>
<thead><tr><th>Account value</th><th>Annual account fee</th><th>Fee as % of the bottom of the tier</th></tr></thead>
<tbody>
<tr><td>$1-$14,999</td><td>$225</td><td>2.25% at $10,000 (example)</td></tr>
<tr><td>$15,000-$24,999</td><td>$320</td><td>2.13%</td></tr>
<tr><td>$25,000-$49,999</td><td>$350</td><td>1.40%</td></tr>
<tr><td>$50,000-$99,999</td><td>$425</td><td>0.85%</td></tr>
<tr><td>$100,000-$199,999</td><td>$500</td><td>0.50%</td></tr>
<tr><td>$200,000-$299,999</td><td>$700</td><td>0.35%</td></tr>
<tr><td>$300,000-$399,999</td><td>$750</td><td>0.25%</td></tr>
<tr><td>$400,000-$499,999</td><td>$1,075</td><td>0.27%</td></tr>
<tr><td>$500,000-$599,999</td><td>$1,750</td><td>0.35%</td></tr>
<tr><td>$600,000-$699,999</td><td>$1,850</td><td>0.31%</td></tr>
<tr><td>$700,000-$799,999</td><td>$1,950</td><td>0.28%</td></tr>
<tr><td>$800,000-$899,999</td><td>$2,000</td><td>0.25%</td></tr>
<tr><td>$900,000-$999,999</td><td>$2,050</td><td>0.23%</td></tr>
<tr><td>$1,000,000-$1,999,999</td><td>$2,150</td><td>0.22%</td></tr>
<tr><td>$2,000,000 and up</td><td>$2,250</td><td>0.11% at $2M</td></tr>
</tbody>
</table>
<p>Storage is billed separately on the same schedule: <strong>$110 a year for non-segregated</strong> (commingled) storage or <strong>$160 a year for segregated</strong> storage, billed in January.</p>
<h3>Why "$75-$225 a year" is wrong above $15,000</h3>
<p>Many review sites say Equity Trust charges "$75 to $225 a year." According to Equity Trust's own schedule, that is only true for accounts under $15,000 (and the $75 is the paper setup fee, not an annual charge). Once your account is worth $15,000 or more, the annual fee is at least $320. Here is what that means in practice, combining the admin fee with storage:</p>
<table>
<thead><tr><th>Account value</th><th>Admin fee</th><th>+ Non-segregated storage</th><th>= Yearly total</th><th>+ Segregated instead</th><th>= Yearly total</th></tr></thead>
<tbody>
<tr><td>$10,000</td><td>$225</td><td>$110</td><td>$335</td><td>$160</td><td>$385</td></tr>
<tr><td>$25,000</td><td>$350</td><td>$110</td><td>$460</td><td>$160</td><td>$510</td></tr>
<tr><td>$50,000</td><td>$425</td><td>$110</td><td>$535</td><td>$160</td><td>$585</td></tr>
<tr><td>$100,000</td><td>$500</td><td>$110</td><td>$610</td><td>$160</td><td>$660</td></tr>
<tr><td>$250,000</td><td>$700</td><td>$110</td><td>$810</td><td>$160</td><td>$860</td></tr>
<tr><td>$500,000</td><td>$1,750</td><td>$110</td><td>$1,860</td><td>$160</td><td>$1,910</td></tr>
</tbody>
</table>
<p>So a $100,000 gold IRA at retail Equity Trust pricing costs about <strong>$610-$660 a year</strong>, not $225. Over 10 years that is $6,100-$6,600 before any dealer markup.</p>
<h3>A caution about dealer-quoted fees</h3>
<p>Several large gold IRA companies that reportedly use Equity Trust quote much lower yearly fees - for example, a reported $100-$125 custodian fee at Goldco. We cannot see the contracts between dealers and custodians, so we do not know whether those clients get negotiated pricing, whether the reports are out of date, or whether the review sites simply repeated old numbers. The safe move is to ask for the <strong>custodian's own fee schedule</strong> - not the dealer's summary - and check which tier your account will fall into.</p>
<h3>The tier trap: rising gold prices raise your fee</h3>
<p>Tiered fees follow your account value, and your account value follows the gold price. Gold rose about 65% in 2025 and hit a record of about $5,595 an ounce on January 29, 2026, before falling to around $4,170 by mid-October 2026. A $90,000 account in early 2025 could easily have crossed the $100,000 line and moved from the $425 tier to the $500 tier - a fee increase you did nothing to cause. Flat fees do not do that.</p>
<h3>Flat or tiered: which is cheaper?</h3>
<p>For <strong>small accounts</strong> (under about $15,000), the difference is modest - a $150 flat fee versus a $225 tier. For <strong>mid-size and large accounts</strong>, flat fees usually win by a wide margin. At $250,000, a $150 flat fee plus $115 storage is $265 a year; the Equity Trust retail schedule with segregated storage is $860. Over 10 years that gap is about $5,950. That said, the custodian is often chosen by the dealer, and some dealers work with only one or two. If you have a strong preference, ask before you open the account.</p>`,
  },
  {
    heading: "Custodian fees compared (2026)",
    body: `<p>Below is our side-by-side view of nine custodians that hold precious metals in IRAs. Read it with care: only some figures come from the custodian's own published schedule, and several come from third-party review sites that may be out of date. We mark the source for each row. Custodian websites were often unreachable while we researched this guide, so <strong>confirm every number directly with the custodian before you open an account</strong>.</p>
<table>
<thead><tr><th>Custodian</th><th>Setup</th><th>Annual admin</th><th>Per-trade / transaction</th><th>Storage &amp; other notes</th><th>Source / certainty</th></tr></thead>
<tbody>
<tr><td>Equity Trust</td><td>$50 online / $75 paper</td><td>$225-$2,250, tiered by value (not prorated)</td><td>Metals liquidation $10 per asset (max $30)</td><td>Storage $110 non-seg / $160 seg; wire $30; termination $250</td><td>Official schedule - high</td></tr>
<tr><td>STRATA Trust</td><td>$50 (waived online)</td><td>$150 flat "Precious Metals Tier" from Sep 1, 2026 (was $125)</td><td>$40 per trade + $35 depository handling (one site: $75)</td><td>Storage $115 commingled / $175 segregated</td><td>Third-party - medium</td></tr>
<tr><td>Kingdom Trust</td><td>$0-$50</td><td>Reportedly no annual account fee (older figures: $75 / $195 / $225)</td><td>$40</td><td>Storage $150 non-seg / $240 seg; termination $300 (an FAQ says $100 per asset). Metals arm reportedly operates as "Digital Trust"</td><td>Third-party - low</td></tr>
<tr><td>GoldStar Trust</td><td>$50</td><td>$90 flat (reported Dec 2025; older: 0.08%, $50 min / $250 max)</td><td>Reportedly none</td><td>Storage $125 commingled; segregated $225 minimum + about 0.18% above $125,000</td><td>Third-party - medium</td></tr>
<tr><td>Preferred Trust</td><td>$50 (third-party)</td><td>$300 for a metals-only IRA</td><td>$50 per purchase / $200 per sale</td><td>In-kind distribution $200; wire $30</td><td>Official schedule (annual) - high</td></tr>
<tr><td>Madison Trust</td><td>$50</td><td>$139 per quarter for the first asset (about $556 a year) + $30 per quarter per extra asset (one source: $440 a year)</td><td>n/a</td><td>Termination $225; $500 minimum cash</td><td>Official FAQ - medium</td></tr>
<tr><td>Advanta IRA</td><td>$50</td><td>$250 recordkeeping (Rev 05/24; one site: $295)</td><td>n/a</td><td>Storage billed separately</td><td>Official PDF - medium</td></tr>
<tr><td>uDirect IRA</td><td>$50</td><td>$275</td><td>$50 metals liquidation</td><td>In-kind distribution $75; $500 minimum balance</td><td>Official page - medium</td></tr>
<tr><td>New Direction Trust (NDTCO)</td><td>$30</td><td>$220 flat</td><td>$130 per metals trade (third-party; a 2021 PDF shows $50 / $160)</td><td>Storage billed by the depository</td><td>Official (annual) - medium</td></tr>
</tbody>
</table>
<h3>What the table tells you</h3>
<ul>
<li><strong>The cheapest-looking custodian is not always the cheapest.</strong> A low annual fee can be offset by per-trade charges. Preferred Trust's reported $200 sale fee, or New Direction's reported $130 per trade, matter if you plan to buy and sell more than once.</li>
<li><strong>Per-asset pricing adds up.</strong> Madison Trust's reported quarterly fee per asset, and Equity Trust's per-asset liquidation and distribution fees, mean that holding five different coin types can cost more than holding one.</li>
<li><strong>Storage is sometimes bundled and sometimes not.</strong> Advanta and New Direction bill storage separately (through the depository), so their admin fee is not comparable to an "all-in" quote.</li>
<li><strong>Uncertainty is high.</strong> Kingdom Trust's figures in particular varied widely between sources, and we could not confirm them on an official page.</li>
</ul>
<h3>A realistic all-in yearly range</h3>
<p>Put admin and storage together and most small and mid-size gold IRAs land at <strong>about $175-$300 a year</strong> at flat-fee custodians. Using reported figures: GoldStar's $90 plus $125 commingled storage is about $215; STRATA's $150 plus $115 is about $265. A tiered custodian, a segregated vault, or a large balance can push the total to <strong>$500-$900 a year or more</strong>. Our <a href="/gold-ira-fee-calculator">fee calculator</a> uses $250 a year as its default when a company does not publish its fees, which sits in the middle of that flat-fee range.</p>
<p>One more point: you do not always get to pick. Many gold IRA companies work with one or two preferred custodians. If a specific custodian matters to you - for example, because you want flat pricing on a large account - raise it on your first call. How a company handles that question tells you something about how it will handle the rest of your relationship. Our <a href="/how-we-rank">ranking methodology</a> explains how we weigh fee transparency when we compare companies.</p>`,
  },
];
