import React from "react";
import styled from "styled-components";

import { colors } from "../colors";
import { fonts } from "../text/fonts";
import Logo from "../Logo";
import media from "../media";
import { Button } from "../Button";
import { common } from "../Common";
import BasicForm from "../forms/BasicForm";
import LokalHead from "../LokalHead";

const StyledHeroHome = styled.section`
  background: linear-gradient(${colors.aqua[5]}, ${colors.teal[5]});
  display: flex;
  position: relative;
  margin-bottom: ${common.margintb};
  margin-left: auto;
  margin-right: auto;
  max-width: 1127px;
  ${media.tablet`display:block;`}
  ${media.phone`margin-bottom: 4rem ;`}
`;

const HeadArea = styled.div`
  position: absolute;
  width: 100%;
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
  ${media.tablet`margin-top: 2rem;`}
  ${media.desktop`font-size: 5rem;`}
  ${media.phone`font-size: 4rem;`}
`;

const HeroTextHeaderSmaller = styled.h2`
  color: white;
  font-size: 3rem;
  margin-top: 2rem;
  ${media.tablet`margin-top: 2rem;`}
  ${media.desktop`font-size: 2rem;`}
  ${media.phone`font-size: 2rem;`}
`;

const HeroTextDiv = styled.div`
  margin-top: 7rem;
  margin-right: -35%;
  z-index: 1;
  ${media.tablet`margin-right: 0;`}
  ${media.phone`margin-right: 0;`}
`;

const HeroP = styled.p`
  margin-top: 2rem;
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
  padding: 0 2rem;
  max-width: 40%;
  ${media.tablet`max-width:100%;`}
`;

const HeroButtonDiv = styled.div`
  margin-right: -20%;
  z-index: 1;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  ${media.tablet`margin-right: 0;`}
`;

const HeroHome = () => (
  <StyledHeroHome>
    <HeadArea>
      <LokalHead />
    </HeadArea>
    <HeroDiv>
      <HeroTextDiv>
        <HeroTextHeader>Let us help </HeroTextHeader>
        <HeroTextHeaderSmaller>your team grow</HeroTextHeaderSmaller>
      </HeroTextDiv>
      <HeroP>
        Expanding your team is no easy task. Looking to hire offshore may be an
        efficient way to scale, but can be difficult without proper planning.
        Let our expert team help you create a strategy for growth abroad.
      </HeroP>
      <HeroButtonDiv>
        <BasicForm />
      </HeroButtonDiv>
    </HeroDiv>
    <div>
      <HeroImage src="/images/hero2.jpg" />
    </div>
  </StyledHeroHome>
);

export default HeroHome;
