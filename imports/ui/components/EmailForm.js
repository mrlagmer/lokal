import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import { colors } from "./colors";
import { fonts } from "./text/fonts";
import Input from "./Input";
import { ArrowButton } from "./Button";

const StyledEmailForm = styled.section`
  display: flex;
  margin: 9rem;
`;

const ImageDiv = styled.div`
  background: linear-gradient(to top, ${colors.teal[5]}, ${colors.aqua[5]});
  width: 335px;
  height: 503px;
`;

const Image = styled.img`
  margin-left: -2rem;
  margin-top: -2rem;
`;

const EmailFormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: auto;
  width: 50%;
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

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const EmailForm = () => (
  <StyledEmailForm>
    <ImageDiv>
      <Image src="/images/wine.jpg" />
    </ImageDiv>
    <div>
      <img src="/images/logo_repeat.png" />
    </div>
    <Formik
      initialValues={{ email: "" }}
      validationSchema={EmailSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
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
            Get the latest updates on new experiences, travel stories & special
            offers exclusive to our newsletter.
          </EmailText>
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
        </EmailFormElement>
      )}
    </Formik>
  </StyledEmailForm>
);

export default EmailForm;
