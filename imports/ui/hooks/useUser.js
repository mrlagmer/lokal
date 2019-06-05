import React, { useState, useEffect } from "react";

const useUser = () => {
  const [isLoggedIn, setIsLoggedIn] = Meteor.userId()
    ? useState(Meteor.userId())
    : useState(null);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    Tracker.autorun(() => {
      Roles.userIsInRole(isLoggedIn, ["admin"], "default-group")
        ? setIsAdmin(true)
        : setIsAdmin(false);
    });
  }, [isLoggedIn]);

  return {
    user: {
      loggedIn: isLoggedIn,
      admin: isAdmin
    }
  };
};

export default useUser;
