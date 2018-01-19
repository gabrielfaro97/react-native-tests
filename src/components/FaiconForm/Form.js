import React, { Component } from "react";
import { Form as NativeForm } from "native-base";

export default class Form extends Component {

  state = {
    children: []
  } 

  componentDidMount() {
    this.setState({ children:
    this.props.children.map((input, index) => {
      if (index < (this.props.children.length - 1)) {
        return React.cloneElement(
          input,
          Object.assign({key: index}, input.props, {nextInput: this.props.children[index + 1]})
        )
      } else {
        return input;
      }
    })
  });
  }
 
  render() {
    return (
      <NativeForm>
        {this.state.children}
      </NativeForm>
    );
  }
}
