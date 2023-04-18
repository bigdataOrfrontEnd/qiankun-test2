import React, { Component } from "react";

export default class RenderProps extends Component {
  render() {
    return (
      <div>
        <All render={(rr) => <A m={rr} />} />
      </div>
    );
  }
}
// 组件1
class B extends Component {
  render() {
    const { x, y } = this.props.s;
    return (
      <div>
        {x}-{y}
      </div>
    );
  }
}
// 组件2
class A extends Component {
  render() {
    const { x, y } = this.props.m;
    return (
      <div>
        <h1>看来这个鼠标达到了复用的效果</h1>
        {x}-{y}
      </div>
    );
  }
}
//只写逻辑
class All extends Component {
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
    return this.props.render(this.state);
  }
}
