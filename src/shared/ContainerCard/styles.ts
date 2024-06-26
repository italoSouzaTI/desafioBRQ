import styled from "styled-components/native";

export const Card = styled.View`
  width: 100%;
  border-radius: ${({ theme }) => theme.PADDING_DEFAULT["8"]};
  background: ${({ theme }) => theme.CARD};
`;
