import React, { Component } from "react";

export default class LoginForm extends React.Component {
  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(
      this.email.value,
      this.password.value,

      error => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button type="submit">Login User</button>
        <button
          onClick={() =>
            Meteor.logout(function() {
              return client.resetStore(); // make all active queries re-run when the log-out process completed
            })
          }
        >
          LogOut
        </button>
      </form>
    );
  }
}
