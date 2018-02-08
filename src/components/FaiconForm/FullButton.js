import React, { Component } from "react";
import { Button, Text } from "native-base";

export default class FullButton extends Component {
  render() {
    return (
      <Button
        full 
        primary={this.props.isPrimary}
        style={{ backgroundColor: this.props.color, marginTop: 30 }}
        onPress={this.props.onPress}
      >
        <Text>{this.props.label}</Text>
      </Button>
    );
  }
}
