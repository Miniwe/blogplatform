import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ViewWrapper from './ViewWrapper';

class ItemView extends Component {
  render() {
    const { model, schema, parent } = this.props;
    return model ? (
      <ViewWrapper {...{ model, schema }} parent={parent} />
    ) : (
      <Message warning>Model not defined</Message>
    );
  }
}

ItemView.propTypes = {
  model   : PropTypes.object,
  schema  : PropTypes.object
};

export default ItemView;
