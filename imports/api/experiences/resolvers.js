import Experiences from "./experiences";

export default {
  Query: {
    experiences() {
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
        bring
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
        bring
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
