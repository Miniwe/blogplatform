import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import ItemContainer from '../../containers/ItemContainer';
import FormItem from '../components/FormItem';

class EditPage extends Component {
  static = {
    prefix: PropTypes.string,
    history: PropTypes.object
  }

  render() {
    let {id} = this.props.match.params;
    return (
      <div>
        <Header as='h3'>Edit <strong style={{ 'text-transform': 'uppercase' }}>{this.props.prefix}</strong></Header>
        <ItemContainer schema="main" component={FormItem} itemId={id} {...this.props} />
      </div>
    );
  }
}

export default EditPage;







