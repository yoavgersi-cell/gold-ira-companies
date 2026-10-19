import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold IRA Rollover: The Complete 2026 Guide".
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page, so only direct-answer sections are phrased as questions.

export const goldIraRolloverGuide: ArticleData = {
  slug: "gold-ira-rollover",
  title:
    "Gold IRA Rollover: The Complete 2026 Guide to Moving a 401(k), IRA, TSP, 403(b) or Pension into Gold",
  description:
    "How to roll a 401(k), IRA, TSP, 403(b) or pension into a gold IRA tax-free: direct vs indirect rules, the 20% trap, steps, timelines, costs and red flags.",
  category: "Rollovers",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#FBF5E6",
  author: AUTHOR,
  keyTakeaways: [
    "A direct rollover or trustee-to-trustee transfer into a self-directed IRA is not taxed and has no limit on frequency; indirect IRA-to-IRA rollovers are limited to one per 12 months across all your IRAs.",
    "If a 401(k), 403(b), 457(b) or TSP pays the money to you, 20% is withheld - you must redeposit the full amount within 60 days or the shortfall is taxable (plus 10% if under 59½ and no exception applies).",
    "IRA metal must meet IRC 408(m) rules (gold .995, silver .999, platinum and palladium .9995, plus American Eagles) and be held by the trustee - home storage was treated as a taxable distribution in McNulty v. Commissioner (2021).",
    "The dealer spread is usually the biggest cost: in our illustration on $100,000, a 15% spread instead of 5% costs $10,000 more - more than ten years of custodian and storage fees.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
