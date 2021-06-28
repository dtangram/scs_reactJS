/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Engagement from './components/engagement';
import Leadership from './components/leadership';
import Staff from './components/staff';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/engagement" exact component={Engagement} />
          <Route path="/leadership" exact component={Leadership} />
          <Route path="/staff" exact component={Staff} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
