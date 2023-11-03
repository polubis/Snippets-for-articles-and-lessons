import type { ReactNode } from "react";

interface CalendarProps {
  className?: string;
  children: ReactNode;
}

interface CalendarItemProps {
  children: ReactNode;
  active?: boolean;
}

export type { CalendarProps, CalendarItemProps };
