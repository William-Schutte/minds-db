import styled from "styled-components";

import Layout from "./layout";
import ContentContainer from "@/components/page/ContentContainer";
import TipBox from "@/components/page/TipBox";
import DataSources from "@/components/page/DataSources";

const HeaderText = styled.h2`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
  text-align: center;
`;

const SubheaderText = styled.h3`
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 8px;
  text-align: center;
  font-weight: regular;
  color: ${(props) => props.theme.colors.zinc600};

  a {
    color: ${(props) => props.theme.colors.zinc600};
  }
`;

export default function Home() {
  return (
    <Layout>
      <ContentContainer>
        <div style={{ marginBottom: "32px" }}>
          <HeaderText>Select your datasource</HeaderText>
          <SubheaderText>
            Don't see what you're looking for? <a href="#">Make a request</a>
          </SubheaderText>
        </div>
        <TipBox
          heading="Pro Tip!"
          text="Write datasource name in the editor to print the form template."
          iconSrc="/icons/general/light-bulb-on.svg"
        />
        <DataSources />
      </ContentContainer>
    </Layout>
  );
}
