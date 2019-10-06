import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [
        'work',
        'swim',
        'study',
        'sleep',
        'run'
      ]
    }
  }

  renderSub() {
    return this.state.lists.map((list, index) => {
      return (
        <ListItem key={index}>
          <Text>{list}</Text>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.renderSub()}
          </List>
        </Content>
      </Container>
    );
  }
}
