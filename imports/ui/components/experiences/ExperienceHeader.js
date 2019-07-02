import React from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  display: flex;
`;

const ImageMain = styled.div`
  flex-shrink: 0;
  margin-top: -130px;
`;

const SecondImageDiv = styled.div`
  align-self: end;
`;

const ImageSecond = styled.img`
  max-height: 545px;
  margin-left: 1rem;
  align-self: end;
`;

const ExperienceHeader = props => {
  const { imageFolder } = props;
  return (
    <ImageDiv>
      <ImageMain>
        <img src={`/images/${imageFolder}/1.jpg`} />
      </ImageMain>
      <SecondImageDiv>
        <ImageSecond src={`/images/${imageFolder}/2.jpg`} />
      </SecondImageDiv>
    </ImageDiv>
  );
};

export default ExperienceHeader;
