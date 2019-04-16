import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
var Mailchimp = require("mailchimp-api-v3");

var mailchimp = new Mailchimp(Meteor.settings.mailchimp.key);

export const addEmail = new ValidatedMethod({
  name: "mailChimp.addEmail",
  validate: new SimpleSchema({
    email: { type: String }
  }).validator(),
  run({ email }) {
    const emailData = {
      email_address: email,
      status: "subscribed"
    };
    mailchimp.post("lists/1a056694e9/members/", emailData);
  }
});
