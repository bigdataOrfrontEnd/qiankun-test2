import React, { Component } from "react";

export default class TodoMain extends Component {
  del = (id) => {
    this.props.del(id);
  };
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
                <input className="toggle" type="checkbox" />
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
}
