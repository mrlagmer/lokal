import React from "react";
import styled from "styled-components";

import { colors } from "./colors";

export const Main = styled.main`
  flex-grow: 1;
`;

export const StyledAppDiv = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const HeadGradient = styled.div`
  padding: 0.5rem;
  background: linear-gradient(to right, ${colors.teal[0]}, ${colors.teal[8]});
`;

export const AppDiv = props => (
  <StyledAppDiv>
    <HeadGradient />
    {props.children}
  </StyledAppDiv>
);
