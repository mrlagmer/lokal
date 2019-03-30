import React, { Component } from "react";

export default class RegisterForm extends React.Component {
  registerUser = e => {
    console.log(Accounts);
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <input type="email" ref={input => (this.email = input)} />
        <input type="password" ref={input => (this.password = input)} />
        <button type="submit">Register User</button>
      </form>
    );
  }
}
