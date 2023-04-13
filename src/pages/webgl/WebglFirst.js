import React, { useEffect } from "react";
import inits from "./lib/init";
import { VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE } from "./shader/shader";
export default function WebglFirst() {
  useEffect(() => {
    //获取dom元素,解决webgl不提示问题
    /** @type {HTMLCanvasElement} */
    const ctx = document.querySelector("#canvas");
    //调用接口
    const gl = ctx.getContext("webgl");
    // 初始化
    const program = inits(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE);
    const aPosition = gl.getAttribLocation(program, "aPosition");
    let x = 0;
    setInterval(() => {
      x += 0.1;
      if (x > 1.0) x = 0;
      gl.vertexAttrib1f(aPosition, x);
      //绘制
      gl.drawArrays(gl.POINTS, 0, 1);
    }, 200);
  });

  return (
    <div>
      <canvas id="canvas" width={800} height={800}></canvas>
    </div>
  );
}
