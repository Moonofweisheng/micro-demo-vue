/*
 * @Author: 徐庆凯
 * @Date: 2021-10-27 17:25:37
 * @LastEditTime: 2021-11-23 16:35:42
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \micro-demo-vue\src\http\ApiClient.ts
 * 记得注释
 */
import axios from 'axios'
import store from '../store'
import { CommonUtil } from 'fant-ui'
import SetGlobalAction from '@/micro/SetGlobalAction'

const qs = require('qs')
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: 'repeat' })
}
axios.defaults.timeout = 60000

export default class ApiClient {
  public static file(baseUrl: string) {
    return axios.create({
      baseURL: baseUrl
    })
  }

  public static server() {
    // 可以在这里拦截
    const baseUrl = process.env.VUE_APP_BASEURL
    return ApiClient.create(baseUrl)
  }

  public static create(baseUrl: string) {
    const instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true
    })

    instance.interceptors.request.use(
      (request) => {
        if (store.state.loginInfo && store.state.loginInfo.accessToken) {
          const tokenArr: string[] = store.state.loginInfo.accessToken.split('.')
          if (tokenArr.length === 3) {
            const tokenStr = tokenArr[1].replace(/-/g, '+').replace(/_/g, '/')
            const tokenInfo = JSON.parse(window.atob(tokenStr))
            const currentTime = Math.floor(new Date().getTime()) // 当前时间戳,向下取整
            // 判断token失效时间，若失效则将token替换成refreshToken
            if (tokenInfo.exp * 1000 < currentTime + store.state.serverDiffTime) {
              // token失效
              request.headers.Authorization = store.state.loginInfo.refreshToken
            } else {
              // 未过失效时间
              request.headers.Authorization = store.state.loginInfo.accessToken
            }
          } else {
            request.headers.Authorization = store.state.loginInfo.accessToken
          }
        } else if (store.state.loginInfo && store.state.loginInfo.temporaryToken) {
          request.headers.Authorization = store.state.loginInfo.temporaryToken
        }
        return request
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
      (response) => {
        // 更新token
        const loginInfo = store.state.loginInfo
        if (response.headers['access-token']) {
          loginInfo.accessToken = response.headers['access-token']
        }
        if (response.headers['refresh-token']) {
          loginInfo.refreshToken = response.headers['refresh-token']
        }
        // 计算服务器与用户PC的时间差
        if (response.headers['server-time']) {
          const currentTime = Math.floor(new Date().getTime()) // 当前时间戳,向下取整
          const diffTime = response.headers['server-time'] - currentTime // 时间差
          store.commit('serverDiffTime', diffTime)
        }
        // 更新用户信息
        store.commit('loginInfo', loginInfo)
        if (response.data instanceof ArrayBuffer) {
          return response
        }
        if (response.data.success) {
          return response
        } else {
          const error = new Error()
          if (response.data.msg) {
            error.message = response.data.msg
          } else {
            error.message = response.status + '服务器内部异常'
          }
          ;(error as any).response = response.data
          throw error
        }
      },
      (error) => {
        if (!error.response) {
          error.message = '请检查网络设置'
          return Promise.reject(error)
        }
        switch (error.response.status) {
          case 101:
            break
          case 401:
            store.commit('logout')
            SetGlobalAction.logOut()
            error.message = '登录已过期,请重新登录!'
            break
          case 403:
            error.message = '禁止访问!'
            break
          case 503:
            error.message = '服务器升级中!'
            break
          case 500:
            error.message = error.response.data.msg || '服务内部异常!'
            break
          default:
            error.message = '未知错误'
        }
        return Promise.reject(error)
      }
    )
    return instance
  }
}
