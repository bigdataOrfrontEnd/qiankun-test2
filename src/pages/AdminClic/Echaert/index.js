import React from "react";
import LineBarChart from "./comments/LineBarChart";
import { useState } from "react";
import { Card } from "antd";
export default function Echart() {
  // 思路整理---我把要展示过来的图放到Card中，
  // 1. 拿到后端定义的值，一个数组，数组中存放的数据是这个样子的,后端需要展示三个图表
  const houduan = [
    {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
    {
      xAxis: {
        type: "category",
        data: ["1", "2", "3", "4", "5", "6t", "7"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
    {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
  ];
  //   2.循环这个数组，看看产生多少个Card，-----也就是产生多少个图表
  // 使用函数组件的时候怎么循环----解决掉它
  // 3.将每个对象的数据传递给子组件----到此完成
  //   4. 具体步骤老婆帮忙实现----需要一起讨论看一下

  return (
    // 这个循环,产生多少个Card
    <div
      style={{
        height: "100vh",
        width: "100vw",
        paddingLeft: "10px",
      }}
    >
      {houduan.map((item) => (
        <Card
          title="React Echarts 折线"
          style={{
            width: 400,
            textAlign: "center",
          }}
        >
          <LineBarChart option={item} />
        </Card>
      ))}
    </div>
  );
}
