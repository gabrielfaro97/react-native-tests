import React, { Component } from "react";
import { Form as NativeForm } from "native-base";

export default class Form extends Component {
  inputs = {};

  get dataProvider() {
    return this.props.dataProvider
  }

  state = {
    children: []
  }

  static defaultProps = {
    dataProvider: {teste: 1}
  }

  componentDidMount() {
    this.setState({
      children: React.Children.map(this.props.children, (child, index) => {
        let clone = React.cloneElement(child, {
          key: index,
          index: index,
          form: this
        });
        return clone;
      })
    });
  }

  getDataItem = key => {
    return this.props.dataProvider[key];
  };

  setDataItem = (value, key) => {
    this.props.dataProvider[key] = value;
  };

  attachInput = child => {
    this.inputs[child.props.index] = child;
  };

  getNextItem = child => {
    const index = child.props.index;
    if (index + 1 < this.state.children.length) {
      return this.inputs[index + 1];
    } else {
      return null;
    }
  };

  render() {
    return (
      <NativeForm>
        {this.state.children}
      </NativeForm>
    );
  }
}