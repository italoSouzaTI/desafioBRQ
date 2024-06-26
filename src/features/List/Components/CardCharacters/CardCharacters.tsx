import { Card } from "@shared/ContainerCard/styles";
import { Typography } from "@shared/Typography/Typography";
import { CaretRight } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

export function CardCharacters() {
  const { colors, PADDING_DEFAULT } = useTheme();
  return (
    <Card>
      <Container>
        <Typography
          fontOption="REGULAR"
          option="CAPTION.N_2"
          colorLabel={colors.YELLOW_MAIN}
          label="Nome do personagem"
        />
        <CaretRight color={colors.YELLOW_MAIN} size={PADDING_DEFAULT[24]} />
      </Container>
    </Card>
  );
}
