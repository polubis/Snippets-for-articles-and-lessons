export const useCounterContext = () => {
  const ctx = useContext(CounterContext)

  if (!ctx) {
    // 💚 Now the error will be clear for developers!
    throw Error("You overlooked wrapping with CounterProvider")
  }

  return ctx
}
