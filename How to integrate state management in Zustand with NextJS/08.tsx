// Creating default store with initial state.
const useServerStore = useMemo(() => create<T>(() => state), []);

// For "client" we'll return original store.
// For "server" the initial one passed from server
// props.
return isClient() ? useStore : useServerStore;
