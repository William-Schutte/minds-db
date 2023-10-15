import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.section<{ $maxWidth?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  align-items: center;
  max-width: ${(props) => props.$maxWidth};

  padding: 32px 0;
  @media (max-width: 1132px) {
    padding: 32px;
  }
`;

export default function ContentContainer({
  children,
  maxWidth = "1024px",
}: {
  children: ReactNode;
  maxWidth?: string;
}) {
  return <Container $maxWidth={maxWidth}>{children}</Container>;
}
