/*
 * @Author: 徐庆凯
 * @Date: 2021-09-24 10:55:34
 * @LastEditTime: 2021-09-24 11:28:13
 * @LastEditors: 徐庆凯
 * @Description:
 * @FilePath: \micro-demo-vue\src\main.ts
 * 记得注释
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Fant from "fant-ui";
import "fant-ui/packages/theme-chalk/src/index.scss";
process.env.NODE_ENV === "development" && require("./mock/mock");
Vue.use(Fant);
Vue.config.productionTip = false;

let instance: Nullable<Vue> = null;
function render(props: any = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: any) {
  render(props);
}
export async function unmount() {
  instance && instance.$destroy();
  if (instance && instance.$el) {
    instance.$el.innerHTML = "";
  }
  instance = null;
}
