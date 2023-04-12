import React, { Component } from "react";

export default class Twon extends Component {
  state = {
    text: "",
    check: false,
    inputselect: "",
  };
  render() {
    return (
      <div>
        <h2>input输入框</h2>
        <input
          type="text"
          placeholder="请输入你的姓名"
          value={this.state.text}
          onChange={this.handlchange}
          name="text"
        />
        <br />
        <label>
          <input
            name="check"
            type="checkbox"
            checked={this.state.check}
            onChange={this.handlchange}
          />
          sdf
        </label>
        <br />
        <select
          value={this.state.inputselect}
          name="inputselect"
          onChange={this.handlchange}
        >
          <option value="1" label="tianzh"></option>
          <option value="2">vad</option>
          <option value="3">vadss</option>
          <option value="4">dvsd</option>
        </select>
      </div>
    );
  }
  handlchange = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, value);

    this.setState({
      [name]: e.target.type === "checkbox" ? checked : value,
    });
  };
}
