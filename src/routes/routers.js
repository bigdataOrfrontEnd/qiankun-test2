import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
const Layout = lazy(() => import("@/pages/Layout/index"));
const Home = lazy(() => import("@/pages/home/index"));
const Setting = lazy(() => import("@/pages/setting/index"));
const Login = lazy(() => import("@/pages/Login/index"));
const Page404 = lazy(() => import("@/page404"));

export const Routes = [
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
const Router = createBrowserRouter(Routes);
export default Router;
