import Image from "next/image";
import styled, { css } from "styled-components";

const TopNavContainer = styled.div`
  width: 100%;
  height: 48px;
  padding: 14px 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.zinc200};
`;

const PathText = styled.p<{ $isPageName?: boolean }>`
  color: ${(props) => props.theme.colors.zinc600};
  font-size: 14px;
  ${(props) =>
    props.$isPageName &&
    css`
      color: ${(props) => props.theme.colors.zinc900};
    `}
`;

export default function TopNav() {
  return (
    <TopNavContainer>
      <Image src="/arrow-left.svg" width={12} height={12} alt="Navigate Back" />
      <PathText>ChatProject</PathText>
      <Image src="/slash.svg" width={9} height={14} alt="/" />
      <PathText $isPageName>Add datasource</PathText>
    </TopNavContainer>
  );
}
