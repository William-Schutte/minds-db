import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

interface NavIconProps {
  page: string;
  isActive: boolean;
  logoSrc: string;
  size?: number;
}

const IconContainer = styled.div<{ $isActive?: boolean }>`
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$isActive &&
    css`
      background: #00a587;
      padding: 4px;
    `}
`;

export default function NavIcon({
  page,
  isActive,
  logoSrc,
  size = 28,
}: NavIconProps) {
  return (
    <IconContainer $isActive={isActive}>
      <Link
        href={page}
        style={{ textDecoration: "none", lineHeight: 0, width: "min-content" }}
      >
        <Image
          width={size}
          height={size}
          style={{ margin: "auto" }}
          src={logoSrc}
          alt="minds logo"
        />
      </Link>
    </IconContainer>
  );
}
