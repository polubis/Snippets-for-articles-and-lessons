interface MyState {
  pending: boolean
  error: string | null
}

interface MyActions {
  setPending(pending: MyState["pending"]): void
  setError(error: MyState["error"]): void
}

type MyValue = MyState & MyActions

// 💚 Less work, the same result!
const MyContext = createContext<MyValue | undefined>(undefined)

export const MyContextProvider = () => {
  const [state, setState] = useState<MyState>({ pending: false, error: null })
  // We'll need to change only implementation to match the contract.
  const value: MyValue = {
    ...state,
    setPending: pending => {
      setState(prev => ({ ...prev, pending }))
    },
    setError: error => {
      setState(prev => ({ ...prev, error }))
    },
  }

  return (
    <MyContext value={value}>
      <AnyMyComponent />
    </MyContext>
  )
}

export const useMyContextProvider = () => {
  const ctx = useContext(MyContext)

  if (!ctx) {
    throw Error(
      "You overlooked wrapping with MyContextProvider or your initial state is falsy"
    )
  }

  return ctx
}
