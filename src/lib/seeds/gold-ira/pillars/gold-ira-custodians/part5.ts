import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5 of "Gold IRA Custodians & Depositories Compared (2026)".
// Switching custodians, red flags, question script, checklist, FAQ sections
// (question headings become FAQPage schema) and the bottom line, which ends
// with the site-wide DISCLAIMER.

export const part5: ArticleSection[] = [
  {
    heading: "How to switch gold IRA custodians",
    body: `<p>If you already have a gold IRA and your custodian has become expensive - for example, because rising gold pushed you into a higher fee tier - you can move to another custodian. It is done by a <strong>trustee-to-trustee transfer</strong>, which is not taxed and has no limit on how often you can do it. (The once-per-12-months limit applies only to 60-day rollovers where the money passes through your hands; see <a href="https://www.irs.gov/publications/p590a" rel="noopener noreferrer" target="_blank">IRS Pub 590-A</a> and our <a href="/articles/gold-ira-rules">gold IRA rules guide</a>.)</p>
<h3>Two ways to move: in kind or in cash</h3>
<table>
<thead><tr><th></th><th>In-kind transfer</th><th>Sell and transfer cash</th></tr></thead>
<tbody>
<tr><td>What happens</td><td>Your metal is re-registered to the new custodian. It may stay in the same vault or be shipped to a new one.</td><td>The old custodian sells your metal; the cash moves; you buy new metal through a dealer.</td></tr>
<tr><td>Main costs</td><td>Termination fee, in-kind transfer fee, possibly shipping and insurance between vaults</td><td>Termination fee, sale fees, the buyback spread on selling, and a new markup on buying</td></tr>
<tr><td>Exposure to gold price</td><td>You stay invested throughout</td><td>You are out of the market between sale and repurchase</td></tr>
<tr><td>Usually cheaper?</td><td>Yes, in most cases</td><td>Rarely - buying and selling costs often run to several percent</td></tr>
</tbody>
</table>
<h3>Step by step</h3>
<ol>
<li><strong>Open the new account first.</strong> Apply with the new custodian and choose a depository. If possible, choose a depository the old custodian also uses - then the metal may not need to move physically.</li>
<li><strong>Sign the new custodian's transfer request form.</strong> List each item to move in kind (product and quantity, and bar serial numbers for segregated storage).</li>
<li><strong>The new custodian contacts the old one.</strong> You do not need to request a check, and you should not.</li>
<li><strong>The old custodian releases the metal and closes the account</strong>, charging any termination and transfer fees.</li>
<li><strong>Check your first statement</strong> from the new custodian against your old statement. Every item should match.</li>
</ol>
<p>Transfers often take a few weeks, and more if metal has to be shipped between vaults. Ask both custodians for a time estimate.</p>
<h3>What it might cost to leave - an example</h3>
<p>Leaving Equity Trust with metal moved in kind, using its published schedule: $250 full termination + $50 in-kind transfer = <strong>$300</strong>, plus any shipping (at cost + $10, $50 minimum, if metal is shipped). Add the new custodian's setup fee, typically $30-$50 in this guide.</p>
<p>Is it worth it? Take a $100,000 account. At Equity Trust, annual fee plus storage is $610. At GoldStar, using its reported fees, it would be $215. The saving is $395 a year. If switching costs about $350 ($300 to leave + $50 to open), you would recover it in about 11 months ($350 / $395 x 12). After that, in our illustration, you would save about $395 a year - <strong>if</strong> the reported GoldStar fees are confirmed for your account.</p>
<p>Other reported exit fees: Madison Trust $225 termination; Kingdom Trust $300 (or $100 per asset per its FAQ); Preferred Trust $200 for an in-kind distribution; uDirect $75 in-kind. Always ask for the exit cost in writing before you start.</p>`,
  },
  {
    heading: "Gold IRA custodian red flags",
    body: `<p>Most custodians are legitimate, regulated businesses. But gold IRA scams often involve a confusing custodian arrangement. Watch for these warning signs:</p>
<ul>
<li><strong>Nobody can tell you how the custodian is qualified.</strong> A real custodian can say whether it is a bank, a state-chartered trust company or an IRS-approved non-bank trustee, and name its regulator.</li>
<li><strong>The dealer calls itself "IRS-approved".</strong> The IRS approves non-bank trustees, not dealers.</li>
<li><strong>The dealer or someone else offers to hold your metal at home or in an "IRA LLC" you control.</strong> In <em>McNulty v. Commissioner</em> (2021), the Tax Court treated home storage through an IRA LLC as a taxable distribution, with penalties. See <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></li>
<li><strong>You are told to send money to the dealer, not the custodian.</strong> In a gold IRA, the custodian pays the dealer from your IRA. If you are asked to write a personal check or wire to a dealer, stop and ask why.</li>
<li><strong>You cannot get the custodian's own fee schedule</strong>, only the dealer's summary.</li>
<li><strong>Your statement shows only a dollar value</strong>, with no list of products and quantities.</li>
<li><strong>Fees or waivers are only explained on the phone</strong> and never confirmed in writing.</li>
<li><strong>Pressure to move fast</strong> - "this price is only good today", "the custodian is closing new accounts".</li>
<li><strong>Proof or "rare" coins pushed into your IRA.</strong> These often carry much higher markups, and most collectible coins are not allowed in an IRA. The Red Rock Secured case involved markups of up to 130%, according to the SEC. See our <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags guide</a>.</li>
<li><strong>The custodian name changes on your paperwork</strong> or does not match what you checked. Make sure you know exactly which legal entity holds your account.</li>
</ul>
<p>If you see two or more of these, pause and talk to a fee-only adviser or your state securities regulator before sending any money.</p>`,
  },
  {
    heading: "Questions to ask a gold IRA custodian (script)",
    body: `<p>Use this script when you call a custodian, or send it by email so you get the answers in writing. You can also give it to your dealer and ask them to get the answers from their partner custodian.</p>
<h3>About the custodian</h3>
<ol>
<li>"What is your full legal name, and how are you qualified to act as an IRA custodian - bank, state-chartered trust company, or IRS-approved non-bank trustee?"</li>
<li>"Who regulates you, and when were you last examined or audited?"</li>
<li>"Is my account held by you, or by an affiliate? If an affiliate, what is its name?"</li>
</ol>
<h3>About fees</h3>
<ol start="4">
<li>"Please send me your current fee schedule for a precious metals IRA. What is the revision date?"</li>
<li>"Is your annual fee flat, tiered by value, or per asset? If tiered, what value do you use and on what date? If per asset, how do you count assets?"</li>
<li>"What will I pay in year one, and each year after, for a [$ amount] account with [commingled/segregated] storage at [depository]?"</li>
<li>"What do you charge per purchase, per sale, per wire, and for an in-kind distribution?"</li>
<li>"What will it cost to close my account or transfer it to another custodian, in kind and in cash?"</li>
<li>"Are any fees being waived for me? Please confirm in writing how long, and what I will pay after."</li>
</ol>
<h3>About storage</h3>
<ol start="10">
<li>"Which depositories can I use? What is each one's rate - flat or per $1,000 - and is there a minimum?"</li>
<li>"Is the storage commingled or segregated, and how is my ownership recorded?"</li>
<li>"Who insures the metal, for how much, and does the insurance cover shipping?"</li>
<li>"How often is the vault audited, and by whom?"</li>
</ol>
<h3>About your dealer</h3>
<ol start="14">
<li>"Do you work with [dealer name]? Do you receive any payment from them, or pay them anything, for referrals?"</li>
<li>"Will my statements list each product and quantity?"</li>
</ol>
<p>Write down who you spoke to and when. If an answer is vague, ask for it by email.</p>`,
  },
  {
    heading: "Gold IRA custodian checklist",
    body: `<p>Before you sign a custodian application, tick off each item:</p>
<ul>
<li>I know the custodian's full legal name and how it is qualified (bank, trust company or IRS-approved non-bank trustee), and I have checked it on the <a href="https://www.irs.gov/retirement-plans/approved-nonbank-trustees-and-custodians" rel="noopener noreferrer" target="_blank">IRS non-bank trustee list</a> or with the state regulator.</li>
<li>I have the custodian's <strong>own</strong> current fee schedule, with a revision date.</li>
<li>I know whether the annual fee is flat, tiered or per asset, and what I will pay at my balance - and at a higher balance if gold rises.</li>
<li>I know the depository, its rate (flat or per $1,000), the minimum, and whether storage is commingled or segregated.</li>
<li>I have worked out my 10-year custodian and storage cost, and compared it with at least one other custodian.</li>
<li>I know the cost to sell, to take an in-kind distribution, and to close or transfer the account.</li>
<li>Any fee waiver is in writing, with an end date.</li>
<li>I know who insures the metal and how often the vault is audited.</li>
<li>I am moving money by <strong>direct transfer</strong>, not by a check paid to me.</li>
<li>My dealer has given me a written quote with the markup over spot (see our <a href="/articles/gold-ira-fees">gold IRA fees guide</a>).</li>
<li>I have checked that the metals I am buying are IRA-eligible (see our <a href="/articles/irs-approved-precious-metals">IRS-eligible metals guide</a>).</li>
<li>I understand how RMDs and distributions will work (see our <a href="/articles/gold-ira-taxes-and-rmds">taxes and RMDs guide</a>).</li>
</ul>`,
  },
  {
    heading: "Do I need a custodian for a gold IRA?",
    body: `<p><strong>Yes.</strong> Every IRA, including a gold IRA, must be held by a qualified trustee or custodian - a bank, a qualifying trust company or an IRS-approved non-bank trustee. You cannot hold IRA gold yourself, and a dealer cannot act as your custodian unless it is itself qualified. The custodian must also hold the metal through an approved depository; keeping it at home can make it a taxable distribution. See <a href="https://www.irs.gov/publications/p590a" rel="noopener noreferrer" target="_blank">IRS Pub 590-A</a> and our <a href="/articles/gold-ira-rules">gold IRA rules guide</a>.</p>`,
  },
  {
    heading: "Who is the cheapest gold IRA custodian?",
    body: `<p>Based on the <strong>reported</strong> figures we found in October 2026, <strong>GoldStar Trust</strong> had the lowest annual fee ($90 plus $125 commingled storage, about $215 a year) among the custodians we could fully model, followed by <strong>STRATA Trust</strong> ($150 plus $115 storage, $265 a year, plus trade fees). <strong>Kingdom Trust</strong> reportedly charges no annual account fee, but that figure is low-confidence. For small accounts under $15,000, <strong>Equity Trust</strong>'s published $225 tier is competitive.</p>
<p>But "cheapest" depends on your balance, how often you trade, and how you plan to take money out. Both GoldStar and STRATA figures come from third-party sites and STRATA's changed in September 2026, so confirm current fees directly. And remember the custodian is rarely your biggest cost - the dealer's markup usually is. Use our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> to compare total costs.</p>`,
  },
  {
    heading: "Can I pick my own depository?",
    body: `<p><strong>Usually, from the custodian's list.</strong> Most custodians work with several depositories - often Delaware Depository and Brink's, and sometimes IDS or the Texas Bullion Depository - and you choose one on the account application. You cannot choose a depository your custodian does not work with, and you cannot use your home or a personal safe deposit box. Rates differ: Brink's is reported at $1.50 per $1,000 a year, while Delaware is reported at $0.80-$1.00 per $1,000 with a $95-$125 minimum, so the choice can change your bill. Ask your custodian for each option's current rate.</p>`,
  },
  {
    heading: "Is my gold insured at the depository?",
    body: `<p>Depositories used for IRAs generally carry insurance against physical loss of the metal in their care, but the details - insurer, limits, and whether shipping is covered - vary, and we did not find published details in our research. Insurance does not protect you from a fall in gold's price or from overpaying a dealer. Ask the custodian or depository for a written summary of coverage and whether it covers your metal at full market value. See our <a href="#insurance-and-audits-what-to-ask">insurance and audit questions</a>.</p>`,
  },
  {
    heading: "Can I visit my gold at the depository?",
    body: `<p>Policies vary by depository, and many do not offer routine visits for IRA customers. Because the metal belongs to your IRA and is held by the custodian, any visit would normally have to be arranged through the custodian and the depository in advance, and may not be offered at all. If seeing your metal matters to you, ask before you open the account. What you can always do is check your statement, which should list each product and quantity, and ask the custodian for confirmation of your holdings at any time.</p>`,
  },
  {
    heading: "What happens to my gold if the custodian goes out of business?",
    body: `<p>IRA assets held by a custodian are held for your benefit and are generally kept separate from the custodian's own assets. If a custodian fails or exits the business, its regulator would normally oversee moving accounts to a successor custodian, and your metal - which sits at a separate depository, recorded in your IRA's name - should be transferred, not used to pay the custodian's debts. The details depend on the custodian's charter and the regulator involved. This is one reason to choose a custodian whose legal status and regulator you have confirmed, to keep your own records of what you own, and to check that your statements list your holdings by product and quantity.</p>`,
  },
  {
    heading: "The bottom line on gold IRA custodians and depositories",
    body: `<p>The custodian and depository charge most of the yearly fees you will pay for as long as you own a gold IRA. Here is what matters most:</p>
<ol>
<li><strong>Know who does what.</strong> The dealer sells the metal; the custodian holds the IRA; the depository stores the metal. The IRS approves non-bank trustees, never dealers.</li>
<li><strong>Know your pricing model.</strong> Flat fees (STRATA, GoldStar, New Direction) get cheaper as a percentage as your account grows. Tiered fees (Equity Trust) rise with your balance - from $425 at $50,000 to $500 at $100,000 and $700 at $250,000 a year under the published schedule. Per-asset fees (Madison Trust) depend on how assets are counted.</li>
<li><strong>Run the 10-year numbers.</strong> At $100,000, our illustration ranges from about $2,200 to $6,560 in custodian and storage fees over ten years - a gap of $4,360.</li>
<li><strong>Check storage pricing.</strong> Percentage storage (Brink's, Delaware) can be cheapest under about $75,000 and costs more than a flat $110-$125 above about $73,000-$156,000, depending on the rate.</li>
<li><strong>Commingled storage is usually enough</strong> for common bullion; segregated adds about $50-$100 a year at flat-fee custodians.</li>
<li><strong>You can usually choose,</strong> and you can switch later by trustee-to-trustee transfer - but know the exit fees.</li>
<li><strong>Get everything in writing,</strong> from the custodian itself, with a revision date. Most figures in this guide are reported by third parties, and fees change.</li>
</ol>
<p>Custodian fees are important, but they are usually smaller than the dealer's markup on the metal. Read our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> for the full picture, use the <a href="/gold-ira-fee-calculator">fee calculator</a> to run your own numbers, and see our <a href="/articles/gold-ira-rollover">rollover guide</a> for how to move money safely. If you are considering silver too, our <a href="/articles/silver-ira">silver IRA guide</a> covers the differences.</p>
<p>When you are ready to compare companies, start with our <a href="/">gold IRA company rankings</a> and <a href="/how-we-rank">how we rank</a>, then read the reviews of <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>. Ask each one which custodian and depository it will use, and get that custodian's fee schedule before you sign.</p>
<p>Finally, a gold IRA pays no interest or dividends, has real ongoing costs, and gold can fall sharply - about 29% between January and June 2026. A fee-only financial adviser or tax professional who does not sell metals can help you decide how much, if any, belongs in your retirement plan.</p>
${DISCLAIMER}`,
  },
];
