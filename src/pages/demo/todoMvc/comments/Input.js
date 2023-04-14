import React, { Component } from "react";
import { Input } from "antd";
export default class Inputtod extends Component {
  //自己添加点功能，如果有了，不让添加，并且找出来，没有就添加进去
  render() {
    return (
      <div>
        <Input type="text" placeholder="请输入你的内容" />
      </div>
    );
  }
}
