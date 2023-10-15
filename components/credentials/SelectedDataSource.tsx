import { getSelectedSource } from "@/redux/slices/dataSourcesSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 24px;
  display: flex;
  padding: 8px 0;
  border-top: 1px solid ${(props) => props.theme.colors.zinc200};
  border-bottom: 1px solid ${(props) => props.theme.colors.zinc200};
`;

const Label = styled.p`
  fonst-size: 16px;
  line-height: 24px;
  color: #27272a;
  margin-left: 8px;
  align-self: center;
`;

const ChangeSourceButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  width: 84px;
  height: 32px;
  margin-left: auto;
  font-size: 14px;
`;

export default function SelectedDataSource() {
  const dataSource = useSelector(getSelectedSource);
  const router = useRouter();
  if (!dataSource) return null;

  const { label, imageSrc } = dataSource;

  return (
    <Container>
      <Image height={32} width={32} alt={`${label} icon`} src={imageSrc} />
      <Label>{label}</Label>
      <ChangeSourceButton onClick={() => router.push("addDatasource")}>
        Change
      </ChangeSourceButton>
    </Container>
  );
}
