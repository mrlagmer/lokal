import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../Input";
import { colors } from "../colors";
import { ArrowButton } from "../Button";
import media from "../media";

const ExperienceDiv = styled.div`
  justify-content: space-evenly;
  display: flex;
  width: 100%;
  ${media.tablet`justify-content: center;`}
  ${media.phone`flex-direction: cloumn;`}
`;

const Form = styled.form`
  display: flex;
  ${media.phone`display: flex;`}
  ${media.phone`flex-direction: column;`};
`;

const HomeInput = styled(Input)`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  width: 40%;
  ${media.phone`width: 100%;`}
  ${media.phone`margin-left: 0;`}
`;

const ExperienceImageDiv = styled.div`
  display: flex;
`;

const Text = styled.p`
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
`;

const Title = styled.p`
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const BasicForm = props => {
  const [success, setSuccess] = useState(false);
  const { url } = props;
  return (
    <ExperienceDiv path={url}>
      {success ? (
        <h1 css="padding-left: 1rem">Woo! Thanks we will be in touch.</h1>
      ) : (
        <>
          <Formik
            initialValues={{ email: "", name: "", title: "" }}
            validationSchema={EmailSchema}
            onSubmit={(values, { setSubmitting }) => {
              Meteor.call(
                "slack.sendForm",
                {
                  name: values.name,
                  email: values.email,
                  title: "Basic Form Submission - Homepage"
                },
                (err, res) => {
                  if (err) {
                    console.log(err);
                  } else {
                    setSubmitting(false);
                    setSuccess(true);
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
              <Form onSubmit={handleSubmit}>
                <HomeInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  placeholder="Your name"
                  css="margin-left:0"
                />
                <HomeInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                />
                <div>
                  <ArrowButton
                    type="submit"
                    disabled={isSubmitting}
                  ></ArrowButton>
                </div>

                {errors.email && touched.email && errors.email}
              </Form>
            )}
          </Formik>
        </>
      )}
    </ExperienceDiv>
  );
};
export default BasicForm;
