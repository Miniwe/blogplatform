import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connectField from 'uniforms/connectField';

class ListBoolean extends Component {
  static = {
    id    : PropTypes.string,
    name  : PropTypes.string,
    value : PropTypes.bool,
  };

  componentDidMount() {
    if (this.props.state) {
      this.item.closest('tr').classList[this.props.value ? 'add' : 'remove']('disabled');
    }
  }

  render() {
    const { id, label, name, value } = this.props;
    return (
      <div id={id} ref={(item) => (this.item = item)}>
        {label && <label htmlFor={id}>{label}: </label>}
        {value ? 'Yes' : 'No'}
      </div>
    );
  }
}

export default connectField(ListBoolean);
