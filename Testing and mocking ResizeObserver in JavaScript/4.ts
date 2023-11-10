  // Previous code is above 🔼.
  // We need any component to test our hook in an "integration" way.
  const ComponentFixture = () => {
      const [state, ref] = useElementSize<HTMLDivElement>();
      return (
        <div ref={ref}>
          {state.status === 'detected'
            ? `detected: width: ${state.width}, height: ${state.height}`
            : state.status}
        </div>
      );
  };
