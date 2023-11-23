// Function to flatten React Context Providers.
const flattenContextProviders = (providers) => {
  return providers.reduce((acc, Provider) => {
    return ({ children }) => (
      <Provider>{acc({ children })}</Provider>
    );
  }, ({ children }) => <>{children}</>);
};

// Array of Context Providers.
const contextProviders = [FirstContextProvider, SecondContextProvider, ThirdContextProvider];

// Flattened Context Provider.
const FlattenedContextProvider = flattenContextProviders(contextProviders);

// 💢 Really bad idea!
<FlattenedContextProvider>
  <App />
</FlattenedContextProvider>
