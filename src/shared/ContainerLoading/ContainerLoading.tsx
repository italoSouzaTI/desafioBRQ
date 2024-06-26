import { ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";

import { ContainerDefault, Typography } from "..";

import { Container } from "./styles";

interface ContainerLoadingProps {
  label: string;
}
export function ContainerLoading({ label }: ContainerLoadingProps) {
  const { colors, TEXT } = useTheme();
  return (
    <ContainerDefault>
      <Container>
        <ActivityIndicator size={"large"} color={colors.YELLOW_MAIN} />
        <Typography label={label} colorLabel={TEXT.TEXT_PRIMARY} />
      </Container>
    </ContainerDefault>
  );
}
