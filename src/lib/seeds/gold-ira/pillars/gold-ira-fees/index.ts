import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold IRA Fees & Costs (2026)". Replaces the short guide
// gold-ira-fees-explained (redirected by the coordinator).
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page. The final section (part5) ends with DISCLAIMER.

export const goldIraFeesGuide: ArticleData = {
  slug: "gold-ira-fees",
  title: "Gold IRA Fees & Costs (2026): Every Charge, Real Examples and the True 10-Year Cost",
  description:
    "Every gold IRA fee explained: setup, custodian, storage, dealer markups and exit costs, with real 2026 fee schedules and 10-year cost examples from $25k to $250k.",
  category: "Fees & Costs",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#F3EBD7",
  author: AUTHOR,
  keyTakeaways: [
    "Visible gold IRA fees (setup, custodian and storage) run about $175-$300 a year at flat-fee custodians, but tiered schedules such as Equity Trust's charge $320+ a year once an account reaches $15,000.",
    "The biggest cost is usually the dealer's markup over spot: about 2-6% on common bullion at competitive dealers in 2026, and 20-130% on proof and \"premium\" coins in disclosures and enforcement cases.",
    "In our illustrations, a $100,000 gold IRA held 10 years and sold costs about $7,400 in a low-cost setup vs about $22,200 in a high-cost one - gold must rise about 7.7% vs 26.7% just to break even.",
    "Get an itemized written quote with the markup over spot and today's buyback price, read the custodian's own fee schedule, and judge \"free silver\" or fee waivers by the total metal value you receive.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
