/*
 * @Author: 庞昭昭
 * @Date: 2021-08-20 10:56:55
 * @LastEditTime: 2021-11-23 16:04:47
 * @LastEditors: 徐庆凯
 * @Description: 全局通信信息
 * @FilePath: \micro-demo-vue\src\micro\MicroAppState.ts
 * 记得注释
 */

import LoginResultVo from './microModel/LoginResultVo'
import LogonUserVo from './microModel/LogonUserVo'
import PasswordPolicyVo from './microModel/PasswordPolicyVo'
import TenantVo from './microModel/TenantVo'

export default class MicroAppState {
  loginInvalid: boolean = false // 登录是否失效
  loginInfo: LoginResultVo = new LoginResultVo() // 用户信息
  merchanInfo: TenantVo = new TenantVo() // 当前商户信息
  userInfo: LogonUserVo = new LogonUserVo() // 用户信息
  passwordPolicy: PasswordPolicyVo = new PasswordPolicyVo() // 密码强度策略
  serverDiffTime: number = 0 // 服务器时间与本地时间时间戳差值
  permissionList: string[] = [] // 用户拥有的uni权限列表
}
