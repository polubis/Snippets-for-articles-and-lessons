// Ref to store flag and avoid rerender.
const unsynced = useRef(true);
// Creating default store with initial state.
const useServerStore = useMemo(() => create<T>(() => state), []);

if (unsynced.current) {
  // Setting state and changing flag.
  useStore.setState(state);
  unsynced.current = false;
}
