import React from "react";
import styled from "styled-components";

import { colors } from "./colors";
import { fonts } from "./text/fonts";
import { Button } from "./Button";

const StyledGuidesHome = styled.section`
  margin: 8rem 5rem;
`;

const GuidesFlexBox = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledGuidesDiv = styled.div`
  padding-left: 3rem;
`;

const GuidesDivTextBox = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right top, ${colors.lg});
`;

const GuidesImg = styled.img`
  margin-top: -5rem;
`;

const GuidesP = styled.p`
  color: white;
  line-height: ${fonts.lineHeight};
  width: 40%;
  margin-left: 3rem;
  font-size: 1.5rem;
`;

const StyledGuidesP = styled.p`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const GuidesHome = () => (
  <StyledGuidesHome>
    <GuidesFlexBox>
      <StyledGuidesDiv>
        <img src="/images/Logo_Outline.png" />
        <StyledGuidesP>Guides</StyledGuidesP>
      </StyledGuidesDiv>
      <StyledGuidesDiv>
        <Button>Become a Guide</Button>
      </StyledGuidesDiv>
    </GuidesFlexBox>
    <GuidesDivTextBox>
      <StyledGuidesDiv>
        <GuidesImg src="/images/happyguide.jpg" />
      </StyledGuidesDiv>
      <GuidesP>
        “With Lokally we’ve met people from all over the world, while getting to
        share our favorite local experiences tourists might overlook. It’s been
        a great experience. ” Jim & AmY • UK
      </GuidesP>
    </GuidesDivTextBox>
  </StyledGuidesHome>
);

export default GuidesHome;
