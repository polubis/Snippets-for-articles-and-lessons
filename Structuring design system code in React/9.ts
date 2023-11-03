import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { DesignSystemSetup, DesignToken } from "../../figa-ui-core";

interface DesignSystemProviderProps {
  children: ReactNode;
  initialSetup?: DesignSystemSetup;
}

interface DesignSystemContext {
  setup: DesignSystemSetup;
  initialSetup: DesignSystemSetup;
  setSetup: Dispatch<SetStateAction<DesignSystemSetup>>;
}

export type { DesignSystemProviderProps, DesignSystemContext, DesignToken };
