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
      <hr />
      <hr />
      <h2>字符通信</h2>
      子组件向父组件传递信息的时候，
      <p> 1. 父组件定义一个函数，然后传递给子组件 </p>
      <p>2. 子组件通过props拿到这个函数，</p>
      <p>3. 把要传递的值按照参数的形式传递给父组件里面的函数</p>
    </div>
  );
}
