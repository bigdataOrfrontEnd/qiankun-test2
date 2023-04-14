import React, { lazy } from "react";
import WebGl from "@/pages/webgl/WebGl";
import {
  DashboardOutlined,
  UserOutlined,
  ApartmentOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import Echart from "@/pages/AdminClic/Echaert";
import WaterDrop from "@/pages/butiful/waterDrop/waterDrop";
const Home = lazy(() => import("@/pages/Layout/index"));
const Setting = lazy(() => import("@/pages/setting/index"));
const Login = lazy(() => import("@/pages/Login/index"));
const LoginNew = lazy(() => import("@/pages/Login/LoginNew"));
const Page404 = lazy(() => import("@/page404"));
const Demo = lazy(() => import("@/pages/demo/index"));
const Butl = lazy(() => import("@/pages/butiful/new/one"));
const HomeLout = lazy(() => import("@/pages/butiful/two/index"));
export const Routes = [
  {
    path: "/",
    element: <Home />,
    name: "wu",
    meta: {
      hideMenu: false,
    },
    children: [
      {
        path: "webgl",
        name: "webgl",
        element: <WebGl />,
        meta: {
          title: "webgl实验案例",
          icon: <DashboardOutlined />,
          hideMenu: true,
        },
      },
      {
        path: "demo",
        name: "demo",
        element: <Demo />,
        meta: {
          title: "react基础知识学习",
          icon: <UserOutlined />, //图表名称
          hideMenu: true,
        },
      },
      {
        path: "setting",
        name: "setting",
        element: <Setting />,
        meta: {
          title: "设置",
          icon: <ApartmentOutlined />, //图表名称
          hideMenu: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    element: <Login />,
    meta: {
      title: "登录",
      hideMenu: false,
    },
  },
  {
    path: "/loginnew",
    name: "loginnew",
    element: <LoginNew />,
    meta: {
      title: "登录",
      hideMenu: false,
    },
  },
  {
    path: "/butiful",
    name: "butiful",
    element: <WaterDrop />,
    meta: {
      title: "样式案例",
      icon: <RiseOutlined />,
      hideMenu: true,
    },
  },
  {
    path: "/butiful2",
    name: "butiful2",
    element: <Butl />,
    meta: {
      title: "样式案例2",
      icon: <RiseOutlined />,
      hideMenu: true,
    },
  },
  {
    path: "/butiful3",
    name: "butiful3",
    element: <HomeLout />,
    meta: {
      title: "样式案例3",
      icon: <RiseOutlined />,
      hideMenu: true,
    },
  },
  {
    path: "*",
    name: "*",
    element: <Page404 />,
    meta: {
      title: "404",
      noLogin: true,
      hideMenu: false,
    },
  },
  {
    path: "/adminclic",
    name: "adminclic",
    element: <Echart />,
    meta: {
      title: "echaert",
      hideMenu: false,
    },
  },
];

export default Routes;
