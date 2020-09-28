import React, { Component } from 'react';
import { Menu, Button, Input, Icon } from 'semantic-ui-react';

export default class MenuExampleHeader extends Component {
  state = {}

  render() {
    return (
      <Menu>
        <Menu.Item>
            <b>NEWSLETTER SIGN</b>
            <Input style = {{width: 200, marginLeft:20}} placeholder = "Enter your email"></Input>
            <Button primary style = {{marginLeft:20}}>Subscribe</Button>
            </Menu.Item>
        <Menu.Item position = 'right'>
            <b>CONNECT US</b>
            <Button color='facebook' style = {{marginLeft: 20}}>
                <Icon name='facebook' />
            </Button>
            <Button color='twitter' style = {{marginLeft: 20}}>
                <Icon name='twitter' />
            </Button>
            <Button color='instagram' style = {{marginLeft: 20}}>
                <Icon name='instagram' />
            </Button>        
        </Menu.Item>
      </Menu>
    )
  }
}
