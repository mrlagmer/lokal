import React, { Component } from "react";

import useUser from "./hooks/useUser";

const LoginForm = () => {
  const login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(
      emailInput.value,
      pwInput.value,

      error => {
        console.error(error);
      }
    );
  };

  const { user } = useUser();
  return (
    <form onSubmit={login}>
      {user.loggedIn ? (
        <button
          onClick={() =>
            Meteor.logout(function() {
              return client.resetStore(); // make all active queries re-run when the log-out process completed
            })
          }
        >
          LogOut
        </button>
      ) : (
        <>
          <input
            type="email"
            ref={node => {
              emailInput = node;
            }}
          />
          <input
            type="password"
            ref={node => {
              pwInput = node;
            }}
          />
          <button type="submit">Login User</button>
        </>
      )}
    </form>
  );
};

export default LoginForm;
