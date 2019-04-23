import React from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Header2 } from "./text/Header2";
import { colors } from "./colors";
import media from "./media";

const StyledGetStarted = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
  ${media.phone`justify-content: center;`}
`;

const P = styled.p`
  font-size: 1.5rem;
  color: ${colors.teal[5]};
  font-weight: bold;
  margin-bottom: 2rem;
`;

const GetStarted = () => (
  <StyledGetStarted>
    <Header2>Ready to get started?</Header2>
    <P>Explore with local guide & get connected with authentic experiences. </P>
    <Button>Get Started</Button>
  </StyledGetStarted>
);

export default GetStarted;
