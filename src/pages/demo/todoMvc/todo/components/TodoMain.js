import React, { Component } from "react";

export default class TodoMain extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.Data.map((item) => (
            <li key={item.id}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label> {item.name}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
