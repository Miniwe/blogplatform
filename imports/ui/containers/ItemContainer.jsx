import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PropTypes from 'prop-types';
import extend from 'lodash/extend';
import { withTracker } from 'meteor/react-meteor-data';
import { Loader } from 'semantic-ui-react';
import {getCollection} from '../../modules/import-collection';

class _ItemContainer extends Component {
  static = {
    history   : PropTypes.object,
    prefix    : PropTypes.string,
    itemId    : PropTypes.string,
    component : PropTypes.element,
    schema    : PropTypes.string,
    loading   : PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };

  item = () => {
    if (this.state.collection) {
      return this.state.collection.findOne({ _id: this.props.itemId });
    }
    return null;
  };

  render() {
    let { schema, collection, item, shema, ...props } = this.props;
    if (item) {
      props.model = item;
    }
    return !this.props.loading ? (
      React.createElement(
        this.props.component,
        _.extend(
          {
            schema : schema,
            modelTransform: collection.modelTransform ? collection.modelTransform : null,
          },
          props,
        ),
      )
    ) : (
      <Loader active inline='centered' />
    );
  }
}

export default(ItemContainer = withTracker((props) => {
  const {} = props;
  const collectionHandle = Meteor.subscribe(`${props.prefix}.single`, props.itemId);
  const loading = !collectionHandle.ready();
  const collection = getCollection(props.prefix);
  const list = !loading ? collection.find(props.itemId).fetch() : []
  return extend({
    loading,
    collection,
    item: list.shift()
  }, props, { schema: collection.getSchema(props.schema) });
})(_ItemContainer));
