import { ActivityIndicator, FlatList, ListRenderItemInfo, RefreshControl } from "react-native";

import { ContainerDefault, Header, Typography } from "@shared/index";

import { CardCharacters } from "./Components/CardCharacters/CardCharacters";
import { Container, FooterFlatlist } from "./styles";
import { ListPeoples } from "./useModelViewList";
import { useModelViewList } from "./useModelViewList.1";

export function List() {
  const { isLoading, colors, TEXT, list, isNextPage, isRefreshing, fetchNextPage, refresh } = useModelViewList();
  if (isLoading && list.length == 0) {
    return (
      <ContainerDefault>
        <Container>
          <ActivityIndicator size={"large"} color={colors.YELLOW_MAIN} />
          <Typography label="Loading list..." colorLabel={TEXT.TEXT_PRIMARY} />
        </Container>
      </ContainerDefault>
    );
  }

  function renderItem({ item }: ListRenderItemInfo<ListPeoples>) {
    return <CardCharacters people={item} />;
  }
  function ListEmptyComponent() {
    return (
      <Container>
        <Typography label="No items found" colorLabel={TEXT.TEXT_PRIMARY} option="H3.N_1" />
      </Container>
    );
  }
  function renderListFooter() {
    return (
      <>
        {list.length > 0 && (
          <>
            {isNextPage === false ? (
              <FooterFlatlist>
                <Typography label="End of list" colorLabel={TEXT.TEXT_DISABLED} option="CAPTION.N_1" />
              </FooterFlatlist>
            ) : (
              <FooterFlatlist>
                <ActivityIndicator size={"large"} animating={true} color={colors.YELLOW_LIGHTER} />
                <Typography label="Loading more People" colorLabel={TEXT.TEXT_DISABLED} option="CAPTION.N_1" />
              </FooterFlatlist>
            )}
          </>
        )}
      </>
    );
  }
  return (
    <ContainerDefault>
      <Header title="Characters" />
      <FlatList
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh} />}
        refreshing={isRefreshing}
        ListFooterComponent={renderListFooter}
        ListEmptyComponent={ListEmptyComponent}
      />
    </ContainerDefault>
  );
}
