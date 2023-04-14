import React, { Component } from "react";
import { CloseOutlined } from "@ant-design/icons";
import "../index.scss";
export default class Listtod extends Component {
  render() {
    return (
      <div className="hendader">
        <div className="mainm">
          <input type="checkbox" />
          <span>今天的任务是否完成了</span>
          <CloseOutlined />
        </div>
      </div>
    );
  }
}
