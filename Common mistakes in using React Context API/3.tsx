const Context = createContext({ state: false, setState: () => {} })

const INeedYourState = () => {
  const state = useContext(Context)
  console.log("Thanks for your state!", state)
  return null
}

const Component2 = () => {
  return <Component3 />
}

const Component3 = () => {
  return <Component4 />
}

const Component4 = () => {
  return <INeedYourState />
}

const Component1 = () => {
  return <Component2 />
}

const MyStateProvider = () => {
  const [state, setState] = useState({ open: true })

  return (
    <Context.Provider value={{ state, setState }}>
      <Component1 />
    </Context.Provider>
  )
}
