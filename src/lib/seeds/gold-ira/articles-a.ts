import type { ArticleData } from "@/lib/config";
import { UPDATED, AUTHOR, DISCLAIMER } from "./shared";

export const articlesA: ArticleData[] = [
  // ---------------------------------------------------------------------------
  // 1. What is a gold IRA
  // ---------------------------------------------------------------------------
  {
    slug: "what-is-a-gold-ira",
    title: "What Is a Gold IRA? How It Works, Pros, Cons & Costs (2026)",
    description:
      "A plain-English guide to gold IRAs - how they work, who holds the metal, what you can buy, the real costs, the 2026 limits and the pros and cons.",
    category: "Guides",
    readTime: "8 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#FBF5E6",
    author: AUTHOR,
    keyTakeaways: [
      "A gold IRA is a self-directed IRA that holds physical, IRS-eligible gold, silver, platinum or palladium instead of stocks and funds.",
      "The metal must be held by a trustee or custodian in an approved depository - you cannot keep it at home.",
      "Yearly custodian and storage fees typically run about $175-$300, usually as a flat fee rather than a percentage.",
      "The biggest cost is often the markup on the metal itself, which few dealers publish - always ask for it in writing.",
    ],
    sections: [
      {
        heading: "The short definition",
        body: `<p>A <strong>gold IRA</strong> (sometimes called a precious metals IRA) is an individual retirement account that holds <strong>physical gold, silver, platinum or palladium</strong> instead of - or alongside - stocks, bonds and mutual funds. It follows the same basic tax rules as any other IRA: a traditional gold IRA is tax-deferred, and a <a href="/articles/roth-gold-ira">Roth gold IRA</a> can be tax-free in retirement if you meet the Roth rules.</p><p>What makes it different is the paperwork and the plumbing. Most brokerages do not let you hold physical metal in a regular IRA, so a gold IRA is set up as a <strong>self-directed IRA</strong> with a custodian that is willing to hold "alternative" assets like bullion.</p>`,
      },
      {
        heading: "How does a gold IRA work?",
        body: `<p>Three separate parties are usually involved, and it helps to know who does what:</p><ul><li><strong>The custodian (or trustee)</strong> - a company approved to hold IRA assets. It opens the account, keeps the records, reports to the IRS and sends you statements.</li><li><strong>The dealer</strong> - the gold IRA company you see advertised. It sells you the coins or bars and usually helps with the paperwork. This is where most of the cost hides.</li><li><strong>The depository</strong> - a secure vault (Delaware Depository, Brink's and IDS of Texas are common names) where the metal is physically stored on the custodian's behalf.</li></ul><p>The usual sequence is: you open a self-directed IRA with a custodian, fund it (by a transfer, a rollover or a new contribution), tell the custodian which metal to buy from your chosen dealer, and the dealer ships the metal straight to the depository. You never take delivery yourself while it is inside the IRA.</p><p>One point that confuses many people: <strong>the IRS does not approve gold dealers or gold IRA companies.</strong> The IRS sets rules for which metals qualify and who may hold them. Any company calling itself "IRS-approved" is using marketing language, and that alone is worth noting.</p>`,
      },
      {
        heading: "What can you hold in a gold IRA?",
        body: `<p>Only metal that meets the tax code's rules. Under <strong>IRC Section 408(m)</strong>, collectibles held in an IRA are treated as a distribution - but there is an exception for certain US-minted coins and for bullion that meets minimum fineness standards and is held by a trustee. In practice:</p><ul><li><strong>Gold</strong> must generally be .995 fine or better (the American Gold Eagle is a specific exception).</li><li><strong>Silver</strong> must be .999 fine.</li><li><strong>Platinum and palladium</strong> must be .9995 fine.</li></ul><p>Commonly eligible products include the American Gold Eagle and Gold Buffalo, Canadian Maple Leaf, Austrian Philharmonic, American Silver Eagle and bars from accredited refiners. South African Krugerrands, most proof and "rare" numismatic coins, and collectibles are generally <em>not</em> eligible. See our full list in <a href="/articles/irs-approved-precious-metals">IRS-approved gold and silver for an IRA</a>.</p>`,
      },
      {
        heading: "How do you fund a gold IRA?",
        body: `<p>There are three ways to get money in:</p><ul><li><strong>Transfer</strong> from an existing IRA - a direct, trustee-to-trustee move. It is not taxed and there is no limit on how often you can do it.</li><li><strong>Rollover</strong> from a 401(k), 403(b), TSP or similar plan - usually after you leave the employer (or, for the TSP, at age 59½ while still working). A direct rollover is the cleanest route; see <a href="/articles/401k-to-gold-ira-rollover">how to roll over a 401(k) to a gold IRA</a> and the <a href="/articles/tsp-to-gold-ira-rollover">TSP rollover guide</a>.</li><li><strong>New contributions</strong> - subject to the normal IRA limits. For 2026 that is <strong>$7,500</strong>, plus a <strong>$1,100</strong> catch-up if you are 50 or older, for a total of <strong>$8,600</strong> (IRS Notice 2025-67). The limit is shared across all your IRAs, not per account.</li></ul><p>Most gold IRA companies set their own minimums, which range from no minimum at some dealers to $50,000 at others.</p>`,
      },
      {
        heading: "What does a gold IRA cost?",
        body: `<p>Costs come in two layers:</p><ul><li><strong>Account fees</strong> - a one-time setup fee (from $0 to a few hundred dollars), plus yearly custodian and storage fees. Annual fees cluster around <strong>$175-$300 a year</strong> and are usually <strong>flat</strong>, not a percentage of your balance. Segregated storage (your own coins kept separately) usually costs more than non-segregated (commingled) storage.</li><li><strong>The markup or spread on the metal</strong> - the difference between what you pay and the metal's market value. On common bullion this is often in the range of roughly 5-10%. On "premium", proof or numismatic coins, enforcement cases have found markups of 30% to well over 100%.</li></ul><p>The markup is usually the bigger number, and few dealers publish it. Ask for it in writing before you sign. Our <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a> guide breaks this down, and the <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> lets you estimate the total.</p>`,
      },
      {
        heading: "Pros and cons of a gold IRA",
        body: `<p><strong>Possible advantages</strong></p><ul><li>You own physical metal rather than a paper claim, held in a professional vault in your name's account.</li><li>Gold has historically behaved differently from stocks and bonds, so some people use a small slice for diversification.</li><li>You keep the IRA tax treatment - tax-deferred (traditional) or tax-free growth (Roth).</li><li>Flat fees can become a smaller percentage as the account grows.</li></ul><p><strong>Real drawbacks</strong></p><ul><li>Gold pays no dividends or interest; any gain depends entirely on the price going up. Prices can fall sharply - gold closed at a record of about $5,318 an ounce on January 29, 2026 and was trading around $4,150-$4,200 in mid-October 2026, roughly 20% lower.</li><li>Costs are higher than a gold fund in a regular brokerage IRA - compare in <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a>.</li><li>Dealer markups and buyback spreads mean you start behind the market price.</li><li>Required minimum distributions still apply to traditional accounts from age 73; you can take cash or the metal itself. See <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</li><li>The industry has a history of high-pressure sales and fraud - read <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a>.</li></ul>`,
      },
      {
        heading: "Is a gold IRA right for you?",
        body: `<p>That depends on your whole financial picture, your time horizon and how much risk you can stomach. Many people who choose one keep it to a modest portion of their savings - see <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold in a retirement portfolio</a> for the ways people think about sizing it. Nobody can promise that gold will go up, and you should be wary of anyone who does.</p><p>If you decide to go ahead, compare companies on <strong>total cost in writing</strong> - setup, yearly fees, storage, the markup on the exact products you will buy and the buyback price. Start with our <a href="/">ranking of the best gold IRA companies</a>, or read reviews of <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>, <a href="/reviews/goldco">Goldco</a> and <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, or the head-to-head <a href="/augusta-vs-goldco">Augusta vs Goldco</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. 401(k) to gold IRA rollover
  // ---------------------------------------------------------------------------
  {
    slug: "401k-to-gold-ira-rollover",
    title: "How to Roll Over a 401(k) to a Gold IRA: Step by Step",
    description:
      "Step-by-step guide to moving a 401(k) into a gold IRA - direct vs 60-day rollovers, the 20% withholding trap, timing and the questions to ask first.",
    category: "Rollovers",
    readTime: "8 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#F3EBD7",
    author: AUTHOR,
    keyTakeaways: [
      "A direct rollover - your 401(k) pays the new IRA custodian - is not taxed and avoids withholding.",
      "If the 401(k) pays the money to you instead, the plan withholds 20% and you have 60 days to redeposit the full amount.",
      "Most 401(k)s only allow a rollover after you leave the employer; check your plan's rules for in-service options.",
      "Get the dealer's markup, fees and buyback terms in writing before any money moves.",
    ],
    sections: [
      {
        heading: "Can you roll a 401(k) into a gold IRA?",
        body: `<p>Yes - in most cases. A 401(k) can generally be rolled into a traditional IRA, and a <strong>self-directed IRA</strong> that holds physical precious metals is still an IRA. The money keeps its tax-deferred status as long as the rollover is done correctly. A Roth 401(k) balance would go to a Roth IRA instead (see <a href="/articles/roth-gold-ira">Roth gold IRA</a>).</p><p>The main limit is your plan, not the IRS. Most 401(k) plans only let you roll money out <strong>after you leave the employer</strong> (retire, quit or are laid off). Some plans allow "in-service" rollovers at a certain age. Call your plan administrator and ask what is allowed before you do anything else.</p><p>Note that you cannot buy physical gold inside the 401(k) itself in most plans - the money has to move to a self-directed IRA first.</p>`,
      },
      {
        heading: "Direct rollover vs 60-day indirect rollover",
        body: `<p>This is the single most important choice in the process.</p><ul><li><strong>Direct rollover (recommended by most custodians).</strong> Your 401(k) plan sends the money straight to the new IRA custodian, or mails you a check made out to the custodian "for the benefit of" you. Nothing is withheld, nothing is taxed, and there is no limit on how often you can do this.</li><li><strong>Indirect (60-day) rollover.</strong> The plan pays the money to <em>you</em>. By law the plan must <strong>withhold 20%</strong> for federal taxes. You then have <strong>60 days</strong> to deposit the full amount into the new IRA - including the 20% that was withheld, which you have to make up from other savings. Any part you do not redeposit in time is generally treated as a taxable distribution, and penalties can apply if you are under 59½. You can get the withheld 20% back as a refund when you file your taxes, but only if you replaced it.</li></ul><p><strong>Example:</strong> on a $100,000 indirect rollover, you would receive $80,000. To roll over the full $100,000 you would need to add $20,000 of your own money within 60 days. If you only deposit the $80,000, the missing $20,000 is generally treated as a distribution.</p><p>For moves between IRAs (not from a 401(k)), indirect 60-day rollovers are limited to <strong>one per 12 months</strong>. Direct trustee-to-trustee transfers have no such limit.</p>`,
      },
      {
        heading: "Step-by-step: rolling over your 401(k)",
        body: `<ol><li><strong>Check your plan's rules.</strong> Confirm you are eligible to roll out (usually after leaving the employer) and ask how the plan sends direct rollovers - wire, check to the custodian, or another method.</li><li><strong>Choose a gold IRA company and compare written quotes.</strong> Ask each for the setup fee, yearly custodian and storage fees, the markup over spot on the exact coins or bars you would buy, and what they would pay to buy the metal back. Our <a href="/">ranked list of gold IRA companies</a> is a starting point.</li><li><strong>Open the self-directed IRA.</strong> The dealer usually connects you with a custodian (Equity Trust, STRATA and Goldstar are names that come up). You sign the custodian's account application, not just the dealer's.</li><li><strong>Request a direct rollover.</strong> Fill out your 401(k) plan's distribution or rollover form, naming the new custodian as the recipient. Many custodians will help with this paperwork.</li><li><strong>Wait for the funds to arrive.</strong> Timing depends on the plan - from days to a few weeks. The cash sits in your new IRA until you place an order.</li><li><strong>Choose your metals and lock the price.</strong> You (or the dealer, with your sign-off) direct the custodian to buy specific IRA-eligible products. Get a written invoice showing quantity, price per unit and the spot price at the time.</li><li><strong>Confirm storage.</strong> The dealer ships the metal to the depository. Check that your statement lists the products and whether storage is segregated or non-segregated.</li></ol>`,
      },
      {
        heading: "How long does a 401(k) to gold IRA rollover take?",
        body: `<p>It varies mostly with how quickly your old plan processes the request. Some move money in a few days; others take several weeks, particularly if they mail a check. The steps on the gold IRA side - opening the account and buying metal - are usually faster. Be wary of anyone who rushes you to "lock in" a price before your money has even arrived.</p>`,
      },
      {
        heading: "Should you roll over all of your 401(k)?",
        body: `<p>You do not have to. You can roll over part of an old 401(k) into a gold IRA and move the rest to a regular IRA, or leave it in the plan if the plan allows. Physical gold pays no interest or dividends and its price can fall, so many people keep it to a portion of their savings. See <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold in a retirement portfolio</a> for the ways people think about sizing it.</p><p>Also compare against simpler options. If what you want is gold price exposure, a gold fund in a normal IRA can be cheaper - see <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a>.</p>`,
      },
      {
        heading: "Mistakes to avoid",
        body: `<ul><li><strong>Taking a check made out to you</strong> when you meant to do a direct rollover - this triggers the 20% withholding.</li><li><strong>Missing the 60-day deadline</strong> on an indirect rollover.</li><li><strong>Buying non-eligible products</strong> like Krugerrands or rare collectible coins - see <a href="/articles/irs-approved-precious-metals">which metals qualify</a>.</li><li><strong>Agreeing to keep the metal at home</strong> - see <a href="/articles/can-you-store-ira-gold-at-home">why home storage is not allowed</a>.</li><li><strong>Not asking for the markup in writing.</strong> In the 2023 Red Rock Secured case, regulators said customers - many rolling over IRAs, 401(k)s and TSPs - paid average markups of 100-130% after being told 4-29%.</li><li><strong>Being sold "premium" or proof coins</strong> instead of plain bullion without understanding the price difference. Read <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a>.</li></ul>`,
      },
      {
        heading: "Next steps",
        body: `<p>Before you sign anything, get three things in writing from each company you are considering: total fees for year one and each year after, the markup over spot on the products you would buy, and the buyback price policy. Compare them side by side with the <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>, then see our <a href="/">best gold IRA companies</a> rankings or reviews of <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>.</p><p>Talk to a tax professional or fee-only financial adviser if you are unsure - especially if you have company stock, after-tax money or Roth money in the plan.</p>${DISCLAIMER}`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. TSP to gold IRA rollover
  // ---------------------------------------------------------------------------
  {
    slug: "tsp-to-gold-ira-rollover",
    title: "TSP to Gold IRA Rollover: A Guide for Federal Employees",
    description:
      "How federal employees and retirees can move Thrift Savings Plan money into a gold IRA - eligibility, direct vs indirect rollovers and what to watch for.",
    category: "Rollovers",
    readTime: "7 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#EEF2F7",
    author: AUTHOR,
    keyTakeaways: [
      "You can move TSP money to an IRA after you separate from federal service, or through an in-service withdrawal from age 59½.",
      "The TSP cannot hold physical gold - money must move to a self-directed IRA with a custodian that holds metals.",
      "A direct rollover avoids taxes and the 20% withholding that applies if the TSP pays you directly.",
      "TSP savers were among the victims in the 2023 Red Rock Secured case - get every price and markup in writing.",
    ],
    sections: [
      {
        heading: "Can you move your TSP into a gold IRA?",
        body: `<p>Yes, if you are eligible to take money out of the Thrift Savings Plan. The TSP itself only offers its own funds - it has no option to hold physical gold or silver. To own metal in a tax-advantaged account, you move TSP money into a <strong>self-directed IRA</strong> whose custodian holds IRS-eligible precious metals in an approved depository. That is what people mean by a "gold IRA" (see <a href="/articles/what-is-a-gold-ira">what is a gold IRA</a>).</p><p>Traditional TSP money goes to a traditional IRA; Roth TSP money would go to a Roth IRA. Keeping the two separate preserves their tax treatment.</p>`,
      },
      {
        heading: "When are you eligible?",
        body: `<p>There are two main windows:</p><ul><li><strong>After separation from federal service</strong> - whether you retire, resign or otherwise leave, you can generally move your TSP balance to an IRA.</li><li><strong>In-service withdrawal at age 59½</strong> - if you are still working for the government, you can take an age-based withdrawal once you reach 59½ and roll it into an IRA.</li></ul><p>The TSP's own forms and rules decide the details, such as how many withdrawals you can take and how they are processed. Check the current rules on the TSP website or with the TSP directly before you start - they change from time to time, and the gold dealer is not the authority on them.</p>`,
      },
      {
        heading: "Direct rollover vs indirect rollover from the TSP",
        body: `<ul><li><strong>Direct rollover (transfer).</strong> The TSP sends the money straight to your new IRA custodian. No tax is due and nothing is withheld. This is the method most people use.</li><li><strong>Indirect rollover.</strong> The TSP pays the money to you, withholding <strong>20%</strong> for federal tax. You have <strong>60 days</strong> to deposit the full amount - including the withheld 20%, from your own savings - into the IRA. Anything not redeposited in time is generally treated as a taxable distribution, and penalties can apply if you are under 59½.</li></ul><p>Unless you have a specific reason, the direct route is simpler and safer. Our <a href="/articles/401k-to-gold-ira-rollover">401(k) rollover guide</a> walks through a worked example of how the 20% withholding plays out.</p>`,
      },
      {
        heading: "Step-by-step: TSP to gold IRA",
        body: `<ol><li><strong>Confirm eligibility</strong> - separated from service, or age 59½ or older for an in-service withdrawal.</li><li><strong>Compare gold IRA companies in writing.</strong> Ask for the setup fee, yearly custodian and storage fees, the markup over spot on the exact products, and buyback terms. See our <a href="/">gold IRA company rankings</a>.</li><li><strong>Open a self-directed IRA</strong> with the custodian the dealer works with. Make sure you get the custodian's account agreement and fee schedule.</li><li><strong>Request the withdrawal from the TSP</strong> and choose to transfer it to the new IRA, giving the custodian's details. The gold IRA company or custodian can often help with the form, but you should review and sign it yourself.</li><li><strong>Wait for the funds</strong> to land with the custodian.</li><li><strong>Buy IRA-eligible metal</strong> - for example American Gold Eagles or Buffalos, Canadian Maple Leafs or accredited-refiner bars - and get an itemized invoice. See <a href="/articles/irs-approved-precious-metals">what qualifies</a>.</li><li><strong>Check your first statement</strong> to confirm the products, quantities and storage type match your order.</li></ol>`,
      },
      {
        heading: "Things federal employees should weigh first",
        body: `<ul><li><strong>The TSP is known for very low costs.</strong> A gold IRA adds setup fees, yearly custodian and storage fees (often a flat $175-$300 a year) and a markup on the metal. See <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a>.</li><li><strong>You do not have to move everything.</strong> Many people move only part of their balance, if their withdrawal options allow it. Read <a href="/articles/how-much-gold-in-retirement-portfolio">how much gold in a retirement portfolio</a>.</li><li><strong>Gold pays no income</strong> and its price can drop - it closed at a record of about $5,318 an ounce in January 2026 and was around $4,150-$4,200 by mid-October 2026.</li><li><strong>Required minimum distributions</strong> still apply to traditional IRAs from age 73. See <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</li></ul>`,
      },
      {
        heading: "Watch for scams aimed at TSP savers",
        body: `<p>Federal retirees are a known target. In 2023 the CFTC, SEC and the states of California and Hawaii sued <strong>Red Rock Secured</strong>, alleging it took about $61.8 million from roughly 950 customers - money drawn from IRAs, 401(k)s and TSPs. Regulators said customers paid average markups of 100-130% while being told markups were 4-29%.</p><p>Common warning signs include pressure to act today, pitches that the government is about to "seize" your TSP, steering you toward "premium" or proof coins instead of standard bullion, and any claim that a company is "IRS-approved" (the IRS does not approve dealers). See <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a>.</p>`,
      },
      {
        heading: "Next steps",
        body: `<p>Get written quotes from at least two or three companies, compare the total cost with the <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a>, and consider speaking with a fee-only adviser who does not sell metals. When you are ready, compare options on our <a href="/">best gold IRA companies</a> page or read our reviews of <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> and <a href="/reviews/american-hartford-gold">American Hartford Gold</a>, or compare them in <a href="/augusta-vs-american-hartford-gold">Augusta vs American Hartford Gold</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Fees explained
  // ---------------------------------------------------------------------------
  {
    slug: "gold-ira-fees-explained",
    title: "Gold IRA Fees Explained: Setup, Storage, Markups & Spreads",
    description:
      "Every gold IRA cost explained - setup, custodian and storage fees, dealer markups and buyback spreads - with real ranges and the questions to ask.",
    category: "Fees & Costs",
    readTime: "8 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#FBF5E6",
    author: AUTHOR,
    keyTakeaways: [
      "Yearly custodian and storage fees typically total about $175-$300 and are usually flat, not a percentage of your balance.",
      "The dealer's markup on the metal is often the largest cost - roughly 5-10% on common bullion, far more on premium or proof coins.",
      "The buyback spread decides how much you get back when you sell - ask for the buyback policy before you buy.",
      "Few dealers publish their markups, so ask for every cost in writing before money moves.",
    ],
    sections: [
      {
        heading: "The two layers of gold IRA costs",
        body: `<p>Gold IRA costs fall into two groups, and most advertising only talks about the first:</p><ul><li><strong>Account fees</strong> - what the custodian and depository charge to set up and run the account.</li><li><strong>Metal costs</strong> - the markup you pay above the market (spot) price when you buy, and the discount you take when you sell back.</li></ul><p>On a typical account, the metal costs can easily be larger than several years of account fees combined. Knowing both is the only way to compare companies fairly.</p>`,
      },
      {
        heading: "Setup and account fees",
        body: `<p>Most companies charge a <strong>one-time setup or application fee</strong>. Reported figures range from $0 (Noble Gold, per ConsumerAffairs) to about $50 (Birch Gold Group, Silver Gold Bull) to around $230-$275 at some others. Some also charge a <strong>wire fee</strong> - Birch Gold Group is reported at $30.</p><p>Then there is a <strong>yearly custodian or administration fee</strong>, often in the $80-$125 range on its own. Custodians such as Equity Trust, STRATA and Goldstar charge this, not the dealer - though the dealer may present it as one bundle.</p><p>Promotions sometimes waive these fees for a year or more on larger accounts. That is a real saving, but it is small next to the markup on the metal, so do not let a fee waiver decide the choice on its own.</p>`,
      },
      {
        heading: "Storage fees: segregated vs non-segregated",
        body: `<p>Your metal must be held in an approved depository (see <a href="/articles/can-you-store-ira-gold-at-home">why home storage is not allowed</a>). Storage is usually charged yearly:</p><ul><li><strong>Non-segregated (commingled)</strong> - your metal is stored with other customers' metal of the same type. You get back the same kind and amount, not necessarily the exact coins. Usually cheaper, often around $100-$225 a year as reported.</li><li><strong>Segregated</strong> - your specific coins and bars are kept separately. Usually about $50 a year more - for example, American Hartford Gold is reported at $225 non-segregated vs $275 segregated.</li></ul><p>Add custodian and storage fees together and most companies land in the <strong>$175-$300 a year</strong> range. Importantly, these are usually <strong>flat fees</strong>: you pay about the same on $25,000 as on $250,000, so they matter more on smaller accounts.</p>`,
      },
      {
        heading: "Markups and spreads: the cost most people miss",
        body: `<p>The <strong>markup</strong> (or premium) is how much more you pay than the metal's spot price. The dealer keeps it. It is built into the price per coin, so it never shows up as a "fee" on a statement.</p><ul><li><strong>Common bullion</strong> (Gold Eagles, Maple Leafs, standard bars) - often roughly <strong>5-10%</strong> over spot.</li><li><strong>"Premium", proof or numismatic coins</strong> - much higher. In enforcement cases, regulators have described markups from about 30% to well over 100%.</li></ul><p>Some real examples from public cases:</p><ul><li><strong>Red Rock Secured (2023)</strong> - average markups of 100-130%, while customers were told 4-29%.</li><li><strong>Safeguard Metals</strong> - markups averaging about 50% more than disclosed.</li><li><strong>Lear Capital</strong> - sued by the New York Attorney General in 2021 over undisclosed markups of up to 33%.</li><li><strong>Goldline (2012)</strong> - a judgment requiring refunds after coin markups above 55%.</li></ul><p>A 30% markup means the metal has to rise about 43% just for you to break even on what you paid. That is why the markup matters more than almost anything else on the fee sheet.</p>`,
      },
      {
        heading: "What is a buyback spread?",
        body: `<p>The <strong>buyback spread</strong> is the gap between what you pay for the metal and what a dealer will pay you to buy it back. Even with a modest markup, you start behind: if you buy at 7% over spot and the dealer buys back at spot, you are down 7% on day one.</p><p>Policies vary. Some companies advertise a buyback commitment; others buy back in practice without a written guarantee (Fortune reported Augusta Precious Metals buys back at about 5% under its sell price). Neither is a promise of a good price. You are also usually free to sell to a different dealer through your custodian, so compare offers when the time comes.</p>`,
      },
      {
        heading: "What questions should you ask about fees?",
        body: `<p>Ask every company for these answers <strong>in writing</strong>, for the exact products you would buy:</p><ul><li>What is the one-time setup fee, and are there wire or transaction fees?</li><li>What is the yearly custodian fee, and who is the custodian?</li><li>What is yearly storage - segregated or non-segregated - and which depository?</li><li>What is the price per coin or bar today, and what is the spot price right now? (That gives you the markup.)</li><li>What would you pay to buy it back today?</li><li>Is anything waived only for the first year, and what happens after?</li></ul><p>The joint CFTC, FINRA and NASAA advisory "10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals" (March 2024) covers similar ground and is worth reading.</p>`,
      },
      {
        heading: "How to compare total cost",
        body: `<p>Add up year-one fees, ongoing yearly fees over the number of years you expect to hold, the markup on purchase and the expected buyback spread. Our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> does this for you. Companies that publish prices or account fees online make this easier; for the rest, a written quote is the only reliable source.</p><p>Then compare companies side by side on our <a href="/">best gold IRA companies</a> page, or in head-to-heads like <a href="/augusta-vs-goldco">Augusta vs Goldco</a>, <a href="/american-hartford-gold-vs-goldco">American Hartford Gold vs Goldco</a> and <a href="/augusta-vs-american-hartford-gold">Augusta vs American Hartford Gold</a>. Figures above are third-party snapshots and change often - confirm current numbers with each company.</p>${DISCLAIMER}`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. IRS-approved precious metals
  // ---------------------------------------------------------------------------
  {
    slug: "irs-approved-precious-metals",
    title: "IRS-Approved Gold and Silver for an IRA: What Qualifies",
    description:
      "Which gold, silver, platinum and palladium coins and bars can go in an IRA - the IRC 408(m) rules, purity standards and the coins that do not qualify.",
    category: "Rules & Taxes",
    readTime: "7 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#F3EBD7",
    author: AUTHOR,
    keyTakeaways: [
      "IRC 408(m) treats collectibles in an IRA as a distribution, with exceptions for certain US coins and for bullion meeting purity standards.",
      "Gold generally must be .995 fine (the American Gold Eagle is an exception), silver .999, and platinum and palladium .9995.",
      "Common eligible products include American Gold Eagles and Buffalos, Maple Leafs, Philharmonics, Silver Eagles and accredited-refiner bars.",
      "Krugerrands, most proof or numismatic 'rare' coins and collectibles do not qualify - and the IRS does not approve dealers.",
    ],
    sections: [
      {
        heading: "The rule behind it: IRC Section 408(m)",
        body: `<p>Section 408(m) of the Internal Revenue Code says that if an IRA buys a <strong>collectible</strong> - artwork, antiques, stamps, most coins and so on - the purchase is treated as a <strong>distribution</strong>. In other words, it is taxed as if you took the money out.</p><p>The law carves out exceptions that make gold IRAs possible:</p><ul><li><strong>Certain US-minted coins</strong>, such as the American Gold Eagle.</li><li><strong>Bullion</strong> (coins, bars and rounds) that meets minimum fineness standards, <strong>as long as it is held by a trustee</strong> - which is why the metal has to sit with a custodian in an approved depository rather than with you.</li></ul><p>When people say "IRS-approved metals", this is what they mean. The IRS does not publish a list of approved products or approve any gold company or dealer. A dealer describing itself as "IRS-approved" is a marketing claim, not a legal status.</p>`,
      },
      {
        heading: "Minimum purity (fineness) standards",
        body: `<ul><li><strong>Gold:</strong> .995 fine (99.5% pure) or better. The <strong>American Gold Eagle</strong> is an exception - it is 91.67% gold (22 karat) but qualifies because it is specifically named in the law.</li><li><strong>Silver:</strong> .999 fine (99.9% pure).</li><li><strong>Platinum:</strong> .9995 fine.</li><li><strong>Palladium:</strong> .9995 fine.</li></ul><p>Purity alone is not the whole test - bars should come from accredited refiners, and the product must be held by the trustee.</p>`,
      },
      {
        heading: "Which coins and bars are commonly eligible?",
        body: `<p>These are widely accepted by IRA custodians:</p><ul><li><strong>American Gold Eagle</strong> (US Mint)</li><li><strong>American Gold Buffalo</strong> (US Mint)</li><li><strong>Canadian Gold Maple Leaf</strong> (Royal Canadian Mint)</li><li><strong>Austrian Gold Philharmonic</strong> (Austrian Mint)</li><li><strong>American Silver Eagle</strong> (US Mint)</li><li><strong>Gold, silver, platinum and palladium bars</strong> from accredited refiners that meet the fineness standards</li></ul><p>Your custodian has the final say on what it will accept, so confirm before you place an order. For silver-specific options, see the <a href="/articles/silver-ira-guide">silver IRA guide</a>.</p>`,
      },
      {
        heading: "Which coins are not eligible?",
        body: `<ul><li><strong>South African Krugerrands</strong> - a popular bullion coin, but at 91.67% gold it is below .995 and is not covered by the US-coin exception.</li><li><strong>Most proof and numismatic "rare" coins</strong> - collector coins valued for rarity or condition, not just metal content.</li><li><strong>Collectibles</strong> of any kind - commemorative pieces, graded "slabbed" coins sold for their grade, jewelry and similar.</li></ul><p>Be careful with sales pitches for "premium", "exclusive" or "semi-numismatic" coins. Even where a product technically qualifies, these typically carry much higher markups than standard bullion. In public enforcement cases, regulators described markups from roughly 30% to over 100% on such products. See <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a> and <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a>.</p>`,
      },
      {
        heading: "Does the storage rule matter for eligibility?",
        body: `<p>Yes. The bullion exception in 408(m) only applies when the metal is held by a trustee. An IRS-approved non-bank trustee or custodian must hold the metal in an approved depository. Taking eligible coins home - even through an "IRA LLC" structure - was treated as a taxable distribution by the Tax Court in <em>McNulty v. Commissioner</em> (2021). Read <a href="/articles/can-you-store-ira-gold-at-home">can you store gold IRA metals at home?</a> for the full story.</p>`,
      },
      {
        heading: "A simple checklist before you buy",
        body: `<ul><li>Is the product on your custodian's accepted list?</li><li>Does it meet the fineness standard (or is it a named US coin like the Gold Eagle)?</li><li>Is it standard bullion, or a proof / numismatic / "premium" coin with a higher markup?</li><li>What is the price per unit versus today's spot price?</li><li>Where will it be stored, and is that segregated or non-segregated?</li></ul><p>Ready to compare dealers? See our <a href="/">best gold IRA companies</a> rankings, or read reviews of <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>. New to the topic? Start with <a href="/articles/what-is-a-gold-ira">what is a gold IRA</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. Home storage
  // ---------------------------------------------------------------------------
  {
    slug: "can-you-store-ira-gold-at-home",
    title: "Can You Store Gold IRA Metals at Home? (Short Answer: No)",
    description:
      "Why IRA gold cannot be kept at home or in your own safe deposit box, what happened in McNulty v. Commissioner, and the legal ways to hold metal.",
    category: "Rules & Taxes",
    readTime: "6 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#EEF2F7",
    author: AUTHOR,
    keyTakeaways: [
      "IRA metal must be held by an IRS-approved non-bank trustee or custodian in an approved depository.",
      "In McNulty v. Commissioner (2021), the Tax Court treated home storage through an 'IRA LLC' as a taxable distribution.",
      "Taking possession of IRA metal can mean income tax on its value, and penalties may apply.",
      "If you want gold at home, buy it outside your IRA with after-tax money.",
    ],
    sections: [
      {
        heading: "The short answer",
        body: `<p><strong>No.</strong> Precious metals held in an IRA have to be held by an <strong>IRS-approved non-bank trustee or custodian</strong>, in an approved depository. Keeping IRA coins or bars in your house, your own safe or a safe deposit box in your name is not allowed, and doing so risks the IRS treating the whole value as a <strong>taxable distribution</strong>.</p><p>You may still see ads for "home storage gold IRAs" or "checkbook IRAs" that promise you can hold the metal yourself. The Tax Court has already rejected that approach in a published case.</p>`,
      },
      {
        heading: "Why does the IRS require a custodian?",
        body: `<p>It comes from the tax code. Under <strong>IRC Section 408(m)</strong>, collectibles held in an IRA are treated as distributions. The exception that allows gold and silver bullion in an IRA only applies when the bullion is <strong>held by a trustee</strong>. Once you have the metal in your own hands, the exception stops protecting it.</p><p>The custodian also keeps the records, reports values to the IRS each year and handles distributions - things that cannot be verified if the coins are in a closet at home. See <a href="/articles/irs-approved-precious-metals">which metals qualify for an IRA</a> for the rest of the rules.</p>`,
      },
      {
        heading: "What happened in McNulty v. Commissioner?",
        body: `<p>In <em>McNulty v. Commissioner</em>, 157 T.C. No. 10 (2021), the taxpayers used self-directed IRAs to set up an LLC - the so-called "IRA LLC" or "checkbook IRA" structure - and had the LLC buy American Gold Eagle coins, which they then kept at home.</p><p>The <strong>US Tax Court</strong> ruled that taking physical possession of the coins counted as a <strong>distribution</strong> from the IRA. That meant the value of the coins was taxable income, and the court also upheld penalties. The fact that the coins themselves were IRA-eligible did not help - what mattered was who held them.</p><p>The takeaway: the "home storage" structure that some promoters still sell has been tested in court and failed.</p>`,
      },
      {
        heading: "What about a safe deposit box or private vault?",
        body: `<p>The same logic applies. A safe deposit box rented in <em>your</em> name, or a private vault you control, is not the same as an IRS-approved custodian holding the metal in an approved depository. The depository relationship should run through your IRA custodian, and your statement should come from the custodian. Ask the custodian directly where your metal is and how it is held.</p>`,
      },
      {
        heading: "Your legal storage options",
        body: `<ul><li><strong>Non-segregated (commingled) storage</strong> - your metal is held with other investors' metal of the same type. When you sell or take a distribution, you receive the same type and quantity. Usually the cheaper option.</li><li><strong>Segregated storage</strong> - your specific coins and bars are kept apart and labelled for your account. Typically costs more - often about $50 a year extra in the figures we have seen.</li></ul><p>Common depositories include the Delaware Depository, Brink's and IDS of Texas. Combined custodian and storage fees typically run about $175-$300 a year - see <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a>.</p>`,
      },
      {
        heading: "Can you ever take the gold home?",
        body: `<p>Yes - by taking a <strong>distribution</strong>. You can ask the custodian to ship the metal to you "in kind". It is then out of the IRA, and for a traditional IRA the fair market value is taxed as ordinary income in that year. Once you reach 73, required minimum distributions can be taken this way. Roth IRAs have no RMDs for the original owner. See <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</p><p>If having gold physically within reach is what matters most to you, the straightforward option is to buy coins outside your IRA with money you have already paid tax on. You can compare that with fund-based options in <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF</a>.</p>`,
      },
      {
        heading: "Red flags to watch for",
        body: `<p>Be cautious of anyone who tells you that you can keep IRA gold at home, that a "home storage IRA" is IRS-approved, or that an LLC structure makes it legal. Those claims conflict with the McNulty ruling. Read <a href="/articles/gold-ira-scams-red-flags">gold IRA scams and red flags</a> for other warning signs.</p><p>To find companies that use established custodians and depositories, see our <a href="/">best gold IRA companies</a> rankings, or read reviews of <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> and <a href="/reviews/goldco">Goldco</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
];
