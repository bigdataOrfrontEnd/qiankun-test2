import React, { Component } from "react";

export default class TodoMain extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>1. 我是一个没有未完成任务的人</label>

              <button className="destroy"></button>
            </div>
            <input className="edit" />
          </li>
        </ul>
      </section>
    );
  }
}
