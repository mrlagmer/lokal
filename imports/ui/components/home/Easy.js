import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { Header2 } from "../text/Header2";
import { colors } from "../colors";
import media from "../media";
import { common } from "../Common";
import { Button } from "../Button";
import TeamForm from "../forms/TeamForm";

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

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  margin: ${common.margintb} 0;
  padding: 3rem 4rem;
  ${media.tablet`flex-direction: column;`}
  ${media.phone`justify-content: center;`}
`;

const P = styled.p`
  font-size: 1.5rem;
  color: ${colors.black[5]};
  font-weight: bold;
  margin-bottom: 2rem;
`;

const EasyOl = styled.ol`
  list-style: number;
  list-style-position: inside;
  margin-bottom: 1rem;
`;

const ImageDiv = styled.div`
  margin-right: 2rem;
  ${media.tablet`margin-right: 0;`}
`;

const Easy = props => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledSection>
      <ImageDiv>
        <img src="/images/bigeasy.jpg" />
      </ImageDiv>
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
            <TeamForm title={`Get Started`} />
          </ModalStyle>
        </Fade>
      </Modal>
      <div css="display: flex; flex-direction: column;">
        <Header2>Easy As 1,2,3</Header2>
        <P>We've designed our process to save you time, money & uncertanty:</P>
        <EasyOl>
          <li>Send us your name, email, team size & budget.</li>
          <li>
            We'll get in touch to get a quick rundown of the likes & dislikes of
            your team.
          </li>
          <li>
            We'll come back to you with a range of fully customised options
            desinged to delight you & your team.
          </li>
        </EasyOl>
        <Button onClick={handleOpen}>Get Started</Button>
      </div>
    </StyledSection>
  );
};

export default Easy;
