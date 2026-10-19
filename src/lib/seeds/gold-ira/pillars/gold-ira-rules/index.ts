import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold IRA Rules 2026".
// Hub for the eligible-metals, home-storage, taxes/RMDs and Roth spokes.
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page, so only direct-answer sections are phrased as questions.

export const goldIraRulesGuide: ArticleData = {
  slug: "gold-ira-rules",
  title:
    "Gold IRA Rules 2026: IRS Requirements for Metals, Storage, Contributions, Distributions and Taxes",
  description:
    "The IRS rules for a gold IRA in 2026: eligible metals and purity, depository storage, $7,500 limits, rollovers, prohibited transactions, RMDs and taxes.",
  category: "Rules & Taxes",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#EEF2F7",
  author: AUTHOR,
  keyTakeaways: [
    "IRA metal must meet IRC 408(m): gold .995, silver .999, platinum and palladium .9995 fine, or be an American Eagle - Krugerrands, jewelry and most numismatic coins count as collectibles, and buying one is treated as a distribution.",
    "The metal must be held by the trustee in an approved depository; home storage through an \"IRA LLC\" was treated as a taxable distribution in McNulty v. Commissioner (2021).",
    "2026 IRA contributions are capped at $7,500 plus a $1,100 catch-up at 50+ and must be made in cash; direct transfers are unlimited, but only one 60-day IRA-to-IRA rollover is allowed per 12 months.",
    "RMDs start at 73 (born 1951-59) or 75 (born 1960+) and can be taken in metal or cash; a missed RMD faces a 25% excise tax (10% if corrected in time), and Roth owners have no lifetime RMDs.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
