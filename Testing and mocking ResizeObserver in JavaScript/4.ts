      disconnect = jest.fn();
    };
  });

  // Previous code is above 🔼.

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
