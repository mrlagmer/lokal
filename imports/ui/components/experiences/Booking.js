import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "../colors";
import { Button } from "../Button";
import { Header2 } from "../text/Header2";
import media from "../media";
import { formatCurrency } from "../../tools/General";
import EmbedBooking from "./EmbedBooking";
import Input from "../Input";

const BookingDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 2rem;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, ${colors.lg}) 10;
`;

const BookingDivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.phone`flex-direction:column;`}
`;

const Booking = props => {
  const [pax, setPax] = useState(props.minBookings);
  return (
    <div css="margin-top: 3rem">
      <Header2>Book this Experience</Header2>
      <BookingDiv>
        <BookingDivInfo>
          <div>
            <p css="font-size: 1rem;">{props.available}</p>
            {props.cost > 0 && (
              <p>USD {formatCurrency(props.cost).us} Per Person</p>
            )}
            {props.cost > 0 && (
              <p>~{formatCurrency(props.cost).au} Per Person</p>
            )}
            {props.cost > 0 && (
              <p>~{formatCurrency(props.cost).ph} Per Person</p>
            )}
          </div>
          {props.takingBookings ? (
            <EmbedBooking bookingId={props.bookingId} pax={pax} />
          ) : (
            <Button as="a" href="mailto:help@lokal.ly">
              Enquire Now
            </Button>
          )}
        </BookingDivInfo>
        <p css="margin-top: 1rem;">
          Minimum Guests Per Booking: {props.minBookings}
        </p>
        <div css="display: flex; justify-content: space-between;">
          <p css="align-self: center; margin-right: 1rem;">Total Bookings:</p>
          <Input
            css="margin-top: 1rem; border-color: #b5b5b5;"
            type="number"
            min={props.minBookings}
            max="10"
            defaultValue={props.minBookings}
            onChange={event => setPax(event.target.value)}
          />
        </div>
      </BookingDiv>
    </div>
  );
};

export default Booking;
