import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

const tablesProcess = [
  {
    label: 'Dashboard',
    icon: 'fa-address-book',
  },
  {
    label: 'Projects',
    icon: 'fa-free-code-camp',
  },
  {
    label: 'Clients',
    icon: 'fa-user',
  },
  {
    label: 'Contractors',
    icon: 'fa-bath accent-text',
  },
  {
    label: 'Posts',
    icon: 'fa-window-close-o  accent-text',
  },
  {
    label: 'Attribuite',
    icon: 'fa-american-sign-language-interpreting',
  },
  {
    label: 'Statistics',
    icon: 'fa-bar-chart',
  },
  {
    label: 'Documents',
    icon: 'fa-bomb',
  },
  {
    label: 'Help',
    icon: 'fa-question-circle',
  },
  {
    label: 'Profile',
    icon: 'fa-cubes',
  },
];

class MainSidebar extends Component {
  state = {
    activeIndex: 0,
    activeItem: '',
  };

  static = {
    visible: PropTypes.bool,
    history: PropTypes.history,
  };

  handleItemClick = (e, { name, href }) => {
    e.preventDefault();
    this.setState({ activeItem: name });
    this.props.history.push(href);
  };

  render() {
    return (
      <Sidebar as={Menu} animation='overlay' color='grey' width='thin' visible={this.props.visible} vertical inverted>
        {tablesProcess.map((item, index) => (
          <Menu.Item
            active={this.state.activeItem === item.label}
            key={index}
            name={item.label}
            href={`/${item.label.toLowerCase()}`}
            onClick={this.handleItemClick}
          >
            <span className={classnames('fa', item.icon)} /> {item.label}
          </Menu.Item>
        ))}
      </Sidebar>
    );
  }
}

export default MainSidebar;
