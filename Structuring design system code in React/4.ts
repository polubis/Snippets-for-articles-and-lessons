// Design decisions.
type DesignToken =
  | 50
  | 100
  | 150
  | 200
  | 250
  | 300
  | 350
  | 400
  | 450
  | 500
  | 550
  | 600
  | 650
  | 700
  | 750
  | 800
  | 850
  | 900
  | 950
  | 1000;
// Colors and spacing is limited.
type Space = Record<DesignToken, number>;
type Colors = Record<DesignToken, string>;
// The setup of the design system.
interface DesignSystemSetup {
  space: Space;
  primary: Colors;
}

export type { DesignToken, DesignSystemSetup, Space, Colors };
