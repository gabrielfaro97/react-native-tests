import React, { Component } from "react";
import {
  Text,
  List,
  ListItem,
  Body,
  Right,
  Switch as NativeSwitch
} from "native-base";

export default class Switch extends Component {
  state = {
    isSelected: false
  };

  _handleSelection = () => {
    this.props.form.setDataItem(this.state.isSelected, this.props.dataField);
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <List>
        <ListItem>
          <Body>
            <Text style={{ fontWeight: "bold" }}>{this.props.title}</Text>
            <Text>{this.props.discription}</Text>
          </Body>
          <Right>
            <NativeSwitch
              onValueChange={this._handleSelection}
              value={this.state.isSelected}
            />
          </Right>
        </ListItem>
      </List>
    );
  }
}
