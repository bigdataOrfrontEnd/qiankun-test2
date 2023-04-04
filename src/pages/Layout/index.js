// 整体布局页面
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
}
