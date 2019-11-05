import React from "react";
import styled from "styled-components";

import media from "../media";
import { colors } from "../colors";
import { fonts } from "../text/fonts";

const StyledGuidesDiv = styled.div`
  padding-left: 3rem;
  ${media.phone`padding-left: 0;`}
  ${media.phone`margin-bottom: 2rem;`}
  ${media.tablet`padding-left: 0;`}
`;

const ExperienceTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const GuidesDivTextBox = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right top, ${colors.lg});
  ${media.phone`flex-direction: column;`}
  ${media.tablet`flex-direction: column;`}
`;

const GuidesImg = styled.img`
  margin-top: -5rem;
  ${media.phone`margin-top:0;`}
  ${media.tablet`margin-top:0;`}
`;

const GuidesP = styled.p`
  color: white;
  width: 40%;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  ${media.phone`width: 100%;`}
  ${media.phone`margin:0;`}
  ${media.phone`padding:1rem;`}
  ${media.tablet`width: 100%;`}
  ${media.tablet`margin:0;`}
  ${media.tablet`padding:1rem;`}
`;

const Itinerary = styled.ul`
  list-style: none;
`;

const ExampleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
`;

export const Mystry = () => (
  <GuidesDivTextBox>
    <StyledGuidesDiv>
      <GuidesImg src="/images/food.jpg" />
    </StyledGuidesDiv>
    <ExampleDiv>
      <ExperienceTitle>An afternoon escape</ExperienceTitle>
      <GuidesP>
        Delight your team to an afternoon at mystery Manila, followed by a
        celebratory team dinner.
      </GuidesP>
      <Itinerary>
        <li>3:00 Mystry Manila Escape Room</li>
        <li>5:30 Dinner at vikings</li>
        <li>Cost: $42 USD per head </li>
        <li>Best Fit: A hungry team of problem solvers</li>
      </Itinerary>
    </ExampleDiv>
  </GuidesDivTextBox>
);
