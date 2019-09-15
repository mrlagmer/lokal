import { ApolloServer, AuthenticationError, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import merge from "lodash/merge";

import ExperiencesSchema from "../../api/experiences/experiences.graphql";
import GuidesSchema from "../../api/guides/guides.graphql";
import ExperiencesResolvers from "../../api/experiences/resolvers";
import GuiesResolvers from "../../api/guides/resolvers";

import QuerySchema from "../../api/query.graphql";
import MutationSchema from "../../api/mutation.graphql";

//hiii manyuiuty sdfffryytyuoopomiuypoipiepp0rrerupsuyp

const typeDefs = [ExperiencesSchema, GuidesSchema, QuerySchema, MutationSchema];

const resolvers = merge(ExperiencesResolvers, GuiesResolvers);

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
