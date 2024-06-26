import styled from "styled-components/native";

interface ContainerProps {
  auxTop: number;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  min-height: 80px;
  align-items: center;
  padding-top: ${({ auxTop }) => auxTop}px;
  gap: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
  padding-horizontal: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
  padding-bottom: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
  background: ${({ theme }) => theme.TABBOTTOM};
`;
export const ContainerGoBack = styled.TouchableOpacity``;
