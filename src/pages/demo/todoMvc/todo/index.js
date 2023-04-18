import React, { Component } from "react";
import "./styles/base.css";
import "./styles/index.css";
// 导入组件
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default class TodoStyle extends Component {
  state = {
    listDate: [
      { id: "1", name: "小明", done: false },
      { id: "2", name: "侠岚", done: true },
      { id: "3", name: "小风", done: false },
    ],
  };

  render() {
    const { listDate } = this.state;
    return (
      <section className="todoapp">
        <TodoHeader addTdos={this.addtdos}></TodoHeader>
        <TodoMain
          Data={listDate}
          del={this.delTodo}
          TodoDone={this.Done}
          onkoedd={this.onkeyup}
        ></TodoMain>
        <TodoFooter
          list={this.state.listDate}
          clear={this.clear}
          type={this.tpyemethod}
        ></TodoFooter>
      </section>
    );
  }
  delTodo = (id) => {
    this.setState({
      listDate: this.state.listDate.filter((item) => item.id !== id),
    });
  };
  Done = (id) => {
    this.setState({
      listDate: this.state.listDate.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      }),
    });
  };
  addtdos = (addname) => {
    this.setState({
      listDate: [
        { id: Date.now(), name: addname, done: false },
        ...this.state.listDate,
      ],
    });
  };
  onkeyup = (id, name) => {
    this.setState({
      listDate: this.state.listDate.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name,
          };
        } else {
          return item;
        }
      }),
    });
  };
  clear = () => {
    this.setState({
      listDate: this.state.listDate.filter((item) => !item.done),
    });
  };
  tpyemethod = (type) => {
    switch (type) {
      case "active":
        this.setState({
          listDate: this.state.listDate.filter((item) => item.done),
        });
        break;
      case "all":
        this.setState({
          listDate: this.state.listDate,
        });
        break;
      case "completed":
        this.setState({
          listDate: this.state.listDate.filter((item) => !item.done),
        });
        break;
      default:
        this.setState({
          listDate: this.state.listDate,
        });
        break;
    }
  };
}
