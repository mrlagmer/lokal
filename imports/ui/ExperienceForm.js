import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import Experiences from "./Experiences";

const createExperience = gql`
  mutation createExperience(
    $name: String!
    $location: String!
    $length: Int!
    $language: String!
    $description: String!
    $featured: Boolean!
    $includes: String
    $bring: String
  ) {
    createExperience(
      name: $name
      location: $location
      length: $length
      language: $language
      description: $description
      featured: $featured
      includes: $includes
      bring: $bring
    ) {
      _id
      name
      location
      length
      language
      description
      featured
      includes
      bring
    }
  }
`;

const ExperiencesQuery = gql`
  {
    experiences {
      _id
      name
      location
      length
      language
      description
      featured
      includes
      bring
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
                createExperience({
                  variables: {
                    name: nameInput.value,
                    location: locationInput.value,
                    length: lengthInput.value,
                    language: languageInput.value,
                    description: descriptionInput.value,
                    featured: featuredInput.value,
                    includes: includesInput.value,
                    bring: bringInput.value
                  }
                })
                  .then(() => {
                    nameInput.value = "";
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }}
            >
              <input
                type="text"
                ref={node => {
                  nameInput = node;
                }}
              />
              <input
                type="text"
                ref={node => {
                  locationInput = node;
                }}
              />
              <input
                type="number"
                ref={node => {
                  lengthInput = node;
                }}
              />
              <input
                type="text"
                ref={node => {
                  languageInput = node;
                }}
              />
              <input
                type="text"
                ref={node => {
                  descriptionInput = node;
                }}
              />
              <input
                type="checkbox"
                ref={node => {
                  featuredInput = node;
                }}
              />
              <input
                type="text"
                ref={node => {
                  includesInput = node;
                }}
              />
              <input
                type="text"
                ref={node => {
                  bringInput = node;
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
