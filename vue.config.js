/*
 * @Author: 徐庆凯
 * @Date: 2020-07-30 13:40:16
 * @LastEditTime: 2021-11-02 15:50:07
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \micro-demo-vue\vue.config.js
 * @记得注释
 */
const Timestamp = new Date().getTime()
const path = require('path')
const { name } = require('./package')
const port = process.env.port || 8080

function resolve(dir) {
  return path.join(__dirname, dir)
}

const publicPath = process.env.VUE_APP_DEPLOYURL || `http://localhost:${port}`

module.exports = {
  publicPath: './',
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/var.scss";'
      }
    },
    extract: {
      filename: `[name].[hash]${Timestamp}.css`,
      chunkFilename: `[name].[hash]${Timestamp}.css`
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath
          }
        }
      })
      .end()
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
            publicPath
          }
        }
      })
    config.resolve.symlinks(true)
    config.output.filename(`[name].[hash]${Timestamp}.js`).end()
    config.output.chunkFilename(`[name].[hash]${Timestamp}.js`).end()
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  runtimeCompiler: true,
  productionSourceMap: false
}
