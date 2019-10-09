import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { colors } from "../colors";
import { Button } from "../Button";
import { Header2 } from "../text/Header2";
import media from "../media";
import SingleExperienceForm from "../forms/SingleExperienceForm";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const ModalStyle = styled.div`
  background-color: #f2f2f2;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, ${colors.lg}) 10;
`;

const BookingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const CostDiv = styled.div`
  ${media.phone`margin-bottom: 1rem;`}
`;

const MaxBookingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.phone`display: block;`}
`;

const Booking = props => {
  const [pax, setPax] = useState(props.minBookings);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div css="margin-top: 3rem">
      <Header2>Book this Experience</Header2>
      <BookingDiv>
        <BookingDivInfo>
          <div css="display: flex; flex-direction: column;">
            <Button onClick={handleOpen}>Book Now</Button>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <ModalStyle>
                <SingleExperienceForm
                  title={`Book ${props.name}`}
                  eventName={props.name}
                />
              </ModalStyle>
            </Fade>
          </Modal>
        </BookingDivInfo>
        {props.minBookings > 0 && (
          <div>
            <p>Minimum Guests Per Booking: {props.minBookings}</p>
            <p>Maximum Guests Per Booking: {props.maxBookings}</p>
          </div>
        )}
      </BookingDiv>
    </div>
  );
};

export default Booking;
