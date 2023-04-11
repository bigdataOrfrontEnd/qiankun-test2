const { name } = require("./package");
const path = require("path");
module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.globalObject = "window";
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src"),
    };
    // config.output.publicPath = "/";
    return config;
  },
  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.proxy = {
      api: {
        target: "http://localhost:5000",
      },
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
