import type { ArticleSection } from "@/lib/config";

// Part 1 of "What Happens to Your Gold If a Gold IRA Company Goes Bankrupt?
// Lessons From Rosland Capital's 2026 Chapter 11". Quick answer, the three
// parties and risk map, who Rosland Capital was, the timeline, why it failed
// and whether its IRA customers were affected.
//
// Sourcing notes (researched Oct 24, 2026 via web search; most pages could not
// be fetched directly from the build sandbox, so figures are as surfaced in
// search results and are attributed, not stated as confirmed fact):
// - Filing: Jul 2, 2026, C.D. Cal. No. 2:26-bk-16650-BB (Judge Sheri Bluebond)
//   per PacerMonitor docket listing and Bondoro case summary.
// - ~617 customers / ~$60M (484 / ~$49M undelivered + 133 / ~$11.8M buyback):
//   Money Metals (competing dealer) Jul 6, 2026 and other reports citing the
//   CRO declaration. Assets $1M-$10M, liabilities $50M-$100M: petition as
//   reported by TheStreet (Jul 2026).
// - Revenue/margin history, 15%-35% commission detail, ~470 complaints:
//   Bondoro case summary citing the first-day declaration.
// - William Devane ads: 2013 PR Newswire release (InterMedia), Variety 2026.
// - Founding 2008 / Marin Aleksov / ex-Lear Capital: Wikipedia, SACC-SF.

export const part1: ArticleSection[] = [
  {
    heading: "What happens to your gold if a gold IRA company goes bankrupt?",
    body: `<div class="qa"><strong>Short answer:</strong> If your metal has already been bought, delivered to an independent depository and recorded in your IRA at your custodian, a bankruptcy of the <em>dealer</em> that sold it to you should not, by itself, take that metal away. The dealer does not own it and does not hold it - your IRA does, through a custodian (the trustee) and a depository (the vault). The real danger is the <strong>money you have paid for metal that has not yet been delivered</strong>, and any buyback money the dealer owes you. In a bankruptcy, those are usually just claims - you become a creditor, often an unsecured one, and you may get back only part of what you paid, months or years later. Rosland Capital's July 2026 Chapter 11 is the clearest recent example: according to reports citing its court filings, about 484 customers were owed roughly $49 million for prepaid orders that were never delivered, and about 133 more were owed roughly $11.8 million for buybacks.</div>
<p>That is the whole answer in one box. The rest of this guide explains why it works that way, what happened at Rosland Capital, what happened to customers in earlier dealer failures, and - most usefully - how to check today that your own metal is really where your statements say it is.</p>
<p>Most people never think about this question until a familiar name appears in a bankruptcy headline. Rosland Capital was one of those familiar names. Its television ads ran for years. When it filed for bankruptcy on July 2, 2026, many readers asked us the same thing: <em>"Is my gold safe?"</em> For most people with a properly set-up gold IRA, the honest answer is <strong>"probably yes, but check - do not assume."</strong></p>
<h3>Key facts at a glance (checked October 24, 2026)</h3>
<ul>
<li><strong>Three different companies are involved in a gold IRA:</strong> the dealer that sells the metal, the custodian that legally holds the account, and the depository that physically stores the metal. A failure at each one has different consequences.</li>
<li><strong>Dealer failure:</strong> metal already in your IRA at a depository is generally not the dealer's property. Money paid for undelivered metal usually becomes a claim in the bankruptcy.</li>
<li><strong>Rosland Capital</strong> filed a liquidating Chapter 11 case on July 2, 2026, in the U.S. Bankruptcy Court for the Central District of California (case no. 2:26-bk-16650), according to the court docket listing on PacerMonitor and news reports.</li>
<li><strong>Customer exposure at Rosland</strong> (as reported, citing its filings): about 617 customers owed about $60 million in total - roughly $49 million for undelivered orders and $11.8 million in unpaid buybacks.</li>
<li><strong>American Hartford Gold</strong> announced on October 6, 2026 that it had acquired the <em>assets</em> of Rosland Capital, and said it would not be assuming Rosland's liabilities.</li>
<li><strong>SIPC and FDIC do not cover physical gold.</strong> Depository insurance covers physical loss, such as theft or damage in the vault - not a dealer that never delivered.</li>
<li><strong>Past dealer failures</strong> - Northwest Territorial Mint (2016), Bullion Direct (2015) and Tulving Company (2014) - left prepaid and "storage" customers with large losses. Customers whose metal was properly held and identified fared far better.</li>
</ul>
<p><strong>A note on who we are.</strong> Gold IRA Planet is an independent publisher. Some of the companies we write about pay us when readers contact them, and that includes companies named in this guide. Our <a href="/how-we-rank">how we rank</a> page explains how that works and how we keep it separate from our facts. This guide is not a ranking. It is about one risk - what happens when a company in the chain fails - and we have tried to treat every company named in it fairly, including <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, which bought Rosland's assets.</p>
<p><strong>This is general information, not legal advice.</strong> If you are a Rosland Capital customer, or a customer of any dealer in bankruptcy, a bankruptcy attorney can tell you what applies to your situation and what deadlines you face.</p>`,
  },
  {
    heading: "Who actually holds the metal in a gold IRA?",
    body: `<p><strong>In a gold IRA, the dealer sells you the metal, the custodian (or trustee) owns it on behalf of your IRA, and an independent depository physically stores it.</strong> The dealer is supposed to drop out of the picture once the metal is delivered. That separation is what protects you if the dealer fails - but only after delivery is complete.</p>
<p>Federal tax law requires this structure. An IRA must have a trustee or custodian that is a bank or an entity the IRS has approved as a "nonbank trustee," and gold and silver bullion in an IRA must be in the physical possession of that trustee rather than in your own hands. The IRS explains the IRA rules in <a href="https://www.irs.gov/publications/p590a">Publication 590-A</a>, and it publishes the requirements a nonbank trustee must meet - including net worth, audit and fiduciary rules - on its <a href="https://www.irs.gov/retirement-plans/application-procedures-for-nonbank-trustees-and-custodians">nonbank trustee application page</a>. That is also why you cannot simply keep IRA gold in a home safe; see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a> and our <a href="/articles/gold-ira-rules">gold IRA rules</a> guide.</p>
<h3>The three parties at a glance</h3>
<table>
<thead><tr><th>Party</th><th>What it does</th><th>Who it is (examples)</th><th>What it legally holds</th></tr></thead>
<tbody>
<tr><td>Dealer ("gold IRA company")</td><td>Sells you the coins or bars, takes your payment, buys the metal from a wholesaler and ships it</td><td>Rosland Capital (now in bankruptcy), American Hartford Gold, Goldco, Augusta Precious Metals</td><td>Your money, until it buys and delivers the metal. Its own inventory, if any.</td></tr>
<tr><td>Custodian or trustee</td><td>Opens and administers the IRA, receives the rollover or transfer money, pays the dealer on your instructions, keeps the official records, reports to the IRS</td><td>Banks and nonbank trustees approved by the IRS, such as Equity Trust or STRATA Trust</td><td>Legal title to the IRA's assets, held for your benefit</td></tr>
<tr><td>Depository</td><td>Receives, counts, stores and insures the metal; reports holdings to the custodian</td><td>Delaware Depository, Brink's, International Depository Services (IDS), Texas Bullion Depository</td><td>Physical possession, as a bailee - it stores the metal but does not own it</td></tr>
</tbody>
</table>
<p>For the full picture of custodians and depositories - fees, names, and how to switch - see our <a href="/articles/gold-ira-custodians">gold IRA custodians</a> guide. For how the whole account works from start to finish, see <a href="/articles/gold-ira">what is a gold IRA?</a></p>
<h3>Risk map: who holds what, and who you are exposed to</h3>
<p>This is the single most useful table in this guide. Find the row that describes where your money or metal is <em>right now</em>, and you will know which company's failure would actually affect you.</p>
<table>
<thead><tr><th>Where your money or metal is</th><th>Who holds it</th><th>If the dealer fails</th><th>If the custodian fails</th><th>If the depository fails</th></tr></thead>
<tbody>
<tr><td>Cash in your IRA, not yet sent to the dealer</td><td>Custodian</td><td>Not affected</td><td>Held for your benefit; moved to a successor custodian under regulator oversight</td><td>Not affected</td></tr>
<tr><td>Cash sent to the dealer, metal not yet bought or delivered</td><td>Dealer</td><td><strong>High risk:</strong> usually a claim in the bankruptcy</td><td>Not directly affected</td><td>Not affected</td></tr>
<tr><td>Metal in transit from wholesaler or dealer to the vault</td><td>Shipper / dealer / wholesaler</td><td>Depends on whether title had passed and on transit insurance - ask</td><td>Not directly affected</td><td>Not yet affected</td></tr>
<tr><td>Metal at the depository, recorded in your IRA (segregated)</td><td>Depository, for the custodian, for you</td><td><strong>Low risk:</strong> not the dealer's property</td><td>Assets should move to a successor custodian</td><td>Insurance covers physical loss; specific bars identified to you</td></tr>
<tr><td>Metal at the depository, recorded in your IRA (commingled)</td><td>Depository, for the custodian, for you</td><td><strong>Low risk:</strong> not the dealer's property</td><td>Assets should move to a successor custodian</td><td>Insurance covers physical loss; you own a quantity of identical items, not specific bars</td></tr>
<tr><td>Non-IRA metal the dealer "stores for you" in its own vault or account</td><td>Dealer</td><td><strong>High risk:</strong> may be treated as dealer property or unsecured claim unless clearly identified to you</td><td>Not applicable</td><td>Not applicable</td></tr>
<tr><td>Buyback sold to dealer, payment not yet received</td><td>Dealer</td><td><strong>High risk:</strong> usually a claim in the bankruptcy</td><td>Not directly affected</td><td>Not affected</td></tr>
</tbody>
</table>
<p>The pattern is simple. <strong>Your risk is highest whenever the dealer holds your money or your metal itself.</strong> It drops sharply once the metal is sitting in an independent vault, listed on your custodian's statement. Every practical step in this guide is about shrinking the time you spend in the high-risk rows.</p>`,
  },
  {
    heading: "What happened to Rosland Capital?",
    body: `<p><strong>Rosland Capital, a Los Angeles precious metals dealer founded in 2008 and known for years of TV ads featuring actor William Devane, filed a liquidating Chapter 11 bankruptcy on July 2, 2026, in the U.S. Bankruptcy Court for the Central District of California.</strong> According to reports citing its court filings, it had stopped operating, held no metal inventory, and owed about 617 customers roughly $60 million for undelivered orders and unpaid buybacks. In October 2026, American Hartford Gold announced it had bought Rosland's assets without taking on its liabilities.</p>
<h3>Who Rosland Capital was</h3>
<p>According to its <a href="https://en.wikipedia.org/wiki/Rosland_Capital">Wikipedia entry</a> and a profile published by the <a href="https://www.sacc-sf.org/the-network/team-and-board-members/marin-aleksov">Swedish-American Chamber of Commerce San Francisco</a>, Rosland Capital was founded in 2008 by Marin Aleksov, who was born in Stockholm and had previously worked at Lear Capital, another precious metals dealer. The company started in Santa Monica, California, and later had its principal office in Los Angeles. Separate companies using the Rosland name operated in other countries, including the UK. Wikipedia also says Rosland became the official distributor of a Formula 1 coin collection in 2016 and produced other licensed coin collections. Rosland sold gold, silver, platinum and palladium coins and bars, both for direct delivery and for precious metals IRAs.</p>
<h3>Its advertising (paid advertising, not endorsements of outcomes)</h3>
<p>Rosland was one of the most heavily advertised names in the industry. A <a href="https://www.prnewswire.com/news-releases/intermedia-entertainment-goes-for-the-gold-with-william-devane-as-spokesman-for--rosland-capital-217359651.html">2013 press release from InterMedia Entertainment</a> announced actor <strong>William Devane</strong> as spokesman for Rosland Capital in TV spots set to run on Fox News, and <a href="https://variety.com/2026/film/news/brink-actor-erik-von-detten-sued-for-elder-abuse-fraud-1236917976">Variety reported in 2026</a> that Rosland advertised on Fox News and Newsmax with spots starring Devane. These were <strong>paid commercials</strong>. A paid spokesperson reads a script; they do not run the company, handle orders or hold customer money. Nothing we found suggests Mr. Devane did anything wrong, and we do not suggest it. The lesson is about advertising in general: <strong>a familiar face on TV tells you nothing about whether a dealer delivers on time or can survive a bad year.</strong></p>
<p>One more data point shows how large that advertising was. According to <a href="https://www.thestreet.com/retail/international-gold-and-silver-dealer-files-chapter-11-bankruptcy">TheStreet's July 2026 report</a> on the bankruptcy petition, the one creditor named on the petition's public list was Fox News Network LLC, shown as owed more than $1.9 million; other unsecured creditors' names were redacted.</p>
<h3>Rosland Capital timeline</h3>
<table>
<thead><tr><th>Date</th><th>Event</th><th>Source (as reported)</th></tr></thead>
<tbody>
<tr><td>2008</td><td>Rosland Capital founded by Marin Aleksov in Santa Monica, California</td><td><a href="https://en.wikipedia.org/wiki/Rosland_Capital">Wikipedia</a></td></tr>
<tr><td>2013</td><td>William Devane announced as spokesman in TV ads (paid advertising)</td><td><a href="https://www.prnewswire.com/news-releases/intermedia-entertainment-goes-for-the-gold-with-william-devane-as-spokesman-for--rosland-capital-217359651.html">PR Newswire</a></td></tr>
<tr><td>2021</td><td>Revenue about $151.2 million; net income about $10.2 million - its last profitable year</td><td><a href="https://app.bondoro.com/preview/cases/Rosland_Capital_LLC/case-summary">Bondoro case summary</a>, citing the first-day declaration</td></tr>
<tr><td>2022-2025</td><td>Cumulative net losses of more than $24 million; revenue falls to about $97.8 million in 2025</td><td>Bondoro case summary</td></tr>
<tr><td>Late June 2026</td><td>About 470 customer complaints, voicemails and demands received; substantially all employees let go (by June 19, 2026)</td><td><a href="https://bondoro.com/rosland-capital-filing-alert/">Bondoro filing alert</a> and case summary</td></tr>
<tr><td>July 2, 2026</td><td>Liquidating Chapter 11 petition filed, C.D. Cal. case 2:26-bk-16650-BB</td><td><a href="https://www.pacermonitor.com/public/case/65506199/Rosland_Capital_LLC">PacerMonitor docket</a>, <a href="https://www.thestreet.com/retail/international-gold-and-silver-dealer-files-chapter-11-bankruptcy">TheStreet</a></td></tr>
<tr><td>July 6, 2026</td><td>Money Metals reports about 617 customers owed about $60 million</td><td><a href="https://www.moneymetals.com/news/2026/07/06/rosland-capital-bankruptcy-is-a-reminder-that-how-you-buy-gold-matters-005042">Money Metals</a> (a competing dealer)</td></tr>
<tr><td>August 2026</td><td>Official Committee of Unsecured Creditors' counsel and financial adviser approved (effective August 9); on August 21 the committee moves to convert the case to Chapter 7</td><td>PacerMonitor docket listing</td></tr>
<tr><td>September 30, 2026</td><td>Hearing on the conversion motion</td><td>Docket listing</td></tr>
<tr><td>October 1, 2026</td><td>Order approving sale of Rosland's "Customer Information Assets" free and clear signed</td><td>Docket listing (buyer not named in the excerpts we saw)</td></tr>
<tr><td>October 5, 2026</td><td>Committee voluntarily withdraws its conversion motion; notice of sale closing filed</td><td>Docket listing</td></tr>
<tr><td>October 6, 2026</td><td>American Hartford Gold announces it acquired Rosland's assets, without assuming its liabilities</td><td><a href="https://www.prnewswire.com/news-releases/american-hartford-gold-acquires-assets-of-rosland-capital-in-major-expansion-302899045.html">PR Newswire</a>, <a href="https://pulse2.com/american-hartford-gold-acquires-rosland-capital-assets/">Pulse 2.0</a></td></tr>
<tr><td>October 14 and 19, 2026</td><td>Committee asks the court to allow an examination (Rule 2004) of a former Rosland sales representative; supplemental papers filed</td><td>Docket listing, news reports</td></tr>
</tbody>
</table>
<p>A caution about these sources. We could not open the court's own files directly while researching, so the docket entries above are as shown in public docket listings and news coverage. The official record is on <a href="https://pacer.uscourts.gov">PACER</a>, the federal courts' document system. If anything here matters to a decision you are making, check the docket or ask a bankruptcy attorney to.</p>`,
  },
  {
    heading: "Why did Rosland Capital fail?",
    body: `<p><strong>According to reports summarizing the sworn declaration of Rosland's Chief Restructuring Officer, Michael Hogan of Armanino Advisory, the company fell behind on filling orders as demand surged, then record gold prices pushed the cost of buying the metal it owed above what customers had already paid.</strong> Shrinking profits and a sales model that paid commissions up front made the gap worse. These are the company's own explanations, as reported - not findings by a court.</p>
<h3>The business model problem, in plain English</h3>
<p>Many dealers take your money first and then buy the metal from a wholesaler. Done quickly - within days - this is normal and low-risk. Done slowly, it becomes a bet. According to the <a href="https://app.bondoro.com/preview/cases/Rosland_Capital_LLC/case-summary">Bondoro case summary</a> of the first-day declaration, a surge in orders outpaced Rosland's ability to fill them, creating a months-long gap between a customer's prepayment and the company's purchase from suppliers. When gold prices climbed during that gap, the metal cost more to buy than the customer had paid for it.</p>
<p>Gold's rise in this period was dramatic. Reports on the case describe gold moving from roughly $1,500-$2,000 an ounce through 2023 to around $4,300 at the end of 2025, with a peak in early 2026 of about $5,600 (sources differ slightly on the exact peak). A dealer that owes customers metal it has not yet bought is exposed to every dollar of that rise. For background on these price moves, see our <a href="/articles/gold-ira">gold IRA guide</a>.</p>
<h3>The numbers, as reported from the filings</h3>
<table>
<thead><tr><th>Measure</th><th>2021</th><th>2025</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Revenue</td><td>about $151.2 million</td><td>about $97.8 million</td><td>Bondoro case summary</td></tr>
<tr><td>Gross margin</td><td>about 18.4%</td><td>about 8.7%</td><td>Bondoro case summary</td></tr>
<tr><td>Net income</td><td>about $10.2 million profit</td><td>Losses: more than $24 million in total from 2022 to 2025</td><td>Bondoro case summary</td></tr>
</tbody>
</table>
<table>
<thead><tr><th>At the July 2, 2026 filing</th><th>Reported figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Assets (petition range)</td><td>$1 million to $10 million</td><td><a href="https://www.thestreet.com/retail/international-gold-and-silver-dealer-files-chapter-11-bankruptcy">TheStreet</a></td></tr>
<tr><td>Liabilities (petition range)</td><td>$50 million to $100 million</td><td>TheStreet</td></tr>
<tr><td>Deferred revenue for unfilled customer orders</td><td>about $49 million (about 484 customers)</td><td><a href="https://www.moneymetals.com/news/2026/07/06/rosland-capital-bankruptcy-is-a-reminder-that-how-you-buy-gold-matters-005042">Money Metals</a> and other reports</td></tr>
<tr><td>Unpaid customer buybacks</td><td>about $11.8 million (about 133 customers)</td><td>Money Metals and other reports</td></tr>
<tr><td>Precious metals inventory</td><td>None, according to the CRO's declaration as reported</td><td>TheStreet, Bondoro</td></tr>
<tr><td>Employees</td><td>Substantially all terminated in June 2026</td><td>Bondoro</td></tr>
</tbody>
</table>
<p>The case summary also reports that Rosland's sales representatives were paid 15% to 35% of gross profit when customer money arrived - even when orders were later cancelled or never filled. If accurate, that means money left the company at the moment it was received, before the metal had been bought. That is exactly the kind of detail you cannot see from the outside, which is why the protections in this guide focus on <em>what you can check</em> rather than on trusting any company's health.</p>
<h3>Investigations disclosed in the filing</h3>
<p>According to reports on the filing, Rosland disclosed that it was the subject of a U.S. Securities and Exchange Commission investigation concerning its precious-metals IRA products, and that the New York Attorney General had been investigating its sales practices to New York customers through 2023. As of the reports we found, neither had resulted in a public enforcement action. <strong>An investigation is not a finding of wrongdoing.</strong> We mention them because they were disclosed in the bankruptcy, not because anything has been proven.</p>
<p>The Better Business Bureau's <a href="https://www.bbb.org/us/ca/los-angeles/profile/precious-metal-dealers/rosland-capital-llc-1216-100073790">profile for Rosland Capital LLC</a>, as surfaced in October 2026, showed the business as not accredited, noted a BBB investigation because of the number of inquiries received, said the company had been unresponsive about a pattern of complaints in which consumers alleged their orders had not been delivered to the depository, and listed about 159 complaints in three years. Those are customer allegations summarized by the BBB.</p>`,
  },
  {
    heading: "Were Rosland Capital's IRA customers affected?",
    body: `<p><strong>It depends on whether the customer's metal had actually been delivered. Customers whose metal was already sitting in their IRA at an independent depository were, on the reported facts, in a far stronger position than the roughly 484 customers who had prepaid for metal that never arrived.</strong> Prepaid IRA orders that were never filled appear to be among the customer claims in the bankruptcy, along with unpaid buybacks. We found no public report that metal already recorded in customers' IRAs at a depository was taken into the bankruptcy estate - but we also found no court ruling on that question, so check your own account.</p>
<h3>Two very different groups of customers</h3>
<table>
<thead><tr><th>Customer situation</th><th>What the reports say</th><th>Likely position</th></tr></thead>
<tbody>
<tr><td>IRA metal already delivered to the depository and listed on the custodian statement</td><td>Rosland sold metal for metal-backed IRAs and its declaration refers to products held at Delaware Depository Services Company (DDSC), according to the <a href="https://www.moneymetals.com/uploads/content/Rosland-Capital-Bankruptcy-Petition.pdf">declaration as posted by Money Metals</a></td><td>Metal is held by the depository for the custodian, for the IRA owner - not Rosland's property. Confirm with the custodian and depository.</td></tr>
<tr><td>Paid (from an IRA or with cash), but the metal was never delivered</td><td>About 484 customers owed about $49 million in deferred revenue for unfilled orders</td><td>A claim against the bankruptcy estate. Reports describe these customers as unsecured creditors with an undetermined recovery.</td></tr>
<tr><td>Sold metal back to Rosland, but not paid</td><td>About 133 customers owed about $11.8 million on a buyback list</td><td>A claim against the bankruptcy estate.</td></tr>
</tbody>
</table>
<p>Why does the first group look safer? Because of the structure explained above. If your IRA's custodian holds title and an independent depository holds the metal, Rosland never owned it, so it is not Rosland's to sell or to give to creditors. Several commentators made this point after the filing - for example, a <a href="https://certifiedgoldexchange.com/rosland-capital-gold-ira/">dealer's guide for Rosland IRA clients</a> said metal held in an IRA at an independent depository should be safe, and recommended removing Rosland as the account's designated representative. Bear in mind that guide was written by a company that wants to serve those customers.</p>
<h3>Where the line blurs</h3>
<p>Reports on a separate lawsuit show why "delivered" must be checked, not assumed. Sheila and Norman Greenberg, an elderly couple, sued a former Rosland sales representative and Rosland in Los Angeles County Superior Court, alleging fraud and financial elder abuse over more than $2 million of gold coin purchases, according to <a href="https://www.fox9.com/news/erik-von-detten-disney-star-sued-elder-abuse-fraud">FOX coverage of the complaint</a>. The complaint says the coins were sent to Delaware Depository for storage. These are allegations that no court has decided, and they concern pricing, not missing metal. But they show how both questions - <em>what did I pay?</em> and <em>where is it?</em> - come up when a dealer fails.</p>
<p>Local news showed the other side. <a href="https://www.tmj4.com/news/local-news/wisconsin-family-fights-to-recover-55-000-after-precious-metals-company-files-for-bankruptcy">TMJ4 in Milwaukee reported</a> on a Wisconsin woman, 79, who paid Rosland $55,000 for gold and silver she believed would be stored and later sold; when she asked to liquidate, the delays lasted months. In that story, the BBB's Los Angeles office warned: when you prepay for gold that has not been delivered, you do not own gold.</p>
<h3>If you were a Rosland IRA customer</h3>
<ol>
<li>Call your IRA <strong>custodian</strong> (not Rosland) and ask for a current statement listing every product and quantity in your account. Third-party reviews report that Rosland's IRAs typically used Equity Trust and Delaware Depository, but confirm your own.</li>
<li>Ask the custodian to confirm, in writing, the depository holding your metal and whether it is segregated or commingled.</li>
<li>Compare that list with every purchase confirmation you received. Anything you paid for that is not on the statement may be a claim in the bankruptcy.</li>
<li>Ask the custodian whether Rosland is still listed as an interested party or representative on your account, and how to remove it.</li>
<li>For any shortfall, see <a href="#what-should-you-do-if-your-gold-dealer-goes-bankrupt">what to do if your dealer goes bankrupt</a> below, and speak with a bankruptcy attorney about filing a proof of claim.</li>
</ol>`,
  },
];
