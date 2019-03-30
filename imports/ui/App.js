import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ExperienceForm from "./ExperienceForm";
import Experiences from "./Experiences";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>{data.hi}</h1>
      <Experiences />
    </div>
  );
};

const hiQuery = gql`
  {
    hi
    experiences {
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
