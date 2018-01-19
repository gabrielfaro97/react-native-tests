import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Item, Input, Label } from "native-base";

export default class InputData extends Component {

  focus = () => {
    this.input._root.focus();
  }

  componentDidMount() {
    this.props.form.attachInput(this);
  }

  onSubmitEditing = event => {
    const nextItem = this.props.form.getNextItem(this);
    if (nextItem) {
      nextItem.focus();
    }
  }

  onChangeText = value => {
    this.props.form.updateDataSet(value, this.props.dataField);
  }

  render() {
    return (
      <Item floatingLabel>
        <Label>{this.props.label}</Label>
        <Input
          getRef={me => this.input = me}
          onChangeText={this.props.onChangeText}
          returnKeyType={"next"}
          blurOnSubmit={false}
          style={{ color: "black" }}
          onSubmitEditing={this.props.onSubmitEditing}
          autoCapitalize={this.props.autoCapitalize}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.isPassword}
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}
        />
      </Item>
    );
  }
}
