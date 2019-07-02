import { AuthenticationError } from "apollo-server-express";

import Guides from "./guides";

export default {
  Query: {
    guides(obj, args, context) {
      return Guides.find(args).fetch();
    },
    guide(obj, args, context) {
      return Guides.findOne(args);
    }
  },

  Mutation: {
    createGuide(obj, { name, bio }, context) {
      if (!Roles.userIsInRole(context.user._id, ["admin"], "default-group"))
        throw new AuthenticationError("not admin");
      const guideId = Guides.insert({
        name,
        bio
      });
      return Guides.findOne(guideId);
    },

    deleteGuide(obj, { _id }, context) {
      const guideId = Guides.remove({
        _id
      });
      return { _id };
    }
  }
};
