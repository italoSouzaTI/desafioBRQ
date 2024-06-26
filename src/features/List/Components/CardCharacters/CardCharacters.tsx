import { ListPeoples } from "@features/List/useModelViewList";
import { Card } from "@shared/ContainerCard/styles";
import { Typography } from "@shared/Typography/Typography";
import { CaretRight } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

interface CardCharactersProps {
  people: ListPeoples;
}
export function CardCharacters({ people }: CardCharactersProps) {
  const { colors, PADDING_DEFAULT } = useTheme();
  return (
    <Card>
      <Container
        onPress={() => {
          console.tron.log(people.url);
        }}>
        <Typography fontOption="REGULAR" option="CAPTION.N_2" colorLabel={colors.YELLOW_MAIN} label={people.name} />
        <CaretRight color={colors.YELLOW_MAIN} size={PADDING_DEFAULT[24]} />
      </Container>
    </Card>
  );
}
