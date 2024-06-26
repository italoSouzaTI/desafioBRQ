import { ReactNode } from "react";

import { Card } from "./styles";

interface ContainerCardProps {
  children: ReactNode;
}
export function ContainerCard({ children }: ContainerCardProps) {
  return <Card>{children}</Card>;
}
