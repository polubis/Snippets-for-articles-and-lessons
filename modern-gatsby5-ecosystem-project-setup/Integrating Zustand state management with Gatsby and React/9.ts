import { useMemo, useRef } from 'react';
import { create, type StoreApi, type UseBoundStore } from 'zustand';

const useStoreSync = <T>(
  useStore: UseBoundStore<StoreApi<T>>,
  state: T,
): UseBoundStore<StoreApi<T>> => {
  const unsynced = useRef(true);
  // The store to return when the build happens.
  const useServerStore = useMemo(() => create<T>(() => state), [state]);
  
  if (unsynced.current) {
    // The state sync happens here!
    useStore.setState(state);
    unsynced.current = false;
  }
  // Simple check to return dedicated store based on client or server.
  return typeof window !== `undefined` ? useStore : useServerStore;
};

export { useStoreSync };
