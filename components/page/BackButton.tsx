import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledBackButton = styled.button`
  background: none;
  border: none;
  line-height: 0;
  cursor: pointer;
`;

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <StyledBackButton onClick={goBack}>
      <Image
        src="/icons/general/arrow-left.svg"
        width={12}
        height={12}
        alt="Navigate Back"
      />
    </StyledBackButton>
  );
}
