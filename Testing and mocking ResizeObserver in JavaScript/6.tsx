it('disconnects after unmount', () => {
  const disconnectSpy = jest.fn();
  global.ResizeObserver = class MockedResizeObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = disconnectSpy;
  };

  const { unmount } = renderHook(() => useElementSize());

  unmount();

  expect(disconnectSpy).toHaveBeenCalledTimes(1);
});
