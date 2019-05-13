import React from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Header2 } from "./text/Header2";
import { colors } from "./colors";
import media from "./media";
import { common } from "./Common";

const StyledHeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${common.margintb} 0;
  padding: 3rem 4rem;
  ${media.phone`justify-content: center;`}
`;

const P = styled.p`
  font-size: 1.5rem;
  color: ${colors.teal[5]};
  font-weight: bold;
  margin-bottom: 2rem;
`;

const HeaderSection = props => (
  <StyledHeaderSection>
    <Header2>{props.header}</Header2>
    <P>{props.p}</P>
    <Button as="a" href={props.href}>
      {props.button_text}
    </Button>
  </StyledHeaderSection>
);

export default HeaderSection;
