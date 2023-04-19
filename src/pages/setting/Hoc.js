import React, { Component } from "react";

export default class Hoc extends Component {
  render() {
    const PositonsMoust = WithMouse(Position);
    return <PositonsMoust />;
  }
}
const WithMouse = (Base) => {
  class Mouse extends Component {
    state = {
      x: 0,
      y: 0,
    };
    mouse = (e) => {
      this.setState({
        x: e.offsetX,
        y: e.offsetY,
      });
    };
    componentDidMount() {
      window.addEventListener("mousemove", this.mouse);
    }
    componentWillUnmount() {
      window.removeEventListener("mousemove", this.mouse);
    }
    render() {
      // 这个地方为啥要结构
      return <Base {...this.state}></Base>;
    }
  }
  return Mouse;
};
class Position extends Component {
  render() {
    const { x, y } = this.props;
    return (
      <div>
        {x}---{y}
      </div>
    );
  }
}
