# antd 项目

## v6 版本的路由

import {Route, Routes } from 'react-router-dom';

<div>
    <Routes >
        <Route path="/" element={<Home />} />
    </Routes>
 
 </div>

## 将 Redirect 改为 Navigate

import { Navigate } from 'react-router-dom';
//重定向到首页
return <Navigate to="/" />

## 用 useNavigate 替代 useHistory 使用

import {useNavigate} from 'react-router-dom';
const navigate = useNavigate();
//如去首页
navigate("/home");
//还可使用
navigate(-1); //后退到前一页
navigate(-2); //后退到前两页的前一页，
navigate(1); //前向导航 等等依此类推

使用 Outlet 组件，此组件是一个占位符，告诉 React Router 嵌套的内容应该放到哪里。
/路由中
<Routes>
<Route path='/user/\*' element={<User />}
<Route path='user-item' element={<div>我是嵌套子项</div>} />
<Route/>
</Routes>

//User 组件中
import {Outlet} from 'react-router-dom';
const User = () => {
return

<section>
<h1>我是外容器</h1>
<Outlet />
</section>
}
export default User;

可以通过 API useRoutes 读取一个路由配置数组，生成相应的路由组件列表,来实现路由配置化，

并且可以在路由配置中带 meta 属性，增加其他配置化信息，如路由图标，是否需要登录等其他信息
import { useRoutes } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
export const routes = [
{
path: '/',
element: <Layout />,
children: [
{
path: 'home',
meta: {
title: '首页',
icon: <DashboardOutlined />,
},
children: [
{
path: 'application',
element: <Application />,
meta: {
title: '应用',
}
}
]
},
{
path: 'setting',
element: <Setting />,
meta: {
title: '设置',
icon: <UserOutlined />, //图表名称
}
}
]
},
{
path: '/login',
element: <Login />,
meta: {
title: '登录',
noLogin: true,
hideMenu: true
}
},
{
path: '\*',
element: <Page404 />,
meta: {
title: '404',
noLogin: true,
hideMenu: true
}
},
];
const Routes = () => (
useRoutes(routes)
)
export default Routes;
