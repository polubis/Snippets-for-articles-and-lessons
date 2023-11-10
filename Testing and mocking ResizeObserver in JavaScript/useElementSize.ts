// Inside useElementSize.ts hook.
useLayoutEffect(() => {
  const observeElement = () => {
    const target = ref?.current ?? document.body;

    const { width, height } = target.getBoundingClientRect();

    setState({ status: 'detected', height, width });

    observerRef.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      changed.next({ status: 'detected', height, width });
    });

    observerRef.current.observe(target);
  };

  observeElement();

  return () => {
    observerRef.current?.disconnect();
  };
}, [changed]);
