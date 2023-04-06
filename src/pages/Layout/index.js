// 整体布局页面
import { React } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function Layut() {
  const { Header, Footer, Sider, Content } = Layout;
  const navigate = useNavigate();
  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("首页", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Navigation One", "sub1", [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Navigation Two", "sub2", [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
  ];
  function go(path) {
    console.log(path);
    navigate(path);
  }

  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              items={items}
              onClick={go({ items })}
            />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
