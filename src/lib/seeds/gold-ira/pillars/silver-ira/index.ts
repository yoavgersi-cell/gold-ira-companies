import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Silver IRA: The Complete 2026 Guide". Replaces the short
// guide silver-ira-guide (redirected by the coordinator).
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page. The final section (part5) ends with DISCLAIMER.

export const silverIraGuide: ArticleData = {
  slug: "silver-ira",
  title: "Silver IRA: The Complete 2026 Guide to Rules, Costs, Eligible Coins and Companies",
  description:
    "Silver IRA rules, eligible coins and bars, 2026 costs, storage and premiums explained, with 10-year cost examples, scam red flags and how to choose a company.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#EEF2F7",
  author: AUTHOR,
  keyTakeaways: [
    "A silver IRA follows the same rules as any IRA: silver must be .999 fine (American Silver Eagles, including proofs, qualify by statute), held by a custodian in an approved depository - not at home. Junk silver and collectibles are not allowed.",
    "Silver is far more volatile than gold: up about 145% in 2025, then down about 53% from its reported January 2026 high to about $57.70 on October 19, 2026, vs about 25% for gold.",
    "Product choice matters more for silver: at $57.70, $50,000 bought about 859 oz as 100-oz bars near spot vs about 811 oz as Silver Eagles at 6.87% over spot - and about 528 oz at the 64% average markup the SEC found at Safeguard Metals.",
    "In our illustrations, a $50,000 silver IRA held 10 years costs about $4,290 (8.6%) in a low-cost setup vs $14,385 (28.8%) in a high-cost one; $50,000 of silver also weighs about 59 pounds, so ask how storage is priced.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
