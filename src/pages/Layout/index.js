// 整体布局页面
import { React } from "react";
import { Layout } from "antd";
import HomeHeader from "./Compments/HomeHeader";
import HomeSider from "./Compments/HomeSider";
import HomeBreadrumb from "./Compments/HomeBreadrumb";
import HomeContent from "./Compments/HomeContent";
import "./index.scss";

export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <Header className="Home-main">
        <HomeHeader />
      </Header>
      <Layout>
        <Sider width={300} theme="light">
          <HomeSider />
        </Sider>
        <Content style={{ padding: "20px" }}>
          <HomeBreadrumb />
          <HomeContent />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
