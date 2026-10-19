import type { BattleFeatureRow } from "@/lib/config";

export const UPDATED = "2026-10-19";
export const AUTHOR = "Gold IRA Planet Editorial Team";

// Appended to the end of every guide and review-style article.
export const DISCLAIMER =
  "<p><em>This article is general information, not financial, tax or legal advice. Fees, minimums and promotions change often and vary by custodian and account size - confirm current terms in writing with the company and your custodian before you invest.</em></p>";

// One row of comparable facts per company - feeds every head-to-head
// "Feature" table so values stay identical across comparisons. All values are
// third-party snapshots (Oct 2026); confirm on each company's own site.
export type FactKey = "minimum" | "setup" | "annual" | "storage" | "buyback" | "promo" | "since";
export const FACTS: Record<string, Record<FactKey, string>> = {
  "augusta-precious-metals": {
    minimum: "$50,000",
    setup: "~$50 (sources vary up to ~$275)",
    annual: "~$225-$275/yr (custodian + storage)",
    storage: "Delaware Depository (reported)",
    buyback: "Buys back; no written guarantee",
    promo: "Fee waivers on qualifying accounts (varies)",
    since: "2012",
  },
  goldco: {
    minimum: "$25,000 (reported)",
    setup: "~$50",
    annual: "~$225-$275/yr (custodian + storage)",
    storage: "Delaware Depository, Brink's",
    buyback: "Buy back guarantee (advertised)",
    promo: "Up to 10% in bonus silver",
    since: "2006",
  },
  "american-hartford-gold": {
    minimum: "$10,000",
    setup: "~$230",
    annual: "~$225-$275/yr (custodian + storage)",
    storage: "Approved US depositories",
    buyback: "No buy-back fees (advertised)",
    promo: "Up to $25k in free silver on qualifying orders",
    since: "2015",
  },
  "american-gold-and-silver-group": {
    minimum: "Ask the company (not published)",
    setup: "Set by custodian (ask for a quote)",
    annual: "Set by custodian (ask for a quote)",
    storage: "Approved US depositories",
    buyback: "No buy-back fees (advertised)",
    promo: "Up to $15,000 in free silver",
    since: "Not published",
  },
};

export const FEATURE_LABELS: [FactKey, string][] = [
  ["minimum", "Minimum investment"],
  ["setup", "Setup fee"],
  ["annual", "Yearly fees"],
  ["storage", "Storage"],
  ["buyback", "Buyback"],
  ["promo", "Current promotion"],
  ["since", "In business since"],
];

export function features(
  p1: string,
  p2: string,
  highlights: Partial<Record<FactKey, BattleFeatureRow["highlight"]>> = {},
): BattleFeatureRow[] {
  return FEATURE_LABELS.map(([key, label]) => ({
    feature: label,
    provider1Value: FACTS[p1][key],
    provider2Value: FACTS[p2][key],
    highlight: highlights[key] ?? "none",
  }));
}
