import React from "react";
import styled from "styled-components";

import { colors } from "../colors";
import { Button } from "../Button";
import { Header2 } from "../text/Header2";

const BookingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 2rem;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, ${colors.lg}) 10;
`;

const Booking = props => {
  return (
    <div css="margin-top: 3rem">
      <Header2>Book this Experience</Header2>
      <BookingDiv>
        <p css="font-size: 1rem;">{props.available}</p>
        <Button>Book Now</Button>
      </BookingDiv>
    </div>
  );
};

export default Booking;
