// 登录页面
import { React, useState } from "react";
import "./index.scss";
import { Form, Input, Button, Radio, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="loginbg">
      <h1>我们的实验田</h1>
      <div className="main">
        <h2>登录</h2>
        <Form>
          <Input placeholder="请输入用户名" prefix={<UserOutlined />}></Input>
          <Input
            type="password"
            placeholder="请输入密码"
            prefix={<UserOutlined />}
            autoComplete="off"
          ></Input>
          {/* todo 实现一个功能，这个圆圈勾选了，才能让登录按钮可以使用 */}
          <Radio>
            <Button type="text" onClick={showModal}>
              请认证阅读乡姑纳规定----应该是一个弹框
            </Button>
          </Radio>
          <br />
          <Button type="primary"> 登录</Button>
        </Form>
      </div>
      <Modal
        title="详细信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
}
