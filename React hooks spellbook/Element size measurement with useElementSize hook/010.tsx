const useElementSize = <T extends HTMLElement>(
  config?: ElementSizeConfig
): ElementSizeReturn<T> => {
  const [state, setState] = useState<ElementSizeState>({
    status: 'undetected',
  });
  const ref = useRef<T | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  useIsomorphicLayoutEffect(() => {
    // Private function for better readability
    // and understanding what's going on here.
    const observeElement = () => {
      const target = ref?.current ?? document.body;

      const { width, height } = target.getBoundingClientRect();

      setState({ status: 'detected', height, width });

      // We're listening here for resize.
      observerRef.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setState({ status: 'detected', height, width });
      });

      observerRef.current.observe(target);
    };

    observeElement();

    return () => {
      // Removing listeners.
      observerRef.current?.disconnect();
    };
  }, []);

  return [state, ref];
};
