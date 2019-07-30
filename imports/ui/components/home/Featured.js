import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Experience from "../experiences/Experience";
import { ExperienceLink } from "../tags/";
import { colors } from "../colors";
import media from "../media";

const StyledFeatured = styled.div`
  margin-top: 8rem;
  background: linear-gradient(to right, ${colors.lgPurpuleRed});
`;

const FeaturedH1 = styled.h1`
  color: white;
  padding-top: 5rem;
  padding-bottom: 7rem;
  padding-left: 4rem;
`;

const FeaturedDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${media.tablet`align-items: center;`}
  ${media.tablet`flex-direction: column;`}
`;

const FeaturedExperienceLink = styled(ExperienceLink)`
  margin-top: -80px;
  margin-bottom: 6rem;
  ${media.tablet`margin-bottom:0`}
  :nth-child(even) {
    margin-top: -140px;
    ${media.tablet`margin-top: 1rem;`}
  }

  ${media.tablet`margin-top: 1rem;`}
`;

const FEATUREDEXPERIENCESQUERY = gql`
  query featured($featured: Boolean!) {
    featured(featured: $featured) {
      _id
      type
      name
      location
      imagesFolder
    }
  }
`;

const Featured = () => (
  <section>
    <StyledFeatured>
      <FeaturedH1>Featured Experiences</FeaturedH1>
    </StyledFeatured>
    <Query query={FEATUREDEXPERIENCESQUERY} variables={{ featured: true }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const featured = data.featured.slice(0, 3);
        return (
          <FeaturedDiv>
            {featured.map(experience => (
              <FeaturedExperienceLink
                key={experience._id}
                href={`/experience/${experience._id}`}
              >
                <Experience
                  type={experience.type}
                  location={experience.location}
                  title={experience.name}
                  price={experience.cost}
                  slug={experience.imagesFolder}
                />
              </FeaturedExperienceLink>
            ))}
          </FeaturedDiv>
        );
      }}
    </Query>
  </section>
);

export default Featured;
