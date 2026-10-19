import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "Gold IRA Custodians & Depositories Compared (2026)".
// Written in parts for maintainability; assembled here in reading order.
// Question-shaped headings (ending in "?") are emitted as FAQPage schema by
// the article page. The final section (part5) ends with DISCLAIMER.
// Only Equity Trust's figures come from a full primary-source schedule; other
// custodian and depository figures are reported (see PILLAR-RESEARCH.md).

export const goldIraCustodiansGuide: ArticleData = {
  slug: "gold-ira-custodians",
  title: "Gold IRA Custodians & Depositories Compared (2026): Fees, Storage, Minimums and How to Choose",
  description:
    "Nine gold IRA custodians and five depositories compared: 2026 fee tables, 10-year costs at $50k-$250k, storage pricing, and how to choose or switch custodians.",
  category: "Fees & Costs",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#F3EBD7",
  author: AUTHOR,
  keyTakeaways: [
    "The dealer sells the metal, the custodian legally holds the IRA, and the depository stores it - the IRS approves non-bank trustees, never dealers.",
    "Reported annual custodian fees range from about $90 (GoldStar) to $556 (Madison Trust, one asset); Equity Trust's published tiered fee is $425 at $50,000, $500 at $100,000 and $700 at $250,000.",
    "In our 10-year illustration at $100,000, custodian plus storage fees range from about $2,200 to $6,560; percentage storage such as Brink's $1.50 per $1,000 beats a flat fee only below about $75,000.",
    "Most figures are third-party reports that change often - get each custodian's own current fee schedule in writing, and remember the dealer's markup is usually a bigger cost.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
