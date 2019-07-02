import { AuthenticationError } from "apollo-server-express";

import Experiences from "./experiences";
import Guides from "../guides/guides";

export default {
  Query: {
    experiences(obj, args, context) {
      return Experiences.find(args).fetch();
    },
    experience(obj, args, context) {
      return Experiences.findOne(args);
    },
    featured(obj, args, context) {
      return Experiences.find(args).fetch();
    }
  },

  Experience: {
    guide(obj, args, context) {
      return Guides.findOne(obj.guideId);
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
        cost,
        bookingId,
        guideId,
        times,
        takingBookings,
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
        cost,
        bookingId,
        guideId,
        times,
        takingBookings
      });
      return Experiences.findOne(experienceId);
    },

    updateExperience(
      obj,
      {
        _id,
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
        bookingId,
        guideId,
        times,
        takingBookings
      },
      context
    ) {
      if (!Roles.userIsInRole(context.user._id, ["admin"], "default-group"))
        throw new AuthenticationError("not admin");
      const experienceEditId = Experiences.update(_id, {
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
        bookingId,
        guideId,
        times,
        takingBookings
      });

      return Experiences.findOne(_id);
    },

    deleteExperience(obj, { _id }, context) {
      const experienceId = Experiences.remove({
        _id
      });
      return { _id };
    }
  }
};
