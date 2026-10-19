import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Best Gold Coins and Bars for an IRA (2026)".
// Commercial-investigation guide for readers deciding what to buy.
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page. The final section (part5) ends with DISCLAIMER.

export const bestGoldCoinsForIraGuide: ArticleData = {
  slug: "best-gold-coins-for-ira",
  title: "Best Gold Coins and Bars for an IRA (2026): Eligibility, Premiums, Buyback and What to Avoid",
  description:
    "The best gold coins and bars for an IRA in 2026: what's eligible, typical premiums over spot, buyback prices, and why to skip Krugerrands and proof coins.",
  category: "Rules & Taxes",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#FBF5E6",
  author: AUTHOR,
  keyTakeaways: [
    "Low-premium bullion is the best IRA gold for most savers: 1 oz Gold Eagles, Maple Leafs, Buffalos and Philharmonics, plus bars from recognized refiners, at roughly 2-6% over spot in 2026.",
    "Eligibility comes from IRC 408(m): gold must be .995 fine, except the American Eagle, which is named in the statute. The .9167 Krugerrand is not allowed.",
    "On $50,000 at $4,170 spot, a 2% premium costs $980 and a 25% proof-style premium costs $10,000 - gold would have to rise 25% just to get back to even if proofs sell at melt.",
    "Get written quotes with the premium over spot and today's buyback bid; dealers typically bid 1-2% under spot on sovereign coins, and regulators have found 20-130% markups on \"exclusive\" coins.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
