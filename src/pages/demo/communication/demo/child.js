import React, { useState } from "react";

export default function Child({ wifi, namee }) {
  const [value, setValue] = useState("");
  const hangdchange = (e) => {
    setValue(e.target.value);
    // 将值传递给父组件
    namee(e.target.value);
  };
  return (
    <div>
      来自父组件的信息：{wifi}
      <br />
      子组件传递的信息:
      <input
        type="text"
        placeholder="请输入你的信息"
        value={value}
        onChange={hangdchange}
        name="text"
      />
    </div>
  );
}
