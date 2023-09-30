"use client";
import { useArticlesStore } from "../store/articles";
import { useStoreSync } from "../libs/use-store-sync";

export interface SyncedWithArticlesProps {
  state: ArticlesStore.State;
  children: ReactNode;
}

export const SyncedWithArticles = ({
  children,
  state,
}: SyncedWithArticlesProps) => {
  useStoreSync(useArticlesStore, state);
  return children;
};
