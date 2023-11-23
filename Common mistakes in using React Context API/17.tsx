// 💚 Object will be re-created only when state changes.
const value: ArticlesProviderValue = useMemo(() => ({
  ...state,
  set: setState,
  reset: () => {
    setState(initial_state)
  },
}), [state])

return <Context.Provider value={value}>{children}</Context.Provider>
