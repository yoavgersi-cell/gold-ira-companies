import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold Price History 1971-2026: Every Major Rally and Crash,
// and What Forecasts Say Now". Data-led, balanced history of the free-market
// gold price: how the price is set, each boom and bust with dates and
// sources, year-by-year tables, real (inflation-adjusted) prices, silver in
// brief, drivers, gold vs stocks, drawdowns and recovery times, dated bank
// forecasts (with revisions) and lessons for retirement savers. No forecasts
// of our own. Question-shaped headings are emitted as FAQPage schema by the
// article page. The final section ends with DISCLAIMER. All figures dated
// Oct 19, 2026 (see PILLAR-RESEARCH.md plus web sources cited inline).
// Figures are kept consistent with the is-a-gold-ira-a-good-investment pillar.

export const goldPriceHistoryGuide: ArticleData = {
  slug: "gold-price-history",
  title: "Gold Price History 1971-2026: Every Major Rally and Crash, and What Forecasts Say Now",
  description:
    "Gold price history 1971-2026: every major rally and crash from $35 to the ~$5,595 record, year-by-year tables, drawdowns, and what bank forecasts say now.",
  category: "Guides",
  readTime: "50 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#EEF2F7",
  author: AUTHOR,
  keyTakeaways: [
    "Gold was fixed at $35 until Nixon closed the gold window in August 1971; it has since risen to about $4,170 (Oct 19, 2026) - roughly 119 times in dollars, but only about 15 times after inflation.",
    "The ride has been rough: falls of about 47% (1974-76), 70% (1980-99, 28 years to regain $850), 45% (2011-15) and 29% from the ~$5,595 record of Jan 29, 2026 to ~$3,994 in late June.",
    "Gold rose about 27% in 2024 and 65% in 2025 (53 record LBMA PM prices, average $3,431), driven by central banks and investors; rate-hike expectations and a stronger dollar drove the 2026 drop.",
    "Bank forecasts are revised often - Goldman's end-2026 call moved from $5,400 to $4,650 in eight months - so use history to size gold sensibly, not to predict it. Past performance is no guarantee.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
