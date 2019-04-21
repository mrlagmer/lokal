import React from "react";
import styled from "styled-components";

import { colors } from "./colors";

const StyledFeatured = styled.div`
  margin-top: 4rem;
  background: linear-gradient(to right, ${colors.lgPurpuleRed});
`;

const H1 = styled.h1`
  color: white;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 4rem;
`;

const PagesTitle = props => (
  <StyledFeatured>
    <H1>{props.title}</H1>
  </StyledFeatured>
);

export default PagesTitle;
