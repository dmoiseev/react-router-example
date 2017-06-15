import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <input name="username" type="text" />
          <input name="pass" type="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
