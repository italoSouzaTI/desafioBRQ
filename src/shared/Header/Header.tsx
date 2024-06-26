import { useSafeInsets } from "@hooks/useSafeInsets";
import { useNavigation } from "@react-navigation/native";
import { Typography } from "@shared/Typography/Typography";
import { CaretLeft } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Container, ContainerGoBack } from "./styles";

interface IHeaderProps {
  title: string;
  isGoback: boolean;
}
export function Header({ title, isGoback = false }: IHeaderProps) {
  const { top } = useSafeInsets();
  const { TEXT, PADDING_DEFAULT } = useTheme();
  const { goBack } = useNavigation();
  return (
    <Container auxTop={top}>
      {isGoback && (
        <ContainerGoBack
          onPress={() => {
            goBack();
          }}>
          <CaretLeft color={TEXT.TEXT_PRIMARY} weight="bold" size={PADDING_DEFAULT[24]} />
        </ContainerGoBack>
      )}
      <Typography colorLabel={TEXT.TEXT_PRIMARY} label={title} />
    </Container>
  );
}
