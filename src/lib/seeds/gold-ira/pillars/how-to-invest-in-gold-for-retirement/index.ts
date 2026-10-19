import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "How to Invest in Gold for Retirement (2026)". Compares the
// seven common methods (gold IRA, ETFs, coins at home, miners, 401(k) funds,
// futures, vaulted/digital gold) neutrally, with a $50,000 10-year cost
// illustration. Written in parts for maintainability; assembled here in
// reading order. Question-shaped headings (ending in "?") are emitted as
// FAQPage schema by the article page. The final section (part5) ends with
// DISCLAIMER.

export const investGoldRetirementGuide: ArticleData = {
  slug: "how-to-invest-in-gold-for-retirement",
  title: "How to Invest in Gold for Retirement: Gold IRA vs ETFs vs Coins vs Miners vs 401(k) Funds (2026)",
  description:
    "7 ways to invest in gold for retirement compared: gold IRAs, ETFs, coins, miners and 401(k) funds, with 2026 costs, taxes, liquidity and a 10-year cost example.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#FBF5E6",
  author: AUTHOR,
  keyTakeaways: [
    "There is no single best way to own gold for retirement: low-cost physically backed ETFs (about 0.09%-0.25% a year) are cheapest, a gold IRA holds physical metal in a tax-advantaged account, and coins at home give direct ownership outside any account.",
    "In our illustration of $50,000 held 10 years with gold flat, GLDM in an IRA cost about $523, Gold Eagles at home about $2,720 before security costs, and a gold IRA about $4,215 (low-cost) to $11,540 (high-cost).",
    "Physical gold and physically backed gold ETFs held in a taxable account are taxed as collectibles at up to 28%; inside a traditional or Roth IRA the collectibles rate does not apply.",
    "Keep gold to a modest share (commentators often suggest 5-10%), buy common bullion rather than proof coins, get spreads in writing, and talk to a fee-only adviser or tax professional before moving retirement money.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
