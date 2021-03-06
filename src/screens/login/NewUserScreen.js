import React, { Component } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, Content, Text, View, Button, Icon } from "native-base";
import {
  InputData,
  DatePicker,
  DualRadioField,
  FullButton,
  Form
} from "@faiconForm";
import { LinearGradient } from "expo";
import User from "../../models/User";

export default class NewUserScreen extends Component {
  state = {
    formData: { name: null, mail: null },
    user: {}
  };

  static navigationOptions = ({ navigation }) => ({
    header: (
      <LinearGradient
        colors={["#259285", "#40E577"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          height: "15%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            marginTop: Platform.OS === "ios" ? 30 : 0,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Button
            transparent
            light
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrow-back" />
          </Button>
          <Content
            contentContainerStyle={{
              marginLeft: "16%", //GAMBIARRA SAFADA PRA "ALINHAR" O TEXTO DO CENTRO <---------------------------------------
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", marginBottom: "5%" }}>CADASTRO</Text>
            <Text style={{ color: "white" }}>
              {navigation.state.params.step}
            </Text>
            <Text style={{ color: "white" }}>
              {navigation.state.params.stepPosition} de 2
            </Text>
          </Content>
          <Button
            transparent
            light
            onPress={() => {
              navigation.navigate("Confirmation", {
                step: " Confirmação ",
                stepPosition: "2"
              });
            }}
          >
            <Text>Próximo</Text>
          </Button>
        </View>
      </LinearGradient>
    )
  });

  _handlePress = () => {
    this.props.navigation.navigate("Login");
  };

  createAccount = () => {
    console.log(this.form.dataProvider);
  };

  data = result => {
    this.setState({ user: result });
  };

  componentWillMount = () => {
    User.getUsers(this.data);
  };

  render() {
    return (
      <Container style={{ flexDirection: "column" }}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Content contentContainerStyle={{ paddingHorizontal: 20 }}>
            <Form
              ref={me => (this.form = me)}
              dataProvider={this.state.formData}
            >
              <InputData label="Nome" dataField="name" />

              <InputData
                label="Email"
                dataField="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                // itemRenderer={value => 'R$' + value}
              />

              <InputData label="Senha" dataField="password" isPassword={true} />

              <DatePicker
                label="Nascimento"
                dataField="birthDate"
                style={{ marginTop: 20 }}
              />

              <DualRadioField
                label="Sexo"
                dataField="gender"
                firstOption={{ label: "Mulher", value: "women" }}
                secondOption={{ label: "Homem", value: "men" }}
              />
            </Form>
          </Content>

          <Button
            style={{
              borderTopWidth: 0.5,
              borderTopColor: "#259285",
              marginBottom: Platform.OS === "ios" ? 10 : 0
            }}
            full
            primary
            transparent
            onPress={() => User.saveUser(
              0,
              'realm',
              this.state.formData.name,
              this.state.formData.mail,
              false, 
              0,
              this.state.formData.birthDate,
              this.state.formData.birthDate              
            )}
          >
            <Text style={{ fontSize: 17 }}>Salvar Usuário</Text>
          </Button>

          {/*
              merchantId,
              realm,
              username,
              email,
              emailVerified,
              id,
              createdAt,
              updatedAt
          */}      
          
          <Button
            style={{
              borderTopWidth: 0.5,
              borderTopColor: "#259285",
              marginBottom: Platform.OS === "ios" ? 20 : 0
            }}
            full
            primary
            transparent
            onPress={() =>
              this.setState({
                formData: {
                  name: this.state.user[0].username,
                  mail: this.state.user[0].email,                  
                }
              })
            }            
          >
            <Text style={{ fontSize: 17 }}>Carregar Usuário</Text>
          </Button>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
