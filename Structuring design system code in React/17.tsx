import { DesignSystemProvider } from "./figa-ui-design-system";
import { Font } from "./figa-ui-base";
import { GlobalStyle } from "./figa-ui-base";
import { useCallback } from "react";

export default function App() {
  return (
    <>
      <DesignSystemProvider>
        <GlobalStyle />
        {/* We may use the same look and feel via components or just classes. */}
        <h1 className="font font-1">Only css</h1>
        <Font variant={1} element="h1">
          This is the H1 font-variant
        </Font>
      </DesignSystemProvider>
    </>
  );
}
