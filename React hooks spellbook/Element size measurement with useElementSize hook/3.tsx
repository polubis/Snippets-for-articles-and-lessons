const target = document.getElementById('my-id');

if (target) {
  // Prints element metadata.
  const obs = new ResizeObserver((entries) => {
    const { width, height } = entries[0].contentRect;
    console.log(width, height);
  });

  // Starts observation.
  obs.observe(target);
  // Cleans observation for specific element.
  obs.unobserve(target);
  // Cleans all observations.
  obs.disconnect();
}
