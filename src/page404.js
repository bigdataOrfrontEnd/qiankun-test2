import React from "react";
import "@/style/404.scss";
import { Link } from "react-router-dom";
export default function Page404() {
  return (
    <div className="context">
      <div className="main">
        <h1>此页面不存在</h1>
        <p>404</p>
        <Link to="/home" className="ahove">
          go back Home
        </Link>
      </div>
    </div>
  );
}
