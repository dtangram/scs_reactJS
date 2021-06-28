/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
        {
          // USE THESE TWO ROUTES FOR BUILD
        }
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

export default App;
