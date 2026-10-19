import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Gold IRA Rollover: The Complete 2026 Guide".
// Company comparison, getting money out later, the FAQ block (question-shaped
// headings feed FAQPage schema) and the bottom line.

export const part5: ArticleSection[] = [
  {
    heading: "How the gold IRA companies compare for rollovers",
    body: `<p>Every dealer below can help with the paperwork for a 401(k), IRA or TSP rollover, and all of them work through third-party custodians and depositories. Where they differ for rollover purposes is mainly the <strong>minimum</strong>, the <strong>promotions</strong>, how much they publish, and what other customers report. The figures are third-party-reported snapshots as of <strong>October 2026</strong>; dealers change terms often, so confirm everything in writing before you move money.</p>
<table>
<thead><tr><th>Company</th><th>IRA minimum (reported)</th><th>Setup / annual fees (reported)</th><th>Trustpilot (Oct 19, 2026)</th><th>Advertised promotion</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-hartford-gold">American Hartford Gold</a></td><td>About $10,000</td><td>About $230 setup; about $225-$275 a year</td><td>4.9 from 1,947 reviews</td><td>Up to $25k in free silver on qualifying orders; storage waived 1 year at $50k+, 3 years at $100k+ (reported)</td></tr>
<tr><td><a href="/reviews/goldco">Goldco</a></td><td>Generally $25,000</td><td>About $50 setup; about $225-$275 a year all-in</td><td>4.4 from 1,791 reviews</td><td>Up to 10% bonus silver; up to 3 years of fee waivers for eligible accounts</td></tr>
<tr><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a></td><td>$50,000</td><td>About $50 setup reported (sources vary); about $225-$275 a year</td><td>4.8 from 376 reviews</td><td>Fee waivers on qualifying accounts (terms disclosed on a call)</td></tr>
<tr><td><a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></td><td>Not published</td><td>Set by the custodian - ask for a quote</td><td>Listed as "American Gold Group"; 0 reviews</td><td>Up to $15,000 in free silver; 7-day refund; no buy-back fees (advertised)</td></tr>
</tbody>
</table>
<p class="small"><em>Reported figures from third-party sources and company advertising, October 2026. None of the four publishes its product spreads. Not an endorsement; verify on each company's site, BBB.org and Trustpilot.</em></p>
<h3>What stands out for rollovers</h3>
<ul>
<li><strong>Smaller rollovers:</strong> American Hartford Gold's reported $10,000 minimum is the lowest of the four. Remember the flat-fee math in our <a href="#partial-rollovers-and-deciding-how-much-to-move">partial rollover section</a> - at $10,000, annual fees alone can exceed 3% a year.</li>
<li><strong>Mid-size rollovers ($25,000-$50,000):</strong> Goldco's reported minimum is generally $25,000, and it advertises bonus silver and multi-year fee waivers. Its Trustpilot score (4.4) is lower than the other two established firms here, and Finder reported that its live chat would not quote fees and pushed for a sales call.</li>
<li><strong>Larger rollovers ($50,000+):</strong> Augusta Precious Metals requires $50,000 and positions itself for savers with $100,000 or more, with an education-led process. It advertises a no-fee lifetime buyback, but sources say it does not offer a written guarantee of repurchase price.</li>
<li><strong>American Gold and Silver Group:</strong> it advertises offers but publishes little else, and its Trustpilot listing had no reviews as of October 19, 2026. Ask for the minimum, custodian, fees and spreads in writing before deciding.</li>
</ul>
<p>For head-to-head comparisons, see <a href="/american-hartford-gold-vs-goldco">American Hartford Gold vs Goldco</a>, <a href="/augusta-vs-goldco">Augusta vs Goldco</a> and <a href="/augusta-vs-american-hartford-gold">Augusta vs American Hartford Gold</a>. Our overall <a href="/">gold IRA company rankings</a> weigh fees, transparency, complaints and buyback terms; <a href="/how-we-rank">how we rank</a> explains the method.</p>
<h3>Whichever company you call</h3>
<p>The company matters less than the quote. Two buyers at the same dealer can pay very different spreads depending on the products they accept. Bring the <a href="#sales-tactics-and-red-flags-during-a-rollover">seven written questions</a> above to every call, compare at least two quotes for the same products, and remember that you choose the custodian, the products and the amount.</p>`,
  },
  {
    heading: "Getting out later: selling, rolling back, in-kind distributions and RMDs",
    body: `<p>Before you move money in, it is worth knowing exactly how it comes back out. There are four routes, and each has different costs and tax effects.</p>
<h3>1. Selling metal inside the IRA</h3>
<p>You can ask your custodian to sell some or all of your metal at any time. The sale proceeds stay in the IRA as cash, so there is <strong>no tax</strong> on the sale itself - tax applies only when money is distributed from a traditional IRA. Practical points:</p>
<ul>
<li>The custodian sells to a dealer - often the one you bought from, but you can usually ask for bids from others.</li>
<li>Dealers typically bid around 1-2% under spot for common sovereign coins. A full round trip on a Gold Eagle (buy then sell back) has been estimated at about 4-8% at competitive retail dealers in 2026; phone-based IRA dealers can be wider.</li>
<li>Custodian fees apply. Equity Trust, for example, lists a metals liquidation fee of $10 per asset (maximum $30).</li>
</ul>
<h3>2. Rolling back to a regular IRA or 401(k)</h3>
<p>If you decide gold is no longer for you, you can sell the metal inside the IRA and then do a <strong>trustee-to-trustee transfer</strong> of the cash to an ordinary IRA at a brokerage - tax-free and not limited by the once-per-12-months rule. Many 401(k) plans also accept roll-ins from IRAs, though they will accept cash only, not metal. Expect a termination fee (Equity Trust lists $250 for a full termination, $100 per asset for a partial). You can also move the metal itself, in kind, to a different self-directed IRA custodian if you want to change custodians but keep the metal (Equity Trust lists $50 per in-kind transfer).</p>
<h3>3. Taking a distribution in kind</h3>
<p>You can have the actual coins or bars shipped to you as a distribution. From a traditional gold IRA:</p>
<ul>
<li>The <strong>fair market value</strong> of the metal on the distribution date is taxable as ordinary income.</li>
<li>If you are under 59½, the 10% additional tax applies unless an exception does.</li>
<li>That value becomes your cost basis outside the IRA. If you later sell the metal at a gain, the gain is taxed under the collectibles rules, at long-term rates up to 28%.</li>
<li>Fees apply, such as an in-kind distribution fee and shipping and insurance (Equity Trust lists shipping at cost plus $10, $50 minimum).</li>
</ul>
<p>From a Roth gold IRA, a qualified in-kind distribution is tax-free.</p>
<h3>4. Required minimum distributions</h3>
<p>A traditional gold IRA is subject to RMDs like any traditional IRA: from age <strong>73</strong> if you were born 1951-1959, and <strong>75</strong> if you were born in 1960 or later. Roth IRAs have no RMDs for the original owner. Options for meeting an RMD from a gold IRA:</p>
<table>
<thead><tr><th>Method</th><th>How it works</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Sell metal for cash</td><td>Custodian sells enough metal to cover the RMD and distributes the cash</td><td>Selling in a down market; liquidation fees</td></tr>
<tr><td>In-kind distribution</td><td>Coins or bars worth the RMD amount are shipped to you</td><td>Tax is due in cash even though you received metal; shipping fees</td></tr>
<tr><td>Take it from another IRA</td><td>RMDs from multiple traditional IRAs can be totaled and taken from any one of them</td><td>Does not work with 401(k) RMDs, which must come from each plan</td></tr>
<tr><td>Hold cash in the gold IRA</td><td>Keep a small cash balance to cover RMDs and fees</td><td>Cash earns little at some custodians</td></tr>
</tbody>
</table>
<p>The ability to take all your traditional IRA RMDs from a single, more liquid IRA is one of the most useful planning tools here: many people leave their gold IRA untouched and meet the total RMD from a brokerage IRA. Our <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs guide</a> has worked examples, and <a href="https://www.irs.gov/publications/p590b" rel="noopener" target="_blank">IRS Publication 590-B</a> is the official reference.</p>`,
  },
  {
    heading: "Is a gold IRA rollover taxable?",
    body: `<p><strong>No, not if it is done correctly.</strong> A direct rollover from a 401(k), 403(b), 457(b), TSP or pension, or a trustee-to-trustee transfer from another IRA, is not taxable and carries no penalty, as long as pre-tax money goes into a traditional IRA and Roth money goes into a Roth IRA.</p>
<p>A rollover can become taxable when:</p>
<ul>
<li>an employer plan pays you a check and you do not redeposit the full amount, including the 20% withheld, within 60 days;</li>
<li>you miss the 60-day deadline on any indirect rollover;</li>
<li>you do a second IRA-to-IRA indirect rollover within 12 months;</li>
<li>you convert pre-tax money to a Roth (taxable by design); or</li>
<li>the IRA buys ineligible metal or you store the metal at home.</li>
</ul>
<p>Even a tax-free rollover is reported: the old plan issues a Form 1099-R and the new custodian a Form 5498, and you show the rollover on your return. See our <a href="/articles/gold-ira-taxes-and-rmds">gold IRA tax guide</a>.</p>`,
  },
  {
    heading: "Can I roll over an old 401(k) from a former employer?",
    body: `<p><strong>Yes.</strong> Once you have left an employer, you can generally roll that employer's 401(k) into a gold IRA at any age, in whole or in part. Request a <strong>direct rollover</strong> payable to your new custodian for your benefit, so no tax is withheld. If the old plan was taken over by another company or the employer went out of business, the plan's record-keeper or the plan's successor still holds the money - your old statements, or the Department of Labor's retirement savings lost-and-found tools, can help you track it down.</p>
<p>Before you move it, check two things: whether you might need the money between ages 55 and 59½ (the 401(k) "rule of 55" may give penalty-free access that an IRA does not), and whether the plan offers unusually good options, such as very low-cost funds. Our <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover guide</a> has the step-by-step details.</p>`,
  },
  {
    heading: "Is there a minimum to roll over?",
    body: `<p><strong>The IRS has no minimum.</strong> You can roll over any amount. Minimums come from the dealers and, sometimes, the custodians. As reported in October 2026, American Hartford Gold's IRA minimum is about $10,000, Goldco's is generally $25,000 and Augusta Precious Metals' is $50,000; American Gold and Silver Group does not publish a minimum. Some custodians also have small minimum cash balance requirements.</p>
<p>The more useful question is the <em>practical</em> minimum. Because gold IRA fees are mostly flat, a small account pays a much bigger share of its value each year - roughly 3.4% a year at $10,000 versus about 0.6% at $100,000 in our <a href="#partial-rollovers-and-deciding-how-much-to-move">Equity Trust illustration</a>. Try your own figures in the <a href="/gold-ira-fee-calculator">fee calculator</a>.</p>`,
  },
  {
    heading: "Can I do a gold IRA rollover myself?",
    body: `<p><strong>Yes - in the sense that you do not need a dealer to manage it.</strong> You can open a self-directed IRA directly with a custodian that allows metals, request the transfer or direct rollover yourself, choose a dealer (including an online bullion retailer that sells to IRAs) and sign the purchase direction. Some people do exactly this to keep spreads low.</p>
<p>What you <strong>cannot</strong> do is hold the money or the metal yourself. The custodian must receive the money and pay the dealer, and the metal must go to an approved depository - not to your home (see <a href="#storage-rules-and-why-home-storage-fails">storage rules</a>). The "do it yourself" home-storage LLC structures some promoters sell were rejected by the Tax Court in <em>McNulty</em>.</p>
<p>If you go the do-it-yourself route, confirm with the custodian which dealers it can pay and which depositories it uses before you buy anything, and get the dealer's price in writing.</p>`,
  },
  {
    heading: "Does a gold IRA rollover affect RMDs?",
    body: `<p><strong>The rollover itself does not change your RMDs</strong> - the money is still in a traditional IRA, and RMDs start at the same age (73 if born 1951-1959, 75 if born 1960 or later). Two things do change in practice:</p>
<ul>
<li><strong>You cannot roll over an RMD.</strong> If you are already at RMD age, take the year's required amount before you roll the rest.</li>
<li><strong>Meeting RMDs needs planning,</strong> because metal must be sold or distributed in kind. You can usually take the total RMD for all your traditional IRAs from one of them, so many people meet it from a non-gold IRA. Note that 401(k) RMDs cannot be combined with IRA RMDs.</li>
</ul>
<p>A <strong>Roth</strong> gold IRA has no RMDs for the owner, and since 2024 Roth 401(k)s do not either. Heirs who inherit a gold IRA have their own distribution rules, usually including the 10-year rule for non-spouse beneficiaries. Details are in our <a href="/articles/gold-ira-taxes-and-rmds">taxes and RMDs guide</a>.</p>`,
  },
  {
    heading: "How long does a gold IRA rollover take?",
    body: `<p><strong>Typically about two to six weeks from start to metal in the vault</strong>, though this is an approximate range, not a guarantee. An IRA-to-IRA transfer is often the quickest (roughly one to three weeks for the money to arrive); 401(k), 403(b) and TSP rollovers commonly take two to six weeks; pension lump sums can take one to three months because of election windows and spousal paperwork. After the money arrives, choosing and pricing metals can take a day or two, and delivery to the depository about one to three weeks.</p>
<p>The biggest delays come from the old plan: mailed checks, medallion signature guarantees, spousal consent and blackout periods. See the full <a href="#how-long-each-type-of-rollover-takes">timeline table</a> for each account type.</p>`,
  },
  {
    heading: "The bottom line on gold IRA rollovers",
    body: `<p>A gold IRA rollover is, mechanically, one of the simpler things you can do with retirement money: open a self-directed IRA, ask your old plan to send the money directly to the new custodian, buy eligible bullion, and let an approved depository hold it. Done that way, it is tax-free and penalty-free.</p>
<p>The risks are not in the mechanics but in the choices around them:</p>
<ul>
<li><strong>Use a direct rollover or trustee-to-trustee transfer.</strong> Never accept a check payable to you from a 401(k), 403(b), 457(b) or TSP.</li>
<li><strong>Decide how much in advance.</strong> Move only the share you have decided on - gold pays no income and has had drawdowns of roughly 29% to 70%.</li>
<li><strong>Know your timing rules.</strong> In-service options, the SIMPLE two-year rule, the rule of 55 and 457(b) access, and RMDs can all change the right answer.</li>
<li><strong>Buy plain, eligible bullion</strong> and get every spread in writing. In our illustration, the difference between a 5% and a 15% spread on $100,000 was $10,000 - more than ten years of account fees.</li>
<li><strong>Store it properly.</strong> Home storage of IRA metal is a taxable distribution.</li>
<li><strong>Plan the exit</strong> - selling, rolling back, in-kind distributions and RMDs - before you go in.</li>
<li><strong>Get qualified help.</strong> A tax professional or fee-only adviser who does not sell metals can review the plan in an hour or two.</li>
</ul>
<p>For the bigger picture, read our <a href="/articles/gold-ira">complete guide to gold IRAs</a> and <a href="/articles/gold-ira-fees">gold IRA fees guide</a>. When you are ready to compare companies, start with our <a href="/">rankings</a> and the individual reviews of <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>.</p>
${DISCLAIMER}`,
  },
];
