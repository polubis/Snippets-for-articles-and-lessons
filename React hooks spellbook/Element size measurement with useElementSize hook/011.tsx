import { Subject, debounceTime } from 'rxjs';

const useElementSize = <T extends HTMLElement>(
  config?: ElementSizeConfig
): ElementSizeReturn<T> => {
  const [state, setState] = useState<ElementSizeState>({
    status: 'undetected',
  });
  const ref = useRef<T | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  // Creating event emitter and object to observe only once
  // per hook usage.
  const { changed, changed$ } = useMemo(() => {
    const changed = new Subject<ElementSizeState>();
    const changed$ = changed.asObservable();
    return { changed, changed$ };
  }, []);

  useEffect(() => {
    // Listening for events and applying a debounce
    // mechanism with a given delay.
    const sub = changed$.pipe(debounceTime(config?.delay ?? 150)).subscribe({
      next: (size) => {
        setState(size);
      },
    });

    return () => {
      // Removes subscription.
      sub.unsubscribe();
    };
  }, [changed$, config?.delay]);

  useIsomorphicLayoutEffect(() => {
    const observeElement = () => {
      const target = ref?.current ?? document.body;

      const { width, height } = target.getBoundingClientRect();

      setState({ status: 'detected', height, width });

      observerRef.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        // Pushing event with payload to the stream.
        changed.next({ status: 'detected', height, width });
      });

      observerRef.current.observe(target);
    };

    observeElement();

    return () => {
      observerRef.current?.disconnect();
    };
  }, [changed]);

  return [state, ref];
};
