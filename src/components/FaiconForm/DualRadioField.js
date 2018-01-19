import React, { Component } from "react";
import {
  Item,
  Input,
  Label,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Radio,
  Text
} from "native-base";
import { TouchableWithoutFeedback } from "react-native";

export default class DualRadioField extends Component {
  state = {
    value: null
  }

  _onPress = option => {
    this.setState({ value: option.value });
    this.props.form.updateDataSet(option.value, this.props.dataField);
  }

  render() {
    return (
      <Item style={{ marginTop: 20 }}>
        <Label>
          {this.props.label}
        </Label>
        <Input editable={false} />
        <List style={{ flexDirection: "row" }}>
          <TouchableWithoutFeedback onPress={this.props.firstOptionPress}>
            <ListItem style={{ backgroundColor: "#E9E9EF", borderColor: 'transparent' }}>
              <Radio
                onPress={() => this._onPress(this.props.firstOption)}
                selected={this.state.value === this.props.firstOption.value}
              />
              <Text>
                {this.props.firstOption.label}
              </Text>
            </ListItem>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.props.secondOptionPress}>
            <ListItem style={{ backgroundColor: "#E9E9EF", borderColor: 'transparent' }}>
              <Radio
                onPress={() => this._onPress(this.props.secondOption)}
                selected={this.state.value === this.props.secondOption.value}
              />
              <Text>
                {this.props.secondOption.label}
              </Text>
            </ListItem>
          </TouchableWithoutFeedback>
        </List>
      </Item>
    );
  }
}
