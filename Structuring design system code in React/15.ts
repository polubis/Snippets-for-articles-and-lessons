import { css } from "styled-components";
import { px } from "../../../figa-ui-core";

export const font_style = css`
  .font {
    color: ${(props) => props.theme.primary[1000]};

    &-1 {
      // We used the core "px" converted.
      font-size: ${(props) => px(props, 1000)};
    }

    &-2 {
      font-size: ${(props) => px(props, 900)};
    }

    &-3 {
      font-size: ${(props) => px(props, 800)};
    }

    &-4 {
      font-size: ${(props) => px(props, 700)};
    }

    &-5 {
      font-size: ${(props) => px(props, 600)};
    }

    &-6 {
      font-size: ${(props) => px(props, 500)};
    }
  }
`;
