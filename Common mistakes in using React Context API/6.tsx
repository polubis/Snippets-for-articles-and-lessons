// CounterProvider.tsx file.
import { useState } from "react"

// 💚 Now Context is hidden for consumers!
const CounterContext = createContext(0)

export const CounterProvider = () => {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={counter}>
      {/* Any component that is using Counter.tsx inside... */}
    </CounterContext.Provider>
  )
}

export const useCounterProvider = () => {
  const counter = useContext(CounterContext)
  // 💚 Changes will be applied once, only in this hook.
  // All application code will be untouched.
  return counter
}

// Counter.tsx component.
import { useCounterProvider } from "./CounterProvider"

const Counter = () => {
  // 💚 Better!
  const counter = useCounterProvider()

  return <div>Counter is: {counter}</div>
}
