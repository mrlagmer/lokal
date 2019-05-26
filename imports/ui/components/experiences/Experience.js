import React from "react";
import styled from "styled-components";

const ExperienceDiv = styled.div`
  width: 321px;
`;

const ExperienceImageDiv = styled.div`
  display: flex;
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
`;

const Title = styled.p`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Experience = props => (
  <ExperienceDiv>
    <ExperienceImageDiv>
      <img src={`images/${props.slug}/listing.jpg`} />
    </ExperienceImageDiv>
    <Text>
      {props.type} <i class="fas fa-circle fa-xs" /> {props.location}
    </Text>
    <Title>{props.title}</Title>
    <Text>{props.price}</Text>
  </ExperienceDiv>
);

export default Experience;
