// CounterProvider.tsx file.
import { useState } from "react"

export const CounterContext = createContext(0)

export const CounterProvider = () => {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={counter}>
      {/* Any component that is using Counter.tsx inside... */}
    </CounterContext.Provider>
  )
}

// Counter.tsx component.
import { CounterContext } from "./CounterProvider"
import { useContext } from "react"

const Counter = () => {
  // 💢 This is really bad...
  const counter = useContext(CounterContext)

  return <div>Counter is: {counter}</div>
}
