import type { MutableRefObject } from 'react';

// The basic object with metadata that we need.
interface ElementSize {
  width: number;
  height: number;
}

// State shape which reflects the situation
// when we're not able to detect 
// the size - server-side rendering situation.
interface UndetectedState {
  status: 'undetected';
}

// State shape which reflects the situation
// when we are able to detect - client side.
interface DetectedState extends ElementSize {
  status: 'detected';
}
// Union of states.
type ElementSizeState = UndetectedState | DetectedState;
// Helper type - may be needed in consumer components.
type ElementSizeStateStatus = ElementSizeState['status'];

// This will be passed to our hook.
interface ElementSizeConfig {
  delay?: number;
}

// This will be returned by our hook.
// It's a read-only tuple [state, ref]. 
// "MutableRefObject" is the object returned by React
// "useRef" hook.
type ElementSizeReturn<T extends HTMLElement> = Readonly<
  [ElementSizeState, MutableRefObject<T | null>]
>;

export type {
  UndetectedState,
  ElementSize,
  DetectedState,
  ElementSizeStateStatus,
  ElementSizeState,
  ElementSizeReturn,
  ElementSizeConfig,
};
