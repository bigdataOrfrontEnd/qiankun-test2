import React, { Component, createRef } from "react";
import classNames from "classnames";
export default class TodoItem extends Component {
  state = {
    cunruentid: "",
    curentname: "",
  };
  inputRef = createRef(null);
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      // 是否有直线completed
      <li
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
          onBlur={() => this.setState({ cunruentid: "" })}
          ref={this.inputRef}
        />
      </li>
    );
  }
  del = (id) => {
    this.props.del(id);
  };
  changhadle = (id) => {
    this.props.TodoDone(id);
  };
  onDoubleClick = ({ id, name }) => {
    this.setState(
      {
        cunruentid: id,
        curentname: name,
      },
      () => {
        this.inputRef.current.focus();
      }
    );
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
