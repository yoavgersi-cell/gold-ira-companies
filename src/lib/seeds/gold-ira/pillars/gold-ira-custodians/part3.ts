import type { ArticleSection } from "@/lib/config";

// Part 3 of "Gold IRA Custodians & Depositories Compared (2026)".
// Custodian profiles: Madison Trust, Advanta IRA, uDirect IRA, New Direction
// Trust; the master comparison table; and the 10-year fee comparison at
// $50k / $100k / $250k with the math shown.

export const part3: ArticleSection[] = [
  {
    heading: "Madison Trust: fees and what to know",
    body: `<p>Madison Trust Company is a self-directed IRA custodian that holds a wide range of alternative assets, including precious metals. Its fees FAQ on its own website is the main source for the figures below, as reported in October 2026, with one conflicting third-party figure noted.</p>
<table>
<thead><tr><th>Fee</th><th>Reported amount</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$50</td><td>Official FAQ</td></tr>
<tr><td>Annual fee, first asset</td><td>$139 per quarter (about $556 a year)</td><td>Official FAQ; one other source says $440 a year - conflict</td></tr>
<tr><td>Each additional asset</td><td>$30 per quarter ($120 a year)</td><td>Official FAQ</td></tr>
<tr><td>Termination</td><td>$225</td><td>Official FAQ</td></tr>
<tr><td>Minimum cash balance</td><td>$500 kept in the account</td><td>Official FAQ</td></tr>
<tr><td>Storage</td><td>Not included - billed by the depository</td><td>Ask which depository and rate</td></tr>
</tbody>
</table>
<h3>The per-asset math</h3>
<p>Madison Trust uses a <strong>per-asset</strong> model. Here is how the annual fee changes with the number of assets:</p>
<table>
<thead><tr><th>Assets held</th><th>Math</th><th>Annual fee</th></tr></thead>
<tbody>
<tr><td>1</td><td>$139 x 4 quarters</td><td>$556</td></tr>
<tr><td>2</td><td>$556 + ($30 x 4)</td><td>$676</td></tr>
<tr><td>3</td><td>$556 + ($30 x 4 x 2)</td><td>$796</td></tr>
</tbody>
</table>
<p>The key question is <strong>what counts as one asset</strong>. If all your metal at one depository counts as one asset, you pay $556. If Gold Eagles, Gold Buffalos and a silver bar count as three assets, you pay $796. Ask before you buy, and get the answer in writing.</p>
<h3>The $500 cash minimum</h3>
<p>Madison Trust reportedly requires $500 to stay in cash in the account. That cash earns little or nothing compared with what you might earn elsewhere, and it is $500 not in metal. It is a modest cost, but worth knowing.</p>
<h3>What this looks like in real life</h3>
<p><strong>A $100,000 account holding one asset, with Delaware Depository commingled storage at the election-form rate ($95 minimum):</strong> $556 + $95 = <strong>$651 a year</strong>, plus $50 setup in year one = <strong>$701</strong>. That is 0.65% a year on $100,000.</p>
<p>If the $440-a-year figure is correct instead: $440 + $95 = $535 a year.</p>
<h3>Who Madison Trust may suit</h3>
<ul>
<li>Investors who want one custodian for metals <strong>and</strong> other alternative assets (such as real estate or private notes).</li>
<li>Investors holding a single metals position.</li>
</ul>
<p>For a metals-only IRA, it is among the more expensive options in this guide. <strong>Data quality: medium.</strong> Official FAQ, but a conflicting third-party figure.</p>`,
  },
  {
    heading: "Advanta IRA: fees and what to know",
    body: `<p>Advanta IRA is a self-directed IRA administrator that publishes a fee schedule as a PDF on its own website. The figures below are from that schedule (revision dated May 2024) as reported in October 2026. A schedule from 2024 may have been updated since, so ask for the current one.</p>
<table>
<thead><tr><th>Fee</th><th>Reported amount</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$50</td><td>Official PDF (Rev 05/24)</td></tr>
<tr><td>Annual recordkeeping</td><td>$250</td><td>Official PDF; one other site says $295 - conflict</td></tr>
<tr><td>Transaction fees</td><td>Not in our sources</td><td>Ask</td></tr>
<tr><td>Storage</td><td>Billed separately</td><td>Ask which depository and rate</td></tr>
</tbody>
</table>
<h3>What this looks like in real life</h3>
<p><strong>A $100,000 account, Delaware Depository commingled storage at the election-form rate:</strong> $250 + $95 = <strong>$345 a year</strong>, plus $50 setup in year one = <strong>$395</strong>.</p>
<p><strong>A $250,000 account:</strong> storage at $0.80 per $1,000 = $0.80 x 250 = $200. Annual total $250 + $200 = <strong>$450</strong>.</p>
<p>If the $295 figure is the current one, add $45 a year to each line.</p>
<h3>Uncertainty flags</h3>
<ul>
<li>The fee schedule we had is dated <strong>May 2024</strong>, more than two years old.</li>
<li>One third-party site reports $295 rather than $250.</li>
<li>We do not have Advanta's transaction or termination fees. Ask for the full schedule.</li>
</ul>
<h3>Who Advanta IRA may suit</h3>
<p>Buy-and-hold investors who want a flat recordkeeping fee and are happy to choose and pay for storage separately. <strong>Data quality: medium.</strong></p>`,
  },
  {
    heading: "uDirect IRA: fees and what to know",
    body: `<p>uDirect IRA Services publishes its fees at <a href="https://udirectira.com/fees" rel="noopener noreferrer" target="_blank">udirectira.com/fees</a>. Figures below are as reported from that page in October 2026.</p>
<table>
<thead><tr><th>Fee</th><th>Reported amount</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$50</td></tr>
<tr><td>Annual fee</td><td>$275</td></tr>
<tr><td>Metals liquidation (selling)</td><td>$50</td></tr>
<tr><td>In-kind distribution</td><td>$75</td></tr>
<tr><td>Minimum balance</td><td>$500</td></tr>
<tr><td>Storage</td><td>Billed separately by the depository</td></tr>
</tbody>
</table>
<h3>What this looks like in real life</h3>
<p><strong>A $100,000 account, Delaware Depository commingled storage at the election-form rate:</strong> $275 + $95 = <strong>$370 a year</strong>; first year with setup: $420.</p>
<p><strong>Taking an RMD by selling metal once a year:</strong> $50 per liquidation. Ten years of annual sales = $500 in liquidation fees. Compare Preferred Trust's reported $200 per sale, which over ten years would be $2,000.</p>
<p><strong>Taking metal out in kind</strong> (having coins shipped to you as a distribution) costs a reported $75 at uDirect, plus shipping. Remember that an in-kind distribution from a traditional IRA is taxed at the metal's fair market value - see our <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs guide</a>.</p>
<h3>Who uDirect may suit</h3>
<ul>
<li>Retirees who expect to sell small amounts regularly, thanks to the relatively low liquidation fee.</li>
<li>People who like a short, published fee list.</li>
</ul>
<p><strong>Data quality: medium-high</strong> (company website, reported). Confirm before opening.</p>`,
  },
  {
    heading: "New Direction Trust: fees and what to know",
    body: `<p>New Direction Trust Company (NDTCO) publishes fees at <a href="https://ndtco.com/fees" rel="noopener noreferrer" target="_blank">ndtco.com/fees</a>. Its setup and annual fees below are as reported from that page in October 2026. Its metals trade fee comes from a third-party source and conflicts with an older company document.</p>
<table>
<thead><tr><th>Fee</th><th>Reported amount</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Setup</td><td>$30</td><td>Company site</td></tr>
<tr><td>Annual fee</td><td>$220 flat</td><td>Company site</td></tr>
<tr><td>Metals trade</td><td>$130 per trade</td><td>Third-party; a 2021 company PDF showed $50 and $160 for metals transactions - conflict</td></tr>
<tr><td>Storage</td><td>Billed by the depository</td><td>Ask which depository and rate</td></tr>
</tbody>
</table>
<h3>What this looks like in real life</h3>
<p><strong>A $100,000 account, one purchase, Delaware Depository commingled storage at the election-form rate:</strong></p>
<ul>
<li>First year: $30 setup + $220 annual + $130 trade + $95 storage = <strong>$475</strong>.</li>
<li>Each later year with no trades: $220 + $95 = <strong>$315</strong>.</li>
</ul>
<p>The trade fee matters if you buy in several batches. Four purchases in a year at a reported $130 each = $520 in trade fees - more than two years of the annual fee.</p>
<h3>Who NDTCO may suit</h3>
<p>Investors who want a low setup fee and a flat annual fee, and who will make few trades. <strong>Data quality: medium.</strong> Ask for the current metals trade fee in writing.</p>`,
  },
  {
    heading: "Gold IRA custodians compared: master table",
    body: `<p>Here are all nine custodians side by side. Every figure is <strong>reported as of October 2026</strong>, from the source shown. "Bundled storage" means the custodian quotes a storage fee itself; "separate" means the depository's rate is added on top.</p>
<table>
<thead><tr><th>Custodian</th><th>Setup</th><th>Annual fee</th><th>Trade / sale fees</th><th>Storage</th><th>Exit fees</th><th>Source and data quality</th></tr></thead>
<tbody>
<tr><td>Equity Trust</td><td>$50 online / $75 paper</td><td>Tiered: $225 (under $15k) to $2,250 ($2M+); $500 at $100k</td><td>Liquidation $10/asset (max $30)</td><td>Bundled: $110 non-seg / $160 seg</td><td>Termination $250 full; in-kind $50</td><td>Official PDF, Rev 11/2025 - high</td></tr>
<tr><td>STRATA Trust</td><td>$50 (waived online)</td><td>$150 flat (from Sep 1, 2026; was $125)</td><td>$40/trade + $35 handling (one site: $75)</td><td>Bundled: $115 commingled / $175 seg</td><td>Not in our sources</td><td>Third-party - medium</td></tr>
<tr><td>Kingdom Trust</td><td>$0-$50</td><td>Reportedly none (older: $75/$195/$225)</td><td>$40</td><td>$150 non-seg / $240 seg</td><td>$300 (FAQ: $100/asset)</td><td>Third-party, possible affiliate change - low</td></tr>
<tr><td>GoldStar Trust</td><td>$50</td><td>$90 flat (Dec 2025; older 0.08%, $50-$250)</td><td>Reportedly none</td><td>Bundled: $125 commingled; seg $225 min + ~0.18% above $125k</td><td>Not in our sources</td><td>Third-party - medium-low</td></tr>
<tr><td>Preferred Trust</td><td>$50 (third-party)</td><td>$300 metals-only IRA</td><td>$50 buy / $200 sale</td><td>Separate</td><td>In-kind distribution $200</td><td>Official site - medium-high</td></tr>
<tr><td>Madison Trust</td><td>$50</td><td>$139/quarter first asset (~$556/yr) + $30/quarter per extra asset (one source: $440/yr)</td><td>Not in our sources</td><td>Separate</td><td>Termination $225</td><td>Official FAQ - medium</td></tr>
<tr><td>Advanta IRA</td><td>$50</td><td>$250 recordkeeping (one site: $295)</td><td>Not in our sources</td><td>Separate</td><td>Not in our sources</td><td>Official PDF, Rev 05/2024 - medium</td></tr>
<tr><td>uDirect IRA</td><td>$50</td><td>$275</td><td>Liquidation $50</td><td>Separate</td><td>In-kind $75</td><td>Company site - medium-high</td></tr>
<tr><td>New Direction Trust</td><td>$30</td><td>$220 flat</td><td>$130/trade (third-party; 2021 PDF: $50/$160)</td><td>Separate</td><td>Not in our sources</td><td>Company site + third-party - medium</td></tr>
</tbody>
</table>
<h3>How to read this table</h3>
<ul>
<li><strong>Lowest reported annual fee:</strong> GoldStar ($90) - or Kingdom Trust if its "no annual fee" report is confirmed.</li>
<li><strong>Most expensive for a metals-only account at $100,000:</strong> Madison Trust ($556 for one asset) and Equity Trust ($500).</li>
<li><strong>Lowest fee to sell:</strong> Equity Trust ($10 per asset, max $30), then uDirect ($50).</li>
<li><strong>Highest fee to sell:</strong> Preferred Trust ($200 per sale).</li>
<li><strong>Bundled storage</strong> (Equity Trust, STRATA, GoldStar) makes comparison easier. For the others, add a depository rate from the <a href="#gold-ira-depositories-compared">depository section</a>.</li>
</ul>
<p>Fees are only one part of choosing a custodian. Service, how quickly it processes transfers and purchases, the depositories it works with, and whether your dealer will work with it all matter. And the custodian's annual fee is almost always smaller than the dealer's markup on the metal - see our <a href="/articles/gold-ira-fees">gold IRA fees guide</a>.</p>`,
  },
  {
    heading: "10-year custodian costs at $50,000, $100,000 and $250,000",
    body: `<p>Annual fees look small. Over ten years, the differences become real money. Here is what eight custodians would cost over a decade at three account sizes, using the reported figures above.</p>
<h3>Our assumptions</h3>
<ul>
<li>The account value <strong>stays the same</strong> for ten years. (If gold rises, tiered and percentage fees go up; if it falls, they may go down.)</li>
<li>You make <strong>one purchase</strong> at the start and no other trades. We do not include selling or closing the account - those exit fees are listed in the profiles.</li>
<li>Commingled / non-segregated storage.</li>
<li>For custodians that bundle storage (Equity Trust, STRATA, GoldStar), we use their quoted storage fee.</li>
<li>For custodians that bill storage separately (Preferred, Madison, Advanta, uDirect, New Direction), we use the <strong>Delaware Depository commingled rate from a custodian election form</strong>: $0.80 per $1,000 a year, $95 minimum. That gives $95 at $50,000 ($40 is below the minimum), $95 at $100,000 ($80 is below the minimum) and $200 at $250,000 ($0.80 x 250).</li>
<li>Online setup where offered. No wires, paper statements or late fees.</li>
<li>Kingdom Trust is left out because its reported fees are too uncertain.</li>
</ul>
<p>The formula is: <strong>setup + purchase fees + 10 x (annual fee + storage)</strong>.</p>
<h3>$50,000 account</h3>
<table>
<thead><tr><th>Custodian</th><th>Math</th><th>10-year total</th><th>% of $50,000</th></tr></thead>
<tbody>
<tr><td>GoldStar Trust</td><td>$50 + 10 x ($90 + $125)</td><td>$2,200</td><td>4.4%</td></tr>
<tr><td>STRATA Trust</td><td>$0 + $75 + 10 x ($150 + $115)</td><td>$2,725</td><td>5.5%</td></tr>
<tr><td>New Direction Trust</td><td>$30 + $130 + 10 x ($220 + $95)</td><td>$3,310</td><td>6.6%</td></tr>
<tr><td>Advanta IRA</td><td>$50 + 10 x ($250 + $95)</td><td>$3,500</td><td>7.0%</td></tr>
<tr><td>uDirect IRA</td><td>$50 + 10 x ($275 + $95)</td><td>$3,750</td><td>7.5%</td></tr>
<tr><td>Preferred Trust</td><td>$50 + $50 + 10 x ($300 + $95)</td><td>$4,050</td><td>8.1%</td></tr>
<tr><td>Equity Trust</td><td>$50 + 10 x ($425 + $110)</td><td>$5,400</td><td>10.8%</td></tr>
<tr><td>Madison Trust (1 asset)</td><td>$50 + 10 x ($556 + $95)</td><td>$6,560</td><td>13.1%</td></tr>
</tbody>
</table>
<h3>$100,000 account</h3>
<table>
<thead><tr><th>Custodian</th><th>Math</th><th>10-year total</th><th>% of $100,000</th></tr></thead>
<tbody>
<tr><td>GoldStar Trust</td><td>$50 + 10 x ($90 + $125)</td><td>$2,200</td><td>2.2%</td></tr>
<tr><td>STRATA Trust</td><td>$0 + $75 + 10 x ($150 + $115)</td><td>$2,725</td><td>2.7%</td></tr>
<tr><td>New Direction Trust</td><td>$30 + $130 + 10 x ($220 + $95)</td><td>$3,310</td><td>3.3%</td></tr>
<tr><td>Advanta IRA</td><td>$50 + 10 x ($250 + $95)</td><td>$3,500</td><td>3.5%</td></tr>
<tr><td>uDirect IRA</td><td>$50 + 10 x ($275 + $95)</td><td>$3,750</td><td>3.8%</td></tr>
<tr><td>Preferred Trust</td><td>$50 + $50 + 10 x ($300 + $95)</td><td>$4,050</td><td>4.1%</td></tr>
<tr><td>Equity Trust</td><td>$50 + 10 x ($500 + $110)</td><td>$6,150</td><td>6.2%</td></tr>
<tr><td>Madison Trust (1 asset)</td><td>$50 + 10 x ($556 + $95)</td><td>$6,560</td><td>6.6%</td></tr>
</tbody>
</table>
<h3>$250,000 account</h3>
<table>
<thead><tr><th>Custodian</th><th>Math</th><th>10-year total</th><th>% of $250,000</th></tr></thead>
<tbody>
<tr><td>GoldStar Trust</td><td>$50 + 10 x ($90 + $125)</td><td>$2,200</td><td>0.9%</td></tr>
<tr><td>STRATA Trust</td><td>$0 + $75 + 10 x ($150 + $115)</td><td>$2,725</td><td>1.1%</td></tr>
<tr><td>New Direction Trust</td><td>$30 + $130 + 10 x ($220 + $200)</td><td>$4,360</td><td>1.7%</td></tr>
<tr><td>Advanta IRA</td><td>$50 + 10 x ($250 + $200)</td><td>$4,550</td><td>1.8%</td></tr>
<tr><td>uDirect IRA</td><td>$50 + 10 x ($275 + $200)</td><td>$4,800</td><td>1.9%</td></tr>
<tr><td>Preferred Trust</td><td>$50 + $50 + 10 x ($300 + $200)</td><td>$5,100</td><td>2.0%</td></tr>
<tr><td>Madison Trust (1 asset)</td><td>$50 + 10 x ($556 + $200)</td><td>$7,610</td><td>3.0%</td></tr>
<tr><td>Equity Trust</td><td>$50 + 10 x ($700 + $110)</td><td>$8,150</td><td>3.3%</td></tr>
</tbody>
</table>
<h3>What the tables tell you</h3>
<ul>
<li><strong>The spread is large.</strong> At $100,000, the gap between the cheapest (GoldStar, $2,200) and the most expensive (Madison, $6,560) in our illustration is $4,360 over ten years.</li>
<li><strong>Flat fees win as accounts grow.</strong> GoldStar and STRATA cost the same at $250,000 as at $50,000 in our model. Equity Trust's tiered fee rises from $5,400 to $8,150.</li>
<li><strong>Percentage storage adds up.</strong> For custodians with separate storage, the Delaware rate rises from $95 to $200 a year between $100,000 and $250,000 - an extra $1,050 over ten years.</li>
<li><strong>Exit fees are not included.</strong> Closing an Equity Trust account in full would add $250; Madison Trust, $225. Selling at Preferred Trust costs $200 a sale.</li>
</ul>
<h3>Data quality warning</h3>
<p>Only Equity Trust's figures come from a full, current primary-source schedule. GoldStar and STRATA - the two cheapest in our tables - rely on <strong>third-party</strong> reports, and STRATA's fee changed in September 2026. Storage for five of the custodians is our assumption, not their quote. A $10 or $20 difference in a reported annual fee becomes $100-$200 over ten years, so get each custodian's <strong>current schedule in writing</strong> and rerun the math. Our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> can help, and our <a href="/articles/gold-ira-fees">gold IRA fees guide</a> adds the dealer markup and buyback spread, which are usually larger than all of these numbers.</p>
<h3>What if gold rises?</h3>
<p>Take a $100,000 account at Equity Trust. If gold rises enough to push the account to $210,000, the annual fee goes from $500 to $700. Over the remaining years, that adds $200 a year. At GoldStar or STRATA, the reported flat fee would not change. If you expect your account to grow (or plan to add to it), flat pricing tends to look better over time. If gold falls, the reverse can happen - Equity Trust's fee would drop if your balance falls into a lower tier.</p>`,
  },
];
