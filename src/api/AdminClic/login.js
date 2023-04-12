import ajax from "./ajax";
//登录
export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, "POST");
export const getlogin = (data) => ajax("/manage/user/list", data, "GET");
