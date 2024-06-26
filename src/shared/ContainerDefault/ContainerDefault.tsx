import { Container } from "./styles";

interface IContainerDefaultProps {
  children: ReactNode;
}
export function ContainerDefault({ children }: IContainerDefaultProps) {
  return <Container>{children}</Container>;
}
