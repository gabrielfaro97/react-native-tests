import React, { Component } from "react";
import { Item, Input, Label, Content, Button, Icon } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class DatePicker extends Component {

  state = {
    isVisible: false,
    value: null
  };

  _showDateTimePicker = () => this.setState({ isVisible: true });

  _hideDateTimePicker = () => this.setState({ isVisible: false });
  
  _handleDatePicked = date => {
    this.setState({
      value: date.toString()
    });
    this.props.form.updateDataSet(date, this.props.dataField);
    this._hideDateTimePicker();
  };

  render() {
    return (
      <Item style={{ marginTop: 20 }}>
        <Label>
          {this.state.value ? this.state.value : this.props.label}
        </Label>
        <Input editable={false} />
        <Button transparent dark onPress={this._showDateTimePicker}>
          <Icon active name="calendar" />
        </Button>

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          datePickerModeAndroid={"spinner"}
          titleIOS={this.props.label}
          is24Hour={false}
          showDateTimePicker={this._showDateTimePicker}
        />
      </Item>
    );
  }
}
