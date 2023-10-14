import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 32px auto;
`;

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <Container>{children}</Container>;
}
