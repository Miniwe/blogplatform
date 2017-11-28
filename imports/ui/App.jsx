import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { compose } from 'react-komposer';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import getTrackerLoader from '../modules/get-tracker-loader';
import Loading from './components/Loading';

// Layouts
import MainLayout from './layouts/MainLayout';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' name='MainLayout' component={MainLayout} {...this.props} />
        </Switch>
      </Router>
    );
  }
}

const composer = (props, onData) => {
  onData(null, {});
};

export default compose(getTrackerLoader(composer, Loading))(App);
