import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createExperience = gql`
  mutation createExperience($name: String!) {
    createExperience(name: $name) {
      _id
    }
  }
`;

class ExperienceForm extends Component {
  submitForm = () => {
    this.props
      .createExperience({
        variables: {
          name: this.name.value
        }
      })
      .then(({ data }) => {
        this.props.refetch();
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default graphql(createExperience, {
  name: "createExperience"
})(ExperienceForm);
