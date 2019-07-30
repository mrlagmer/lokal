import React from "react";
import styled from "styled-components";

import media from "./media";

import { colors } from "./colors";

export const Main = styled.main`
  flex-grow: 1;
  ${media.phone`width: 100%`}
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
    {props.url !== "/" && <HeadGradient />}
    {props.children}
  </StyledAppDiv>
);
