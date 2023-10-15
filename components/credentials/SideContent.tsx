import styled from "styled-components";

const SideContentContainer = styled.div`
  position: absolute;
  top: 0;
  width: 176px;
  margin-left: 424px;
  height: 100px;
  background: #f4f4f5;
  padding: 16px 20px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.zinc500};
`;

export default function SideContent() {
  return <SideContentContainer>Need help?</SideContentContainer>;
}
