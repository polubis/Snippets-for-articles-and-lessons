import type { DesignSystemSetup } from "../figa-ui-core";

declare module "styled-components" {
  export interface DefaultTheme extends DesignSystemSetup {}
}
