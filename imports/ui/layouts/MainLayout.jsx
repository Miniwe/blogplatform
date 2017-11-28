import React, { Component } from 'react';
import { compose } from 'react-komposer';
import { Switch, Route } from 'react-router-dom';
import { Container, Sidebar } from 'semantic-ui-react';
import getTrackerLoader from '../../modules/get-tracker-loader';

import Loading from '../components/Loading';
import MainHeader from './components/MainHeader';

import Index from '../pages/Index';

import AdminRouters from '../admin/AdminRouters';

class MainLayout extends Component {
  render() {
    return (
      <div id='mainApp'>
        <MainHeader {...this.props} />
        <Container>
          <Switch>
            <Route exact name='Index' path='/' component={Index} />
            <Route path='/posts' component={AdminRouters} {...this.props} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const composer = (props, onData) => {
  onData(null, { });
};

export default compose(getTrackerLoader(composer, Loading))(MainLayout);
