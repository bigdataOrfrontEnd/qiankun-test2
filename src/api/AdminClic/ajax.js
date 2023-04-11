// 能发送ajax请求的函数模块
// 包装axios
import axios from "axios";
import { message } from "antd";

export default function ajax(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    let promise;
    if (method === "GET") {
      promise = axios.get(url, { params: data });
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then((response) => {
        // 如果成功了 , 调用 resolve(response.data)
        resolve(response.data);
      })
      .catch((error) => {
        message.error(" 请求错误: " + error.message);
      });
  });
}
