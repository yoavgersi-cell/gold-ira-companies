import type { ArticleData } from "@/lib/config";
import { articlesA } from "./articles-a";
import { articlesB } from "./articles-b";
import { goldIraCompleteGuide } from "./pillars/gold-ira-guide";
import { goldIraRolloverGuide } from "./pillars/gold-ira-rollover";
import { goldIraFeesGuide } from "./pillars/gold-ira-fees";
import { goldIraRulesGuide } from "./pillars/gold-ira-rules";
import { goldIraCustodiansGuide } from "./pillars/gold-ira-custodians";
import { howToChooseGoldIraCompanyGuide } from "./pillars/how-to-choose-a-gold-ira-company";
import { isGoldIraGoodInvestmentGuide } from "./pillars/is-a-gold-ira-a-good-investment";
import { investGoldRetirementGuide } from "./pillars/how-to-invest-in-gold-for-retirement";
import { silverIraGuide } from "./pillars/silver-ira";
import { bestGoldCoinsForIraGuide } from "./pillars/best-gold-coins-for-ira";
import { howToSellGoldIraGuide } from "./pillars/how-to-sell-gold-ira";
import { goldIraKitGuide } from "./pillars/gold-ira-kit";
import { goldPriceHistoryGuide } from "./pillars/gold-price-history";

// Long-form pillar guides first (the hubs), then the shorter supporting guides.
export const articles: ArticleData[] = [
  goldIraCompleteGuide,
  goldIraRolloverGuide,
  goldIraFeesGuide,
  goldIraRulesGuide,
  goldIraCustodiansGuide,
  howToChooseGoldIraCompanyGuide,
  isGoldIraGoodInvestmentGuide,
  investGoldRetirementGuide,
  silverIraGuide,
  bestGoldCoinsForIraGuide,
  howToSellGoldIraGuide,
  goldIraKitGuide,
  goldPriceHistoryGuide,
  ...articlesA,
  ...articlesB,
];
