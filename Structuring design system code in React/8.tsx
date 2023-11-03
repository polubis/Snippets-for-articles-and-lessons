import { createContext, useContext, useMemo, useState } from "react";
import type { DesignSystemContext, DesignSystemProviderProps } from "./models";
import { initial_setup } from "./setup";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const Context = createContext<DesignSystemContext | null>(null);

const DesignSystemProvider = ({
  children,
  initialSetup = initial_setup
}: DesignSystemProviderProps) => {
  const [setup, setSetup] = useState(initialSetup);

  const value = useMemo(
    (): DesignSystemContext => ({
      setup,
      initialSetup,
      setSetup
    }),
    [setup, initialSetup]
  );

  return (
    <Context.Provider value={value}>
      <StyledThemeProvider theme={value.setup}>{children}</StyledThemeProvider>
    </Context.Provider>
  );
};

const useDesignSystem = () => {
  const context = useContext(Context);

  if (!context)
    throw Error(
      "You need to wrap your components with the DesignSystemProvider"
    );

  return context;
};

export { DesignSystemProvider, useDesignSystem };
