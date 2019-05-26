import Experiences from "./experiences";

export default {
  Query: {
    experiences(obj, args, context) {
      console.log(context);
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
        slug,
        type,
        cost
      },
      context
    ) {
      const experienceId = Experiences.insert({
        name,
        location,
        length,
        language,
        description,
        featured,
        includes,
        bring,
        slug,
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
