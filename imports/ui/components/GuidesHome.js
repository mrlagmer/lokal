import React from "react";
import styled from "styled-components";

import { colors } from "./colors";
import { fonts } from "./text/fonts";
import { Button } from "./Button";
import media from "./media";
import { common } from "./Common";

const StyledGuidesHome = styled.section`
  margin: ${common.margintb} 5rem;
  ${media.phone`margin: 6rem 0`}
`;

const GuidesFlexBox = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 5rem;
  justify-content: center;
  ${media.tablet`flex-direction: column;`}
  ${media.tablet`align-items: center;`}
  ${media.phone`flex-direction: column;`}
  ${media.phone`align-items: center;`}
`;

const StyledGuidesDiv = styled.div`
  padding-left: 3rem;
  ${media.phone`padding-left: 0;`}
  ${media.phone`margin-bottom: 2rem;`}
  ${media.tablet`padding-left: 0;`}
`;

const StyledGuidesTop = styled.div`
  flex-shrink: 0;
  padding-left: 2rem;
  ${media.phone`padding-left: 0;`}
  ${media.phone`margin-bottom: 2rem;`}
  ${media.tablet`margin-bottom: 2rem;`}
  ${media.tablet`padding-left: 0;`}
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
  line-height: ${fonts.lineHeight};
  width: 40%;
  margin-left: 3rem;
  margin-right: 3rem;
  font-size: 1.5rem;
  ${media.phone`width: 100%;`}
  ${media.phone`margin:0;`}
  ${media.phone`padding:1rem;`}
  ${media.tablet`width: 100%;`}
  ${media.tablet`margin:0;`}
  ${media.tablet`padding:1rem;`}
`;

const StyledGuidesP = styled.p`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const GuidesHome = () => (
  <StyledGuidesHome>
    <GuidesFlexBox>
      <StyledGuidesTop>
        <img src="/images/Logo_Outline.png" />
        <StyledGuidesP>Guides</StyledGuidesP>
      </StyledGuidesTop>
      <StyledGuidesTop>
        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSePymXwG9WpNk87bSKd1pRk34vxTPQf-mVFAn2bK74rGWgYIg/viewform"
        >
          Become a Guide
        </Button>
      </StyledGuidesTop>
    </GuidesFlexBox>
    {Math.random() > 0.4 ? (
      <GuidesDivTextBox>
        <StyledGuidesDiv>
          <GuidesImg src="/images/pat3.jpg" />
        </StyledGuidesDiv>
        <GuidesP>
          “As a coach - what I wish to achieve is to help people in their
          journey through jiu-jitsu and to build a community around it that
          promotes open-mindedness, discipline, and respect.” Pat • Philippines
        </GuidesP>
      </GuidesDivTextBox>
    ) : (
      <GuidesDivTextBox>
        <StyledGuidesDiv>
          <GuidesImg src="/images/yogafitguide.jpg" />
        </StyledGuidesDiv>
        <GuidesP>
          “I do believe that the practice of yoga, meditation and mindfulness
          can give people the tools to be more productive, more compassionate
          and more joyful in life.” Venj • Philippines
        </GuidesP>
      </GuidesDivTextBox>
    )}
  </StyledGuidesHome>
);

export default GuidesHome;
