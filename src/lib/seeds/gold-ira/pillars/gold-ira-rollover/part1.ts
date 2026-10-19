import type { ArticleSection } from "@/lib/config";

// Part 1 of "Gold IRA Rollover: The Complete 2026 Guide".
// Quick answer, the vocabulary of moving money, eligible accounts and the
// direct vs indirect vs trustee-to-trustee rules.

export const part1: ArticleSection[] = [
  {
    heading: "How does a gold IRA rollover work?",
    body: `<div class="qa"><strong>Short answer:</strong> A gold IRA rollover moves money from an existing retirement account - a 401(k), 403(b), 457(b), TSP, pension lump sum or another IRA - into a <strong>self-directed IRA</strong> held by a custodian that allows physical precious metals. The safest way is a <strong>direct rollover or trustee-to-trustee transfer</strong>, where the money goes straight from your old plan to the new custodian and never passes through your hands. Done that way, the move is not taxed and carries no penalty. The new custodian then buys IRS-eligible gold, silver, platinum or palladium on your instructions from a dealer you choose, and the metal is shipped to an approved depository. You never take the metal home while it is inside the IRA.</div>
<p>That paragraph is the whole idea. Everything else in this guide is about doing it without tripping over a tax rule, overpaying for the metal, or being rushed by a salesperson. The mechanics are not complicated, but the details matter a great deal, because the money involved is usually a large share of someone's retirement savings - and the IRS does not give many second chances.</p>
<h3>The three parties in every gold IRA rollover</h3>
<p>Most confusion comes from not knowing who does what. There are always three separate roles, even when one company coordinates the paperwork:</p>
<ul>
<li><strong>The custodian (or trustee).</strong> A bank, trust company or IRS-approved non-bank trustee that legally holds your self-directed IRA, keeps the records, reports to the IRS and pays the bills from your account. Examples include Equity Trust, STRATA Trust and GoldStar Trust.</li>
<li><strong>The dealer.</strong> The company that sells you the coins or bars. Gold IRA companies such as <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, <a href="/reviews/goldco">Goldco</a> and <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> are dealers. They are not custodians, and no dealer is "IRS-approved" - the IRS does not approve or endorse dealers at all.</li>
<li><strong>The depository.</strong> A secure, insured vault such as Delaware Depository, Brink's or the Texas Bullion Depository, where the metal is stored in the custodian's name for your benefit.</li>
</ul>
<p>The dealer often helps you fill in the custodian's forms, which is why it can feel like one company is doing everything. It is still worth knowing that the custodian - not the dealer - is the one the IRS cares about, and the custodian's fee schedule is separate from the dealer's prices.</p>
<h3>What you will learn in this guide</h3>
<p>We start with the vocabulary (rollover vs transfer vs conversion), then go account by account: which plans qualify, when you can move money while still working, and the 20% withholding trap that catches people who let a 401(k) send them a check. Then we walk through the process step by step, show realistic timelines, and cover the special cases - <a href="#roth-401-k-to-roth-gold-ira-and-roth-conversions">Roth money</a>, the <a href="#tsp-to-gold-ira-what-federal-employees-need-to-know">TSP</a>, and <a href="#partial-rollovers-and-deciding-how-much-to-move">partial rollovers</a>.</p>
<p>The second half covers what you can buy, where it must be stored, <a href="#what-a-gold-ira-rollover-costs-first-year-and-10-year-examples">what it really costs over ten years</a>, the mistakes and sales tactics to watch for, how the companies we cover compare on rollovers, and how you eventually get the money back out. If you are new to the whole idea, our plain-English explainer <a href="/articles/what-is-a-gold-ira">What Is a Gold IRA?</a> and our <a href="/articles/gold-ira">complete gold IRA guide</a> are good companions to this one.</p>
<p>All company figures below are third-party-reported snapshots from October 2026. Tax rules are summarized from IRS publications and the Internal Revenue Code. None of this is personal advice - for a move this size, a short session with a tax professional or a fee-only financial adviser is money well spent.</p>`,
  },
  {
    heading: "Rollover vs transfer vs conversion: the three ways money moves",
    body: `<p>People - and salespeople - use "rollover" loosely to mean any move of retirement money. The IRS uses three different terms, and they have different rules. Getting the word right on the paperwork is the first step to avoiding a tax bill.</p>
<h3>1. Transfer (trustee-to-trustee transfer)</h3>
<p>A <strong>transfer</strong> moves money from one IRA to another IRA of the <em>same type</em> - traditional to traditional, Roth to Roth, SEP to traditional - directly between the two custodians. You never receive a check made out to you. The IRS does not even treat a transfer as a distribution, so there is no tax reporting on your return, no withholding and no limit on how many you can do in a year. Moving an existing IRA at a bank or brokerage into a self-directed gold IRA is almost always done as a transfer.</p>
<h3>2. Rollover (direct or indirect)</h3>
<p>A <strong>rollover</strong> moves money out of one retirement plan and into another, where the money leaves one type of plan and lands in another - most commonly from an employer plan such as a 401(k), 403(b), governmental 457(b) or the TSP into an IRA. A rollover can be:</p>
<ul>
<li><strong>Direct</strong> - the plan pays the money straight to your new IRA custodian (sometimes by a check made payable to the custodian "for the benefit of" you, which you simply forward). No tax is withheld.</li>
<li><strong>Indirect</strong> (the "60-day rollover") - the plan pays the money to <em>you</em>, and you have 60 days to deposit it into the new IRA. From an employer plan, 20% is withheld for federal tax. This is where most rollover disasters begin.</li>
</ul>
<p>Rollovers are reported to the IRS on Form 1099-R by the old plan and on Form 5498 by the new custodian, and you report them on your tax return as a non-taxable rollover. That reporting is routine; it just means the paper trail must match.</p>
<h3>3. Conversion (traditional to Roth)</h3>
<p>A <strong>Roth conversion</strong> moves pre-tax money (from a traditional IRA or a pre-tax 401(k)) into a Roth IRA. Unlike a transfer or rollover, a conversion is <strong>taxable</strong>: the converted amount is added to your income for that year. In exchange, future qualified withdrawals from the Roth are tax-free and the Roth IRA has no required minimum distributions during your lifetime. A gold IRA can be a Roth gold IRA, and some people convert at the same time they move into metals. We cover the math in the <a href="#roth-401-k-to-roth-gold-ira-and-roth-conversions">Roth section</a> and in our <a href="/articles/roth-gold-ira">Roth gold IRA guide</a>.</p>
<h3>Side by side</h3>
<table>
<thead><tr><th>Move</th><th>Typical example</th><th>Taxable?</th><th>Withholding</th><th>Frequency limit</th></tr></thead>
<tbody>
<tr><td>Trustee-to-trustee transfer</td><td>Bank IRA to self-directed gold IRA</td><td>No</td><td>None</td><td>None</td></tr>
<tr><td>Direct rollover</td><td>Old 401(k) paid straight to new custodian</td><td>No (pre-tax to pre-tax, Roth to Roth)</td><td>None</td><td>None</td></tr>
<tr><td>Indirect (60-day) rollover from an employer plan</td><td>401(k) check made out to you</td><td>No, if the full amount is redeposited within 60 days</td><td>20% mandatory</td><td>Not limited by the IRA once-per-year rule</td></tr>
<tr><td>Indirect (60-day) IRA-to-IRA rollover</td><td>IRA check made out to you</td><td>No, if redeposited within 60 days</td><td>Optional (often 10% unless you opt out)</td><td>One per 12 months across all your IRAs</td></tr>
<tr><td>Roth conversion</td><td>Traditional IRA to Roth gold IRA</td><td><strong>Yes</strong> - added to income</td><td>Optional</td><td>None</td></tr>
</tbody>
</table>
<p>The practical rule: <strong>ask for a direct rollover or a trustee-to-trustee transfer every time</strong>, and use the indirect method only if there is truly no alternative.</p>`,
  },
  {
    heading: "Which accounts qualify for a gold IRA rollover",
    body: `<p>Most tax-advantaged retirement accounts can be moved into a self-directed IRA that holds metals. The catch is not usually <em>whether</em> the account qualifies, but <em>when</em> you are allowed to move it - an employer plan generally lets you roll money out only after you leave the job, reach a certain age, or the plan ends. The IRS publishes a one-page <a href="https://www.irs.gov/pub/irs-tege/rollover_chart.pdf" rel="noopener" target="_blank">rollover chart</a> that shows every allowed combination; the summary below covers the accounts our readers ask about most.</p>
<table>
<thead><tr><th>Account</th><th>Can it go into a gold IRA?</th><th>Key condition</th><th>Lands in</th></tr></thead>
<tbody>
<tr><td>Traditional IRA</td><td>Yes, any time</td><td>Use a trustee-to-trustee transfer</td><td>Traditional gold IRA</td></tr>
<tr><td>Roth IRA</td><td>Yes, any time</td><td>Transfer Roth to Roth</td><td>Roth gold IRA</td></tr>
<tr><td>401(k) - former employer</td><td>Yes</td><td>Request a direct rollover</td><td>Traditional (pre-tax) or Roth (Roth 401(k) money)</td></tr>
<tr><td>401(k) - current employer</td><td>Sometimes</td><td>Only if the plan allows in-service distributions (often at 59½)</td><td>Same as above</td></tr>
<tr><td>403(b)</td><td>Yes, after separation; sometimes in service at 59½</td><td>Plan rules</td><td>Traditional or Roth gold IRA</td></tr>
<tr><td>Governmental 457(b)</td><td>Yes, after separation (and some plans in service)</td><td>Rolled money becomes subject to IRA early-withdrawal rules</td><td>Traditional gold IRA</td></tr>
<tr><td>Thrift Savings Plan (TSP)</td><td>Yes, after separation or via age-based in-service withdrawal at 59½</td><td>TSP rules</td><td>Traditional and/or Roth gold IRA</td></tr>
<tr><td>SEP IRA</td><td>Yes, any time</td><td>It is already an IRA</td><td>Traditional (or SEP) gold IRA</td></tr>
<tr><td>SIMPLE IRA</td><td>Yes, but only after 2 years of participation</td><td>25% penalty if moved to a non-SIMPLE account in the first 2 years</td><td>Traditional gold IRA</td></tr>
<tr><td>Pension / cash-balance plan</td><td>Only a lump-sum payout</td><td>Plan must offer a lump sum and you must be eligible to take it</td><td>Traditional gold IRA</td></tr>
<tr><td>Inherited IRA (non-spouse)</td><td>Transfer only, never a rollover</td><td>Must stay an inherited IRA; 10-year rule usually applies</td><td>Inherited self-directed IRA (if the custodian offers it)</td></tr>
<tr><td>Roth 401(k) / Roth 403(b) / Roth TSP</td><td>Yes</td><td>Roth money must go to a Roth IRA</td><td>Roth gold IRA</td></tr>
</tbody>
</table>
<p class="small"><em>Summary for education only. Your plan document and the IRS rollover chart are the final word.</em></p>
<h3>401(k) from a former employer</h3>
<p>This is the most common source of gold IRA money and the simplest case. Once you have left the employer - for any reason, at any age - the plan must let you take a distribution, and you can ask for it to be paid as a direct rollover to your new custodian. Our dedicated <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover guide</a> has the plan-by-plan details.</p>
<p>One thing to weigh before you move: if you left your job in or after the year you turned 55, many 401(k) plans let you withdraw without the 10% early-withdrawal penalty (often called the "rule of 55"). That exception applies to the employer plan, not to IRAs. If you are between 55 and 59½ and expect to need the money soon, moving it all to an IRA could cost you that flexibility. A tax professional can tell you whether this applies to you.</p>
<h3>403(b) and 457(b)</h3>
<p>A 403(b) (used by schools, hospitals and nonprofits) works much like a 401(k) for rollover purposes. A governmental 457(b) has a special feature: withdrawals from the 457(b) itself are not subject to the 10% early-withdrawal penalty after you leave the job, regardless of age. Once you roll that money into an IRA, it becomes IRA money and the 10% penalty can apply to withdrawals before 59½. If you are under 59½ and might need some of the money, consider leaving part of it in the 457(b).</p>
<h3>SEP and SIMPLE IRAs</h3>
<p>A SEP IRA is a traditional IRA with special contribution rules, so it can be transferred to a self-directed gold IRA any time. A SIMPLE IRA has a trap: during the first <strong>two years</strong> after you first participated in your employer's SIMPLE plan, you can move the money tax-free only to another SIMPLE IRA. Move it to a traditional IRA in that window and any amount treated as a distribution can face a <strong>25%</strong> additional tax instead of the usual 10%. After two years, it can move like any IRA.</p>
<h3>Pensions and cash-balance plans</h3>
<p>A traditional pension (defined-benefit plan) normally pays a monthly annuity, and annuity payments cannot be rolled over. But many pensions - and almost all cash-balance plans - offer a <strong>lump-sum</strong> option when you leave or retire. If you elect the lump sum, it can be paid as a direct rollover into an IRA, including a gold IRA. Choosing a lump sum over a lifetime pension is a major, usually irreversible decision that deserves a careful comparison by a fee-only adviser; the gold question comes second.</p>
<h3>Inherited IRAs</h3>
<p>If you inherit an IRA from a spouse, you generally can treat it as your own and move it like any other IRA. A <strong>non-spouse beneficiary cannot roll it over</strong>. The only way to move it is a direct trustee-to-trustee transfer into an inherited IRA titled in the deceased owner's name for your benefit. If a check is ever paid to you, it is a taxable distribution and cannot be put back. Most non-spouse beneficiaries must also empty the account within 10 years, which matters if you are buying a physical asset with a sales spread. Not every self-directed custodian offers inherited IRAs, so ask first.</p>
<h3>Roth 401(k)</h3>
<p>Roth money in a workplace plan can be rolled into a Roth IRA, including a Roth gold IRA. The Roth and pre-tax parts of a 401(k) usually have to go to two different IRAs. We cover the five-year clock and other Roth wrinkles in the <a href="#roth-401-k-to-roth-gold-ira-and-roth-conversions">Roth section</a> below.</p>`,
  },
  {
    heading: "Direct rollover vs indirect rollover vs trustee-to-trustee transfer",
    body: `<p>This is the single most important technical choice in the whole process. Choose the direct route and the move is a paperwork exercise. Choose the indirect route and you are personally responsible for a deadline, a withholding shortfall and a once-a-year limit.</p>
<table>
<thead><tr><th></th><th>Trustee-to-trustee transfer</th><th>Direct rollover</th><th>Indirect (60-day) rollover</th></tr></thead>
<tbody>
<tr><td>Used for</td><td>IRA to IRA</td><td>Employer plan to IRA</td><td>Either, when money is paid to you</td></tr>
<tr><td>Who receives the money</td><td>New custodian</td><td>New custodian (or a check payable to it)</td><td>You</td></tr>
<tr><td>Tax withheld</td><td>None</td><td>None</td><td>20% from employer plans; optional from IRAs</td></tr>
<tr><td>Deadline</td><td>None</td><td>None</td><td>60 days from the day you receive it</td></tr>
<tr><td>How often</td><td>Unlimited</td><td>Unlimited</td><td>IRA-to-IRA: once per 12 months</td></tr>
<tr><td>Risk of an accidental tax bill</td><td>Very low</td><td>Very low</td><td>High</td></tr>
</tbody>
</table>
<h3>The 60-day rule</h3>
<p>With an indirect rollover, you have <strong>60 days</strong> from the day you receive the distribution to deposit it into an IRA. Day 61 is too late: the money becomes a taxable distribution, plus the 10% additional tax if you are under 59½. Weekends and holidays are not added. Mail delays are not an excuse. If you are buying metals, remember the deadline is about depositing cash into the IRA - not about buying the metal - but you still need the account opened and ready to receive the deposit well before day 60.</p>
<h3>The once-per-12-months rule</h3>
<p>Since 2015, following the <em>Bobrow</em> Tax Court case, you may do only <strong>one IRA-to-IRA indirect rollover in any 12-month period</strong>, counted across <em>all</em> your IRAs combined - traditional, Roth, SEP and SIMPLE. It is a rolling 12 months, not a calendar year. A second indirect rollover inside that window is treated as a taxable distribution, and if you deposit it anyway it can be treated as an excess contribution with its own 6% per year penalty.</p>
<p>The rule does <em>not</em> apply to:</p>
<ul>
<li>trustee-to-trustee transfers between IRAs;</li>
<li>direct or indirect rollovers from an employer plan (401(k), 403(b), 457(b), TSP) to an IRA;</li>
<li>rollovers from an IRA to an employer plan; or</li>
<li>Roth conversions.</li>
</ul>
<p>This is another reason to always ask for a transfer: you can do as many as you like, with no clock running. IRS <a href="https://www.irs.gov/publications/p590a" rel="noopener" target="_blank">Publication 590-A</a> explains both rules in detail.</p>
<h3>Missed the 60 days? Rev. Proc. 2020-46</h3>
<p>The IRS does allow relief in some cases. Under <strong>Revenue Procedure 2020-46</strong>, you can give the receiving custodian a written <em>self-certification</em> that you missed the deadline for one of the listed reasons - for example, an error by the financial institution, a misplaced and never-cashed check, serious illness of you or a family member, a death in the family, a house that was severely damaged, a postal error, or the money being placed in an account you mistakenly thought was a retirement plan. You generally must complete the rollover as soon as practicable once the reason no longer stops you (30 days is treated as meeting that standard).</p>
<p>Self-certification is not a free pass. The custodian may accept the deposit, but the IRS can still review it on audit and reject it if the facts do not hold up. Other options are a private letter ruling (expensive and slow) and an automatic waiver in narrow cases where a bank error caused the delay. The best plan is to never need any of them.</p>
<h3>Which one should you choose?</h3>
<ol>
<li><strong>IRA to gold IRA:</strong> trustee-to-trustee transfer. Your new custodian initiates it.</li>
<li><strong>401(k), 403(b), 457(b), TSP or pension lump sum to gold IRA:</strong> direct rollover. You ask the old plan to pay the new custodian.</li>
<li><strong>Indirect rollover:</strong> only if the old plan refuses to pay the new custodian directly or you have already received a check. If so, read the next two sections carefully.</li>
</ol>
<p>When a dealer or a website says a gold IRA rollover is "tax-free and penalty-free", that is true only of the direct methods done correctly. It is not a guarantee that applies however the money moves.</p>`,
  },
];
