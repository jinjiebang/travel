const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/travel/",
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("styles", resolve("src/assets/styles"))
      .set("components", resolve("src/components"));
  },
  devServer: {
    proxy: {
      "/api/travel": {
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api/travel": "/static/mock"
        }
      }
    }
  }
};
