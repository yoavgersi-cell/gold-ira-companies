import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold vs Silver in 2026". Covers the "gold vs silver" /
// "gold silver ratio" / "is silver a better investment than gold" / "silver
// vs gold for retirement" / "gold or silver IRA" / "why is silver so
// volatile" / "silver price prediction" search cluster. Written in parts for
// maintainability; assembled here in reading order. Question-shaped headings
// (ending in "?") are emitted as FAQPage schema by the article page. The final
// section (part5) ends with DISCLAIMER. Prices dated Oct 30 - Nov 5, 2026
// (gold ~$3,900 Kitco Nov 1; silver ~$50 Fortune Oct 30; ratio 79.4 Nov 3).

export const goldVsSilverGuide: ArticleData = {
  slug: "gold-vs-silver",
  title: "Gold vs Silver in 2026: Which Is the Better Investment for Your Retirement?",
  description:
    "Gold vs silver in 2026: prices, the gold-silver ratio, volatility, premiums, storage, taxes and IRAs compared with real data - and which fits your retirement.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  heroColor: "#EEF2F7",
  author: AUTHOR,
  keyTakeaways: [
    "In early November 2026 gold traded near $3,900 and silver near $50, a gold-to-silver ratio of about 78-79 - higher than on 84% of trading days since 1968, versus a long-run average of roughly 60.",
    "Silver is about twice as volatile as gold (World Gold Council): from their January 29, 2026 records, silver fell about 59% and gold about 30% by early November, after 2025 gains of roughly 145-150% and 65%.",
    "Premiums and bulk favor gold for small buyers: in our $10,000 illustration a Silver Eagle round trip cost about 7.0% vs 5.3% for a Gold Eagle and 3.9% for a 100 oz silver bar, and $50,000 of silver weighs about 69 lb vs under 1 lb of gold.",
    "Taxes and IRA rules are the same for both metals - up to 28% on long-term gains outside an IRA - so for most retirement savers gold works as the core holding and silver, if any, as a smaller satellite.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
