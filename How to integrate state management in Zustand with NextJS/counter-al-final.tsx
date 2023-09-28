const CounterPage = ({ counter }: CounterPageProps) => {
  console.log(counter); // 3.
  const counterStore = useStoreSync(useCounterStore, { counter });
  console.log(counterStore.counter); // 3.

  return <div>{counterStore.counter}</div>; // It's 3.
};
