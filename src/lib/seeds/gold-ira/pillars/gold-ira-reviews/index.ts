import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold IRA Reviews 2026: Ratings, Complaints, Lawsuits and What
// Customers Really Say About the Top Companies". Reputation evidence (reviews,
// BBB complaints, lawsuits, enforcement) - deliberately NOT a ranking, which
// lives on the homepage. Question-shaped headings (ending in "?") are emitted
// as FAQPage schema by the article page.
//
// Data freshness: Trustpilot figures are operator screenshots from Oct 19,
// 2026; BBB figures were surfaced from BBB profile pages via web search in
// Oct 2026. Re-check both before each update.

export const goldIraReviewsGuide: ArticleData = {
  slug: "gold-ira-reviews",
  title: "Gold IRA Reviews 2026: Ratings, Complaints, Lawsuits and What Customers Really Say About the Top Companies",
  description:
    "Gold IRA reviews for 2026: Trustpilot and BBB ratings, complaint counts, lawsuits and common complaints for 4 top companies, plus how to check any dealer.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-20",
  updatedAt: "2026-10-20",
  heroColor: "#EEF2F7",
  author: AUTHOR,
  keyTakeaways: [
    "As of October 19, 2026, Trustpilot scores were American Hartford Gold 4.9 (1,947 reviews), Augusta Precious Metals 4.8 (376) and Goldco 4.4 (1,791); American Gold and Silver Group's profile had no reviews.",
    "All three established companies hold A+ BBB ratings, but complaint records differ sharply: 112 BBB complaints in three years for American Hartford Gold, about 72 for Goldco and 1 for Augusta (October 2026).",
    "We found no government enforcement action against any of the four companies; private cases include a $2 million text-message settlement by Goldco Direct, which denied the allegations.",
    "The most common complaint across the industry is paying far more than spot for premium coins, then getting a low buyback offer - none of the four companies publishes its spreads, so get them in writing.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
