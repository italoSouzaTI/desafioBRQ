import styled from "styled-components/native";

export const Container = styled.View`
  /* width: 100%; */
  gap: ${({ theme }) => theme.PADDING_DEFAULT["8"]};
  padding: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
`;
export const Row = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const ClickFavorite = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
`;
