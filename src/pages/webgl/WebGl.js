import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import WebglFirst from "./WebglFirst";

export default function WebGl() {
  //定义一个数组，存放名字，组件，根据选择的不同加载不同的学习点
  const items = [
    {
      title: "webgl入门",
      elemt: [
        {
          name: "2.2 绘制一个点",
          Coment: <WebglFirst />,
          text: "",
        },
        {
          name: "2.3 介绍三维坐标",
          Coment: <WebglFirst />,
        },
      ],
    },
  ];
  //可以不使用路由，使用组件的方式，按钮点击显示不同的
  return (
    <div>
      <DownOutlined>1 webgl入门</DownOutlined>
      <WebglFirst />
    </div>
  );
}
