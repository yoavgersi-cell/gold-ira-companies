import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "What Happens to Your Gold If a Gold IRA Company Goes Bankrupt?".
// Choosing companies to reduce this risk (with neutral notes on the four
// companies on this site), FAQs (question-shaped headings feed FAQPage
// schema) and the bottom line.
//
// Company facts reuse the Oct 2026 snapshot in ../../shared FACTS and the
// gold-ira-reviews / gold-ira-custodians pillars (BBB accreditation dates,
// complaint counts, reported depositories). AHG/Rosland deal per PR Newswire
// Oct 6, 2026; liabilities excluded per the release.

export const part5: ArticleSection[] = [
  {
    heading: "How do you choose a gold IRA company that limits this risk?",
    body: `<p><strong>No company can promise it will never fail, so choose one whose process limits how long your money is exposed: fast, written delivery dates, payment only through your custodian, an independent depository you can name, statements that list each product, and a long, checkable record.</strong> Then verify delivery yourself after every purchase. That combination matters more than any ad or rating.</p>
<h3>Six ways to shrink your risk</h3>
<ol>
<li><strong>Keep the risk window short.</strong> Get the delivery timeline in writing before the custodian pays. Do not pay for metal that will take months to arrive.</li>
<li><strong>Use the IRA structure as designed.</strong> Money should move from your custodian to the dealer on your signed direction for a locked trade - never wired to the dealer from your bank "to get started."</li>
<li><strong>Choose an independent depository you can name</strong> and know whether your storage is segregated or commingled.</li>
<li><strong>Prefer standard bullion.</strong> Widely traded coins and bars are easier to source quickly, easier to price and easier to sell. See <a href="/articles/best-gold-coins-for-ira">best gold coins for an IRA</a>.</li>
<li><strong>Spread large purchases.</strong> If you are investing a large sum, consider buying in stages and confirming each delivery before sending the next payment.</li>
<li><strong>Check the record, then check again.</strong> Read recent complaints, search regulator databases and repeat the <a href="#how-can-you-verify-that-your-gold-is-really-there">verification checklist</a> each year.</li>
</ol>
<p>Our full 25-point process is in <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a>, and the custodian side is covered in our <a href="/articles/gold-ira-custodians">gold IRA custodians</a> guide. If you are still deciding whether a gold IRA suits you at all, start with <a href="/articles/gold-ira">what is a gold IRA?</a>; if you are moving money from a 401(k), read our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a> first.</p>
<h3>The four companies on this site: facts relevant to this risk</h3>
<p>We list these companies in alphabetical order, not by rank. The facts come from our October 2026 research and the companies' public materials; none of them changes the advice above, which applies to every dealer. Some of these companies pay us - see <a href="/how-we-rank">how we rank</a> for how that works and for our actual ranking on the <a href="/">home page</a>.</p>
<table>
<thead><tr><th>Company</th><th>In business since</th><th>Storage (as reported)</th><th>Relevant notes (October 2026)</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></td><td>Not published</td><td>"Approved US depositories" (custodian and depository not published)</td><td>Little public track record to check - its Trustpilot profile had no reviews as of October 19, 2026. Ask for the custodian, depository and written delivery times.</td></tr>
<tr><td><a href="/reviews/american-hartford-gold">American Hartford Gold</a></td><td>About 2015</td><td>"Approved US depositories" (custodian not published)</td><td>BBB A+ and accredited since 2016; 112 BBB complaints in three years as of October 2026. Announced on October 6, 2026 that it acquired Rosland Capital's assets, without assuming Rosland's liabilities.</td></tr>
<tr><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a></td><td>2012</td><td>Delaware Depository (reported)</td><td>BBB A+ and accredited since 2015; 1 BBB complaint in three years as of October 2026.</td></tr>
<tr><td><a href="/reviews/goldco">Goldco</a></td><td>2006</td><td>Delaware Depository and Brink's (reported)</td><td>BBB A+ and accredited since 2011; about 72 BBB complaints in three years as of October 2026.</td></tr>
</tbody>
</table>
<p>We found no report of delivery failures at any of these four comparable to the Rosland, Tulving, Bullion Direct or Northwest Territorial Mint cases. That is a statement about what we found, not a guarantee. Ask each one the <a href="#what-should-you-ask-a-gold-ira-company-about-delivery-and-where-your-money-sits">ten questions above</a>, and compare the written answers. For complaint details, see our <a href="/articles/gold-ira-reviews">gold IRA reviews</a> guide; for costs, see <a href="/articles/gold-ira-fees">gold IRA fees</a> and the <a href="/gold-ira-fee-calculator">fee calculator</a>.</p>`,
  },
  {
    heading: "Can I lose my gold if a gold IRA company goes bankrupt?",
    body: `<p><strong>If your metal has already been delivered to an independent depository and is recorded in your IRA, a dealer bankruptcy should not cost you that metal, because the dealer does not own it.</strong> You can lose money you paid for metal that was never delivered, and buyback money the dealer owes you; those usually become claims in the bankruptcy, often paid only in part. Check your custodian statement to confirm which situation you are in.</p>`,
  },
  {
    heading: "Who owns the gold in my IRA?",
    body: `<p><strong>Your IRA owns it. Legally, the custodian or trustee holds title for your benefit, and an independent depository holds the metal physically as a bailee.</strong> The dealer that sold it to you has no ownership once delivery is complete. Federal tax rules require this arrangement - you cannot hold IRA gold personally without it being treated as a distribution; see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p>`,
  },
  {
    heading: "What happened to Rosland Capital customers?",
    body: `<p><strong>According to reports citing Rosland's July 2026 bankruptcy filings, about 484 customers were owed roughly $49 million for prepaid orders that were never delivered, and about 133 customers were owed roughly $11.8 million in unpaid buybacks - about 617 customers and $60 million in total.</strong> Those customers are creditors in the liquidating Chapter 11 case in the Central District of California (case 2:26-bk-16650), and their recovery had not been determined as of October 2026. Customers whose metal was already at a depository in their IRA were in a stronger position, but should confirm their holdings with their custodian.</p>`,
  },
  {
    heading: "Did American Hartford Gold buy Rosland Capital?",
    body: `<p><strong>American Hartford Gold announced on October 6, 2026 that it had acquired the <em>assets</em> of Rosland Capital, and said it "will not be assuming liability for any obligations of Rosland Capital."</strong> It did not buy the company's debts, so Rosland customers owed metal or money must pursue those claims in the bankruptcy. The price was not disclosed. The bankruptcy court approved a sale of Rosland's customer information assets on October 1, 2026; the docket excerpts we saw did not name the buyer. American Hartford Gold said it set up a dedicated service team for Rosland clients.</p>`,
  },
  {
    heading: "Is gold in a depository insured?",
    body: `<p><strong>Yes, depositories carry private insurance against physical loss of the metal they store - such as theft or damage at the vault - but it is not government insurance and it does not cover a dealer's failure to deliver.</strong> SIPC and FDIC do not cover physical gold. Ask your custodian or depository who the insurer is, whether coverage is for full value, and whether metal in transit is covered.</p>`,
  },
  {
    heading: "How long does a dealer bankruptcy claim take?",
    body: `<p><strong>Usually a long time - often a year or more, and sometimes several years.</strong> In Lear Capital's case, the plan was confirmed in June 2023, after a 2022 filing; in the Northwest Territorial Mint and Bullion Direct collapses, criminal restitution orders came years after the businesses failed. The court sets a deadline (the "bar date") to file your proof of claim, so do not wait to file even though payment may take much longer.</p>`,
  },
  {
    heading: "The bottom line on gold IRA company bankruptcy",
    body: `<p><strong>A gold IRA company's bankruptcy does not usually reach metal that is already in your IRA at an independent depository - but it can cost you money paid for metal that has not arrived yet, and buybacks that have not been paid.</strong> Rosland Capital's 2026 Chapter 11 shows both sides: reported customer claims of about $60 million for undelivered orders and buybacks, alongside an IRA structure designed to keep delivered metal out of the dealer's reach.</p>
<p>You cannot control whether a dealer stays healthy. You can control how exposed you are:</p>
<ul>
<li><strong>Know who holds what.</strong> Dealer, custodian and depository are separate companies with separate risks.</li>
<li><strong>Keep the risk window short.</strong> Get delivery dates in writing, pay only through your custodian, and avoid long waits for exclusive products.</li>
<li><strong>Verify, do not assume.</strong> Match your purchase confirmation, custodian statement and depository report after every purchase and every year.</li>
<li><strong>Watch for warning signs.</strong> Delivery delays and slow buybacks came before every major dealer failure we reviewed.</li>
<li><strong>Act quickly if a dealer fails.</strong> Confirm your holdings, document what is missing, file a proof of claim before the deadline, report it to regulators and talk to a bankruptcy attorney.</li>
</ul>
<p>Before you choose a company, read our guides on <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a>, <a href="/articles/gold-ira-custodians">gold IRA custodians</a>, <a href="/articles/gold-ira-rules">gold IRA rules</a> and <a href="/articles/gold-ira-scams-red-flags">scams and red flags</a>, and compare companies on our <a href="/">home page</a>. If you already own a gold IRA, the most useful thing you can do today takes about an hour: call your custodian and confirm, product by product, that your metal is there.</p>
<p><em>We will update this guide as the Rosland Capital case develops. Facts about the case are as reported in court docket listings, company announcements and news coverage through October 24, 2026; if you are affected, rely on the official court record and your own attorney.</em></p>
${DISCLAIMER}`,
  },
];
