import React, { Component } from "react";
import "./styles/base.css";
import "./styles/index.css";
// 导入组件
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
export default class TodoStyle extends Component {
  // { id: "1", name: "小明", done: false },
  //     { id: "2", name: "侠岚", done: true },
  //     { id: "3", name: "小风", done: false },
  state = {
    listDate: [],
    type: "all",
  };
  // 走本地读取
  componentDidMount() {
    this.setState({
      listDate: JSON.parse(localStorage.getItem("todo")) || [],
    });
  }
  //存本地
  componentDidUpdate() {
    localStorage.setItem("todo", JSON.stringify(this.state.listDate));
  }

  render() {
    const { listDate, type } = this.state;
    return (
      <section className="todoapp">
        <TodoHeader addTdos={this.addtdos}></TodoHeader>
        <TodoMain
          Data={listDate}
          del={this.delTodo}
          TodoDone={this.Done}
          onkoedd={this.onkeyup}
          type={type}
          checke={this.checke}
        ></TodoMain>
        <TodoFooter
          list={this.state.listDate}
          clear={this.clear}
          type={this.state.type}
          typechange={this.tpyemethod}
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
    this.setState({
      type,
    });
  };
  checke = (thce) => {
    this.setState({
      listDate: this.state.listDate.map((item) => ({ ...item, done: thce })),
    });
  };
}
