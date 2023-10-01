"use client"; // It's required!
import { useArticlesStore } from "../store/articles";
import { useStoreSync } from "../libs/use-store-sync";
import type { SyncedWithArticlesProps } from "./synced-with-articles.defs";

export interface SyncedWithArticlesProps {
  state: ArticlesStore.State;
}

export const SyncedWithArticles = ({ state }: SyncedWithArticlesProps) => {
  useStoreSync(useArticlesStore, state);
  return null;
};
