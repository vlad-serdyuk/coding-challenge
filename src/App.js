import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './containers/Header';
import LoginPage from './containers/LoginPage';
import FeedsPage from './containers/FeedsPage';
import Home from './components/Home';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/feeds" component={FeedsPage} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
