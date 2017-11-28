import React, { Component } from 'react';
import PropTypes from 'prop-types';
import times from 'lodash/times';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {
  state = {
    activeItem: this.props.params.page ? this.props.params.page.toString() : '1'
  };

  handleItemClick = (e, {name}) => {
    e.preventDefault();
    this.setState({activeItem: name})
    this.props.setPage( parseInt(name, 10) );
  };

  render() {
    const { activeItem } = this.state;
    const pagesCount = this.props.counts ? Math.ceil(this.props.counts / 20) : 1;
    return this.props.counts ? (
      <Menu secondary>
        <Menu.Item name='total'>Total: {this.props.counts}</Menu.Item>
        {
          pagesCount > 1 && times(pagesCount, index => (
            <Menu.Item key={index} name={`${index + 1}`} active={activeItem === `${index + 1}`} onClick={this.handleItemClick} />
          ))
        }
      </Menu>
    ) : null;
  }
}

export default Navigation;
