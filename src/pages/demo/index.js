import React, { useState } from "react";
import { Select } from "antd";
import Onde from "./one/one";
import Twon from "./one/twn";
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
      value: "treee",
      label: "3",
    },
    {
      key: 4,
      value: "foru",
      label: "4",
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
      <div></div>
    </div>
  );
}
