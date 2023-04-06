// 整体布局页面
import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
export default function Layut() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
