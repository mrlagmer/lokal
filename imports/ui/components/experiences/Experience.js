import React from "react";
import styled from "styled-components";

const ExperienceDiv = styled.div`
  width: 321px;
  margin-top: 1rem;
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

const formatCurrency = num => {
  const dollars = num / 100;
  return dollars.toLocaleString("au-AU", {
    style: "currency",
    currency: "AUD"
  });
};

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
