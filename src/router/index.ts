import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import NProgress from "nprogress"; // 顶部进度条
import "nprogress/nprogress.css"; // 进度条样式
NProgress.configure({ showSpinner: false }); // 禁用加载动画
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Index/Index.vue"),
    redirect: "/basicList",
    children: [
      {
        path: "/basicList",
        name: "basicList",
        meta: { title: "基础列表", keepAlive: true, parent: "list" },
        component: () => import("../views/BasicList/BasicList.vue")
      },
      {
        path: "/skuList",
        name: "skuList",
        meta: { title: "商品列表", keepAlive: false, parent: "list" },
        component: () => import("../views/SkuList/SkuList.vue")
      },
      {
        path: "/orderList",
        name: "orderList",
        meta: { title: "商品列表", keepAlive: false, parent: "list" },
        component: () => import("../views/OrderList/OrderList.vue")
      },
      {
        path: "/basicDetail",
        name: "basicDetail",
        meta: { title: "基础详情", keepAlive: false, parent: "detail" },
        component: () => import("../views/BasicDetail/BasicDetail.vue")
      },
      {
        path: "/basicForm",
        name: "basicForm",
        meta: { title: "基础表单", keepAlive: false, parent: "form" },
        component: () => import("../views/BasicForm/BasicForm.vue")
      },
      {
        path: "/complexForm",
        name: "complexForm",
        meta: { title: "复杂表单", keepAlive: false, parent: "form" },
        component: () => import("../views/ComplexForm/ComplexForm.vue")
      },
      {
        path: "/stepForm",
        name: "stepForm",
        meta: { title: "复杂表单", keepAlive: false, parent: "form" },
        component: () => import("../views/StepForm/StepForm.vue")
      },
      {
        path: "/abnormal/:abnormalStatus",
        name: "abnormal",
        meta: { title: "异常页", keepAlive: false, parent: "abnormal" },
        component: () => import("../views/Abnormal/Abnormal.vue")
      },
      {
        path: "/complexDetail",
        name: "complexDetail",
        meta: { title: "复杂详情", keepAlive: false, parent: "complexDetail" },
        component: () => import("../views/ComplexDetail/ComplexDetail.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  return next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
