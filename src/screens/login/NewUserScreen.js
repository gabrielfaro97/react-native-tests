import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Container, Content, Text, View } from "native-base";
import { InputData, DatePicker, DualRadioField, FullButton, Form } from "@faiconForm";

export default class NewUserScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Create Account"
  });

  _handlePress = () => {
    this.props.navigation.navigate("Login");
  };

  createAccount = () => {
    console.log(this.form.dataSet);

    alert(
      "Your name is: " +
      this.form.dataSet.name +
      "\n" +
      "Your mail is: " +
      this.form.dataSet.mail +
      "\n" +
      "Your password is: " +
      this.form.dataSet.password +
      "\n" +
      "Your gender is: " +
      this.form.dataSet.gender +
      "\n" +
      "Your birth date is: " +
      this.form.dataSet.birthDate
    );
  };

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Content style={{ flexDirection: "column", paddingHorizontal: 20 }}>
            <Form ref={me => this.form = me}>
              <InputData label="Nome" dataField="name" />

              <InputData
                label="Email"
                dataField="mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <InputData
                label="Senha"
                dataField="password"
                isPassword={true}
              />

              <DatePicker
                label="Nascimento"
                dataField="birthDate"
                style={{ marginTop: 20 }}
              />

              <DualRadioField
                label="Sexo"
                dataField="gender"
                firstOption={{label: "Mulher", value: "women"}}
                secondOption={{label: "Homem", value: "men"}}
              />
            </Form>

            <View style={{ marginTop: "10%" }}>
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
            </View>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
