export const useCounterContext = () => {
  const ctx = useContext(CounterContext)
  // 💢 If someone forgets adding wrapper, he will see unclear error!
  return ctx
}
