import { useRef, useState } from 'react';
import type {
  ElementSizeState,
  ElementSizeConfig,
  ElementSizeReturn,
} from './defs';

const useElementSize = <T extends HTMLElement>(
  config?: ElementSizeConfig
): ElementSizeReturn<T> => {
  // Here we'll store the state with metadata.
  const [state, setState] = useState<ElementSizeState>({
    status: 'undetected',
  });
  // The reference of the HTML element to be used by the consumer.
  const ref = useRef<T | null>(null);

  return [state, ref];
};

export { useElementSize };
