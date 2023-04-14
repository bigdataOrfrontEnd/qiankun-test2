import React, { useState } from "react";
import Child from "./child";
export default function Father(props) {
  const [wifl, setWifl] = useState("");
  const [sonwif, setSonwifl] = useState("");
  const handlechange = (e) => {
    console.log(e);
    setWifl(e.target.value);
  };
  const chnagname = (name) => {
    console.log(name);
    setSonwifl(name);
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
      <br />
      来自子组件的值：{sonwif}
      <hr />
      <Child wifi={wifl} namee={chnagname} />
    </div>
  );
}
