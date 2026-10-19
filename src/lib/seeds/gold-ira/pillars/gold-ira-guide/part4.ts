import type { ArticleSection } from "@/lib/config";

// Part 4 of "Gold IRA: The Complete Guide to Precious Metals IRAs (2026)".
// Gold IRA vs other ways to own gold, allocation, opening in 8 steps and
// how to choose a company (with a neutral, reported-figures snapshot).

export const part4: ArticleSection[] = [
  {
    heading: "Gold IRA vs physical gold vs ETFs vs miners vs 401(k) gold funds",
    body: `<p>A gold IRA is only one way to get gold exposure. For many people, a cheaper or simpler route makes more sense. Here is how the main options compare.</p>
<table>
<thead><tr><th>Option</th><th>What you own</th><th>Typical costs</th><th>Tax on gains</th><th>Liquidity</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Gold IRA</td><td>Physical bullion in a vault, owned by your IRA</td><td>Markup ~2-10%+; $200-$700+/yr fees; sell spread</td><td>Taxed as IRA withdrawals (deferred or tax-free in a Roth); no 28% rate</td><td>Days</td><td>Rolling over old 401(k)/IRA money into physical metal</td></tr>
<tr><td>Physical gold at home</td><td>Coins or bars you hold yourself</td><td>Premium ~2-6% online; safe and insurance</td><td>Collectibles: up to 28% long-term</td><td>Same day at a local dealer, at a discount to spot</td><td>Holding metal outside the financial system</td></tr>
<tr><td>Gold ETF in an IRA or brokerage account</td><td>Shares of a trust that holds vaulted gold</td><td>Expense ratio 0.09%-0.40%/yr; normal trading costs</td><td>Inside IRA: IRA rules. Outside: grantor-trust ETFs like GLD taxed as collectibles, up to 28%</td><td>Seconds, during market hours</td><td>Low-cost gold exposure in an existing IRA</td></tr>
<tr><td>Gold mining stocks or funds</td><td>Shares in mining companies</td><td>GDX ~0.51%/yr</td><td>Outside IRA: normal stock rates (max 20% long-term)</td><td>Seconds</td><td>People comfortable with stock-like risk on top of gold risk</td></tr>
<tr><td>Gold fund in a 401(k)</td><td>Whatever the plan offers - often a precious-metals or commodity fund, or ETFs via a brokerage window</td><td>Fund expense ratio</td><td>Plan rules (tax-deferred)</td><td>Daily</td><td>Workers who want a little gold without leaving the plan</td></tr>
</tbody>
</table>
<h3>Gold ETF expense ratios (verify before investing)</h3>
<table>
<thead><tr><th>Fund</th><th>Ticker</th><th>Expense ratio</th><th>Cost per year on $100,000</th></tr></thead>
<tbody>
<tr><td>SPDR Gold MiniShares</td><td>GLDM</td><td>0.10%</td><td>$100</td></tr>
<tr><td>iShares Gold Trust Micro</td><td>IAUM</td><td>0.09%</td><td>$90</td></tr>
<tr><td>abrdn Physical Gold Shares ETF</td><td>SGOL</td><td>0.17%</td><td>$170</td></tr>
<tr><td>Goldman Sachs Physical Gold ETF</td><td>AAAU</td><td>0.18%</td><td>$180</td></tr>
<tr><td>iShares Gold Trust</td><td>IAU</td><td>0.25%</td><td>$250</td></tr>
<tr><td>SPDR Gold Shares</td><td>GLD</td><td>0.40%</td><td>$400</td></tr>
<tr><td>iShares Silver Trust</td><td>SLV</td><td>0.50%</td><td>$500</td></tr>
<tr><td>VanEck Gold Miners (miners, not metal)</td><td>GDX</td><td>0.51%</td><td>$510</td></tr>
</tbody>
</table>
<p>Compare that with a gold IRA: on $100,000, yearly fees of roughly $265-$610 at the custodians in our <a href="#what-does-a-gold-ira-cost">cost section</a>, plus a one-time markup that may be several thousand dollars. A low-cost ETF held in an ordinary IRA has no markup and can be sold in seconds.</p>
<h3>So why would anyone choose a gold IRA over an ETF?</h3>
<ul>
<li><strong>Direct ownership.</strong> Your IRA owns specific coins or bars, not shares in a trust. Some people value that independence from the fund industry.</li>
<li><strong>Option to take the metal.</strong> You can take an in-kind distribution of actual coins later. You cannot do that with most ETFs.</li>
<li><strong>Psychology.</strong> Some savers are less likely to panic-sell physical metal than a ticker symbol.</li>
</ul>
<p>Those are legitimate preferences. They just come at a price. Our detailed comparison is in <a href="/articles/gold-ira-vs-gold-etf">Gold IRA vs Gold ETF</a>.</p>
<h3>Gold at home: a separate decision</h3>
<p>Buying a few coins to keep at home with after-tax money is perfectly legal and needs no custodian. Just budget for a good safe, check your insurance limits, and remember that the gain will be taxed at collectibles rates when you sell. Do not confuse this with an IRA - keeping IRA metal at home is what got the taxpayer in McNulty into trouble.</p>`,
  },
  {
    heading: "How much of your retirement should be in gold?",
    body: `<p>There is no single right answer, and we cannot give personal advice. What we can do is show you the ranges commonly discussed and the factors that should push your number up or down. A fee-only financial planner can apply them to your situation.</p>
<h3>Commonly cited ranges</h3>
<table>
<thead><tr><th>Approach</th><th>Typical gold share of the total portfolio</th><th>Who tends to suggest it</th></tr></thead>
<tbody>
<tr><td>None or minimal</td><td>0-2%</td><td>Many index-fund advocates, who see no expected return from a non-yielding asset</td></tr>
<tr><td>Modest diversifier</td><td>~5-10%</td><td>The most commonly cited range among financial commentators</td></tr>
<tr><td>Larger hedge</td><td>~10-15%</td><td>Investors more worried about inflation or currency risk</td></tr>
<tr><td>Concentrated</td><td>20%+</td><td>Rarely suggested by mainstream planners; often suggested by people selling gold</td></tr>
</tbody>
</table>
<p>These are general ranges from published commentary, not recommendations. Be wary of any salesperson who suggests moving most of your retirement savings into metals.</p>
<h3>What a gold drop does to the whole portfolio</h3>
<p>Here is a simple way to size it. Take a $500,000 retirement portfolio and imagine gold falls 30% - roughly what happened between January and June 2026.</p>
<table>
<thead><tr><th>Gold share</th><th>Amount in gold</th><th>Loss from a 30% gold drop</th><th>Effect on the whole portfolio</th></tr></thead>
<tbody>
<tr><td>5%</td><td>$25,000</td><td>$7,500</td><td>-1.5%</td></tr>
<tr><td>10%</td><td>$50,000</td><td>$15,000</td><td>-3.0%</td></tr>
<tr><td>15%</td><td>$75,000</td><td>$22,500</td><td>-4.5%</td></tr>
<tr><td>50%</td><td>$250,000</td><td>$75,000</td><td>-15.0%</td></tr>
</tbody>
</table>
<p>At 5-10%, a severe gold slump is uncomfortable but manageable. At 50%, it can derail a retirement plan.</p>
<h3>Factors that matter</h3>
<ul>
<li><strong>Time horizon and withdrawals.</strong> If you need regular income from the account soon, a large volatile holding with no yield is harder to justify.</li>
<li><strong>Your other assets.</strong> A pension, Social Security and rental income all reduce how much your portfolio must do - and may change how much risk you can take.</li>
<li><strong>Costs.</strong> A small gold IRA pays the same flat fees as a large one. Below roughly $10,000-$25,000, flat fees take a big bite; a low-cost ETF may fit better.</li>
<li><strong>Your temperament.</strong> If a 30% drop would cause you to sell in a panic, hold less.</li>
<li><strong>Existing exposure.</strong> Count any gold ETFs, mining stocks or coins you already own.</li>
</ul>
<p>For a deeper look at the research and the arguments on each side, read <a href="/articles/how-much-gold-in-retirement-portfolio">How Much Gold Should Be in Your Retirement Portfolio?</a></p>`,
  },
  {
    heading: "How to open a gold IRA in 8 steps",
    body: `<p>Opening a gold IRA usually takes one to three weeks from start to finish, most of it waiting for your old provider to release the money. Here is the process in order.</p>
<ol>
<li><strong>Decide whether a gold IRA fits.</strong> Read the <a href="#cons-and-risks-of-a-gold-ira">risks</a>, decide on a rough allocation, and consider talking to a fee-only adviser or tax professional - especially if you are near RMD age or considering a Roth conversion.</li>
<li><strong>Choose the account type.</strong> Traditional for pre-tax rollovers; Roth for Roth money or new Roth contributions; SEP or SIMPLE for business plans. The type must match the money you are moving.</li>
<li><strong>Choose a dealer and a custodian.</strong> Use the checklist in the <a href="#how-to-choose-a-gold-ira-company">next section</a>. Ask for the custodian's full fee schedule and the dealer's written markup on the exact products you plan to buy. Remember you can choose a custodian yourself.</li>
<li><strong>Open the self-directed IRA.</strong> Complete the custodian's application (often online), name beneficiaries, and choose commingled or segregated storage and the depository.</li>
<li><strong>Fund the account.</strong> Request a trustee-to-trustee transfer or a direct rollover from your current IRA or plan, or make a new contribution. Avoid the 60-day route when you can. Details are in our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a>.</li>
<li><strong>Pick your metals.</strong> Choose IRA-eligible bullion (see the <a href="/articles/irs-approved-precious-metals">eligible metals list</a>). Get a written invoice showing product, quantity, price per unit, spot price at the time and the total. Decline proofs and "rare" coins unless you fully understand their markup.</li>
<li><strong>Approve the purchase.</strong> The custodian pays the dealer from your IRA cash and the dealer ships the metal directly to the depository. You sign a buy direction form or approve the trade with the custodian.</li>
<li><strong>Confirm delivery and keep records.</strong> Check that the depository has received and logged your metal, and that your first custodian statement lists the exact items. Save every confirmation. Set a calendar reminder to review fees and holdings each year.</li>
</ol>
<h3>How long each stage takes (typical)</h3>
<table>
<thead><tr><th>Stage</th><th>Typical time</th></tr></thead>
<tbody>
<tr><td>Opening the self-directed IRA</td><td>1-3 business days</td></tr>
<tr><td>Transfer from another IRA</td><td>~1-2 weeks</td></tr>
<tr><td>Direct rollover from a 401(k) or TSP</td><td>~1-4 weeks, depending on the plan</td></tr>
<tr><td>Metal purchase and shipping to the depository</td><td>Several business days to ~2 weeks</td></tr>
</tbody>
</table>
<p>Times are general industry estimates and vary by provider. Some companies advertise "same-day" account opening; that refers to the paperwork, not the arrival of your money or metal.</p>
<h3>Price lock: know when your price is set</h3>
<p>Gold prices move all day. Ask exactly when your price is "locked" - at the moment you verbally agree on the phone, or when funds arrive. Ask for the confirmation in writing that shows the spot price at the time of the lock. This one question removes a lot of room for confusion later.</p>`,
  },
  {
    heading: "How to choose a gold IRA company",
    body: `<p>The company you choose matters more than almost any other decision, because it sets the price you pay for the metal. We explain our full scoring approach on <a href="/how-we-rank">how we rank gold IRA companies</a>, and our current rankings are on the <a href="/">homepage</a>. Whatever company you consider, run it through this checklist.</p>
<h3>Checklist: 12 questions to ask before you sign</h3>
<ol>
<li><strong>What is your markup on this exact product, in percent over spot?</strong> Get it in writing. For common bullion, a common rule of thumb is to push back on anything above roughly 10-15% - a heuristic, not a legal standard.</li>
<li><strong>What will you pay me if I sell it back tomorrow?</strong> The gap between buy and sell prices is your real round-trip cost.</li>
<li><strong>Which custodian and depository do you use, and can I choose a different one?</strong></li>
<li><strong>Can I see the custodian's full fee schedule?</strong> Not a summary - the custodian's own document.</li>
<li><strong>What is your minimum purchase?</strong></li>
<li><strong>What exactly does your promotion require?</strong> "Free silver" or fee waivers often depend on order size.</li>
<li><strong>Is the buyback a contract or a policy?</strong> Most companies describe a buyback "commitment," not a legal guarantee.</li>
<li><strong>Are your salespeople paid on commission?</strong></li>
<li><strong>Do you recommend proof or numismatic coins for IRAs?</strong> A "yes" is a reason for caution.</li>
<li><strong>What is your BBB and Trustpilot record, and how do you handle complaints?</strong> Check both sites yourself.</li>
<li><strong>Have you or your principals faced regulatory action?</strong> Search the company name with "CFTC," "SEC" and "attorney general."</li>
<li><strong>Is there a cancellation or refund window, in writing?</strong></li>
</ol>
<h3>Snapshot of the companies we review (reported, October 2026)</h3>
<table>
<thead><tr><th>Company</th><th>Reported IRA minimum</th><th>Reported fees</th><th>Buyback (as advertised)</th><th>Trustpilot (Oct 19, 2026)</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-hartford-gold">American Hartford Gold</a></td><td>~$10,000</td><td>Setup ~$230; ~$225-$275/yr; storage waivers at $50k+ (1 yr) and $100k+ (3 yrs) reported</td><td>Buyback commitment, no liquidation fee; says it cannot legally guarantee repurchase</td><td>4.9 from 1,947 reviews</td></tr>
<tr><td><a href="/reviews/goldco">Goldco</a></td><td>~$25,000 (generally)</td><td>Setup ~$50; ~$225-$275/yr all-in; up to 3 yrs waivers for eligible accounts reported</td><td>"Highest buyback" pledge (not a contract)</td><td>4.4 from 1,791 reviews</td></tr>
<tr><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a></td><td>~$50,000</td><td>Setup ~$50 (sources vary); ~$225-$275/yr; waivers disclosed on a call</td><td>Advertises a no-fee buyback; no written guarantee</td><td>4.8 from 376 reviews</td></tr>
<tr><td><a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></td><td>Not published</td><td>Not published (ask for a quote)</td><td>Advertises no buy-back fees</td><td>Listing as "American Gold Group": 0 reviews, no score</td></tr>
</tbody>
</table>
<p>All figures are third-party-reported or advertised and may be out of date; sources often conflict. <strong>None of the four publishes its product markups.</strong> Confirm everything in writing with the company and its custodian before you invest. This table is a neutral summary for comparison, not an endorsement.</p>
<h3>Head-to-head comparisons</h3>
<p>If you are down to two companies, our comparisons put the figures side by side:</p>
<ul>
<li><a href="/american-hartford-gold-vs-goldco">American Hartford Gold vs Goldco</a> - lower reported minimum vs larger promotional bonus.</li>
<li><a href="/augusta-vs-goldco">Augusta vs Goldco</a> - education-heavy, high-minimum vs mid-range minimum.</li>
<li><a href="/augusta-vs-american-hartford-gold">Augusta vs American Hartford Gold</a> - the $50,000 vs $10,000 reported-minimum question.</li>
</ul>
<h3>What reviews can and cannot tell you</h3>
<p>Star ratings measure customer experience - mostly the sales and onboarding process. They do not tell you whether you paid a fair price, because most customers never learn the markup. A company can have excellent reviews and still charge more than a competitor for the same coin. Use reviews to screen out bad service; use written quotes to judge price.</p>
<h3>Should you go direct to a custodian?</h3>
<p>Experienced buyers sometimes open a self-directed IRA directly with a custodian and then buy bullion from a low-premium online dealer the custodian works with. That can cut costs, but you get less hand-holding, and you are responsible for choosing eligible products and completing the paperwork correctly. Neither route is wrong; it depends on how much help you want and what it costs.</p>`,
  },
];
