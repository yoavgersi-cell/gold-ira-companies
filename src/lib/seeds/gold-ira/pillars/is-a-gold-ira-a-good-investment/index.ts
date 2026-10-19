import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Is a Gold IRA a Good Investment? Pros, Cons and 50 Years of Data (2026)".
// Balanced, data-led answer to the "is it worth it" question: long-run returns
// vs stocks, drawdowns, inflation evidence, fee drag with worked break-evens,
// alternatives (ETFs, home bullion, miners) and who it suits. Written in parts
// and assembled here in reading order. Question-shaped headings (ending in "?")
// are emitted as FAQPage schema by the article page. The final section ends
// with DISCLAIMER. All figures are dated Oct 19, 2026 (see PILLAR-RESEARCH.md).

export const isGoldIraGoodInvestmentGuide: ArticleData = {
  slug: "is-a-gold-ira-a-good-investment",
  title: "Is a Gold IRA a Good Investment? Pros, Cons and 50 Years of Data (2026)",
  description:
    "Is a gold IRA a good investment? 50 years of data: gold vs stocks, drawdowns, inflation evidence, fee break-evens, pros and cons, and who it suits in 2026.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#EEF2F7",
  author: AUTHOR,
  keyTakeaways: [
    "Since 1971, gold has returned about 8.8% a year versus about 11.2% for the S&P 500 with dividends - but over 2000-2025 gold led (~10.4% vs ~7.9%), so the start date changes the answer.",
    "Gold pays no income and has had deep drops: about 70% (1980-1999), 45% (2011-2015) and 29% from its ~$5,595 record (Jan 29, 2026) to ~$3,994 in June 2026.",
    "Costs decide a lot: with a 15% markup and $500 a year in fees, gold must rise about 22% over 10 years just to break even, versus about 9% with a 5% markup and $260 a year.",
    "Its strongest case is as a modest diversifier (commentators commonly cite 5-10%); a low-cost gold ETF in an existing IRA is often the cheaper route - talk to a fee-only adviser.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
