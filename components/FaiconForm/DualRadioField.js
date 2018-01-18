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
  teste = () => {
    alert("fi da puta");
  };

  render() {
    return (
      <Item style={{ marginTop: 20 }}>
        <Label>
          {this.props.label}
        </Label>
        <Input editable={false}/>
        <List style={{ flexDirection: "row" }}>
          <TouchableWithoutFeedback onPress={this.props.firstOptionPress}>
            <ListItem style={{ backgroundColor: "#E9E9EF", borderColor: 'transparent' }}>
              <Radio             
                onPress={this.props.firstOptionPress}
                selected={this.props.firstOptionIsSelected}                
              />
              <Text>
                {this.props.firstOption}
              </Text>
            </ListItem>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.props.secondOptionPress}>
            <ListItem style={{ backgroundColor: "#E9E9EF", borderColor: 'transparent' }}>
              <Radio
                onPress={this.props.secondOptionPress}
                selected={this.props.secondOptionIsSelected}
              />
              <Text>
                {this.props.secondOption}
              </Text>
            </ListItem>
          </TouchableWithoutFeedback>
        </List>
      </Item>
    );
  }
}
