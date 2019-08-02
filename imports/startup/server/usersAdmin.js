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

  if (!Accounts.findUserByEmail("parnell@lokal.ly")) {
    var id = Accounts.createUser({
      email: "parnell@lokal.ly",
      password: "P4LaNToJORFJ&1+s$[8B",
      profile: { username: "parnell" },
      profile: { name: "Parnell" }
    });
    Roles.addUsersToRoles(id, ["admin"], "default-group");
  }
});
