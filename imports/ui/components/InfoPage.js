import React from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

import GlobalStyle from "./GlobalStyle";
import { Main, AppDiv } from "./Main";
import Footer from "./Footer";
import LokalHead from "./LokalHead";
import PagesTitle from "./PagesTitle";
import PageContent from "./PageContent";
import { googleAnalyticsId } from "../tools/General";

const InfoPage = props => (
  <AppDiv>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Lokal.ly | {props.title} </title>
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${googleAnalyticsId}');
        `}
      </script>
    </Helmet>
    <GlobalStyle />
    <Main>
      <LokalHead />
      <PagesTitle title={props.title} />
      <PageContent>
        <ReactMarkdown className="pages" source={props.text} />
      </PageContent>
    </Main>
    <Footer />
  </AppDiv>
);

export default InfoPage;
