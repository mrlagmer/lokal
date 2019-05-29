import React, { useState } from 'react';

const useUser = () => {
  const [isLoggedIn, setIsLoggedIn] = Meteor.userId() ? useState(Meteor.userId()) : useState(null)

  return isLoggedIn;
};

export default useUser;