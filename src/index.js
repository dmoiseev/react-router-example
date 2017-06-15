import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import NoMatch from './pages/NoMatch/NoMatch'
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

import './sass/global-styles.scss';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <MainLayout>
          <Route exact path="/" component={Dashboard} />
          <Route path="/users" component={Users} />
        </MainLayout>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);
