import Experiences from "./experiences";

export default {
  Query: {
    experiences() {
      return Experiences.find({}).fetch();
    }
  },

  Mutation: {
    createExperience() {
      // const experienceId = Experiences.insert({
      //   name: "Test Experience"
      // });
    }
  }
};
