import React, { Component } from "react";
import "./index.scss";
// 功能介绍
// 1. 展示评论列表功能
// 1.1.通过state提供评论列表的数据
// 1.2. 通过map可以动态渲染数据
// 2. 清空评论的功能
// 3. 删除评论的功能
// 4. 没有更多评论的处理

export default class one extends Component {
  state = {
    list: [
      { id: 1, name: "刘德华", content: "冰雨" },
      { id: 2, name: "琉璃", content: "冰雨" },
      { id: 3, name: "刘狗贼", content: "冰雨" },
      { id: 4, name: "刘德妈的话华", content: "冰雨" },
      { id: 5, name: "刘德华", content: "冰雨" },
    ],
    name: "",
    content: "",
  };
  render() {
    return (
      <div className="main">
        <input type="text" placeholder="请输入评论人" />
        <input type="textarea" placeholder="请输入评论内容" />
        <button>发表评论</button>
        <button onClick={this.clear}>清空评论</button>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
  // 清空评论
  clear = () => {
    this.setState({
      list: [],
    });
  };
  //处理暂无评论的显示
  renderList() {
    if (this.state.list.length === 0) {
      return <p>暂无评论</p>;
    } else {
      return this.state.list.map((item) => (
        <li key={item.id}>
          <h1>评论人：{item.name}</h1>
          <p>评论内容：{item.content}</p>
          {/* <button onClick={this.del.bind(this, item.id)}>删除</button> */}
          <button onClick={() => this.del(item.id)}>删除</button>
        </li>
      ));
    }
  }
  //删除每条评论，需要传递参数
  del = (id) => {
    console.log(id);
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };
  //发表评论，并清空评论输入的地方
}
