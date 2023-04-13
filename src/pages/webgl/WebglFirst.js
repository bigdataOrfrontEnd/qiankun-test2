import React, { useEffect } from "react";

export default function WebglFirst() {
  useEffect(() => {
    //获取dom元素document.createElement("p");
    /** @type {HTMLCanvasElement} */
    const ctx = document.querySelector("#canvas");
    //调用接口

    const gl = ctx.getContext("webgl");

    //清空颜色
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  });

  return (
    <div>
      <canvas id="canvas" width={800} height={800}></canvas>
    </div>
  );
}
