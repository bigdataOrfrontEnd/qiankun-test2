import React from "react";
import { Outlet } from "react-router-dom";
export default function HomeContent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
