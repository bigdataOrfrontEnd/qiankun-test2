import React, { useState } from "react";
import { Select } from "antd";
import Onde from "./one/one";
export default function Demo() {
  //下拉框数据
  const options = [
    {
      key: 1,
      value: "one",
      label: "1",
    },
    { key: 2, value: "trow", label: "2" },
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

  const [state, setState] = useState([options[0]]);
  const handlchang = (value) => {
    setState({ state: value });
    console.log(state);
  };
  // 根据option不同渲染你需要的组件
  const renderList = () => {
    const { value } = state;
    if (value === "one") {
      console.log("222", value);
      return <Onde />;
    } else {
      console.log("111", value);
      return <div>没有更多内容了</div>;
    }
  };
  return (
    <div>
      <Select
        defaultValue={state}
        style={{
          width: 120,
        }}
        value={state}
        options={options}
        onChange={handlchang}
      />
      <div>{renderList()}</div>
    </div>
  );
}
