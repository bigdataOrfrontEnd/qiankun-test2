import React, { Component } from "react";
import "./styles/base.css";
import "./styles/index.css";
// 导入组件
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default class TodoStyle extends Component {
  render() {
    const listDate = [
      { id: "1", name: "小明", done: false },
      { id: "2", name: "侠岚", done: true },
      { id: "3", name: "小风", done: false },
    ];

    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain Data={listDate}></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    );
  }
}