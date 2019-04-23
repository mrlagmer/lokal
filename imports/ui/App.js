import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import { Main, AppDiv } from "./components/Main";
import GetStarted from "./components/GetStarted";
import HeroHome from "./components/HeroHome";
import GuidesHome from "./components/GuidesHome";
import EmailForm from "./components/EmailForm";
import Featured from "./components/Featured";

const HIQUERY = gql`
  {
    hi
  }
`;

const App = () => (
  <Query query={HIQUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <AppDiv>
          <GlobalStyle />
          <Main>
            <HeroHome />
            <EmailForm />
            <GuidesHome />
            <GetStarted />
          </Main>
          <Footer />
        </AppDiv>
      );
    }}
  </Query>
);

export default App;
