import React, { useState } from "react";
import Child from "./child";
export default function Father() {
  const [wifl, setWifl] = useState("");
  const handlechange = (e) => {
    console.log(e);
    setWifl(e.target.value);
  };
  return (
    <div>
      <h1>父组件内容</h1>
      <label>
        <span>姓名：</span>
        <input
          type="text"
          placeholder="请输入你配偶的名字"
          value={wifl}
          onChange={handlechange}
          name="text"
        />
      </label>
      <hr />
      <Child wifi={wifl} />
    </div>
  );
}
