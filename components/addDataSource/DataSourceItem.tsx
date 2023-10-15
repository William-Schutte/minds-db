import Image from "next/image";
import styled from "styled-components";

const DataItemContainer = styled.button`
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  min-width: 188px;
  min-height: 176px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.zinc50};
  }
`;

const LabelText = styled.p`
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
`;

export default function DataSourceItem({
  dataSource,
  onClick,
}: {
  dataSource: any;
  onClick: (value: any) => void;
}) {
  const { label, imageSrc, value } = dataSource;

  return (
    <DataItemContainer onClick={() => onClick(value)}>
      <Image height={64} width={64} alt={`${label} icon`} src={imageSrc} />
      <LabelText>{label}</LabelText>
    </DataItemContainer>
  );
}
