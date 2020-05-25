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
          className="fas fa-money-check-alt fa-7x"
        ></i>
        <h4 css="margin-bottom: 1rem;">Mutiple Payment Methods</h4>
        <p>
          Credit card, cash, bank deposit, paypal... however you need to pay,
          we've got you covered.
        </p>
      </Benefit>
      <Benefit>
        <i css="margin-bottom: 1rem;" className="fas fa-smile fa-7x"></i>
        <h4 css="margin-bottom: 1rem;">We know how to build Morale</h4>
        <p>
          Our team has worked with local teams for years and know what
          motivates.
        </p>
      </Benefit>
      <Benefit>
        <i css="margin-bottom: 1rem;" className="fas fa-globe-asia fa-7x"></i>
        <h4 css="margin-bottom: 1rem;">We know Manila inside and out</h4>
        <p>
          We've spent extensive time trying first hand everything we recommend,
          to save yourself the groundwork.
        </p>
      </Benefit>
    </BenefitsDiv>
  </StyledSection>
);

export default Benefits;
