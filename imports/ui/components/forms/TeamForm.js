import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../Input";
import { colors } from "../colors";
import { Button } from "../Button";
import media from "../media";

const ExperienceDiv = styled.div`
  ${props =>
    props.path == "/"
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1rem 0;
          padding: 3rem 4rem;
          ${media.phone`justify-content: center;`}
        `
      : css`
          justify-content: space-evenly;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 380px;
          margin: 1rem 0;
        `}
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

const TeamForm = props => {
  const [success, setSuccess] = useState(false);
  const { url } = props;
  return (
    <ExperienceDiv path={url}>
      {success ? (
        <h1 css="padding-left: 1rem">Woo! Thanks we will be in touch.</h1>
      ) : (
        <>
          <Title>{props.title}</Title>
          <Formik
            initialValues={{ email: "", name: "", roles: "" }}
            validationSchema={EmailSchema}
            onSubmit={(values, { setSubmitting }) => {
              Meteor.call(
                "slackTeam.sendForm",
                {
                  roles: values.roles,
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
              <form
                onSubmit={handleSubmit}
                css={`
                  ${url == "/" ? "display: flex; flex-direction: column;" : ""}
                `}
              >
                <div css="padding: 1rem">
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    css="margin-left:0.5rem; margin-bottom: 0.5rem"
                    name="name"
                    placeholder="Your name"
                  />
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                    css="margin:0 0.5rem; margin-bottom: 0.5rem"
                    name="email"
                    required
                    placeholder="Your email"
                  />
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.roles}
                    css="margin-left: 0.5rem; margin-bottom: 0.5rem"
                    name="roles"
                    placeholder="Roles"
                  />
                </div>
                <Button
                  css={`
                    margin-left: 1rem;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    ${url == "/" ? "align-self: center;" : ""}
                  `}
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
export default TeamForm;
