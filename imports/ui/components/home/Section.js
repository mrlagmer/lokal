import React from "react";
import styled from "styled-components";

import { Header2 } from "../text/Header2";
import { colors } from "../colors";
import media from "../media";
import { common } from "../Common";

const StyledSection = styled.section`
  max-width: 1127px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 0 4rem;
  margin-top: 2rem;
  ${media.phone`justify-content: center;`}
  ${media.phone`padding: 3rem 2rem;`}
  ${media.phone`margin: 4rem 0;`}
`;

const StyledFeatured = styled.div`
  padding: 5rem;
  background: linear-gradient(to right, ${colors.lgPurpuleRed});
`;

const P = styled.p`
  font-size: 1.5rem;
  color: ${colors.black[5]};
  font-weight: bold;
  margin-bottom: 2rem;
  ${media.phone`margin-bottom: 0`}
  ${media.phone`font-size: 1rem;`}
`;

const Section = props => (
  <StyledSection>
    <Header2 css="text-align: center; font-size: 2.5rem;">
      {props.header}
    </Header2>
    <P>{props.p}</P>
  </StyledSection>
);

export default Section;
