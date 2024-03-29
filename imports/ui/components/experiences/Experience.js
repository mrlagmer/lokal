import React from "react";
import styled from "styled-components";

import { formatCurrency } from "../../tools/General";

const ExperienceDiv = styled.div`
  width: 321px;
  min-height: 380px;
  margin-top: 1rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

const ExperienceImageDiv = styled.div`
  display: flex;
`;

const Text = styled.p`
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
`;

const Title = styled.p`
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Experience = props => (
  <ExperienceDiv>
    <ExperienceImageDiv>
      <div>
        <img src={`images/${props.slug}/listing.jpg`} />
      </div>
    </ExperienceImageDiv>
    <Text>
      {props.type} <i className="fas fa-circle fa-xs" /> {props.location}
    </Text>
    <Title>{props.title}</Title>
  </ExperienceDiv>
);

export default Experience;
