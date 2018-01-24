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
      <Menu className='MainHeader' fixed='top' size='large'>
        <Container fluid>
          <Menu.Item className='main-logo' header>
            <Image src='/img/logo.png' alt='Sintec ' />
          </Menu.Item>
          <Menu.Menu position='left'>
            <Menu.Item name='toc' onClick={this.props.toggleVisibility} className='toc'>
              <i className='fa fa-bars'></i>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item name='profile' href='/profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
              UserName
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default MainHeader;
