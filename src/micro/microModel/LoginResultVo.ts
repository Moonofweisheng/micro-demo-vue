/*
 * @Author: 徐庆凯
 * @Date: 2021-08-26 17:47:25
 * @LastEditTime: 2021-11-22 10:12:59
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \frontend\src\micro\microModel\LoginResultVo.ts
 * 记得注释
 */

export default class LoginResultVo {
  /**
   * 下一步操作。可能的取值有：
   *
   * - RE_INPUT: 登陆失败，需要重新输入。
   *
   * - CHANGE_PASSWORD: 需要立即修改密码，比如用户密码已经过期。
   *
   * - SELECT_TENANT: 用户可以登录进多个租户，需要先选择一个。
   *
   * - ENTER_HOME_PAGE: 登录成功，需要进入首页。
   */
  nextStep: Nullable<string> = null
  /**
   * 一段文字，提示登录失败的原因。
   *
   * 仅当属性“nextStep”为RE_INPUT时有效。
   */
  promptText: Nullable<string> = null
  /**
   * 当登录表单发生变化时，比如连续多次密码错误后启用图形验证码，返回新的登录表单。
   *
   * 仅当属性“nextStep”为RE_INPUT时有效。
   */
  newLoginForm: Nullable<any> = null
  /**
   * 访问令牌，用于访问服务端资源。有效期较短，一般为分钟级。
   *
   * 仅当属性“nextStep”为ENTER_HOME_PAGE时有效。
   */
  accessToken: Nullable<string> = null
  /**
   * 刷新令牌，用于换取新的访问令牌。有效期很长，一般为一天。
   *
   * 仅当属性“nextStep”为ENTER_HOME_PAGE时有效。
   */
  refreshToken: Nullable<string> = null
  /**
   * 临时令牌，用于进行未登录的操作，比如立即修改密码和选择租户。
   *
   * 仅当属性“nextStep”为CHANGE_PASSWORD或者SELECT_TENANT时有效。
   */
  temporaryToken: Nullable<string> = null
  /**
   * 进入属性“homePageUrl”指向页面的访问参数。
   *
   * 仅当属性“nextStep”为ENTER_HOME_PAGE时有效。
   */
  homePageParameters: any
  homePageUrl: Nullable<string> = null
}
