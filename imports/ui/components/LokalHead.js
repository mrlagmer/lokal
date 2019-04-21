import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const StyledLogo = styled.div`
  margin-top: 2rem;
`;

const LokalHead = () => (
  <React.Fragment>
    <StyledLogo>
      <Logo />
    </StyledLogo>
  </React.Fragment>
);

export default LokalHead;
