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
import KeyInfo from "./components/experiences/KeyInfo";
import { fonts } from "./components/text/fonts";
import { Header2 } from "./components/text/Header2";
import { HrGradient } from "./components/tags";
import Booking from "./components/experiences/Booking";
import LoadPage from "./components/Loading";

import { googleAnalyticsId } from "./tools/General";
import media from "./components/media";

const ExperienceSection = styled.article`
  background-color: white;
  position: relative;
  margin-top: -80px;
  max-width: 900px;
  margin-left: 4rem;
  margin-right: auto;
  padding: 2rem;
  ${media.desktop`margin-left: 4rem ;`}
  ${media.desktop`margin-right: 4rem ;`}
  ${media.phone`margin-left: 1rem ;`}
  ${media.phone`margin-right: 1rem ;`}
`;

const ExperienceH1 = styled.h1`
  font-size: 2.5rem;
`;

const ContentDiv = styled.div`
  line-height: ${fonts.lineHeightPages};
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

const EXPERIENCEQUERY = gql`
  query Experience($id: String!) {
    experience(_id: $id) {
      _id
      type
      name
      location
      length
      includes
      language
      cost
      minBookings
      maxBookings
      imagesFolder
      description
      bring
      times
      takingBookings
      bookingId
      guide {
        bio
      }
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
      <Main
        css={`
          max-width: 1300px;
          margin: 0 auto;
        `}
      >
        <LokalHead />
        <Query query={EXPERIENCEQUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <LoadPage />;
            if (error) return <p>Error :(</p>;
            return (
              <React.Fragment>
                <ExperienceHeader imageFolder={data.experience.imagesFolder} />
                <ExperienceSection>
                  <ExperienceH1>{data.experience.name}</ExperienceH1>
                  <KeyInfo
                    location={data.experience.location}
                    length={data.experience.length}
                    includes={data.experience.includes}
                    language={data.experience.language}
                  />
                  <Booking
                    available={data.experience.times}
                    cost={data.experience.cost}
                    takingBookings={data.experience.takingBookings}
                    bookingId={data.experience.bookingId}
                    minBookings={data.experience.minBookings}
                    maxBookings={data.experience.maxBookings}
                    name={data.experience.name}
                  />
                  <ContentDiv>
                    <Header2>Meet Your Guide</Header2>
                    <p>{data.experience.guide.bio}</p>
                  </ContentDiv>
                  <HrGradient />
                  <ContentDiv>
                    <Header2>The Experience</Header2>
                    <p>{data.experience.description}</p>
                  </ContentDiv>
                  <HrGradient />
                  <ContentDiv>
                    <Header2>Provided for you</Header2>
                    <p>{data.experience.includes}</p>
                  </ContentDiv>
                  <HrGradient />
                  <ContentDiv>
                    <Header2>What to Bring</Header2>
                    <p>{data.experience.bring}</p>
                  </ContentDiv>
                  <HrGradient />
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
