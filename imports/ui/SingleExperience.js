import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import { Main, AppDiv } from "./components/Main";
import LokalHead from "./components/LokalHead";
import ExperienceHeader from "./components/experiences/ExperienceHeader";

import { googleAnalyticsId } from "./tools/General";

const ExperienceSection = styled.section`
  background-color: white;
  position: relative;
  margin-top: -80px;
  max-width: 900px;
  margin-left: 4rem;
  margin-right: auto;
  padding: 2rem;
`;

const EXPERIENCEQUERY = gql`
  query Experience($id: String!) {
    experience(_id: $id) {
      _id
      type
      name
      location
      cost
      imagesFolder
    }
  }
`;

const SingleExperience = props => {
  const id = props.match.params.id;
  return (
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
        <Query query={EXPERIENCEQUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <React.Fragment>
                <ExperienceHeader imageFolder={data.experience.imagesFolder} />
                <ExperienceSection>
                  <h1>{data.experience.name}</h1>
                </ExperienceSection>
              </React.Fragment>
            );
          }}
        </Query>
      </Main>
      <Footer />
    </AppDiv>
  );
};

export default SingleExperience;
