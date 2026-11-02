import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "How to Buy Gold in 2026". Covers the "how to buy gold" /
// "where to buy gold" / "Costco gold" / "coins vs bars" / "how to sell gold"
// search cluster. Written in parts for maintainability; assembled here in
// reading order. Question-shaped headings (ending in "?") are emitted as
// FAQPage schema by the article page. The final section (part5) ends with
// DISCLAIMER. Prices dated Nov 1-2, 2026 (spot ~$3,900, Kitco).

export const howToBuyGoldGuide: ArticleData = {
  slug: "how-to-buy-gold",
  title:
    "How to Buy Gold in 2026: Coins, Bars, Costco, ETFs and Gold IRAs - Real Prices, Premiums and Where to Buy",
  description:
    "How to buy gold in 2026: where to buy (Costco, dealers, coin shops, ETFs, IRAs), fair premiums over spot, taxes, storage, fakes and how to sell - with real prices.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-11-02",
  updatedAt: "2026-11-02",
  heroColor: "#FBF5E6",
  author: AUTHOR,
  keyTakeaways: [
    "With gold near $3,900 an ounce (Nov 1, 2026), low-cost sellers charged about 1.8% over spot on 10 oz bars, 2.2% on generic 1 oz bars and 3-6% on new Gold Eagles in October 2026 - anything above 10-15% on bullion is a red flag.",
    "On $10,000 at $3,900 spot, a 1.8% premium buys about 2.52 oz while a 25% proof-style markup buys about 2.05 oz - roughly $1,800 less gold, and a 26% price rise needed just to break even.",
    "Costco's gold has sold at about 0.4-4.2% over spot in 2026 with up to 4% in member rewards, but it requires a membership, limits quantities, takes no returns and does not buy gold back.",
    "Outside an IRA, long-term gains on physical gold and most gold ETFs are taxed at up to 28%; buying is generally not reported to the IRS unless you pay over $10,000 in cash (Form 8300).",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
