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

export const sendSlackBasic = new ValidatedMethod({
  name: "slack.sendFormBasic",
  validate: new SimpleSchema({
    email: { type: String },
    title: { type: String },
    name: { type: String }
  }).validator(),
  run({ name, email }) {
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
                  "This is a form submission from homepage hero form.\n\n *Please see details below:*"
              }
            },
            {
              type: "divider"
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `${name} \n ${email}`
              }
            }
          ]
        }
      }
    );
  }
});

export const sendSlackExperience = new ValidatedMethod({
  name: "slackExperience.sendForm",
  validate: new SimpleSchema({
    email: { type: String },
    company: { type: String },
    attendees: { type: String },
    name: { type: String },
    eventName: { type: String }
  }).validator(),
  run({ company, name, email, attendees, eventName }) {
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
                text: `This is a form submission.\n\n *${eventName}:*`
              }
            },
            {
              type: "divider"
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Name: * ${name}\n *Company: * ${company} \n *Attendees: * ${attendees} \n *Email: * ${email}`
              }
            }
          ]
        }
      }
    );
  }
});

export const sendSlackTeam = new ValidatedMethod({
  name: "slackTeam.sendForm",
  validate: new SimpleSchema({
    email: { type: String },
    name: { type: String },
    size: { type: String },
    budget: { type: String }
  }).validator(),
  run({ budget, name, email, size }) {
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
                text: `This is a form submission for Team Enquiry.\n\n`
              }
            },
            {
              type: "divider"
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Name: * ${name}\n *Email: * ${email} \n *Teram Size: * ${size} \n *Budget: * ${budget}`
              }
            }
          ]
        }
      }
    );
  }
});
