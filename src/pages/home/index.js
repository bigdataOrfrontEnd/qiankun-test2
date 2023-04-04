import React from "react";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div>
      首页，我还有个孩子
      <Outlet />
    </div>
  );
}
