import type { ArticleData } from "@/lib/config";
import { articlesA } from "./articles-a";
import { articlesB } from "./articles-b";
import { goldIraCompleteGuide } from "./pillars/gold-ira-guide";
import { goldIraRolloverGuide } from "./pillars/gold-ira-rollover";
import { goldIraFeesGuide } from "./pillars/gold-ira-fees";

// Long-form pillar guides first (the hubs), then the shorter supporting guides.
export const articles: ArticleData[] = [
  goldIraCompleteGuide,
  goldIraRolloverGuide,
  goldIraFeesGuide,
  ...articlesA,
  ...articlesB,
];
