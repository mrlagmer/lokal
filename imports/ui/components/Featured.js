import React from "react";
import styled from "styled-components";

import { colors } from "./colors";

const StyledFeatured = styled.div`
  margin-top: 8rem;
  background: linear-gradient(to right, ${colors.lgPurpuleRed});
`;

const FeaturedH1 = styled.h1`
  color: white;
  padding-top: 5rem;
  padding-bottom: 7rem;
  padding-left: 4rem;
`;

const Featured = () => (
  <StyledFeatured>
    <FeaturedH1>Featured Experiences</FeaturedH1>
  </StyledFeatured>
);

export default Featured;
