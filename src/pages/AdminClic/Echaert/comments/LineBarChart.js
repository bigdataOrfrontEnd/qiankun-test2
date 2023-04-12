import React from "react";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";
//ehcart 第一步创建一个ref，然后使用
export default function LineBarChart() {
  const chartRef = useRef(null); //创建一个DOM
  //渲染需要的数据,这个数据可以通过父组件传递过来
  const option = {
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
        type: "bar",
      },
    ],
  };
  //   屏幕大小变换的回调函数
  const newRsize = (mychart) => {
    //获取当前屏幕尺寸
    const withd = document.documentElement.clientWidth;
    console.log(withd);
    if (withd < 600) {
      mychart.resize({
        with: 500,
        height: 600,
      });
    } else {
      mychart.resize({
        with: 700,
        height: 900,
      });
    }
  };
  useEffect(() => {
    // 初始化图表
    const mychart = echarts.init(chartRef.current);
    // 加载图表
    mychart.setOption(option);
    // 响应式，监听屏幕大小变化
    window.addEventListener("resize", () => newRsize(mychart));
    // / 处理点击事件并且跳转到相应的百度搜索页面
  });
  return <div ref={chartRef} style={{ height: "400px" }}></div>;
}
