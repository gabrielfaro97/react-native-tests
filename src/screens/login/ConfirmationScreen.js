import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Container, Content, Text, View, Button, Icon, L } from "native-base";
import {
  InputData,
  DatePicker,
  DualRadioField,
  FullButton,
  Form,
  Switch
} from "@faicon/native-form";
import { LinearGradient } from "expo";

export default class ConfirmationScreen extends Component {
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
              marginRight: "16%", //GAMBIARRA SAFADA PRA "ALINHAR" O TEXTO DO CENTRO <---------------------------------------
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
        </View>
      </LinearGradient>
    )
  });

  render() {
    return (
      <Container style={{ flexDirection: "column" }}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Content contentContainerStyle={{ paddingHorizontal: 20 }}>
            <Form
              ref={me => (this.form = me)}
              dataProvider={this.state.formData}
            >
                <Switch dataField="isValente" title={'Sou um valente'} description={'Sou um vagabundo e não faço nada da vida'}/>
                <Switch dataField="acceptedTerms" description={'Lí e aceito o regulamento de uso do aplicativo (estou mentindo)'}/>
            </Form>
          </Content>
          <Button
            style={{borderWidth: 0.5, borderColor:'#259285'}}
            full
            primary
            transparent
            onPress={() => alert('Cadastro finalizado com sucesso!')}
          >
            <Text style={{fontSize:17}}>CONFIRMAR</Text>
          </Button>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
