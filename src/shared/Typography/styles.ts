import styled, { css } from "styled-components/native";

import { fontOption, option } from "./Typography";

interface LabelProps {
  typography?: option;
  fontWeight: fontOption;
  colorLabel: string;
}

export const Label = styled.Text<LabelProps>`
  ${({ theme, typography, fontWeight, colorLabel }) => css`
    color: ${colorLabel};
    font-weight: ${fontWeight === "BOLD" ? 900 : fontWeight === "LIGHT" ? 400 : 600};
    font-size: ${typography === "H1.N_1"
      ? theme.TYPOGRAPHY.H1.N_1
      : typography === "H1.N_2"
      ? theme.TYPOGRAPHY.H1.N_2
      : typography === "H3.N_1"
      ? theme.TYPOGRAPHY.H3.N_1
      : typography === "H3.N_2"
      ? theme.TYPOGRAPHY.H3.N_2
      : typography === "SUBTITLE.N_1"
      ? theme.TYPOGRAPHY.SUBTITLE.N_1
      : typography === "SUBTITLE.N_2"
      ? theme.TYPOGRAPHY.SUBTITLE.N_2
      : typography === "BODY.N_1"
      ? theme.TYPOGRAPHY.BODY.N_1
      : typography === "BODY.N_2"
      ? theme.TYPOGRAPHY.BODY.N_2
      : typography === "CAPTION.N_1"
      ? theme.TYPOGRAPHY.CAPTION.N_1
      : theme.TYPOGRAPHY.CAPTION.N_2};
  `}
`;
