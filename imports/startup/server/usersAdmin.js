Meteor.startup(function() {
  console.log("Running server startup code...");

  if (!Accounts.findUserByEmail("stu@lokal.ly")) {
    var id = Accounts.createUser({
      email: "stu@lokal.ly",
      password: "Lagmer15",
      profile: { username: "mrlagmer" },
      profile: { name: "Stuart" }
    });
    Roles.addUsersToRoles(id, ["admin"], "default-group");
  }
});
