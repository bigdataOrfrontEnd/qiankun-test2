import React, { Component } from "react";

export default class classIndex extends Component {
  render() {
    const { car, money } = this.props;
    return (
      <div>
        <h1>类组件</h1>
        {car},{money}
      </div>
    );
  }
}
