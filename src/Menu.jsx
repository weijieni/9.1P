import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default class MenuExampleHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>ICrowedTask</Menu.Item>
        <Menu.Item
          name='howItWorks'
          active={activeItem === 'howItWorks'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='requesters'
          active={activeItem === 'requesters'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Workers'
          active={activeItem === 'Workers'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='pricing'
          active={activeItem === 'pricing'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item position ='right'><Button primary>Sign in</Button></Menu.Item>
      </Menu>
    )
  }
}
