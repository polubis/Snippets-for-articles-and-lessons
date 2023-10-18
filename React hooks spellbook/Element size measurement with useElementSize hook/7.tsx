import { useRef, useState } from 'react';
import type {
  ElementSizeState,
  ElementSizeConfig,
  ElementSizeReturn,
} from './defs';

const useElementSize = <T extends HTMLElement>(
  config?: ElementSizeConfig
): ElementSizeReturn<T> => {
  const [state, setState] = useState<ElementSizeState>({
    status: 'undetected',
  });
  const ref = useRef<T | null>(null);

  return [state, ref];
};

export { useElementSize };
