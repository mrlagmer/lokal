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
  align-self: center;
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

const SocialDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  font-size: 1rem;
  margin-right: 1.5rem;
  color: white;
`;

const Footer = () => (
  <StyledFooter>
    <FooterGradient />
    <FooterInner>
      <FooterLogo src="/images/lokalfoot.png" />
      <FooterLinks>
        <FooterA href="https://docs.google.com/forms/d/e/1FAIpQLSePymXwG9WpNk87bSKd1pRk34vxTPQf-mVFAn2bK74rGWgYIg/viewform">
          Become a Guide
        </FooterA>
        <FooterA href="https://docs.google.com/forms/d/1eX5NLRbe3_d1W-I-HJrCPhMJo_Q_9QMdjpyCzahA7mc/viewform">
          Contact
        </FooterA>
        <FooterA href="/about">About Us</FooterA>
        <FooterA href="/privacy">Privacy Policy</FooterA>
        <FooterA href="/cancelation-policy">Cancelation Policy</FooterA>
        <FooterA href="/code-of-conduct">Code of Conduct</FooterA>
        <FooterA href="/terms-conditions">Terms & Conditions</FooterA>
      </FooterLinks>
      <FooterTagLine>
        <p>
          Think globally, <br /> Travel lokally.
        </p>
        <SocialDiv>
          <SocialLink href="https://www.facebook.com/explore.lokally/">
            <i class="fab fa-facebook-f fa-lg" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/explore.lokally/">
            <i class="fab fa-instagram fa-lg" />
          </SocialLink>
        </SocialDiv>
      </FooterTagLine>
    </FooterInner>
  </StyledFooter>
);

export default Footer;
