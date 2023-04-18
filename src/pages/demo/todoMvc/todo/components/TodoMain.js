import React, { Component } from "react";

import TodoItem from "./TodoItem";
export default class TodoMain extends Component {
  render() {
    const { Data, type } = this.props;
    console.log(type);
    let showData = [];
    if (type === "completed") {
      showData = Data.filter((item) => item.done);
    } else if (type === "active") {
      showData = Data.filter((item) => !item.done);
    } else {
      showData = Data;
    }
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={Data.every((item) => item.done)}
          onChange={this.checakAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showData.map((item) => (
            <TodoItem item={item} key={item.id} />
          ))}
        </ul>
      </section>
    );
  }

  checakAll = (e) => {
    this.props.checke(e.target.checked);
  };
}
