/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Typography from './components/typography';
import Color from './components/color';
import Logo from './components/logo';
import Accessibility from './components/accessibility';
import Email from './components/email';
import Terms from './components/terms';
import Acronyms from './components/acronyms';
import Photography from './components/photography';
import WebSocial from './components/websocial';
import Templates from './components/templates';
import TitleVI from './components/titleVI';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/typography" exact component={Typography} />
        <Route path="/color" exact component={Color} />
        <Route path="/logo" exact component={Logo} />
        <Route path="/accessibility" exact component={Accessibility} />
        <Route path="/email" exact component={Email} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/acronyms" exact component={Acronyms} />
        <Route path="/photography" exact component={Photography} />
        <Route path="/websocial" exact component={WebSocial} />
        <Route path="/templates" exact component={Templates} />
        <Route path="/titleVI" exact component={TitleVI} />

        <Footer />
      </HashRouter>
    );
  }
}

export default App;
