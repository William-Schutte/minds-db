import styled from "styled-components";

import SideNav from "@/components/navbars/SideNav";
import TopNav from "@/components/navbars/TopNav";
import { ReactNode } from "react";

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
`;

const VerticalContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PageContainer>
      <SideNav />
      <VerticalContent>
        <TopNav />
        {children}
      </VerticalContent>
    </PageContainer>
  );
}
