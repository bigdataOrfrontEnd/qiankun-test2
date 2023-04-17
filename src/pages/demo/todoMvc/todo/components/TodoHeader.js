import React, { Component } from "react";

export default class TodoHeader extends Component {
  state = {
    addTods: "",
  };
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.addTods}
          onChange={this.hangdchage}
          onKeyUp={this.onkey}
        />
      </header>
    );
  }
  hangdchage = (e) => {
    this.setState({
      addTods: e.target.value,
    });
  };
  onkey = (e) => {
    if (e.keyCode === 13) {
      if (!this.state.addTods.trim()) {
        return alert("不能为空");
      } else {
        this.props.addTdos(this.state.addTods);
      }
    }
  };
}
