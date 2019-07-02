import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import styled from "styled-components";

import useUser from "./hooks/useUser";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const createGuide = gql`
  mutation createGuide($name: String!, $bio: String) {
    createGuide(name: $name, bio: $bio) {
      _id
      name
      bio
    }
  }
`;

const GUIDEQUERY = gql`
  {
    guides {
      _id
      name
      bio
    }
  }
`;

const GuideForm = () => {
  const { user } = useUser();
  return (
    <React.Fragment>
      {user.admin ? (
        <Mutation
          mutation={createGuide}
          update={(cache, { data: { createGuide } }) => {
            const { guides } = cache.readQuery({
              query: GUIDEQUERY
            });
            cache.writeQuery({
              query: GUIDEQUERY,
              data: { guides: guides.concat([createGuide]) }
            });
          }}
        >
          {(createGuide, { data }) => (
            <Form
              onSubmit={e => {
                e.preventDefault();
                console.log(`This is BUG`);
                createGuide({
                  variables: {
                    name: nameInput.value,
                    bio: bioInput.value
                  }
                })
                  .then(() => {
                    nameInput.value = "";
                    bioInput.value = "";
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
              <label>Bio</label>
              <textarea
                ref={node => {
                  bioInput = node;
                }}
              />

              <button onClick={this.submitForm}>Submit</button>
            </Form>
          )}
        </Mutation>
      ) : (
        <h1>404 Page Not Found</h1>
      )}
    </React.Fragment>
  );
};

export default GuideForm;
