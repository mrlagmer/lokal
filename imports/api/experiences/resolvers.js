import Experiences from "./experiences";

export default {
  Query: {
    experiences() {
      return Experiences.find({}).fetch();
    }
  },

  Mutation: {
    createExperience(obj, { name }, context) {
      const experienceId = Experiences.insert({
        name
      });
      return Experiences.findOne(experienceId);
    }
  }
};
