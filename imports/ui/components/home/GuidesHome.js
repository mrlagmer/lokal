import React from "react";
import styled from "styled-components";

import { Button } from "../Button";
import media from "../media";
import { common } from "../Common";
import { colors } from "../colors";

import { GuidePat, GuideVenji, GuideMallet } from "./GuideBios";

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

const StyledGuidesTop = styled.div`
  flex-shrink: 0;
  padding-left: 2rem;
  ${media.phone`padding-left: 0;`}
  ${media.phone`margin-bottom: 2rem;`}
  ${media.tablet`margin-bottom: 2rem;`}
  ${media.tablet`padding-left: 0;`}
`;

const StyledGuidesLokal = styled.p`
  font-size: 3.2rem;
  text-transform: uppercase;
  font-family: "HorizonOutlined";
  color: linear-gradient(to right, ${colors["lg"]});
  background: linear-gradient(to right, ${colors["lg"]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledGuidesP = styled.p`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const randomize = myArray => {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const Bios = [<GuidePat />, <GuideVenji />, <GuideMallet />];

const GuidesHome = () => (
  <StyledGuidesHome>
    <GuidesFlexBox>
      <StyledGuidesTop>
        <StyledGuidesLokal>Lokal.ly</StyledGuidesLokal>
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
    {randomize(Bios)}
  </StyledGuidesHome>
);

export default GuidesHome;
