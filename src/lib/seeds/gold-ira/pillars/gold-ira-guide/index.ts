import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold IRA: The Complete Guide to Precious Metals IRAs (2026)".
// The hub for the head term "gold IRA" - links out to every other guide,
// review and comparison. Written in parts for maintainability; assembled here
// in reading order. Question-shaped headings (ending in "?") are emitted as
// FAQPage schema by the article page. The final section ends with DISCLAIMER.
// All figures are dated Oct 19, 2026 (see PILLAR-RESEARCH.md for sources).

export const goldIraCompleteGuide: ArticleData = {
  slug: "gold-ira",
  title: "Gold IRA: The Complete Guide to Precious Metals IRAs (2026)",
  description:
    "Gold IRA guide for 2026: how precious metals IRAs work, eligible coins, contribution limits, real fees, gold's returns and drawdowns, taxes, RMDs and scams.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#EEF2F7",
  author: AUTHOR,
  keyTakeaways: [
    "A gold IRA is a self-directed IRA that holds IRS-eligible bullion (gold .995+, silver .999+, or American Eagles) through a custodian and an approved depository - never at home.",
    "The biggest cost is usually the dealer markup (about 2-7% on common bullion online, reportedly more at phone-sales firms), on top of roughly $200-$700+ a year in custodian and storage fees.",
    "Gold is volatile and pays no income: it fell about 29% from its ~$5,595 record (Jan 29, 2026) by June, and ~45% in 2011-2015 - so most commentators suggest keeping it to a modest slice.",
    "Move money by trustee-to-trustee transfer or direct rollover, get every price in writing, and check regulator warnings before you buy - regulators have documented markups of up to ~130%.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
