import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';

const useElementSize = <T extends HTMLElement>(
  config?: ElementSizeConfig
): ElementSizeReturn<T> => {
  const [state, setState] = useState<ElementSizeState>({
    status: 'undetected',
  });
  const ref = useRef<T | null>(null);

  useIsomorphicLayoutEffect(() => {
    // If the "ref" is not used, we'll use just a
    // "document.body".
    const target = ref?.current ?? document.body;

    const { width, height } = target.getBoundingClientRect();
    // Setting the "width", "height" and assigning
    // status as "detected".
    setState({ status: 'detected', height, width });
  }, []);

  return [state, ref];
};
