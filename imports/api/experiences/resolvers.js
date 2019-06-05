import { AuthenticationError } from "apollo-server-express";

import Experiences from "./experiences";

export default {
  Query: {
    experiences(obj, args, context) {
      return Experiences.find({}).fetch();
    }
  },

  Mutation: {
    createExperience(
      obj,
      {
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
        cost
      },
      context
    ) {
      if (!Roles.userIsInRole(context.user._id, ["admin"], "default-group"))
        throw new AuthenticationError("not admin");
      const experienceId = Experiences.insert({
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
        cost
      });
      return Experiences.findOne(experienceId);
    },

    deleteExperience(obj, { _id }, context) {
      const experienceId = Experiences.remove({
        _id
      });
      return { _id };
    }
  }
};
