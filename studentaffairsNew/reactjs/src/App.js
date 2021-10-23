/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Engagement from './components/engagement';
import Leadership from './components/leadership';
import Staff from './components/staff';
import Footer from './components/footer';

class App extends Component {
  render() {
    const getHome = localStorage.getItem('home');
    const getLeadership = localStorage.getItem('leadership');
    const getEngagement = localStorage.getItem('engagement');
    const getStaff = localStorage.getItem('staff');

    return (
      <Router>
        {getHome && (
          <Redirect to="/" />
        )}

        {getLeadership && (
          <Redirect to="/leadership" />
        )}

        {getEngagement && (
          <Redirect to="/engagement" />
        )}

        {getStaff && (
          <Redirect to="/staff" />
        )}

        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/leadership" exact component={Leadership} />
          <Route path="/engagement" exact component={Engagement} />
          <Route path="/staff" exact component={Staff} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
