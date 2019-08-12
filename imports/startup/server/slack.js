import { ValidatedMethod } from "meteor/mdg:validated-method";
import { HTTP } from "meteor/http";
import SimpleSchema from "simpl-schema";

export const sendSlack = new ValidatedMethod({
  name: "slack.sendForm",
  validate: new SimpleSchema({
    email: { type: String },
    title: { type: String },
    name: { type: String }
  }).validator(),
  run({ title, name, email }) {
    HTTP.call(
      "POST",
      "https://hooks.slack.com/services/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",
      {
        data: {
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text:
                  "This is a form submission from expereience form.\n\n *Please see details below:*"
              }
            },
            {
              type: "divider"
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*${title}*\n ${name} \n ${email}`
              }
            }
          ]
        }
      }
    );
  }
});
