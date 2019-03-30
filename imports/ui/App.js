import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const HIQUERY = gql`
  {
    hi
  }
`;

const App = () => (
  <Query query={HIQUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div>
          <h1>{data.hi}</h1>
        </div>
      );
    }}
  </Query>
);

export default App;
