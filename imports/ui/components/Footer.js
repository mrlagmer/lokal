import React from "react";
import styled from "styled-components";

import { colors } from "./colors";
import media from "./media";

const FooterGradient = styled.div`
  padding: 0.5rem;
  background: linear-gradient(to right, ${colors.lg});
`;

const StyledFooter = styled.footer`
  flex-shrink: 0;
`;

const FooterInner = styled.div`
  background: black;
  color: white;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  padding: 4rem 3rem;
  ${media.phone`justify-content: center;`}
`;

const FooterLogo = styled.img`
  height: 175px;
  margin-right: 3rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  margin: 0rem 2rem;
`;

const FooterA = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
`;

const FooterTagLine = styled.h3`
  font-size: 2.2rem;
  color: #399e9a;
  margin-left: auto;
  align-self: center;
  ${media.phone`display:none;`}
`;

const Footer = () => (
  <StyledFooter>
    <FooterGradient />
    <FooterInner>
      <FooterLogo src="/images/logo.svg" />
      <FooterLinks>
        <FooterA href="">Become a Guide</FooterA>
        <FooterA href="">Contact</FooterA>
        <FooterA href="/about">About Us</FooterA>
        <FooterA href="">Privacy & Terms</FooterA>
      </FooterLinks>
      <FooterTagLine>
        Local expertise. <br /> Big on adventure.
      </FooterTagLine>
    </FooterInner>
  </StyledFooter>
);

export default Footer;
