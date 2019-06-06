import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import { Main, AppDiv } from "./components/Main";
import LokalHead from "./components/LokalHead";
import { Header2 } from "./components/text/Header2";
import Experience from "./components/experiences/Experience";
import media from "./components/media";

import { googleAnalyticsId } from "./tools/General";

const ExperiencesSection = styled.section`
  padding: 1rem;
  max-width: 1150px;
  margin: 1rem auto;
`;

const ExperiencesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${media.tablet`justify-content: center;`}
`;

const EXPERIENCESQUERY = gql`
  {
    experiences {
      _id
      type
      name
      location
      cost
      imagesFolder
    }
  }
`;

const App = () => (
  <AppDiv>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Explore like a lokal. Connect to the very best local culture has to offer. Eat, drink and adventure through our curated experiences with the expertise of local guides."
      />
      <meta
        name="google-site-verification"
        content="YFqpA1nuLgL3D1QFnhVy05b5dOtAKwwkdmcs5EF6I9o"
      />
      <title>
        Explore Manila Tours, Team Building & Things To Do | Explore Lokal.ly
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <Query query={EXPERIENCESQUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <ExperiencesSection>
              <Header2>Experiences</Header2>
              <ExperiencesDiv>
                {data.experiences.map(experience => (
                  <Experience
                    key={experience._id}
                    type={experience.type}
                    location={experience.location}
                    title={experience.name}
                    price={experience.cost}
                    slug={experience.imagesFolder}
                  />
                ))}
              </ExperiencesDiv>
            </ExperiencesSection>
          );
        }}
      </Query>
    </Main>
    <Footer />
  </AppDiv>
);

export default App;
