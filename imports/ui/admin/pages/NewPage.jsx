import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemContainer from '../../containers/ItemContainer';
import { Header } from 'semantic-ui-react';
import FormItem from '../components/FormItem';

class NewPage extends Component {
  static = {
    prefix: PropTypes.string,
    history: PropTypes.object
  }

  render() {
    return (
      <div>
        <Header as='h3'>New {this.props.prefix}</Header>
        <ItemContainer schema="main" component={FormItem} {...this.props} />
      </div>
    );
  }
}

export default NewPage;
