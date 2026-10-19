import type { BattleData } from "@/lib/config";
import { features, UPDATED } from "./shared";

// Head-to-head gold IRA comparisons. Figures come from RESEARCH.md
// (third-party snapshots, Oct 2026); offers and guarantees are the companies'
// own advertised claims (operator brief, Oct 2026), labeled as such. The
// features table reads FACTS in shared.ts - keep category text consistent.
// American Gold and Silver Group: no independent minimum, fee or founding
// data was found, so its battles say so rather than guess.
export const battles: BattleData[] = [
  {
    slug: "american-hartford-gold-vs-goldco",
    provider1Id: "american-hartford-gold",
    provider2Id: "goldco",
    title: "American Hartford Gold vs Goldco",
    matchupLabel: "American Hartford Gold vs Goldco",
    subtitle: "A $10,000 entry point vs a long-running brand with a bonus-silver offer",
    description:
      "American Hartford Gold vs Goldco: compare $10k vs $25k minimums, setup and yearly fees, free-silver offers, buyback terms and reviews for your gold IRA.",
    intro:
      "American Hartford Gold and Goldco are two of the best-known gold IRA companies, and both lean on free-silver offers. American Hartford Gold, a family-owned Los Angeles company founded in 2015, opens accounts from $10,000. Goldco has been in business since 2006 and reports a $25,000 minimum.",
    verdict:
      "American Hartford Gold is our overall pick: its $10,000 minimum suits more savers, and it advertises a 7-day full refund, a lowest price guarantee and no buy-back fees. Goldco is a strong choice if you value a longer track record and a lower reported setup fee, or if you are making a large purchase where up to 10% in bonus silver adds up. Yearly fees are similar, so compare the metal markup and buyback price in writing before you choose.",
    verdictWinnerPoints: [
      "Lower $10,000 minimum",
      "7-day full refund and lowest price guarantee (advertised)",
      "No buy-back fees (advertised)",
    ],
    verdictLoserPoints: [
      "In business since 2006, with $3.5B+ placed (company claim)",
      "Lower reported setup fee (about $50)",
      "Up to 10% in bonus silver on qualifying purchases",
    ],
    winnerId: "american-hartford-gold",
    categories: [
      {
        name: "Minimum investment",
        winner: "provider1",
        explanation:
          "American Hartford Gold opens accounts from $10,000. Goldco's minimum is reported at $25,000, though CNBC describes a $10,000 initial purchase toward a $25,000 balance.",
        supportingPoints: ["American Hartford Gold: $10,000", "Goldco: $25,000 (reported)"],
      },
      {
        name: "Fees & transparency",
        winner: "provider2",
        explanation:
          "Yearly custodian and storage fees are about $225-$275 at both. Goldco's setup fee is reported at about $50 (Finder), against about $230 at American Hartford Gold, which does not post its fees online. Some sources list a higher Goldco application fee, so confirm it in writing.",
        supportingPoints: ["Goldco setup ~$50 (Finder)", "American Hartford Gold setup ~$230"],
      },
      {
        name: "Promotions",
        winner: "tie",
        explanation:
          "American Hartford Gold advertises up to $25,000 in free silver on qualifying orders. Goldco advertises up to 10% in bonus silver. Which is worth more depends on how much you invest - and any bonus only helps if the metal's price is fair.",
        supportingPoints: ["AHG: up to $25k in free silver", "Goldco: up to 10% bonus silver"],
      },
      {
        name: "Guarantees & buyback",
        winner: "provider1",
        explanation:
          "American Hartford Gold advertises a 100% satisfaction guarantee with a 7-day full refund, a lowest price guarantee and no buy-back fees. Goldco advertises a buyback guarantee. These are company claims - read the written terms before you buy.",
        supportingPoints: ["AHG: 7-day full refund (advertised)", "Goldco: buyback guarantee (advertised)"],
      },
      {
        name: "Track record & reviews",
        winner: "tie",
        explanation:
          "Goldco has operated since 2006, shows Trustpilot 4.4 from 1,791 reviews (Oct 2026) and says it has placed over $3.5 billion. American Hartford Gold has a BBB A+ and Trustpilot 4.9 (1,947 reviews, Oct 2026), but BestGuide scores it 3.2/5, citing whistleblower complaints and advertising practices.",
        supportingPoints: ["Goldco: since 2006, Trustpilot 4.4", "AHG: BBB A+, BestGuide 3.2/5"],
      },
    ],
    features: features("american-hartford-gold", "goldco", { minimum: "provider1", setup: "provider2", since: "provider2" }),
    updatedAt: UPDATED,
  },
  {
    slug: "augusta-vs-american-hartford-gold",
    provider1Id: "augusta-precious-metals",
    provider2Id: "american-hartford-gold",
    title: "Augusta Precious Metals vs American Hartford Gold",
    matchupLabel: "Augusta vs American Hartford Gold",
    subtitle: "A high-touch service for big accounts vs a $10,000 entry point",
    description:
      "Augusta vs American Hartford Gold: compare $50k vs $10k minimums, setup and yearly fees, free-silver offers, buyback terms and reviews for a gold IRA.",
    intro:
      "Augusta Precious Metals and American Hartford Gold serve different savers. Augusta focuses on education and personal service for larger accounts, with a $50,000 minimum. American Hartford Gold, a family-owned Los Angeles company founded in 2015, opens accounts from $10,000.",
    verdict:
      "American Hartford Gold is our overall pick because its $10,000 minimum fits far more savers, and it advertises a 7-day full refund and no buy-back fees. Augusta is the better fit if you are moving $100,000 or more and want an education-first process, a one-on-one web conference and lifetime account support. Yearly fees are similar, so compare the metal markup and buyback price in writing.",
    verdictWinnerPoints: [
      "Lower $10,000 minimum",
      "Up to $25,000 in free silver on qualifying orders (advertised)",
      "7-day full refund and no buy-back fees (advertised)",
    ],
    verdictLoserPoints: [
      "Education-led process with a one-on-one web conference",
      "BBB A+ and BCA AAA (reported), Trustpilot 4.8-4.9",
      "Lifetime account support",
    ],
    winnerId: "american-hartford-gold",
    categories: [
      {
        name: "Minimum investment",
        winner: "provider2",
        explanation:
          "American Hartford Gold starts at $10,000. Augusta requires $50,000 for an IRA and says it is built for savers with $100,000 or more.",
        supportingPoints: ["American Hartford Gold: $10,000", "Augusta: $50,000"],
      },
      {
        name: "Fees & transparency",
        winner: "provider1",
        explanation:
          "Yearly custodian and storage fees are about $225-$275 at both. Augusta cites an Investopedia \"Most Transparent Pricing\" award, though sources disagree on its setup fee (about $50 to $275). American Hartford Gold charges about $230 to open and does not post fees online.",
        supportingPoints: ["Augusta: transparency award (company claim)", "AHG: fees not posted online"],
      },
      {
        name: "Education & support",
        winner: "provider1",
        explanation:
          "Augusta is known for its education-first approach, including a one-on-one web conference, personalized service and lifetime account support. American Hartford Gold focuses on a quick setup and says it can open an IRA the same day.",
        supportingPoints: ["Augusta: one-on-one web conference", "AHG: same-day IRA (company claim)"],
      },
      {
        name: "Promotions & buyback",
        winner: "provider2",
        explanation:
          "American Hartford Gold advertises up to $25,000 in free silver on qualifying orders, a lowest price guarantee and no buy-back fees. Augusta offers fee waivers on qualifying accounts and has no written buyback guarantee, though it buys back in practice - Fortune reported about 5% under its sell price.",
        supportingPoints: ["AHG: no buy-back fees (advertised)", "Augusta: no written buyback guarantee"],
      },
      {
        name: "Track record & reviews",
        winner: "provider1",
        explanation:
          "Augusta reports BBB A+, BCA AAA and Trustpilot 4.8-4.9, and says it has 5,000+ five-star reviews. American Hartford Gold has a BBB A+ and Trustpilot 4.9 (1,947 reviews, Oct 2026), but BestGuide scores it 3.2/5, citing whistleblower complaints and advertising practices.",
        supportingPoints: ["Augusta: Trustpilot 4.8-4.9", "AHG: BestGuide 3.2/5"],
      },
    ],
    features: features("augusta-precious-metals", "american-hartford-gold", {
      minimum: "provider2",
      buyback: "provider2",
      promo: "provider2",
    }),
    updatedAt: UPDATED,
  },
  {
    slug: "augusta-vs-goldco",
    provider1Id: "augusta-precious-metals",
    provider2Id: "goldco",
    title: "Augusta Precious Metals vs Goldco",
    matchupLabel: "Augusta vs Goldco",
    subtitle: "The education-first specialist vs the long-running bonus-silver brand",
    description:
      "Augusta vs Goldco: compare $50k vs $25k minimums, setup and yearly fees, bonus-silver offers, buyback guarantees and reviews to pick the right gold IRA.",
    intro:
      "Augusta Precious Metals and Goldco are two of the most searched gold IRA companies. Augusta, founded around 2012, focuses on education and larger accounts with a $50,000 minimum. Goldco, in business since 2006, has a lower reported $25,000 minimum and advertises up to 10% in bonus silver.",
    verdict:
      "Goldco is our overall pick: its lower reported minimum, advertised buyback guarantee and bonus-silver offer suit a wider range of savers. Augusta is the better fit if you plan to invest $100,000 or more and want a slower, education-led process with a one-on-one web conference and lifetime account support. Yearly fees are similar at both, so the bigger cost to compare is the price you pay for the metal itself - ask each company for the markup in writing.",
    verdictWinnerPoints: [
      "Lower reported minimum of $25,000",
      "Buyback guarantee (advertised)",
      "Up to 10% in bonus silver on qualifying purchases",
    ],
    verdictLoserPoints: [
      "Strong focus on education, including a one-on-one web conference",
      "BBB A+ and BCA AAA (reported), Trustpilot 4.8-4.9",
      "Lifetime account support",
    ],
    winnerId: "goldco",
    categories: [
      {
        name: "Minimum investment",
        winner: "provider2",
        explanation:
          "Augusta asks for $50,000 to open an IRA, consistently across sources. Goldco's minimum is reported at $25,000 (CNBC describes a $10,000 initial purchase and a $25,000 balance).",
        supportingPoints: ["Goldco: $25,000 (reported)", "Augusta: $50,000"],
      },
      {
        name: "Fees & transparency",
        winner: "tie",
        explanation:
          "Both land at roughly $225-$275 a year for custodian and storage fees. Sources disagree on setup costs for both - from about $50 up to about $275. Augusta cites an Investopedia \"Most Transparent Pricing\" award; one reviewer (Finder) found Goldco's live chat would not quote fees. Confirm the schedule in writing.",
        supportingPoints: ["Similar yearly fees (~$225-$275)", "Setup fee reports vary for both"],
      },
      {
        name: "Education & support",
        winner: "provider1",
        explanation:
          "Augusta is known for its educational approach, including a one-on-one web conference, personalized service and lifetime account support. Goldco offers guidance too, but leans more on its offers and a sales call.",
        supportingPoints: ["Augusta one-on-one web conference", "Lifetime account support"],
      },
      {
        name: "Promotions & buyback",
        winner: "provider2",
        explanation:
          "Goldco advertises up to 10% in bonus silver and a buyback guarantee. Augusta offers fee waivers on qualifying accounts and has no written buyback guarantee, though it buys back in practice - Fortune reported about 5% under its sell price.",
        supportingPoints: ["Goldco: buyback guarantee (advertised)", "Augusta: no written guarantee"],
      },
      {
        name: "Track record & reviews",
        winner: "tie",
        explanation:
          "Goldco has operated since 2006, shows Trustpilot 4.4 from 1,791 reviews (Oct 2026) and says it has placed over $3.5 billion. Augusta reports BBB A+, BCA AAA and a higher Trustpilot score (4.8-4.9); Goldco has the longer track record.",
        supportingPoints: ["Goldco: since 2006, Trustpilot 4.4", "Augusta: Trustpilot 4.8-4.9"],
      },
    ],
    features: features("augusta-precious-metals", "goldco", {
      minimum: "provider2",
      buyback: "provider2",
      promo: "provider2",
    }),
    updatedAt: UPDATED,
  },
  {
    slug: "american-hartford-gold-vs-american-gold-and-silver-group",
    provider1Id: "american-hartford-gold",
    provider2Id: "american-gold-and-silver-group",
    title: "American Hartford Gold vs American Gold and Silver Group",
    matchupLabel: "American Hartford Gold vs American Gold and Silver Group",
    subtitle: "Similar guarantees - one with a public track record",
    description:
      "American Hartford Gold vs American Gold and Silver Group: compare minimums, fees, free-silver offers, refund guarantees and buyback terms before you invest.",
    intro:
      "American Hartford Gold and American Gold and Silver Group advertise very similar offers: a 7-day full refund, a lowest price guarantee and no buy-back fees. The difference is how much you can check. American Hartford Gold publishes a $10,000 minimum and has years of third-party reviews; we found little independent information on American Gold and Silver Group.",
    verdict:
      "American Hartford Gold is our pick for most savers: it has a published $10,000 minimum, a BBB A+ rating and a larger advertised free-silver offer. American Gold and Silver Group advertises the same kind of guarantees, so it may be worth a quote if you want a second option - but ask for its minimum, fees and markup in writing, since we could not confirm them. Whichever you choose, read the written terms behind any guarantee.",
    verdictWinnerPoints: [
      "Published $10,000 minimum",
      "BBB A+ and Trustpilot 4.9 (1,947 reviews)",
      "Up to $25,000 in free silver on qualifying orders (advertised)",
    ],
    verdictLoserPoints: [
      "7-day full refund (advertised)",
      "Lowest price guarantee and no buy-back fees (advertised)",
      "Up to $15,000 in free silver (advertised)",
    ],
    winnerId: "american-hartford-gold",
    categories: [
      {
        name: "Minimum investment",
        winner: "provider1",
        explanation:
          "American Hartford Gold opens accounts from $10,000. We found no published minimum for American Gold and Silver Group, so ask the company directly.",
        supportingPoints: ["American Hartford Gold: $10,000", "AGSG: not published"],
      },
      {
        name: "Fees & transparency",
        winner: "provider1",
        explanation:
          "American Hartford Gold's fees are reported at about $230 to open and $225-$275 a year, though it does not post them online. We found no third-party fee figures for American Gold and Silver Group - request a written fee schedule before you commit.",
        supportingPoints: ["AHG: ~$230 setup, ~$225-$275/yr", "AGSG: ask for a quote"],
      },
      {
        name: "Promotions",
        winner: "provider1",
        explanation:
          "American Hartford Gold advertises up to $25,000 in free silver on qualifying orders; American Gold and Silver Group advertises up to $15,000. Both depend on order size, and a bonus is only worth it if the metal's price is fair.",
        supportingPoints: ["AHG: up to $25,000", "AGSG: up to $15,000"],
      },
      {
        name: "Guarantees & buyback",
        winner: "tie",
        explanation:
          "Both advertise a 100% satisfaction guarantee with a 7-day full refund, a lowest price guarantee and no buy-back fees. These are company claims, so read the written terms.",
        supportingPoints: ["Both: 7-day full refund (advertised)", "Both: no buy-back fees (advertised)"],
      },
      {
        name: "Track record & reviews",
        winner: "provider1",
        explanation:
          "American Hartford Gold has operated since 2015, holds a BBB A+ and shows Trustpilot 4.9 from 1,947 reviews, though BestGuide scores it 3.2/5. We found little independent review history for American Gold and Silver Group - check BBB.org and Trustpilot yourself.",
        supportingPoints: ["AHG: since 2015, BBB A+", "AGSG: limited public reviews"],
      },
    ],
    features: features("american-hartford-gold", "american-gold-and-silver-group", {
      minimum: "provider1",
      buyback: "both",
      promo: "provider1",
    }),
    updatedAt: UPDATED,
  },
  {
    slug: "goldco-vs-american-gold-and-silver-group",
    provider1Id: "goldco",
    provider2Id: "american-gold-and-silver-group",
    title: "Goldco vs American Gold and Silver Group",
    matchupLabel: "Goldco vs American Gold and Silver Group",
    subtitle: "An established brand vs a newer name with a refund guarantee",
    description:
      "Goldco vs American Gold and Silver Group: compare minimums, setup and yearly fees, bonus-silver offers, refund guarantees and buyback terms for a gold IRA.",
    intro:
      "Goldco has been in business since 2006, reports a $25,000 minimum and advertises up to 10% in bonus silver. American Gold and Silver Group advertises a 7-day full refund, up to $15,000 in free silver and no buy-back fees, but we found little independent information on its minimums or fees.",
    verdict:
      "Goldco is our pick for most savers because you can check its record: it has operated since 2006, shows Trustpilot 4.4 from 1,791 reviews and advertises a buyback guarantee. American Gold and Silver Group may appeal if a 7-day full refund matters most to you, but ask for its minimum, fees and markup in writing first. On larger purchases, compare Goldco's percentage-based bonus with AGSG's flat cap.",
    verdictWinnerPoints: [
      "In business since 2006",
      "Trustpilot 4.4 from 1,791 reviews (Oct 2026)",
      "Buyback guarantee (advertised)",
    ],
    verdictLoserPoints: [
      "7-day full refund (advertised)",
      "Lowest price guarantee (advertised)",
      "Up to $15,000 in free silver (advertised)",
    ],
    winnerId: "goldco",
    categories: [
      {
        name: "Minimum & fees",
        winner: "provider1",
        explanation:
          "Goldco's minimum is reported at $25,000, with about $50 setup and $225-$275 a year. We found no published minimum or third-party fee figures for American Gold and Silver Group - ask for both in writing.",
        supportingPoints: ["Goldco: $25,000 (reported)", "AGSG: not published"],
      },
      {
        name: "Promotions",
        winner: "tie",
        explanation:
          "Goldco advertises up to 10% in bonus silver; American Gold and Silver Group advertises up to $15,000 in free silver. A percentage bonus grows with your purchase, while a flat cap does not. Either is only worth it if the metal's price is fair.",
        supportingPoints: ["Goldco: up to 10% bonus silver", "AGSG: up to $15,000"],
      },
      {
        name: "Refund guarantee",
        winner: "provider2",
        explanation:
          "American Gold and Silver Group advertises a 100% satisfaction guarantee with a 7-day full refund. We did not find a comparable refund window advertised by Goldco.",
        supportingPoints: ["AGSG: 7-day full refund (advertised)", "Goldco: no comparable window found"],
      },
      {
        name: "Buyback",
        winner: "tie",
        explanation:
          "Goldco advertises a buyback guarantee; American Gold and Silver Group advertises no buy-back fees and a lowest price guarantee. Ask each for its current buyback price in writing.",
        supportingPoints: ["Goldco: buyback guarantee", "AGSG: no buy-back fees"],
      },
      {
        name: "Track record & reviews",
        winner: "provider1",
        explanation:
          "Goldco has operated since 2006, shows Trustpilot 4.4 from 1,791 reviews (Oct 2026) and says it has placed over $3.5 billion. We found little independent review history for American Gold and Silver Group.",
        supportingPoints: ["Goldco: since 2006", "AGSG: limited public reviews"],
      },
    ],
    features: features("goldco", "american-gold-and-silver-group", {
      minimum: "provider1",
      since: "provider1",
    }),
    updatedAt: UPDATED,
  },
  {
    slug: "augusta-vs-american-gold-and-silver-group",
    provider1Id: "augusta-precious-metals",
    provider2Id: "american-gold-and-silver-group",
    title: "Augusta Precious Metals vs American Gold and Silver Group",
    matchupLabel: "Augusta vs American Gold and Silver Group",
    subtitle: "Education and personal service vs free silver and a refund window",
    description:
      "Augusta vs American Gold and Silver Group: compare minimums, fees and transparency, free-silver offers, refund guarantees and buyback terms for a gold IRA.",
    intro:
      "Augusta Precious Metals focuses on education and personal service for larger accounts, with a $50,000 minimum. American Gold and Silver Group advertises a 7-day full refund, up to $15,000 in free silver and no buy-back fees, but we found little independent information on its minimums or fees.",
    verdict:
      "Augusta is our pick if you have $50,000 or more and want an education-first process, lifetime account support and a well-documented record. American Gold and Silver Group may suit you if free silver or a 7-day refund window matters more - but ask for its minimum, fees and markup in writing, since we could not confirm them. If you have less than $50,000, Augusta is not an option.",
    verdictWinnerPoints: [
      "Education-led process with a one-on-one web conference",
      "BBB A+ and BCA AAA (reported), Trustpilot 4.8-4.9",
      "Lifetime account support",
    ],
    verdictLoserPoints: [
      "Up to $15,000 in free silver (advertised)",
      "7-day full refund (advertised)",
      "No buy-back fees (advertised)",
    ],
    winnerId: "augusta-precious-metals",
    categories: [
      {
        name: "Fees & transparency",
        winner: "provider1",
        explanation:
          "Augusta's yearly fees run about $225-$275, and it cites an Investopedia \"Most Transparent Pricing\" award, though sources disagree on its setup fee. We found no published minimum or fee figures for American Gold and Silver Group.",
        supportingPoints: ["Augusta: ~$225-$275/yr", "AGSG: ask for a quote"],
      },
      {
        name: "Education & support",
        winner: "provider1",
        explanation:
          "Augusta is known for education, including a one-on-one web conference, personalized service and lifetime account support.",
        supportingPoints: ["One-on-one web conference", "Lifetime account support"],
      },
      {
        name: "Promotions",
        winner: "provider2",
        explanation:
          "American Gold and Silver Group advertises up to $15,000 in free silver. Augusta offers fee waivers on qualifying accounts, and terms vary.",
        supportingPoints: ["AGSG: up to $15,000 in free silver", "Augusta: fee waivers (varies)"],
      },
      {
        name: "Guarantees & buyback",
        winner: "provider2",
        explanation:
          "American Gold and Silver Group advertises a 7-day full refund, a lowest price guarantee and no buy-back fees. Augusta has no written buyback guarantee but buys back in practice - Fortune reported about 5% under its sell price.",
        supportingPoints: ["AGSG: 7-day refund (advertised)", "Augusta: no written buyback guarantee"],
      },
      {
        name: "Track record & reviews",
        winner: "provider1",
        explanation:
          "Augusta has operated since around 2012 and reports BBB A+, BCA AAA and Trustpilot 4.8-4.9. We found little independent review history for American Gold and Silver Group - check BBB.org and Trustpilot yourself.",
        supportingPoints: ["Augusta: Trustpilot 4.8-4.9", "AGSG: limited public reviews"],
      },
    ],
    features: features("augusta-precious-metals", "american-gold-and-silver-group", {
      buyback: "provider2",
      promo: "provider2",
      since: "provider1",
    }),
    updatedAt: UPDATED,
  },
];
