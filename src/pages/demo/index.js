import React from "react";
import Demo1 from "./01";
import { Button } from "antd";

export default function index() {
  return (
    <div>
      <Button>01类组件使用和通信</Button>
      <Demo1 />
    </div>
  );
}
