import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import extend from 'lodash/extend';
import Posts from '../../api/posts/collection';

class _ListContainer extends Component {
  static = {
    history        : PropTypes.object,
    prefix         : PropTypes.string,
    schema         : PropTypes.string,
    groupContainer : PropTypes.any,
    query          : PropTypes.object,
    params         : PropTypes.object,
    loading        : PropTypes.bool,
  };

  componentWillMount() {
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  };

  render() {
    const {items, schema, groupContainer, collection, ...props} = this.props;
    return React.createElement(
      groupContainer,
      _.extend(
        {
          items: items || [],
          schema
        },
        props,
      ),
    );
  }
}

export default (ListContainer = withTracker((props) => {
  const { prefix, query = {}, params = {}, schema } = props;
  const collectionHandle = Meteor.subscribe(`${prefix}.list`, query, params);
  const collectionCountsHandle = Meteor.subscribe(`${prefix}.counts`, query);
  const loading = !collectionHandle.ready();
  const counts = Counts.get(`${prefix}.counts`);
  const collection = Posts;
  const list = !loading ? collection.list(query, params).fetch() : []
  return extend({
    loading,
    collection,
    counts,
    items: list
  }, props, { schema: collection.getSchema(schema) });
})( _ListContainer ));

