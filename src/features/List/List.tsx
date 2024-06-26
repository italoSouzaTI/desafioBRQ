import { FlatList } from "react-native";

import { ContainerDefault, Header } from "@shared/index";

import { CardCharacters } from "./Components/CardCharacters/CardCharacters";

export function List() {
  function renderItem() {
    return <CardCharacters />;
  }
  return (
    <ContainerDefault>
      <Header title="Characters" />
      <FlatList
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
        // keyExtractor={(item) => item.plaquetaBem}
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
        // ListEmptyComponent={ListEmptyComponent}
      />
    </ContainerDefault>
  );
}
