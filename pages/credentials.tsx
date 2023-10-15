import styled from "styled-components";

import Layout from "./layout";
import ContentContainer from "@/components/page/ContentContainer";
import BackButton from "@/components/page/BackButton";
import SelectedDataSource from "@/components/credentials/SelectedDataSource";
import SideContent from "@/components/credentials/SideContent";

const HeaderText = styled.h2`
  font-size: 20px;
  line-height: 28px;
  text-align: center;
`;

export default function Home() {
  return (
    <Layout>
      <ContentContainer>
        <div style={{ width: "400px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              alignSelf: "flex-start",
              marginBottom: "32px",
            }}
          >
            <BackButton />
            <HeaderText>add credentials</HeaderText>
          </div>
          <form style={{ width: "100%", position: "relative" }}>
            <SelectedDataSource />
            <SideContent />
            {/* Implement form: would probably use formik and a context to store values if needed on another page */}
          </form>
        </div>
      </ContentContainer>
    </Layout>
  );
}
