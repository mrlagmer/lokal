import React from "react";
import styled from "styled-components";

import { colors } from "./colors";
import { fonts } from "./text/fonts";
import Input from "./Input";

const StyledEmailForm = styled.section`
  display: flex;
  margin: 9rem;
`;

const ImageDiv = styled.div`
  background: linear-gradient(to top, ${colors.teal[5]}, ${colors.aqua[5]});
  width: 335px;
  height: 503px;
`;

const Image = styled.img`
  margin-left: -2rem;
  margin-top: -2rem;
`;

const EmailFormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: auto;
  width: 50%;
`;

const EmailP = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const EmailText = styled.p`
  line-height: 0.5 * ${fonts.lineHeight};
  color: ${colors.teal[5]};
  width: 50%;
  margin-bottom: 1rem;
`;

const EmailForm = () => (
  <StyledEmailForm>
    <ImageDiv>
      <Image src="/images/wine.jpg" />
    </ImageDiv>
    <div>
      <img src="/images/logo_repeat.png" />
    </div>
    <EmailFormElement>
      <EmailP>Stay in the Loop.</EmailP>
      <EmailText>
        Get the latest updates on new experiences, travel stories & special
        offers exclusive to our newsletter.
      </EmailText>
      <Input type="email" required placeholder="Email Address" />
    </EmailFormElement>
  </StyledEmailForm>
);

export default EmailForm;
