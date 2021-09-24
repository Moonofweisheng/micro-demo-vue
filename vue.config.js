/*
 * @Author: 徐庆凯
 * @Date: 2020-07-30 13:40:16
 * @LastEditTime: 2020-10-26 20:21:22
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: /fant-pc/template/vue.config.js
 * @记得注释
 */
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const Timestamp = new Date().getTime();

module.exports = {
  publicPath: "./",
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/var.scss";'
      }
    }
  },
  devServer: {
    compress: true,
    disableHostCheck: true
  },
  chainWebpack: config => {
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    // // 修复HMR
    config.resolve.symlinks(true);
    config.output.filename(`[name].[hash]${Timestamp}.js`).end();
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240
          // 其余配置查看compression-webpack-plugin
        })
      );
    }
  },
  runtimeCompiler: true,
  productionSourceMap: false
};
