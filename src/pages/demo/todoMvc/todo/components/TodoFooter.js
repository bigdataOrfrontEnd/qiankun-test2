import React, { Component } from "react";

export default class TodoFooter extends Component {
  render() {
    const { list } = this.props;
    if (list.length === 0) {
      return null;
    } else {
      const ledtitem = list.filter((item) => !item.done).length;
      return (
        <footer className="footer">
          <span className="todo-count">
            <strong>{ledtitem}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      );
    }
  }
}
