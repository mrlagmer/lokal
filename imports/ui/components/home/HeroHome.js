import React from "react";
import styled from "styled-components";

import { colors } from "../colors";
import { fonts } from "../text/fonts";
import Logo from "../Logo";
import media from "../media";
import { Button } from "../Button";
import { common } from "../Common";

const StyledHeroHome = styled.section`
  background: linear-gradient(${colors.aqua[5]}, ${colors.teal[5]});
  display: flex;
  margin-bottom: ${common.margintb};
  margin-left: auto;
  margin-right: auto;
  max-width: 1327px;
  ${media.tablet`display:block;`}
`;

const HeroLogo = styled.div`
  margin-top: 2rem;
  margin-left: -2rem;
`;

const HeroImage = styled.img`
  margin-left: auto;
  margin-bottom: -76px;
  ${media.phone`margin-bottom: 0;`}
`;

const HeroTextHeader = styled.h2`
  color: white;
  font-size: 7rem;
  ${media.desktop`font-size: 5rem;`}
  ${media.phone`font-size: 4rem;`}
`;

const HeroTextDiv = styled.div`
  margin-right: -35%;
  z-index: 1;
  ${media.tablet`margin-right: 0;`}
  ${media.phone`margin-right: 0;`}
`;

const HeroP = styled.p`
  color: ${colors.black[5]};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: ${fonts.lineHeight};
  margin-bottom: 2rem;
  ${media.phone`font-size: 1rem;`}
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  max-width: 40%;
  ${media.tablet`max-width:100%;`}
`;

const HeroButtonDiv = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const HeroHome = () => (
  <StyledHeroHome>
    <HeroDiv>
      <HeroLogo>
        <Logo />
      </HeroLogo>
      <HeroTextDiv>
        <HeroTextHeader>
          Explore
          <br /> like a lokal.
        </HeroTextHeader>
      </HeroTextDiv>
      <HeroP>
        Connect to the very best lokal culture has to offer. Eat, drink and
        adventure through our curated experiences with the expertise of lokal
        guides.
      </HeroP>
      <HeroButtonDiv>
        <Button as="a" href="/experiences">
          View Experiences
        </Button>
      </HeroButtonDiv>
    </HeroDiv>
    <div>
      <HeroImage src="/images/top.jpg" />
    </div>
  </StyledHeroHome>
);

export default HeroHome;
