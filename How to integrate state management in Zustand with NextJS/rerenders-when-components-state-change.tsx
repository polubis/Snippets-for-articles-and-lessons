const CounterComponent = () => {
  // When state change - component rerenders.
  const counterStore = useCounterStore();
  return <div>{counterStore.counter}</div>;
};
