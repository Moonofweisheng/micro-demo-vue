/*
 * @Author: 徐庆凯
 * @Date: 2021-08-27 09:29:02
 * @LastEditTime: 2021-11-23 16:04:44
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \micro-demo-vue\src\micro\microModel\PasswordPolicyVo.ts
 * 记得注释
 */
export default class PasswordPolicyVo {
  // 最小长度，单位字符。取值范围从1到100。
  minLength: Nullable<number> = null
  // 最低强度（等级）。取值范围从1到4，最低的1相当于无限制。
  lowestStrength: Nullable<number> = null
}
