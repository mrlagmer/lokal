import React from "react";
import styled from "styled-components";

import { colors } from "./colors";
import { fonts } from "./text/fonts";
import Logo from "./Logo";

const StyledHeroHome = styled.section`
  background: linear-gradient(${colors.aqua[5]}, ${colors.teal[5]});
  display: flex;
  margin: auto;
  max-width: 1327px;
`;

const HeroLogo = styled.div`
  margin-top: 2rem;
  margin-left: -2rem;
`;

const HeroImage = styled.img`
  margin-left: auto;
  margin-bottom: -76px;
`;

const HeroTextHeader = styled.h2`
  color: white;
  font-size: 7rem;
`;

const HeroTextDiv = styled.div`
  margin-right: -25%;
  z-index: 1;
`;

const HeroP = styled.p`
  color: ${colors.black[5]};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: ${fonts.lineHeight};
`;

const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  max-width: 40%;
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
          <br /> like a local.
        </HeroTextHeader>
      </HeroTextDiv>
      <HeroP>
        Connect to the very best local culture has to offer. Eat, drink and
        adventure through our curated experiences with the expertise of local
        guides.
      </HeroP>
    </HeroDiv>
    <div>
      <HeroImage src="/images/hero.jpg" />
    </div>
  </StyledHeroHome>
);

export default HeroHome;
