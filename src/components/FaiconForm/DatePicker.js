import React, { Component } from "react";
import { Item, Input, Label, Content, Button, Icon } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class DatePicker extends Component {
  render() {
    return (
      <Item style={{ marginTop: 20 }}>
        <Label>
          {this.props.datePicked ? this.props.datePicked : this.props.label}
        </Label>
        <Input editable={false} />
        <Button transparent dark onPress={this.props.showDateTimePicker}>
          <Icon active name="calendar" />
        </Button>

        <DateTimePicker
          isVisible={this.props.isVisible}
          onConfirm={this.props.onConfirm}
          onCancel={this.props.onCancel}
          datePickerModeAndroid={"spinner"}
          titleIOS={this.props.titleIOS}
          is24Hour={false}
        />
      </Item>
    );
  }
}
