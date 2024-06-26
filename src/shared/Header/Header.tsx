import { useSafeInsets } from "@hooks/useSafeInsets";
import { Typography } from "@shared/Typography/Typography";
import { useTheme } from "styled-components";

import { Container } from "./styles";

interface IHeaderProps {
  title: string;
}
export function Header({ title }: IHeaderProps) {
  const { top } = useSafeInsets();
  const { TEXT } = useTheme();
  return (
    <Container auxTop={top}>
      <Typography colorLabel={TEXT.TEXT_PRIMARY} label={title} />
    </Container>
  );
}
