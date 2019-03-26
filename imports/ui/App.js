import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ExperienceForm from "./ExperienceForm";

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>{data.hi}</h1>
      <ExperienceForm />
      <ul>
        {data.experiences.map(experience => (
          <li key={experience._id}>{experience.name}</li>
        ))}
      </ul>
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
