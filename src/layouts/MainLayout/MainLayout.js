import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';

import './MainLayout.scss';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <aside className="main-layout__sidebar">
          <Navigation />
        </aside>
        <div className="main-layout__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
