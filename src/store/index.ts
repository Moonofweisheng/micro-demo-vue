/*
 * @Author: 徐庆凯
 * @Date: 2021-02-19 16:33:37
 * @LastEditTime: 2021-11-23 16:19:09
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \micro-demo-vue\src\store\index.ts
 * 记得注释
 */
import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import LoginResultVo from '@/micro/microModel/LoginResultVo'
import LogonUserVo from '@/micro/microModel/LogonUserVo'
import TenantVo from '@/micro/microModel/TenantVo'

Vue.use(Vuex)
export interface State {
  loginInfo: LoginResultVo // 登录信息
  userInfo: LogonUserVo // 用户信息
  merchanInfo: TenantVo // 当前商户信息
  serverDiffTime: number // 服务器时间与本地时间时间戳差值
}

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: ''
    })
  ],
  state: {
    loginInfo: new LoginResultVo(), // 登录信息
    userInfo: new LogonUserVo(), // 用户信息
    merchanInfo: new TenantVo(), // 当前商户信息
    serverDiffTime: 0 // 服务器时间与本地时间时间戳差值
  },
  mutations: {
    // 登录信息更新
    loginInfo(state: State, loginInfo: LoginResultVo) {
      state.loginInfo = loginInfo
    },
    // 用户信息更新
    userInfo(state: State, userInfo: LogonUserVo) {
      state.userInfo = userInfo
    },
    // 商户信息更新
    merchanInfo(state: State, merchanInfo: TenantVo) {
      state.merchanInfo = merchanInfo
    },
    // 登出
    logout(state: State) {
      state.loginInfo = new LoginResultVo()
    },
    // 计算时间差
    serverDiffTime(state: State, serverDiffTime: number) {
      state.serverDiffTime = serverDiffTime
    }
  },
  actions: {
    // 登录信息更新
    loginInfo(context: { commit: Commit }, loginInfo: LoginResultVo) {
      context.commit('loginInfo', loginInfo)
    },
    // 用户信息更新
    userInfo(context: { commit: Commit }, userInfo: LogonUserVo) {
      context.commit('userInfo', userInfo)
    },
    // 商户信息更新
    merchanInfo(context: { commit: Commit }, merchanInfo: TenantVo) {
      context.commit('merchanInfo', merchanInfo)
    },
    // 登出
    logout(context: { commit: Commit }) {
      context.commit('logout')
    },
    // 计算时间差
    serverDiffTime(context: { commit: Commit }, serverDiffTime: number) {
      context.commit('serverDiffTime', serverDiffTime)
    }
  },
  modules: {}
})
