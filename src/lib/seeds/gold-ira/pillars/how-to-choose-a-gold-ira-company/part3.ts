import type { ArticleSection } from "@/lib/config";

// Part 3: buyback terms, account costs (minimums, fees, waivers and the
// "free silver" math), custodian and depository choice, and the first half
// of the sales-process checks.

export const part3: ArticleSection[] = [
  {
    heading: "Buyback terms and the written buyback price",
    body: `<p>Point 11 is the one most buyers forget, because selling feels far away. But every ounce you buy will be sold, distributed or inherited one day. The price you get then matters just as much as the price you pay now.</p>
<h3>Buyback "guarantees" are usually not guarantees</h3>
<p>Many gold IRA companies advertise a buyback program. The wording varies a lot, and the differences matter:</p>
<table>
<thead><tr><th>Company</th><th>How the buyback is described (company claims / third-party reports)</th></tr></thead>
<tbody>
<tr><td>American Hartford Gold</td><td>A "buyback commitment" with no liquidation fee; the company reportedly says it cannot legally guarantee a repurchase</td></tr>
<tr><td>Goldco</td><td>A "highest buyback" pledge, described in our sources as a pledge rather than a contract</td></tr>
<tr><td>Augusta Precious Metals</td><td>Advertises a no-fee lifetime buyback; one source (Fortune) reported it buys back in practice at about 5% under its sell price, with no guaranteed buyback</td></tr>
<tr><td>American Gold and Silver Group</td><td>Advertises no buy-back fees</td></tr>
</tbody>
</table>
<p class="small"><em>Summarized from third-party sources and company advertising (Oct 2026). Ask each company for its current terms in writing.</em></p>
<p>"No buyback fee" and "we will buy back" are useful promises. But neither tells you the <strong>price</strong>. A dealer can charge no fee and still offer a price well below what you paid. That is not a trick; it is just how the spread works. You need to know how the buyback price is set.</p>
<h3>What to ask for in writing</h3>
<ol>
<li><strong>The buyback formula.</strong> "If I sold these exact coins back to you today, what would you pay, and how is that price calculated?" A good answer is specific: for example, "spot minus 1%" for bullion Eagles.</li>
<li><strong>A same-day buyback quote.</strong> Ask for the price the company would pay today for the products on your purchase quote. The gap between the buy quote and the sell quote is your round-trip cost.</li>
<li><strong>Proof and premium coins.</strong> Ask specifically what premium, if any, the company pays back on proof or "exclusive" coins. Often the answer is close to the bullion price.</li>
<li><strong>Timing.</strong> How long from your sell order until the cash lands in your IRA?</li>
<li><strong>Freedom to sell elsewhere.</strong> Confirm that you can sell to any dealer through your custodian. You should always be able to.</li>
</ol>
<h3>Worked example: the round-trip cost</h3>
<p>Using the same spot price as before ($4,170), here is what buying and immediately selling back would cost on $87,600 of bullion Eagles bought at a 5% premium, compared with proofs bought at a 34% premium.</p>
<table>
<thead><tr><th></th><th>Bullion Eagles (20 oz)</th><th>Proof Eagles (16 oz)</th></tr></thead>
<tbody>
<tr><td>You paid</td><td>$87,600</td><td>$89,600</td></tr>
<tr><td>Buyback at spot minus 1%</td><td>20 x $4,128 = $82,560</td><td>16 x $4,128 = $66,048</td></tr>
<tr><td>Round-trip cost</td><td>$5,040 (about 5.8%)</td><td>$23,552 (about 26%)</td></tr>
</tbody>
</table>
<p class="small"><em>Hypothetical. Assumes the proof coins are bought back at the bullion price, which is common but not universal. For comparison, one bullion dealer (GoldSilver, June 2026) estimated a typical Gold Eagle round trip at about 4-8%.</em></p>
<p>You would not normally sell the next day. But the round-trip cost is the clearest single measure of how much a purchase is costing you, and it is the number to compare across companies.</p>
<p><strong>What good looks like:</strong> a written buyback policy that explains how the price is set, plus a same-day buyback quote on request.</p>
<p><strong>Red flag:</strong> "We always buy back at the best price" with nothing written, or a refusal to quote a buyback price until you actually want to sell.</p>`,
  },
  {
    heading: "Account costs: minimums, fees, waivers and free silver math",
    body: `<p>Group C covers the costs you can see: minimum investment, setup fees, annual custodian fees and storage. Points 12 to 14 make sure you know all of them, and that you understand what any promotion is really worth.</p>
<h3>Point 12: A clear minimum investment</h3>
<p>Minimums vary widely, and they tell you something about who the company is built for. Here is what our sources report for the four companies on this site:</p>
<table>
<thead><tr><th>Company</th><th>Reported IRA minimum</th><th>Source note</th></tr></thead>
<tbody>
<tr><td>American Hartford Gold</td><td>$10,000 (cash purchases $5,000)</td><td>Company FAQ, via a review site</td></tr>
<tr><td>Goldco</td><td>$25,000 "generally"</td><td>One source (CNBC) cites a $10,000 initial purchase toward a $25,000 balance</td></tr>
<tr><td>Augusta Precious Metals</td><td>$50,000</td><td>Consistent across sources; positions itself for savers with $100,000 or more</td></tr>
<tr><td>American Gold and Silver Group</td><td>Not published</td><td>Ask directly</td></tr>
</tbody>
</table>
<p>A higher minimum is not better or worse. But if you only plan to move $15,000, a company aimed at $100,000 accounts may not be the right fit, and flat annual fees will eat a bigger share of a small account.</p>
<h3>Point 13: The full fee schedule, in writing</h3>
<p>Most gold IRA companies do not charge annual fees themselves. The custodian and depository do. So the fee schedule you need is the <strong>custodian's</strong>, plus the depository's storage rate. Ask the company which custodian and depository it will use, then get those schedules.</p>
<p>Here is a real example. Equity Trust, one of the largest self-directed IRA custodians, publishes this retail fee schedule (Rev. 11/06/2025):</p>
<table>
<thead><tr><th>Fee</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$50 online / $75 paper</td></tr>
<tr><td>Annual fee, $25,000-$49,999 account</td><td>$350</td></tr>
<tr><td>Annual fee, $50,000-$99,999 account</td><td>$425</td></tr>
<tr><td>Annual fee, $100,000-$199,999 account</td><td>$500</td></tr>
<tr><td>Annual fee, $200,000-$299,999 account</td><td>$700</td></tr>
<tr><td>Storage</td><td>$110 non-segregated / $160 segregated</td></tr>
<tr><td>Metals liquidation</td><td>$10 per asset (max $30)</td></tr>
<tr><td>In-kind transfer or distribution</td><td>$50 per transaction</td></tr>
<tr><td>Full account termination</td><td>$250</td></tr>
</tbody>
</table>
<p>Notice that Equity Trust's annual fee is <strong>tiered by account value</strong>. Many review sites quote "$75-$225 a year" for Equity Trust, which our research found to be wrong for any account over $15,000. This is exactly why you should ask for the actual document rather than a number someone repeats on the phone.</p>
<p>Other custodians use flat fees. Our research notes STRATA Trust at a reported $150 a year for its precious metals tier (from September 2026), GoldStar Trust at a reported $90, and Preferred Trust at $300 for a metals-only IRA on its own site. Fees change, so confirm them yourself. Our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> compares custodians in more detail.</p>
<p>The companies on this site are reported to have the following all-in yearly costs, though none publishes a complete fee schedule on its own website:</p>
<table>
<thead><tr><th>Company</th><th>Reported setup</th><th>Reported yearly (custodian + storage)</th></tr></thead>
<tbody>
<tr><td>American Hartford Gold</td><td>About $230</td><td>About $225-$275</td></tr>
<tr><td>Goldco</td><td>About $50</td><td>About $225-$275</td></tr>
<tr><td>Augusta Precious Metals</td><td>About $50 (one source says $275)</td><td>About $200-$275 (sources conflict)</td></tr>
<tr><td>American Gold and Silver Group</td><td>Not published</td><td>Not published</td></tr>
</tbody>
</table>
<p class="small"><em>Third-party figures (Oct 2026), which often conflict. The custodian's own schedule is the final word.</em></p>
<h3>Point 14: Promotions explained with math</h3>
<p>Gold IRA advertising is full of offers. Here is what the four companies on this site advertise, presented as the companies' own claims:</p>
<ul>
<li><strong>American Hartford Gold</strong> advertises up to $25,000 in free silver on qualifying orders, storage fees waived for 1 year at $50,000+ or 3 years at $100,000+, a 7-day full refund and 100% satisfaction guarantee, and a lowest price guarantee.</li>
<li><strong>Goldco</strong> advertises up to 10% back in bonus silver and up to 3 years of fee waivers for eligible accounts.</li>
<li><strong>Augusta Precious Metals</strong> offers fee waivers on qualifying accounts; one source says "up to 10 years", disclosed only on a call.</li>
<li><strong>American Gold and Silver Group</strong> advertises a 7-day refund, up to $15,000 in free silver and no buy-back fees.</li>
</ul>
<p>These offers can have real value. But the dealer has to pay for them somehow, and the most likely source is the spread on the metal you buy. So the only fair way to judge a promotion is to compare <strong>the total value you end up holding</strong>, not the size of the bonus.</p>
<h3>Worked example: is "free silver" really free?</h3>
<p>Assume you roll over $100,000. Company X offers 5% back in free silver ($5,000 of silver, valued at its own retail price). Company Y offers no bonus but charges a lower spread. To keep it simple, we look at what your metal is worth at spot on day one.</p>
<table>
<thead><tr><th></th><th>Company X: 10% spread + bonus</th><th>Company X: 15% spread + bonus</th><th>Company Y: 5% spread, no bonus</th></tr></thead>
<tbody>
<tr><td>You invest</td><td>$100,000</td><td>$100,000</td><td>$100,000</td></tr>
<tr><td>Gold at spot value (investment / (1 + spread))</td><td>$90,909</td><td>$86,957</td><td>$95,238</td></tr>
<tr><td>"Free" silver at retail value</td><td>$5,000</td><td>$5,000</td><td>$0</td></tr>
<tr><td>Same silver at spot value (if priced at 20% over spot)</td><td>$4,167</td><td>$4,167</td><td>$0</td></tr>
<tr><td><strong>Total metal at spot value</strong></td><td><strong>$95,076</strong></td><td><strong>$91,124</strong></td><td><strong>$95,238</strong></td></tr>
</tbody>
</table>
<p class="small"><em>Hypothetical illustration. Spreads and bonus valuation are assumptions for the example and do not describe any named company. Ignores account fees.</em></p>
<p>Two lessons jump out:</p>
<ol>
<li>At a 10% spread, the bonus roughly cancels out the extra markup. You end up in about the same place as a company with a 5% spread and no bonus.</li>
<li>At a 15% spread, you are about $4,100 worse off despite the "free" silver. The bonus was funded by the spread, with money to spare.</li>
</ol>
<p>The same logic applies to fee waivers. Storage and custodian fees of $200-$300 a year add up to $600-$900 over three years. On a $100,000 account, each 1% of extra spread costs $1,000. So a three-year fee waiver is worth less than a single percentage point of spread. Waivers are nice to have; they are not a reason to accept a higher markup.</p>
<h3>Questions to ask about any promotion</h3>
<ul>
<li>"What is the exact dollar value of the bonus for my account size, and what products does it come in?"</li>
<li>"What are the spreads on the metal I am buying, with and without the promotion?"</li>
<li>"Is the bonus silver valued at spot or at your retail price?"</li>
<li>"If I cancel within the refund window, do I have to return the bonus?"</li>
<li>"Are there conditions, such as a minimum purchase, specific products, or a holding period?"</li>
</ul>
<p>Plug your own numbers into our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> to see how spread, fees and promotions interact over time.</p>
<p><strong>What good looks like:</strong> written promotion terms, with the metal prices shown so you can see what the bonus costs.</p>
<p><strong>Red flag:</strong> a bonus that grows bigger as the salesperson steers you toward pricier products, or terms that are only explained verbally.</p>`,
  },
  {
    heading: "Custodian and depository choice",
    body: `<p>Group D, points 15 and 16, covers the two partners who will actually hold your account and your metal for years. The dealer may only be involved for the purchase and the sale. The custodian and depository are involved every single year.</p>
<h3>Point 15: Choice of custodian</h3>
<p>Most gold IRA companies work with one or a few preferred custodians. Equity Trust is the one most often reported for the companies on this site; STRATA Trust and GoldStar Trust are also common in the industry. Working with a preferred custodian is normal and can make paperwork smoother, because the dealer knows that custodian's forms and staff.</p>
<p>What matters:</p>
<ul>
<li><strong>Is the custodian an established, regulated trust company or bank?</strong> Custodians must be banks or IRS-approved non-bank trustees. Ask the custodian's full legal name and look it up yourself.</li>
<li><strong>Can you choose a different custodian?</strong> Ask. Some dealers will work with any custodian you bring; some prefer not to. Either answer is acceptable, as long as it is honest.</li>
<li><strong>Is the custodian independent of the dealer?</strong> A custodian owned by, or closely tied to, the dealer is a reason to ask more questions.</li>
<li><strong>What are its fees, in writing?</strong> As the Equity Trust example shows, annual fees can rise with account size.</li>
<li><strong>How do you contact it?</strong> You should be able to log in or call the custodian directly to see your holdings. That independent statement is one of your best protections.</li>
</ul>
<p>Our full guide to <a href="/articles/gold-ira-custodians">gold IRA custodians</a> compares fees and services across the main options.</p>
<h3>Point 16: Choice of depository and storage type</h3>
<p>IRA metal must be held by the trustee, which in practice means a professional depository. Common choices include Delaware Depository, Brink's and the Texas Bullion Depository. Ask:</p>
<table>
<thead><tr><th>Question</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>Which depository, and where?</td><td>You should know the name and location of the vault</td></tr>
<tr><td>Segregated or commingled (non-segregated) storage?</td><td>Segregated storage keeps your exact coins apart; commingled storage returns equivalent metal. Segregated usually costs more (for example $160 vs $110 a year at Equity Trust)</td></tr>
<tr><td>How is the metal insured, and by whom?</td><td>Depositories carry insurance; ask what it covers</td></tr>
<tr><td>How is the storage fee billed?</td><td>Flat fee or a percentage of value? A percentage fee grows as the gold price rises</td></tr>
<tr><td>Can I get an audit or holdings statement?</td><td>Your statement should list your specific products and quantities</td></tr>
</tbody>
</table>
<p>Storage pricing varies more than most people expect. Our research found Delaware Depository rates quoted on one custodian form at $0.80 per $1,000 a year commingled (with a $95 minimum) and $1.60 per $1,000 segregated (with a $190 minimum), while Brink's was quoted at about $1.50 per $1,000. Many dealers simply quote a flat $100-$150. Ask which applies to you.</p>
<h3>Home storage is not an option</h3>
<p>If anyone suggests you can keep IRA gold at home or in your own safe-deposit box, usually through an "IRA LLC" or "checkbook IRA" structure, be very careful. In <em>McNulty v. Commissioner</em> (2021), the US Tax Court treated metal held at home this way as a taxable distribution, with penalties. Our <a href="/articles/gold-ira-rules">gold IRA rules guide</a> explains the storage requirements.</p>
<p><strong>What good looks like:</strong> a named, established custodian and depository, fee schedules for both, a choice of storage type, and direct access to your account statements.</p>
<p><strong>Red flag:</strong> a custodian you cannot find independent information about, a "secure facility" that is never named, or any suggestion of home storage for IRA metal.</p>`,
  },
  {
    heading: "Sales process: pressure tactics, scare scripts and endorsements",
    body: `<p>Group E, points 17 to 22, is about how you are sold to. This matters because most gold IRA purchases are made over the phone, often after a series of calls, with a trained representative who is very good at what they do. You can learn a lot about a company from how its salespeople behave.</p>
<h3>Point 17: No pressure and no deadlines</h3>
<p>Gold is traded around the clock, and prices change all the time. There is almost never a genuine reason you must decide today. Watch for:</p>
<ul>
<li>"This price is only good until the end of the call."</li>
<li>"The bonus offer ends Friday."</li>
<li>"Inventory of this coin is almost gone."</li>
<li>"If you wait, you'll miss the next move up."</li>
<li>Repeated follow-up calls after you have said you are thinking it over.</li>
<li>Discouraging you from talking to a spouse, adult child, accountant or adviser.</li>
</ul>
<p>A good representative will send you everything in writing and tell you to take your time. If they do not, that tells you something about the incentives inside the company.</p>
<h3>Point 18: No scare scripts or fear marketing</h3>
<p>Fear sells gold. Some of it is reasonable: inflation, market drops and government debt are real concerns, and gold has a long history as a hedge. But fear becomes a sales tactic when it is used to shut down your questions. Common scripts include:</p>
<table>
<thead><tr><th>What you may hear</th><th>What to keep in mind</th></tr></thead>
<tbody>
<tr><td>"A market crash is coming."</td><td>Nobody can reliably predict crashes. Gold itself fell about 29% from its January 2026 record to its June low.</td></tr>
<tr><td>"Your 401(k) could be wiped out" or "the government will seize retirement accounts."</td><td>These are fear claims, not facts. Ask for a source.</td></tr>
<tr><td>"Banks are about to fail."</td><td>Your IRA is held by a custodian either way. Gold does not remove counterparty risk entirely.</td></tr>
<tr><td>"Gold confiscation could happen again; these coins are exempt."</td><td>A classic pitch for higher-premium "collectible" coins. IRA metal is held by your custodian, not at home, in any case.</td></tr>
<tr><td>"Gold always goes up in a crisis."</td><td>It often has, but not always. It fell about 45% from 2011 to 2015 and roughly 70% from 1980 to 1999 in nominal terms.</td></tr>
</tbody>
</table>
<p>A balanced representative will tell you gold can fall, that it pays no interest or dividends, and that most guides suggest it be one part of a diversified retirement plan. Our article on <a href="/articles/is-a-gold-ira-a-good-investment">whether a gold IRA is a good investment</a> covers both sides.</p>
<h3>Point 19: Endorsements are advertising</h3>
<p>Many gold IRA companies use well-known spokespeople: former athletes, TV and radio hosts, and political commentators. These endorsements are almost always <strong>paid advertising</strong>. The spokesperson is compensated for promoting the company. That is legal and common, and it is not a reason to avoid a company. But it is also not an independent review.</p>
<p>The Federal Trade Commission's guidance on endorsements (<a href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" rel="nofollow noopener" target="_blank">FTC Endorsement Guides: What People Are Asking</a>) requires that material connections between an endorser and a company be disclosed. On a radio show, a host reading an ad, or talking warmly about a sponsor, is being paid for that time.</p>
<p>Keep these points in mind:</p>
<ul>
<li>A famous name tells you the company has an advertising budget. It does not tell you the spread, the fees or the buyback price.</li>
<li>The spokesperson is unlikely to have reviewed the company's pricing or complaints in depth.</li>
<li>The cost of celebrity advertising has to be paid for, ultimately, by customers.</li>
<li>Run the same 25-point checklist on an endorsed company as on any other.</li>
</ul>
<p>The same goes for websites like this one. We disclose that we may earn compensation from companies we cover; see <a href="#what-our-ranking-does-and-does-not-measure">what our ranking does and does not measure</a> below.</p>
<p><strong>What good looks like:</strong> calm, patient representatives who put everything in writing, discuss risks honestly, and treat endorsements as the advertising they are.</p>
<p><strong>Red flag:</strong> deadlines, crash predictions used to rush you, discouraging second opinions, or "our spokesperson would never endorse a bad company".</p>`,
  },
];
