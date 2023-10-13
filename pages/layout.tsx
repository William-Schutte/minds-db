import styled from "styled-components";

import SideNav from "@/components/navbars/SideNav";
import TopNav from "@/components/navbars/TopNav";

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
`;

export default function Layout() {
  return (
    <PageContainer>
      <SideNav />
      <TopNav />
    </PageContainer>
  );
}
