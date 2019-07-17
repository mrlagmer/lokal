import React from "react";
import styled from "styled-components";

import { colors } from "../colors";
import { Button } from "../Button";
import { Header2 } from "../text/Header2";
import media from "../media";
import { formatCurrency } from "../../tools/General";

const BookingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 2rem;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, ${colors.lg}) 10;
  ${media.phone`flex-direction:column;`}
`;

const Booking = props => {
  return (
    <div css="margin-top: 3rem">
      <Header2>Book this Experience</Header2>
      <BookingDiv>
        <div>
          <p css="font-size: 1rem;">{props.available}</p>
          {props.cost > 0 && <p>{formatCurrency(props.cost)} Per Person</p>}
        </div>
        {props.takingBookings ? (
          <Button>Book Now</Button>
        ) : (
          <Button as="a" href="mailto:help@lokal.ly">
            Enquire Now
          </Button>
        )}
      </BookingDiv>
    </div>
  );
};

export default Booking;
