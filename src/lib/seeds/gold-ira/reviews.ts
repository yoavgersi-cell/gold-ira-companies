import type { ReviewData } from "@/lib/config";
import { UPDATED } from "./shared";

// Gold IRA company reviews. Figures are third-party snapshots (Oct 2026) from
// RESEARCH.md - sources often disagree, so fees are written as approximate.
// Offers, guarantees and endorsements are the companies' own advertised
// claims (operator brief, Oct 2026) and are attributed as such, not presented
// as our findings. Keep values consistent with FACTS in ./shared.ts.

export const reviews: ReviewData[] = [
  // ── American Hartford Gold ───────────────────────────────────────────────
  {
    slug: "american-hartford-gold",
    providerId: "american-hartford-gold",
    shortSummary:
      "A family-owned dealer with a low $10,000 minimum, strong reported ratings and a long list of advertised guarantees - though its fees are not posted online and some critics question its sales practices.",
    reviewIntro:
      "American Hartford Gold is a family-owned precious metals dealer based in Los Angeles, founded in about 2015. It offers gold and silver IRAs with a $10,000 minimum - much lower than some big-name rivals - and holds a reported A+ BBB rating with strong Trustpilot scores. The company advertises an \"easy 3-step tax-free, penalty-free\" IRA setup, same-day account opening, a 100% satisfaction guarantee with a 7-day full refund, a lowest price guarantee and no buy-back fees. This review covers what it reportedly charges, what those promises mean in practice and the criticism it has drawn.",
    keyFeatures: [
      "$10,000 minimum",
      "Advertised 3-step IRA setup, with same-day account opening",
      "100% satisfaction guarantee with a 7-day full refund (company claim)",
      "Lowest price guarantee and no buy-back fees (company claim)",
      "Up to $25,000 in free silver on qualifying orders (promo)",
      "A+ BBB (reported) and 4.9 on Trustpilot from 1,947 reviews (Oct 2026)",
    ],
    pricingSummary:
      "Approximate only - American Hartford Gold does not post its fees online. Third-party sources report a $230 application fee plus about $225 a year for non-segregated storage or $275 a year for segregated storage. Yahoo Finance has reported storage fees waived for 1 year on accounts of $50,000 or more, or 3 years at $100,000 or more, and the company currently advertises up to $25,000 in free silver on qualifying orders - promotions like these depend on how much you buy. The company does not publish its markups on coins and bars, which is usually the biggest cost. Ask for the full fee schedule, the spread on each product and the terms of the refund and price guarantees in writing before you fund the account.",
    pricingPlans: [
      { name: "Setup fee", medication: "One-time application fee (reported)", price: "~$230", cadence: "one-time" },
      { name: "Yearly fees", medication: "Custodian admin + depository storage", price: "~$225-$275", unit: "/yr", cadence: "annual" },
      { name: "Minimum", medication: "Minimum to open a gold IRA", price: "$10,000" },
    ],
    treatmentOptions: [
      "gold IRAs",
      "silver IRAs",
      "rollovers from 401(k), TSP and other IRAs",
      "direct (cash) purchases of gold and silver",
    ],
    pros: [
      "Low $10,000 minimum",
      "Advertised 7-day full refund and no buy-back fees",
      "Free-silver and fee-waiver offers can add value on larger accounts",
      "Strong reported BBB and Trustpilot ratings",
    ],
    cons: [
      "Fees are not published online",
      "Markups on coins and bars are not disclosed upfront",
      "The biggest promotions depend on how much you buy",
      "Some reviewers criticize its advertising and cite whistleblower complaints",
    ],
    bestFor: [
      "Savers starting with $10,000 or more",
      "Larger accounts that qualify for free silver or fee waivers",
      "Buyers who want a stated refund window and buyback terms",
    ],
    howItWorks: [
      { timing: "Step 1", title: "Call or request the free kit", detail: "An account representative explains the process, current offers and guarantee terms." },
      { timing: "Step 2", title: "Open a self-directed IRA", detail: "The company helps you open an account with a custodian - it advertises same-day setup." },
      { timing: "Step 3", title: "Fund the account", detail: "A direct trustee-to-trustee transfer or rollover is not taxed and avoids the 20% withholding on a 401(k) payout." },
      { timing: "Step 4", title: "Choose your metals", detail: "Pick IRA-eligible gold or silver, shipped to an approved depository - not to your home." },
    ],
    trustBadges: ["Since 2015", "A+ BBB (reported)", "$10k minimum"],
    finalVerdict:
      "American Hartford Gold makes gold IRAs accessible with a $10,000 minimum, and its advertised refund window, price guarantee and no buy-back fees are strong selling points on paper. The company also advertises an endorsement from Bill O'Reilly - treat that as advertising, not an independent review. On the other side, its fees are not posted, and BestGuide scores it 3.2 out of 5, citing whistleblower complaints and advertising practices. Our editors rate it among the strongest choices for most savers, provided you get every fee, markup and guarantee term in writing before you buy.",
    updatedAt: UPDATED,
  },

  // ── Goldco ───────────────────────────────────────────────────────────────
  {
    slug: "goldco",
    providerId: "goldco",
    shortSummary:
      "One of the best-known gold and silver IRA companies, with a bonus-silver promotion and an advertised buyback guarantee - but expect a sales call before you see full pricing.",
    reviewIntro:
      "Goldco has sold precious metals since about 2006 and is one of the most advertised names in gold and silver IRAs. The company says its specialists have placed over $3.5 billion in gold and silver, and it advertises over 8,000 5-star customer reviews, a buyback guarantee and a limited-time offer of up to 10% in bonus silver. Metals are stored at approved depositories such as the Delaware Depository and Brink's. This review looks at what Goldco reportedly charges, its minimums and the catches behind its promotions.",
    keyFeatures: [
      "Gold and silver IRAs plus direct purchases",
      "Up to 10% in bonus silver on qualifying purchases (limited-time promo)",
      "Buyback guarantee (company claim)",
      "Over $3.5 billion in metals placed (company claim)",
      "Storage at the Delaware Depository or Brink's",
      "4.8 on Trustpilot across about 1,500+ reviews (reported, Mar 2025)",
    ],
    pricingSummary:
      "Approximate only - sources disagree. Finder reports a setup fee of about $50, and ConsumerAffairs lists about $125 a year for administration plus $100 (non-segregated) or $150 (segregated) a year for storage. Yahoo Finance instead reports a $275 application fee and about $225 a year. CNBC reports a $10,000 minimum first purchase and a $25,000 minimum account balance. Goldco does not post its markups, and the bonus silver is tied to how much you buy - so compare the total price, not just the bonus. Finder found that Goldco's live chat would not quote fees and pushed for a phone call. Ask for every fee, the spread and the buyback terms in writing.",
    pricingPlans: [
      { name: "Setup fee", medication: "One-time account setup (reported)", price: "~$50", cadence: "one-time" },
      { name: "Yearly fees", medication: "Custodian admin + depository storage", price: "~$225-$275", unit: "/yr", cadence: "annual" },
      { name: "Minimum", medication: "Account minimum (reported)", price: "$25,000" },
    ],
    treatmentOptions: [
      "gold IRAs",
      "silver IRAs",
      "rollovers from 401(k), TSP and other retirement accounts",
      "direct (cash) purchases of gold and silver",
    ],
    pros: [
      "Long track record and a large base of positive reviews",
      "Bonus-silver promotion can add value on larger purchases",
      "Advertised buyback guarantee for when you want to sell",
      "Choice of Delaware Depository or Brink's storage",
    ],
    cons: [
      "Fees are not published and reported figures conflict",
      "Promotions are tied to purchase size and can distract from markups",
      "Pricing generally requires a sales call",
      "At least one reported complaint about silver pricing",
    ],
    bestFor: [
      "Savers with $25,000 or more to roll over",
      "Buyers who want both gold and silver in one IRA",
      "People who prefer a well-known, established brand",
    ],
    howItWorks: [
      { timing: "Step 1", title: "Call or request the free kit", detail: "A specialist explains the process and current promotions by phone." },
      { timing: "Step 2", title: "Open a self-directed IRA", detail: "Goldco helps you open an account with a custodian (reported to be Equity Trust)." },
      { timing: "Step 3", title: "Fund the account", detail: "Use a direct transfer or rollover from your existing IRA, 401(k) or TSP." },
      { timing: "Step 4", title: "Choose your metals", detail: "Select IRA-eligible gold or silver, shipped to the Delaware Depository or Brink's." },
    ],
    trustBadges: ["Since 2006", "4.8 Trustpilot (reported)", "Buyback guarantee (advertised)"],
    finalVerdict:
      "Goldco is an established, well-reviewed choice for gold and silver IRAs, with an advertised buyback guarantee and a generous-sounding bonus-silver offer. The weak spot is transparency: fees are not posted, sources report different numbers and you will likely need a sales call to get a quote. Our editors rate it highly for its track record, but treat the bonus as a perk, not a reason to buy, and get the spread on each product in writing.",
    updatedAt: UPDATED,
  },

  // ── Augusta Precious Metals ──────────────────────────────────────────────
  {
    slug: "augusta-precious-metals",
    providerId: "augusta-precious-metals",
    shortSummary:
      "A high-touch gold IRA company built around education and personal service, with strong reported ratings - but a $50,000 minimum, and it pitches itself to savers with $100,000 or more.",
    reviewIntro:
      "Augusta Precious Metals has sold gold and silver IRAs since about 2012 and is best known for investor education, including a free one-on-one web conference before you buy. The company advertises personalized service from start to finish and says it is ideal for retirement savings of $100,000 or more. It also advertises a \"Most Transparent Pricing\" rating from Investopedia, an A+ BBB rating and 5,000+ 5-star reviews. Its $50,000 minimum is one of the highest in the industry, so it is aimed at people moving a sizable 401(k) or IRA.",
    keyFeatures: [
      "$50,000 minimum; pitched at savings of $100,000+",
      "Free one-on-one educational web conference",
      "Personalized service and \"lifetime account support\" (company claim)",
      "Equity Trust as custodian (reported)",
      "Storage at the Delaware Depository (reported)",
      "A+ BBB and AAA BCA ratings (reported)",
    ],
    pricingSummary:
      "Approximate only - sources conflict. Yahoo Finance reports a $275 application fee plus about $225 a year for non-segregated storage or $275 a year for segregated storage. A paid press release instead lists a $50 setup fee, $125 a year for the custodian and $100-$150 a year for storage. Either way, yearly costs land in the usual $225-$275 range. Augusta advertises transparent pricing, but the third-party sources we reviewed did not find its markups on coins and bars published, and that spread is usually the largest cost. Fortune reports that Augusta buys metal back at about 5% below its selling price, with no written buyback guarantee. Get the fee schedule and the spread in writing before you fund the account.",
    pricingPlans: [
      { name: "Setup fee", medication: "One-time account setup (sources vary up to ~$275)", price: "~$50", cadence: "one-time" },
      { name: "Yearly fees", medication: "Custodian admin + depository storage", price: "~$225-$275", unit: "/yr", cadence: "annual" },
      { name: "Minimum", medication: "Minimum to open a gold IRA", price: "$50,000" },
    ],
    treatmentOptions: [
      "gold IRAs",
      "silver IRAs",
      "rollovers from 401(k), 403(b), TSP and other IRAs",
      "direct (cash) purchases of gold and silver",
    ],
    pros: [
      "Strong focus on education before you buy",
      "Personal service with one long-term point of contact",
      "High reported BBB, BCA and Trustpilot ratings",
      "Reported buyback about 5% below its selling price",
    ],
    cons: [
      "$50,000 minimum is too high for many savers",
      "Fees are not published and sources disagree on them",
      "Per-product markups are not shown in the sources we reviewed",
      "No written buyback guarantee",
    ],
    bestFor: [
      "Savers moving $100,000 or more from a 401(k) or IRA",
      "First-time buyers who want to learn before committing",
      "People who value a single, long-term point of contact",
    ],
    howItWorks: [
      { timing: "Step 1", title: "Call or request the free kit", detail: "Speak with an agent and book the optional one-on-one web conference." },
      { timing: "Step 2", title: "Open a self-directed IRA", detail: "Augusta helps you open the account with its custodian, reported to be Equity Trust." },
      { timing: "Step 3", title: "Fund the account", detail: "Move money with a direct trustee-to-trustee transfer or rollover, which avoids taxes and the 20% 401(k) withholding." },
      { timing: "Step 4", title: "Choose your metals", detail: "Pick IRA-eligible coins or bars; they ship to the depository, not to your home." },
    ],
    trustBadges: ["Since 2012", "A+ BBB (reported)", "$50k minimum"],
    finalVerdict:
      "Augusta is a strong choice for larger accounts, especially if you want patient education and personal service for years to come. Its ratings are excellent on paper, and online rumors about lawsuits did not match any court record we could find. The trade-offs are a $50,000 minimum, fees you have to ask for and markups that are not spelled out in the sources we reviewed. Our editors recommend it for savers with $100,000 or more, but compare its quoted spread with at least one other company before you sign.",
    updatedAt: UPDATED,
  },

  // ── American Gold and Silver Group ───────────────────────────────────────
  // Not covered in RESEARCH.md, and a web search (Oct 2026) found no
  // independent reviews, ratings or fee data for this exact company name.
  // Everything below is either the company's advertised offer or a generic
  // caution. OPERATOR: fill in founding year, HQ, minimum and fees from the
  // partner brief and verify on BBB.org / Trustpilot before launch.
  {
    slug: "american-gold-and-silver-group",
    providerId: "american-gold-and-silver-group",
    shortSummary:
      "A gold and silver IRA dealer that advertises a 7-day full refund, a lowest price guarantee, no buy-back fees and up to $15,000 in free silver - but little independent information is available, so verify everything first.",
    reviewIntro:
      "American Gold and Silver Group offers gold and silver IRAs and advertises an \"effortless\" tax- and penalty-free IRA setup. The company advertises a 100% satisfaction guarantee with a 7-day full refund, a lowest price guarantee, no buy-back fees and up to $15,000 in free silver. We could not find independent reviews, ratings or published fee data for this company, so this review sets out what it advertises and the questions to ask before you open an account.",
    keyFeatures: [
      "Gold and silver IRAs and rollovers (company claim)",
      "100% satisfaction guarantee with a 7-day full refund (company claim)",
      "Lowest price guarantee (company claim)",
      "No buy-back fees (company claim)",
      "Up to $15,000 in free silver (promo, terms vary)",
      "Storage at approved US depositories through your custodian",
    ],
    pricingSummary:
      "American Gold and Silver Group does not publish its fees, and we found no third-party fee figures. Setup and yearly fees are normally set by the custodian and depository; across the industry they typically run about $175-$300 a year in total, but ask for this company's actual numbers. Free-silver offers are usually tied to how much you buy, so compare the total price of the metal, not just the bonus. Before you fund an account, get the minimum, every fee, the markup on each product, the buyback price and the exact refund and price-guarantee terms in writing.",
    pricingPlans: [
      { name: "Setup fee", medication: "Set by the custodian - ask for a quote", price: "Quote", cadence: "one-time" },
      { name: "Yearly fees", medication: "Custodian admin + depository storage", price: "Quote", cadence: "annual" },
      { name: "Minimum", medication: "Not published - ask the company", price: "Ask" },
    ],
    treatmentOptions: [
      "gold IRAs",
      "silver IRAs",
      "rollovers from 401(k), TSP and other IRAs",
    ],
    pros: [
      "Advertised 7-day full refund window",
      "Advertised lowest price guarantee and no buy-back fees",
      "Free-silver offer can add value on qualifying purchases",
      "Offers both gold and silver IRAs",
    ],
    cons: [
      "Little independent information - no third-party ratings or fee data found",
      "Fees, minimum and founding year are not published",
      "Markups on coins and bars are not disclosed upfront",
      "Free-silver offer likely depends on purchase size",
    ],
    bestFor: [
      "Buyers who value an advertised refund window and price guarantee",
      "Savers who will compare quotes from several companies",
      "People who prefer to work with a representative by phone",
    ],
    howItWorks: [
      { timing: "Step 1", title: "Call or request information", detail: "Ask a representative for the fee schedule, minimum and guarantee terms in writing." },
      { timing: "Step 2", title: "Open a self-directed IRA", detail: "The company helps you open an account with a custodian." },
      { timing: "Step 3", title: "Fund the account", detail: "A direct trustee-to-trustee transfer or rollover is not taxed and avoids the 20% withholding on a 401(k) payout." },
      { timing: "Step 4", title: "Choose your metals", detail: "Pick IRA-eligible gold or silver, shipped to an approved depository - not to your home." },
    ],
    trustBadges: ["7-day refund (advertised)", "No buy-back fees (advertised)", "Free silver offer"],
    finalVerdict:
      "American Gold and Silver Group advertises an attractive package: a 7-day full refund, a lowest price guarantee, no buy-back fees and up to $15,000 in free silver. What is missing is independent evidence - we found no published fees, minimum, founding year or third-party ratings to check those claims against. Our editors include it as an option to compare, not a default pick. Check its BBB and Trustpilot profiles yourself, and get every fee, markup and guarantee term in writing before you move retirement money.",
    updatedAt: UPDATED,
  },
];
