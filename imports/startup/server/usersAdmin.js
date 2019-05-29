Meteor.startup(function() {
  console.log("Running server startup code...");

  Accounts.createUser({
    email: "stu@lokal.ly",
    password: "Lagmer15",
    profile: { username: "mrlagmer" },
    profile: { name: "Stuart" },
    roles: ["admin"]
  });
});
