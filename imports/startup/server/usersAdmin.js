Meteor.startup(function() {
  console.log("Running server startup code...");

  if (!Accounts.findUserByEmail("stu@lokal.ly")) {
    var id = Accounts.createUser({
      email: "stu@lokal.ly",
      password: "Z4LaGTAJOGFh&1+Q$[4D",
      profile: { username: "mrlagmer" },
      profile: { name: "Stuart" }
    });
    Roles.addUsersToRoles(id, ["admin"], "default-group");
  }
});
