// glsl高亮显示需要安装插件Comment target templates
//顶点着色器
export const VERTEX_SHADER_SOURCE = /*glsl*/ `
 attribute vec4 aPosition;
   void main(){
     gl_Position = aPosition;//vec4(0.0,0.0,0.0,1.0);
     gl_PointSize = 10.0;
   }
 `;
// 片元着色器
export const FRAGMENT_SHADER_SOURCE = /*glsl*/ `
 precision mediump float;
 uniform vec2 uColor;
   //vec4(uColor.r,uColor.g,0.0,1.0) //
   void main(){
     gl_FragColor =  vec4(uColor.r, uColor.g, 0.0,1.0);
   }
 `;
