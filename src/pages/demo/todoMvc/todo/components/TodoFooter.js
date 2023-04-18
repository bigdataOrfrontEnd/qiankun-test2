import React, { Component } from "react";

export default class TodoFooter extends Component {
  state = {
    type: "all",
  };
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
              <a
                href="#/"
                className={this.state.type === "all" ? "selected" : ""}
                onClick={() => {
                  this.handleClick("all");
                }}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/active"
                className={this.state.type === "active" ? "selected" : ""}
                onClick={() => {
                  this.handleClick("active");
                }}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/completed"
                className={this.state.type === "completed" ? "selected" : ""}
                onClick={() => {
                  this.handleClick("completed");
                }}
              >
                Completed
              </a>
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
  // 获取显示的类型
  handleClick = (type) => {};
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      console.log("罗友变换了", window.location.hash.split("/")[1]);
      this.setState(
        {
          type: window.location.hash.split("/")[1],
        },
        () => {
          this.props.type(this.state.type);
        }
      );
    });
  }
}
