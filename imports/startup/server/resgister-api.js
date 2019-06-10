import { ApolloServer, AuthenticationError, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import merge from "lodash/merge";

import ExperiencesSchema from "../../api/experiences/experiences.graphql";
import ExperiencesResolvers from "../../api/experiences/resolvers";
//hiii manyuiuty sdfffryytyuoopomi

const typeDefs = [ExperiencesSchema];

const resolvers = merge(ExperiencesResolvers);

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
