import type { ReactNode } from "react";

interface FontProps {
  className?: string;
  children: ReactNode;
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  element:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "b"
    | "strong"
    | "i";
}

export type { FontProps };
