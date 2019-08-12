import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../Input";
import { colors } from "../colors";
import { Button } from "../Button";

const ExperienceDiv = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 380px;
  margin-top: 1rem;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, ${colors.lg}) 10;
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

const ExperienceForm = props => {
  const [success, setSuccess] = useState(false);
  return (
    <ExperienceDiv>
      {success ? (
        <h1 css="padding-left: 1rem">Woo! Thanks we will be in touch.</h1>
      ) : (
        <>
          <Title>Can't find what you are looking for?</Title>
          <Title css="font-size: 1.5rem">Build your own team experience</Title>
          <Formik
            initialValues={{ email: "", name: "", title: "" }}
            validationSchema={EmailSchema}
            onSubmit={(values, { setSubmitting }) => {
              Meteor.call(
                "slack.sendForm",
                {
                  title: values.title,
                  name: values.name,
                  email: values.email
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
              <form onSubmit={handleSubmit}>
                <div css="padding-left: 1rem">
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    css="margin-left: 0.5rem"
                    name="title"
                    placeholder="Name your experience"
                  />
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    css="margin-left: 0.5rem"
                    name="name"
                    placeholder="Your name"
                  />
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                    css="margin-left: 0.5rem"
                    name="email"
                    required
                    placeholder="Your email"
                  />
                </div>
                <Button
                  css="margin-left: 1rem; margin-top: 1rem"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </Button>
                {errors.email && touched.email && errors.email}
              </form>
            )}
          </Formik>
        </>
      )}
    </ExperienceDiv>
  );
};
export default ExperienceForm;
