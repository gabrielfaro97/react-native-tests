import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Container, Content, Text, View } from "native-base";
import { InputData, DatePicker, DualRadioField, FullButton, Form } from "@faiconForm";

export default class NewUserScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Create Account"
  });

  state = {
    formData: {name: 'mão', mail: '123'}
  }

  componentDidMount() {
    console.log('qualqueer coisa')
  }

  _handlePress = () => {
    this.props.navigation.navigate("Login");
  };

  createAccount = () => {
    console.log(this.form.dataProvider);
  };

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Content style={{ flexDirection: "column", paddingHorizontal: 20 }}>
            <Form ref={me => this.form = me} dataProvider={this.state.formData}>
              <InputData label="Nome" dataField="name" />

              <InputData
                label="Email"
                dataField="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                // itemRenderer={value => 'R$' + value}
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
              <FullButton
                label="Teste"
                isPrimary={false}
                color={"#2980b9"}
                onPress={() => this.setState({formData: {name: 'valente', mail: 'asdadf'}})}
              />
            </View>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
