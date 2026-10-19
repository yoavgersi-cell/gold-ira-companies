import type { ArticleSection } from "@/lib/config";

// Part 2 of "Gold IRA Custodians & Depositories Compared (2026)".
// Custodian profiles: Equity Trust (full official tier table from Retail Fee
// Schedule FS-0001-03, Rev. 11/06/2025), STRATA Trust, Kingdom Trust,
// GoldStar Trust and Preferred Trust. Third-party [3P] figures labelled
// "reported" with conflicts noted.

export const part2: ArticleSection[] = [
  {
    heading: "Equity Trust: fees, storage and what to know",
    body: `<p>Equity Trust Company is one of the largest self-directed IRA custodians and one of the names you are most likely to see on gold IRA paperwork. Our research notes list it as a custodian used with Augusta Precious Metals and Goldco (background knowledge we could not confirm from a primary source in October 2026) and as one of the custodians Birch Gold Group works with.</p>
<p>It is also the one custodian in this guide whose full fee schedule we could read in the original: <a href="https://s3.us-east-2.amazonaws.com/forms.equitytrustcompany.info/Retail-Fee-Schedule.pdf" rel="noopener noreferrer" target="_blank">Equity Trust Retail Fee Schedule (FS-0001-03, revised 11/06/2025)</a>. All Equity Trust figures below come from that document.</p>
<h3>The annual fee is tiered - and it is not $75-$225</h3>
<p>Many review sites say Equity Trust charges "$75-$225 a year". According to the custodian's own schedule, that is wrong for any account worth <strong>$15,000 or more</strong>. The annual fee is tiered by account value and is <strong>not prorated</strong> (you pay the full year even if you open in November).</p>
<table>
<thead><tr><th>Account value</th><th>Annual fee</th><th>Plus non-segregated storage ($110)</th><th>Plus segregated storage ($160)</th></tr></thead>
<tbody>
<tr><td>$1 - $14,999</td><td>$225</td><td>$335</td><td>$385</td></tr>
<tr><td>$15,000 - $24,999</td><td>$320</td><td>$430</td><td>$480</td></tr>
<tr><td>$25,000 - $49,999</td><td>$350</td><td>$460</td><td>$510</td></tr>
<tr><td>$50,000 - $99,999</td><td>$425</td><td>$535</td><td>$585</td></tr>
<tr><td>$100,000 - $199,999</td><td>$500</td><td>$610</td><td>$660</td></tr>
<tr><td>$200,000 - $299,999</td><td>$700</td><td>$810</td><td>$860</td></tr>
<tr><td>$300,000 - $399,999</td><td>$750</td><td>$860</td><td>$910</td></tr>
<tr><td>$400,000 - $499,999</td><td>$1,075</td><td>$1,185</td><td>$1,235</td></tr>
<tr><td>$500,000 - $599,999</td><td>$1,750</td><td>$1,860</td><td>$1,910</td></tr>
<tr><td>$600,000 - $699,999</td><td>$1,850</td><td>$1,960</td><td>$2,010</td></tr>
<tr><td>$700,000 - $799,999</td><td>$1,950</td><td>$2,060</td><td>$2,110</td></tr>
<tr><td>$800,000 - $899,999</td><td>$2,000</td><td>$2,110</td><td>$2,160</td></tr>
<tr><td>$900,000 - $999,999</td><td>$2,050</td><td>$2,160</td><td>$2,210</td></tr>
<tr><td>$1,000,000 - $1,999,999</td><td>$2,150</td><td>$2,260</td><td>$2,310</td></tr>
<tr><td>$2,000,000+</td><td>$2,250</td><td>$2,360</td><td>$2,410</td></tr>
</tbody>
</table>
<p><em>Storage columns add Equity Trust's published storage charge ($110 non-segregated or $160 segregated, billed in January) to the annual fee. Source: Equity Trust Retail Fee Schedule FS-0001-03, Rev. 11/06/2025.</em></p>
<h3>All the other Equity Trust fees</h3>
<table>
<thead><tr><th>Fee</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Account setup</td><td>$50 online / $75 paper</td></tr>
<tr><td>Storage</td><td>$160 segregated / $110 non-segregated per year, billed in January</td></tr>
<tr><td>Metals liquidation (selling)</td><td>$10 per asset, maximum $30</td></tr>
<tr><td>Coin shipping and handling</td><td>At cost + $10 ($50 minimum)</td></tr>
<tr><td>In-kind transfer or distribution</td><td>$50 per transaction</td></tr>
<tr><td>Wire</td><td>$30</td></tr>
<tr><td>Termination</td><td>Full: $250; partial: $100 per asset</td></tr>
<tr><td>Distribution / re-registration</td><td>$100 per asset</td></tr>
<tr><td>Late fee</td><td>$50</td></tr>
<tr><td>Paper statements</td><td>$60 a year</td></tr>
</tbody>
</table>
<h3>What this looks like in real life</h3>
<p><strong>Example 1 - a $60,000 account, non-segregated storage.</strong> Annual fee $425 + storage $110 = <strong>$535 a year</strong>. In the first year, add the $50 online setup fee: $535 + $50 = <strong>$585</strong>. As a share of the account: $535 / $60,000 = about <strong>0.89% a year</strong>.</p>
<p><strong>Example 2 - the tier creep.</strong> Say your account is worth $90,000 (annual fee $425). Gold rises 15%, so the account becomes $90,000 x 1.15 = $103,500. You have bought nothing, but you are now in the $100,000-$199,999 tier and your annual fee becomes <strong>$500</strong>, up $75. With storage, your bill goes from $535 to $610.</p>
<p><strong>Example 3 - the jump at $500,000.</strong> The fee goes from $1,075 to $1,750 when an account crosses $500,000 - a $675 step. An account worth $490,000 that rises 3% to $504,700 would pay $675 more in custodian fees the next year.</p>
<p><strong>Example 4 - leaving.</strong> Closing a $100,000 Equity Trust account by moving the metal in kind to another custodian could cost the $250 full termination fee plus a $50 in-kind transfer fee: <strong>$300</strong>, plus whatever the new custodian charges to open. Ask Equity Trust which fees apply to your exact situation before you start - this is our reading of the schedule, not a quote.</p>
<h3>Who Equity Trust may suit</h3>
<ul>
<li><strong>Small accounts under $15,000</strong>, where $225 a year is competitive.</li>
<li>People who want a large, long-established custodian that many dealers already work with, so paperwork is routine.</li>
<li>People who value storage being bundled into one bill.</li>
</ul>
<h3>Who should compare carefully</h3>
<ul>
<li><strong>Accounts of $100,000 or more.</strong> At $100,000 the annual fee plus storage is $610, roughly double some flat-fee custodians. At $250,000 it is $810.</li>
<li>Anyone whose dealer automatically fills in Equity Trust. That may be fine, but run the numbers in the <a href="#10-year-custodian-costs-at-50-000-100-000-and-250-000">10-year comparison below</a> first.</li>
</ul>
<p><strong>Data quality: high.</strong> Taken from the custodian's own published schedule (revised November 2025). Still, confirm the current version before you open an account, because custodians revise schedules.</p>`,
  },
  {
    heading: "STRATA Trust: fees and what to know",
    body: `<p>STRATA Trust Company is a self-directed IRA custodian that offers a dedicated pricing plan for precious metals accounts. Our research notes list it among the custodians Birch Gold Group works with. We could not reach STRATA's own fee schedule from our research environment, so the figures below are <strong>reported by a third-party site (safeounce.com) as of October 2026</strong>.</p>
<table>
<thead><tr><th>Fee</th><th>Reported amount (Oct 2026)</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$50, waived if opened online</td><td>Reported</td></tr>
<tr><td>Annual fee</td><td>$150 flat ("Precious Metals Tier")</td><td>Reported as effective from September 1, 2026; was $125 before that</td></tr>
<tr><td>Per trade</td><td>$40</td><td>Reported</td></tr>
<tr><td>Depository handling</td><td>$35 per trade</td><td>One site reports $75 instead - conflict</td></tr>
<tr><td>Storage, commingled</td><td>$115 a year</td><td>Reported</td></tr>
<tr><td>Storage, segregated</td><td>$175 a year</td><td>Reported</td></tr>
</tbody>
</table>
<h3>What this looks like in real life</h3>
<p><strong>First year, one purchase, commingled storage, opened online:</strong> $0 setup + $150 annual + $115 storage + $40 trade + $35 handling = <strong>$340</strong>.</p>
<p>If the handling fee is actually $75 (the conflicting report): $0 + $150 + $115 + $40 + $75 = <strong>$380</strong>.</p>
<p><strong>Each later year, no trades:</strong> $150 + $115 = <strong>$265</strong>. On a $100,000 account that is $265 / $100,000 = 0.265% a year; on $250,000 it is 0.106%.</p>
<p><strong>If you buy monthly:</strong> 12 trades x ($40 + $35) = $900 a year in trade fees alone. Flat-fee custodians reward "buy once and hold".</p>
<h3>Uncertainty flags</h3>
<ul>
<li>The annual fee reportedly <strong>changed on September 1, 2026</strong>, from $125 to $150. Older review pages will show the lower figure.</li>
<li>The depository handling fee is reported as $35 by one source and $75 by another.</li>
<li>We do not know whether STRATA's flat storage fee applies at every account size, or whether larger balances are charged by value. Ask.</li>
</ul>
<h3>Who STRATA may suit</h3>
<ul>
<li>Larger accounts that will buy once (or rarely) and hold, where a flat $265 a year is low as a percentage.</li>
<li>People comfortable opening an account online to avoid the setup fee.</li>
</ul>
<p><strong>Data quality: medium.</strong> Third-party figures with one known conflict and a recent price change. Ask STRATA for its current fee schedule in writing.</p>`,
  },
  {
    heading: "Kingdom Trust: fees and the rebrand question",
    body: `<p>Kingdom Trust is a custodian that has long been named on precious metals IRA paperwork. It is also the custodian in this guide where we are <strong>least certain</strong> what the current arrangement looks like.</p>
<h3>The rebrand / affiliate question</h3>
<p>A third-party review site reports that Kingdom Trust's precious metals business now operates through an affiliate reportedly called <strong>"Digital Trust"</strong>. We could not confirm this from Kingdom Trust's own materials in October 2026. If your paperwork names Kingdom Trust, Digital Trust or another related entity, ask:</p>
<ul>
<li>Which legal entity will actually be the custodian of my IRA?</li>
<li>How is that entity qualified - bank, state-chartered trust company, or IRS-approved non-bank trustee?</li>
<li>Which fee schedule applies to my account, and can I have it in writing?</li>
</ul>
<p>Then check the answer using the steps in <a href="#what-makes-a-gold-ira-custodian-qualified">what makes a custodian qualified</a>.</p>
<h3>Reported fees (high uncertainty)</h3>
<table>
<thead><tr><th>Fee</th><th>Reported amount</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$0-$50</td><td>Sources vary</td></tr>
<tr><td>Annual account fee</td><td>Reportedly none</td><td>Older reports: $75, $195 or $225 depending on plan or era</td></tr>
<tr><td>Per transaction</td><td>$40</td><td>Reported</td></tr>
<tr><td>Storage, non-segregated</td><td>$150 a year</td><td>Reported</td></tr>
<tr><td>Storage, segregated</td><td>$240 a year</td><td>Reported</td></tr>
<tr><td>Termination</td><td>$300</td><td>The company FAQ reportedly says $100 per asset instead - conflict</td></tr>
</tbody>
</table>
<p><em>Source: safeounce.com, a third-party site, as of October 2026. High uncertainty.</em></p>
<h3>What this might look like</h3>
<p>If the reported figures are right - no annual account fee and $150 non-segregated storage - a year with no trades would cost <strong>$150</strong>, and the first year with one purchase and a $50 setup fee would cost $50 + $150 + $40 = <strong>$240</strong>. That would be among the lowest in this guide. But if an older $195 or $225 annual fee still applies, the yearly cost would be $345-$375. Because the range is so wide, we left Kingdom Trust out of our 10-year cost comparison.</p>
<p>On termination: if the fee is $100 per asset and you hold three different coins or bars, you might pay $300 - the same as the flat reported figure. If you hold five, you might pay $500. Ask how "asset" is defined.</p>
<h3>Who Kingdom Trust may suit</h3>
<p>Possibly cost-conscious investors - <strong>if</strong> the "no annual fee" report is confirmed in writing for your account type. Until then, treat it as unverified.</p>
<p><strong>Data quality: low.</strong> Third-party figures, conflicting history, and an unconfirmed change of entity. Get everything in writing.</p>`,
  },
  {
    heading: "GoldStar Trust: fees and what to know",
    body: `<p>GoldStar Trust Company is a custodian that has specialized in precious metals IRAs for many years. Our research notes list it as one of the custodians used by Birch Gold Group. Our figures come from a third-party site (whitemetalres.com) and are <strong>reported, not confirmed with GoldStar</strong>.</p>
<table>
<thead><tr><th>Fee</th><th>Reported amount</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$50</td><td>Reported</td></tr>
<tr><td>Annual fee</td><td>$90 flat</td><td>Reported as of December 2025. Older schedule: 0.08% of value, $50 minimum, $250 maximum</td></tr>
<tr><td>Transaction fees</td><td>Reportedly none</td><td>Ask - this is unusual</td></tr>
<tr><td>Storage, commingled</td><td>$125 a year</td><td>Reported</td></tr>
<tr><td>Storage, segregated</td><td>$225 minimum, plus about 0.18% above $125,000</td><td>Our reading of the reported terms; confirm how it is calculated</td></tr>
</tbody>
</table>
<h3>What this looks like in real life</h3>
<p><strong>Current reported schedule, commingled storage:</strong> $90 + $125 = <strong>$215 a year</strong>, plus $50 in the first year = <strong>$265</strong>. That is flat whatever the account size.</p>
<p><strong>Older percentage schedule, for comparison</strong> (0.08% with a $50 minimum and $250 maximum):</p>
<table>
<thead><tr><th>Account value</th><th>0.08% of value</th><th>Fee after min/max</th></tr></thead>
<tbody>
<tr><td>$50,000</td><td>$40</td><td>$50 (minimum applies)</td></tr>
<tr><td>$100,000</td><td>$80</td><td>$80</td></tr>
<tr><td>$250,000</td><td>$200</td><td>$200</td></tr>
<tr><td>$500,000</td><td>$400</td><td>$250 (maximum applies)</td></tr>
</tbody>
</table>
<p>If you see the 0.08% figure quoted, it is likely outdated - but ask which schedule applies to you.</p>
<p><strong>Segregated storage example</strong> (our reading: $225 minimum, plus 0.18% of the value above $125,000):</p>
<ul>
<li>$100,000 account: below $125,000, so <strong>$225</strong>.</li>
<li>$250,000 account: $250,000 - $125,000 = $125,000; 0.18% x $125,000 = $225; total $225 + $225 = <strong>$450</strong>.</li>
<li>$500,000 account: $500,000 - $125,000 = $375,000; 0.18% x $375,000 = $675; total $225 + $675 = <strong>$900</strong>.</li>
</ul>
<p>Conveniently, $225 is exactly 0.18% of $125,000 (0.0018 x $125,000 = $225). So this reading works out the same as "0.18% of the whole account value, with a $225 minimum". Either way, ask GoldStar to show you the calculation for your balance in writing.</p>
<h3>Who GoldStar may suit</h3>
<ul>
<li>Investors who want a low flat annual fee and commingled storage.</li>
<li>Larger accounts, where $215 a year is a very small percentage.</li>
</ul>
<p><strong>Data quality: medium-low.</strong> Third-party figures with a changed schedule. Confirm the current fee schedule directly.</p>`,
  },
  {
    heading: "Preferred Trust: fees and what to know",
    body: `<p>Preferred Trust Company publishes a fee schedule on its own website, which is a good sign for transparency: <a href="https://preferredtrustcompany.com/fee-schedule" rel="noopener noreferrer" target="_blank">preferredtrustcompany.com/fee-schedule</a>. The annual fee below is from that page as reported in October 2026. The setup fee comes from a third-party source.</p>
<table>
<thead><tr><th>Fee</th><th>Reported amount (Oct 2026)</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$50</td><td>Third-party</td></tr>
<tr><td>Annual fee, metals-only IRA</td><td>$300</td><td>Official site</td></tr>
<tr><td>Purchase</td><td>$50 per purchase</td><td>Official site</td></tr>
<tr><td>Sale</td><td>$200 per sale</td><td>Official site</td></tr>
<tr><td>In-kind distribution</td><td>$200</td><td>Official site</td></tr>
<tr><td>Wire</td><td>$30</td><td>Official site</td></tr>
<tr><td>Storage</td><td>Not included - billed separately by the depository</td><td>Ask which depository and what rate</td></tr>
</tbody>
</table>
<h3>What this looks like in real life</h3>
<p>Because storage is separate, we need an assumption. If you used Delaware Depository commingled storage at the rate shown on a custodian election form ($0.80 per $1,000 a year, $95 minimum - see our depository section):</p>
<ul>
<li><strong>$100,000 account:</strong> $0.80 x 100 = $80, below the minimum, so storage is $95. First year: $50 setup + $300 annual + $50 purchase + $95 storage = <strong>$495</strong>. Later years: $300 + $95 = <strong>$395</strong>.</li>
<li><strong>$250,000 account:</strong> storage $0.80 x 250 = $200. Later years: $300 + $200 = <strong>$500</strong>.</li>
</ul>
<p>Note the <strong>$200 sale fee</strong>. If you sell metal to take an RMD or cash out, each sale costs $200. If you plan to sell a little each year in retirement, that adds up: 10 annual sales would cost $2,000. Ask whether an in-kind distribution ($200) or a single larger sale works better for you, and talk to a tax professional about the tax side (see our <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs guide</a>).</p>
<h3>Who Preferred Trust may suit</h3>
<ul>
<li>People who value a published, readable fee schedule.</li>
<li>Buy-and-hold accounts that will rarely sell.</li>
</ul>
<h3>Who should compare carefully</h3>
<ul>
<li>Retirees who expect to sell small amounts often, because of the $200 sale fee.</li>
<li>Smaller accounts, where $300 a year plus storage is a high percentage.</li>
</ul>
<p><strong>Data quality: medium-high.</strong> The main fees come from the official site; the setup fee is third-party. Storage depends on the depository you choose.</p>`,
  },
];
