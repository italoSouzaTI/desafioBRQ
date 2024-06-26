import styled from "styled-components/native";

interface ContainerProps {
  auxTop: number;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding-top: ${({ auxTop }) => auxTop}px;
  min-height: 80px;
  padding-horizontal: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
  padding-bottom: ${({ theme }) => theme.PADDING_DEFAULT["16"]};
  background: ${({ theme }) => theme.TABBOTTOM};
`;
