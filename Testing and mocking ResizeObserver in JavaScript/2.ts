const Popover = () => {
  const [state, ref] = useElementSize();

  // It will display the "height/width" and other data inside "div".
  return <div ref={ref}>{state}</div>;
};
