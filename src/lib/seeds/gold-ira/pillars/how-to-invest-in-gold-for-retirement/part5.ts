import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "How to Invest in Gold for Retirement (2026)".
// Mistakes, scams (enforcement figures per PILLAR-RESEARCH.md corrections),
// decision guide, FAQ sections (question headings become FAQPage schema) and
// the bottom line, which ends with DISCLAIMER.

export const part5: ArticleSection[] = [
  {
    heading: "Mistakes to avoid",
    body: `<p>Most of the money people lose on gold is not lost to the gold price. It is lost to avoidable mistakes. Here are the ones we see most often, whichever method you choose.</p>
<ol>
<li><strong>Buying proof or "rare" coins for retirement.</strong> They carry far higher markups than bullion - one dealer disclosed 23% on proof coins against 7% on bullion - and are harder to sell for a fair price. Most are not even IRA-eligible.</li>
<li><strong>Not asking for the spread in writing.</strong> On physical metal, the markup is usually the biggest cost. If a seller will not tell you the percentage over spot, that is your answer.</li>
<li><strong>Ignoring flat fees on a small account.</strong> A gold IRA with $10,000 in it and $215-$510 of yearly fees loses about 2-5% a year to fees alone ($215 / $10,000 = 2.15%; $510 / $10,000 = 5.1%). At that size, an ETF in an IRA usually makes more sense.</li>
<li><strong>Holding a gold ETF in a taxable account without knowing the 28% rule.</strong> If you have room in an IRA, holding the ETF there avoids the collectibles rate.</li>
<li><strong>Taking a rollover check.</strong> An employer plan that pays you directly must withhold 20%, and only one 60-day IRA-to-IRA rollover is allowed in any 12 months. Use direct transfers.</li>
<li><strong>Storing IRA gold at home.</strong> Schemes that promise "home storage" gold IRAs have ended in tax bills and penalties - see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></li>
<li><strong>Going all in after a big run-up.</strong> Gold rose about 65% in 2025, then fell about 29% from its January 2026 peak to its June low. Buying in stages can reduce the risk of bad timing.</li>
<li><strong>Treating miners as if they were gold.</strong> A mining fund can fall far more than gold, and can fall with the stock market.</li>
<li><strong>Forgetting about RMDs and heirs.</strong> Plan how you will take required distributions from a gold IRA, and make sure your family knows where every coin and account is.</li>
<li><strong>Letting one sales call decide.</strong> Pressure, deadlines and "limited supply" are tactics, not facts. Take a day, get a second quote, and talk to a fee-only adviser if you are unsure.</li>
</ol>`,
  },
  {
    heading: "Gold scams and red flags to watch for",
    body: `<p>Gold attracts fraud because it is easy to sell with fear, and because most buyers do not know what a fair price looks like. Retirees are a common target. The most common pattern regulators describe is the <strong>proof-coin push</strong>: a salesperson talks you out of plain bullion and into "premium", "proof" or "semi-numismatic" coins, claiming they are safer from confiscation or will rise faster. In reality, these coins can carry enormous markups that are not clearly disclosed.</p>
<h3>What regulators have found</h3>
<table>
<thead><tr><th>Company</th><th>What regulators alleged or found</th><th>Outcome</th></tr></thead>
<tbody>
<tr><td>Red Rock Secured</td><td>Told investors markups were small, but charged markups of up to <strong>130%</strong> (SEC); took about $61.8M from about 950 customers, much of it from IRAs, 401(k)s and TSPs (CFTC)</td><td>$76.4M final judgment (SEC)</td></tr>
<tr><td>Safeguard Metals</td><td>SEC: average markup of about <strong>64%</strong> versus a disclosed 4-33%. CFTC: silver-coin markups of <strong>51% to over 70%</strong></td><td>Final judgment Oct 2025: about $25.6M restitution plus an equal penalty (about $51M total)</td></tr>
<tr><td>Lear Capital</td><td>New York Attorney General: undisclosed commissions of up to <strong>33%</strong> on more than $43M of sales</td><td>$6M settlement; later a bankruptcy plan</td></tr>
<tr><td>Goldline (2012)</td><td>Coin markups of upwards of <strong>55%</strong></td><td>Up to $4.5M in refunds plus an $800,000 fund; no admission of wrongdoing</td></tr>
</tbody>
</table>
<p>To see what a 64% markup means: if you paid $50,000 for coins marked up 64% over their melt value, the metal would be worth about $50,000 / 1.64 = <strong>$30,488</strong>. You would be down about $19,500 on day one, before any change in the gold price.</p>
<h3>Red flags</h3>
<ul>
<li>Pressure to move your whole IRA or 401(k), or to act "before it is too late".</li>
<li>Steering from bullion to proof, "rare" or "exclusive" coins.</li>
<li>Refusing to state the markup over spot, or the buyback price, in writing.</li>
<li>Claims of "no fees", "IRS-backed" or government endorsement. The IRS does not approve or endorse dealers.</li>
<li>"Free silver" or bonus offers that make the deal hard to compare on total metal value.</li>
<li>Promised returns, or "gold can't go down" claims. It can, and has.</li>
<li>Home-storage gold IRA pitches.</li>
<li>Cold calls about "protecting" your TSP or 401(k).</li>
</ul>
<p>The CFTC, FINRA and NASAA published a joint advisory, <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" target="_blank" rel="noopener noreferrer">10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals</a>. It is short and worth reading before you speak to any dealer. Our own <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags guide</a> goes further.</p>
<p>Note that ETFs and 401(k) funds avoid the dealer-markup problem entirely, because they trade at market prices on an exchange. That is not a reason to rule out physical gold - only a reason to be extra careful when you buy it.</p>`,
  },
  {
    heading: "Decision guide: which method fits you?",
    body: `<p>Use this table as a simple decision tree. Find the line that best matches what you want, then read that method's section again before you act. If two lines fit, a combination may make sense.</p>
<table>
<thead><tr><th>If you want...</th><th>Consider...</th><th>Watch out for...</th></tr></thead>
<tbody>
<tr><td>The cheapest way to track gold's price in a retirement account</td><td>A low-cost physically backed ETF (e.g. IAUM, GLDM) in an IRA or Roth IRA</td><td>Account fees at your brokerage; verify the expense ratio</td></tr>
<tr><td>Gold exposure without leaving your current 401(k)</td><td>A gold or commodity fund on your plan menu, or an ETF through a brokerage window</td><td>"Precious metals" funds that hold miners; window fees</td></tr>
<tr><td>Physical metal inside a tax-advantaged account</td><td>A gold IRA with common IRA-eligible bullion</td><td>Dealer spreads, flat fees on small balances, proof-coin pitches</td></tr>
<tr><td>Metal you can hold in your hand</td><td>Common bullion coins or bars bought with taxable savings</td><td>Theft, insurance, the 28% collectibles tax, keeping it a modest share</td></tr>
<tr><td>Possible extra upside and dividends, accepting bigger swings</td><td>A diversified miner ETF, kept small</td><td>Losses larger than gold's; stock-market crashes</td></tr>
<tr><td>Vaulted metal in small amounts without a home safe</td><td>An established provider offering allocated, audited, insured storage</td><td>Provider risk, unclear fees, collectibles tax</td></tr>
<tr><td>Short-term trading or leverage</td><td>Futures or options - generally not appropriate for retirement savings</td><td>Losses greater than your deposit</td></tr>
<tr><td>Easy RMDs and rebalancing</td><td>ETFs in an IRA, or keep some cash alongside a gold IRA</td><td>Selling whole coins at a bid price for small RMDs</td></tr>
<tr><td>A small amount (under about $10,000)</td><td>An ETF, or a few coins</td><td>Flat gold IRA fees eating 2-5% a year</td></tr>
</tbody>
</table>
<h3>A three-question shortcut</h3>
<ol>
<li><strong>Is owning physical metal essential to you?</strong> No: go to an ETF in an IRA or 401(k). Yes: go to question 2.</li>
<li><strong>Is the money in a retirement account, and is it more than about $25,000-$50,000?</strong> Yes: a gold IRA is worth pricing out. No: consider a modest amount of coins bought with taxable savings, or an ETF.</li>
<li><strong>Would you still be comfortable if the metal fell 30%?</strong> If not, reduce the amount before choosing any method.</li>
</ol>
<p>Still undecided between the two most common choices? Our <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF comparison</a> takes you through it in more depth.</p>`,
  },
  {
    heading: "Can I buy gold in my 401(k)?",
    body: `<p>Usually not physical gold, but often gold exposure. Most 401(k) plans do not allow coins or bars. Check your plan's fund menu for a gold, precious metals or commodity fund, and ask whether the plan offers a self-directed brokerage window where you could buy a gold ETF such as GLDM or IAU. If neither is available, you can add gold elsewhere, or roll money to an IRA once your plan allows it - usually after you leave the employer, and sometimes at 59½ while still working. Always use a direct rollover to avoid the 20% withholding. See <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover</a> for the steps.</p>`,
  },
  {
    heading: "Is a gold ETF as good as owning physical gold?",
    body: `<p>For tracking gold's price, a physically backed ETF is very close, and much cheaper: about 0.09%-0.25% a year for low-cost funds versus roughly $175-$300+ a year plus a dealer spread for a gold IRA. You can sell any trading day and in any amount. What an ETF does not give you is metal in your possession: you own shares in a trust, and most investors cannot take delivery. If your reason for owning gold is protection against a breakdown of the financial system, an ETF may not meet that goal; if your reason is diversification, it usually does. In a taxable account both are taxed as collectibles (up to 28%); inside an IRA neither is. Our <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a> guide compares them in full.</p>`,
  },
  {
    heading: "Are gold mining stocks a good way to invest in gold?",
    body: `<p>They are a way to invest in gold <em>companies</em>, which is different. Because miners' costs are largely fixed, their profits tend to move more than the gold price - in our hypothetical example, a 10% rise in gold lifted a miner's margin 20%, and a 25% fall cut it by 50%. Miners also carry company, political and stock-market risks, and can fall in a market crash just when you want gold to hold up. Some pay dividends, and in a taxable account they avoid the 28% collectibles rate. For most retirees, miners work best as a small extra, not as the core of a gold allocation. A diversified fund such as GDX (0.51% a year - verify with the issuer) spreads company risk.</p>`,
  },
  {
    heading: "What is the cheapest way to own gold for retirement?",
    body: `<p>For most people, a low-cost physically backed gold ETF held in an IRA, Roth IRA or 401(k) brokerage window with no account fee or commission. At an expense ratio of 0.09%-0.10% (IAUM or GLDM, as of October 2026 - verify with the issuer), $50,000 costs about $45-$50 a year. In our 10-year illustration with gold held flat, GLDM in an IRA cost about $523 in total, compared with about $4,215 for a low-cost gold IRA and $2,720 for Gold Eagles at home before security costs. If you specifically want physical metal, the cheapest route is usually common bullion bars or coins bought at a low premium (about 2-4% in October 2026) from a competitive dealer.</p>`,
  },
  {
    heading: "Can I hold gold coins at home for retirement?",
    body: `<p>Yes, but only outside an IRA. Coins you buy with your own taxable money can be kept at home as part of your overall retirement savings - with no contribution limits and no RMDs, but also no tax shelter, and gains are taxed as collectibles at up to 28%. Gold held <em>inside</em> an IRA must be held by the trustee or custodian at an approved depository. Home-storage schemes using an "IRA LLC" were treated as taxable distributions in <em>McNulty v. Commissioner</em> (2021). If you keep coins at home, use a secure safe, check your insurance, keep the amount modest and tell a trusted person where they are. Details in <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p>`,
  },
  {
    heading: "Should I buy gold or silver for retirement?",
    body: `<p>It depends on how much volatility you can stand. Silver has historically swung harder than gold: it rose about 145% in 2025, hit a reported record of about $121.62 in January 2026 (unverified), and was about $57.70 on October 19, 2026 - roughly 53% below that peak (($121.62 - $57.70) / $121.62). Gold fell about 25% from its peak over the same period. Silver is also bulkier: $50,000 buys about 12 ounces of gold at $4,170 (under a pound) but about 867 ounces of silver at $57.70 (roughly 59 pounds), which raises storage costs and premiums - American Silver Eagles averaged about 6.87% over spot in August 2026. Silver ETFs cost more too (SLV 0.50%, SIVR 0.30%). Many investors who own both keep silver as the smaller share. Our <a href="/articles/silver-ira-guide">silver IRA guide</a> covers silver in depth.</p>`,
  },
  {
    heading: "The bottom line",
    body: `<p>There are seven common ways to invest in gold for retirement, and each one solves a different problem:</p>
<ul>
<li><strong>Gold ETFs</strong> in an IRA or 401(k) are the cheapest and most liquid way to own gold's price - about $523 over 10 years on $50,000 with GLDM in our illustration.</li>
<li>A <strong>gold IRA</strong> gives you physical metal with tax advantages, at a higher cost - about $4,215 to $11,540 over 10 years on $50,000 in our low- and high-cost illustrations, with the dealer spread making the biggest difference.</li>
<li><strong>Coins and bars at home</strong> give you direct ownership with no account fees, but you take on security, insurance and the 28% collectibles tax.</li>
<li><strong>Miners</strong> are stocks with a gold link: more upside and more downside than the metal.</li>
<li><strong>401(k) funds</strong> can be the easiest option if your plan offers one.</li>
<li><strong>Futures and options</strong> are generally unsuitable for retirement savings.</li>
<li><strong>Vaulted and digital gold</strong> can work, but only with a provider you can verify.</li>
</ul>
<p>Whichever route you choose, keep the amount modest - commentators commonly suggest 5-10% - buy common bullion if you buy metal, get every price in writing, and remember that gold pays no income and has fallen 29-70% in past declines. For more, see our <a href="/articles/gold-ira">complete gold IRA guide</a>, <a href="/articles/gold-ira-fees">gold IRA fees guide</a>, <a href="/articles/gold-ira-rules">gold IRA rules</a> and <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold to hold</a>.</p>
<p>And before you move retirement money, consider a one-time session with a fee-only financial adviser or tax professional who does not sell metals. The cost of good advice is often small next to the cost of choosing the wrong method.</p>
${DISCLAIMER}`,
  },
];
