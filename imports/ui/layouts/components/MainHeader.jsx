import React, { Component } from 'react';
import { Menu, Segment, Container, Image, Icon } from 'semantic-ui-react';

class MainHeader extends Component {
  state = { activeItem: 'index' };

  handleItemClick = (e, { name, href }) => {
    e.preventDefault();
    this.setState({ activeItem: name });
    this.props.history.push(href);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item style={{ background: '#ff0000', color: '#ffffff' }} header>
            Blog Name
          </Menu.Item>
          <Menu.Menu position='left' className='mobile hidden'>
            <Menu.Item name='index' href='/' active={activeItem === 'index'}
              onClick={this.handleItemClick}>
              Index
            </Menu.Item>
            <Menu.Item name='posts' href='/posts' active={activeItem === 'posts'}
              onClick={this.handleItemClick}>
              Posts
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default MainHeader;
