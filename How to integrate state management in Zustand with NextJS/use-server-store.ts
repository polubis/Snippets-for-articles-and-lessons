// The "isClient" is just check for window !== undefined.
import { isClient } from '@system/utils';
import { useMemo, useRef } from 'react';
import { create, type StoreApi, type UseBoundStore } from 'zustand';

const useStoreSync = <T>(
  useStore: UseBoundStore<StoreApi<T>>,
  state: T
): UseBoundStore<StoreApi<T>> => {
  // Ref to store flag and avoid rerender.
  const unsynced = useRef(true);
  // Creating default store with initial state.
  const useServerStore = useMemo(() => create<T>(() => state), []);

  if (unsynced.current) {
    // Setting state and changing flag.
    useStore.setState(state);
    unsynced.current = false;
  }
  // For "client" we'll return original store.
  // For "server" the initial one passed from server
  // props.
  return isClient() ? useStore : useServerStore;
};

export { useStoreSync };
