it('listens for resize of element', async () => {
  const observeSpy = jest.fn();
  // Override of default constructor behavior.
  global.ResizeObserver = class MockedResizeObserver {
    constructor(cb: ResizeObserverCallback) {
      setTimeout(() => {
        cb(
          [
            {
              contentRect: {
                height,
                width,
              },
            },
          ] as ResizeObserverEntry[],
          this
        );
      }, 150);
    }
    // Attaching spy to "observe" function.
    observe = observeSpy;
    unobserve = jest.fn();
    disconnect = jest.fn();
  };
  // Rendering the component.
  render(<ComponentFixture />);
  // Waiting for "Width" and "height" update when component is mounted.
  await waitFor(() => {
    screen.getByText(`detected: width: ${width}, height: ${height}`);
  });
});
