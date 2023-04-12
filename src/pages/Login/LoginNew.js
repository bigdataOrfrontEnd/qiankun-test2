import React, { Component } from "react";
import "./LoginNew.scss";
import { Button, Form, Input } from "antd";
import { reqLogin, getlogin } from "@/api/AdminClic/login";
export default class LoginNew extends Component {
  componentDidMount() {
    getlogin().then((res) => {
      console.log(res);
    });
  }
  onFinish = async (values) => {
    const { username, password } = values;
    try {
      const request = await reqLogin(username, password);
      console.log("成功", request.data);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img
            src={[require("../../assets/adminClicImages/logo.png")]}
            alt=""
          />
          <p>React项目学习笔记</p>
        </div>
        <div className="login-content">
          <h2>用户登录</h2>
          <Form onFinish={this.onFinish}>
            <Form.Item
              label="姓名"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入名字",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
