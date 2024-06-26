import { IPerson } from "@core/Service/People/PeopleTypes";
import { useNavigation } from "@react-navigation/native";
import { TPageStackRoutes } from "@routes/Stack/Stack";
import { Card } from "@shared/ContainerCard/styles";
import { Typography } from "@shared/Typography/Typography";
import { CaretRight } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

interface CardCharactersProps {
  people: IPerson;
}
export function CardCharacters({ people }: CardCharactersProps) {
  const { colors, PADDING_DEFAULT } = useTheme();
  const { navigate } = useNavigation<TPageStackRoutes>();
  return (
    <Card>
      <Container
        onPress={() => {
          navigate("DetailsItem", { data: people });
        }}>
        <Typography fontOption="REGULAR" option="CAPTION.N_2" colorLabel={colors.YELLOW_MAIN} label={people.name} />
        <CaretRight color={colors.YELLOW_MAIN} size={PADDING_DEFAULT[24]} />
      </Container>
    </Card>
  );
}
