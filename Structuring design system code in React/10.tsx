const ThemeEditor = () => {
  // We may read or update the design system setup
  // via this hook.
  const { setSetup } = useDesignSystem();
  // Here we're changing the spacing values.
  const increaseSpace = useCallback(() => {
    setSetup((setup) => {
      const space = { ...setup.space };

      for (let key in space) {
        const token = +key as DesignToken;
        space[token] = space[token] + 10;
      }

      return {
        ...setup,
        space
      };
    });
  }, []);

  return <button onClick={increaseSpace}>Increase the space!</button>;
};

export default function App() {
  return (
    <>
      {/* To use design system we need to wrap our components with provider. */}
      <DesignSystemProvider>
        <ThemeEditor />
      </DesignSystemProvider>
    </>
  );
}
