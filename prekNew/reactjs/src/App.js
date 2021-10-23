/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Switch,
  Redirect,
} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import './css/main.css';
// import './css/reset.css';
// import './js/index';

import Header from './components/header';
import Home from './components/home';
import Headstart from './components/headstart';
import Readiness from './components/readiness';
import ServicesResearch from './components/servicesresearch';
import Environment from './components/environment';
import Family from './components/family';
import Staff from './components/staff';
import Footer from './components/footer';

class App extends Component {
  render() {
    const getHome = localStorage.getItem('home');
    const getHeadstart = localStorage.getItem('headstart');
    const getReadiness = localStorage.getItem('readiness');
    const getServicesresearch = localStorage.getItem('servicesresearch');
    const getEnvironment = localStorage.getItem('environment');
    const getFamily = localStorage.getItem('family');
    const getStaff = localStorage.getItem('staff');

    return (
      <Router>
        {getHome && (
          <Redirect to="/" />
        )}

        {getHeadstart && (
          <Redirect to="/headstart" />
        )}

        {getReadiness && (
          <Redirect to="/readiness" />
        )}

        {getServicesresearch && (
          <Redirect to="/servicesresearch" />
        )}

        {getEnvironment && (
          <Redirect to="/environment" />
        )}

        {getFamily && (
          <Redirect to="/family" />
        )}

        {getStaff && (
          <Redirect to="/staff" />
        )}

        {
          // USE THESE TWO ROUTES FOR BUILD
        }
        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/headstart" exact component={Headstart} />
          <Route path="/readiness" exact component={Readiness} />
          <Route path="/servicesresearch" exact component={ServicesResearch} />
          <Route path="/environment" exact component={Environment} />
          <Route path="/family" exact component={Family} />
          <Route path="/staff" exact component={Staff} />
        </Switch>

        {
          // USE THESE TWO ROUTES FOR DEVELOPMENT/LOCAL
        }
        {
          // <Route path="/" component={Header} />
          // <Route path="/" exact component={Home} />
        }
        <Footer />
      </Router>
    );
  }
}

export default App;
