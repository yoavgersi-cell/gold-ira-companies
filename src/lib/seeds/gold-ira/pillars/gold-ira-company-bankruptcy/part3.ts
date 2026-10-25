import type { ArticleSection } from "@/lib/config";

// Part 3 of "What Happens to Your Gold If a Gold IRA Company Goes Bankrupt?".
// Segregated vs commingled in a failure, SIPC/FDIC, custodian failure,
// depository failure, the IRA bankruptcy exemption and the "risk window".
//
// Sourcing notes (Oct 24, 2026):
// - SIPC: sipc.org "What SIPC protects"; investor.gov SIPC bulletin (gold and
//   silver commodities not protected).
// - FDIC: "Deposit Insurance At A Glance" brochure (safe deposit box contents
//   not insured).
// - Custodian resignation / successor: general custodial-agreement practice
//   (30-day notice is typical per trust-law commentary); IRS nonbank trustee
//   requirements page. No verified recent U.S. gold-IRA custodian receivership
//   found; American Pension Services (SEC, 2014) is an administrator case.
// - Depository insurance: 2010-era CFTC filing describing Delaware Depository
//   Lloyd's of London all-risk coverage - dated, stated as such.
// - 522(n) IRA cap $1,711,975 for cases filed on/after Apr 1, 2025: Ascensus,
//   Federal Register 2025-02207.
// - 28-day "actual delivery" standard for financed retail metals: CFTC
//   enforcement releases (Dodd-Frank); CFTC/NASAA advisory link.

export const part3: ArticleSection[] = [
  {
    heading: "Does segregated or commingled storage matter if a company fails?",
    body: `<p><strong>Both segregated and commingled storage keep your IRA metal out of a dealer's hands, so either protects you from a dealer failure once delivery is complete.</strong> The difference matters mainly if the <em>depository</em> or its records are ever in question: with segregated storage you own specific, identified bars or coins; with commingled storage you own a quantity of identical items held in a shared pool.</p>
<table>
<thead><tr><th></th><th>Segregated storage</th><th>Commingled (non-segregated) storage</th></tr></thead>
<tbody>
<tr><td>What you own</td><td>The exact bars and coins delivered for your account</td><td>A stated quantity of the same product (for example, 20 one-ounce American Gold Eagles) from a pool held for many customers</td></tr>
<tr><td>What you get back</td><td>The same items, often traceable by bar serial number</td><td>Items of the same type and quantity, not necessarily the same pieces</td></tr>
<tr><td>Typical yearly cost</td><td>Higher - for example $150-$240 a year in published custodian schedules</td><td>Lower - for example $100-$150 a year</td></tr>
<tr><td>In a dealer failure</td><td>Not the dealer's property</td><td>Not the dealer's property</td></tr>
<tr><td>In a depository dispute or audit</td><td>Easiest to prove: your items are physically separate and listed</td><td>Depends on accurate pooled records showing your share</td></tr>
<tr><td>Best suited to</td><td>Larger holdings, bars with serial numbers, people who want maximum traceability</td><td>Most standard bullion coin IRAs, where cost matters</td></tr>
</tbody>
</table>
<p>The fee ranges above come from published custodian schedules collected in our <a href="/articles/gold-ira-custodians">gold IRA custodians</a> guide; check your own custodian's current figures, and use our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> to see what the difference costs over 10 or 20 years. For a fuller comparison, see the section on <a href="/articles/gold-ira-custodians#segregated-vs-commingled-storage-is-segregated-worth-it">segregated vs commingled storage</a> in that guide.</p>
<h3>The storage arrangement that actually causes trouble</h3>
<p>The real danger in past failures was not commingled storage at an independent depository. It was <strong>metal held by the dealer itself</strong>. Bullion Direct customers who chose its storage program found the vaults nearly empty, according to <a href="https://coinweek.com/bullion-report/bullion-direct-another-bullion-biz-bankrupt-vault-virtually-empty/">CoinWeek</a>; the company said in a court declaration that metal was not actually purchased unless a customer asked for delivery. A properly set-up gold IRA cannot use that kind of arrangement, because the IRS requires the trustee to hold IRA bullion. That rule is one of the quiet advantages of an IRA.</p>
<p>Be careful with any non-IRA product a dealer offers where it "holds" the metal for you, credits you with metal in an online account, or keeps it in its "own vault." Ask who has legal title, which company physically holds it, and whether you will receive a statement from that independent company. If the answer is the dealer, you are in the high-risk row of our <a href="#who-actually-holds-the-metal-in-a-gold-ira">risk map</a>.</p>`,
  },
  {
    heading: "Is my gold IRA protected by SIPC or FDIC?",
    body: `<p><strong>No. Neither SIPC nor FDIC insurance covers physical gold, silver, platinum or palladium in a gold IRA.</strong> SIPC protects cash and securities at failed brokerage firms; FDIC insures bank deposits. Your protection in a gold IRA comes from a different place: legal ownership through your custodian, the physical separation of the metal at a depository, and the depository's own insurance against physical loss.</p>
<table>
<thead><tr><th>Protection</th><th>What it covers</th><th>Does it cover your IRA gold?</th><th>Source</th></tr></thead>
<tbody>
<tr><td>SIPC (Securities Investor Protection Corporation)</td><td>Missing cash and securities at a failed SIPC-member brokerage, up to $500,000 including $250,000 for cash</td><td>No. Commodities such as gold and silver are not protected.</td><td><a href="https://www.sipc.org/for-investors/what-sipc-protects">SIPC</a>; <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/investor-bulletin-sipc-protection-part-1-sipc-basics">Investor.gov</a></td></tr>
<tr><td>FDIC (Federal Deposit Insurance Corporation)</td><td>Deposits at insured banks, up to the standard limits</td><td>No. The FDIC does not insure safe deposit boxes or their contents, or non-deposit investments.</td><td><a href="https://www.fdic.gov/regulations/resources/brochures/deposit_insurance_at_a_glance-english.html">FDIC</a></td></tr>
<tr><td>Depository insurance</td><td>Physical loss or damage at the vault, such as theft or destruction, under the depository's private policy</td><td>Yes, for physical loss at the vault - not for a dealer that never delivered</td><td>Depository and custodian disclosures</td></tr>
<tr><td>Dealer's own promises</td><td>Whatever the contract says - buyback "commitments," guarantees</td><td>Only as good as the dealer's ability to pay</td><td>Your contract</td></tr>
<tr><td>Bankruptcy court</td><td>Orderly treatment of claims; return of property that is shown to be yours</td><td>A process, not insurance. Unsecured claims may be paid in part.</td><td><a href="https://www.uscourts.gov/services-forms/bankruptcy">U.S. Courts</a></td></tr>
</tbody>
</table>
<p>One nuance: uninvested <em>cash</em> sitting in your IRA at a custodian may be swept into FDIC-insured bank accounts, depending on the custodian. Ask your custodian whether that applies to you. But once the cash has been sent to a dealer, it is no longer in your IRA or in an insured account. It is simply money the dealer owes you in metal.</p>
<p>Be wary of any salesperson who says your gold is "FDIC insured," "SIPC protected" or "government guaranteed." It is not, and a company that says otherwise is either confused or misleading you. The <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html">CFTC's guide to precious metals investing</a>, written with other regulators, is a good plain-English check on what to expect.</p>`,
  },
  {
    heading: "What if the gold IRA custodian goes out of business?",
    body: `<p><strong>If a custodian fails, resigns or is shut down, the IRA assets it holds are held for the account owners' benefit, not as the custodian's own property, so they should be moved to a successor custodian rather than used to pay the custodian's debts.</strong> The process depends on the custodian's charter, its state or federal regulator and your custodial agreement. It can mean paperwork and delay, but it is a very different situation from a dealer owing you undelivered metal.</p>
<h3>How a custodian change usually works</h3>
<ol>
<li><strong>Notice.</strong> Custodial agreements commonly let a custodian resign on written notice to the account owner - often 30 days, according to trust-law commentary - and ask you to name a successor. Keep your mailing address and email current with your custodian, or you may miss the notice.</li>
<li><strong>Successor named.</strong> You pick a new custodian, or one is appointed under the agreement or by a regulator or court. A whole book of accounts is sometimes moved at once.</li>
<li><strong>Re-titling at the depository.</strong> The metal usually does not need to move. The depository updates its records to show the new custodian, for the benefit of your IRA.</li>
<li><strong>New statements.</strong> You start receiving statements from the successor. Compare the first one line by line with your last statement from the old custodian.</li>
</ol>
<h3>What protects you here</h3>
<ul>
<li><strong>IRS requirements.</strong> To be a nonbank IRA trustee, an entity must show the IRS it meets requirements on net worth, fiduciary conduct, audits and record-keeping, according to the <a href="https://www.irs.gov/retirement-plans/application-procedures-for-nonbank-trustees-and-custodians">IRS nonbank trustee application page</a>. Banks and trust companies are also supervised by banking regulators.</li>
<li><strong>Separate custody.</strong> Your metal is at an independent depository, not in the custodian's offices.</li>
<li><strong>Your own records.</strong> Statements, confirmations and depository reports let you prove what you own.</li>
</ul>
<h3>What can still go wrong</h3>
<p>The protections assume the records are honest. In the <a href="https://www.sec.gov/litigation/litreleases/2014/lr22982.htm">American Pension Services case</a>, the SEC charged a Utah self-directed IRA administrator and its founder with fraud in 2014, and a court appointed a receiver; reports described a gap of about $22 million between what account statements showed and what was actually held. That case involved an administrator, not a gold depository, but it shows why it is worth checking holdings with more than one party. The SEC's <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-14">investor alert on self-directed IRAs</a> also notes that custodians generally do not vet the investments you choose.</p>
<p>We did not find a recent, credible report of a gold IRA custodian failure that cost customers their metal. Our <a href="/articles/gold-ira-custodians">custodians guide</a> covers how to check a custodian's status and regulator, and how to switch if you want to.</p>`,
  },
  {
    heading: "What if the depository fails or the metal goes missing?",
    body: `<p><strong>A depository is a bailee: it stores your metal but does not own it, so its creditors have no claim on your coins and bars. Physical loss - theft, fire, a "mysterious disappearance" - is what depository insurance is designed to cover.</strong> Regular audits and your own statement checks are how missing metal would be discovered. We found no recent report of a major U.S. IRA depository failing and customers losing metal.</p>
<h3>Insurance: what is and is not covered</h3>
<p>Depositories carry private insurance, often through specialist markets. A dated example: a CFTC filing from about 2010 described <a href="https://www.cftc.gov/stellent/groups/public/@rulesandproducts/documents/ifdocs/rul011310comex001.pdf">Delaware Depository Service Company's coverage through Lloyd's of London</a> as covering all risks of physical loss or damage, including mysterious disappearance, employee dishonesty and theft. Policies change, so ask for current details.</p>
<table>
<thead><tr><th>Event</th><th>Covered by depository insurance?</th></tr></thead>
<tbody>
<tr><td>Theft from the vault</td><td>Generally yes</td></tr>
<tr><td>Fire, flood or damage at the vault</td><td>Generally yes, under an all-risk policy</td></tr>
<tr><td>Employee theft at the depository</td><td>Often yes - ask</td></tr>
<tr><td>Metal lost in transit to the vault</td><td>Depends on who arranged shipping and its insurance - ask the dealer and depository</td></tr>
<tr><td>Dealer took your money and never shipped</td><td><strong>No.</strong> Nothing ever arrived to insure.</td></tr>
<tr><td>Gold price falls</td><td><strong>No.</strong> Insurance never covers market value changes.</td></tr>
<tr><td>You overpaid a large markup</td><td><strong>No.</strong> That is a pricing problem, not a loss.</td></tr>
</tbody>
</table>
<h3>Audits</h3>
<p>Ask the depository or custodian how often holdings are counted, whether an outside firm does it, and whether IRA accounts are reconciled to the custodian's records. Our custodians guide has a full list of <a href="/articles/gold-ira-custodians#insurance-and-audits-what-to-ask">insurance and audit questions</a>. Your own check is the simplest audit of all: when a statement arrives, compare it with what you bought.</p>`,
  },
  {
    heading: "Does the IRA bankruptcy exemption protect your gold from a dealer's bankruptcy?",
    body: `<p><strong>No - the IRA bankruptcy exemption protects your IRA from <em>your own</em> creditors if <em>you</em> file for bankruptcy. It does nothing for you when a dealer goes bankrupt.</strong> For cases filed on or after April 1, 2025, the federal cap on protected traditional and Roth IRA savings is <strong>$1,711,975</strong>, and money rolled over from employer plans such as 401(k)s generally does not count toward it.</p>
<p>The rule is in <a href="https://www.law.cornell.edu/uscode/text/11/522">11 U.S.C. 522</a>. The cap started at $1 million under the 2005 bankruptcy reform law and is adjusted for inflation every three years. The April 2025 adjustment raised it from $1,512,350 to $1,711,975, according to <a href="https://www.ascensus.com/industry-regulatory-news/news-articles/ira-bankruptcy-exemption-increases">Ascensus</a> and the <a href="https://www.govinfo.gov/content/pkg/FR-2025-02-04/html/2025-02207.htm">Federal Register notice</a> of the new amounts. A court can raise the cap if the interests of justice require it.</p>
<table>
<thead><tr><th>Question</th><th>IRA exemption (your bankruptcy)</th><th>Dealer bankruptcy (their bankruptcy)</th></tr></thead>
<tbody>
<tr><td>Whose bankruptcy?</td><td>Yours</td><td>The dealer's</td></tr>
<tr><td>What is protected?</td><td>Your IRA from your creditors, up to the cap (rollover money generally outside the cap)</td><td>Nothing automatically - your metal is safe because you own it, not because of an exemption</td></tr>
<tr><td>Main law</td><td>11 U.S.C. 522</td><td>Rules on property of the estate, claims and priorities</td></tr>
<tr><td>What you do</td><td>Claim the exemption in your own case, with an attorney</td><td>Confirm holdings; file a proof of claim for any undelivered metal or unpaid buyback</td></tr>
</tbody>
</table>
<p>For how rollovers keep that protection intact, see our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a>. IRA rules on contributions and distributions are in IRS <a href="https://www.irs.gov/publications/p590a">Publication 590-A</a>.</p>`,
  },
  {
    heading: "What is the risk window when you buy gold for an IRA?",
    body: `<p><strong>The risk window is the time between the moment your money leaves your IRA for the dealer and the moment the metal is recorded in your IRA at the depository.</strong> During that gap, if the dealer fails, you hold a claim, not metal. The goal is to keep that window as short as possible - days, not months - and to confirm when it has closed.</p>
<h3>Risk window timeline</h3>
<table>
<thead><tr><th>Step</th><th>What happens</th><th>Who holds your money or metal</th><th>Your risk if the dealer fails now</th><th>What to get</th></tr></thead>
<tbody>
<tr><td>1. Account opened and funded</td><td>Rollover or transfer arrives at the custodian</td><td>Custodian (cash)</td><td>Low</td><td>Custodian statement showing the cash</td></tr>
<tr><td>2. Trade locked</td><td>You agree on products, quantities and price with the dealer</td><td>Custodian (cash)</td><td>Low</td><td>Written trade confirmation with prices and promised delivery date</td></tr>
<tr><td>3. Buy direction signed</td><td>You authorize the custodian to pay the dealer</td><td>Custodian, about to pay</td><td>Low, but rising</td><td>Copy of the signed direction</td></tr>
<tr><td>4. Custodian pays the dealer</td><td>Cash leaves your IRA</td><td><strong>Dealer</strong></td><td><strong>High - the window opens</strong></td><td>Note the date and amount</td></tr>
<tr><td>5. Dealer buys from wholesaler</td><td>The dealer places its own order</td><td>Dealer / wholesaler</td><td><strong>High</strong></td><td>Ask the dealer to confirm when it placed the order</td></tr>
<tr><td>6. Shipped to depository</td><td>Metal in transit, usually insured</td><td>Shipper / wholesaler / dealer</td><td>Moderate - depends on title and transit insurance</td><td>Shipping or tracking confirmation</td></tr>
<tr><td>7. Depository receives and counts</td><td>Metal checked in and allocated to your custodian's account for your IRA</td><td>Depository, for custodian</td><td><strong>Low - the window closes</strong></td><td>Depository receipt or report via the custodian</td></tr>
<tr><td>8. Custodian statement updated</td><td>Your holdings shown by product and quantity</td><td>Custodian and depository</td><td>Low</td><td>Statement listing each product, quantity and storage type</td></tr>
</tbody>
</table>
<h3>How long should it take?</h3>
<p>There is no single legal deadline for IRA purchases, so ask each company for its normal timeline in writing. One useful benchmark comes from federal commodities law: for <em>financed</em> retail precious metals sales, the Dodd-Frank Act requires "actual delivery" within 28 days, or the deal must be on a regulated exchange, as the CFTC has explained in enforcement cases. That rule is about leveraged sales, not ordinary IRA purchases, but it shows what regulators consider a reasonable delivery time. A Washington state regulator case against another dealer, Regal Assets, described customers being told to expect metal in their custodial accounts in no more than 5-6 weeks, and the order says that timeline was routinely missed, according to the <a href="https://dfi.wa.gov/documents/securities-orders/S-22-3482-23-FO01.pdf">Washington DFI final order</a>.</p>
<p>Our view: for standard bullion coins and bars, most well-run dealers should be able to tell you a target measured in days to a few weeks, not months. If a company cannot give you a date in writing, or the date slips repeatedly, treat that as a warning sign. Plain bullion is usually faster to source than rare, proof or "exclusive" coins - another reason to read our <a href="/articles/best-gold-coins-for-ira">best gold coins for an IRA</a> guide before you buy.</p>`,
  },
];
