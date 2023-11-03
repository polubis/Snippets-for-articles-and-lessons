import { createElement } from "react";
import c from "classnames";
import { FontProps } from "./font.models";

const Font = ({ className, element, variant, children }: FontProps) => {
  return createElement(element, {
    className: c("font", className, `font-${variant}`),
    children
  });
};

export { Font };
