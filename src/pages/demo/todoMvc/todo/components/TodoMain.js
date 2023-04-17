import React, { Component } from "react";

export default class TodoMain extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.Data.map((item) => (
            // 是否有直线completed
            <li key={item.id} className={item.done ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.changhadle(item.id)}
                  name="radot"
                />
                <label> {item.name}</label>
                <button
                  className="destroy"
                  onClick={() => {
                    this.del(item.id);
                  }}
                ></button>
              </div>
              <input className="edit" />
            </li>
          ))}
        </ul>
      </section>
    );
  }
  del = (id) => {
    this.props.del(id);
  };
  changhadle = (id) => {
    this.props.TodoDone(id);
  };
}
