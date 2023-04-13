import React, { Component } from "react";

export default class classIndex extends Component {
  render() {
    const { car, money } = this.props;
    return (
      <div>
        {car},{money}
      </div>
    );
  }
}
