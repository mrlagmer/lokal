import React from "react";
import styled from "styled-components";

const FooterGradient = styled.div`
  padding: 0.5rem;
  background: linear-gradient(
    to right,
    #399e9a,
    #639fb8,
    #928fc3,
    #b583be,
    #cd7aa8,
    #e67189,
    #f86b70
  );
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
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  margin: 0rem 2rem;
`;

const FooterA = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
`;

const FooterTagLine = styled.h3`
  font-size: 2rem;
  color: #399e9a;
  margin-left: auto;
`;

const Footer = () => (
  <StyledFooter>
    <FooterGradient />
    <FooterInner>
      <FooterLinks>
        <FooterA href="">Find An Experience</FooterA>
        <FooterA href="">My Account</FooterA>
        <FooterA href="">Contact</FooterA>
      </FooterLinks>
      <FooterLinks>
        <FooterA href="">Become a Guide</FooterA>
        <FooterA href="">About Us</FooterA>
        <FooterA href="">Help</FooterA>
      </FooterLinks>
      <FooterTagLine>
        Local expertise. <br /> Big on adventure.
      </FooterTagLine>
    </FooterInner>
  </StyledFooter>
);

export default Footer;
