import React, { Component } from "react";
import Inputtod from "./comments/Input";
import Listtod from "./comments/List";
import "./index.scss";
export default class TodoMvc extends Component {
  render() {
    return (
      <div className="mains">
        <h1>TodoMVC</h1>
        <Inputtod />
        <Listtod />
        <hr />
        <div></div>
      </div>
    );
  }
}
