import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./public-path"; //这个是解决静态资源加载的问题,放在组件前面
import "./index.scss";
import "antd/dist/reset.css";
import App from "./App";
/** 不是qiankun 聚合的时候进行的加载 */
if (!window.__POWERED_BY_QIANKUN__) {
  let root = ReactDOM.createRoot(document.getElementById("son"));
  root.render(
    <Router basename={window.__POWERED_BY_QIANKUN__ ? "/app-test2" : "/"}>
      <App />
    </Router>
  );
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props) {
  console.log("bootstrap2", props);
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("mount2", props);
  // props.onGlobalStateChange((state: any, prev: any) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log("子项目----start");
  //   console.log(state, prev);
  //   console.log("子项目----end");
  // });
  // props.setGlobalState(state);
  let root = ReactDOM.createRoot(props.container.querySelector("#son"));
  root.render(<App />);
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  // root.unmount();
}

// 增加 update 钩子以便主应用手动更新微应用
export async function update(props) {}
