import React from "react";
import ReactMarkdown from "react-markdown";

import GlobalStyle from "../../components/GlobalStyle";
import { Main, AppDiv } from "../../components/Main";
import Footer from "../../components/Footer";
import LokalHead from "../../components/LokalHead";
import PagesTitle from "../../components/PagesTitle";
import PageContent from "../../components/PageContent";
import { Text } from "./About";

const AboutUs = () => (
  <AppDiv>
    <GlobalStyle />
    <Main>
      <LokalHead />
      <PagesTitle title="About Us" />
      <PageContent>
        <ReactMarkdown className="pages" source={Text} />
      </PageContent>
    </Main>
    <Footer />
  </AppDiv>
);

export default AboutUs;
