import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import styled from "styled-components";

import useUser from "./hooks/useUser";

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
`;

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
    $imagesFolder: String
    $type: String
    $cost: Int
    $minBookings: Int
    $maxBookings: Int
    $bookingId: Int
    $guideId: String
    $times: String
    $takingBookings: Boolean
    $experienceType: ExperienceType
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
      imagesFolder: $imagesFolder
      type: $type
      cost: $cost
      minBookings: $minBookings
      maxBookings: $maxBookings
      bookingId: $bookingId
      guideId: $guideId
      times: $times
      takingBookings: $takingBookings
      experienceType: $experienceType
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
      imagesFolder
      type
      cost
      minBookings
      maxBookings
      bookingId
      guideId
      times
      takingBookings
      experienceType
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
      imagesFolder
      type
      cost
      minBookings
      maxBookings
      bookingId
      guideId
      times
      takingBookings
      experienceType
    }
  }
`;

const GuidesQuery = gql`
  {
    guides {
      name
      bio
      _id
    }
  }
`;

const ExperienceForm = props => {
  const { user } = useUser();
  return (
    <React.Fragment>
      {user.admin ? (
        <Mutation
          mutation={createExperience}
          update={(cache, { data: { createExperience } }) => {
            const { experiences } = cache.readQuery({
              query: ExperiencesQuery
            });
            cache.writeQuery({
              query: ExperiencesQuery,
              data: {
                experiences: experiences.concat([createExperience])
              }
            });
          }}
        >
          {(createExperience, { data }) => (
            <FormDiv
              onSubmit={e => {
                e.preventDefault();
                createExperience({
                  variables: {
                    name: nameInput.value,
                    location: locationInput.value,
                    length: lengthInput.value,
                    language: languageInput.value,
                    description: descriptionInput.value,
                    featured: featuredInput.checked,
                    includes: includesInput.value,
                    bring: bringInput.value,
                    imagesFolder: slugInput.value,
                    type: typeInput.value,
                    cost: Number(costInput.value),
                    minBookings: Number(minBookingInput.value),
                    maxBookings: Number(maxBookingInput.value),
                    bookingId: Number(bookingIdInput.value),
                    guideId: guideIdInput.value,
                    times: timesInput.value,
                    takingBookings: takingBookingsInput.checked,
                    experienceType: experienceTypeInput.value
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
              <label>Image Folder</label>
              <input
                type="text"
                ref={node => {
                  slugInput = node;
                }}
              />
              <label>Type</label>
              <input
                type="text"
                ref={node => {
                  typeInput = node;
                }}
              />
              <label>Cost</label>
              <input
                type="number"
                ref={node => {
                  costInput = node;
                }}
              />
              <label>Minimum Bookings</label>
              <input
                type="number"
                ref={node => {
                  minBookingInput = node;
                }}
              />
              <label>Maximum Bookings</label>
              <input
                type="number"
                ref={node => {
                  maxBookingInput = node;
                }}
              />
              <label>Booking ID</label>
              <input
                type="number"
                ref={node => {
                  bookingIdInput = node;
                }}
              />
              <Query query={GuidesQuery}>
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error :(</p>;
                  return (
                    <>
                      <label>Guide ID</label>
                      <select
                        ref={node => {
                          guideIdInput = node;
                        }}
                      >
                        {data.guides.map(guide => (
                          <option key={guide._id} value={guide._id}>
                            {guide.name}
                          </option>
                        ))}
                      </select>
                    </>
                  );
                }}
              </Query>
              <label>Times</label>
              <input
                type="text"
                ref={node => {
                  timesInput = node;
                }}
              />
              <label>Taking Bookings</label>
              <input
                type="checkbox"
                ref={node => {
                  takingBookingsInput = node;
                }}
                value="1"
              />
              <label>Experience Type</label>
              <select
                ref={node => {
                  experienceTypeInput = node;
                }}
              >
                <option value="experience">experience</option>
                <option value="inHouse">inHouse</option>
              </select>
              <button onClick={this.submitForm}>Submit</button>
            </FormDiv>
          )}
        </Mutation>
      ) : (
        <h1>404 Page Not Found</h1>
      )}
    </React.Fragment>
  );
};

export default ExperienceForm;
