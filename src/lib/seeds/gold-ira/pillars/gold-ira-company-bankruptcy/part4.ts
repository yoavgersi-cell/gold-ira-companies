import type { ArticleSection } from "@/lib/config";

// Part 4 of "What Happens to Your Gold If a Gold IRA Company Goes Bankrupt?".
// Verification checklist and documents, warning signs of a dealer in trouble,
// step-by-step response to a dealer bankruptcy, what recoveries look like and
// a question script for any company.
//
// Sourcing notes (Oct 24, 2026): Official Form 410 (Proof of Claim) from
// uscourts.gov; proof-of-claim deadlines in Chapter 11 set by the court
// (general bankruptcy practice; Fed. R. Bankr. P. 3002/3003). Recovery
// examples reuse the precedent figures in part2 (NWTM trustee estimate,
// Bullion Direct restitution, Lear plan). Complaint channels: CFTC, state AG,
// state securities regulator (NASAA), BBB.

export const part4: ArticleSection[] = [
  {
    heading: "How can you verify that your gold is really there?",
    body: `<p><strong>You can verify your metal in about an hour by matching three documents: the dealer's purchase confirmation, your custodian's statement and a holdings report from the depository.</strong> If all three agree on the products and quantities - and, for segregated bars, the serial numbers - your metal is where it should be. If they do not agree, raise it at once, in writing.</p>
<h3>The documents to request</h3>
<table>
<thead><tr><th>Document</th><th>Who provides it</th><th>What it should show</th><th>Red flag</th></tr></thead>
<tbody>
<tr><td>Purchase confirmation (trade confirmation or invoice)</td><td>Dealer</td><td>Trade date, each product and quantity, price per item, total paid, spot price at the time, and a promised delivery date or window</td><td>No delivery date; vague product names; total does not match what left your IRA</td></tr>
<tr><td>Buy direction or investment authorization</td><td>Custodian (you sign it)</td><td>Amount the custodian will pay, to whom, for which products</td><td>Payee is not the dealer you agreed with; amount differs from the confirmation</td></tr>
<tr><td>Custodian account statement</td><td>Custodian</td><td>Each metal product by name, quantity and weight, the depository name, and segregated or commingled storage</td><td>Shows only a dollar value; shows "pending" or cash long after payment; lists the dealer as the holder</td></tr>
<tr><td>Depository holdings report</td><td>Depository, usually requested through the custodian</td><td>Your custodian's account for your IRA, with products and quantities; for segregated storage, a bar list with serial numbers, refiner and weight</td><td>No record of your IRA; quantities lower than the statement</td></tr>
<tr><td>Shipping or receipt confirmation</td><td>Dealer, wholesaler or depository</td><td>Date shipped and date received at the vault</td><td>No tracking or receipt weeks after payment</td></tr>
<tr><td>Fee invoice</td><td>Custodian</td><td>Storage fee matching your storage type</td><td>Storage fees billed for metal that is not on your statement</td></tr>
</tbody>
</table>
<h3>Verification checklist</h3>
<ol>
<li><strong>Collect your paperwork.</strong> Every purchase confirmation since the account opened, and the latest custodian statement.</li>
<li><strong>Log in to your custodian's portal, or call the custodian directly.</strong> Use the phone number on the custodian's own website, not one supplied by the dealer.</li>
<li><strong>Ask for a holdings list by product and quantity.</strong> A dollar total alone is not enough.</li>
<li><strong>Ask which depository holds the metal, and the storage type.</strong> Write down the name of the facility.</li>
<li><strong>If you have segregated storage, ask for the bar list or serial numbers.</strong> Coins usually have no serial numbers; bars usually do.</li>
<li><strong>Request a depository holdings report</strong> through the custodian, or ask the custodian to confirm in writing that it has reconciled your holdings with the depository's records.</li>
<li><strong>Match every confirmation to the statement.</strong> Tick off each product and quantity. Anything paid for but not listed is a gap.</li>
<li><strong>Check the dates.</strong> How long did each purchase take from payment (when cash left your IRA) to appearing on the statement?</li>
<li><strong>Check who is listed on the account.</strong> Ask whether the dealer is listed as an interested party, representative or agent with authority on your account, and what it can do.</li>
<li><strong>Write it down.</strong> Keep a dated note of each call: who you spoke to, what they confirmed.</li>
<li><strong>Repeat yearly</strong> - and after every purchase, sale or custodian change.</li>
</ol>
<p>This check takes less time than reading most account agreements, and it is the single best protection against the problem this guide is about. If you are still choosing an account, our free <a href="/articles/gold-ira-kit">gold IRA kit</a> guide explains what paperwork to expect.</p>`,
  },
  {
    heading: "What are the warning signs that a gold dealer is in trouble?",
    body: `<p><strong>The clearest warning sign in past failures was delivery delays: orders taking months instead of days or weeks, and promised dates that kept slipping.</strong> Other signs include pressure to prepay, slow buyback payments, a sudden rise in complaints, staff turnover and pushes toward products or storage that the dealer controls. One sign alone proves nothing. Several together are a reason to stop sending money and check your holdings.</p>
<table>
<thead><tr><th>Warning sign</th><th>What it looks like</th><th>Seen in</th><th>What to do</th></tr></thead>
<tbody>
<tr><td>Delivery delays</td><td>Metal not on your custodian statement weeks after payment; vague answers about "supply"</td><td>Tulving, Northwest Territorial Mint, Rosland (as reported)</td><td>Ask for a firm delivery date in writing; pause new orders</td></tr>
<tr><td>Slow or missed buyback payments</td><td>Sold back weeks ago, still not paid</td><td>Rosland's $11.8 million buyback list (reported)</td><td>Demand a payment date in writing; keep records</td></tr>
<tr><td>Complaint spikes</td><td>A jump in BBB complaints or reviews about missing orders; BBB alerts</td><td>Tulving (about 640 complaints tracked in a year); Rosland (BBB investigation noted)</td><td>Read recent complaints, not just the star rating</td></tr>
<tr><td>Pressure to prepay or pay outside the custodian</td><td>"Wire it to us today to lock the price"; requests to send IRA money to the dealer directly</td><td>Common in enforcement cases</td><td>In an IRA, money should move from your custodian on your signed direction</td></tr>
<tr><td>Dealer-controlled storage or "holding" programs</td><td>"We'll keep it in our vault"; metal credited in a dealer account</td><td>Bullion Direct</td><td>Use an independent depository and get statements from it</td></tr>
<tr><td>Push toward exclusive or premium coins</td><td>Proof, "limited edition" or branded coins that only that dealer sells</td><td>A recurring complaint theme across the industry</td><td>Ask for the same order in plain bullion and compare</td></tr>
<tr><td>Pivots and unusual offers</td><td>Sudden new product lines, big bonuses, aggressive "free silver" deals</td><td>-</td><td>Ask how the offer is paid for; check the price</td></tr>
<tr><td>Staff turnover and unreturned calls</td><td>Your representative leaves; nobody returns calls</td><td>Rosland (substantially all staff gone by June 2026, as reported)</td><td>Call your custodian and confirm your holdings</td></tr>
<tr><td>Regulator actions or investigations</td><td>State orders, investigations disclosed, consent orders about delivery</td><td>Northwest Territorial Mint (2008 Washington AG settlement)</td><td>Search state regulator and CFTC records</td></tr>
</tbody>
</table>
<p>Our <a href="/articles/gold-ira-reviews">gold IRA reviews</a> guide shows how to read complaint records properly, and our <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> guide covers sales tactics. A strong star rating does not rule out delivery problems; recent complaint <em>text</em> is far more informative.</p>`,
  },
  {
    heading: "What should you do if your gold dealer goes bankrupt?",
    body: `<p><strong>First, confirm what you actually own by contacting your custodian and depository. Then separate anything that is missing - undelivered orders, unpaid buybacks - and file a proof of claim in the bankruptcy case before the court's deadline.</strong> Report problems to regulators, keep every document, avoid "recovery" offers that ask for new money, and talk to a bankruptcy attorney about your specific situation.</p>
<h3>Step by step</h3>
<ol>
<li><strong>Stay calm and stop sending money to the dealer.</strong> Cancel any pending orders that have not been paid.</li>
<li><strong>Contact your custodian directly.</strong> Ask for a current statement by product and quantity, the depository name and storage type. Ask the custodian to remove the dealer as an interested party or representative if it is listed, and to freeze any pending payments to the dealer if you have not yet paid.</li>
<li><strong>Confirm with the depository</strong> (usually through the custodian) that the metal is there.</li>
<li><strong>Build your list of what is missing.</strong> For each undelivered order or unpaid buyback: the date, amount paid, products and quantities, and copies of confirmations, receipts and emails.</li>
<li><strong>Find the case.</strong> Note the court, the case number and the debtor's exact legal name. For Rosland Capital, it is the Central District of California, case 2:26-bk-16650. The <a href="https://www.uscourts.gov/services-forms/bankruptcy">U.S. Courts bankruptcy pages</a> explain the process, and the docket is on <a href="https://pacer.uscourts.gov">PACER</a>.</li>
<li><strong>Watch for the claims deadline (bar date).</strong> In Chapter 11 the court sets the deadline. Read every notice you receive, and check the docket or any claims agent's website.</li>
<li><strong>File a proof of claim.</strong> The standard form is <a href="https://www.uscourts.gov/forms/bankruptcy-forms/proof-claim-0">Official Form 410</a>. Attach redacted copies of your supporting documents, never originals. If you think part of your claim qualifies for priority, the form asks you to say so - ask an attorney.</li>
<li><strong>Consider the creditors' committee.</strong> In larger cases, an official committee represents unsecured creditors. You can contact its counsel, whose name appears on the docket, with information.</li>
<li><strong>Report it.</strong> File complaints with the <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html">CFTC</a>, your state attorney general, your state securities regulator and the BBB. Regulators can sometimes recover money or obtain restitution that a bankruptcy cannot.</li>
<li><strong>Talk to a bankruptcy attorney.</strong> Especially if a large amount is at stake, if you are being sued or asked to return payments, or if your situation is unusual.</li>
<li><strong>Be careful who you trust next.</strong> Expect calls from other dealers and "recovery" services. Never pay upfront to recover losses. Anyone who promises a specific recovery is guessing.</li>
<li><strong>Decide about your remaining IRA calmly.</strong> If your metal is safe at the depository, you do not need to sell. You can keep it, buy through another dealer, or move it to another custodian later. If you want to sell, see <a href="/articles/how-to-sell-gold-ira">how to sell a gold IRA</a>.</li>
</ol>
<h3>Who to contact, and for what</h3>
<table>
<thead><tr><th>Who</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Your IRA custodian</td><td>Holdings, statements, removing the dealer from your account, stopping pending payments</td></tr>
<tr><td>The depository (through the custodian)</td><td>Confirming your metal is physically there</td></tr>
<tr><td>The bankruptcy court and docket</td><td>Case number, notices, deadlines, filing your proof of claim</td></tr>
<tr><td>Creditors' committee counsel</td><td>Sharing information as an unsecured creditor</td></tr>
<tr><td>CFTC</td><td>Precious metals fraud tips and complaints</td></tr>
<tr><td>State attorney general and securities regulator</td><td>Consumer protection and investment complaints</td></tr>
<tr><td>A bankruptcy attorney</td><td>Advice about your rights, priority and deadlines</td></tr>
<tr><td>A tax professional</td><td>If any IRA money was lost, how it is reported</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "How much can customers recover in a dealer bankruptcy?",
    body: `<p><strong>Customers whose metal was identified and held for them usually got that metal back; customers with prepaid orders or unpaid buybacks usually recovered only a fraction, and only after a long wait.</strong> No one can predict a percentage for Rosland yet. Past cases give a sense of the range.</p>
<table>
<thead><tr><th>Case</th><th>What was reported about recovery</th></tr></thead>
<tbody>
<tr><td>Northwest Territorial Mint (2016)</td><td>The trustee estimated recovery for unsecured creditors at less than 10%; restitution of more than $30 million was later ordered in the criminal case</td></tr>
<tr><td>Bullion Direct (2015)</td><td>About $16.19 million in restitution ordered in 2020 for more than 5,800 victims - nearly five years after the collapse</td></tr>
<tr><td>Tulving Company (2014)</td><td>Bankruptcy filing showed less than $50,000 in assets against an estimated $40 million owed</td></tr>
<tr><td>Lear Capital (2022-2023)</td><td>A $5.5 million fund under the confirmed plan, paid to customers by a formula based on the spread charged above a 12% fee</td></tr>
<tr><td>Rosland Capital (2026)</td><td>Not determined; assets listed at $1-10 million against $50-100 million in liabilities, as reported from the petition</td></tr>
</tbody>
</table>
<p>A court-ordered restitution amount is not the same as money paid. Defendants often cannot pay the full amount. And the costs of running a bankruptcy - lawyers, advisers, a trustee - are paid before general unsecured creditors.</p>
<p>How long does it take? There is no fixed timeline. In the cases above, distributions or restitution orders came from roughly a year and a half (Lear Capital, filed in 2022, plan confirmed June 2023) to five or six years (Northwest Territorial Mint, filed 2016, sentencing in 2022). Plan on a wait measured in years, not months.</p>`,
  },
  {
    heading: "What should you ask a gold IRA company about delivery and where your money sits?",
    body: `<p><strong>Before you send money, ask any gold IRA company exactly how long delivery takes, where your money sits until then, who holds the metal afterwards and what happens to your order if the company fails.</strong> Ask for the answers in writing. A well-run company should be able to answer every one of these questions plainly.</p>
<h3>The question script</h3>
<table>
<thead><tr><th>Ask</th><th>A good answer sounds like</th><th>A worrying answer sounds like</th></tr></thead>
<tbody>
<tr><td>1. How many business days from when my custodian pays you to when the metal is received at the depository?</td><td>A specific number, put in writing, for the exact products</td><td>"It depends"; "As soon as possible"; no written date</td></tr>
<tr><td>2. Do you buy the metal before or after you receive my money? How soon after?</td><td>"We lock and purchase from our wholesaler the same day or next day"</td><td>Vague answers or "we batch orders"</td></tr>
<tr><td>3. Where does my money sit between payment and delivery?</td><td>A clear answer; ideally, the custodian pays only on a signed direction for a locked trade</td><td>"Send it to us directly"</td></tr>
<tr><td>4. Which custodian and which depository will hold my metal? Can I choose?</td><td>Named companies, with your choice explained</td><td>"Our vault"; "our partner" without names</td></tr>
<tr><td>5. Segregated or commingled - and what is the cost of each?</td><td>Both explained with fees</td><td>Pressure to pick one without costs</td></tr>
<tr><td>6. Will I get statements from the custodian showing each product and quantity?</td><td>Yes, with an example</td><td>"We'll send you a summary"</td></tr>
<tr><td>7. What is your markup on each item, and your buyback price today?</td><td>A written quote showing spot, price and spread</td><td>"Our prices are competitive"</td></tr>
<tr><td>8. How long do buybacks take to pay?</td><td>A specific number of days</td><td>No commitment</td></tr>
<tr><td>9. If your company failed before delivery, what would happen to my order?</td><td>An honest explanation of the risk window</td><td>"That can't happen"</td></tr>
<tr><td>10. Are you, or have you been, subject to any regulator action or investigation?</td><td>A direct answer you can check</td><td>Evasion</td></tr>
</tbody>
</table>
<p>For the wider checklist - fees, ratings, buybacks and contracts - see our <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a> guide, and for what each fee should cost, our <a href="/articles/gold-ira-fees">gold IRA fees</a> guide.</p>`,
  },
];
