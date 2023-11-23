// 💢 It will be done on every re-render triggered by parent.
const value: ArticlesProviderValue = {
  ...state,
  set: setState,
  reset: () => {
    setState(initial_state)
  },
}

return <Context.Provider value={value}>{children}</Context.Provider>
