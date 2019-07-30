import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import styled from "styled-components";

import useUser from "./hooks/useUser";

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
`;

const updateExperience = gql`
  mutation updateExperience(
    $id: String!
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
  ) {
    updateExperience(
      _id: $id
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
    }
  }
`;

const EXPERIENCEQUERY = gql`
  query Experience($id: String!) {
    experience(_id: $id) {
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
    }
  }
`;

const EditExperienceForm = props => {
  const id = props.match.params.id ? props.match.params.id : "";
  const { user } = useUser();
  return (
    <React.Fragment>
      {user.admin ? (
        <Query query={EXPERIENCEQUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            const {
              name,
              location,
              length,
              language,
              description,
              featured,
              includes,
              bring,
              imagesFolder,
              type,
              cost,
              minBookings,
              maxBookings,
              bookingId,
              guideId,
              times,
              takingBookings
            } = data.experience ? data.experience : "undefined";

            return (
              <Mutation mutation={updateExperience}>
                {(updateExperience, { data }) => (
                  <FormDiv
                    onSubmit={e => {
                      e.preventDefault();
                      updateExperience({
                        variables: {
                          id: id,
                          name: nameInput.value,
                          location: locationInput.value,
                          length: lengthInput.value,
                          language: languageInput.value,
                          description: descriptionInput.value,
                          featured: featuredInput.value == "1" ? true : false,
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
                          takingBookings:
                            takingBookingsInput.value == "1" ? true : false
                        }
                      })
                        .then(() => {})
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
                      defaultValue={name}
                    />
                    <label>Location</label>
                    <input
                      type="text"
                      ref={node => {
                        locationInput = node;
                      }}
                      defaultValue={location}
                    />
                    <label>Length</label>
                    <input
                      type="text"
                      ref={node => {
                        lengthInput = node;
                      }}
                      defaultValue={length}
                    />
                    <label>Language</label>
                    <input
                      type="text"
                      ref={node => {
                        languageInput = node;
                      }}
                      defaultValue={language}
                    />
                    <label>Description</label>
                    <textarea
                      ref={node => {
                        descriptionInput = node;
                      }}
                      defaultValue={description}
                    />
                    <label>Featured</label>
                    <input
                      type="checkbox"
                      ref={node => {
                        featuredInput = node;
                      }}
                      value="1"
                      defaultChecked={featured}
                    />
                    <label>What is included</label>
                    <input
                      type="text"
                      ref={node => {
                        includesInput = node;
                      }}
                      defaultValue={includes}
                    />
                    <label>What to bring</label>
                    <input
                      type="text"
                      ref={node => {
                        bringInput = node;
                      }}
                      defaultValue={bring}
                    />
                    <label>Image Folder</label>
                    <input
                      type="text"
                      ref={node => {
                        slugInput = node;
                      }}
                      defaultValue={imagesFolder}
                    />
                    <label>Type</label>
                    <input
                      type="text"
                      ref={node => {
                        typeInput = node;
                      }}
                      defaultValue={type}
                    />
                    <label>Cost</label>
                    <input
                      type="number"
                      ref={node => {
                        costInput = node;
                      }}
                      defaultValue={cost}
                    />
                    <label>Minimum Bookings</label>
                    <input
                      type="number"
                      ref={node => {
                        minBookingInput = node;
                      }}
                      defaultValue={minBookings}
                    />
                    <label>Maximum Bookings</label>
                    <input
                      type="number"
                      ref={node => {
                        maxBookingInput = node;
                      }}
                      defaultValue={maxBookings}
                    />
                    <label>Booking ID</label>
                    <input
                      type="number"
                      ref={node => {
                        bookingIdInput = node;
                      }}
                      defaultValue={bookingId}
                    />
                    <label>Guide ID</label>
                    <input
                      type="text"
                      ref={node => {
                        guideIdInput = node;
                      }}
                      defaultValue={guideId}
                    />
                    <label>Times</label>
                    <input
                      type="text"
                      ref={node => {
                        timesInput = node;
                      }}
                      defaultValue={times}
                    />
                    <label>Taking Bookings</label>
                    <input
                      type="checkbox"
                      ref={node => {
                        takingBookingsInput = node;
                      }}
                      value="1"
                      defaultChecked={takingBookings}
                    />
                    <button onClick={this.submitForm}>Submit</button>
                  </FormDiv>
                )}
              </Mutation>
            );
          }}
        </Query>
      ) : (
        <h1>404 Page Not Found</h1>
      )}
    </React.Fragment>
  );
};

export default EditExperienceForm;
