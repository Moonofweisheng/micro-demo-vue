import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Fant from "fant-ui";
import "fant-ui/packages/theme-chalk/src/index.scss";
process.env.NODE_ENV === "development" && require("./mock/mock");
Vue.use(Fant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
