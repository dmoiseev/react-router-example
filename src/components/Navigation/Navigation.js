import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import './Navigation.scss';

export default class SideBar extends Component {
  render() {
    return (
      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/login">login</Link></li>
      </ul>
    );
  }
}
