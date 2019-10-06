import React, { Component } from 'react';
import { Container, Content, List, ListItem, Button, Text, Input, Item, Body, Icon, Right } from 'native-base';

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
      ],
      textInput: ''
    }
  }

  onDelete = (index) => {
    const input = this.state.lists.filter((value, idx, arr) => {
          return (index != idx);
    });
    this.setState({lists: input});
  }

  renderSub = () => {
    return this.state.lists.map((list, index) => {
      return (
        <ListItem icon key={index}>
          <Body>
            <Text>{list}</Text>
          </Body>
          <Right>
            <Button danger onPress={() => this.onDelete(index)}>
              <Icon active name='trash' />
            </Button>
          </Right>
        </ListItem>
      );
    });
  }

  onPress = () => {
    const input = this.state.lists.concat(this.state.textInput);
    this.setState({lists: input}, () => {
      this.clear();
    });
  }

  changeTextValue = (input) => {
    this.setState({textInput: input});
  }

  clear = () => {
    this.setState({textInput: ''});
  }

  render() {
    return (
      <Container>
        <Content>
          <Body style={styles.inputBody}>
            <Item regular style={styles.input}>
              <Input placeholder='New todo'
                onChangeText={text => {this.changeTextValue(text)}}
                value={this.state.textInput}
              />
            </Item>
            <Button bordered style={styles.button} onPress={this.onPress}>
              <Text>Add</Text>
            </Button>
          </Body>
          <List>
            {this.renderSub()}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = {
  inputBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 8,
  },
  button: {
    flex: 2,
  },
}
