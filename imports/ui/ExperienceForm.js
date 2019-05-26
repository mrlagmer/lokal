import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const createExperience = gql`
  mutation createExperience(
    $name: String!
    $location: String!
    $length: String!
    $language: String!
    $description: String!
    $featured: Boolean!
    $includes: String
    $bring: String
    $slug: String
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
      slug: $slug
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
      slug
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
      slug
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
                    featured: featuredInput.value == "1" ? true : false,
                    includes: includesInput.value,
                    bring: bringInput.value,
                    slug: slugInput.value
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
              <label>Name</label>
              <input
                type="text"
                ref={node => {
                  nameInput = node;
                }}
              />
              <label>Location</label>
              <input
                type="text"
                ref={node => {
                  locationInput = node;
                }}
              />
              <label>Length</label>
              <input
                type="text"
                ref={node => {
                  lengthInput = node;
                }}
              />
              <label>Language</label>
              <input
                type="text"
                ref={node => {
                  languageInput = node;
                }}
              />
              <label>Description</label>
              <textarea
                ref={node => {
                  descriptionInput = node;
                }}
              />
              <label>Featured</label>
              <input
                type="checkbox"
                ref={node => {
                  featuredInput = node;
                }}
                value="1"
              />
              <label>What is included</label>
              <input
                type="text"
                ref={node => {
                  includesInput = node;
                }}
              />
              <label>What to bring</label>
              <input
                type="text"
                ref={node => {
                  bringInput = node;
                }}
              />
              <label>Slug</label>
              <input
                type="text"
                ref={node => {
                  slugInput = node;
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
