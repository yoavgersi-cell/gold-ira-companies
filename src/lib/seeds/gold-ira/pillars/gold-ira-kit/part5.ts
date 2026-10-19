import type { ArticleSection } from "@/lib/config";
import { DISCLAIMER } from "../../shared";

// Part 5: comparing two or three companies after the kits arrive (quote
// template, written spot comparison, custodian fee schedule), decision
// steps, FAQs (question-shaped headings feed FAQPage schema) and the bottom
// line.

export const part5: ArticleSection[] = [
  {
    heading: "How to compare 2-3 companies after receiving kits",
    body: `<p>Kits are a starting point. The real comparison starts when you ask two or three companies for the same thing, in writing, on the same day. Here is how to do it.</p>
<h3>Step 1: Ask every company for the same quote</h3>
<p>Choose a simple, identical order - for example, "$50,000 in 1 oz American Gold Eagles inside a traditional IRA" - and ask each company to email a quote that shows the product, the quantity, the price per coin, the total, and the spot price of gold at the time of the quote. Asking for the same product makes the numbers easy to compare. If a company insists on a different product, ask it to quote yours as well.</p>
<h3>Step 2: Work out the markup over spot</h3>
<p>Divide the price per coin by the spot price, subtract 1, and multiply by 100. For example, with gold at about $4,170 an ounce (Kitco, October 19, 2026), a 1 oz Eagle quoted at $4,420 has a markup of about 6% ($4,420 / $4,170 = 1.06). For reference, one large online dealer (SD Bullion) listed 1 oz Gold Eagles at roughly 3-6% over spot in 2026, and generic 1 oz gold bars averaged about 2% over spot at the cheapest dealers on October 9, 2026 (findbullionprices). Phone-based IRA dealers usually charge more because of their service and advertising costs; you are deciding whether the difference is worth it.</p>
<h3>Step 3: Get the custodian's fee schedule</h3>
<p>Ask each company which custodian it uses, then get the fee schedule from the <strong>custodian</strong>, not just the dealer's summary. Fees vary widely. For example:</p>
<table>
<thead><tr><th>Custodian (example)</th><th>Annual fee</th><th>Storage</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Equity Trust</td><td>Tiered: $350 at $25,000-49,999; $425 at $50,000-99,999; $500 at $100,000-199,999</td><td>$110 non-segregated / $160 segregated</td><td>Retail fee schedule, rev. 11/06/2025</td></tr>
<tr><td>STRATA Trust</td><td>$150 flat "Precious Metals Tier" (from Sep 1, 2026)</td><td>$115 commingled / $175 segregated</td><td>Third-party summary</td></tr>
<tr><td>GoldStar Trust</td><td>$90 flat (per reviews, Dec 2025)</td><td>$125 commingled</td><td>Third-party summary</td></tr>
<tr><td>Preferred Trust</td><td>$300 for a metals-only IRA</td><td>Separate</td><td>Company fee schedule</td></tr>
</tbody>
</table>
<p class="small"><em>Examples only, from our research notes (October 2026). Custodian fees change; get the current schedule directly from the custodian.</em></p>
<h3>Step 4: Fill in a side-by-side template</h3>
<table>
<thead><tr><th>Item</th><th>Company 1</th><th>Company 2</th><th>Company 3</th></tr></thead>
<tbody>
<tr><td>Date and time of quote</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Spot price of gold at time of quote</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Product quoted</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Price per coin or bar</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Markup over spot (%)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Ounces received for the same dollars</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Written buyback price today (per coin)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Round-trip cost (buy price minus buyback price)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Custodian name and annual fee at my balance</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Storage fee and type (segregated / commingled)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Setup and other one-time fees</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Promotion and its conditions</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Price if I decline the promotion</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Refund window (days, full price or market value?)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>Total spot value I receive</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
<tr><td>How the call felt (pressure 1-5)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
</tbody>
</table>
<h3>Step 5: Compare the right row</h3>
<p>The most important rows are <strong>total spot value you receive</strong> and <strong>round-trip cost</strong>. A company with slightly higher yearly fees but a much smaller spread may cost you less over five or ten years. A company with a large bonus may cost you more. Our <a href="/gold-ira-fee-calculator">fee calculator</a> adds up yearly costs over time, and our head-to-head pages - such as <a href="/american-hartford-gold-vs-goldco">American Hartford Gold vs Goldco</a> and <a href="/augusta-vs-goldco">Augusta vs Goldco</a> - compare published terms side by side.</p>`,
  },
  {
    heading: "What to do after reading a kit",
    body: `<p>Once you have read a kit, here is a simple path from "curious" to "decided" - whether that decision is yes or no.</p>
<ol>
<li><strong>Decide whether metals belong in your plan at all.</strong> Gold pays no income and can fall for years. Read <a href="/articles/is-a-gold-ira-a-good-investment">is a gold IRA a good investment</a> and consider a conversation with a fee-only financial adviser.</li>
<li><strong>Decide how much.</strong> Pick a percentage or dollar amount before you talk to any company, and write it down. Do not let a salesperson set it.</li>
<li><strong>Check which account you will move.</strong> 401(k), TSP, 403(b), traditional or Roth IRA each have different rules. See the <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a> and <a href="/articles/gold-ira-rules">gold IRA rules</a>.</li>
<li><strong>Fill in the kit worksheet</strong> for each kit, and list your open questions.</li>
<li><strong>Take the calls on your schedule.</strong> Use the 20 questions, and ask for answers by email.</li>
<li><strong>Get two or three written quotes</strong> for the same product on the same day, and compare them to spot.</li>
<li><strong>Get the custodian's fee schedule</strong> and the depository's storage terms. Read our guide to <a href="/articles/gold-ira-custodians">gold IRA custodians</a> and <a href="/articles/gold-ira-fees">gold IRA fees</a>.</li>
<li><strong>Check the company's record</strong> on BBB.org, Trustpilot, and regulator and court databases. Use the checklist in <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a>.</li>
<li><strong>Choose eligible, common products</strong> unless you have a clear, written reason not to. See <a href="/articles/best-gold-coins-for-ira">the best gold coins for an IRA</a>.</li>
<li><strong>Sleep on it.</strong> Wait at least a few days after your last call. If the deal disappears because you waited, it was not the deal for you.</li>
<li><strong>If you go ahead, use a direct transfer or direct rollover,</strong> keep copies of everything, and check your first custodian statement against your quote.</li>
</ol>
<p>Deciding <strong>not</strong> to open a gold IRA after reading a kit is also a perfectly good result. You learned something, and you kept your options open.</p>`,
  },
  {
    heading: "Is a free gold IRA kit really free?",
    body: `<p>Yes, in the sense that you pay no money for it. Kits are typically emailed or mailed at no cost to you. But you pay with your contact information and, usually, permission for the company to call, text and email you about opening an account. The kit is a marketing tool, and the information in it is selected to encourage a purchase. Any "free silver" or fee waiver advertised alongside the kit is separate and requires a qualifying investment.</p>`,
  },
  {
    heading: "Will I get sales calls after requesting a gold IRA kit?",
    body: `<p>Almost certainly. Most kit request forms include consent to be contacted by phone, text and email, sometimes including automated calls. Industry descriptions say a representative often calls soon after a request, and emails or newsletters may follow for weeks. You can ask any company to put you on its internal do-not-call list, reply STOP to texts and unsubscribe from emails. Using a separate email address and reading the consent box before you click both help. See <a href="#protecting-your-information">protecting your information</a>.</p>`,
  },
  {
    heading: "Which gold IRA kit is the best?",
    body: `<p>There is no clear "best" kit, and the kit is not the best way to choose a company. Based on third-party descriptions, the kits from American Hartford Gold, Goldco and Augusta Precious Metals cover similar basics in different formats - booklets, online libraries, printed and audio guides, videos and, for Augusta, a web conference offer. We found little independent information on American Gold and Silver Group's kit. What matters more is which company gives you a clear written quote compared with spot, written buyback terms and a full fee schedule. Our <a href="/">rankings</a> and <a href="/how-we-rank">methodology</a> explain how we compare companies (some of which pay us).</p>`,
  },
  {
    heading: "Do I have to buy anything after getting a kit?",
    body: `<p>No. Requesting a kit does not commit you to anything. Consent to contact on these forms is typically stated as "not a condition of purchase," and there is no obligation to open an account. You can read the kit, take a call or not, and decide on your own timeline. If someone tells you that you must act or lose something because you requested a kit, treat that as a pressure tactic.</p>`,
  },
  {
    heading: "Can I trust the information in a gold IRA kit?",
    body: `<p>Partly. The basic mechanics - how a transfer works, the role of a custodian, which common coins are IRA-eligible, the fact that IRA metal must be held by a trustee - are usually broadly accurate. The economic sections, forecasts, testimonials and endorsements are persuasion, not neutral analysis. And the most important numbers - the spread, the buyback price and the full fee schedule - are usually missing. Check rules against <a href="https://www.irs.gov/publications/p590a" rel="nofollow noopener" target="_blank">IRS Publication 590-A</a>, read the <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="nofollow noopener" target="_blank">CFTC advisory</a>, and be wary of any kit that calls a dealer "IRS-approved."</p>`,
  },
  {
    heading: "What should I ask after reading a gold IRA kit?",
    body: `<p>Start with the five questions that matter most, and ask for the answers in writing:</p>
<ol>
<li>"What is your price for this product today, and what is the spot price at the same moment?"</li>
<li>"How is your buyback price calculated, and what would you pay today for what I am buying?"</li>
<li>"Which custodian and depository will I use, and can you send their full fee schedules?"</li>
<li>"What are the exact conditions of any free silver or fee waiver, and is my price lower without it?"</li>
<li>"Will this be a direct transfer or direct rollover, with no check paid to me?"</li>
</ol>
<p>The full list is in <a href="#20-questions-to-ask-on-the-follow-up-call">20 questions to ask on the follow-up call</a>.</p>`,
  },
  {
    heading: "The bottom line on gold IRA kits",
    body: `<p>A free gold IRA kit is a fair trade if you know what you are trading. You get a readable introduction to gold IRAs. The company gets your contact details and a chance to sell to you. The kit will explain the basics well enough, but it is written to persuade, and it usually leaves out the numbers that decide whether a purchase is good value: the <strong>spread over spot</strong>, the <strong>buyback price</strong>, the <strong>custodian and storage fees</strong>, and the <strong>risks</strong>.</p>
<ul>
<li>Read neutral sources first - the <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html" rel="nofollow noopener" target="_blank">CFTC advisory</a> and IRS Publication 590-A - then read the kit with the <a href="#a-kit-reading-worksheet">worksheet</a>.</li>
<li>Control contact: separate email, read the consent box, and ask for the internal do-not-call list when you are done.</li>
<li>Ask the <a href="#20-questions-to-ask-on-the-follow-up-call">20 questions</a> and get answers by email.</li>
<li>Compare two or three written quotes against spot using the <a href="#how-to-compare-2-3-companies-after-receiving-kits">side-by-side template</a>, and run the <a href="#the-free-silver-math-a-worked-example">free silver math</a> before you value any bonus.</li>
<li>Walk away from urgency, fear, proof-coin pushes and anything that will not go on paper.</li>
</ul>
<p>When you are ready to look at specific companies, start with our reviews of <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>, and our <a href="/articles/how-to-choose-a-gold-ira-company">guide to choosing a gold IRA company</a>. Some of these companies pay us; our <a href="/how-we-rank">methodology</a> explains how we rank them. And consider a conversation with a fee-only financial adviser or tax professional before you move retirement money.</p>
${DISCLAIMER}`,
  },
];
