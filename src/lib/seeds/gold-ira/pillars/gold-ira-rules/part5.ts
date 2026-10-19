import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Gold IRA Rules 2026".
// Dealer rules and consumer protection, the common-mistakes table, the FAQ
// block (question-shaped headings feed FAQPage schema) and the bottom line.

export const part5: ArticleSection[] = [
  {
    heading: "Dealer rules: the IRS does not approve dealers",
    body: `<p>There is no such thing as an "IRS-approved" gold dealer. The IRS approves non-bank trustees; it does not license, approve, rank or endorse companies that sell coins. When an advertisement implies otherwise, treat it as a warning sign. Most precious metals dealers are also not registered with the SEC or FINRA, because physical metal bought for cash is generally not a security.</p>
<h3>What the rules do - and do not - cover</h3>
<ul>
<li>Tax law decides which metals the IRA may hold and where they must be stored. It says nothing about the price a dealer may charge.</li>
<li>Your custodian processes the purchase you direct. It does not check whether the price is fair.</li>
<li>Dealer markups, buyback terms and promotions are matters of contract. Get them in writing.</li>
</ul>
<h3>What regulators warn about</h3>
<p>The CFTC, FINRA and NASAA published a joint advisory, <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" target="_blank" rel="noopener">"10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals"</a>. Its themes: understand the total cost, including markups and fees; be wary of pressure to move retirement money; check whether a "free" bonus is built into the price; and verify claims independently. Enforcement history shows why. In the Red Rock Secured case, the SEC alleged markups of up to 130% against disclosed markups far lower, much of it from IRA and other retirement money. In the Safeguard Metals case, the SEC alleged an average markup of about 64% against disclosed markups of 4-33%. A 2012 case against Goldline involved coin markups described as upwards of 55%.</p>
<h3>Questions to ask any dealer</h3>
<ol>
<li>What is the spread on this exact product, as a percentage over spot, in writing?</li>
<li>What would you pay to buy it back today?</li>
<li>Is the custodian independent of your company, and who chose the depository?</li>
<li>Is any "free silver" or fee waiver paid for through higher prices?</li>
<li>Will you confirm in writing that this product is accepted by my custodian?</li>
</ol>
<p>The companies we review - including <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a> - did not publish product spreads as of October 2026, so you need to ask. Our <a href="/articles/how-to-choose-a-gold-ira-company">guide to choosing a gold IRA company</a> and our <a href="/how-we-rank">ranking methodology</a> explain what we look for, and our <a href="/articles/gold-ira-scams-red-flags">scams and red flags guide</a> lists the warning signs.</p>`,
  },
  {
    heading: "Common gold IRA rule-breaking mistakes",
    body: `<p>Most gold IRA tax problems come from a short list of avoidable mistakes:</p>
<table>
<thead><tr><th>Mistake</th><th>Consequence</th><th>How to avoid it</th></tr></thead>
<tbody>
<tr><td>Buying Krugerrands, pre-1933 coins or other collectibles in the IRA</td><td>Cost treated as a distribution; tax plus possible 10%</td><td>Get written custodian confirmation of each product before buying</td></tr>
<tr><td>Storing IRA metal at home or through an IRA LLC</td><td>Treated as a distribution (McNulty, 2021); possible penalties</td><td>Use an approved depository; buy personal gold separately</td></tr>
<tr><td>Selling your own coins to your IRA</td><td>Prohibited transaction; whole IRA treated as distributed</td><td>Contribute cash; have the custodian buy from an unrelated dealer</td></tr>
<tr><td>Taking a 401(k) check made out to you</td><td>20% withheld; any shortfall taxable</td><td>Use a direct rollover payable to the new custodian</td></tr>
<tr><td>Two indirect IRA rollovers within 12 months</td><td>Second one taxable; possible 6% excess tax</td><td>Use trustee-to-trustee transfers</td></tr>
<tr><td>Missing the 60-day deadline</td><td>Distribution becomes taxable</td><td>Avoid indirect rollovers; know Rev. Proc. 2020-46</td></tr>
<tr><td>Contributing above the limit or to an ineligible Roth</td><td>6% excise tax each year</td><td>Check MAGI and limits before contributing</td></tr>
<tr><td>Missing an RMD because metal could not be sold in time</td><td>25% excise tax (10% if corrected in time)</td><td>Keep cash, aggregate, start in the autumn</td></tr>
<tr><td>Rolling over an inherited IRA as a non-spouse</td><td>Taxable distribution that cannot be undone</td><td>Trustee-to-trustee transfer to an inherited IRA only</td></tr>
<tr><td>Rolling a 401(k) to an IRA at 55-58 and then needing money</td><td>Loses the rule-of-55 exception; 10% may apply</td><td>Check plan access before rolling everything</td></tr>
</tbody>
</table>
<p>Nearly every row is avoided by two habits: move money only by direct transfer, and get written confirmation from your custodian before you act.</p>`,
  },
  {
    heading: "Can I buy gold coins for my IRA myself?",
    body: `<p>Not personally. You choose the dealer and the products, but the <strong>custodian</strong> must make the purchase with IRA money, and the dealer must ship to the approved depository. If you buy coins with your own money and then try to put them in the IRA, that is not allowed - contributions must be cash, and selling your coins to the IRA is a prohibited transaction.</p>`,
  },
  {
    heading: "Is a Krugerrand allowed in an IRA?",
    body: `<p>No. The Krugerrand is 22-karat gold (about .9167 fine), below the .995 bullion standard, and it is not one of the US coins named in section 408(m). The American Gold Eagle has the same purity but is allowed because the statute names it. If you like the Krugerrand for its low premium, buy it outside your IRA.</p>`,
  },
  {
    heading: "Can I move IRA gold to my home when I retire?",
    body: `<p>Yes, but only by taking a <strong>distribution in kind</strong>. The custodian ships the metal to you and reports its fair market value on Form 1099-R. From a traditional IRA, that value is taxable income for the year (with no 10% additional tax after 59½); from a qualified Roth distribution it is tax-free. Simply moving IRA metal home while calling it "still in the IRA" is treated as a distribution anyway - and without planning, it can bring penalties. See <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p>`,
  },
  {
    heading: "Do I have to sell my gold to take an RMD?",
    body: `<p>No. You can take an RMD as metal in kind, as cash from selling some metal, or as a mix. If you have other traditional IRAs, you can take the combined RMD from those and leave the gold alone. The main challenge is matching a fixed coin size to an exact dollar amount, so start early and keep some cash in the account. Our <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs guide</a> has more examples.</p>`,
  },
  {
    heading: "Can I contribute gold I already own to my IRA?",
    body: `<p>No. Section 408 requires IRA contributions (other than rollovers) to be made in cash, and selling your own metal to your IRA is a prohibited transaction. If you want that value in your IRA, you could sell the metal to an unrelated dealer, contribute cash within the annual limit ($7,500, or $8,600 at 50+ in 2026), and have the custodian buy eligible metal. Remember that selling personal gold at a gain may be taxed at collectibles rates.</p>`,
  },
  {
    heading: "What happens if my gold IRA breaks a rule?",
    body: `<p>It depends on the rule. Buying a collectible treats its cost as distributed. Taking personal possession of IRA metal is treated as a distribution. A prohibited transaction by the owner disqualifies the entire IRA as of January 1 of that year. Excess contributions face a 6% excise tax each year, and missed RMDs face 25% (or 10% if corrected in time). In most cases the 10% additional tax applies if you are under 59½. Some problems can be fixed if caught quickly, so speak to a tax professional as soon as you suspect one.</p>`,
  },
  {
    heading: "The bottom line on gold IRA rules",
    body: `<p>A gold IRA is an ordinary IRA holding an unusual asset. The ordinary IRA rules - limits, rollovers, the 10% additional tax, RMDs, Roth rules and inheritance - apply in full. The extra rules are few and strict:</p>
<ul>
<li><strong>Use a self-directed IRA</strong> with a qualified trustee or custodian.</li>
<li><strong>Buy only eligible metal:</strong> gold .995+, silver .999+, platinum and palladium .9995+, or American Eagles. No Krugerrands, jewelry or most numismatics.</li>
<li><strong>Keep it in an approved depository.</strong> Home storage has been treated as a taxable distribution.</li>
<li><strong>Fund it with cash or direct transfers.</strong> Contributions are limited to $7,500 ($8,600 at 50+) for 2026.</li>
<li><strong>Never deal with the IRA yourself</strong> or through family. A prohibited transaction can disqualify the whole account.</li>
<li><strong>Plan for RMDs</strong> from 73 or 75, and keep some cash on hand.</li>
</ul>
<p>The rules are clear; the prices are not. Ask every dealer for spreads in writing, compare fees, and have a tax professional or fee-only adviser who does not sell metals review the plan. For the bigger picture, see our <a href="/articles/gold-ira">gold IRA guide</a> and <a href="/articles/gold-ira-rollover">rollover guide</a>, then compare companies in our <a href="/">rankings</a>.</p>
${DISCLAIMER}`,
  },
];
