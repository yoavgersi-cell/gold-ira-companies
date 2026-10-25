import type { ArticleSection } from "@/lib/config";

// Part 2 of "What Happens to Your Gold If a Gold IRA Company Goes Bankrupt?".
// American Hartford Gold's Rosland asset deal, case status as of Oct 2026,
// precedent dealer failures and how bankruptcy law treats metal vs prepaid
// orders.
//
// Sourcing notes (Oct 24, 2026):
// - AHG deal: PR Newswire release dated Oct 6, 2026 (Sanford Mann, CEO,
//   quoted; "will not be assuming liability for any obligations of Rosland
//   Capital"); Pulse 2.0 report; PitchBook lists deal date Oct 5, 2026.
//   We could NOT confirm from public sources that AHG was the winning bidder
//   in the court-approved "Customer Information Assets" sale - the docket
//   excerpts we saw do not name the buyer. Stated as such.
// - Precedents: NWTM (justice.gov WDWA release on Hansen/Erdmann sentencing,
//   Federal Way Mirror, Advisor Perspectives); Bullion Direct (justice.gov
//   WDTX sentencing release, CoinWeek); Tulving (CoinWeek, about.ag);
//   Lear Capital (Vermont DFR investor alert, Jun 29, 2023); American Pension
//   Services (SEC lit. release LR-22982, 2014).
// - 507(a)(7) $3,800 consumer-deposit priority (cases filed on/after Apr 1,
//   2025): Cooley bankruptcy blog, Federal Register 2025-02207.

export const part2: ArticleSection[] = [
  {
    heading: "Did American Hartford Gold take over Rosland Capital's customers?",
    body: `<p><strong>On October 6, 2026, American Hartford Gold announced that it had acquired the assets of Rosland Capital and said it "will not be assuming liability for any obligations of Rosland Capital."</strong> In plain English, it bought what Rosland had left to sell, not its debts. Rosland customers who are owed metal or buyback money still have to look to the bankruptcy case for any recovery, unless American Hartford Gold agrees in writing to do something more for them.</p>
<h3>What the announcement said</h3>
<p>According to the <a href="https://www.prnewswire.com/news-releases/american-hartford-gold-acquires-assets-of-rosland-capital-in-major-expansion-302899045.html">press release on PR Newswire</a>, datelined Los Angeles, October 6, 2026, and a report by <a href="https://pulse2.com/american-hartford-gold-acquires-rosland-capital-assets/">Pulse 2.0</a>:</p>
<ul>
<li>American Hartford Gold acquired the assets of Rosland Capital and described the deal as a major expansion of its national reach.</li>
<li>It said it will not be assuming liability for any obligations of Rosland Capital.</li>
<li>It said Rosland clients would gain access to its range of physical gold and silver products, gold IRA education and support from its precious metals specialists, and noted that it offers a buyback commitment without back-end fees.</li>
<li>It said it had set up a dedicated service operation to support Rosland clients during the transition.</li>
<li>Sanford Mann, American Hartford Gold's CEO, was quoted describing the company as the nation's largest gold and silver retailer. That is the company's own description; we have not verified it.</li>
<li>The price was not disclosed. PitchBook lists the deal date as October 5, 2026.</li>
</ul>
<h3>How it fits with the bankruptcy case</h3>
<p>Rosland's filing described its main remaining asset as its "Customer Information Assets" - its past, active and potential customer lists, customer data and marketing records - and planned a court-supervised auction, according to the <a href="https://bondoro.com/rosland-capital-filing-alert/">Bondoro filing alert</a>. The docket listing on <a href="https://www.pacermonitor.com/public/case/65506199/Rosland_Capital_LLC">PacerMonitor</a> shows a notice of auction results, an order approving the sale of those assets "free and clear" signed October 1, 2026, and a notice of sale closing on October 5, 2026. The excerpts we could see did not name the buyer, so <strong>we cannot confirm from the court record that American Hartford Gold was the buyer in that sale</strong>, although the dates are close. A sale "free and clear" generally means the buyer takes the assets without the seller's debts attached; the money paid goes into the estate for creditors.</p>
<h3>What it means if you were a Rosland customer</h3>
<table>
<thead><tr><th>Your situation</th><th>What the asset deal does</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>Metal already in your IRA at a depository</td><td>Nothing changes about who owns it - your IRA does, through your custodian</td><td>Confirm holdings with your custodian. You are free to choose any dealer for future purchases or sales.</td></tr>
<tr><td>Prepaid order never delivered</td><td>By its own statement, American Hartford Gold did not assume Rosland's obligations</td><td>Your claim is in the bankruptcy case. Speak to a bankruptcy attorney and watch for a claims deadline.</td></tr>
<tr><td>Unpaid buyback</td><td>Same - not assumed, per the announcement</td><td>Same as above.</td></tr>
<tr><td>Contacted by American Hartford Gold or any other dealer</td><td>A new relationship with a new dealer, on that dealer's terms</td><td>Ask in writing what, if anything, it will do about your Rosland losses. Do not send new money to "recover" old losses without independent advice.</td></tr>
</tbody>
</table>
<p>To be fair to American Hartford Gold: buying a failed company's assets without its liabilities is a common, lawful way such sales happen, and the announcement was clear that liabilities were excluded. Our <a href="/reviews/american-hartford-gold">American Hartford Gold review</a> and our <a href="/articles/gold-ira-reviews">gold IRA reviews</a> guide cover its ratings and complaint record. We also want to be transparent that American Hartford Gold is one of the companies featured on this site, and that some featured companies pay us; see <a href="/how-we-rank">how we rank</a>.</p>`,
  },
  {
    heading: "Where does the Rosland Capital bankruptcy stand in October 2026?",
    body: `<p><strong>As of late October 2026, the Rosland case was still open and still early for customers: the customer-data assets had been sold under a court order, an official creditors' committee was investigating, and we found no public report of a claims deadline or of how much customers will recover.</strong> Anyone who tells you a specific recovery percentage is guessing.</p>
<table>
<thead><tr><th>Issue</th><th>Status (as reported)</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Court and judge</td><td>U.S. Bankruptcy Court, Central District of California; Judge Sheri Bluebond; case 2:26-bk-16650-BB</td><td><a href="https://www.pacermonitor.com/public/case/65506199/Rosland_Capital_LLC">PacerMonitor</a></td></tr>
<tr><td>Type of case</td><td>Liquidating Chapter 11 - a court-supervised wind-down, not a plan to keep operating</td><td><a href="https://www.thestreet.com/retail/international-gold-and-silver-dealer-files-chapter-11-bankruptcy">TheStreet</a>, Bondoro</td></tr>
<tr><td>Why Chapter 11, not Chapter 7</td><td>The CRO weighed an out-of-court wind-down, an assignment for the benefit of creditors and Chapter 7, and concluded a liquidating Chapter 11 offered the best chance to maximize value for creditors</td><td>TheStreet, citing the filing</td></tr>
<tr><td>Creditors' committee</td><td>Official Committee of Unsecured Creditors formed; its counsel and financial adviser approved effective August 9, 2026; one reported member is Norman Greenberg</td><td>PacerMonitor docket listing, news reports</td></tr>
<tr><td>Motion to convert to Chapter 7</td><td>Filed by the committee August 21, 2026; heard September 30; voluntarily withdrawn October 5, 2026</td><td>PacerMonitor docket listing</td></tr>
<tr><td>Sale of customer information assets</td><td>Order approving sale free and clear signed October 1, 2026; closing noticed October 5</td><td>PacerMonitor docket listing</td></tr>
<tr><td>Investigation of the collapse</td><td>On October 14, 2026, the committee asked the court to authorize a Rule 2004 examination of a former Rosland sales representative; supplemental papers filed October 19. A Rule 2004 exam is an investigative tool, not a finding</td><td>Docket listing and news reports</td></tr>
<tr><td>Liquidating trust</td><td>Reported that the debtor and committee have worked toward a liquidating trust with power to investigate the company's financial history</td><td>News coverage, October 2026</td></tr>
<tr><td>Claims bar date (deadline to file claims)</td><td>None reported in the sources we found</td><td>Check the docket or the court's claims notices</td></tr>
<tr><td>Recovery for customers</td><td>Not determined</td><td>-</td></tr>
</tbody>
</table>
<p>If you are a creditor, the most reliable way to follow the case is the docket on <a href="https://pacer.uscourts.gov">PACER</a> (small per-page fees apply) and any notices mailed to you. The federal courts' <a href="https://www.uscourts.gov/services-forms/bankruptcy">bankruptcy basics pages</a> explain the process. We will update this guide as the case develops.</p>`,
  },
  {
    heading: "What happened to customers in earlier gold dealer bankruptcies?",
    body: `<p><strong>In every major U.S. precious metals dealer failure we reviewed, customers who had prepaid for undelivered metal - or who let the dealer "store" metal in its own vault - lost most of their money, while customers whose metal was properly held, identified and outside the dealer's control fared far better.</strong> Several of these failures later led to criminal convictions. Rosland is not accused of the same conduct; the cases are useful because they show what bankruptcy can and cannot recover.</p>
<h3>Precedents at a glance</h3>
<table>
<thead><tr><th>Company and year</th><th>What happened</th><th>What customers lost or recovered</th><th>Lesson</th></tr></thead>
<tbody>
<tr><td><strong>Tulving Company</strong> (California), 2014</td><td>Stopped operating about March 3, 2014; filed Chapter 11 on March 10, 2014, later converted to Chapter 7. Court papers say the Secret Service executed a search warrant on its offices.</td><td>CoinWeek's author estimated more than 1,000 customers were owed about $40 million; the filing showed less than $50,000 in assets, according to <a href="https://about.ag/TulvingFAQ.htm">about.ag</a>, which tracked about 640 complaints in the year before.</td><td>A long run of delivery complaints came first. Prepaid customers had almost nothing to recover from.</td></tr>
<tr><td><strong>Bullion Direct</strong> (Austin, Texas), 2015</td><td>Suspended operations June 2015; filed Chapter 11 in July 2015 (W.D. Tex. case 15-10940). Auditors found only a handful of coins in the office safe and little more in a rented vault, according to <a href="https://coinweek.com/bullion-report/bullion-direct-another-bullion-biz-bankrupt-vault-virtually-empty/">CoinWeek</a>.</td><td>The owner, Charles McAllister, was convicted and sentenced in February 2020 to 10 years in prison, with about $16.19 million in restitution ordered to more than 5,800 victims, according to the <a href="https://justice.gov/usao-wdtx/pr/judge-austin-sentences-owner-bullion-direct-inc-federal-prison-investment-and-wire-0">U.S. Attorney's Office</a>.</td><td>Metal customers chose to "store" with the dealer was, by the company's own account, often never bought.</td></tr>
<tr><td><strong>Northwest Territorial Mint</strong> (Washington), 2016</td><td>Filed Chapter 11 on April 1, 2016; a trustee, Mark Calvert, was appointed April 11, 2016. He estimated about $56 million in liabilities against $6.4 million in assets, and said the bullion operations had "attributes of a Ponzi scheme," according to <a href="https://www.advisorperspectives.com/commentaries/2016/05/26/northwest-territorial-mint-scandal-investors-had-fair-warning-on-this-blowup-as-well">Advisor Perspectives</a>.</td><td>The trustee estimated unsecured creditors would recover less than 10%. About 3,000 customers were affected. Owner Ross Hansen was sentenced in 2022 to 11 years and vault manager Diane Erdmann to 5 years, according to the <a href="https://www.justice.gov/usao-wdwa/pr/pair-who-went-run-after-being-found-guilty-fraud-now-defunct-precious-metals-firm">U.S. Attorney's Office</a>; more than $30 million in restitution was reported.</td><td>The Washington Attorney General had settled with the company over late deliveries in 2008 and received hundreds of complaints before the bankruptcy, according to the <a href="https://www.federalwaymirror.com/2016/05/09/attorney-generals-office-had-hundreds-of-complaints-before-northwest-territorial-mints-bankruptcy/">Federal Way Mirror</a>. Court filings show the trustee sought permission to return identified stored metal to specific storage customers - identification mattered.</td></tr>
<tr><td><strong>Lear Capital</strong> (Los Angeles), 2022-2023</td><td>Filed a Subchapter V Chapter 11 case in Delaware in 2022 (case 22-10165) after investigations into its pricing; the plan was confirmed June 12, 2023, according to the <a href="https://dfr.vermont.gov/sites/finreg/files/doc_library/dfr-investor-alert-06.29.23-lear.pdf">Vermont Department of Financial Regulation</a>.</td><td>Under the plan, Lear's principal agreed to contribute $5.5 million. Investors who filed proofs of claim were to receive a one-time payment equal to the difference between the spread actually charged and a hypothetical 12% fee, with the balance going to other customers from 2016 to 2022.</td><td>Here the issue was markups, not missing metal. Filing a proof of claim was what got customers paid.</td></tr>
<tr><td><strong>American Pension Services</strong> (Utah), 2014 - an IRA administrator, not a dealer</td><td>The SEC charged the self-directed IRA administrator and its founder with fraud and obtained an asset freeze and receiver, according to <a href="https://www.sec.gov/litigation/litreleases/2014/lr22982.htm">SEC Litigation Release 22982</a>.</td><td>Reports described a gap of about $22 million between what statements showed and what was actually held (<a href="https://investmentnews.com/industry-news/news/sec-hits-american-pension-services-and-its-founder-with-fraud-charges-57609">InvestmentNews</a>).</td><td>A statement is only as good as the records behind it. Check the depository and custodian, not just one document.</td></tr>
<tr><td><strong>Rosland Capital</strong> (Los Angeles), 2026</td><td>Liquidating Chapter 11 filed July 2, 2026; no metal inventory and substantially all staff gone, per reports on its filing.</td><td>About 617 customers owed about $60 million (reported); recovery not yet known.</td><td>Delivery delays at record prices turned prepaid orders into unsecured claims.</td></tr>
</tbody>
</table>
<h3>Five patterns that repeat</h3>
<ol>
<li><strong>Delivery delays came first.</strong> In Tulving, Northwest Territorial Mint and Rosland, complaints about late or missing orders piled up months before the filing.</li>
<li><strong>"We'll store it for you" was the weak point.</strong> Customers who let the dealer hold metal in its own vault or account were treated much worse than customers whose metal sat at an independent depository in their own name.</li>
<li><strong>New money paid for old orders.</strong> In the criminal cases, prosecutors described customer money being used for other purposes or to fill earlier orders.</li>
<li><strong>Recoveries were small and slow.</strong> Restitution orders are not the same as money in hand, and bankruptcy distributions took years.</li>
<li><strong>Filing a claim mattered.</strong> In Lear Capital, distributions went to investors who filed proofs of claim.</li>
</ol>
<p>For a wider look at enforcement cases and the sales tactics behind them, see our <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> guide.</p>`,
  },
  {
    heading: "How does bankruptcy law treat your metal versus a prepaid order?",
    body: `<p><strong>Bankruptcy law draws a sharp line between property that belongs to you and money the bankrupt company owes you.</strong> Identified metal you own that the company merely holds for you is generally not part of the company's bankruptcy estate. A prepaid order for metal that was never bought or set aside is usually a claim - and for most customers, an unsecured claim that is paid only from whatever is left after higher-priority debts.</p>
<h3>Property versus a claim</h3>
<table>
<thead><tr><th></th><th>Your property (bailment)</th><th>A claim against the company</th></tr></thead>
<tbody>
<tr><td>What it is</td><td>Specific metal you own that someone else stores for you. The storer is a "bailee" - it has possession, not ownership.</td><td>A right to be paid money, or to receive metal, that the company has not yet given you</td></tr>
<tr><td>Typical gold IRA example</td><td>Coins or bars at an independent depository, recorded to your custodian for your IRA</td><td>You paid the dealer, but the metal was never bought or delivered; or you sold back and were not paid</td></tr>
<tr><td>In the company's bankruptcy</td><td>Generally not part of the estate; can be returned to the owner once ownership is shown</td><td>Becomes a claim; you file a proof of claim and wait for distributions</td></tr>
<tr><td>What decides it</td><td>Whether the metal can be identified as yours (records, bar lists, serial numbers, segregation) and whether the documents say you own it</td><td>The amount you paid, your paperwork, and your place in the priority order</td></tr>
<tr><td>Typical outcome</td><td>Metal returned or transferred, sometimes after delays and paperwork</td><td>Partial payment, often a small fraction, often years later</td></tr>
</tbody>
</table>
<p>Industry commentary makes the same distinction using the terms <strong>allocated</strong> and <strong>unallocated</strong>. <a href="https://goldsilver.com/industry-news/article/gold-storage-bankruptcy-what-happens-to-your-gold/">GoldSilver's explainer</a>, for example, describes allocated metal as held in bailment with the storer as bailee, and an unallocated holder as having only a contractual claim - in effect, an IOU in gold. Courts look at the actual documents and records, so labels in a sales brochure are not enough.</p>
<h3>Where unsecured customers stand in line</h3>
<p>In simple terms, a bankruptcy pays secured creditors from their collateral first, then the costs of running the case, then certain "priority" claims set by the Bankruptcy Code, and then general unsecured creditors share what is left. Customers with prepaid orders are usually in that last group. Reports on the Rosland case describe its prepaying customers this way, with recovery undetermined.</p>
<p>One priority category is worth asking a lawyer about. Section 507(a)(7) of the Bankruptcy Code gives a limited priority to individuals' deposits paid for goods or services for personal, family or household use that were not delivered. For cases filed on or after April 1, 2025, that cap is <strong>$3,800</strong> per person, up from $3,350, according to a <a href="https://bankruptcy.cooley.com/jumping-up-bankruptcy-code-dollar-amounts-will-increase-on-april-1-2025/">Cooley bankruptcy blog summary</a> of the federal adjustment. Whether a prepaid bullion or IRA purchase qualifies as "personal, family or household use" is a legal question we cannot answer for you - and even if it does, $3,800 is small next to most gold IRA orders.</p>
<h3>Why "free and clear" sales matter</h3>
<p>When a bankrupt dealer sells assets "free and clear," as Rosland's court approved for its customer information assets, the buyer takes those assets without the dealer's debts. The money goes into the estate. That is why a dealer's assets can end up with another company while its customers' claims stay behind in the bankruptcy.</p>
<h3>This is different from your own bankruptcy</h3>
<p>People sometimes confuse this topic with a different rule: whether <em>your</em> IRA is protected if <em>you</em> go bankrupt. That is covered by the IRA exemption in 11 U.S.C. 522, which we explain <a href="#does-the-ira-bankruptcy-exemption-protect-your-gold-from-a-dealer-s-bankruptcy">further down</a>. It does not protect you from a dealer's failure.</p>`,
  },
];
