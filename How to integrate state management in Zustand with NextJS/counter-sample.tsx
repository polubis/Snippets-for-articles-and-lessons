// @@@ Inside use-counter-store.ts @@@.
export interface CounterStore {
  counter: number;
}

export const useCounterStore = create<CounterStore>(() => ({
  counter: 0,
}));

// @@@ Inside counter page @@@.

interface CounterPageProps {
  counter: number;
}

export const getStaticProps: GetStaticProps<CounterPageProps> = async () => {
  return {
    props: {
      counter: 3,
    },
  };
};

const CounterPage = ({ counter }: CounterPageProps) => {
  // Counter returned from server on first render.
  console.log(counter); // 3.

  const counterStore = useCounterStore();

  // Client "counterStore" value on first render.
  console.log(counterStore.counter); // 0.

  return <div>Any JSX content</div>;
};

export default CounterPage;
