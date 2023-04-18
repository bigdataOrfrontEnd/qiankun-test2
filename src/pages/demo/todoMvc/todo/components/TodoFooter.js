import React, { Component } from "react";

export default class TodoFooter extends Component {
  render() {
    const { list } = this.props;
    if (list.length === 0) {
      return null;
    } else {
      const ledtitem = list.filter((item) => !item.done).length;
      const isShow = list.some((item) => item.done);
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
          {isShow ? (
            <button className="clear-completed" onClick={this.clear}>
              Clear completed
            </button>
          ) : (
            ""
          )}
        </footer>
      );
    }
  }
  //清除已经完成的任务
  clear = () => {
    this.props.clear();
  };
}
