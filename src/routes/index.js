import { useRoutes } from "react-router-dom";
import Layout from "../pages/Layout";
import Application from "../pages/home/application";
import Setting from "../pages/setting";
import Login from "../pages/Login";
import Page404 from "../page404";
import Home from "../pages/home";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
        meta: {
          title: "首页",
          icon: <DashboardOutlined />,
        },
        children: [
          {
            path: "application",
            element: <Application />,
            meta: {
              title: "应用",
            },
          },
        ],
      },
      {
        path: "setting",
        element: <Setting />,
        meta: {
          title: "设置",
          icon: <UserOutlined />, //图表名称
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      title: "登录",
      noLogin: true,
      hideMenu: true,
    },
  },
  {
    path: "*",
    element: <Page404 />,
    meta: {
      title: "404",
      noLogin: true,
      hideMenu: true,
    },
  },
];
const Routes = () => useRoutes(routes);
export default Routes;
