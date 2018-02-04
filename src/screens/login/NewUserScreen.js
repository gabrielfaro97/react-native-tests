import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Container, Content, Text, View, Button, Icon } from "native-base";
import {
  InputData,
  DatePicker,
  DualRadioField,
  FullButton,
  Form
} from "@faicon/native-form";
import { LinearGradient } from "expo";

export default class NewUserScreen extends Component {
  state = {
    formData: { name: null, mail: null }
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
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
          <Button transparent light onPress={() => {
            navigation.navigate("Confirmation", {step: ' Confirmação ', stepPosition:'2'})
          }}>  
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
            style={{borderWidth: 0.5, borderColor:'#259285'}}
            full
            primary
            transparent
            onPress={() =>
              this.setState({
                formData: { name: "valente", mail: "asdadf" }
              })
            }
          >
            <Text style={{fontSize:17}}>PRÓXIMO</Text>
          </Button>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
