import styled from "styled-components";
import NavIcon from "./NavIcon";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 48px;
  border-right: 1px solid ${(props) => props.theme.colors.zinc200};
  align-items: center;
  padding: 8px;
  gap: 8px;
`;

export default function SideNav() {
  return (
    <NavContainer>
      <NavIcon page="/" isActive={false} logoSrc="/minds-logo-black.svg" />
      <NavIcon
        size={20}
        page="/"
        isActive={true}
        logoSrc="/code-brackets-white.svg"
      />
      <NavIcon size={24} page="/" isActive={false} logoSrc="icon-robot.svg" />
    </NavContainer>
  );
}
