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
  margin: ${common.margintb} auto;
  padding: 3rem 0;
  ${media.tablet`padding: 2rem 2rem;`}
  ${media.phone`justify-content: center;`}
  ${media.phone`margin: 2rem 0;`}
  ${media.phone`padding: 2rem 2rem;`}
`;

const BenefitsDiv = styled.div`
  display: flex;
  ${media.tablet`flex-direction: column;`}
  ${media.tablet`align-items:center`}
  ${media.phone`align-items:center`}
`;

const Benefit = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  ${media.tablet`margin: 1rem 1rem;`}
`;

const Benefits = props => (
  <StyledSection>
    <Header2>{props.header}</Header2>
    <BenefitsDiv>
      <Benefit>
        <i
          css="margin-bottom: 1rem;"
          className="fas fa-hands-helping fa-7x"
        ></i>
        <h4 css="margin-bottom: 1rem;">We guide you</h4>
        <p>
          We want to give you the best guidance. Our primary goal is to help you
          assess whether or not offshoring is right for you.
        </p>
      </Benefit>
      <Benefit>
        <i css="margin-bottom: 1rem;" className="fas fa-smile fa-7x"></i>
        <h4 css="margin-bottom: 1rem;">We know how to build teams</h4>
        <p>
          Our team has over 15 years of collective experience building offshore
          teams
        </p>
      </Benefit>
      <Benefit>
        <i css="margin-bottom: 1rem;" className="fas fa-globe-asia fa-7x"></i>
        <h4 css="margin-bottom: 1rem;">We know Manila inside and out</h4>
        <p>
          We've spent extensive time working with teams in Manila that operate
          in various ways. Let us help you get started and running effectively.
        </p>
      </Benefit>
    </BenefitsDiv>
  </StyledSection>
);

export default Benefits;
