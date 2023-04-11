import React, { Component } from "react";
import "./LoginNew.scss";
import { Button, Checkbox, Form, Input } from "antd";
export default class LoginNew extends Component {
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
          <Form>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
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
