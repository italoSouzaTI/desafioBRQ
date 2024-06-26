import { ScrollView } from "react-native";

import { Card } from "@shared/ContainerCard/styles";
import { ContainerLoading } from "@shared/ContainerLoading/ContainerLoading";
import { ContainerDefault, Header, Typography } from "@shared/index";
import { Star } from "phosphor-react-native";

import { ClickFavorite, Container, Row } from "./styles";
import { useModelViewDetailsItem } from "./useModelViewDetailsItem";

export function DetailsItem() {
  const { isLoading, colors, dataPerson, PADDING_DEFAULT, isFavorite, handleFavorite } = useModelViewDetailsItem();
  if (isLoading) {
    return <ContainerLoading label="Loading details person..." />;
  }
  return (
    <ContainerDefault>
      <Header isGoback title="Details Person" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          gap: 16,
          padding: 16,
        }}>
        <Card>
          <Row>
            <Container>
              <Typography label="Data" colorLabel={colors.YELLOW_MAIN} option="CAPTION.N_2" />
            </Container>
            <ClickFavorite
              onPress={() => {
                handleFavorite(dataPerson);
              }}>
              <Star
                size={PADDING_DEFAULT[24]}
                weight="fill"
                color={isFavorite ? colors.YELLOW_MAIN : colors.GREY_400}
              />
            </ClickFavorite>
          </Row>
          <Container>
            <Typography label="Name" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
            <Typography label={dataPerson?.name} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
          </Container>
          <Row>
            <Container>
              <Typography label="Height" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
              <Typography label={dataPerson?.height} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
            </Container>
            <Container>
              <Typography label="Mass" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
              <Typography label={dataPerson?.mass} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
            </Container>
            <Container>
              <Typography label="Hair_color" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
              <Typography label={dataPerson?.hair_color} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
            </Container>
          </Row>
          <Row>
            <Container>
              <Typography label="Skin_color" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
              <Typography label={dataPerson?.skin_color} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
            </Container>
            <Container>
              <Typography label="Eye_color" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
              <Typography label={dataPerson?.eye_color} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
            </Container>
            <Container>
              <Typography label="Birth_year" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
              <Typography label={dataPerson?.birth_year} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
            </Container>
          </Row>
          <Row>
            <Container>
              <Typography label="Gender" colorLabel={colors.GREY_400} option="CAPTION.N_1" />
              <Typography label={dataPerson?.gender} colorLabel={colors.YELLOW_MAIN} option="BODY.N_1" />
            </Container>
          </Row>
        </Card>
        <Card>
          <Container>
            <Typography label="Films" colorLabel={colors.YELLOW_MAIN} option="CAPTION.N_2" />
          </Container>

          <Container>
            {dataPerson?.films.map((item) => (
              <Typography key={item.title} label={item.title} colorLabel={colors.GREY_400} option="BODY.N_1" />
            ))}
          </Container>
        </Card>
      </ScrollView>
    </ContainerDefault>
  );
}
