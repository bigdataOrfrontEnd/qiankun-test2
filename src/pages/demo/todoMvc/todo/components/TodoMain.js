import React, { Component } from "react";
import classNames from "classnames";
export default class TodoMain extends Component {
  state = {
    cunruentid: "",
    curentname: "",
  };
  render() {
    const { Data, type } = this.props;
    console.log(type);
    let showData = [];
    if (type === "completed") {
      showData = Data.filter((item) => item.done);
    } else if (type === "active") {
      showData = Data.filter((item) => !item.done);
    } else {
      showData = Data;
    }
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showData.map((item) => (
            // 是否有直线completed
            <li
              key={item.id}
              className={classNames({
                completed: item.done,
                editing: this.state.cunruentid === item.id,
              })}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.changhadle(item.id)}
                  name="radot"
                />
                <label onDoubleClick={() => this.onDoubleClick(item)}>
                  {item.name}
                </label>
                <button
                  className="destroy"
                  onClick={() => {
                    this.del(item.id);
                  }}
                ></button>
              </div>
              <input
                className="edit"
                value={this.state.curentname}
                onChange={(e) => this.setState({ curentname: e.target.value })}
                onKeyUp={this.onkesd}
              />
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
  onDoubleClick = ({ id, name }) => {
    this.setState({
      cunruentid: id,
      curentname: name,
    });
  };
  onkesd = (e) => {
    console.log(e);
    if (e.keyCode === 27) {
      this.setState({
        cunruentid: "",
        curentname: "",
      });
    }
    if (e.keyCode === 13) {
      this.props.onkoedd(this.state.cunruentid, this.state.curentname);
      this.setState({
        cunruentid: "",
        curentname: "",
      });
    }
  };
}
