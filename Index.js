import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "./src/views/login/Login";
import NewUser from "./src/views/login/NewUser";

export default StackNavigator({
  Login: {
    screen: Login
  },

  NewLogin: {
    screen: NewUser
  }
});
