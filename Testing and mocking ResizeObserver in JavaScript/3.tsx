import { renderHook, waitFor, render, screen } from '@testing-library/react';
import { useElementSize } from './use-element-size';

describe('Element size can be detected when: ', () => {
  const height = 600;
  const width = 800;

  beforeEach(() => {
    // We mocked "ResizeObserver" here 💥.
    global.ResizeObserver = class MockedResizeObserver {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
    };
  });
