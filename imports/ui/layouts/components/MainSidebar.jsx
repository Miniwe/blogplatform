import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Roles } from 'meteor/alanning:roles';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

const tablesProcess = [
  {
    label: "Dashboard",
    icon: "fa-user"
  },
  {
    label: "Projects",
    icon: "fa-user"
  },
  {
    label: "Clients",
    icon: "fa-user"
  },
  {
    label: "Сontractors",
    icon: "fa-user accent-text"
  },
  {
    label: "Posts",
    icon : "fa-user accent-text"
  },
  {
    label: "Attribuite",
    icon: "fa-user"
  },
  {
    label: "Statistics",
    icon: "fa-user"
  },
  {
    label: "Documents",
    icon: "fa-user"
  },
  {
    label: "Help",
    icon: "fa-user"
  },
  {
    label: "Profile",
    icon: "fa-user"
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
      <Sidebar
        as={Menu}
        animation='overlay'
        color='grey'
        width='thin'
        visible={this.props.visible}
        vertical
        inverted
      >

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
