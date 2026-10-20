import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Free Gold IRA Kits (2026): What's Inside, What They Leave
// Out and How to Use One Without Getting Sold". Written in parts for
// maintainability; assembled here in reading order. Question-shaped headings
// (ending in "?") are emitted as FAQPage schema by the article page, so only
// direct-answer sections are phrased as questions.

export const goldIraKitGuide: ArticleData = {
  slug: "gold-ira-kit",
  title: "Free Gold IRA Kits (2026): What's Inside, What They Leave Out and How to Use One Without Getting Sold",
  description:
    "What a free gold IRA kit contains, what it leaves out (spreads, buyback prices, fees), what to expect on the sales call, and how to compare companies safely.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#FBF5E6",
  author: AUTHOR,
  keyTakeaways: [
    "A free gold IRA kit is a lead-generation tool: you get a guide, the company gets permission to call, text and email you. Requesting one never obliges you to buy.",
    "Kits usually leave out the numbers that matter most - the markup over spot, the buyback price, the custodian's full fee schedule and the risks - so ask for them in writing.",
    "\"Free silver\" can cost you: in our hypothetical $100,000 example, a 15% markup plus 5% bonus silver left about $3,900 less metal than a 5% markup with no bonus.",
    "The IRS does not approve gold dealers. Read neutral sources first (the CFTC advisory, IRS Pub 590-A), then compare two or three written quotes against spot.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
