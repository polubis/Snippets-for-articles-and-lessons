// I want to track body size.
const ComponentWithBodyTrack = () => {
  // The "delay" property prevents too many calls.
  const [state] = useElementSize({ delay: 1500 });
  console.log(state); // Prints metadata with height and width.
};

// I want to track any other element size.
const ComponentWithDivTrack = () => {
  // The "delay" property prevents too many calls.
  const [state, ref] = useElementSize<HTMLDivElement>({ delay: 1500 });
  console.log(state); // Prints metadata with height and width.
  return <div ref={ref}></div>;
};
