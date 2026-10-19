import type { ArticleData } from "@/lib/config";
import { AUTHOR } from "../../shared";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Pillar guide: "How to Choose a Gold IRA Company: A 25-Point Due-Diligence
// Checklist (2026)". Written in parts for maintainability; assembled here in
// reading order. Question-shaped headings (ending in "?") are emitted as
// FAQPage schema by the article page, so only direct-answer sections are
// phrased as questions.

export const howToChooseGoldIraCompanyGuide: ArticleData = {
  slug: "how-to-choose-a-gold-ira-company",
  title: "How to Choose a Gold IRA Company: A 25-Point Due-Diligence Checklist (2026)",
  description:
    "A 25-point checklist for choosing a gold IRA company: check its record, read reviews critically, compare quotes to spot, get buyback terms and fees in writing.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-19",
  updatedAt: "2026-10-19",
  heroColor: "#FBF5E6",
  author: AUTHOR,
  keyTakeaways: [
    "A gold IRA company is a dealer, not your custodian. It earns mainly from the spread - the markup over spot built into the metal's price - and none of the four companies on this site publishes its spreads.",
    "Compare every written quote to the spot price: in our illustration, $90,000 buys 20 oz of bullion Eagles at a 5% premium but only 16 oz of proof Eagles at a 34% premium.",
    "Free silver and fee waivers are usually funded by the spread: in our $100,000 example, a 15% spread plus 5% bonus silver left about $4,100 less metal than a 5% spread with no bonus.",
    "Regulators have found markups of up to 130% (Red Rock Secured), about 64% (Safeguard Metals, SEC) and up to 33% (Lear Capital) - get the spread, buyback terms and fees in writing before you fund.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5],
};
