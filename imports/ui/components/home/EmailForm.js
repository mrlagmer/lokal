import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import { colors } from "../colors";
import { fonts } from "../text/fonts";
import Input from "../Input";
import { ArrowButton } from "../Button";
import media from "../media";
import { common } from "../Common";

const StyledEmailForm = styled.section`
  display: flex;
  justify-content: space-evenly;
  max-width: 1127px;
  margin: ${common.margintb} auto;
  ${media.tablet`flex-direction:column;`}
  ${media.phone`margin: 4rem 0;`}
`;

const ImageDiv = styled.div`
  background: linear-gradient(to top, ${colors.teal[5]}, ${colors.aqua[5]});
  width: 335px;
  height: 503px;
  ${media.desktop`height:433px;`}
  ${media.phone`height:333px;`}
`;

const FlexDiv = styled.div`
  display: flex;
  ${media.tablet`justify-content: center;`}
`;

const Image = styled.img`
  margin-left: -2rem;
  margin-top: -2rem;
`;

const EmailFormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 450px;
  padding: 0 2rem;
  ${media.tablet`margin-top:3rem;`}
  ${media.phone`width: 100%;`}
  ${media.phone`margin-top:11rem;`}
`;

const EmailP = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const EmailText = styled.p`
  line-height: 0.5 * ${fonts.lineHeight};
  color: ${colors.teal[5]};
  width: 50%;
  margin-bottom: 1rem;
`;

const SocialDiv = styled.div`
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  margin-right: 1.5rem;
  color: ${colors.teal[5]};
`;

const SocialLinkInsta = styled(SocialLink)`
  color: ${colors.red[5]};
`;

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { success: false };
  }

  render() {
    return (
      <StyledEmailForm>
        <FlexDiv>
          <ImageDiv>
            <Image src="/images/nathaniel-sison-wheel.jpg" />
          </ImageDiv>
          <div>
            <img src="/images/lokal4Xb.png" width="144" height="265" />
          </div>
        </FlexDiv>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={EmailSchema}
          onSubmit={(values, { setSubmitting }) => {
            Meteor.call(
              "mailChimp.addEmail",
              {
                email: values.email
              },
              (err, res) => {
                if (err) {
                  alert(err);
                } else {
                  setSubmitting(false);
                  this.setState({
                    success: true
                  });
                }
              }
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <EmailFormElement onSubmit={handleSubmit}>
              <EmailP>Stay in the Loop.</EmailP>
              <EmailText>
                Get the latest updates on new experiences, travel stories &
                special offers exclusive to our newsletter.
              </EmailText>
              {this.state.success ? (
                <h1>Woo! Thanks we will be in touch.</h1>
              ) : (
                <div>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    width="60%"
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                  />
                  <ArrowButton type="submit" disabled={isSubmitting} />
                  {errors.email && touched.email && errors.email}
                </div>
              )}
              <SocialDiv>
                <SocialLink href="https://www.facebook.com/explore.lokally/">
                  <i className="fab fa-facebook-f fa-lg" />
                </SocialLink>
                <SocialLinkInsta href="https://www.instagram.com/explore.lokally/">
                  <i className="fab fa-instagram fa-lg" />
                </SocialLinkInsta>
              </SocialDiv>
            </EmailFormElement>
          )}
        </Formik>
      </StyledEmailForm>
    );
  }
}

export default EmailForm;
