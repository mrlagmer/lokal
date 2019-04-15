import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  background: black;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 1rem 4rem;
  border: 2px solid black;
  text-transform: uppercase;
`;

export const StyledArrowButton = styled(Button)`
  padding: 0.5rem 2rem;
  border: 2px solid black;
`;

export const ArrowButton = () => (
  <StyledArrowButton>
    <i className="fas fa-caret-right fa-2x" />
  </StyledArrowButton>
);
