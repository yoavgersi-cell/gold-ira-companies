import type { ArticleSection } from "@/lib/config";

// Part 2: reading BBB / BCA / Trustpilot, regulator and court searches,
// pricing and transparency, and the quote-vs-spot worked example.

export const part2: ArticleSection[] = [
  {
    heading: "How to read BBB, BCA and Trustpilot ratings",
    body: `<p>Points 3 and 4 of the checklist are about reputation. Almost every gold IRA company advertises a top rating somewhere. The trick is knowing what each rating actually measures, and where to look past the headline number.</p>
<h3>Point 3: The BBB rating and the complaint pattern</h3>
<p>The Better Business Bureau (<a href="https://www.bbb.org" rel="nofollow noopener" target="_blank">bbb.org</a>) gives businesses a letter grade from A+ to F. Three things are worth knowing about it:</p>
<ul>
<li><strong>The letter grade is not a customer satisfaction score.</strong> It reflects factors such as how long the business has operated, how it responds to complaints, and whether the BBB has information about government actions or licensing problems. A company can have an A+ and still have unhappy customers, as long as it answers their complaints.</li>
<li><strong>Accreditation is paid.</strong> "BBB Accredited" means the business has agreed to the BBB's standards and pays a fee. It is a commitment worth something, but it is not an independent investigation of pricing.</li>
<li><strong>Customer reviews are separate from complaints.</strong> Many BBB profiles show a star rating from customer reviews alongside the letter grade. These are two different measures.</li>
</ul>
<p>The letter grade is the least useful part. The most useful part is the <strong>complaint text</strong>. Here is how to read it:</p>
<ol>
<li>Open the "Complaints" tab and read the most recent 10 to 20 complaints in full, including the company's response.</li>
<li>Look for a <strong>repeated theme</strong>. One complaint about a slow shipment is normal. Five complaints saying "I was told my coins were worth X, but the buyback offer was far lower" is a pattern.</li>
<li>Pay special attention to complaints about <strong>pricing, buybacks, proof coins, and pressure</strong>. Those are the themes that show up in enforcement cases.</li>
<li>Read <strong>how the company responds</strong>. A specific, polite reply that fixes the problem is a good sign. A copy-and-paste reply, or one that blames the customer, is not.</li>
<li>Check whether complaints are marked resolved, and whether the customer accepted the resolution.</li>
<li>Compare the number of complaints with the size of the company. A firm that has served tens of thousands of customers will have more complaints than a small one.</li>
</ol>
<h3>BCA ratings</h3>
<p>The Business Consumer Alliance (BCA) is a separate organization that also rates businesses, on a scale from AAA down to F. Several gold IRA companies advertise a BCA AAA rating; Augusta Precious Metals, for example, is reported to hold BBB A+ and BCA AAA ratings. Like the BBB grade, the BCA rating mainly reflects complaint handling and business information, not an audit of prices. Treat it as one more data point, and read any complaints listed there the same way.</p>
<h3>Point 4: Trustpilot and other review sites</h3>
<p>Trustpilot is the review site most often quoted in gold IRA ads. Its star score (out of 5) is easy to understand but easy to misread. Before you trust it, check these five things:</p>
<table>
<thead><tr><th>What to check</th><th>Where to find it</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Review volume</td><td>The number next to the star score</td><td>A 4.9 from 2,000 reviews is more meaningful than a 5.0 from 12. Zero reviews means no data at all - not good, not bad.</td></tr>
<tr><td>Recency</td><td>Sort reviews by "most recent"</td><td>Reviews from last month say more about today's sales team than reviews from five years ago.</td></tr>
<tr><td>Profile labels</td><td>Near the company name and in the profile's transparency or "about" information</td><td>Labels such as "Claimed profile" mean the company manages the page. Notes that a company has a paid subscription or invites customers to review tell you the company is actively collecting reviews. That is allowed, but it shapes who writes reviews.</td></tr>
<tr><td>Invited vs organic reviews</td><td>Labels on individual reviews (for example "Verified" or "Invited")</td><td>Invited reviews often come right after the purchase, before the customer has ever tried to sell.</td></tr>
<tr><td>One-star and two-star reviews</td><td>Filter by star rating</td><td>The low ratings tell you what goes wrong when something goes wrong.</td></tr>
</tbody>
</table>
<p>Trustpilot's labels and wording change from time to time, so read whatever transparency information the page shows rather than relying on any one term.</p>
<h3>How to spot curated or one-sided reviews</h3>
<p>Most reviews are real. But a review profile can still be one-sided, simply because of when and how customers are asked to write. Watch for these signs:</p>
<ul>
<li><strong>Timing.</strong> Most gold IRA reviews are written within days of buying, when the customer has had a friendly experience and has not yet sold anything. Very few reviewers have tested the buyback. That is not dishonest, but it means a high score mostly measures the buying experience.</li>
<li><strong>Bursts.</strong> A sudden spike of five-star reviews in a short period, often after a run of complaints.</li>
<li><strong>Same names, same words.</strong> Many reviews praising the same representative by name with similar phrasing ("Sarah was so patient and knowledgeable") can mean customers were asked by that rep to leave a review.</li>
<li><strong>No detail.</strong> Short reviews that say "great company, highly recommend" but nothing about prices, products or the process.</li>
<li><strong>Silence on price.</strong> Almost no reviews mentioning the price paid or the buyback offer. The few that do are often the most informative.</li>
</ul>
<p>The US Federal Trade Commission's rules on reviews and endorsements (updated in 2023, with a separate rule on consumer reviews and testimonials in 2024) prohibit fake reviews and require disclosure of paid endorsements. Those rules help, but they do not make every profile balanced. Read the low ratings, read the most recent ones, and read the ones that mention money.</p>
<h3>The four companies on this site, by the numbers</h3>
<p>For reference, here is what the Trustpilot profiles showed when we checked on October 19, 2026:</p>
<table>
<thead><tr><th>Company</th><th>Trustpilot score</th><th>Number of reviews</th></tr></thead>
<tbody>
<tr><td>American Hartford Gold</td><td>4.9</td><td>1,947</td></tr>
<tr><td>Goldco</td><td>4.4</td><td>1,791</td></tr>
<tr><td>Augusta Precious Metals</td><td>4.8</td><td>376</td></tr>
<tr><td>American Gold and Silver Group (listed as "American Gold Group", profile claimed July 2026)</td><td>No score</td><td>0</td></tr>
</tbody>
</table>
<p class="small"><em>Snapshot from the live profiles on Oct 19, 2026. Scores and counts change daily; check the profiles yourself before deciding.</em></p>
<p>Notice how much the volume differs. Goldco's score was reported at 4.8 from about 1,585 reviews in March 2025 (Finder) and was 4.4 from 1,791 in October 2026, which shows how a profile can move over time. That is exactly why recency matters.</p>
<p><strong>What good looks like:</strong> hundreds or thousands of reviews over several years, a steady score, detailed reviews that mention products and prices, and specific company replies to critical reviews.</p>
<p><strong>Red flag:</strong> very few reviews but a perfect score, bursts of short five-star reviews, or a cluster of recent low ratings mentioning buyback prices or pressure.</p>`,
  },
  {
    heading: "Checking regulators, enforcement records and lawsuits",
    body: `<p>Point 5 is the check most people skip, and it is one of the most valuable. A company's past dealings with regulators and courts are the closest thing you will get to an independent audit of how it treats customers.</p>
<h3>Who regulates gold dealers?</h3>
<p>This surprises many people: physical gold and silver dealers are lightly regulated compared with stockbrokers or insurance agents. There is no single federal license for selling coins. Instead, several agencies can step in when something goes wrong:</p>
<table>
<thead><tr><th>Regulator</th><th>Role with metals dealers</th><th>How to search</th></tr></thead>
<tbody>
<tr><td>State attorneys general</td><td>Consumer protection and elder fraud cases; often the most active against dealers</td><td>Search "[company name] attorney general" and check the AG's press releases in the company's home state and your own</td></tr>
<tr><td>Commodity Futures Trading Commission (CFTC)</td><td>Has authority over fraud in precious metals sales; brought the Red Rock and Safeguard cases</td><td>Search the CFTC's press releases for the company name</td></tr>
<tr><td>Securities and Exchange Commission (SEC)</td><td>Acts where metals sales involve investment advice or securities, including some IRA cases</td><td>Search SEC litigation releases for the company name</td></tr>
<tr><td>FINRA</td><td>Regulates securities brokers, not coin dealers</td><td><a href="https://brokercheck.finra.org" rel="nofollow noopener" target="_blank">FINRA BrokerCheck</a>, mainly to look up individual salespeople</td></tr>
<tr><td>State securities regulators</td><td>Some states have acted against metals sellers (Massachusetts, for example, brought a case against Metals.com)</td><td>Your state securities division's enforcement page</td></tr>
</tbody>
</table>
<h3>A note on FINRA BrokerCheck</h3>
<p>Gold IRA companies usually are <strong>not</strong> registered with FINRA, because physical metals are generally not securities. So you should not expect to find the company itself on BrokerCheck, and its absence there is normal.</p>
<p>BrokerCheck is still useful in one way. Some metals salespeople previously worked as stockbrokers. If your representative says they have years of "financial industry" experience, you can search their name on BrokerCheck. A former registration is fine. A record of customer complaints, firings for cause or industry bars is worth knowing about before you take their advice.</p>
<h3>How to search in 15 minutes</h3>
<ol>
<li>Search the company name plus "attorney general", "CFTC", "SEC", "lawsuit", "settlement" and "class action". Try any former names too.</li>
<li>Open results from government websites (ending in .gov) first. News articles are helpful, but go to the original release when you can.</li>
<li>Search the CFTC and SEC sites directly for the company name.</li>
<li>Check the BBB profile, which sometimes notes government actions.</li>
<li>Search the salesperson's name on BrokerCheck if they claim brokerage experience.</li>
<li>Write down what you find, with dates and links.</li>
</ol>
<h3>How to weigh what you find</h3>
<p>Not every lawsuit is a red flag. Large companies get sued over employment disputes, contract disagreements and advertising claims. Online rumors are not court records; for example, our research found claims about Augusta Precious Metals circulating online but no court record to support them. Focus on:</p>
<ul>
<li><strong>Who brought the case.</strong> A state attorney general or federal regulator acting on behalf of customers carries more weight than a single private suit.</li>
<li><strong>What it was about.</strong> Cases about undisclosed markups, misleading sales pitches, or targeting older investors go straight to the heart of this checklist.</li>
<li><strong>How it ended.</strong> Settlements often say "no admission of wrongdoing". That is common legal language. The terms of the settlement, such as refunds or required disclosures, still tell you what the regulator was concerned about.</li>
<li><strong>What changed afterwards.</strong> Has the company started publishing spreads, or adopted new disclosures? Ask.</li>
</ul>
<p>Among the companies on this site, our research notes one review site (BestGuide) scoring American Hartford Gold 3.2 out of 5 and citing whistleblower complaints and advertising practices. We report that as a third-party view, not a finding of wrongdoing; ask the company about it directly if it concerns you. We did not find government enforcement actions against the four companies in our research, but you should run your own search, because records change.</p>
<p><strong>What good looks like:</strong> no regulatory actions, or old ones that were resolved with clear changes in practice.</p>
<p><strong>Red flag:</strong> any action by a state attorney general, the CFTC or the SEC involving markups, misrepresentation or elderly customers.</p>`,
  },
  {
    heading: "Pricing and transparency: what you should be able to see",
    body: `<p>Group B is where the money is. Points 6 through 11 cover how the company prices metal, whether it tells you its markup, what it tries to sell you, and what it will pay you back. Spend more time on this group than on any other.</p>
<h3>Point 6: Prices published or quoted in writing</h3>
<p>Some online bullion dealers publish live prices for every coin and bar. Most phone-based gold IRA companies do not. That is not automatically a problem, but it means you must get a <strong>written quote</strong> before you agree to anything.</p>
<p>A useful written quote shows, for each product:</p>
<ul>
<li>The exact product name and year (for example, "1 oz American Gold Eagle, bullion, random year").</li>
<li>Whether it is bullion or proof.</li>
<li>The price per coin or bar, and the quantity.</li>
<li>The spot price used and the time it was taken.</li>
<li>Any shipping, handling or insurance charges to the depository.</li>
</ul>
<p>Prices move every minute, so the quote will only hold for a short time. That is fine. You are not trying to freeze the price; you are trying to see the markup, which tends to stay similar even as spot moves.</p>
<h3>Point 7: A written spread disclosure</h3>
<p>Ask this question word for word: <strong>"What is your markup over spot, as a percentage, on each product you are recommending?"</strong></p>
<p>A good company will answer with a number. A few dealers have published their spreads; American Bullion, for example, disclosed 7% for bullion, 20% for collectible coins and 23% for proof coins, and 10% for bullion inside an IRA (as reported by LendEDU). You do not have to agree with a number to appreciate a company that gives one.</p>
<p>None of the four companies on this site publishes its product spreads. That is typical of the industry, not unique to them. It means the burden is on you to ask, and to calculate the spread yourself from the quote (see the worked example in the next section).</p>
<h3>Point 8: Bullion offered first, not proof coins</h3>
<p>Gold coins come in two main finishes:</p>
<table>
<thead><tr><th></th><th>Bullion coins and bars</th><th>Proof coins</th></tr></thead>
<tbody>
<tr><td>What they are</td><td>Standard coins and bars made in large numbers; valued mainly for metal content</td><td>Specially struck coins with a mirror finish, sold in presentation cases</td></tr>
<tr><td>Typical premium over spot</td><td>About 2-6% at large online dealers for common products (Oct 2026); wider at phone dealers</td><td>Much wider; often 20% or more at phone dealers, and far more in enforcement cases</td></tr>
<tr><td>Buyback</td><td>Dealers often bid around 1-2% under spot for sovereign coins</td><td>The extra premium is often not recovered when you sell</td></tr>
<tr><td>IRA eligible?</td><td>Yes, if they meet fineness rules or are American Eagles</td><td>American Eagle proofs are eligible by statute; most other proof or "collectible" coins are not</td></tr>
</tbody>
</table>
<p>A proof coin contains the same ounce of gold as a bullion coin. You are paying extra for the finish, the packaging and the story. Inside an IRA, where you will never hold or display the coin, that extra cost is hard to justify for most savers.</p>
<p><strong>What good looks like:</strong> the representative offers common bullion first and explains the premium difference if you ask about proofs.</p>
<p><strong>Red flag:</strong> the representative only discusses proof or "premium" coins, or says bullion is "not recommended for IRAs".</p>
<h3>Point 9: No product push and no "IRA-exclusive" coins</h3>
<p>Be careful with coins described as "exclusive", "limited mintage", "only available through us", or specially designed for IRAs. These coins may be perfectly legal to hold, but they have one big problem: <strong>you cannot easily price-check them</strong>. If no other dealer sells the same coin, you cannot compare the price, and you cannot be sure another dealer will pay a premium for it when you sell.</p>
<p>The same applies to coins sold on a story: "this coin will become rare", "collectors will pay more", or "this one is protected from confiscation". Those claims are about future demand that nobody can promise. Our guide to <a href="/articles/irs-approved-precious-metals">IRA-eligible metals</a> lists widely traded products you can compare across dealers.</p>
<p>Ask: "Is this product sold by other dealers, and if so, which ones?" If the answer is no, ask for a widely traded alternative.</p>`,
  },
  {
    heading: "How to compare a quote to the spot price (worked example)",
    body: `<p>Point 10 is where the checklist turns into arithmetic. You do not need a financial calculator. You need the quote, the spot price at the time of the quote, and a pencil.</p>
<h3>The formula</h3>
<p><strong>Premium over spot (%) = (Price per ounce you pay - Spot price per ounce) / Spot price per ounce x 100</strong></p>
<p>For a 1 oz coin, the price per coin is the price per ounce. For a coin that contains less than an ounce (such as a 1/2 oz coin), divide the coin price by its gold content first.</p>
<h3>Worked example: three quotes on the same day</h3>
<p>Assume spot gold is $4,170 an ounce (roughly the price on October 19, 2026). You are considering a $90,000 purchase and receive three different suggestions.</p>
<table>
<thead><tr><th></th><th>Quote A: bullion Eagles</th><th>Quote B: bullion Eagles, higher markup</th><th>Quote C: proof Eagles</th></tr></thead>
<tbody>
<tr><td>Price per coin</td><td>$4,380</td><td>$4,590</td><td>$5,600</td></tr>
<tr><td>Spot per ounce</td><td>$4,170</td><td>$4,170</td><td>$4,170</td></tr>
<tr><td>Premium per coin</td><td>$210</td><td>$420</td><td>$1,430</td></tr>
<tr><td>Premium over spot</td><td>5.0%</td><td>10.1%</td><td>34.3%</td></tr>
<tr><td>Coins for about $90,000</td><td>20 coins ($87,600)</td><td>19 coins ($87,210)</td><td>16 coins ($89,600)</td></tr>
<tr><td>Ounces of gold you own</td><td>20 oz</td><td>19 oz</td><td>16 oz</td></tr>
<tr><td>Value of that gold at spot</td><td>$83,400</td><td>$79,230</td><td>$66,720</td></tr>
</tbody>
</table>
<p class="small"><em>Hypothetical illustration. Prices are invented for the example and are not quotes from any company.</em></p>
<p>Look at the last row. For roughly the same check, Quote C buys you four fewer ounces than Quote A. On day one, the gold in Quote C is worth about $66,720 at spot - roughly $23,000 less than you paid.</p>
<h3>What the price would need to do to break even</h3>
<p>Now imagine you want to sell back. Suppose the dealer bids 1% under spot for bullion Eagles, and that a proof coin sells back at only a small premium over the bullion price (often the case). How much would gold have to rise before you get back what you paid?</p>
<table>
<thead><tr><th></th><th>Quote A (5% premium)</th><th>Quote B (10% premium)</th><th>Quote C (34% premium)</th></tr></thead>
<tbody>
<tr><td>Rise in gold needed to break even (approx.)</td><td>About 6%</td><td>About 11%</td><td>About 35% or more</td></tr>
<tr><td>Gold price needed (from $4,170)</td><td>About $4,425</td><td>About $4,635</td><td>About $5,650 or more</td></tr>
</tbody>
</table>
<p class="small"><em>Rough illustration ignoring account fees. Assumes a buyback at 1% under spot. Real buyback prices vary by dealer and product.</em></p>
<p>Gold has risen by more than 35% in some years - 2025 was up about 65% - and fallen sharply in others. From the January 2026 record near $5,595, it fell to a low near $3,995 within months. A wide spread does not guarantee a loss, but it means you need a big move in your favor just to get back to even. Our article on <a href="/articles/is-a-gold-ira-a-good-investment">whether a gold IRA is a good investment</a> covers the price history in more detail.</p>
<h3>How to get the spot price yourself</h3>
<ul>
<li>Check a live price on a major financial news site or a large bullion dealer's website at the moment you receive the quote.</li>
<li>Write down the time. Gold can move $20-$50 or more in an hour on a busy day.</li>
<li>Ask the representative what spot price they are using. If it is very different from what you see, ask why.</li>
</ul>
<h3>What counts as a "fair" premium?</h3>
<p>There is no official answer, and we will not pretend there is. For reference, our research found these premiums at retail online dealers in 2026:</p>
<table>
<thead><tr><th>Product</th><th>Typical premium over spot (online, 2026)</th></tr></thead>
<tbody>
<tr><td>American Gold Eagle, 1 oz</td><td>About 3-6%</td></tr>
<tr><td>Gold Maple Leaf, 1 oz</td><td>About 3.5% (Oct 9, 2026)</td></tr>
<tr><td>Gold Buffalo, 1 oz</td><td>About 4-6%</td></tr>
<tr><td>1 oz gold bar (generic)</td><td>About 2.2% (Oct 9, 2026)</td></tr>
<tr><td>10 oz gold bar</td><td>About 1.8% (Oct 9, 2026)</td></tr>
<tr><td>American Silver Eagle</td><td>About 6.4-7.9% (Aug 2026)</td></tr>
</tbody>
</table>
<p class="small"><em>Sources: findbullionprices.com premium history, SD Bullion (Oct 2026). Online dealers do not usually provide IRA paperwork help, which is part of what phone-based IRA companies charge for.</em></p>
<p>Phone-based IRA companies typically charge more than these online figures, partly for the service of setting up the account. A common rule of thumb among consumer writers is to push back hard on anything above roughly 10-15% for ordinary bullion. That is a heuristic, not a rule, but a premium well beyond it on plain bullion deserves a clear explanation.</p>
<h3>Silver: same math, bigger percentages</h3>
<p>Silver works the same way, but premiums are higher as a percentage because each coin is worth much less. With spot silver around $57.70 (Oct 19, 2026), a Silver Eagle priced at $62 has a premium of about 7.5%. The same coin at $70 has a premium of about 21%. Run the numbers for every product on your quote, not just the gold.</p>
<p>Use our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> to see how a given spread and annual fees add up over 10 or 20 years.</p>`,
  },
];
