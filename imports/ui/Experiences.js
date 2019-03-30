import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

const deleteExperience = gql`
  mutation deleteExperience($_id: String!) {
    deleteExperience(_id: $_id) {
      _id
    }
  }
`;

const EXPERIENCESQUERY = gql`
  {
    experiences {
      _id
      name
    }
  }
`;

const Experiences = () => (
  <Query query={EXPERIENCESQUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <ul>
          {data.experiences.map(experience => (
            <Mutation
              mutation={deleteExperience}
              key={experience._id}
              variables={{ _id: experience._id }}
              refetchQueries={({ data: { deleteExperience } }) => [
                { query: EXPERIENCESQUERY }
              ]}
            >
              {(deleteExperience, { loading, error }) => (
                <li key={experience._id}>
                  {experience.name}
                  <button onClick={deleteExperience}>Delete</button>
                </li>
              )}
            </Mutation>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default Experiences;
