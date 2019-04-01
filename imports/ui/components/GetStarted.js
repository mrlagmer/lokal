import React from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Header2 } from "./text/Header2";
import { colors } from "./colors";

const StyledGetStarted = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  color: ${colors.teal[5]};
  margin-bottom: 1rem;
`;

const GetStarted = () => (
  <StyledGetStarted>
    <Header2>Ready to get started?</Header2>
    <P>Explore with local guide & get connected with authentic experiences. </P>
    <Button>Get Started</Button>
  </StyledGetStarted>
);

export default GetStarted;