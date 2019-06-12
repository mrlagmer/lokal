import React from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  display: flex;
`;

const ImageMain = styled.div`
  flex-shrink: 0;
  margin-top: -130px;
`;

const ExperienceHeader = props => {
  const { imageFolder } = props;
  return (
    <ImageDiv>
      <ImageMain>
        <img src={`/images/${imageFolder}/1.jpg`} />
      </ImageMain>
      <div>
        <img src={`/images/${imageFolder}/2.jpg`} />
      </div>
    </ImageDiv>
  );
};

export default ExperienceHeader;
