/*
 * @Author: 庞昭昭
 * @Date: 2021-10-09 10:58:20
 * @LastEditTime: 2021-11-23 16:04:50
 * @LastEditors: 徐庆凯
 * @Description: 改变全局状态方法
 * @FilePath: \micro-demo-vue\src\micro\SetGlobalAction.ts
 * 记得注释
 */
import MicroAppState from './MicroAppState'
import MicroStateActions from './MicroStateActions'
export default class SetGlobalAction {
  // 登出
  static logOut() {
    const state: MicroAppState = new MicroAppState()
    state.loginInvalid = true
    MicroStateActions.setGlobalState(state)
  }

  // 更改服务器与客户端时间差
  static serverDiffTime(serverDiffTime: number) {
    const state: MicroAppState = new MicroAppState()
    state.serverDiffTime = serverDiffTime
    MicroStateActions.setGlobalState(state)
  }

  // 更改用户信息
  static loginInfo(loginInfo: any) {
    const state: MicroAppState = new MicroAppState()
    state.loginInfo = loginInfo
    MicroStateActions.setGlobalState(state)
  }
}
