export const useCounterContext = () => {
  const ctx = useContext(CounterContext)
  // 💢 If someone forgets to add a wrapper, he will see unclear error!
  return ctx
}
