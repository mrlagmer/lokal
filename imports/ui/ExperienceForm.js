import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import Experiences from "./Experiences";

const createExperience = gql`
  mutation createExperience($name: String!) {
    createExperience(name: $name) {
      _id
      name
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

const ExperienceForm = () => {
  return (
    <React.Fragment>
      <Mutation
        mutation={createExperience}
        update={(cache, { data: { createExperience } }) => {
          const { experiences } = cache.readQuery({ query: ExperiencesQuery });
          cache.writeQuery({
            query: ExperiencesQuery,
            data: { experiences: experiences.concat([createExperience]) }
          });
        }}
      >
        {(createExperience, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createExperience({ variables: { name: input.value } });
                input.value = "";
              }}
            >
              <input
                type="text"
                ref={node => {
                  input = node;
                }}
              />
              <button onClick={this.submitForm}>Submit</button>
            </form>
          </div>
        )}
      </Mutation>
    </React.Fragment>
  );
};

export default ExperienceForm;
