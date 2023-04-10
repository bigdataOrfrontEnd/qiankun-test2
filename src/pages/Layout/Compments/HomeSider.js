import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Routes from "@/routes/index";
export default function HomeSider() {
  //先做一级路由
  const [items, setItem] = useState([
    {
      key: "",
      icon: "",
      label: "",
    },
  ]);
  const initMenu = () => {
    let mune = [];
    Routes.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (!child.meta.hideMenu) return;
          mune.push({
            key: child.path,
            icon: child.meta.icon,
            label: <Link to={item.path + child.path}>{child.meta.title}</Link>,
          });
        });
      } else {
        if (!item.meta.hideMenu) return;
        mune.push({
          key: item.name,
          icon: item.meta.icon,
          label: <Link to={item.path}>{item.meta.title}</Link>,
        });
      }
    });
    setItem(mune);
  };

  useEffect(() => {
    initMenu();
  }, []);
  return (
    <Menu
      style={{
        width: 300,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
}
