import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql, Query, Mutation } from "react-apollo";

const deleteExperience = gql`
  mutation deleteExperience($_id: String!) {
    deleteExperience(_id: $_id) {
      _id
    }
  }
`;

const ExperiencesQuery = gql`
  {
    experiences {
      _id
      name
    }
  }
`;

class Experiences extends Component {
  render() {
    return (
      <Query query={ExperiencesQuery}>
        {({ loading, error, data }) => {
          return (
            <ul>
              {data.experiences.map(experience => (
                <Mutation
                  mutation={deleteExperience}
                  key={experience._id}
                  variables={{ _id: experience._id }}
                  refetchQueries={({ data: { deleteExperience } }) => [
                    { query: ExperiencesQuery }
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
  }
}

export default Experiences;
