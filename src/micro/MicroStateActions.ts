/*
 * @Author: 徐庆凯
 * @Date: 2021-11-18 11:39:51
 * @LastEditTime: 2021-11-23 16:37:34
 * @LastEditors: 徐庆凯
 * @Description: 子应用全局状态管理
 * @FilePath: \micro-demo-vue\src\micro\MicroStateActions.ts
 * 记得注释
 */
import store from '@/store'
import MicroAppState from './MicroAppState'
import LoginResultVo from './microModel/LoginResultVo'
import LogonUserVo from './microModel/LogonUserVo'
import TenantVo from './microModel/TenantVo'

class Actions {
  // 默认值为空 Action
  actions: any = null

  /**
   * 设置 actions(初始化主应用传入信息)
   */
  setActions(actions: any) {
    this.actions = actions
    const loginInfo: LoginResultVo = this.actions.loginInfo || store.state.loginInfo
    const serverDiffTime: number = this.actions.serverDiffTime || 0
    const merchanInfo: TenantVo = this.actions.merchanInfo || store.state.merchanInfo
    const userInfo: LogonUserVo = this.actions.userInfo || store.state.userInfo
    store.commit('serverDiffTime', serverDiffTime)
    store.commit('loginInfo', loginInfo)
    store.commit('merchanInfo', merchanInfo)
    store.commit('userInfo', userInfo)
  }

  /**
   * 父应用状态变更后处理
   */
  onGlobalStateChange(state: MicroAppState, prev: MicroAppState) {
    const loginInfo: LoginResultVo = state.loginInfo || store.state.loginInfo
    const serverDiffTime: number = state.serverDiffTime || 0
    const merchanInfo: TenantVo = state.merchanInfo || store.state.merchanInfo
    const userInfo: LogonUserVo = state.userInfo || store.state.userInfo
    store.commit('serverDiffTime', serverDiffTime)
    store.commit('loginInfo', loginInfo)
    store.commit('merchanInfo', merchanInfo)
    store.commit('userInfo', userInfo)
  }

  /**
   * 设置全局变量
   */
  setGlobalState(args: MicroAppState) {
    if (window.__POWERED_BY_QIANKUN__) {
      return this.actions.setGlobalState(args)
    }
  }
}

const actions = new Actions()
export default actions
