import React, { Component } from "react";
import { Form as NativeForm } from "native-base";


export default class Form extends Component {
  
  inputs = {}

  dataSet = {}
  
  state = {
    children: []
  }

  componentDidMount() {
    this.setState({ children:
      React.Children.map(this.props.children, (child, index) => {
        let clone = React.cloneElement(
          child,
          {key: index, index: index, form: this}
        )
        return clone;
    })
  });
  }

  updateDataSet = (value, key) => {
    this.dataSet[key] = value;
  }

  attachInput = (child) => {
    this.inputs[child.props.index] = child;
  }

  getNextItem = (child) => {
    const index = child.props.index;
    if ((index + 1) < this.state.children.length) {
      return this.inputs[index + 1];
    } else {
      return null;
    }
  }
 
  render() {
    return (
      <NativeForm>
        {this.state.children}
      </NativeForm>
    );
  }
}
