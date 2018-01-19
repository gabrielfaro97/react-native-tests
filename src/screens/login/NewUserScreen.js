import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Container, Content, Text } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import {InputData, DatePicker, DualRadioField, FullButton, Form} from "@faiconForm";
// import DatePicker from "@faiconForm/DatePicker";
// import InputData from "@faiconForm/InputData";
// import DualRadioField from "@faiconForm/DualRadioField";
// import FullButton from "@faiconForm/FullButton";

export default class NewUserScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Create Account"
  });

  state = {
    name: "",
    mail: "",
    password: "",
    isWoman: false,
    isMan: false,
    isDateTimePickerVisible: false,
    datePicked: null
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  isMan = () => {
    this.setState({ isMan: true, isWoman: false });
  };

  isWoman = () => {
    this.setState({ isMan: false, isWoman: true });
  };

  _handlePress = () => {
    this.props.navigation.navigate("Login");
  };

  _handleDatePicked = date => {
    this.setState({
      datePicked: date.toString()
    });
    this._hideDateTimePicker();
  };

  createAccount = () => {
    var g;
    if (this.state.isMan) {
      g = "man";
    } else {
      g = "woman";
    }

    alert(
      "Your name is: " +
        this.state.name +
        "\n" +
        "Your mail is: " +
        this.state.mail +
        "\n" +
        "Your password is: " +
        "**********" +
        "\n" +
        "Your gender is " +
        g +
        "\n" +
        "Your birth date is: " +
        this.state.datePicked
    );
  };

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Content style={{ flexDirection: "column", paddingHorizontal: 20 }}>
            <Form>
              <InputData
                label={"Name:"}
                onChangeText={name => this.setState({ name })}
              />

              <InputData
                label={"Mail:"}
                ref={me => this._inputMail = me}
                keyboardType={"email-address"}
                autoCapitalize={"none"}
                onChangeText={mail => this.setState({ mail })}
              />

              <InputData
                label={"Password:"}
                ref={me => this._inputPassword = me}
                onChangeText={password => this.setState({ password })}
                isPassword={true}
              />
            </Form>

            <Form>
              <DatePicker
                style={{ marginTop: 20 }}
                label={"Birth Date:"}
                datePicked={this.state.datePicked}
                showDateTimePicker={this._showDateTimePicker}
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                titleIOS={"Your birth date: "}
              />

              <DualRadioField
                label={"Gender:"}
                firstOption={" Woman"}
                firstOptionPress={this.isWoman}
                firstOptionIsSelected={this.state.isWoman}
                secondOption={" Man"}
                secondOptionPress={this.isMan}
                secondOptionIsSelected={this.state.isMan}
              />
            </Form>

            <Form style={{ marginTop: "10%" }}>
              <FullButton
                label={"Create account"}
                isPrimary={true}
                color={"#2980b9"}
                onPress={this.createAccount}
              />
              <FullButton
                label={"Cancel"}
                isPrimary={false}
                color={"#2980b9"}
                onPress={this._handlePress}
              />
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
