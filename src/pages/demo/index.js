import React, { useState } from "react";
import { Select } from "antd";
import Onde from "./one/one";
import Twon from "./one/twn";
import Communication from "./communication";
import ClassIndex from "./communication/classIndex";
import Father from "./communication/demo/father";
import TodoMvc from "./todoMvc";
import Hooks from "./communication/hooks";
export default function Demo() {
  //下拉框数据
  const options = [
    {
      key: 1,
      value: "one",
      label: "输入评价列表",
    },
    { key: 2, value: "two", label: "受控组件样例" },
    {
      key: 3,
      value: "tree",
      label: "组件间通信",
    },
    {
      key: 4,
      value: "foru",
      label: "类组件实现通信",
    },
    {
      key: 5,
      value: "five",
      label: "父子通信综合案例（函数组件）",
    },
    {
      key: 6,
      value: "six",
      label: "TodoMvc类组件版",
    },
    {
      key: 7,
      value: "seven",
      label: "hooks组件的使用",
    },
  ];

  const [state, setState] = useState("one");
  const handlchang = (value) => {
    setState(value);
  };
  // 根据option不同渲染你需要的组件
  const renderList = () => {
    console.log(state);
    switch (state) {
      case "one":
        return <Onde />;

      case "two":
        return <Twon />;
      case "tree":
        return <Communication car="小黄车" money={100} />;
      case "foru":
        return <ClassIndex car="小黄车" money={100} />;
      case "five":
        return <Father />;
      case "six":
        return <TodoMvc />;
      case "seven":
        return <Hooks />;
      default:
        return <div>没有更多内容了</div>;
    }
  };
  return (
    <div>
      <Select
        defaultValue={state}
        style={{
          width: 200,
        }}
        value={state}
        options={options}
        onChange={handlchang}
      />
      <div>{renderList()}</div>
    </div>
  );
}
