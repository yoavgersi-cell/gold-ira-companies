import type { ArticleData } from "@/lib/config";
import { AUTHOR, DISCLAIMER, UPDATED } from "./shared";

const ADVISORY_URL =
  "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/Metals10Things.html";
const RED_ROCK_URL = "https://www.cftc.gov/PressRoom/PressReleases/8704-23";

export const articlesB: ArticleData[] = [
  // 1. Scams and red flags
  {
    slug: "gold-ira-scams-red-flags",
    title: "Gold IRA Scams: 9 Red Flags and Real Cases to Learn From",
    description:
      "How gold IRA scams work, 9 warning signs to watch for, and what regulators alleged in the Red Rock Secured, Safeguard Metals, Lear Capital and Goldline cases.",
    category: "Safety",
    readTime: "9 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#FBF5E6",
    author: AUTHOR,
    keyTakeaways: [
      "Most gold IRA losses in enforcement cases came from hidden markups on the metal, not from the yearly account fees.",
      "In 2023 the CFTC, SEC, California and Hawaii sued Red Rock Secured, alleging average markups of 100-130% on coins sold to about 950 customers.",
      "A common pattern is a switch from plain bullion into high-markup \"premium\", proof or numismatic coins.",
      "Regulators suggest asking for the total price, the markup and the buyback price in writing before you buy.",
    ],
    sections: [
      {
        heading: "Why gold IRAs attract bad actors",
        body: `<p>Most gold IRA companies are legitimate businesses. But the product has a few features that make it attractive to dishonest sellers. Buyers are often retirees moving large balances from a 401(k), IRA or TSP. Many are worried about inflation or a market crash, which makes fear-based sales pitches effective. And unlike stocks, there is no single public price for a specific coin, so a buyer often cannot tell how much of the purchase price is the dealer's markup.</p><p>In the cases regulators have brought, the yearly fees were rarely the problem. Annual fees for a gold IRA usually run about <strong>$175-$300 a year</strong>. The real damage came from the <strong>markup on the metal itself</strong> - the gap between what the gold is worth and what the customer was charged. On common bullion that spread is roughly 5-10%. In the enforcement cases below, it was alleged to be far higher.</p>`,
      },
      {
        heading: "Real cases: what regulators alleged",
        body: `<p>These are summaries of public enforcement actions. Allegations in a lawsuit are not findings of guilt unless a court or settlement says so.</p><ul><li><strong>Red Rock Secured (2023).</strong> The CFTC, the SEC and the states of California and Hawaii sued the company, alleging it took in about <strong>$61.8 million from roughly 950 customers</strong>, much of it from IRAs, 401(k)s and TSPs. Regulators alleged average markups of <strong>100-130%</strong>, while customers were told markups were 4-29%. <a href="${RED_ROCK_URL}" target="_blank" rel="noopener">Read the CFTC press release</a>.</li><li><strong>Safeguard Metals.</strong> The CFTC alleged about <strong>$68 million</strong> in sales with markups averaging about 50% more than customers were told. The company settled with the CFTC in October 2023. New York's attorney general also brought a case describing it as defrauding seniors.</li><li><strong>Lear Capital.</strong> New York's attorney general sued in 2021 over undisclosed markups of up to 33% on about $43 million of sales; the company reportedly paid $5-6 million. It reached a $2.75 million settlement with the Los Angeles City Attorney in 2022, and its Chapter 11 plan in August 2023 set aside $5.5 million for investors through a coalition of more than 40 states.</li><li><strong>Goldline (2012).</strong> A Santa Monica judgment required up to $4.5 million in refunds plus an $800,000 fund, after allegations of coin markups above 55%.</li><li><strong>Metals.com.</strong> Massachusetts brought an action in which one couple was alleged to have been charged a 54% markup.</li></ul><p>The common thread: customers were steered into coins whose price was far above their metal value, and the markup was hidden or played down.</p>`,
      },
      {
        heading: "What are the 9 red flags of a gold IRA scam?",
        body: `<ol><li><strong>Pressure to act today.</strong> "Prices are about to jump" or "this offer ends tonight" is a sales tactic. A legitimate company will let you take a week to think.</li><li><strong>A fear-heavy pitch.</strong> Warnings that banks will freeze your money, the dollar will collapse or the government will seize your savings are designed to stop you thinking about price.</li><li><strong>A switch to "premium", proof or "rare" coins.</strong> You call about bullion and get steered to special coins "for privacy" or "better growth". In the cases above, these coins carried markups of 50% to over 100%. Most proof and numismatic coins are also not allowed in an IRA at all - see <a href="/articles/irs-approved-precious-metals">which metals qualify</a>.</li><li><strong>No markup in writing.</strong> If the salesperson will not tell you, on paper, what the metal is worth and how much you are paying above that, walk away.</li><li><strong>No clear buyback price.</strong> Ask what the company would pay you for the same coins today. A large gap between buy and sell prices means you start well behind.</li><li><strong>"Free" silver that is not free.</strong> Bonus metal promotions are common and can be legitimate, but the cost may be recovered through a higher price on everything else. Compare the total price, not the bonus.</li><li><strong>Home storage promises.</strong> IRA metal must be held by a qualified custodian in an approved depository. Keeping it at home through an "IRA LLC" was treated as a taxable distribution by the Tax Court in <em>McNulty v. Commissioner</em> (2021). See <a href="/articles/can-you-store-ira-gold-at-home">our home storage guide</a>.</li><li><strong>"IRS-approved company" or guaranteed returns.</strong> The IRS does not approve or endorse dealers. Anyone promising that gold "can't lose" or will double is making a claim no honest seller can make.</li><li><strong>Unsolicited calls and requests to move everything.</strong> Be wary of a cold call, or of being urged to move most or all of your retirement savings into metal. Money should go to your IRA custodian, never to a salesperson's personal account.</li></ol>`,
      },
      {
        heading: "What questions do regulators say you should ask?",
        body: `<p>In March 2024, the CFTC, FINRA and NASAA (the association of state securities regulators) published a joint advisory, <a href="${ADVISORY_URL}" target="_blank" rel="noopener">"10 Things to Ask Before Buying Physical Gold, Silver, or Other Metals"</a>. It is short and worth reading in full. In the same spirit, before you sign anything, ask the company to put these answers in writing:</p><ul><li>What is the total price I am paying for each coin or bar, and what is its current metal (melt) value?</li><li>What is your markup or spread, in dollars and as a percentage?</li><li>What would you pay to buy these exact items back from me today?</li><li>Who is the custodian, and which depository will hold the metal? Is storage segregated or pooled?</li><li>What are all the yearly fees, and who charges each one?</li><li>Are there any fees to sell or to close the account?</li></ul><p>A trustworthy company should answer all of these without hesitation. Our <a href="/articles/gold-ira-fees-explained">gold IRA fees guide</a> explains each cost in more detail.</p>`,
      },
      {
        heading: "How do you check a gold IRA company before you invest?",
        body: `<ul><li><strong>Search enforcement news.</strong> Search the company name plus "CFTC", "SEC", "attorney general" and "lawsuit".</li><li><strong>Check the BBB and Trustpilot.</strong> Read the complaints, not just the star rating. Look for patterns about pricing and buybacks.</li><li><strong>Confirm the custodian independently.</strong> Call the custodian yourself to confirm the account is real and in your name.</li><li><strong>Get a second quote.</strong> Ask another dealer to price the same coins. A dealer that publishes its prices online is a useful benchmark.</li><li><strong>Talk to someone with no stake.</strong> A fee-only financial adviser or a trusted family member can be a valuable second opinion.</li></ul>`,
      },
      {
        heading: "What to do if you think you were overcharged",
        body: `<p>Gather your invoices, account statements and any written promises. Ask the dealer for a written explanation of the price you paid. If you believe you were misled, you can file a complaint with the <strong>CFTC</strong>, your <strong>state securities regulator</strong> (find it through NASAA), your <strong>state attorney general</strong> and the <strong>BBB</strong>. In several of the cases above, customers recovered part of their money through regulator settlements or bankruptcy plans - so reporting matters.</p><p>Compare companies that disclose fees more openly in our <a href="/">gold IRA company rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // 2. Taxes and RMDs
  {
    slug: "gold-ira-taxes-and-rmds",
    title: "Gold IRA Taxes and RMDs: What Retirees Need to Know",
    description:
      "How a gold IRA is taxed, how required minimum distributions work with physical metal, and the rollover and storage mistakes that can trigger a tax bill.",
    category: "Rules & Taxes",
    readTime: "8 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#F3EBD7",
    author: AUTHOR,
    keyTakeaways: [
      "A gold IRA follows the same tax rules as any other traditional or Roth IRA - the metal inside it just has extra storage and purity rules.",
      "Required minimum distributions (RMDs) start at age 73 for traditional IRAs, rising to 75 in 2033 under SECURE 2.0.",
      "You can take an RMD in cash or \"in kind\" by having the metal shipped to you; in-kind distributions are taxed at fair market value.",
      "Roth IRAs have no RMDs for the original owner.",
    ],
    sections: [
      {
        heading: "How is a gold IRA taxed?",
        body: `<p>A gold IRA is a self-directed IRA that holds physical metal instead of stocks or funds. For tax purposes it is simply an IRA. The metal does not change the basic rules. (New to the idea? Start with <a href="/articles/what-is-a-gold-ira">what is a gold IRA</a>.)</p><ul><li><strong>Traditional gold IRA.</strong> Contributions may be tax-deductible, depending on your income and whether you have a workplace plan. Gains grow tax-deferred. Withdrawals are taxed as ordinary income.</li><li><strong>Roth gold IRA.</strong> Contributions are made with after-tax money. Qualified withdrawals are tax-free. See <a href="/articles/roth-gold-ira">Roth vs traditional gold IRA</a>.</li></ul><p>While the gold stays inside the IRA, buying and selling metal does not create a yearly tax bill. Tax comes into play when money or metal leaves the account. Withdrawals before age 59½ are generally subject to a 10% early withdrawal penalty on top of income tax, unless an exception applies.</p>`,
      },
      {
        heading: "How much can you contribute in 2026?",
        body: `<p>Under IRS Notice 2025-67, the 2026 IRA contribution limit is <strong>$7,500</strong>, plus a <strong>$1,100 catch-up</strong> if you are 50 or older, for a total of <strong>$8,600</strong>. That limit covers all of your traditional and Roth IRAs combined - a gold IRA does not get its own separate limit.</p><p>Most people do not fund a gold IRA through yearly contributions, though. Because minimums at many dealers run from about $10,000 to $50,000, the money usually comes from a rollover or transfer of an existing account.</p>`,
      },
      {
        heading: "How do you move money in without a tax bill?",
        body: `<p>The safest route is a <strong>direct trustee-to-trustee transfer</strong> (or a direct rollover from a 401(k)), where the money goes straight from your old custodian to the new one. It is not taxed, and there is no limit on how often you can do it.</p><p>An <strong>indirect, 60-day rollover</strong> is riskier. The money is paid to you, and you must deposit it into the new IRA within 60 days or it becomes a taxable distribution. IRA-to-IRA indirect rollovers are limited to <strong>one per 12 months</strong>. And when a 401(k) pays the money to you directly, it must <strong>withhold 20%</strong> for taxes - which you have to make up from other savings to roll over the full amount.</p><p>Step-by-step guides: <a href="/articles/401k-to-gold-ira-rollover">401(k) to gold IRA rollover</a> and <a href="/articles/tsp-to-gold-ira-rollover">TSP to gold IRA rollover</a>.</p>`,
      },
      {
        heading: "When do RMDs start for a gold IRA?",
        body: `<p>Required minimum distributions apply to traditional gold IRAs just like other traditional IRAs. Under SECURE 2.0, RMDs start at <strong>age 73</strong>, and the starting age rises to <strong>75 in 2033</strong>. Each year's amount is based on your account balance at the end of the prior year and an IRS life-expectancy table.</p><p>The catch with gold is that your custodian needs a <strong>year-end value</strong> for the metal, and your RMD is a dollar amount. Since the metal pays no interest or dividends, there may be no cash in the account to pay it. You need a plan for that before age 73.</p><p>Roth IRAs have <strong>no RMDs</strong> for the original owner, which is one reason some people prefer to hold metal in a Roth.</p>`,
      },
      {
        heading: "Can you take an RMD in gold instead of cash?",
        body: `<p>Yes. You generally have two options:</p><ul><li><strong>Cash.</strong> The custodian sells enough metal (through the dealer's buyback) to cover the RMD and pays you the cash. You pay income tax on the amount. Watch the buyback spread - selling small amounts each year adds up.</li><li><strong>In kind.</strong> The custodian ships you coins or bars worth at least your RMD. The distribution is taxed as income at the metal's <strong>fair market value</strong> on the day it is distributed. You then own the metal personally, outside the IRA. You will still owe the tax in cash, so set money aside.</li></ul><p>Many retirees with more than one traditional IRA take their RMD from a non-gold IRA instead, which is generally allowed because IRA RMDs can be totaled and taken from any of your IRAs. This avoids selling metal. Rules differ for 401(k)s, so check with your custodian or tax adviser.</p>`,
      },
      {
        heading: "Mistakes that can trigger tax or penalties",
        body: `<ul><li><strong>Storing IRA gold at home.</strong> IRA metal must be held by a qualified trustee or custodian in an approved depository. In <em>McNulty v. Commissioner</em> (2021), the Tax Court treated metal kept at home through an "IRA LLC" as a taxable distribution. More in <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></li><li><strong>Buying ineligible coins.</strong> Under IRC 408(m), collectibles bought in an IRA count as distributions. Only certain US-minted coins and bullion that meets purity standards qualify. Krugerrands and most proof or numismatic coins do not. See <a href="/articles/irs-approved-precious-metals">IRA-eligible metals</a>.</li><li><strong>Missing the 60-day window</strong> on an indirect rollover, or doing more than one IRA-to-IRA indirect rollover in 12 months.</li><li><strong>Forgetting the RMD</strong> or not having cash available to cover it.</li></ul>`,
      },
      {
        heading: "Fees and your tax picture",
        body: `<p>Yearly gold IRA fees typically run about $175-$300, usually as a flat amount rather than a percentage. Use our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> to see what they could add up to over your retirement, and read <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a> for details. Because tax rules depend on your full situation, it is worth reviewing any rollover or distribution with a tax professional first.</p><p>Compare custodians and dealers in our <a href="/">gold IRA company rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // 3. Roth vs traditional
  {
    slug: "roth-gold-ira",
    title: "Roth Gold IRA vs Traditional Gold IRA: Which Is Better?",
    description:
      "How a Roth gold IRA differs from a traditional gold IRA on taxes, RMDs and conversions - and the questions to ask before choosing one for your metals.",
    category: "Rules & Taxes",
    readTime: "7 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#EEF2F7",
    author: AUTHOR,
    keyTakeaways: [
      "Both account types hold the same eligible coins and bars, with the same custodian and depository rules.",
      "A traditional gold IRA gives you a possible tax break now; a Roth gives you tax-free qualified withdrawals later.",
      "Roth IRAs have no required minimum distributions for the owner, so you are never forced to sell metal at a bad time.",
      "Moving pre-tax 401(k) or IRA money into a Roth gold IRA is a conversion, and the converted amount is taxable that year.",
    ],
    sections: [
      {
        heading: "The short answer",
        body: `<p>Neither is better for everyone. A <strong>traditional gold IRA</strong> and a <strong>Roth gold IRA</strong> hold exactly the same metals under the same storage rules. The difference is <strong>when you pay tax</strong>: now (Roth) or later (traditional). Which suits you depends mostly on your tax bracket today versus in retirement, whether you want to avoid RMDs, and whether you can pay a conversion tax from savings outside the IRA.</p><p>If you are new to the concept, read <a href="/articles/what-is-a-gold-ira">what is a gold IRA</a> first.</p>`,
      },
      {
        heading: "How does a traditional gold IRA work?",
        body: `<ul><li>Contributions may be tax-deductible, depending on your income and workplace plan.</li><li>Money from a 401(k), 403(b), TSP or traditional IRA can usually move in <strong>without tax</strong> through a direct rollover or transfer.</li><li>Growth is tax-deferred.</li><li>Withdrawals - in cash or in metal - are taxed as ordinary income.</li><li><strong>Required minimum distributions</strong> start at age 73 (rising to 75 in 2033).</li></ul><p>Because most gold IRAs are funded by rolling over an existing pre-tax 401(k) or IRA, the traditional version is the most common. See our <a href="/articles/401k-to-gold-ira-rollover">401(k) rollover guide</a>.</p>`,
      },
      {
        heading: "How does a Roth gold IRA work?",
        body: `<ul><li>Contributions are made with after-tax dollars - there is no deduction.</li><li>Qualified withdrawals are <strong>tax-free</strong>. Generally, that means you are 59½ or older and your first Roth IRA has been open at least five years.</li><li>There are <strong>no RMDs</strong> for the original owner.</li><li>Direct Roth contributions are limited by income. Higher earners often use conversions instead.</li><li>Money from an existing Roth IRA or Roth 401(k) can generally move into a Roth gold IRA without tax.</li></ul>`,
      },
      {
        heading: "Can you roll a 401(k) into a Roth gold IRA?",
        body: `<p>Yes, but if the 401(k) money is pre-tax, moving it into a Roth is a <strong>Roth conversion</strong>. The whole converted amount is added to your taxable income for that year. On a large balance, that can push you into a higher bracket and may affect things like Medicare premiums.</p><p>Some people convert in smaller pieces over several years to spread out the tax. Paying the conversion tax from savings outside the IRA keeps more metal working inside the Roth. Because the stakes are high, this is a decision to run past a tax professional before you call a dealer.</p>`,
      },
      {
        heading: "Side-by-side comparison",
        body: `<table><thead><tr><th></th><th>Traditional gold IRA</th><th>Roth gold IRA</th></tr></thead><tbody><tr><td>Tax on money going in</td><td>Often deductible / tax-free rollover</td><td>After-tax; conversions taxed</td></tr><tr><td>Tax on withdrawals</td><td>Ordinary income</td><td>Tax-free if qualified</td></tr><tr><td>RMDs for owner</td><td>Yes, from age 73 (75 in 2033)</td><td>None</td></tr><tr><td>2026 contribution limit</td><td colspan="2">$7,500 + $1,100 catch-up at 50+ ($8,600), shared across all IRAs</td></tr><tr><td>Eligible metals and storage</td><td colspan="2">Identical - approved coins and bars in an approved depository</td></tr></tbody></table>`,
      },
      {
        heading: "Why do RMDs matter more for gold?",
        body: `<p>Physical metal pays no interest or dividends, so a traditional gold IRA usually has little cash in it. Once RMDs start, you may have to sell metal through the dealer's buyback each year - whatever the gold price is at that moment - or take coins in kind and pay income tax on their value. Gold fell roughly 20% from its record close of about $5,318 an ounce in January 2026 to around $4,150-$4,200 by mid-October 2026, which shows how much the timing of a forced sale can matter.</p><p>A Roth avoids that pressure for the owner. You can hold the metal as long as you like. Read more in <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</p>`,
      },
      {
        heading: "Questions to ask before you choose",
        body: `<ul><li>Do I expect my tax rate in retirement to be higher, lower or about the same as now?</li><li>Can I pay a conversion tax from money outside my retirement accounts?</li><li>Do I want to avoid being forced to sell metal for RMDs?</li><li>Will I leave this account to heirs?</li><li>Does my chosen custodian offer both Roth and traditional self-directed IRAs? (Most major gold IRA custodians do, but confirm.)</li></ul><p>Fees and minimums are the same whichever type you open - see <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a> - and you can compare companies in our <a href="/">gold IRA rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // 4. Gold IRA vs ETF vs physical
  {
    slug: "gold-ira-vs-gold-etf",
    title: "Gold IRA vs Gold ETF vs Physical Gold: Which Fits Your Retirement?",
    description:
      "Compare three ways to own gold for retirement - a gold IRA, a gold ETF and coins you hold yourself - on cost, control, taxes, convenience and risk.",
    category: "Guides",
    readTime: "8 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#FBF5E6",
    author: AUTHOR,
    keyTakeaways: [
      "A gold IRA holds real coins and bars in a depository with IRA tax benefits, but costs about $175-$300 a year plus the dealer's markup.",
      "A gold ETF tracks the gold price, can sit in an ordinary IRA or brokerage account, and is easy to buy and sell - but you do not hold the metal.",
      "Physical gold you keep yourself gives full control but no IRA tax benefits, and you handle storage, insurance and security.",
      "Flat yearly gold IRA fees weigh more heavily on small accounts than on large ones.",
    ],
    sections: [
      {
        heading: "Three ways to own gold",
        body: `<p>If you want gold in your retirement plan, you have three main choices:</p><ul><li><strong>A gold IRA</strong> - a self-directed IRA that owns physical coins and bars, stored by a custodian in an approved depository.</li><li><strong>A gold ETF</strong> - an exchange-traded fund whose shares track the price of gold. You can hold it in a regular IRA, a 401(k) brokerage window or a taxable account.</li><li><strong>Physical gold you hold</strong> - coins or bars you buy and keep in a safe or bank box, outside any retirement account.</li></ul><p>Each has real advantages. The right fit depends on whether you value holding the actual metal, low costs, simplicity or tax benefits most.</p>`,
      },
      {
        heading: "What are the pros and cons of a gold IRA?",
        body: `<p><strong>Pros:</strong> you own specific physical metal held in your name (if you choose segregated storage), and it keeps the tax benefits of an IRA. You can fund it with a tax-free rollover from a 401(k), IRA or TSP.</p><p><strong>Cons:</strong> it is the most expensive route. Yearly custodian and storage fees cluster around <strong>$175-$300</strong>. You also pay the dealer's <strong>markup</strong> - roughly 5-10% on common bullion, and far more on "premium" or proof coins - and face a buyback spread when you sell. Minimums at many dealers run from $10,000 to $50,000. You cannot keep the metal at home (see <a href="/articles/can-you-store-ira-gold-at-home">why</a>), and only certain coins and bars qualify (see <a href="/articles/irs-approved-precious-metals">eligible metals</a>).</p>`,
      },
      {
        heading: "What are the pros and cons of a gold ETF?",
        body: `<p><strong>Pros:</strong> ETFs are simple. You can buy them in an IRA you already have, often with no account-opening fee and no minimum beyond one share. They trade during market hours at close to the gold price, so the buy-sell spread is usually small. Costs come as an annual expense ratio - a percentage of your holding, listed in the fund's prospectus.</p><p><strong>Cons:</strong> you own shares in a fund, not metal you can point to. If your main reason for buying gold is to hold something outside the financial system, an ETF does not deliver that. Because the expense ratio is a percentage, its dollar cost grows as your holding grows. And in a taxable account, gains on physically backed gold ETFs are generally taxed at the collectibles rate (up to 28%) rather than the usual long-term capital gains rate - inside an IRA that does not apply.</p>`,
      },
      {
        heading: "What about physical gold you keep yourself?",
        body: `<p><strong>Pros:</strong> full control and privacy, no custodian, no yearly account fees and no limit on which coins you buy.</p><p><strong>Cons:</strong> no IRA tax benefits - you buy with after-tax money, and profits when you sell are generally taxed as collectibles. You are responsible for safe storage, insurance and theft risk. You still pay a dealer markup when you buy and a spread when you sell. And if you are thinking of pulling money out of an IRA to buy coins, remember that the withdrawal is taxable (and may carry a 10% penalty before age 59½).</p>`,
      },
      {
        heading: "Quick comparison",
        body: `<table><thead><tr><th></th><th>Gold IRA</th><th>Gold ETF</th><th>Physical gold at home</th></tr></thead><tbody><tr><td>You hold real metal</td><td>Yes, in a depository</td><td>No - fund shares</td><td>Yes, in your possession</td></tr><tr><td>IRA tax benefits</td><td>Yes</td><td>Yes, if held in an IRA</td><td>No</td></tr><tr><td>Typical ongoing cost</td><td>~$175-$300/yr flat</td><td>Expense ratio (% per year)</td><td>Your own safe or box, insurance</td></tr><tr><td>Cost to buy</td><td>Dealer markup (~5-10% on bullion)</td><td>Small trading spread</td><td>Dealer markup</td></tr><tr><td>Minimum</td><td>Often $10k-$50k</td><td>One share</td><td>None</td></tr><tr><td>Ease of selling</td><td>Through dealer buyback</td><td>Any trading day</td><td>Find a dealer</td></tr></tbody></table>`,
      },
      {
        heading: "How account size changes the math",
        body: `<p>Because gold IRA fees are usually <strong>flat</strong>, they hit small accounts hardest. A $250 yearly fee is 1% of a $25,000 account but only 0.25% of a $100,000 account. An ETF's percentage fee works the other way - it stays the same share of the account but the dollar amount rises as the balance grows.</p><p>So, broadly, a gold IRA tends to make more sense for larger balances where holding physical metal matters to you, while an ETF is often the cheaper, simpler option for smaller amounts. Try our <a href="/gold-ira-fee-calculator">gold IRA fee calculator</a> with your own numbers, and see <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a>.</p>`,
      },
      {
        heading: "Which one fits you?",
        body: `<ul><li><strong>You want real metal with tax benefits and have a sizable rollover:</strong> a gold IRA. Read our reviews of <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a>, <a href="/reviews/goldco">Goldco</a>, <a href="/reviews/american-hartford-gold">American Hartford Gold</a> and <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a>, or compare two head to head in <a href="/augusta-vs-goldco">Augusta vs Goldco</a>.</li><li><strong>You want simple gold-price exposure at low cost:</strong> a gold ETF in your existing IRA.</li><li><strong>You want metal in your own hands:</strong> physical gold outside your IRA, bought with savings rather than retirement money.</li></ul><p>Many people use more than one. Compare gold IRA providers in our <a href="/">rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // 5. How much gold
  {
    slug: "how-much-gold-in-retirement-portfolio",
    title: "How Much of Your Retirement Should Be in Gold?",
    description:
      "What commentators commonly say about how much gold to hold in retirement, the factors that change the answer, and why gold is no sure thing.",
    category: "Guides",
    readTime: "7 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#F3EBD7",
    author: AUTHOR,
    keyTakeaways: [
      "There is no single right amount. Many financial commentators describe gold as a small slice of a diversified portfolio, often in the 5-10% range.",
      "Gold pays no interest or dividends, and its price can fall sharply - it dropped roughly 20% from its January 2026 record by mid-October 2026.",
      "Your age, income needs, RMDs and the size of a dealer's minimum all affect how much gold is practical.",
      "Be cautious of anyone urging you to move most or all of your retirement savings into metals.",
    ],
    sections: [
      {
        heading: "There is no one right number",
        body: `<p>This guide explains how people commonly think about this question. It is general education, not a recommendation for you. The right mix of investments depends on your full finances, goals and comfort with risk, and is worth discussing with a licensed financial professional who knows your situation.</p><p>With that said, you will hear a few rules of thumb again and again in financial media and planning books.</p>`,
      },
      {
        heading: "What do commentators commonly suggest?",
        body: `<p>Many financial writers and planners describe gold as a <strong>small, diversifying slice</strong> of a portfolio rather than a core holding. The figure most often mentioned is somewhere around <strong>5-10%</strong> of investable assets. Some commentators who are more worried about inflation or market stress talk about going somewhat higher, and some mainstream voices suggest little or none, because gold produces no income.</p><p>These are opinions, not rules, and none of them is tailored to you. They are useful mainly as a sense check: if someone is pushing you to put half your savings into coins, that is far outside what most mainstream commentary describes.</p>`,
      },
      {
        heading: "Why do people hold gold at all?",
        body: `<ul><li><strong>Diversification.</strong> Gold has often moved differently from stocks and bonds, which some investors value as a balance.</li><li><strong>Inflation and currency worries.</strong> Many buyers see gold as a long-term store of value.</li><li><strong>A tangible asset.</strong> Some retirees simply prefer owning something physical outside the banking system.</li></ul><p>Demand has been strong lately. Central banks have been buying at a record pace, and total gold demand hit a record 1,231 tonnes in the first quarter of 2026.</p>`,
      },
      {
        heading: "What are the risks of holding too much gold?",
        body: `<ul><li><strong>No income.</strong> Gold pays no interest or dividends. In retirement, money that is not producing income may need to come from somewhere else.</li><li><strong>Price swings.</strong> Gold set a record close of about $5,318 an ounce on January 29, 2026, then fell to about $4,150-$4,200 by mid-October 2026 - roughly 20% lower. Someone who bought at the peak would be well behind.</li><li><strong>Nobody knows the future.</strong> Big banks' 2026 forecasts ranged from about $4,325 (ING's average) to $4,900 (Goldman Sachs) and $5,000 (Bank of America). Even professionals disagree widely.</li><li><strong>Buying and selling costs.</strong> Dealer markups and buyback spreads mean the price usually has to rise just for you to break even.</li><li><strong>RMD pressure.</strong> In a traditional IRA, required distributions from age 73 may force you to sell metal at a bad time. See <a href="/articles/gold-ira-taxes-and-rmds">gold IRA taxes and RMDs</a>.</li></ul>`,
      },
      {
        heading: "Factors that change the answer",
        body: `<ul><li><strong>Your time horizon.</strong> Money you will need in the next few years is more exposed to a price drop than money you may never touch.</li><li><strong>Your income needs.</strong> If you rely on your portfolio for income, a non-paying asset has a cost.</li><li><strong>Your other assets.</strong> A pension, Social Security, home equity and cash reserves all affect how much risk you can take on.</li><li><strong>Your temperament.</strong> If a 20% fall would cause you to sell in a panic, a smaller position may suit you better.</li><li><strong>Account type.</strong> Gold in a Roth avoids RMDs; gold in a traditional IRA does not. See <a href="/articles/roth-gold-ira">Roth vs traditional gold IRA</a>.</li></ul>`,
      },
      {
        heading: "How do dealer minimums fit in?",
        body: `<p>Minimums can quietly push people to hold more gold than they planned. If you wanted gold to be about 10% of your savings, a dealer with a $50,000 minimum would only fit that plan if your total savings were around $500,000. Minimums vary a lot: <a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a> asks about $50,000, <a href="/reviews/goldco">Goldco</a> about $25,000, and <a href="/reviews/american-hartford-gold">American Hartford Gold</a> about $10,000. <a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a> does not publish a minimum, so ask before you start.</p><p>For smaller amounts, a gold ETF in an existing IRA may be a simpler way to get exposure. Compare options in <a href="/articles/gold-ira-vs-gold-etf">gold IRA vs gold ETF vs physical gold</a>.</p>`,
      },
      {
        heading: "Rebalancing and keeping perspective",
        body: `<p>People who hold a target slice of gold often <strong>rebalance</strong> once a year or so - trimming gold after a big rise and adding after a fall - to keep it near their chosen share. In a gold IRA, keep in mind that each sale goes through the dealer's buyback, so frequent small trades can be costly.</p><p>Whatever you decide, put the plan in writing, check the full cost with our <a href="/gold-ira-fee-calculator">fee calculator</a>, and be wary of any salesperson whose suggested amount happens to be most of your savings. Compare providers in our <a href="/">gold IRA rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },

  // 6. Silver IRA
  {
    slug: "silver-ira-guide",
    title: "Silver IRA Guide: Rules, Costs and Top Companies",
    description:
      "How a silver IRA works: which silver coins and bars qualify, what storage and fees cost, the risks to know and companies that offer silver IRAs.",
    category: "Guides",
    readTime: "8 min read",
    publishedAt: UPDATED,
    updatedAt: UPDATED,
    heroColor: "#EEF2F7",
    author: AUTHOR,
    keyTakeaways: [
      "A silver IRA is a self-directed IRA that holds physical silver, under the same tax, custodian and storage rules as a gold IRA.",
      "Silver must generally be at least .999 fine; the American Silver Eagle is the best-known eligible coin.",
      "Yearly costs look similar to a gold IRA, typically flat fees of about $175-$300 a year, but the dealer markup on the silver itself often matters more.",
      "All four companies in our rankings offer silver, and many investors hold both metals in one account.",
    ],
    sections: [
      {
        heading: "What is a silver IRA?",
        body: `<p>A silver IRA is a <strong>self-directed IRA</strong> that holds physical silver coins or bars instead of stocks and funds. Legally it is the same kind of account as a <a href="/articles/what-is-a-gold-ira">gold IRA</a> - in fact most "precious metals IRAs" can hold gold, silver, platinum and palladium together. The usual players are the same too: a <strong>custodian</strong> that administers the account, a <strong>dealer</strong> that sells you the metal, and an approved <strong>depository</strong> that stores it.</p><p>It can be a traditional or Roth IRA, and you can usually fund it with a tax-free direct rollover from a 401(k), IRA or TSP. See our <a href="/articles/401k-to-gold-ira-rollover">401(k) rollover guide</a>.</p>`,
      },
      {
        heading: "Which silver qualifies for an IRA?",
        body: `<p>Under IRC 408(m), collectibles bought in an IRA are treated as distributions, so only certain silver is allowed. Silver generally must be at least <strong>.999 fine</strong> (99.9% pure).</p><ul><li><strong>Commonly eligible:</strong> the <strong>American Silver Eagle</strong>, and silver bars from accredited refiners that meet the purity standard.</li><li><strong>Not eligible:</strong> most proof or numismatic "rare" coins, collectible sets and anything below the purity standard.</li></ul><p>Always confirm eligibility with your custodian before buying. Our <a href="/articles/irs-approved-precious-metals">IRA-eligible precious metals guide</a> has the full rules for all four metals.</p>`,
      },
      {
        heading: "Where is IRA silver stored?",
        body: `<p>Like gold, IRA silver must be held by a qualified custodian in an approved depository - not at home. The Tax Court treated home-stored IRA metal as a taxable distribution in <em>McNulty v. Commissioner</em> (2021). Details in <a href="/articles/can-you-store-ira-gold-at-home">can you store IRA gold at home?</a></p><p>You will usually choose between <strong>pooled</strong> (non-segregated) storage, where your silver is held with other customers' identical items, and <strong>segregated</strong> storage, where your exact pieces are kept apart - usually for a higher fee. Common depositories include the Delaware Depository and Brink's</p>`,
      },
      {
        heading: "How much does a silver IRA cost?",
        body: `<p>Yearly costs are broadly similar to a gold IRA - typically flat fees in the <strong>$175-$300 a year</strong> range. A few published examples (third-party snapshots, October 2026):</p><ul><li>One online dealer that publishes its prices lists about $50 setup, $125 a year maintenance, plus $100 pooled or $150 segregated storage (Bankrate, 2025).</li><li>Among the companies we rank, American Hartford Gold is reported at about $230 to apply plus $225 a year (pooled) or $275 (segregated); Goldco and Augusta are reported in a similar range. American Gold and Silver Group does not publish its fees - ask for a written quote.</li></ul><p>As with gold, the bigger cost is often the <strong>dealer markup</strong> on the metal and the <strong>buyback spread</strong> when you sell. Ask for both in writing. Because silver is much cheaper per ounce than gold, the same dollar amount buys far more metal by weight, so check how your depository prices storage. See <a href="/articles/gold-ira-fees-explained">gold IRA fees explained</a> and try our <a href="/gold-ira-fee-calculator">fee calculator</a>.</p>`,
      },
      {
        heading: "What are the risks of a silver IRA?",
        body: `<ul><li><strong>Price swings.</strong> Silver prices can move sharply, and historically silver has tended to be more volatile than gold.</li><li><strong>No income.</strong> Like gold, silver pays no interest or dividends, which matters once <a href="/articles/gold-ira-taxes-and-rmds">RMDs</a> begin at age 73.</li><li><strong>Markups and spreads.</strong> Premium or proof silver coins can carry large markups. Stick to plain bullion that qualifies and compare prices.</li><li><strong>"Free silver" promotions.</strong> Bonus silver offers are common. They can be genuine value, but compare the total price you pay, not the size of the bonus. Our <a href="/articles/gold-ira-scams-red-flags">red flags guide</a> explains why.</li></ul>`,
      },
      {
        heading: "Which companies offer silver IRAs?",
        body: `<p>All four companies in our rankings offer silver as well as gold for IRAs:</p><ul><li><strong><a href="/reviews/goldco">Goldco</a></strong> - known for promotions of up to 10% back in free silver on qualifying purchases; minimum reported around $25,000.</li><li><strong><a href="/reviews/american-hartford-gold">American Hartford Gold</a></strong> - $10,000 minimum, with advertised silver bonuses and fee waivers on larger accounts and an advertised buyback with no liquidation fee.</li><li><strong><a href="/reviews/american-gold-and-silver-group">American Gold and Silver Group</a></strong> - advertises up to $15,000 in free silver and no buyback fees; fees and minimums are not published, so ask for a written quote.</li><li><strong><a href="/reviews/augusta-precious-metals">Augusta Precious Metals</a></strong> - education-focused with a $50,000 minimum, better suited to larger accounts.</li></ul><p>To compare two side by side, see <a href="/american-hartford-gold-vs-goldco">American Hartford Gold vs Goldco</a>.</p><p>Fees, minimums and promotions change often. Confirm current terms with each company before you open an account.</p>`,
      },
      {
        heading: "Silver, gold or both?",
        body: `<p>Many investors hold both metals in one precious metals IRA, which means one set of account and storage fees rather than two. Others prefer gold alone because it is more compact to store and has historically been less volatile. There is no single right answer - read <a href="/articles/how-much-gold-in-retirement-portfolio">how much of your retirement should be in gold</a> for the main considerations.</p><p>Compare silver and gold IRA providers side by side in our <a href="/">rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
];
