import React from "react";
import styled from "styled-components";
import InstagramEmbed from "react-instagram-embed";

import { colors } from "../colors";
import media from "../media";

const StyledFeatured = styled.div`
  margin-top: 8rem;
  background: linear-gradient(to right, ${colors.lgPurpuleRed});
`;

const FeaturedH1 = styled.h1`
  color: white;
  padding-top: 5rem;
  padding-bottom: 7rem;
  padding-left: 4rem;
`;

const GramNormal = styled.div`
  margin-top: -5rem;
  ${media.laptop`display: none`}
`;

const GramMiddle = styled.div`
  margin-top: -7rem;
  ${media.tablet`margin-top: -5rem;`}
`;

const Snaps = () => (
  <section>
    <StyledFeatured>
      <FeaturedH1>Happy Snaps</FeaturedH1>
    </StyledFeatured>
    <div css="display: flex; justify-content: space-around;">
      <GramNormal>
        <InstagramEmbed
          url="https://instagr.am/p/B36oxiHBrEt/"
          maxWidth={300}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </GramNormal>
      <GramMiddle>
        <InstagramEmbed
          url="https://instagr.am/p/B2WVMiYlFXo/"
          maxWidth={300}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </GramMiddle>
      <GramNormal>
        <InstagramEmbed
          url="https://instagr.am/p/B09-1tUhCQg/"
          maxWidth={300}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </GramNormal>
    </div>
  </section>
);

export default Snaps;
