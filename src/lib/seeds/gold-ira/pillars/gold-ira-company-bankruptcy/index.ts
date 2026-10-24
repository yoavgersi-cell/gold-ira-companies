import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "What Happens to Your Gold If a Gold IRA Company Goes
// Bankrupt? Lessons From Rosland Capital's 2026 Chapter 11". Safety guide on
// dealer / custodian / depository failure risk. Question-shaped headings
// (ending in "?") are emitted as FAQPage schema by the article page.
//
// Data freshness: Rosland Capital case facts (C.D. Cal. 2:26-bk-16650) are as
// reported in docket listings, company announcements and news coverage
// through Oct 24, 2026 - all attributed, none independently confirmed from
// the court's own files. Re-check the docket before each update.

export const goldIraBankruptcyGuide: ArticleData = {
  slug: "what-happens-if-gold-ira-company-goes-bankrupt",
  title:
    "What Happens to Your Gold If a Gold IRA Company Goes Bankrupt? Lessons From Rosland Capital's 2026 Chapter 11",
  description:
    "If a gold IRA company goes bankrupt, metal in your IRA's depository should be safe - prepaid orders are not. Lessons from Rosland Capital's 2026 Chapter 11.",
  category: "Safety",
  readTime: "55 min read",
  publishedAt: "2026-10-24",
  updatedAt: "2026-10-24",
  heroColor: "#F3EBD7",
  author: AUTHOR,
  keyTakeaways: [
    "Metal already delivered to an independent depository and recorded in your IRA is not the dealer's property, so a dealer bankruptcy should not take it - but prepaid, undelivered orders and unpaid buybacks usually become claims paid only in part.",
    "Rosland Capital filed a liquidating Chapter 11 on July 2, 2026 (C.D. Cal. case 2:26-bk-16650); reports citing its filings say about 617 customers were owed about $60 million for undelivered orders and buybacks.",
    "American Hartford Gold announced on October 6, 2026 that it acquired Rosland Capital's assets and said it will not assume Rosland's liabilities, so customer claims remain in the bankruptcy case.",
    "SIPC and FDIC do not cover physical gold; protect yourself by keeping the payment-to-delivery window short and matching your purchase confirmation, custodian statement and depository report.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
