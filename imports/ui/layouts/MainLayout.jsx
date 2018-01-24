import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'amplify/lib/amplify.store.js';
import { compose } from 'react-komposer';
import { Switch, Route } from 'react-router-dom';
import { Segment, Container, Sidebar } from 'semantic-ui-react';
import getTrackerLoader from '../../modules/get-tracker-loader';

import Loading from '../components/Loading';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import MainSidebar from './components/MainSidebar';

import Index from '../pages/Index';

import AdminRouters from '../admin/AdminRouters';

class MainLayout extends Component {
  state = {
    visible: amplify.store('sidebarState') || true,
    in: true,
  };

  static = {
    loggingIn: PropTypes.bool,
    authenticated: PropTypes.bool,
  };

  toggleVisibility = () => {
    const visible = !this.state.visible;
    amplify.store('sidebarState', visible);
    this.setState({ visible });
  };

  render() {
    const { visible } = this.state;
    return (
      <div id='mainApp'>
        <MainHeader toggleVisibility={this.toggleVisibility} {...this.props} />
        <Sidebar.Pushable as={Segment} className='basic app-body'>
          <MainSidebar visible={this.state.visible} {...this.props} />
          <Sidebar.Pusher>
            <Container>
              <Switch>
              <Route path='/posts' component={AdminRouters} {...this.props} />
              <Route path='/contractors' component={AdminRouters} {...this.props} />
              <Route name='Index' path='/' component={Index} />
              </Switch>
            </Container>
            <MainFooter />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const composer = (props, onData) => {
  onData(null, {});
};

export default compose(getTrackerLoader(composer, Loading))(MainLayout);
