import React from "react";
import styled, { keyframes } from "styled-components";

import { colors } from "./colors";

const bounce = keyframes`
from {
  width: 0.1rem;
  height: 0.1rem;
  opacity: 1;
  transform: translate3d(0);
}
to {
  width: 1rem;
  height: 1rem;
  opacity: 0.1;
  transform: translate3d(0, -1rem, 0);
}
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    background: linear-gradient(to right, ${colors.lg});
    border-radius: 50%;
    margin: 5rem 0.5rem;
    animation: ${bounce} 0.6s infinite alternate;
  }
  > span:nth-child(2) {
    animation-delay: 0.2s;
  }
  > span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const LoadPage = () => {
  return (
    <Loading>
      <span />
      <span />
      <span />
    </Loading>
  );
};

export default LoadPage;
