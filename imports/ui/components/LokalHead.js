import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import { colors } from "./colors";

const StyledLogo = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  margin-top: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  margin-left: auto;
`;

const MenuToggle = styled.div`
  align-self: center;
  right: 1rem;
  display: block;
  position: relative;
  z-index: 1;
  user-select: none;
`;

const MenuToggleInput = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
  :checked ~ ul {
    transform: none;
  }

  :checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: white;
  }

  :checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  :checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`;

const MenuToggleSpan = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: black;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  :first-child {
    transform-origin: 0% 0%;
  }
  :nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;

const Menu = styled.ul`
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -250px;
  padding: 50px;
  padding-top: 125px;
  height: 100vh;
  background-color: ${colors.black[0]};
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(0, -150%);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`;

const MenuItems = styled.a`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  & li {
    margin-top: 1rem;
  }
  ::after {
    content: " ";
    display: block;
    position: absolute;
    margin-top: 10px;
    height: 1px;
    background: #6a6a6b;
    width: 60%;
  }
  :last-child:after {
    content: "" !important;
    display: none !important;
  }
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

const LokalHead = () => (
  <React.Fragment>
    <StyledLogo>
      <a href="/">
        <Logo />
      </a>
      <Nav role="navigation">
        <MenuToggle>
          <MenuToggleInput type="checkbox" />
          <MenuToggleSpan />
          <MenuToggleSpan />
          <MenuToggleSpan />
          <Menu>
            <MenuItems href="/experiences">
              <li>Experiences</li>
            </MenuItems>
            <MenuItems href="https://docs.google.com/forms/d/e/1FAIpQLSePymXwG9WpNk87bSKd1pRk34vxTPQf-mVFAn2bK74rGWgYIg/viewform">
              <li>Become a Guide</li>
            </MenuItems>
            <MenuItems href="/alamat">
              <li>Blog (Alamat)</li>
            </MenuItems>
            <MenuItems href="/about">
              <li>About Us</li>
            </MenuItems>
            <MenuItems href="https://docs.google.com/forms/d/1eX5NLRbe3_d1W-I-HJrCPhMJo_Q_9QMdjpyCzahA7mc/viewform">
              <li>Contact</li>
            </MenuItems>
            <SocialDiv>
              <SocialLink href="https://www.facebook.com/explore.lokally/">
                <i className="fab fa-facebook-f fa-lg" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/explore.lokally/">
                <i className="fab fa-instagram fa-lg" />
              </SocialLink>
            </SocialDiv>
          </Menu>
        </MenuToggle>
      </Nav>
    </StyledLogo>
  </React.Fragment>
);

export default LokalHead;
