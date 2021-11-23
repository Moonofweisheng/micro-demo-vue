/*
 * @Author: 徐庆凯
 * @Date: 2021-08-27 09:29:02
 * @LastEditTime: 2021-11-23 16:04:43
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \micro-demo-vue\src\micro\microModel\LogonUserVo.ts
 * 记得注释
 */
export default class LogonUserVo {
  // 全名
  fullName: Nullable<string> = null
  // 密码到期截止时刻。
  passwordExpiryTime: Nullable<Date> = null
  /**
   * 密码到期提示时刻。
   *
   * 在此时刻之后，可以提示用户密码即将过期。
   */
  passwordExpiryPromptTime: Nullable<Date> = null
  // 登录时间。
  loginTime: Nullable<Date> = null
}
