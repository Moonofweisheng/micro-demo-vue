/*
 * @Author: 徐庆凯
 * @Date: 2021-09-24 10:55:34
 * @LastEditTime: 2021-11-23 16:38:18
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \micro-demo-vue\src\shims-vue.d.ts
 * 记得注释
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare type Nullable<T> = T | null // 空
declare module 'fant-ui'
declare module 'mockjs'
declare module 'wangeditor'
declare module 'package.json'
interface Window {
  __POWERED_BY_QIANKUN__?: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string
}
