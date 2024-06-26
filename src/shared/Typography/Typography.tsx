import { TextProps } from "react-native";

import { Label } from "./styles";

export type option =
  | "H1.N_1"
  | "H1.N_2"
  | "H3.N_1"
  | "H3.N_2"
  | "SUBTITLE.N_1"
  | "SUBTITLE.N_2"
  | "BODY.N_1"
  | "BODY.N_2"
  | "CAPTION.N_1"
  | "CAPTION.N_2";
export type fontOption = "REGULAR" | "BOLD" | "LIGHT";
interface ITypographyProps extends TextProps {
  label: string;
  option?: option;
  fontOption?: fontOption;
  colorLabel?: string;
}
export function Typography({ label, colorLabel, option = "H3.N_1", fontOption = "BOLD", ...rest }: ITypographyProps) {
  return (
    <Label fontWeight={fontOption} typography={option} colorLabel={colorLabel} {...rest}>
      {label}
    </Label>
  );
}
