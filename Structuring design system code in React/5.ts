// px.ts file.
import type { DesignSystemSetup, DesignToken } from "./models";

const px = (
  props: { theme: DesignSystemSetup },
  token: DesignToken
): string => {
  return props.theme.space[token] + "px";
};

export { px };

// Example of usage.
// This function will be useful when reading properties from components
// or "styled-component" style providers. You'll see it later.

px({ theme: { space: { 500: 30 } } }, 500) // 30px.
