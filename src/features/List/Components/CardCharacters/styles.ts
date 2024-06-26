import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
`;
