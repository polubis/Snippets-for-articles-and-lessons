const Context = createContext({ state: null })

const INeedYourState = () => {
  const state = useContext(Context)
  console.log("The value of state.open is", state.open) // false.
  return null
}

const MyStateProvider = () => {
  return (
    <Context.Provider value={{ state: { open: true } }}>
      <Context.Provider value={{ state: { open: false } }}>
        <INeedYourState />
      </Context.Provider>
    </Context.Provider>
  )
}
