import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Text,
  Input,
  Item,
  Body,
  Icon,
  Right,
  Left,
  CheckBox
} from 'native-base';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [
        {
          todo: 'work',
          checked: true
        },
        {
          todo: 'swim',
          checked: true
        },
        {
          todo: 'study',
          checked: false
        },
        {
          todo: 'sleep',
          checked: false
        },
        {
          todo: 'run',
          checked: false
        }
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

  onCheck = (index) => {
    const input = this.state.lists.map((list, idx) => {
        if (index == idx)
          list.checked = !list.checked;
        return list;
    });
    this.setState({lists: input});
  }

  renderSub = () => {
    return this.state.lists.map((list, index) => {
      return (
        <ListItem icon key={index}>
          <Left>
            <CheckBox checked={list.checked} color='green' onPress={() => this.onCheck(index)}/>
          </Left>
          <Body>
            <Text>{list.todo}</Text>
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
    const added = {
        todo: this.state.textInput,
        checked: false
    };
    const input = this.state.lists.concat(added);
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
