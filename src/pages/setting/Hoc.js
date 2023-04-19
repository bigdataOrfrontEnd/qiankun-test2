import React, { Component } from "react";
import { getData } from "@/api/fetch";
export default class Hoc extends Component {
  state = {
    date: "",
  };
  componentDidMount() {
    getData().then(
      (req) => {
        console.log(req);
        this.setState({
          date: req,
        });
      },
      () => {
        console.log(this.state.date);
      }
    );
  }
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
      // 这个地方为啥要结构<Base {...this.state}></Base>
      return (
        <div>
          {this.state.date}
          11
        </div>
      );
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
