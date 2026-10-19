import type { ArticleSection } from "@/lib/config";

// Part 4 of "Gold IRA Custodians & Depositories Compared (2026)".
// Depository profiles, storage cost comparison at $50k-$500k (flat vs
// per-$1,000 pricing and crossover points), segregated vs commingled,
// insurance and audits, which custodians the companies on this site
// reportedly use, and whether you can choose your own custodian.

export const part4: ArticleSection[] = [
  {
    heading: "Gold IRA depositories compared",
    body: `<p>The depository is the vault where your IRA's metal actually sits. You will rarely deal with it directly - the custodian contracts with it and passes on the bill - but the depository you pick affects your storage cost, how your metal is held and how easily you can move it later.</p>
<p>One important fact up front: <strong>no major depository we looked at publishes a simple IRA rate card</strong>. IRA storage rates reach the public mostly through custodian forms and dealer disclosures, and those sources conflict. Every rate below is <strong>reported</strong>, and you should confirm the current rate with your custodian before you choose.</p>
<h3>Delaware Depository</h3>
<p>Delaware Depository, in Wilmington, Delaware, is probably the depository named most often on gold IRA paperwork. It offers both commingled and segregated storage. Reported rates conflict:</p>
<table>
<thead><tr><th>Source</th><th>Commingled</th><th>Segregated</th></tr></thead>
<tbody>
<tr><td>Custodian election form</td><td>$0.80 per $1,000 a year ($95 minimum)</td><td>$1.60 per $1,000 a year ($190 minimum)</td></tr>
<tr><td>Birch Gold Group disclosure</td><td>$1.00 per $1,000 ($125 minimum)</td><td>$1.80 per $1,000 ($220 minimum)</td></tr>
<tr><td>Many review sites [third-party]</td><td>$100 flat</td><td>$150 flat</td></tr>
</tbody>
</table>
<p>The difference between sources likely reflects different custodian contracts, different dates, or the custodian adding its own margin. The practical lesson: the "same" vault can cost different amounts depending on which custodian you use. Ask your custodian for the exact Delaware rate it will charge you.</p>
<p><strong>Who reportedly uses it:</strong> Augusta Precious Metals (background knowledge, not confirmed), Goldco, Birch Gold Group and Noble Gold, according to our research notes.</p>
<h3>Brink's</h3>
<p>Brink's is a large security and logistics company that operates precious metals vaults. A custodian storage form (from Entrust) lists Brink's IRA storage at <strong>$1.50 per $1,000 of value a year (15 basis points), for all metals</strong>. We did not find a separate commingled or segregated rate or a minimum on that form.</p>
<p>Brink's has vaults in more than one location; ask which facility would hold your metal. <strong>Who reportedly uses it:</strong> Goldco and Birch Gold Group list Brink's as a storage option, according to our research notes.</p>
<h3>International Depository Services (IDS) - Delaware and Texas</h3>
<p>IDS operates depositories in Delaware and Texas. One custodian schedule shows IDS <strong>segregated storage at a flat $150 a year for accounts under $500,000 and $200 a year above that</strong>. That schedule may be outdated, so confirm it. Noble Gold, a company we do not rank, reportedly offers storage at IDS of Texas as well as Delaware.</p>
<p>A flat segregated rate like this is unusual and, if current, very competitive on larger accounts.</p>
<h3>Texas Bullion Depository</h3>
<p>The Texas Bullion Depository is run by the State of Texas, in Leander, near Austin. It publishes a pricing page: <a href="https://texasbulliondepository.gov/pricing" rel="noopener noreferrer" target="_blank">texasbulliondepository.gov/pricing</a>. The official schedule we saw dates from 2018 and uses <strong>daily accrual with a $25-per-quarter minimum</strong>. For IRA accounts, rates are reportedly <strong>negotiated</strong> through the custodian, and old press coverage cited about <strong>0.5% of value a year</strong>, which would be expensive at larger balances. Treat that 0.5% as a rough, dated figure only.</p>
<p>Some people like the idea of a state-run vault. Check whether your custodian works with it, and get the IRA rate in writing - it may differ sharply from the retail schedule.</p>
<h3>A-Mark / CNT Depository</h3>
<p>You may see a depository connected with precious metals wholesaler A-Mark on custodian lists, sometimes shown as CNT Depository. <strong>Our research found no published IRA storage rates</strong> for it, so we cannot give you numbers. If your dealer or custodian suggests it, ask for the annual rate (flat or per $1,000), the minimum, whether storage is commingled or segregated, and who insures the metal.</p>
<h3>Custodian-bundled storage</h3>
<p>Some custodians quote storage themselves as a flat fee. As reported in October 2026:</p>
<table>
<thead><tr><th>Custodian</th><th>Commingled / non-segregated</th><th>Segregated</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Equity Trust</td><td>$110</td><td>$160</td><td>Official fee schedule, Rev 11/2025</td></tr>
<tr><td>STRATA Trust</td><td>$115</td><td>$175</td><td>Third-party</td></tr>
<tr><td>GoldStar Trust</td><td>$125</td><td>$225 min + ~0.18% above $125k</td><td>Third-party</td></tr>
<tr><td>Kingdom Trust</td><td>$150</td><td>$240</td><td>Third-party, low confidence</td></tr>
</tbody>
</table>
<p>Ask which depository the bundled fee covers and whether it changes at higher balances.</p>`,
  },
  {
    heading: "Storage costs at $50,000 to $500,000: flat vs percentage pricing",
    body: `<p>Storage is priced in two ways. <strong>Flat</strong> pricing charges the same dollar amount whatever your metal is worth. <strong>Percentage</strong> pricing (often written as "$X per $1,000" or in basis points) charges more as your metal's value rises. Which is cheaper depends on how much you hold.</p>
<h3>Commingled / non-segregated storage - annual cost</h3>
<table>
<thead><tr><th>Option (reported rate)</th><th>$50,000</th><th>$100,000</th><th>$250,000</th><th>$500,000</th></tr></thead>
<tbody>
<tr><td>Equity Trust bundled ($110 flat)</td><td>$110</td><td>$110</td><td>$110</td><td>$110</td></tr>
<tr><td>STRATA bundled ($115 flat)</td><td>$115</td><td>$115</td><td>$115</td><td>$115</td></tr>
<tr><td>GoldStar bundled ($125 flat)</td><td>$125</td><td>$125</td><td>$125</td><td>$125</td></tr>
<tr><td>Delaware, election form ($0.80/$1,000, $95 min)</td><td>$95</td><td>$95</td><td>$200</td><td>$400</td></tr>
<tr><td>Delaware, Birch disclosure ($1.00/$1,000, $125 min)</td><td>$125</td><td>$125</td><td>$250</td><td>$500</td></tr>
<tr><td>Brink's ($1.50/$1,000)</td><td>$75</td><td>$150</td><td>$375</td><td>$750</td></tr>
<tr><td>Texas Bullion Depository (~0.5%, old press, negotiated)</td><td>$250</td><td>$500</td><td>$1,250</td><td>$2,500</td></tr>
</tbody>
</table>
<p><strong>How we did the math:</strong> for "per $1,000" rates, divide the account value by 1,000 and multiply by the rate, then apply any minimum. For example, Delaware at $250,000: 250 x $0.80 = $200 (above the $95 minimum). At $50,000: 50 x $0.80 = $40, which is below the minimum, so you pay $95. Brink's at $500,000: 500 x $1.50 = $750.</p>
<h3>Segregated storage - annual cost</h3>
<table>
<thead><tr><th>Option (reported rate)</th><th>$50,000</th><th>$100,000</th><th>$250,000</th><th>$500,000</th></tr></thead>
<tbody>
<tr><td>IDS segregated ($150 under $500k, $200 above)</td><td>$150</td><td>$150</td><td>$150</td><td>$200</td></tr>
<tr><td>Equity Trust bundled ($160 flat)</td><td>$160</td><td>$160</td><td>$160</td><td>$160</td></tr>
<tr><td>STRATA bundled ($175 flat)</td><td>$175</td><td>$175</td><td>$175</td><td>$175</td></tr>
<tr><td>Delaware, election form ($1.60/$1,000, $190 min)</td><td>$190</td><td>$190</td><td>$400</td><td>$800</td></tr>
<tr><td>Delaware, Birch disclosure ($1.80/$1,000, $220 min)</td><td>$220</td><td>$220</td><td>$450</td><td>$900</td></tr>
<tr><td>GoldStar ($225 min + ~0.18% above $125k)</td><td>$225</td><td>$225</td><td>$450</td><td>$900</td></tr>
</tbody>
</table>
<p><em>We assume IDS's $200 rate applies at exactly $500,000; confirm where the cut-off falls. Brink's form gave one rate for all metals and did not separate segregated storage.</em></p>
<h3>Where percentage pricing overtakes flat pricing</h3>
<p>The crossover point is simple to find: <strong>divide the flat fee by the percentage rate</strong>. Here are the key ones:</p>
<table>
<thead><tr><th>Percentage option</th><th>vs flat fee</th><th>Math</th><th>Percentage costs more above</th></tr></thead>
<tbody>
<tr><td>Brink's $1.50/$1,000</td><td>Equity Trust $110</td><td>$110 / $1.50 x $1,000</td><td>about $73,333</td></tr>
<tr><td>Brink's $1.50/$1,000</td><td>STRATA $115</td><td>$115 / $1.50 x $1,000</td><td>about $76,667</td></tr>
<tr><td>Brink's $1.50/$1,000</td><td>GoldStar $125</td><td>$125 / $1.50 x $1,000</td><td>about $83,333</td></tr>
<tr><td>Delaware $0.80/$1,000</td><td>Equity Trust $110</td><td>$110 / $0.80 x $1,000</td><td>$137,500</td></tr>
<tr><td>Delaware $0.80/$1,000</td><td>STRATA $115</td><td>$115 / $0.80 x $1,000</td><td>$143,750</td></tr>
<tr><td>Delaware $0.80/$1,000</td><td>GoldStar $125</td><td>$125 / $0.80 x $1,000</td><td>$156,250</td></tr>
<tr><td>Delaware $1.60/$1,000 seg</td><td>IDS seg $150</td><td>Minimum $190 is already above $150</td><td>Always (at these rates)</td></tr>
<tr><td>Texas ~0.5%</td><td>Equity Trust $110</td><td>$110 / 0.005</td><td>$22,000</td></tr>
</tbody>
</table>
<p>One more useful number: the Delaware election-form rate only rises above its $95 minimum once your metal is worth more than $118,750 ($95 / $0.80 x $1,000). Below that, everyone pays $95.</p>
<h3>What this means for you</h3>
<ul>
<li><strong>Under about $75,000:</strong> percentage pricing (like Brink's) can be the cheapest option.</li>
<li><strong>$75,000 to about $140,000:</strong> flat bundled fees and Delaware's percentage rate (with its minimum) are close; differences are tens of dollars a year.</li>
<li><strong>Above about $150,000:</strong> flat pricing wins clearly. At $500,000, Equity Trust's bundled $110 is $640 a year less than Brink's $750, and $290 less than Delaware's $400.</li>
<li><strong>Rising gold raises percentage storage automatically.</strong> Gold rose about 65% in 2025. A Brink's account worth $100,000 at the start of that year would have paid roughly $150 in storage; at $165,000 it would pay about $248 (165 x $1.50 = $247.50).</li>
</ul>
<p>Remember that these are storage figures alone. Add the custodian's annual fee (see the <a href="#gold-ira-custodians-compared-master-table">master table</a>) to get the full yearly bill.</p>`,
  },
  {
    heading: "Segregated vs commingled storage: is segregated worth it?",
    body: `<p>When you open a gold IRA you will be asked to choose between two kinds of storage.</p>
<table>
<thead><tr><th></th><th>Commingled (also "non-segregated" or "pooled")</th><th>Segregated</th></tr></thead>
<tbody>
<tr><td>How it works</td><td>Your metal is stored together with other customers' identical metal. The depository tracks how many of each item you own.</td><td>Your exact coins and bars are kept apart, usually in a labeled bin or shelf with your account number.</td></tr>
<tr><td>What you get back</td><td>The same type and quantity of metal (for example, 20 one-ounce Gold Eagles), but not necessarily the exact coins you bought</td><td>The exact items you bought, with the same serial numbers on bars</td></tr>
<tr><td>Reported cost (Oct 2026)</td><td>About $75-$150 a year at typical balances</td><td>About $150-$240 a year at typical balances; more at high balances under percentage pricing</td></tr>
<tr><td>Typical extra cost</td><td>-</td><td>About $50-$100 a year at the flat-fee custodians in this guide</td></tr>
</tbody>
</table>
<h3>The real difference</h3>
<p>For standard bullion coins and bars, commingled storage still means <strong>you own specific quantities</strong> of specific products. If you own 20 American Gold Eagles, you are entitled to 20 American Gold Eagles of the same type. Because bullion coins of the same type are interchangeable, getting back "a" Gold Eagle instead of "your" Gold Eagle makes no difference to its value.</p>
<p>Segregation matters more when:</p>
<ul>
<li>You hold <strong>bars with serial numbers</strong> and want those exact bars back.</li>
<li>You hold items where individual condition matters, though most of those (such as rare or graded coins) generally should not be in an IRA in the first place - see our <a href="/articles/irs-approved-precious-metals">guide to IRS-eligible metals</a>.</li>
<li>You want extra peace of mind about the depository's record-keeping.</li>
</ul>
<h3>The cost of segregation over ten years</h3>
<table>
<thead><tr><th>Option</th><th>Extra per year</th><th>Extra over 10 years</th></tr></thead>
<tbody>
<tr><td>Equity Trust: $160 vs $110</td><td>$50</td><td>$500</td></tr>
<tr><td>STRATA: $175 vs $115</td><td>$60</td><td>$600</td></tr>
<tr><td>GoldStar at $100,000: $225 vs $125</td><td>$100</td><td>$1,000</td></tr>
<tr><td>Kingdom Trust: $240 vs $150 (low confidence)</td><td>$90</td><td>$900</td></tr>
<tr><td>Delaware, election form, at $250,000: $400 vs $200</td><td>$200</td><td>$2,000</td></tr>
</tbody>
</table>
<h3>So is segregated worth it?</h3>
<p>For most people holding common bullion coins, <strong>commingled storage is usually enough</strong>: you own a specific quantity of specific products, and the cheaper rate saves $500-$2,000 over a decade in our examples. Segregated storage can make sense if you hold serial-numbered bars, if you plan to take your metal out in kind and want the exact pieces back, or if the extra $50-$100 a year buys you peace of mind you value. It is a personal choice, not a requirement.</p>
<p>Be wary if a salesperson presents segregated storage as essential for "safety" while pushing it hard. Both options are held in the same insured vault. Ask the depository or custodian to explain in writing how your ownership is recorded under each option.</p>`,
  },
  {
    heading: "Insurance and audits: what to ask",
    body: `<p>Insurance and audits are the two things that protect your metal while it sits in the vault. They are also the two things gold IRA marketing describes most vaguely. "Fully insured" and "audited" sound reassuring, but they can mean very different things.</p>
<h3>Insurance: what it does and does not cover</h3>
<p>Depositories typically carry insurance against physical loss of the metal - such as theft, damage or loss in the vault. Insurance does <strong>not</strong> protect you against:</p>
<ul>
<li>A fall in the price of gold (gold fell about 29% from January to June 2026).</li>
<li>Paying too much for the metal in the first place.</li>
<li>A dealer that fails before it delivers metal you have already paid for.</li>
</ul>
<p>We did not find published insurance details for any depository in our research, so we cannot tell you who insures each vault or for how much. Ask.</p>
<h3>Questions to ask about insurance</h3>
<ol>
<li>Who is the insurer, and is the policy written for the full value of all metal stored, or capped?</li>
<li>Does the insurance cover metal <strong>in transit</strong> from the dealer to the vault, and from the vault to another vault or to me?</li>
<li>Is my metal covered at its full current market value, or at the price I paid?</li>
<li>If there is a loss, who makes the claim - me, the custodian or the depository - and how long does it take?</li>
<li>Can you send me a certificate of insurance or a written summary?</li>
</ol>
<h3>Audits: what to ask</h3>
<p>An audit checks that the metal on the depository's books is actually in the vault. Ask:</p>
<ol>
<li>How often is the vault physically counted, and by whom - an independent accounting firm or internal staff?</li>
<li>Does the custodian reconcile its records with the depository's records, and how often?</li>
<li>Will my statement list my holdings by product and quantity (for example, "20 x 1 oz American Gold Eagle"), not just a dollar value?</li>
<li>For segregated storage, can you confirm bar serial numbers in writing?</li>
<li>Is the custodian itself audited, and by whom? (For IRS-approved non-bank trustees, annual audits are part of the approval requirements.)</li>
</ol>
<h3>Check your own statement</h3>
<p>The simplest audit is your own. When your quarterly or annual statement arrives:</p>
<ul>
<li>Check that the products and quantities match your purchase confirmation.</li>
<li>Check that the depository named is the one you chose.</li>
<li>Check that storage type (commingled or segregated) matches what you are paying for.</li>
<li>If anything is off, raise it in writing with the custodian straight away.</li>
</ul>
<p>Watch out for any arrangement where you cannot get a statement from an independent custodian, or where the dealer says it will "hold" the metal for you. That is one of the patterns in the <a href="/articles/gold-ira-scams-red-flags">gold IRA scam cases</a> regulators have brought.</p>`,
  },
  {
    heading: "Which custodians do the companies on this site use?",
    body: `<p>Readers often ask which custodian and depository each gold IRA company uses. Here is what our research found as of October 2026. Some of these pairings are <strong>background knowledge we could not confirm from a primary source</strong>; we say so where that applies. Companies can and do change custodians, so ask the company before you open an account.</p>
<table>
<thead><tr><th>Company</th><th>Custodian(s)</th><th>Depository(ies)</th><th>Confidence</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a></td><td>Equity Trust</td><td>Delaware Depository</td><td>Background knowledge, not confirmed</td></tr>
<tr><td><a href="/reviews/goldco">Goldco</a></td><td>Equity Trust</td><td>Delaware Depository and Brink's</td><td>Custodian: background knowledge, not confirmed. Depositories: reported</td></tr>
<tr><td><a href="/reviews/american-hartford-gold">American Hartford Gold</a></td><td>Not published</td><td>"Approved US depositories"</td><td>Ask the company</td></tr>
<tr><td><a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></td><td>Not published</td><td>Not published</td><td>Ask the company</td></tr>
<tr><td>Birch Gold Group (not ranked on this site)</td><td>Equity Trust, GoldStar, STRATA</td><td>Delaware Depository and Brink's</td><td>Reported</td></tr>
<tr><td>Noble Gold (not ranked on this site)</td><td>Not in our research</td><td>IDS of Texas or Delaware</td><td>Reported</td></tr>
</tbody>
</table>
<h3>A puzzle worth asking about</h3>
<p>Third-party reviews report Augusta's custodian fee as about $100 a year and Goldco's annual fee as about $100-$125. But if those accounts are held at Equity Trust, the custodian's own published schedule shows <strong>$425 a year at $50,000-$99,999 and $500 at $100,000-$199,999</strong>. We do not know why the figures differ. Possible explanations include special pricing negotiated by the dealer, fee waivers (Goldco advertises up to three years of fee waivers for eligible accounts; one source says Augusta offers waivers of "up to 10 years", disclosed only on a call), or simply outdated review data.</p>
<p>The fix is easy: <strong>ask the dealer which custodian it will use and for that custodian's fee schedule for your account size</strong>. Then ask whether any waiver is in writing, how long it lasts, and what you will pay when it ends.</p>
<h3>What the companies report on fees</h3>
<table>
<thead><tr><th>Company</th><th>Reported fees (third-party, Oct 2026)</th></tr></thead>
<tbody>
<tr><td>Augusta Precious Metals</td><td>$50 setup, ~$100 custodian, ~$100 storage ($150 segregated); another source reports a $275 application fee and $225-$275 a year - conflict</td></tr>
<tr><td>Goldco</td><td>$50 setup; annual $100-$125; storage $100 non-segregated / $150 segregated (~$225-$275 a year all-in)</td></tr>
<tr><td>American Hartford Gold</td><td>Setup ~$230; yearly ~$225-$275; storage waived 1 year at $50k+ or 3 years at $100k+</td></tr>
<tr><td>American Gold and Silver Group</td><td>Not published</td></tr>
</tbody>
</table>
<p>For more on each company, see our <a href="/how-we-rank">ranking methodology</a>, our <a href="/">gold IRA company rankings</a>, and our head-to-head <a href="/augusta-vs-goldco">Augusta vs Goldco comparison</a>.</p>`,
  },
  {
    heading: "Can you choose your own custodian when you buy through a dealer?",
    body: `<p><strong>Usually yes - but the dealer has to agree to work with it.</strong> The IRA belongs to you, and you sign the custodian's account application, so legally the choice is yours. In practice, a dealer can only sell to your IRA if it can work with your custodian: the custodian must be willing to pay that dealer, and the dealer must be set up to ship metal to the custodian's depository.</p>
<h3>Why dealers prefer their partner custodian</h3>
<ul>
<li><strong>Speed and familiarity.</strong> Their staff know the forms and the people.</li>
<li><strong>Fewer mistakes.</strong> Wrong forms or missing signatures delay purchases.</li>
<li><strong>Business relationships.</strong> Some dealers may have arrangements with custodians. Ask whether the dealer receives anything from the custodian for referrals.</li>
</ul>
<p>None of this is wrong in itself. But it means the "default" custodian is the dealer's convenience, not necessarily your best price.</p>
<h3>How to ask</h3>
<p>Before you sign anything, say: <em>"I would like to use [custodian name]. Can you work with them? If not, why not?"</em> A good dealer will either agree, or explain clearly why not (for example, the custodian does not accept that dealer or does not use the depository the dealer ships to).</p>
<p>If a dealer refuses outright, insists that only its custodian is "approved", or says you will lose a promotion if you use another custodian, weigh that carefully. A promotion worth a few hundred dollars can be wiped out by higher annual fees over ten years - see our <a href="#10-year-custodian-costs-at-50-000-100-000-and-250-000">10-year comparison</a>.</p>
<h3>Can you choose your own depository?</h3>
<p>Usually you choose from the list of depositories your custodian works with. Most custodians offer more than one (for example, Delaware Depository and Brink's). You cannot choose a depository your custodian does not work with, and you cannot choose your own home or bank safe deposit box - see <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p>
<h3>Order of operations</h3>
<ol>
<li>Shortlist two or three dealers using our guide on <a href="/articles/how-to-choose-a-gold-ira-company">how to choose a gold IRA company</a>.</li>
<li>Ask each dealer which custodians and depositories it works with.</li>
<li>Get each custodian's current fee schedule and compare using the tables in this guide.</li>
<li>Pick the dealer-custodian-depository combination with the lowest total cost <strong>including the dealer's markup</strong>, which our <a href="/articles/gold-ira-fees">fees guide</a> explains.</li>
<li>Open the custodian account first, then fund it by direct transfer (see our <a href="/articles/gold-ira-rollover">gold IRA rollover guide</a>), then place your order through the dealer.</li>
</ol>`,
  },
];
