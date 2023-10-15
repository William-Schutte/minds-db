import Image from "next/image";
import styled from "styled-components";

const TipBoxContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  background: ${(props) => props.theme.colors.zinc50};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  margin-bottom: 16px;
`;

const TipIcon = styled(Image)`
  margin-right: 8px;
`;

const TipHeader = styled.h4`
  font-size: 16px;
  line-height: 1;
  font-weight: medium;
`;

const TipText = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-top: 4px;
  font-weight: medium;
`;

export default function TipBox({
  iconSrc,
  heading,
  text,
}: {
  iconSrc: string;
  heading: string;
  text: string;
}) {
  return (
    <TipBoxContainer>
      <TipIcon width={14} height={14} src={iconSrc} alt="Tip Icon" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TipHeader>{heading}</TipHeader>
        <TipText>{text}</TipText>
      </div>
    </TipBoxContainer>
  );
}
