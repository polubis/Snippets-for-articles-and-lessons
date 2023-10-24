import { create } from 'zustand';

// This is taken from gatsby.config.ts file.
export interface HomeMetadata {
  title: string;
  siteUrl: string;
}
// Reflects situation in which state 
// sync between server/client not happened yet.
export interface HomeIdleState {
  is: 'idle';
}
// Reflects situation in which state 
// sync between server/client is ready.
export interface HomeReadyState extends HomeMetadata {
  is: 'ready';
}
// Union of interfaces. Means the state can have 2 variants.
export type HomeState = HomeIdleState | HomeReadyState;
// Store setup - with initial state.
export const useHomeStore = create<HomeState>(() => ({
  is: `idle`,
}));

// Custom selector hook to retrieve the state.
export const useHomeState = () => {
  return useHomeStore((state) => {
    // If we'll try to use state in components
    // but state is not synced it means we did mistake.
    // That's why we're using "fail fast" approach here
    // and throwing an error.
    if (state.is === `idle`)
      throw Error(
        `You forgot to add the useSyncStore hook at the top of your page component`,
      );

    return state;
  });
};
