import { ApolloServer, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import merge from "lodash/merge";

import ExperiencesSchema from "../../api/experiences/experiences.graphql";
import ExperiencesResolvers from "../../api/experiences/resolvers";
//hiii manyuiuty sdfff
const q = `
type Query {
    hi: String
    experiences: [Experience]
}
`;
const typeDefs = [q, ExperiencesSchema];

const resolver = {
  Query: {
    hi() {
      return "Hello Parnell";
    }
  }
};

const resolvers = merge(resolver, ExperiencesResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});
