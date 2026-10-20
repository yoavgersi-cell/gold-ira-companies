import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "How to Sell or Withdraw Gold From Your IRA (2026)".
// The exit-side hub: liquidation mechanics, buyback bids and fees, taxes on
// withdrawals, in-kind distributions, RMDs, inherited accounts and transfers.
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page, so only direct-answer sections are phrased as questions.

export const howToSellGoldIraGuide: ArticleData = {
  slug: "how-to-sell-gold-ira",
  title:
    "How to Sell or Withdraw Gold From Your IRA (2026): Liquidation, Buybacks, In-Kind Distributions, RMDs and Taxes",
  description:
    "How to sell or withdraw gold from your IRA in 2026: the custodian's role, buyback bids vs spot, liquidation fees, in-kind distributions, RMDs and taxes.",
  category: "Rules & Taxes",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#F3EBD7",
  author: AUTHOR,
  keyTakeaways: [
    "Selling metal inside a gold IRA is not taxed - only distributions are. Traditional IRA withdrawals are ordinary income, with a 10% additional tax before 59½ unless an exception applies; qualified Roth withdrawals are generally tax-free.",
    "Your custodian must execute every sale, but you choose the buyer. Common bullion coins typically bid about 1-2% under spot (a 4-8% round trip), while proof and \"IRA-exclusive\" coins can cost far more to exit.",
    "Custodian exit fees are modest but real: Equity Trust lists $10 per asset to liquidate (max $30), $100 per asset to distribute, $50 for in-kind, $30 per wire and $250 to close the account.",
    "RMDs start at 73 or 75 and can be met by selling metal, taking coins in kind or using another IRA via aggregation; buyback \"commitments\" and pledges are not legal guarantees, so compare two or three bids.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
