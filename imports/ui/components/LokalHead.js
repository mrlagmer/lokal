import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import { colors } from "./colors";

const StyledLogo = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 2rem;
`;

const HeadGradient = styled.div`
  padding: 0.5rem;
  background: linear-gradient(to right, ${colors.teal[0]}, ${colors.teal[8]});
`;

const LokalHead = () => (
  <React.Fragment>
    <HeadGradient />
    <StyledLogo>
      <a href="/">
        <Logo />
      </a>
    </StyledLogo>
  </React.Fragment>
);

export default LokalHead;
