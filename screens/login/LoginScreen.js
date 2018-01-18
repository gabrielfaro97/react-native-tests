import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  static navigationOptions = {
    header: null
  };

  _handlePress = () => {
    this.props.navigation.navigate("Main");
  };

  _handleNewUser = () => {
    this.props.navigation.navigate("NewUser");
  }

  

  render() {
    return (
      //<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior={"padding"} style={styles.masterContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.titleText}>Welcome back, soldier! </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              blurOnSubmit={ true }
              returnKeyType = {"next"}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
              onChangeText={username => this.setState({ username })}
              placeholder="email or username"
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid={"rgba(255, 255, 255, 0.0)"}
              onSubmitEditing={(event) => { 
                this.refs.SecondInput.focus(); 
              }}
            />
            <TextInput
              ref='SecondInput'
              blurOnSubmit={ true }              
              style={styles.input}
              autoCapitalize={"none"}
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
              placeholder="password"
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid={"rgba(255, 255, 255, 0.0)"}
            />

            <TouchableOpacity
              onPress={this._handlePress}
              style={styles.enterContainer}
            >
              <Text style={styles.enterButton}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this._handleNewUser}
              style={styles.registerContainer}
            >
              <Text style={styles.registerButton}>
                Don't have an account? Sign in!
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    backgroundColor: "#3498db"
  },

  logo: {
    height: 200,
    width: 300
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },

  titleText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 22,
    marginTop: 20
  },

  formContainer: {
    marginBottom: 35,
    padding: 20
  },

  input: {
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 20
  },

  enterContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    marginTop: 30
  },

  enterButton: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },

  registerButton: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "300"
  },

  registerContainer: {
    //backgroundColor: '#2980b9',
    paddingVertical: 15
  }
});

