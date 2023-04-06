import Layout from "@/pages/Layout/index";
import Application from "@/pages/home/application";
import Setting from "@/pages/setting";
import Login from "@/pages/Login";
import Page404 from "@/page404";
import Home from "@/pages/home";
import WebGl from "@/pages/webgl/WebGl";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
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
      {
        path: "webgl",
        element: <WebGl />,
        meta: {
          title: "",
          noLogin: true,
          hideMenu: true,
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
    path: "/butiful",
    element: <></>,
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

export default Routes;
