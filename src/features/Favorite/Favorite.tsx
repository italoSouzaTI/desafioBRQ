import { FlatList, ListRenderItemInfo } from "react-native";

import { IPerson } from "@core/Service/People/PeopleTypes";
import { CardCharacters } from "@features/List/Components/CardCharacters/CardCharacters";
import { Container, FooterFlatlist } from "@features/List/styles";
import { ContainerLoading } from "@shared/ContainerLoading/ContainerLoading";
import { ContainerDefault, Header, Typography } from "@shared/index";

import { useModelViewFavorite } from "./useModelViewFavorite";

export function Favorite() {
  const { dataFavorite, isLoading, TEXT } = useModelViewFavorite();
  if (isLoading) {
    return <ContainerLoading label="Loading favorites..." />;
  }
  function renderItem({ item }: ListRenderItemInfo<IPerson>) {
    return <CardCharacters people={item} />;
  }
  function ListEmptyComponent() {
    return (
      <Container>
        <Typography label="No items favorites" colorLabel={TEXT.TEXT_PRIMARY} option="H3.N_1" />
      </Container>
    );
  }
  function renderListFooter() {
    return (
      <>
        {dataFavorite.length > 0 && (
          <FooterFlatlist>
            <Typography label="End of list" colorLabel={TEXT.TEXT_DISABLED} option="CAPTION.N_1" />
          </FooterFlatlist>
        )}
      </>
    );
  }
  return (
    <ContainerDefault>
      <Header title="Favorite" />
      <FlatList
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
        data={dataFavorite}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={renderListFooter}
        ListEmptyComponent={ListEmptyComponent}
      />
    </ContainerDefault>
  );
}
