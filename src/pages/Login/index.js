// 登录页面
import React from "react";
import "./index.scss";
import { Form, Input, Button, Radio } from "antd";
export default function Login() {
  return (
    <div className="loginbg">
      <h1>我们的实验田</h1>
      <div className="main">
        <h2>登录</h2>
        <Form>
          <Input placeholder="请输入用户名"></Input>
          <Input type="password" placeholder="请输入密码"></Input>
          <Radio>请认证阅读乡姑纳规定----应该是一个弹框</Radio>
          <Button> 登录</Button>
        </Form>
      </div>
    </div>
  );
}
