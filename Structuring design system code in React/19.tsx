import styled from "styled-components";
import { px } from "../../../figa-ui-core";
import c from "classnames";
import type { CalendarItemProps, CalendarProps } from "./calendar.models";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${(props) => px(props, 1000)});
  grid-template-rows: repeat(5, ${(props) => px(props, 1000)});
  gap: ${(props) => px(props, 150)};

  .calendar-item {
    background: ${(props) => props.theme.primary[1000]};

    & > * {
      color: ${(props) => props.theme.primary[300]};
    }

    &.active {
      background: ${(props) => props.theme.primary[500]};
    }
  }
`;

const Calendar = ({ className, children }: CalendarProps) => {
  return <Container className={c("calendar", className)}>{children}</Container>;
};

const Item = ({ children, active }: CalendarItemProps) => {
  return (
    <div className={c("calendar-item center", { active })}>{children}</div>
  );
};

Calendar.Item = Item;

export { Calendar };
