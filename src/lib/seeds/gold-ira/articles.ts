import type { ArticleData } from "@/lib/config";
import { articlesA } from "./articles-a";
import { articlesB } from "./articles-b";

export const articles: ArticleData[] = [...articlesA, ...articlesB];
