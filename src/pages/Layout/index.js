// 整体布局页面
import { React } from "react";
import { Layout } from "antd";
import HomeHeader from "./Compments/HomeHeader";
import HomeSider from "./Compments/HomeSider";
import HomeBreadrumb from "./Compments/HomeBreadrumb";
import HomeContent from "./Compments/HomeContent";

export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header>
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
    </div>
  );
}
