import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Silver IRA: The Complete 2026 Guide".
// Step-by-step opening, common mistakes, FAQ sections (question headings
// become FAQPage schema) and the bottom line, ending with DISCLAIMER.

export const part5: ArticleSection[] = [
  {
    heading: "How to open a silver IRA: step by step",
    body: `<p>Opening a silver IRA usually takes one to three weeks, most of it waiting for your old plan or IRA to send the money. Here is the process, with what to watch at each step.</p>
<h3>Step 1: Decide how much, if any, belongs in silver</h3>
<p>Before you talk to any seller, decide roughly what share of your retirement savings you are willing to hold in a volatile asset that pays no income. Write the number down. Salespeople are good at moving that number up. A fee-only financial adviser who does not sell metals can help.</p>
<h3>Step 2: Check what kind of account you are moving</h3>
<p>Find out whether your money is in a traditional IRA, Roth IRA, 401(k), 403(b), TSP or SIMPLE IRA, and whether your current plan allows a rollover now. Ask your plan administrator. Our <a href="/articles/gold-ira-rollover">rollover guide</a> explains the rules for each type.</p>
<h3>Step 3: Get written quotes from at least two companies</h3>
<p>Use the question script in the <a href="#how-to-choose-a-silver-ira-company">how-to-choose section</a>. For each company, get in writing:</p>
<ul>
<li>The exact products, price per ounce and premium over spot.</li>
<li>Whether 100-oz or 10-oz bars are available.</li>
<li>Today's buyback price for those products.</li>
<li>The custodian, its fee schedule and the storage method and price.</li>
<li>Full terms of any promotion.</li>
</ul>
<h3>Step 4: Open the self-directed IRA with the custodian</h3>
<p>You (or the company) complete the custodian's application. Read the custodian's own fee schedule, not just the dealer's summary. Choose your beneficiaries. Expect a setup fee of about $0-$75 at the custodian, plus any dealer fee.</p>
<h3>Step 5: Move the money by direct transfer</h3>
<p>Sign the transfer or direct rollover form. The money goes from your old custodian or plan directly to the new one. Avoid having a check made out to you - that starts the 60-day clock and, from an employer plan, 20% withholding.</p>
<h3>Step 6: Approve the purchase</h3>
<p>When the cash arrives, confirm the purchase with the dealer at a locked price. Sign the custodian's buy direction. Check that the products, quantities and prices match your written quote exactly, and that the products are on the custodian's eligible list.</p>
<h3>Step 7: Confirm delivery to the depository</h3>
<p>The dealer ships to the depository, which confirms receipt to the custodian. You should receive a confirmation listing your holdings. If you chose segregated storage, check that it is stated.</p>
<h3>Step 8: Review your statements every year</h3>
<p>Check the holdings, the value the custodian reports, and the fees charged. If your custodian uses a tiered schedule, watch for changes as the silver price moves. Keep all purchase confirmations - you will want them when you sell or take distributions.</p>
<table>
<thead><tr><th>Step</th><th>Who</th><th>Typical time</th></tr></thead>
<tbody>
<tr><td>Decide allocation and gather quotes</td><td>You</td><td>A few days to a few weeks</td></tr>
<tr><td>Open self-directed IRA</td><td>You and custodian</td><td>1-3 business days</td></tr>
<tr><td>Transfer or rollover</td><td>Old custodian or plan</td><td>Several days to a few weeks</td></tr>
<tr><td>Purchase and delivery</td><td>Dealer, custodian, depository</td><td>About 1-2 weeks</td></tr>
</tbody>
</table>
<p class="small"><em>Typical timing varies by plan and custodian; these are general estimates, not promises.</em></p>`,
  },
  {
    heading: "Common silver IRA mistakes",
    body: `<p>Most costly silver IRA mistakes are avoidable. These are the ones we see most often.</p>
<ol>
<li><strong>Buying proof coins because they are "IRA eligible".</strong> Proof Silver Eagles are allowed, but disclosed proof spreads of around 23% mean silver must rise sharply just to break even.</li>
<li><strong>Not asking for the premium over spot.</strong> A quote in dollars per coin hides the markup. Always ask for the percentage.</li>
<li><strong>Ignoring bars.</strong> On $50,000, 100-oz bars at $1 over spot instead of Silver Eagles at 6.87% would have saved about $2,362 in our illustration.</li>
<li><strong>Buying during a premium spike.</strong> Coin premiums jump when everyone is buying - the Silver Maple Leaf averaged 12.89% in February 2026 vs 5.69% in July.</li>
<li><strong>Putting too much in silver.</strong> A position that falls by half - as silver did in 2026 - can derail a retirement plan if it is a large share of your savings.</li>
<li><strong>Using a 60-day rollover instead of a direct transfer.</strong> You risk 20% withholding, the once-per-12-months limit and a missed deadline.</li>
<li><strong>Trying to store IRA silver at home.</strong> The Tax Court treated this as a taxable distribution in <em>McNulty</em>.</li>
<li><strong>Buying ineligible silver.</strong> Junk silver, sterling and collectible coins are not allowed and can trigger a taxable distribution.</li>
<li><strong>Trying to contribute silver you already own.</strong> Contributions must be cash.</li>
<li><strong>Holding only large bars when RMDs are near.</strong> A 100-oz bar worth about $5,770 can be bigger than your whole RMD. Small units add flexibility.</li>
<li><strong>Judging "free silver" by the headline.</strong> Compare total spot value received vs dollars paid.</li>
<li><strong>Not checking the custodian's tier.</strong> A tiered schedule can turn a "low fee" into $425 a year or more as your balance grows.</li>
<li><strong>Not getting the buyback price in writing.</strong> You learn the true round-trip cost only when you sell - unless you ask first.</li>
</ol>`,
  },
  {
    heading: "Is a silver IRA a good idea?",
    body: `<p>It can be, for some people, in limited amounts - but it is not a good idea for everyone. A silver IRA may make sense if you specifically want physical, vaulted silver in a tax-advantaged account, you understand that silver is more volatile than gold (it fell about 53% from its reported January 2026 high to October 2026), you can hold for many years without needing to sell in a slump, and you buy low-premium bullion at a fair price.</p>
<p>It is likely a poor fit if your account is small (flat fees can cost 1-2% a year on $25,000), you might need the money soon, or you are being sold high-premium coins. A silver ETF inside an ordinary IRA is usually cheaper if you just want silver price exposure. A fee-only adviser can help you decide whether silver belongs in your plan at all. Our article on <a href="/articles/is-a-gold-ira-a-good-investment">whether a gold IRA is a good investment</a> weighs the same questions for gold.</p>`,
  },
  {
    heading: "What silver coins are IRA eligible?",
    body: `<p>The <strong>American Silver Eagle</strong> is eligible by name under Section 408(m) of the tax code - including proof versions. Other coins must be at least <strong>.999 fine</strong>. Commonly accepted examples include the <strong>Canadian Silver Maple Leaf</strong> (.9999), the <strong>British Silver Britannia</strong> (.999 from 2013 onward; earlier .958 coins do not qualify) and the <strong>Austrian Silver Philharmonic</strong> (.999). Silver bars of .999 fineness or better from accredited refiners are also generally accepted. Your custodian has the final say on specific products, so get written approval before buying. See the <a href="#eligible-silver-the-coins-and-bars-that-qualify">eligible silver section</a> and our <a href="/articles/irs-approved-precious-metals">IRS-approved precious metals</a> guide.</p>`,
  },
  {
    heading: "Can I put junk silver in an IRA?",
    body: `<p>No. "Junk silver" - circulated U.S. dimes, quarters and half dollars from 1964 and earlier - is <strong>90% silver</strong>, below the .999 fineness required for bullion, and these coins are not among the U.S. coins the statute names. Buying them inside an IRA would be treated as a distribution under Section 408(m), which can be taxable and, before 59½, subject to the 10% additional tax. The same goes for 40% silver half dollars, Morgan and Peace dollars and sterling silver. Junk silver can be held outside an IRA, where gains are taxed at collectibles rates of up to 28%.</p>`,
  },
  {
    heading: "How much does it cost to store silver in an IRA?",
    body: `<p>Reported storage costs in October 2026 run roughly <strong>$95-$250 a year</strong> for most silver IRAs. Examples: Equity Trust bundles storage at $110 non-segregated or $160 segregated; STRATA reports $115 commingled or $175 segregated; the Delaware Depository charges $0.80 per $1,000 of value commingled ($95 minimum) per one custodian form; Brink's is about $1.50 per $1,000 (0.15%) a year. One company's silver IRA reportedly uses $250-a-year Texas storage.</p>
<p>Because silver is bulky - $50,000 weighs about 59 pounds at $57.70 an ounce - ask whether storage is a flat fee, a percentage of value or based on weight, and whether silver is priced differently from gold. Flat fees cost more as a share of small accounts; percentage fees grow if silver rises. See the <a href="#storage-silver-is-heavy-and-bulky">storage section</a> for a full table.</p>`,
  },
  {
    heading: "Silver IRA or gold IRA: which is better?",
    body: `<p>Neither is better for everyone. <strong>Gold</strong> has been less volatile (it fell about 25% from its January 2026 record to October 2026, vs about 53% for silver), carries lower percentage premiums on popular coins (about 3-6% vs about 6.9-8.5% for Silver Eagles in 2026) and is far easier to store. <strong>Silver</strong> has more industrial demand and has had bigger upswings (about +145% in 2025 vs about +65% for gold), but bigger downswings too, and its coins cost more over spot.</p>
<p>Many investors who want metals hold mostly gold with a smaller silver slice; others prefer all gold or a 50/50 split. The rules, taxes and custodians are the same either way, and you can hold both in one account. Our <a href="/articles/gold-ira">gold IRA guide</a> covers the gold side; the <a href="#gold-and-silver-mix-strategies">mix strategies section</a> shows what different splits look like.</p>`,
  },
  {
    heading: "Can I take my silver home from my IRA?",
    body: `<p>Not while it is still in the IRA. IRA silver must be held by the trustee or custodian, normally in an approved depository. Keeping it at home through an "IRA LLC" or similar arrangement was treated as a taxable distribution, with penalties, in <em>McNulty v. Commissioner</em> (2021).</p>
<p>You <strong>can</strong> take silver home by taking an <strong>in-kind distribution</strong>. The custodian ships the coins or bars to you, and their fair market value on that date counts as a distribution - taxable income from a traditional IRA, plus the 10% additional tax if you are under 59½ and no exception applies. Expect shipping and in-kind distribution fees (for example, Equity Trust lists $50 per in-kind distribution plus shipping at cost plus $10, $50 minimum). Plan for the weight: about 4.5 pounds for a 65-ounce RMD. See our articles on <a href="/articles/can-you-store-ira-gold-at-home">home storage</a> and <a href="/articles/gold-ira-taxes-and-rmds">taxes and RMDs</a>.</p>`,
  },
  {
    heading: "The bottom line on silver IRAs",
    body: `<p>A silver IRA is an ordinary IRA that holds physical silver. The rules are the same as for a gold IRA: .999 fineness (American Silver Eagles allowed by statute), a custodian, an approved depository, no home storage and the usual IRA tax treatment. What is different is the metal.</p>
<p>Silver is <strong>more volatile</strong> than gold - up about 145% in 2025, then down about 53% from its reported January 2026 high by October 2026. It is <strong>bulkier</strong>, so $50,000 weighs close to 60 pounds and storage pricing deserves a question. And because each ounce is cheap, <strong>premiums take a bigger bite</strong>: the same $50,000 bought about 859 ounces as 100-oz bars or 811 ounces as Silver Eagles in our illustration - and only about 528 ounces at the markups regulators found in the Safeguard Metals case.</p>
<p>If you decide silver belongs in your retirement plan, the most valuable things you can do are simple:</p>
<ol>
<li>Decide your allocation before you talk to a seller, and keep silver to a share you could see fall by half.</li>
<li>Prefer low-premium bullion - especially 100-oz or 10-oz bars - and keep some smaller units if RMDs are near.</li>
<li>Get written quotes from at least two companies with the premium over spot and today's buyback price.</li>
<li>Read the custodian's own fee schedule and ask how silver storage is priced.</li>
<li>Judge "free silver" by the total spot value you receive.</li>
<li>Move money by direct transfer, never a check to yourself.</li>
<li>Compare against a low-cost silver ETF in an ordinary IRA.</li>
</ol>
<p>To go further, read our <a href="/articles/gold-ira">complete gold IRA guide</a>, the <a href="/articles/gold-ira-rules">IRA metals rules</a>, our <a href="/articles/gold-ira-fees">fees guide</a> and <a href="/articles/gold-ira-scams-red-flags">scam red flags</a>. Run the numbers in the <a href="/gold-ira-fee-calculator">fee calculator</a>. When you are ready to compare companies, start with our <a href="/">rankings</a>, see <a href="/how-we-rank">how we rank</a>, and read the reviews of <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>.</p>
<p>Silver can play a role in a diversified retirement plan, but it is a volatile, no-income asset with real costs. A fee-only financial adviser or tax professional who does not sell metals can help you decide how much, if any, belongs in yours.</p>
${DISCLAIMER}`,
  },
];
