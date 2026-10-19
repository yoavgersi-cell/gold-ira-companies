import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Gold IRA: The Complete Guide to Precious Metals IRAs (2026)".
// Scams and regulator warnings, selling/liquidating, who it suits, the FAQ
// (question headings become FAQPage schema) and the bottom line + disclaimer.

export const part5: ArticleSection[] = [
  {
    heading: "Gold IRA scams and regulator warnings",
    body: `<p>Retirement savers are prime targets for precious metals fraud. They have large balances in 401(k)s and IRAs, many are anxious about markets, and few know what a fair price for a coin is. US regulators have brought a series of cases in which companies sold metals to retirees at markups far beyond what they disclosed. Our full guide is <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a>; here are the essentials.</p>
<h3>What the regulators found</h3>
<table>
<thead><tr><th>Case</th><th>What was alleged or found</th><th>Outcome</th></tr></thead>
<tbody>
<tr><td>Red Rock Secured (CFTC, SEC, California, Hawaii; 2023)</td><td>Took about $61.8 million from roughly 950 customers, largely from IRAs, 401(k)s and TSPs; markups of up to about 130% while customers were told costs were far lower</td><td>Final judgment of about $76.4 million (SEC Litigation Release No. 25996)</td></tr>
<tr><td>Safeguard Metals (CFTC, SEC, state regulators)</td><td>SEC: average markup about 64% versus disclosed 4-33%. CFTC: silver-coin markups of 51% to over 70%. Targeted older investors</td><td>Final judgment in October 2025: about $25.6 million in restitution plus an equal civil penalty (about $51 million total)</td></tr>
<tr><td>Lear Capital (New York Attorney General)</td><td>Undisclosed commissions of up to 33% on more than $43 million of sales</td><td>About $6 million settlement; the company later went through a Chapter 11 plan that set aside about $5.5 million for investors</td></tr>
<tr><td>Goldline (Santa Monica, 2012)</td><td>Markups described as "upwards of 55%"</td><td>Up to $4.5 million in refunds plus an $800,000 fund; no admission of wrongdoing</td></tr>
</tbody>
</table>
<p>Sources: <a href="https://www.cftc.gov/PressRoom/PressReleases/8704-23" target="_blank" rel="noopener noreferrer">CFTC press release 8704-23</a> (Red Rock); SEC and CFTC releases on Safeguard Metals; New York Attorney General (Lear); Santa Monica City Attorney (Goldline). Amounts are as reported in those releases and in press coverage.</p>
<p>Notice the pattern. These were not fake companies that never delivered metal. Customers mostly got real coins. The fraud was in the <strong>price</strong> - often for "premium," "exclusive" or semi-numismatic coins whose value was hard to check.</p>
<h3>The joint regulator advisory</h3>
<p>In March 2024, the CFTC, FINRA and the North American Securities Administrators Association (NASAA) published a joint advisory, <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" target="_blank" rel="noopener noreferrer">"10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals"</a>. Its main themes:</p>
<ul>
<li>Find out the total cost, including markups, fees and commissions, before you buy.</li>
<li>Be skeptical of claims that metals are "safer" than other investments or that the government is about to seize your retirement savings.</li>
<li>Understand how and when you can sell, and at what price.</li>
<li>Check the background of the seller and its salespeople.</li>
<li>Be wary of urgent pressure to move money out of your 401(k), IRA or TSP.</li>
</ul>
<h3>Red flags at a glance</h3>
<table>
<thead><tr><th>What you hear</th><th>Why it is a problem</th></tr></thead>
<tbody>
<tr><td>"These coins are IRS-approved and we are an IRS-approved dealer."</td><td>The IRS does not approve dealers. The phrase is misleading.</td></tr>
<tr><td>"You can store your IRA gold at home."</td><td>Contradicts IRC 408(m) and McNulty; can make the whole value taxable.</td></tr>
<tr><td>"Bullion can be confiscated; only these special coins are safe."</td><td>A classic pitch used to sell high-markup coins.</td></tr>
<tr><td>"The price is only good for the next hour."</td><td>Pressure tactic. A fair offer survives an overnight pause.</td></tr>
<tr><td>"We don't disclose our markup."</td><td>You cannot judge value without it.</td></tr>
<tr><td>"Move all of your 401(k) - stocks are about to crash."</td><td>No one can time markets; concentration adds risk.</td></tr>
<tr><td>"Gold is guaranteed to go up / can't lose value."</td><td>False. Gold has fallen 29-70% in past drawdowns.</td></tr>
</tbody>
</table>
<h3>How to protect yourself</h3>
<ol>
<li>Get every price in writing as a percentage over spot before you sign.</li>
<li>Compare that price with published online-dealer premiums for the same product.</li>
<li>Stick to common bullion coins and bars.</li>
<li>Take at least a day before approving any purchase.</li>
<li>Search the company on the CFTC, SEC, FINRA BrokerCheck and your state regulator's site.</li>
<li>Involve a trusted family member, a fee-only adviser or a tax professional.</li>
</ol>`,
  },
  {
    heading: "How to sell or liquidate a gold IRA",
    body: `<p>At some point you will want - or be required - to turn some metal back into cash. Understanding the process before you buy helps you avoid unpleasant surprises.</p>
<h3>How a sale works</h3>
<ol>
<li><strong>Get a quote.</strong> Contact the dealer (often the one you bought from, but you can usually ask others through your custodian) for a buyback price.</li>
<li><strong>Instruct the custodian.</strong> You sign a sell direction form authorizing the sale at the agreed price.</li>
<li><strong>Release and verify.</strong> The depository releases the metal to the dealer, which checks it.</li>
<li><strong>Settlement.</strong> The dealer pays the custodian, and the cash lands in your IRA. It stays tax-sheltered until you withdraw it.</li>
<li><strong>Distribution (optional).</strong> If you want the cash, request a distribution; tax applies as described in the <a href="#gold-ira-taxes-and-required-minimum-distributions">tax section</a>.</li>
</ol>
<p>Many companies say the whole process takes several business days to about two weeks. Ask for a realistic timeline in advance, especially for RMDs due by December 31.</p>
<h3>What you will be paid</h3>
<table>
<thead><tr><th>Product</th><th>Typical buyback</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Common gold bullion coins (Eagles, Maples, Buffalos)</td><td>~1-2% under spot (some quotes 96-99% of spot)</td><td>Most liquid IRA holdings</td></tr>
<tr><td>Gold bars from known refiners</td><td>Close to spot, slightly below</td><td>Larger bars may get slightly lower bids</td></tr>
<tr><td>Silver Eagles</td><td>Below spot plus a small premium</td><td>Premiums swing with demand</td></tr>
<tr><td>Proof and "premium" coins</td><td>Often far below what you paid</td><td>The collector premium is rarely recovered</td></tr>
</tbody>
</table>
<p>A Gold Eagle bought and sold back at a competitive dealer costs roughly 4-8% round trip (GoldSilver, June 2026). At phone-sales companies with higher markups, the round trip can be considerably more.</p>
<h3>Buyback "guarantees"</h3>
<p>Many gold IRA companies advertise buyback programs, "no buy-back fees" or the "highest buyback" price. Read the fine print. These are usually policies or commitments, not legal guarantees, and the price offered is set at the time of sale. Even a "no fee" buyback includes a spread between the price you paid and the price you are offered. You are not obligated to sell back to the company that sold to you.</p>
<h3>Other exit routes</h3>
<ul>
<li><strong>Transfer to another custodian</strong> - you can move the metal (in kind) to a cheaper custodian without selling it, though both custodians may charge fees.</li>
<li><strong>In-kind distribution</strong> - take the metal itself and pay tax on its value.</li>
<li><strong>Partial liquidation</strong> - sell only what you need for an RMD or expense.</li>
<li><strong>Closing the account</strong> - expect a termination fee (Equity Trust, for example, charges $250 for a full termination).</li>
</ul>`,
  },
  {
    heading: "Who a gold IRA is (and isn't) right for",
    body: `<p>A gold IRA is a specialized tool. It suits some savers well and others poorly.</p>
<table>
<thead><tr><th>May fit if you...</th><th>Probably doesn't fit if you...</th></tr></thead>
<tbody>
<tr><td>Have an old 401(k) or IRA large enough that flat fees are a small percentage (often $25,000+)</td><td>Have less than ~$10,000 to invest, where fees eat a large share</td></tr>
<tr><td>Want a modest slice (often 5-10%) of physical metal as a diversifier</td><td>Want to put most of your retirement savings into one asset</td></tr>
<tr><td>Plan to hold for many years and can ride out a 30-45% drop</td><td>May need the money within a few years</td></tr>
<tr><td>Value owning specific coins or bars over fund shares</td><td>Just want gold exposure at the lowest cost (a gold ETF in your existing IRA is cheaper)</td></tr>
<tr><td>Will compare written prices and push back on markups</td><td>Feel uncomfortable negotiating or saying no to a salesperson</td></tr>
<tr><td>Have other income or assets to cover living costs and RMDs</td><td>Depend on this account for regular monthly income</td></tr>
</tbody>
</table>
<h3>Questions to ask yourself</h3>
<ul>
<li>Why do I want gold - and would I be comfortable if it fell 30% next year?</li>
<li>Have I compared a gold IRA with a low-cost gold ETF in my existing IRA?</li>
<li>Do I know the exact markup I would pay?</li>
<li>Am I being rushed by fear or a deadline?</li>
<li>Have I talked it through with someone who is not selling me anything?</li>
</ul>
<p>If you are unsure about any of these, a session with a fee-only financial planner (who is paid by you, not by commissions) costs a fraction of a single bad markup.</p>`,
  },
  {
    heading: "Is a gold IRA safe?",
    body: `<p>It depends what you mean by "safe." A properly set up gold IRA is <strong>structurally safe</strong>: the metal is held by a regulated custodian at a secure, insured, audited depository, in your IRA's name. Depositories carry their own commercial insurance, and your metal is not the custodian's property if the custodian has financial trouble - though recovering it could still take time.</p>
<p>But a gold IRA is <strong>not safe from price risk</strong>. Gold fell about 29% between January and June 2026, about 45% from 2011 to 2015 and about 70% from 1980 to 1999. The bigger practical dangers are overpaying (markups of 50-130% in enforcement cases) and breaking the rules (home storage, ineligible coins). Avoid those and the main remaining risk is the gold price itself.</p>`,
  },
  {
    heading: "Can I put gold I already own into an IRA?",
    body: `<p><strong>No.</strong> IRAs accept contributions only in cash. And you cannot sell your personal gold to your own IRA, because a sale between you and your IRA is a <strong>prohibited transaction</strong> under the tax code. That can disqualify the IRA.</p>
<p>What you can do is sell your coins on the open market (paying any collectibles tax on the gain), contribute cash up to the annual limit, and have the IRA buy eligible metal from a dealer. Keep in mind the 2026 limit is $7,500, or $8,600 at age 50+.</p>`,
  },
  {
    heading: "What is the minimum to open a gold IRA?",
    body: `<p>There is <strong>no legal minimum</strong>. Minimums are set by the companies and custodians. Among the companies we review, reported minimums in October 2026 range from about <strong>$10,000</strong> (American Hartford Gold) to about <strong>$25,000</strong> (Goldco, "generally") and about <strong>$50,000</strong> (Augusta Precious Metals). American Gold and Silver Group does not publish one. Some custodians also require a small cash balance (uDirect IRA, for example, lists a $500 minimum balance).</p>
<p>Even where small accounts are allowed, flat yearly fees of $200-$300 are a much bigger percentage of a $5,000 account than a $100,000 account. Run your own numbers in the <a href="/gold-ira-fee-calculator">fee calculator</a>.</p>`,
  },
  {
    heading: "Is a gold IRA insured by the FDIC or SIPC?",
    body: `<p><strong>No.</strong> FDIC insurance covers bank deposits, not precious metals. SIPC protects customers of failed brokerage firms for missing securities and cash, and does not cover physical metal held by a self-directed IRA custodian. Neither protects you against a fall in the gold price.</p>
<p>The protection you do have comes from the depository's private insurance against theft or loss of the metal, the custodian's legal duty to hold assets for your benefit, and regular audits. Ask your custodian and depository for the name of the insurer, the coverage terms and how recently the vault was audited.</p>`,
  },
  {
    heading: "Can I take physical possession of my IRA gold?",
    body: `<p><strong>Only by taking it out of the IRA.</strong> You can request an <strong>in-kind distribution</strong>, and the custodian will ship the coins or bars to you. That counts as a withdrawal: the fair market value is taxable income for a traditional IRA, plus the 10% additional tax if you are under 59&frac12; (a qualified Roth distribution is tax-free). Custodians charge a fee plus insured shipping.</p>
<p>What you cannot do is keep IRA-owned metal at home while it remains in the IRA. The Tax Court treated that as a taxable distribution in <em>McNulty v. Commissioner</em> (2021). See <a href="/articles/can-you-store-ira-gold-at-home">Can You Store IRA Gold at Home?</a></p>`,
  },
  {
    heading: "Is a gold IRA a good idea in 2026?",
    body: `<p>Nobody can tell you whether gold will rise or fall from here. As of October 19, 2026, gold was around $4,170 - about 25% below January's record of roughly $5,595, but still far above where it traded just two years earlier (about $2,610-$2,624 at the end of 2024). Bulls point to central-bank buying and inflation risk. Bears point to how far and fast the price rose in 2024-2025 and how sharply it fell in early 2026. Published 2026 forecasts ranged widely, which tells you how uncertain the outlook is.</p>
<p>A more useful question is whether a <strong>modest, low-cost</strong> allocation to physical gold fits your plan regardless of next year's price. If you can buy common bullion at a reasonable, written markup, keep it to a slice you could watch fall 30% without selling, and hold it for many years, a gold IRA can play a diversifying role. If you would be buying out of fear, paying high markups or concentrating your savings, it is probably not a good idea in 2026 or any other year. Talk it through with a fee-only adviser before you decide.</p>`,
  },
  {
    heading: "The bottom line on gold IRAs",
    body: `<p>A gold IRA is a legitimate, legal way to hold physical bullion with tax-advantaged retirement money. It is also more expensive, more complicated and more exposed to sales abuse than most other retirement investments. The people who do well with one tend to follow a few simple rules:</p>
<ol>
<li><strong>Keep it a slice, not the pie.</strong> Commonly discussed ranges are around 5-10% of a portfolio. Size it so a 30-45% gold drop would not derail your retirement.</li>
<li><strong>Know your markup.</strong> Get the premium over spot in writing for every product. It usually matters more than the yearly fees.</li>
<li><strong>Buy plain bullion.</strong> Eagles, Maples, Buffalos, Philharmonics and bars from known refiners. Skip proofs and "rare" coins.</li>
<li><strong>Move money the safe way.</strong> Use trustee-to-trustee transfers and direct rollovers, not 60-day checks.</li>
<li><strong>Follow the storage rules.</strong> The metal stays with the custodian and depository - never at home while it is in the IRA.</li>
<li><strong>Plan for RMDs and withdrawals.</strong> Know how you will meet them before you reach 73 or 75, or consider a Roth.</li>
<li><strong>Compare the alternatives.</strong> A low-cost gold ETF in your existing IRA may give you the exposure you want for a fraction of the cost.</li>
<li><strong>Get independent advice.</strong> A fee-only adviser or tax professional can check the plan against your full situation.</li>
</ol>
<h3>Where to go next</h3>
<table>
<thead><tr><th>If you want to...</th><th>Read</th></tr></thead>
<tbody>
<tr><td>Understand the basics in brief</td><td><a href="/articles/what-is-a-gold-ira">What Is a Gold IRA?</a></td></tr>
<tr><td>Move an old 401(k), IRA or TSP</td><td><a href="/articles/gold-ira-rollover">Gold IRA rollover guide</a>, <a href="/articles/401k-to-gold-ira-rollover">401(k) rollover</a>, <a href="/articles/tsp-to-gold-ira-rollover">TSP rollover</a></td></tr>
<tr><td>Understand every fee</td><td><a href="/articles/gold-ira-fees">Gold IRA fees guide</a> and the <a href="/gold-ira-fee-calculator">fee calculator</a></td></tr>
<tr><td>Check which coins qualify</td><td><a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a></td></tr>
<tr><td>Plan taxes and RMDs</td><td><a href="/articles/gold-ira-taxes-and-rmds">Gold IRA taxes and RMDs</a>, <a href="/articles/roth-gold-ira">Roth gold IRA</a></td></tr>
<tr><td>Compare gold IRAs with ETFs</td><td><a href="/articles/gold-ira-vs-gold-etf">Gold IRA vs gold ETF</a></td></tr>
<tr><td>Decide how much to hold</td><td><a href="/articles/how-much-gold-in-retirement-portfolio">How much gold in a retirement portfolio</a></td></tr>
<tr><td>Consider silver</td><td><a href="/articles/silver-ira-guide">Silver IRA guide</a></td></tr>
<tr><td>Avoid scams and storage traps</td><td><a href="/articles/gold-ira-scams-red-flags">Gold IRA scams and red flags</a>, <a href="/articles/can-you-store-ira-gold-at-home">Can you store IRA gold at home?</a></td></tr>
<tr><td>Compare companies</td><td><a href="/">Our rankings</a>, <a href="/how-we-rank">how we rank</a>, and our reviews of <a href="/reviews/augusta-precious-metals">Augusta</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></td></tr>
</tbody>
</table>
<p>Gold has been money for thousands of years, and it can still play a sensible role in a modern retirement plan. Just make sure you are buying it for the right reasons, in the right amount, at a fair price.</p>
${DISCLAIMER}`,
  },
];
