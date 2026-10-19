import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "How to Sell or Withdraw Gold From Your IRA (2026)".
// Inherited gold IRAs, moving custodians or rolling back into a regular IRA,
// exit scams, the exit checklist, question-shaped FAQs (emitted as FAQPage
// schema by the article page) and the bottom line.

export const part5: ArticleSection[] = [
  {
    heading: "Inherited gold IRAs: how beneficiaries exit",
    body: `<p>If you have inherited a gold IRA, the exit rules depend mainly on whether you were the owner's spouse. This is one of the more complicated areas of IRA tax law, and the rules were reshaped by the SECURE Act and later IRS regulations, so please work through your own case with a tax professional. Publication 590-B has the official detail.</p>
<h3>If you are the surviving spouse</h3>
<p>A spouse generally has the most flexibility. The main choices are:</p>
<ul>
<li><strong>Treat the IRA as your own</strong> or roll it into your own IRA. It then follows your own RMD age and rules. Withdrawals before you are 59½ would generally face the 10% additional tax unless an exception applies.</li>
<li><strong>Keep it as an inherited (beneficiary) IRA.</strong> Withdrawals are generally free of the 10% additional tax at any age, which can suit a younger spouse who needs income.</li>
</ul>
<p>Either way, the metal can usually stay where it is - the custodian re-registers the account rather than selling anything.</p>
<h3>If you are not the spouse</h3>
<ul>
<li><strong>No rollover into your own IRA.</strong> A non-spouse beneficiary cannot roll an inherited IRA into their own IRA. The only way to move it is a trustee-to-trustee transfer into an <strong>inherited IRA</strong> in your name as beneficiary.</li>
<li><strong>The 10-year rule.</strong> For most non-spouse beneficiaries of owners who died after 2019, the whole account must generally be emptied by the end of the 10th year after the year of death. If the owner had already started RMDs, annual distributions during those years may also be required. Check the current rules with a tax professional, because this area has changed several times.</li>
<li><strong>Eligible designated beneficiaries</strong> - such as a minor child of the owner, a disabled or chronically ill person, or someone not more than 10 years younger than the owner - may be able to stretch distributions over a longer period.</li>
</ul>
<h3>Taxes for beneficiaries</h3>
<p>Distributions from an inherited traditional IRA are generally taxed as ordinary income, but the 10% additional tax does not apply to distributions after the owner's death. Distributions from an inherited Roth IRA are generally tax-free if the original owner's five-year period has been met, though the 10-year rule can still apply to when the money must come out.</p>
<h3>Practical steps for heirs</h3>
<ol>
<li>Contact the custodian with a death certificate and ask for its beneficiary claim forms.</li>
<li>Get a current statement of exactly what metal is held and where.</li>
<li>If there are several beneficiaries, ask how the custodian splits metal - it may split by product and quantity, or sell and split cash.</li>
<li>Decide, with a tax professional, whether to sell inside the inherited IRA, take metal in kind, or spread distributions over several years to manage tax.</li>
<li>Get two or three dealer bids before selling, exactly as an owner would. Heirs are a frequent target of lowball offers.</li>
</ol>
<p>Spreading withdrawals over the 10-year window, rather than taking everything in year one, can keep more of the inheritance in lower tax brackets. The best pattern depends on your income in each year.</p>`,
  },
  {
    heading: "Moving to a cheaper custodian or rolling back into a regular IRA",
    body: `<p>Sometimes the real goal is not to cash out but to stop paying high fees. You have two main routes, and neither has to be taxed if done as a direct trustee-to-trustee transfer.</p>
<h3>Route 1: Transfer the gold IRA to a cheaper self-directed custodian</h3>
<p>The metal stays as metal. You open an account with the new custodian, sign its transfer request, and the new custodian requests the assets from the old one. The old custodian instructs the depository to re-register the metal to the new custodian (if both use the same depository) or ship it to the new custodian's depository.</p>
<ul>
<li><strong>Tax:</strong> none for a direct transfer, and it does not count toward the once-per-12-months limit on 60-day IRA rollovers. Never take possession of the metal yourself in between.</li>
<li><strong>Costs:</strong> a termination fee at the old custodian - Equity Trust lists $250 for a full termination; Madison Trust lists $225; Kingdom Trust reportedly charges $300 - plus any in-kind transfer fee (Equity Trust: $50) and shipping if the metal changes depositories.</li>
<li><strong>Time:</strong> often several weeks, longer if metal moves between vaults.</li>
</ul>
<h3>Worked example: is a custodian switch worth it?</h3>
<p>On a $100,000 gold IRA at Equity Trust, the published annual fee is $500 (the $100,000-$199,999 tier) plus $110 non-segregated storage: <strong>$610 a year</strong>. GoldStar Trust is reported by third-party sites to charge a $90 flat annual fee plus $125 commingled storage: <strong>$215 a year</strong> (reported, December 2025 figures; verify before relying on them).</p>
<ul>
<li>Yearly saving: $610 - $215 = <strong>$395</strong></li>
<li>One-time cost: $250 termination + $50 in-kind transfer = <strong>$300</strong>, plus any shipping</li>
<li>Break-even: $300 ÷ $395 = about <strong>0.8 years</strong></li>
</ul>
<p>Use our <a href="/gold-ira-fee-calculator">fee calculator</a> with your own numbers, and compare options in our <a href="/articles/gold-ira-custodians">custodian guide</a>.</p>
<h3>Route 2: Sell the metal and move the cash to a regular IRA</h3>
<p>Here you leave physical metal behind. The custodian sells your gold inside the IRA, then sends the cash by direct transfer to an ordinary IRA at a brokerage. There you could buy a gold ETF, index funds, bonds or anything else the brokerage offers. The process mirrors a <a href="/articles/gold-ira-rollover">gold IRA rollover</a> in reverse: start the transfer from the receiving brokerage, and make sure the cash goes custodian-to-custodian, not to you.</p>
<p><strong>Worked example:</strong> the same $100,000 account. Exit costs: a dealer spread of about 1-2% ($1,000-$2,000), a $10 liquidation fee, a $250 termination fee and a $30 wire - about <strong>$1,290 to $2,290</strong> in total. If the cash then goes into a gold ETF with a 0.10% expense ratio (such as GLDM, per our research; verify current figures), the yearly cost is about $100 instead of $610 - a saving of about <strong>$510 a year</strong>, assuming the brokerage IRA itself has no account fee (many do not, but check). Break-even: $1,290 ÷ $510 = about 2.5 years; $2,290 ÷ $510 = about 4.5 years.</p>
<table>
<thead><tr><th></th><th>Stay put</th><th>Switch custodian</th><th>Sell and move to an ETF in a regular IRA</th></tr></thead>
<tbody>
<tr><td>Own physical metal?</td><td>Yes</td><td>Yes</td><td>No - you own fund shares</td></tr>
<tr><td>Yearly cost on $100,000 (example)</td><td>$610</td><td>About $215 (reported)</td><td>About $100</td></tr>
<tr><td>One-time exit cost (example)</td><td>$0</td><td>About $300 + shipping</td><td>About $1,290-$2,290</td></tr>
<tr><td>Taxed?</td><td>No</td><td>No (direct transfer)</td><td>No (direct transfer)</td></tr>
</tbody>
</table>
<p>Inside an IRA, the 28% collectibles rate on gold ETFs does not matter - IRA distributions are taxed under IRA rules either way. The trade-off is ownership: an ETF tracks the gold price but you do not hold coins in a vault in your name. Our comparison of a <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs a gold ETF</a> covers this in more depth, and the same logic applies to a <a href="/articles/silver-ira">silver IRA</a>.</p>`,
  },
  {
    heading: "Exit scams and red flags when you sell",
    body: `<p>The exit is where some of the worst abuses in this industry happen. You are often older, sometimes under time pressure, and dealing with a company that already has your trust. Regulators have brought several cases involving retirement savers in precious metals.</p>
<h3>Enforcement cases worth knowing</h3>
<table>
<thead><tr><th>Case</th><th>What regulators alleged or found</th></tr></thead>
<tbody>
<tr><td>Red Rock Secured</td><td>Told investors markups were 1-5% but charged up to 130% (SEC); $76.4 million final judgment. Money came from IRAs, 401(k)s and TSPs.</td></tr>
<tr><td>Safeguard Metals</td><td>SEC: average markup about 64% vs disclosed 4-33%. CFTC: silver coin markups of 51% to over 70%. Final judgment in October 2025 of about $25.6 million restitution plus an equal penalty (about $51 million total).</td></tr>
<tr><td>Lear Capital</td><td>New York Attorney General: undisclosed commissions of up to 33% on more than $43 million of sales; settlement of about $5-6 million, later a bankruptcy plan.</td></tr>
<tr><td>Goldline (2012)</td><td>Markups described as "upwards of 55%"; up to $4.5 million in refunds plus an $800,000 fund, with no admission of wrongdoing.</td></tr>
</tbody>
</table>
<p>The CFTC, FINRA and NASAA publish a joint advisory, <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" target="_blank" rel="noopener">10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals</a>, which is worth reading before any sale or swap too.</p>
<h3>Red flags at exit</h3>
<ul>
<li><strong>A lowball bid with no explanation.</strong> If a dealer will not tell you its bid as a percentage of spot, get other quotes.</li>
<li><strong>Pressure to "swap" rather than sell.</strong> "Don't sell your Eagles - trade them for these rare coins, they'll do better." A swap into proof or "IRA-exclusive" coins can lock in a huge new markup. This was the pattern in several enforcement cases.</li>
<li><strong>Fear stories.</strong> Claims that the government will confiscate gold, that your custodian is about to fail, or that your coins are being "recalled" are classic pressure tactics. Check with your custodian directly, using the number on your statement.</li>
<li><strong>"Sell it to me directly - skip the custodian."</strong> IRA metal can only be sold through the custodian. Any offer to bypass it is a red flag.</li>
<li><strong>Requests to send metal to your home "for the sale".</strong> That would be a distribution. A real IRA sale goes depository to buyer.</li>
<li><strong>Urgency.</strong> "This price is only good for 10 minutes" is normal for a locked quote - but not when combined with pressure to buy something new.</li>
<li><strong>Unsolicited calls after a death.</strong> Heirs are targeted. Do not discuss an inherited account with anyone who calls you first.</li>
</ul>
<p>No dealer is "IRS-approved" - the IRS approves custodians and sets metal standards, not sellers. Treat any claim otherwise as a warning sign. For the full list of warning signs, see our guide to <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a>.</p>`,
  },
  {
    heading: "Your gold IRA exit checklist",
    body: `<p>Print this and work through it before you sell, withdraw or move your account.</p>
<h3>Before you decide</h3>
<ul>
<li>Get your latest custodian statement and list every product and quantity.</li>
<li>Decide which exit option you want: sell and keep cash in the IRA, sell and withdraw, take metal in kind, or transfer.</li>
<li>If you are taking money out, ask a tax professional how much tax you will owe and whether to spread it across tax years.</li>
<li>If you are under 59½, check whether the 10% additional tax applies or whether an exception fits (IRS Topic 557).</li>
<li>If an RMD is due, calculate it (December 31 balance ÷ Uniform Lifetime factor) and consider taking it from another IRA instead.</li>
</ul>
<h3>Before you sell</h3>
<ul>
<li>Get at least two or three bids, each as a percentage of spot, with all fees.</li>
<li>Ask your custodian for its current liquidation, distribution, wire, in-kind and termination fees in writing.</li>
<li>Confirm the buyer works with IRA custodians and how it collects from the depository.</li>
<li>Refuse any pressure to swap into other products.</li>
</ul>
<h3>When you sell</h3>
<ul>
<li>Lock the price and get a written trade confirmation.</li>
<li>Check every line of the custodian direction form before signing.</li>
<li>Choose your federal and state withholding if taking a distribution.</li>
<li>Note the date and expected timeline; follow up if steps stall.</li>
</ul>
<h3>After you sell</h3>
<ul>
<li>Confirm the cash on your custodian statement and that fees match what you were quoted.</li>
<li>For a distribution, keep your Form 1099-R and give it to your tax preparer.</li>
<li>For in-kind coins, keep the FMV valuation as your cost basis record.</li>
<li>If you closed the account, confirm in writing that no further annual or storage fees will be billed.</li>
</ul>`,
  },
  {
    heading: "Can I sell my IRA gold back to the company I bought it from?",
    body: `<p>Yes, usually. Most gold IRA companies say they will buy back metal from their customers, and some advertise no fee for doing so - American Hartford Gold describes a "buyback commitment", Goldco a "highest buyback" pledge, and Augusta Precious Metals advertises a no-fee lifetime buyback (all as reported). But none of these is a legal guarantee to buy at a set price; American Hartford Gold says it cannot legally guarantee repurchase. You are also free to sell to any other dealer that works with IRA custodians. Either way, the sale goes through your custodian, and comparing two or three bids is the best way to make sure you get a fair price.</p>`,
  },
  {
    heading: "How long does it take to liquidate a gold IRA?",
    body: `<p>As a rough guide, a sale of common bullion with the cash staying in the IRA often takes about one to two weeks, and a sale with a cash distribution to your bank about one to three weeks. Moving the account to another custodian can take several weeks. These are approximate planning ranges, not guarantees: the time depends on your custodian's processing, the depository, shipping or internal transfer, the buyer's payment speed and holidays. The price is normally locked on the day you agree the trade, so the waiting period does not usually change what you receive.</p>`,
  },
  {
    heading: "Do I pay taxes when I sell gold in my IRA?",
    body: `<p>Not when you sell inside the IRA. Selling metal and keeping the cash in the account is not a taxable event. Tax applies when money or metal is distributed to you. From a traditional IRA, distributions are generally taxed as ordinary income, plus a 10% additional tax if you are under 59½ and no exception applies. Qualified Roth IRA distributions are generally tax-free. The 28% collectibles rate does not apply to IRA distributions; it applies to gold you own outside an IRA. See IRS Publication 590-B and ask a tax professional about your own situation.</p>`,
  },
  {
    heading: "Can I take physical gold out of my IRA?",
    body: `<p>Yes, through an in-kind distribution. The custodian ships the coins or bars to you and reports their fair market value on Form 1099-R. From a traditional IRA, that value is generally taxable as income (and possibly subject to the 10% additional tax before 59½), so you will need cash from elsewhere to pay the tax. Expect custodian fees - for example $50 for an in-kind distribution plus shipping at cost plus $10 at Equity Trust. Once the metal is out, your cost basis is generally its value at distribution, and later long-term gains can be taxed at up to 28% as collectibles. What you cannot do is keep IRA gold at home while it is still in the IRA.</p>`,
  },
  {
    heading: "How do RMDs work with a gold IRA?",
    body: `<p>The same way as with any traditional IRA. RMDs start at 73 if you were born from 1951 to 1959, or 75 if born in 1960 or later. Divide the account's December 31 value by your Uniform Lifetime Table factor - for example, $200,000 ÷ 26.5 = about $7,547 at age 73. You can sell enough metal and withdraw the cash, take coins in kind worth at least that amount, or take the RMD from another of your own IRAs using aggregation. A missed RMD faces a 25% excise tax, reduced to 10% if corrected in time. Roth IRA owners have no lifetime RMDs.</p>`,
  },
  {
    heading: "What is the penalty for withdrawing from a gold IRA early?",
    body: `<p>Generally a 10% additional tax on the taxable amount if you are under 59½, on top of ordinary income tax. On a $20,000 traditional IRA withdrawal at age 55 in a 22% bracket, that is about $2,000 plus $4,400, or $6,400 in federal tax. Exceptions include death, disability, substantially equal periodic payments, certain medical expenses, a first-time home purchase (up to $10,000), qualified education expenses and several others listed in IRS Tax Topic 557. Selling inside the IRA or moving it by direct transfer is never penalized, because nothing is distributed.</p>`,
  },
  {
    heading: "The bottom line on selling gold from your IRA",
    body: `<p>Getting out of a gold IRA is straightforward once you separate the decisions:</p>
<ul>
<li><strong>Selling is not taxed; leaving the IRA is.</strong> You can sell, rebalance or move to another IRA by direct transfer without tax. Withdrawals from a traditional IRA are ordinary income, with a 10% additional tax before 59½ unless an exception applies.</li>
<li><strong>Your custodian executes; you choose the buyer.</strong> You are not obliged to sell back to the original dealer. Get two or three bids as a percentage of spot.</li>
<li><strong>The spread is the real cost.</strong> Common bullion like Gold Eagles typically sells back about 1-2% under spot, for a round trip of about 4-8%. Proof and "IRA-exclusive" coins can cost far more to exit.</li>
<li><strong>Custodian fees are small but add up on small sales.</strong> Equity Trust charges $10 per asset to liquidate (max $30), $100 per asset to distribute, $30 per wire and $250 to close.</li>
<li><strong>Plan RMDs ahead.</strong> Keep a cash cushion, consider in-kind or aggregation, and start well before December.</li>
<li><strong>Buyback promises are not guarantees,</strong> and exit-time pressure to swap into other coins is a red flag.</li>
</ul>
<p>Before any large withdrawal, have a CPA, enrolled agent or fee-only adviser who does not sell metals look at your whole picture. If you are still choosing where to hold gold, our <a href="/">gold IRA company rankings</a> compare buyback terms, fees and minimums side by side, and our <a href="/articles/gold-ira-rules">gold IRA rules guide</a> covers the regulations behind everything in this article.</p>
${DISCLAIMER}`,
  },
];
